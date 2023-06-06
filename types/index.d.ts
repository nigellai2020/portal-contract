import { IWallet, BigNumber } from "@ijstech/eth-wallet";
import * as Contracts from "./contracts/index";
export { Contracts };
export interface IDeployOptions {
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
        quorum: number | BigNumber;
        auditDuration: number | BigNumber;
        minAuditRequired: number | BigNumber;
    };
}
export interface IDeployResult {
    token: string;
    domain: string;
    auditor: string;
    project: string;
    audit: string;
}
export declare var DefaultDeployOptions: IDeployOptions;
export declare function deploy(wallet: IWallet, Config: IDeployOptions, onProgress: (msg: string) => void): Promise<IDeployResult>;
declare const _default: {
    Contracts: typeof Contracts;
    deploy: typeof deploy;
    DefaultDeployOptions: IDeployOptions;
};
export default _default;
