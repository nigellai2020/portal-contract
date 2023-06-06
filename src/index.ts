import {IWallet, BigNumber} from "@ijstech/eth-wallet";
import * as Contracts from "./contracts/index";
export {Contracts};

export interface IDeployOptions{
    token: {
        address?: string;
        minter?: string;
        initSupplyTo?: string;
        initSupply?: string;
        totalSupply?: string;
    };
    auditorInfo: {
        cooldownPeriod: number;
        auditors?: string[];
    };
    projectInfo: {
        admins: string[];
    };
    audit: {
        quorum: number|BigNumber;
        auditDuration: number|BigNumber;
        minAuditRequired: number|BigNumber;
    };
};
export interface IDeployResult{
    token: string;
    domain: string;
    auditor: string;
    project: string;
    audit: string;
}
export var DefaultDeployOptions: IDeployOptions = {
    token: {
        address: '',
        minter: '',
        initSupplyTo: '',
        initSupply: '0',
        totalSupply: '100000000'
    },
    auditorInfo: {
        cooldownPeriod: 60,
        auditors: []
    },
    projectInfo: {
        admins: []
    },
    audit: {
        quorum: 500, // base 10e3
        auditDuration: 14 * 24*60*60,  // 14 days
        minAuditRequired: 3
    }
};
async function deployScom(wallet: IWallet, Config: IDeployOptions): Promise<string> {
    let scomOptions = Config.token;
    let token = new Contracts.Scom(wallet);  
    await token.deploy({
        minter: scomOptions.minter,
        initSupplyTo: scomOptions.initSupplyTo, 
        initSupply: wallet.utils.toDecimals(scomOptions.initSupply), 
        totalSupply: wallet.utils.toDecimals(scomOptions.totalSupply)
    })  
    return token.address;
}

async function deployAuditorInfo(wallet: IWallet, token: string, Config: IDeployOptions): Promise<string> {
    let auditorInfoOptions = Config.auditorInfo;
    let auditorInfo = new Contracts.AuditorInfo(wallet);
    let address = await auditorInfo.deploy({
        token,
        cooldownPeriod: auditorInfoOptions.cooldownPeriod
    });
    for (let i = 0; i < auditorInfoOptions.auditors.length; i++) {
        await auditorInfo.addAuditor(auditorInfoOptions.auditors[i]);
    }
    return address;
}

async function deployProjectInfo(wallet: IWallet, token: string, auditorInfo: string, Config: IDeployOptions): Promise<string> {

    let projectInfoOptions = Config.projectInfo;
    let projectInfo = new Contracts.ProjectInfo(wallet);
    let address = await projectInfo.deploy({
        auditorInfo,
        token
    });
    for (let i = 0; i < projectInfoOptions.admins.length; i++) {
        await projectInfo.permit(projectInfoOptions.admins[i]);
    }
    return address;
}

async function deployDomainInfo(wallet: IWallet, token: string) {
    let domainInfo = new Contracts.DomainInfo(wallet);
    return await domainInfo.deploy(token);
}

async function deployAuditInfo(wallet: IWallet, projectInfo: string, auditorInfo: string, Config: IDeployOptions) {
    let auditInfo = new Contracts.AuditInfo(wallet);
    return await auditInfo.deploy({projectInfo, auditorInfo, ...Config.audit});
}

export async function deploy(wallet: IWallet, Config: IDeployOptions, onProgress:(msg:string)=>void): Promise<IDeployResult> {
    let result: IDeployResult = {
        token: '',
        domain: '',
        auditor: '',
        project: '',
        audit: '',
    };
    if (!Config.token.initSupplyTo){
        onProgress('ERROR: token.initSupplyTo not defined!')
        return;
    }
    onProgress('1/5 Deploy token contract')
    if (!Config.token?.address){        
        result.token = await deployScom(wallet, Config);
    }
    else
        result.token = Config.token.address;
    onProgress('2/5 Deploy domain contract')
    result.domain = await deployDomainInfo(wallet, result.token);
    onProgress('3/5 Deploy auditor contract')
    result.auditor = await deployAuditorInfo(wallet, result.token, Config);
    onProgress('4/5 Deploy project contract')
    result.project = await deployProjectInfo(wallet, result.token, result.auditor, Config);
    onProgress('5/5 Deploy audit contract')
    result.audit = await deployAuditInfo(wallet, result.project, result.auditor, Config)
    return result;
}
export default {
    Contracts,
    deploy,
    DefaultDeployOptions
};