import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./ProjectInfo.json";
export interface IDeployParams {token:string;auditorInfo:string}
export interface IAddPackageAdminParams {packageId:number|BigNumber;admin:string}
export interface IAddProjectAdminParams {projectId:number|BigNumber;admin:string}
export interface INewPackageParams {projectId:number|BigNumber;name:string;category:string;ipfsCid:string}
export interface INewPackageVersionParams {projectId:number|BigNumber;packageId:number|BigNumber;version:{major:number|BigNumber,minor:number|BigNumber,patch:number|BigNumber};ipfsCid:string}
export interface INewProjectParams {name:string;ipfsCid:string}
export interface IOwnersProjectsParams {param1:string;param2:number|BigNumber}
export interface IOwnersProjectsInvParams {param1:string;param2:number|BigNumber}
export interface IPackageAdminParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IPackageAdminInvParams {param1:number|BigNumber;param2:string}
export interface IPackageNameParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IPackageNameInvParams {param1:number|BigNumber;param2:string}
export interface IPackageVersionsListParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IProjectAdminParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IProjectAdminInvParams {param1:number|BigNumber;param2:string}
export interface IProjectBackerBalanceParams {param1:string;param2:number|BigNumber}
export interface IProjectPackagesParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IProjectPackagesInvParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IRemovePackageAdminParams {packageId:number|BigNumber;admin:string}
export interface IRemoveProjectAdminParams {projectId:number|BigNumber;admin:string}
export interface IStakeParams {projectId:number|BigNumber;amount:number|BigNumber}
export interface ITransferProjectOwnershipParams {projectId:number|BigNumber;newOwner:string}
export interface IUnstakeParams {projectId:number|BigNumber;amount:number|BigNumber}
export interface IUpdatePackageIpfsCidParams {projectId:number|BigNumber;packageId:number|BigNumber;ipfsCid:string}
export interface IUpdatePackageNameParams {projectId:number|BigNumber;packageId:number|BigNumber;name:string}
export interface IUpdatePackageVersionIpfsCidParams {packageVersionId:number|BigNumber;ipfsCid:string}
export interface IUpdateProjectIpfsCidParams {projectId:number|BigNumber;ipfsCid:string}
export interface IUpdateProjectNameParams {projectId:number|BigNumber;name:string}
export class ProjectInfo extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.token,params.auditorInfo], options);
    }
    parseAddAdminEvent(receipt: TransactionReceipt): ProjectInfo.AddAdminEvent[]{
        return this.parseEvents(receipt, "AddAdmin").map(e=>this.decodeAddAdminEvent(e));
    }
    decodeAddAdminEvent(event: Event): ProjectInfo.AddAdminEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            admin: result.admin,
            _event: event
        };
    }
    parseAddPackageAdminEvent(receipt: TransactionReceipt): ProjectInfo.AddPackageAdminEvent[]{
        return this.parseEvents(receipt, "AddPackageAdmin").map(e=>this.decodeAddPackageAdminEvent(e));
    }
    decodeAddPackageAdminEvent(event: Event): ProjectInfo.AddPackageAdminEvent{
        let result = event.data;
        return {
            packageId: new BigNumber(result.packageId),
            admin: result.admin,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): ProjectInfo.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): ProjectInfo.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): ProjectInfo.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): ProjectInfo.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseNewPackageEvent(receipt: TransactionReceipt): ProjectInfo.NewPackageEvent[]{
        return this.parseEvents(receipt, "NewPackage").map(e=>this.decodeNewPackageEvent(e));
    }
    decodeNewPackageEvent(event: Event): ProjectInfo.NewPackageEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            packageId: new BigNumber(result.packageId),
            name: result.name,
            ipfsCid: result.ipfsCid,
            _event: event
        };
    }
    parseNewPackageVersionEvent(receipt: TransactionReceipt): ProjectInfo.NewPackageVersionEvent[]{
        return this.parseEvents(receipt, "NewPackageVersion").map(e=>this.decodeNewPackageVersionEvent(e));
    }
    decodeNewPackageVersionEvent(event: Event): ProjectInfo.NewPackageVersionEvent{
        let result = event.data;
        return {
            packageId: new BigNumber(result.packageId),
            packageVersionId: new BigNumber(result.packageVersionId),
            version: 
            {
                major: new BigNumber(result.version.major),
                minor: new BigNumber(result.version.minor),
                patch: new BigNumber(result.version.patch)
            }
            ,
            _event: event
        };
    }
    parseNewProjectEvent(receipt: TransactionReceipt): ProjectInfo.NewProjectEvent[]{
        return this.parseEvents(receipt, "NewProject").map(e=>this.decodeNewProjectEvent(e));
    }
    decodeNewProjectEvent(event: Event): ProjectInfo.NewProjectEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            owner: result.owner,
            name: result.name,
            ipfsCid: result.ipfsCid,
            _event: event
        };
    }
    parseRemoveAdminEvent(receipt: TransactionReceipt): ProjectInfo.RemoveAdminEvent[]{
        return this.parseEvents(receipt, "RemoveAdmin").map(e=>this.decodeRemoveAdminEvent(e));
    }
    decodeRemoveAdminEvent(event: Event): ProjectInfo.RemoveAdminEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            admin: result.admin,
            _event: event
        };
    }
    parseRemovePackageAdminEvent(receipt: TransactionReceipt): ProjectInfo.RemovePackageAdminEvent[]{
        return this.parseEvents(receipt, "RemovePackageAdmin").map(e=>this.decodeRemovePackageAdminEvent(e));
    }
    decodeRemovePackageAdminEvent(event: Event): ProjectInfo.RemovePackageAdminEvent{
        let result = event.data;
        return {
            packageId: new BigNumber(result.packageId),
            admin: result.admin,
            _event: event
        };
    }
    parseSetPackageVersionStatusEvent(receipt: TransactionReceipt): ProjectInfo.SetPackageVersionStatusEvent[]{
        return this.parseEvents(receipt, "SetPackageVersionStatus").map(e=>this.decodeSetPackageVersionStatusEvent(e));
    }
    decodeSetPackageVersionStatusEvent(event: Event): ProjectInfo.SetPackageVersionStatusEvent{
        let result = event.data;
        return {
            packageId: new BigNumber(result.packageId),
            packageVersionId: new BigNumber(result.packageVersionId),
            status: new BigNumber(result.status),
            _event: event
        };
    }
    parseStakeEvent(receipt: TransactionReceipt): ProjectInfo.StakeEvent[]{
        return this.parseEvents(receipt, "Stake").map(e=>this.decodeStakeEvent(e));
    }
    decodeStakeEvent(event: Event): ProjectInfo.StakeEvent{
        let result = event.data;
        return {
            sender: result.sender,
            projectId: new BigNumber(result.projectId),
            amount: new BigNumber(result.amount),
            newBalance: new BigNumber(result.newBalance),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): ProjectInfo.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): ProjectInfo.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): ProjectInfo.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): ProjectInfo.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferProjectOwnershipEvent(receipt: TransactionReceipt): ProjectInfo.TransferProjectOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferProjectOwnership").map(e=>this.decodeTransferProjectOwnershipEvent(e));
    }
    decodeTransferProjectOwnershipEvent(event: Event): ProjectInfo.TransferProjectOwnershipEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            newOwner: result.newOwner,
            _event: event
        };
    }
    parseUnstakeEvent(receipt: TransactionReceipt): ProjectInfo.UnstakeEvent[]{
        return this.parseEvents(receipt, "Unstake").map(e=>this.decodeUnstakeEvent(e));
    }
    decodeUnstakeEvent(event: Event): ProjectInfo.UnstakeEvent{
        let result = event.data;
        return {
            sender: result.sender,
            projectId: new BigNumber(result.projectId),
            amount: new BigNumber(result.amount),
            newBalance: new BigNumber(result.newBalance),
            _event: event
        };
    }
    parseUpdatePackageIpfsCidEvent(receipt: TransactionReceipt): ProjectInfo.UpdatePackageIpfsCidEvent[]{
        return this.parseEvents(receipt, "UpdatePackageIpfsCid").map(e=>this.decodeUpdatePackageIpfsCidEvent(e));
    }
    decodeUpdatePackageIpfsCidEvent(event: Event): ProjectInfo.UpdatePackageIpfsCidEvent{
        let result = event.data;
        return {
            packageId: new BigNumber(result.packageId),
            ipfsCid: result.ipfsCid,
            _event: event
        };
    }
    parseUpdatePackageNameEvent(receipt: TransactionReceipt): ProjectInfo.UpdatePackageNameEvent[]{
        return this.parseEvents(receipt, "UpdatePackageName").map(e=>this.decodeUpdatePackageNameEvent(e));
    }
    decodeUpdatePackageNameEvent(event: Event): ProjectInfo.UpdatePackageNameEvent{
        let result = event.data;
        return {
            packageId: new BigNumber(result.packageId),
            name: result.name,
            _event: event
        };
    }
    parseUpdatePackageVersionIpfsCidEvent(receipt: TransactionReceipt): ProjectInfo.UpdatePackageVersionIpfsCidEvent[]{
        return this.parseEvents(receipt, "UpdatePackageVersionIpfsCid").map(e=>this.decodeUpdatePackageVersionIpfsCidEvent(e));
    }
    decodeUpdatePackageVersionIpfsCidEvent(event: Event): ProjectInfo.UpdatePackageVersionIpfsCidEvent{
        let result = event.data;
        return {
            packageId: new BigNumber(result.packageId),
            packageVersionId: new BigNumber(result.packageVersionId),
            ipfsCid: result.ipfsCid,
            _event: event
        };
    }
    parseUpdateProjectIpfsCidEvent(receipt: TransactionReceipt): ProjectInfo.UpdateProjectIpfsCidEvent[]{
        return this.parseEvents(receipt, "UpdateProjectIpfsCid").map(e=>this.decodeUpdateProjectIpfsCidEvent(e));
    }
    decodeUpdateProjectIpfsCidEvent(event: Event): ProjectInfo.UpdateProjectIpfsCidEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            ipfsCid: result.ipfsCid,
            _event: event
        };
    }
    parseUpdateProjectNameEvent(receipt: TransactionReceipt): ProjectInfo.UpdateProjectNameEvent[]{
        return this.parseEvents(receipt, "UpdateProjectName").map(e=>this.decodeUpdateProjectNameEvent(e));
    }
    decodeUpdateProjectNameEvent(event: Event): ProjectInfo.UpdateProjectNameEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            name: result.name,
            _event: event
        };
    }
    addPackageAdmin: {
        (params: IAddPackageAdminParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddPackageAdminParams, options?: TransactionOptions) => Promise<void>;
    }
    addProjectAdmin: {
        (params: IAddProjectAdminParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddProjectAdminParams, options?: TransactionOptions) => Promise<void>;
    }
    auditorInfo: {
        (options?: TransactionOptions): Promise<string>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    isPermitted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    newPackage: {
        (params: INewPackageParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewPackageParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    newPackageVersion: {
        (params: INewPackageVersionParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewPackageVersionParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    newProject: {
        (params: INewProjectParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewProjectParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    ownersProjects: {
        (params: IOwnersProjectsParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    ownersProjectsInv: {
        (params: IOwnersProjectsInvParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    ownersProjectsLength: {
        (owner:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    packageAdmin: {
        (params: IPackageAdminParams, options?: TransactionOptions): Promise<string>;
    }
    packageAdminInv: {
        (params: IPackageAdminInvParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    packageAdminLength: {
        (packageId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    packageName: {
        (params: IPackageNameParams, options?: TransactionOptions): Promise<string>;
    }
    packageNameInv: {
        (params: IPackageNameInvParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    packageVersions: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<{packageId:BigNumber,version:{major:BigNumber,minor:BigNumber,patch:BigNumber},status:BigNumber,ipfsCid:string,timestamp:BigNumber}>;
    }
    packageVersionsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    packageVersionsList: {
        (params: IPackageVersionsListParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    packageVersionsListLength: {
        (packageId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    packages: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<{projectId:BigNumber,currVersionIndex:BigNumber,ipfsCid:string,category:string,status:BigNumber}>;
    }
    packagesLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    permit: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    projectAdmin: {
        (params: IProjectAdminParams, options?: TransactionOptions): Promise<string>;
    }
    projectAdminInv: {
        (params: IProjectAdminInvParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    projectAdminLength: {
        (projectId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    projectBackerBalance: {
        (params: IProjectBackerBalanceParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    projectBalance: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    projectCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    projectIpfsCid: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    projectName: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    projectNameInv: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    projectNewOwner: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    projectOwner: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    projectPackages: {
        (params: IProjectPackagesParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    projectPackagesInv: {
        (params: IProjectPackagesInvParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    projectPackagesLength: {
        (projectId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    removePackageAdmin: {
        (params: IRemovePackageAdminParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemovePackageAdminParams, options?: TransactionOptions) => Promise<void>;
    }
    removeProjectAdmin: {
        (params: IRemoveProjectAdminParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveProjectAdminParams, options?: TransactionOptions) => Promise<void>;
    }
    setPackageVersionToAuditing: {
        (packageVersionId:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (packageVersionId:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    stake: {
        (params: IStakeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IStakeParams, options?: TransactionOptions) => Promise<void>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    takeProjectOwnership: {
        (projectId:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (projectId:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    token: {
        (options?: TransactionOptions): Promise<string>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    transferProjectOwnership: {
        (params: ITransferProjectOwnershipParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferProjectOwnershipParams, options?: TransactionOptions) => Promise<void>;
    }
    unstake: {
        (params: IUnstakeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnstakeParams, options?: TransactionOptions) => Promise<void>;
    }
    updatePackageIpfsCid: {
        (params: IUpdatePackageIpfsCidParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdatePackageIpfsCidParams, options?: TransactionOptions) => Promise<void>;
    }
    updatePackageName: {
        (params: IUpdatePackageNameParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdatePackageNameParams, options?: TransactionOptions) => Promise<void>;
    }
    updatePackageVersionIpfsCid: {
        (params: IUpdatePackageVersionIpfsCidParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdatePackageVersionIpfsCidParams, options?: TransactionOptions) => Promise<void>;
    }
    updateProjectIpfsCid: {
        (params: IUpdateProjectIpfsCidParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateProjectIpfsCidParams, options?: TransactionOptions) => Promise<void>;
    }
    updateProjectName: {
        (params: IUpdateProjectNameParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateProjectNameParams, options?: TransactionOptions) => Promise<void>;
    }
    voidPackageVersion: {
        (packageVersionId:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (packageVersionId:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let auditorInfo_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('auditorInfo',[],options);
            return result;
        }
        this.auditorInfo = auditorInfo_call
        let isPermitted_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1],options);
            return result;
        }
        this.isPermitted = isPermitted_call
        let newOwner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('newOwner',[],options);
            return result;
        }
        this.newOwner = newOwner_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let ownersProjectsParams = (params: IOwnersProjectsParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let ownersProjects_call = async (params: IOwnersProjectsParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('ownersProjects',ownersProjectsParams(params),options);
            return new BigNumber(result);
        }
        this.ownersProjects = ownersProjects_call
        let ownersProjectsInvParams = (params: IOwnersProjectsInvParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let ownersProjectsInv_call = async (params: IOwnersProjectsInvParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('ownersProjectsInv',ownersProjectsInvParams(params),options);
            return new BigNumber(result);
        }
        this.ownersProjectsInv = ownersProjectsInv_call
        let ownersProjectsLength_call = async (owner:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('ownersProjectsLength',[owner],options);
            return new BigNumber(result);
        }
        this.ownersProjectsLength = ownersProjectsLength_call
        let packageAdminParams = (params: IPackageAdminParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let packageAdmin_call = async (params: IPackageAdminParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('packageAdmin',packageAdminParams(params),options);
            return result;
        }
        this.packageAdmin = packageAdmin_call
        let packageAdminInvParams = (params: IPackageAdminInvParams) => [this.wallet.utils.toString(params.param1),params.param2];
        let packageAdminInv_call = async (params: IPackageAdminInvParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('packageAdminInv',packageAdminInvParams(params),options);
            return new BigNumber(result);
        }
        this.packageAdminInv = packageAdminInv_call
        let packageAdminLength_call = async (packageId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('packageAdminLength',[this.wallet.utils.toString(packageId)],options);
            return new BigNumber(result);
        }
        this.packageAdminLength = packageAdminLength_call
        let packageNameParams = (params: IPackageNameParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let packageName_call = async (params: IPackageNameParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('packageName',packageNameParams(params),options);
            return result;
        }
        this.packageName = packageName_call
        let packageNameInvParams = (params: IPackageNameInvParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.stringToBytes(params.param2)];
        let packageNameInv_call = async (params: IPackageNameInvParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('packageNameInv',packageNameInvParams(params),options);
            return new BigNumber(result);
        }
        this.packageNameInv = packageNameInv_call
        let packageVersions_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<{packageId:BigNumber,version:{major:BigNumber,minor:BigNumber,patch:BigNumber},status:BigNumber,ipfsCid:string,timestamp:BigNumber}> => {
            let result = await this.call('packageVersions',[this.wallet.utils.toString(param1)],options);
            return {
                packageId: new BigNumber(result.packageId),
                version: 
                {
                    major: new BigNumber(result.version.major),
                    minor: new BigNumber(result.version.minor),
                    patch: new BigNumber(result.version.patch)
                }
                ,
                status: new BigNumber(result.status),
                ipfsCid: result.ipfsCid,
                timestamp: new BigNumber(result.timestamp)
            };
        }
        this.packageVersions = packageVersions_call
        let packageVersionsLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('packageVersionsLength',[],options);
            return new BigNumber(result);
        }
        this.packageVersionsLength = packageVersionsLength_call
        let packageVersionsListParams = (params: IPackageVersionsListParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let packageVersionsList_call = async (params: IPackageVersionsListParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('packageVersionsList',packageVersionsListParams(params),options);
            return new BigNumber(result);
        }
        this.packageVersionsList = packageVersionsList_call
        let packageVersionsListLength_call = async (packageId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('packageVersionsListLength',[this.wallet.utils.toString(packageId)],options);
            return new BigNumber(result);
        }
        this.packageVersionsListLength = packageVersionsListLength_call
        let packages_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<{projectId:BigNumber,currVersionIndex:BigNumber,ipfsCid:string,category:string,status:BigNumber}> => {
            let result = await this.call('packages',[this.wallet.utils.toString(param1)],options);
            return {
                projectId: new BigNumber(result.projectId),
                currVersionIndex: new BigNumber(result.currVersionIndex),
                ipfsCid: result.ipfsCid,
                category: result.category,
                status: new BigNumber(result.status)
            };
        }
        this.packages = packages_call
        let packagesLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('packagesLength',[],options);
            return new BigNumber(result);
        }
        this.packagesLength = packagesLength_call
        let projectAdminParams = (params: IProjectAdminParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let projectAdmin_call = async (params: IProjectAdminParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('projectAdmin',projectAdminParams(params),options);
            return result;
        }
        this.projectAdmin = projectAdmin_call
        let projectAdminInvParams = (params: IProjectAdminInvParams) => [this.wallet.utils.toString(params.param1),params.param2];
        let projectAdminInv_call = async (params: IProjectAdminInvParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('projectAdminInv',projectAdminInvParams(params),options);
            return new BigNumber(result);
        }
        this.projectAdminInv = projectAdminInv_call
        let projectAdminLength_call = async (projectId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('projectAdminLength',[this.wallet.utils.toString(projectId)],options);
            return new BigNumber(result);
        }
        this.projectAdminLength = projectAdminLength_call
        let projectBackerBalanceParams = (params: IProjectBackerBalanceParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let projectBackerBalance_call = async (params: IProjectBackerBalanceParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('projectBackerBalance',projectBackerBalanceParams(params),options);
            return new BigNumber(result);
        }
        this.projectBackerBalance = projectBackerBalance_call
        let projectBalance_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('projectBalance',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.projectBalance = projectBalance_call
        let projectCount_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('projectCount',[],options);
            return new BigNumber(result);
        }
        this.projectCount = projectCount_call
        let projectIpfsCid_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('projectIpfsCid',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.projectIpfsCid = projectIpfsCid_call
        let projectName_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('projectName',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.projectName = projectName_call
        let projectNameInv_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('projectNameInv',[this.wallet.utils.stringToBytes(param1)],options);
            return new BigNumber(result);
        }
        this.projectNameInv = projectNameInv_call
        let projectNewOwner_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('projectNewOwner',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.projectNewOwner = projectNewOwner_call
        let projectOwner_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('projectOwner',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.projectOwner = projectOwner_call
        let projectPackagesParams = (params: IProjectPackagesParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let projectPackages_call = async (params: IProjectPackagesParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('projectPackages',projectPackagesParams(params),options);
            return new BigNumber(result);
        }
        this.projectPackages = projectPackages_call
        let projectPackagesInvParams = (params: IProjectPackagesInvParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let projectPackagesInv_call = async (params: IProjectPackagesInvParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('projectPackagesInv',projectPackagesInvParams(params),options);
            return new BigNumber(result);
        }
        this.projectPackagesInv = projectPackagesInv_call
        let projectPackagesLength_call = async (projectId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('projectPackagesLength',[this.wallet.utils.toString(projectId)],options);
            return new BigNumber(result);
        }
        this.projectPackagesLength = projectPackagesLength_call
        let token_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('token',[],options);
            return result;
        }
        this.token = token_call
        let addPackageAdminParams = (params: IAddPackageAdminParams) => [this.wallet.utils.toString(params.packageId),params.admin];
        let addPackageAdmin_send = async (params: IAddPackageAdminParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addPackageAdmin',addPackageAdminParams(params),options);
            return result;
        }
        let addPackageAdmin_call = async (params: IAddPackageAdminParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addPackageAdmin',addPackageAdminParams(params),options);
            return;
        }
        this.addPackageAdmin = Object.assign(addPackageAdmin_send, {
            call:addPackageAdmin_call
        });
        let addProjectAdminParams = (params: IAddProjectAdminParams) => [this.wallet.utils.toString(params.projectId),params.admin];
        let addProjectAdmin_send = async (params: IAddProjectAdminParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addProjectAdmin',addProjectAdminParams(params),options);
            return result;
        }
        let addProjectAdmin_call = async (params: IAddProjectAdminParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addProjectAdmin',addProjectAdminParams(params),options);
            return;
        }
        this.addProjectAdmin = Object.assign(addProjectAdmin_send, {
            call:addProjectAdmin_call
        });
        let deny_send = async (user:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('deny',[user],options);
            return result;
        }
        let deny_call = async (user:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('deny',[user],options);
            return;
        }
        this.deny = Object.assign(deny_send, {
            call:deny_call
        });
        let newPackageParams = (params: INewPackageParams) => [this.wallet.utils.toString(params.projectId),params.name,this.wallet.utils.stringToBytes32(params.category),params.ipfsCid];
        let newPackage_send = async (params: INewPackageParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('newPackage',newPackageParams(params),options);
            return result;
        }
        let newPackage_call = async (params: INewPackageParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('newPackage',newPackageParams(params),options);
            return new BigNumber(result);
        }
        this.newPackage = Object.assign(newPackage_send, {
            call:newPackage_call
        });
        let newPackageVersionParams = (params: INewPackageVersionParams) => [this.wallet.utils.toString(params.projectId),this.wallet.utils.toString(params.packageId),[this.wallet.utils.toString(params.version.major),this.wallet.utils.toString(params.version.minor),this.wallet.utils.toString(params.version.patch)],params.ipfsCid];
        let newPackageVersion_send = async (params: INewPackageVersionParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('newPackageVersion',newPackageVersionParams(params),options);
            return result;
        }
        let newPackageVersion_call = async (params: INewPackageVersionParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('newPackageVersion',newPackageVersionParams(params),options);
            return new BigNumber(result);
        }
        this.newPackageVersion = Object.assign(newPackageVersion_send, {
            call:newPackageVersion_call
        });
        let newProjectParams = (params: INewProjectParams) => [params.name,params.ipfsCid];
        let newProject_send = async (params: INewProjectParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('newProject',newProjectParams(params),options);
            return result;
        }
        let newProject_call = async (params: INewProjectParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('newProject',newProjectParams(params),options);
            return new BigNumber(result);
        }
        this.newProject = Object.assign(newProject_send, {
            call:newProject_call
        });
        let permit_send = async (user:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('permit',[user],options);
            return result;
        }
        let permit_call = async (user:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('permit',[user],options);
            return;
        }
        this.permit = Object.assign(permit_send, {
            call:permit_call
        });
        let removePackageAdminParams = (params: IRemovePackageAdminParams) => [this.wallet.utils.toString(params.packageId),params.admin];
        let removePackageAdmin_send = async (params: IRemovePackageAdminParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removePackageAdmin',removePackageAdminParams(params),options);
            return result;
        }
        let removePackageAdmin_call = async (params: IRemovePackageAdminParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('removePackageAdmin',removePackageAdminParams(params),options);
            return;
        }
        this.removePackageAdmin = Object.assign(removePackageAdmin_send, {
            call:removePackageAdmin_call
        });
        let removeProjectAdminParams = (params: IRemoveProjectAdminParams) => [this.wallet.utils.toString(params.projectId),params.admin];
        let removeProjectAdmin_send = async (params: IRemoveProjectAdminParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeProjectAdmin',removeProjectAdminParams(params),options);
            return result;
        }
        let removeProjectAdmin_call = async (params: IRemoveProjectAdminParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('removeProjectAdmin',removeProjectAdminParams(params),options);
            return;
        }
        this.removeProjectAdmin = Object.assign(removeProjectAdmin_send, {
            call:removeProjectAdmin_call
        });
        let setPackageVersionToAuditing_send = async (packageVersionId:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setPackageVersionToAuditing',[this.wallet.utils.toString(packageVersionId)],options);
            return result;
        }
        let setPackageVersionToAuditing_call = async (packageVersionId:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setPackageVersionToAuditing',[this.wallet.utils.toString(packageVersionId)],options);
            return;
        }
        this.setPackageVersionToAuditing = Object.assign(setPackageVersionToAuditing_send, {
            call:setPackageVersionToAuditing_call
        });
        let stakeParams = (params: IStakeParams) => [this.wallet.utils.toString(params.projectId),this.wallet.utils.toString(params.amount)];
        let stake_send = async (params: IStakeParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('stake',stakeParams(params),options);
            return result;
        }
        let stake_call = async (params: IStakeParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('stake',stakeParams(params),options);
            return;
        }
        this.stake = Object.assign(stake_send, {
            call:stake_call
        });
        let takeOwnership_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('takeOwnership',[],options);
            return result;
        }
        let takeOwnership_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('takeOwnership',[],options);
            return;
        }
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call:takeOwnership_call
        });
        let takeProjectOwnership_send = async (projectId:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('takeProjectOwnership',[this.wallet.utils.toString(projectId)],options);
            return result;
        }
        let takeProjectOwnership_call = async (projectId:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('takeProjectOwnership',[this.wallet.utils.toString(projectId)],options);
            return;
        }
        this.takeProjectOwnership = Object.assign(takeProjectOwnership_send, {
            call:takeProjectOwnership_call
        });
        let transferOwnership_send = async (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner],options);
            return result;
        }
        let transferOwnership_call = async (newOwner:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner],options);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
        let transferProjectOwnershipParams = (params: ITransferProjectOwnershipParams) => [this.wallet.utils.toString(params.projectId),params.newOwner];
        let transferProjectOwnership_send = async (params: ITransferProjectOwnershipParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferProjectOwnership',transferProjectOwnershipParams(params),options);
            return result;
        }
        let transferProjectOwnership_call = async (params: ITransferProjectOwnershipParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferProjectOwnership',transferProjectOwnershipParams(params),options);
            return;
        }
        this.transferProjectOwnership = Object.assign(transferProjectOwnership_send, {
            call:transferProjectOwnership_call
        });
        let unstakeParams = (params: IUnstakeParams) => [this.wallet.utils.toString(params.projectId),this.wallet.utils.toString(params.amount)];
        let unstake_send = async (params: IUnstakeParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unstake',unstakeParams(params),options);
            return result;
        }
        let unstake_call = async (params: IUnstakeParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('unstake',unstakeParams(params),options);
            return;
        }
        this.unstake = Object.assign(unstake_send, {
            call:unstake_call
        });
        let updatePackageIpfsCidParams = (params: IUpdatePackageIpfsCidParams) => [this.wallet.utils.toString(params.projectId),this.wallet.utils.toString(params.packageId),params.ipfsCid];
        let updatePackageIpfsCid_send = async (params: IUpdatePackageIpfsCidParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updatePackageIpfsCid',updatePackageIpfsCidParams(params),options);
            return result;
        }
        let updatePackageIpfsCid_call = async (params: IUpdatePackageIpfsCidParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updatePackageIpfsCid',updatePackageIpfsCidParams(params),options);
            return;
        }
        this.updatePackageIpfsCid = Object.assign(updatePackageIpfsCid_send, {
            call:updatePackageIpfsCid_call
        });
        let updatePackageNameParams = (params: IUpdatePackageNameParams) => [this.wallet.utils.toString(params.projectId),this.wallet.utils.toString(params.packageId),params.name];
        let updatePackageName_send = async (params: IUpdatePackageNameParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updatePackageName',updatePackageNameParams(params),options);
            return result;
        }
        let updatePackageName_call = async (params: IUpdatePackageNameParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updatePackageName',updatePackageNameParams(params),options);
            return;
        }
        this.updatePackageName = Object.assign(updatePackageName_send, {
            call:updatePackageName_call
        });
        let updatePackageVersionIpfsCidParams = (params: IUpdatePackageVersionIpfsCidParams) => [this.wallet.utils.toString(params.packageVersionId),params.ipfsCid];
        let updatePackageVersionIpfsCid_send = async (params: IUpdatePackageVersionIpfsCidParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updatePackageVersionIpfsCid',updatePackageVersionIpfsCidParams(params),options);
            return result;
        }
        let updatePackageVersionIpfsCid_call = async (params: IUpdatePackageVersionIpfsCidParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updatePackageVersionIpfsCid',updatePackageVersionIpfsCidParams(params),options);
            return;
        }
        this.updatePackageVersionIpfsCid = Object.assign(updatePackageVersionIpfsCid_send, {
            call:updatePackageVersionIpfsCid_call
        });
        let updateProjectIpfsCidParams = (params: IUpdateProjectIpfsCidParams) => [this.wallet.utils.toString(params.projectId),params.ipfsCid];
        let updateProjectIpfsCid_send = async (params: IUpdateProjectIpfsCidParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateProjectIpfsCid',updateProjectIpfsCidParams(params),options);
            return result;
        }
        let updateProjectIpfsCid_call = async (params: IUpdateProjectIpfsCidParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateProjectIpfsCid',updateProjectIpfsCidParams(params),options);
            return;
        }
        this.updateProjectIpfsCid = Object.assign(updateProjectIpfsCid_send, {
            call:updateProjectIpfsCid_call
        });
        let updateProjectNameParams = (params: IUpdateProjectNameParams) => [this.wallet.utils.toString(params.projectId),params.name];
        let updateProjectName_send = async (params: IUpdateProjectNameParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateProjectName',updateProjectNameParams(params),options);
            return result;
        }
        let updateProjectName_call = async (params: IUpdateProjectNameParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateProjectName',updateProjectNameParams(params),options);
            return;
        }
        this.updateProjectName = Object.assign(updateProjectName_send, {
            call:updateProjectName_call
        });
        let voidPackageVersion_send = async (packageVersionId:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('voidPackageVersion',[this.wallet.utils.toString(packageVersionId)],options);
            return result;
        }
        let voidPackageVersion_call = async (packageVersionId:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('voidPackageVersion',[this.wallet.utils.toString(packageVersionId)],options);
            return;
        }
        this.voidPackageVersion = Object.assign(voidPackageVersion_send, {
            call:voidPackageVersion_call
        });
    }
}
export module ProjectInfo{
    export interface AddAdminEvent {projectId:BigNumber,admin:string,_event:Event}
    export interface AddPackageAdminEvent {packageId:BigNumber,admin:string,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface NewPackageEvent {projectId:BigNumber,packageId:BigNumber,name:string,ipfsCid:string,_event:Event}
    export interface NewPackageVersionEvent {packageId:BigNumber,packageVersionId:BigNumber,version:{major:BigNumber,minor:BigNumber,patch:BigNumber},_event:Event}
    export interface NewProjectEvent {projectId:BigNumber,owner:string,name:string,ipfsCid:string,_event:Event}
    export interface RemoveAdminEvent {projectId:BigNumber,admin:string,_event:Event}
    export interface RemovePackageAdminEvent {packageId:BigNumber,admin:string,_event:Event}
    export interface SetPackageVersionStatusEvent {packageId:BigNumber,packageVersionId:BigNumber,status:BigNumber,_event:Event}
    export interface StakeEvent {sender:string,projectId:BigNumber,amount:BigNumber,newBalance:BigNumber,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface TransferProjectOwnershipEvent {projectId:BigNumber,newOwner:string,_event:Event}
    export interface UnstakeEvent {sender:string,projectId:BigNumber,amount:BigNumber,newBalance:BigNumber,_event:Event}
    export interface UpdatePackageIpfsCidEvent {packageId:BigNumber,ipfsCid:string,_event:Event}
    export interface UpdatePackageNameEvent {packageId:BigNumber,name:string,_event:Event}
    export interface UpdatePackageVersionIpfsCidEvent {packageId:BigNumber,packageVersionId:BigNumber,ipfsCid:string,_event:Event}
    export interface UpdateProjectIpfsCidEvent {projectId:BigNumber,ipfsCid:string,_event:Event}
    export interface UpdateProjectNameEvent {projectId:BigNumber,name:string,_event:Event}
}