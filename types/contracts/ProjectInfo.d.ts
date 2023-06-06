import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    token: string;
    auditorInfo: string;
}
export interface IAddPackageAdminParams {
    packageId: number | BigNumber;
    admin: string;
}
export interface IAddProjectAdminParams {
    projectId: number | BigNumber;
    admin: string;
}
export interface INewPackageParams {
    projectId: number | BigNumber;
    name: string;
    category: string;
    ipfsCid: string;
}
export interface INewPackageVersionParams {
    projectId: number | BigNumber;
    packageId: number | BigNumber;
    version: {
        major: number | BigNumber;
        minor: number | BigNumber;
        patch: number | BigNumber;
    };
    ipfsCid: string;
}
export interface INewProjectParams {
    name: string;
    ipfsCid: string;
}
export interface IOwnersProjectsParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IOwnersProjectsInvParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IPackageAdminParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IPackageAdminInvParams {
    param1: number | BigNumber;
    param2: string;
}
export interface IPackageNameParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IPackageNameInvParams {
    param1: number | BigNumber;
    param2: string;
}
export interface IPackageVersionsListParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IProjectAdminParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IProjectAdminInvParams {
    param1: number | BigNumber;
    param2: string;
}
export interface IProjectBackerBalanceParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IProjectPackagesParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IProjectPackagesInvParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IRemovePackageAdminParams {
    packageId: number | BigNumber;
    admin: string;
}
export interface IRemoveProjectAdminParams {
    projectId: number | BigNumber;
    admin: string;
}
export interface IStakeParams {
    projectId: number | BigNumber;
    amount: number | BigNumber;
}
export interface ITransferProjectOwnershipParams {
    projectId: number | BigNumber;
    newOwner: string;
}
export interface IUnstakeParams {
    projectId: number | BigNumber;
    amount: number | BigNumber;
}
export interface IUpdatePackageIpfsCidParams {
    projectId: number | BigNumber;
    packageId: number | BigNumber;
    ipfsCid: string;
}
export interface IUpdatePackageNameParams {
    projectId: number | BigNumber;
    packageId: number | BigNumber;
    name: string;
}
export interface IUpdatePackageVersionIpfsCidParams {
    packageVersionId: number | BigNumber;
    ipfsCid: string;
}
export interface IUpdateProjectIpfsCidParams {
    projectId: number | BigNumber;
    ipfsCid: string;
}
export interface IUpdateProjectNameParams {
    projectId: number | BigNumber;
    name: string;
}
export declare class ProjectInfo extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseAddAdminEvent(receipt: TransactionReceipt): ProjectInfo.AddAdminEvent[];
    decodeAddAdminEvent(event: Event): ProjectInfo.AddAdminEvent;
    parseAddPackageAdminEvent(receipt: TransactionReceipt): ProjectInfo.AddPackageAdminEvent[];
    decodeAddPackageAdminEvent(event: Event): ProjectInfo.AddPackageAdminEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): ProjectInfo.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): ProjectInfo.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): ProjectInfo.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): ProjectInfo.DeauthorizeEvent;
    parseNewPackageEvent(receipt: TransactionReceipt): ProjectInfo.NewPackageEvent[];
    decodeNewPackageEvent(event: Event): ProjectInfo.NewPackageEvent;
    parseNewPackageVersionEvent(receipt: TransactionReceipt): ProjectInfo.NewPackageVersionEvent[];
    decodeNewPackageVersionEvent(event: Event): ProjectInfo.NewPackageVersionEvent;
    parseNewProjectEvent(receipt: TransactionReceipt): ProjectInfo.NewProjectEvent[];
    decodeNewProjectEvent(event: Event): ProjectInfo.NewProjectEvent;
    parseRemoveAdminEvent(receipt: TransactionReceipt): ProjectInfo.RemoveAdminEvent[];
    decodeRemoveAdminEvent(event: Event): ProjectInfo.RemoveAdminEvent;
    parseRemovePackageAdminEvent(receipt: TransactionReceipt): ProjectInfo.RemovePackageAdminEvent[];
    decodeRemovePackageAdminEvent(event: Event): ProjectInfo.RemovePackageAdminEvent;
    parseSetPackageVersionStatusEvent(receipt: TransactionReceipt): ProjectInfo.SetPackageVersionStatusEvent[];
    decodeSetPackageVersionStatusEvent(event: Event): ProjectInfo.SetPackageVersionStatusEvent;
    parseStakeEvent(receipt: TransactionReceipt): ProjectInfo.StakeEvent[];
    decodeStakeEvent(event: Event): ProjectInfo.StakeEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): ProjectInfo.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): ProjectInfo.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): ProjectInfo.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): ProjectInfo.TransferOwnershipEvent;
    parseTransferProjectOwnershipEvent(receipt: TransactionReceipt): ProjectInfo.TransferProjectOwnershipEvent[];
    decodeTransferProjectOwnershipEvent(event: Event): ProjectInfo.TransferProjectOwnershipEvent;
    parseUnstakeEvent(receipt: TransactionReceipt): ProjectInfo.UnstakeEvent[];
    decodeUnstakeEvent(event: Event): ProjectInfo.UnstakeEvent;
    parseUpdatePackageIpfsCidEvent(receipt: TransactionReceipt): ProjectInfo.UpdatePackageIpfsCidEvent[];
    decodeUpdatePackageIpfsCidEvent(event: Event): ProjectInfo.UpdatePackageIpfsCidEvent;
    parseUpdatePackageNameEvent(receipt: TransactionReceipt): ProjectInfo.UpdatePackageNameEvent[];
    decodeUpdatePackageNameEvent(event: Event): ProjectInfo.UpdatePackageNameEvent;
    parseUpdatePackageVersionIpfsCidEvent(receipt: TransactionReceipt): ProjectInfo.UpdatePackageVersionIpfsCidEvent[];
    decodeUpdatePackageVersionIpfsCidEvent(event: Event): ProjectInfo.UpdatePackageVersionIpfsCidEvent;
    parseUpdateProjectIpfsCidEvent(receipt: TransactionReceipt): ProjectInfo.UpdateProjectIpfsCidEvent[];
    decodeUpdateProjectIpfsCidEvent(event: Event): ProjectInfo.UpdateProjectIpfsCidEvent;
    parseUpdateProjectNameEvent(receipt: TransactionReceipt): ProjectInfo.UpdateProjectNameEvent[];
    decodeUpdateProjectNameEvent(event: Event): ProjectInfo.UpdateProjectNameEvent;
    addPackageAdmin: {
        (params: IAddPackageAdminParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddPackageAdminParams, options?: TransactionOptions) => Promise<void>;
    };
    addProjectAdmin: {
        (params: IAddProjectAdminParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddProjectAdminParams, options?: TransactionOptions) => Promise<void>;
    };
    auditorInfo: {
        (options?: TransactionOptions): Promise<string>;
    };
    deny: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    isPermitted: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    };
    newPackage: {
        (params: INewPackageParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewPackageParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    newPackageVersion: {
        (params: INewPackageVersionParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewPackageVersionParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    newProject: {
        (params: INewProjectParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewProjectParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    ownersProjects: {
        (params: IOwnersProjectsParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    ownersProjectsInv: {
        (params: IOwnersProjectsInvParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    ownersProjectsLength: {
        (owner: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    packageAdmin: {
        (params: IPackageAdminParams, options?: TransactionOptions): Promise<string>;
    };
    packageAdminInv: {
        (params: IPackageAdminInvParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    packageAdminLength: {
        (packageId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    packageName: {
        (params: IPackageNameParams, options?: TransactionOptions): Promise<string>;
    };
    packageNameInv: {
        (params: IPackageNameInvParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    packageVersions: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<{
            packageId: BigNumber;
            version: {
                major: BigNumber;
                minor: BigNumber;
                patch: BigNumber;
            };
            status: BigNumber;
            ipfsCid: string;
            timestamp: BigNumber;
        }>;
    };
    packageVersionsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    packageVersionsList: {
        (params: IPackageVersionsListParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    packageVersionsListLength: {
        (packageId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    packages: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<{
            projectId: BigNumber;
            currVersionIndex: BigNumber;
            ipfsCid: string;
            category: string;
            status: BigNumber;
        }>;
    };
    packagesLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    permit: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    projectAdmin: {
        (params: IProjectAdminParams, options?: TransactionOptions): Promise<string>;
    };
    projectAdminInv: {
        (params: IProjectAdminInvParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    projectAdminLength: {
        (projectId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    projectBackerBalance: {
        (params: IProjectBackerBalanceParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    projectBalance: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    projectCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    projectIpfsCid: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    projectName: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    projectNameInv: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    projectNewOwner: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    projectOwner: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    projectPackages: {
        (params: IProjectPackagesParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    projectPackagesInv: {
        (params: IProjectPackagesInvParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    projectPackagesLength: {
        (projectId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    removePackageAdmin: {
        (params: IRemovePackageAdminParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemovePackageAdminParams, options?: TransactionOptions) => Promise<void>;
    };
    removeProjectAdmin: {
        (params: IRemoveProjectAdminParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveProjectAdminParams, options?: TransactionOptions) => Promise<void>;
    };
    setPackageVersionToAuditing: {
        (packageVersionId: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (packageVersionId: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    stake: {
        (params: IStakeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IStakeParams, options?: TransactionOptions) => Promise<void>;
    };
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    takeProjectOwnership: {
        (projectId: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (projectId: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    token: {
        (options?: TransactionOptions): Promise<string>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    transferProjectOwnership: {
        (params: ITransferProjectOwnershipParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferProjectOwnershipParams, options?: TransactionOptions) => Promise<void>;
    };
    unstake: {
        (params: IUnstakeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnstakeParams, options?: TransactionOptions) => Promise<void>;
    };
    updatePackageIpfsCid: {
        (params: IUpdatePackageIpfsCidParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdatePackageIpfsCidParams, options?: TransactionOptions) => Promise<void>;
    };
    updatePackageName: {
        (params: IUpdatePackageNameParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdatePackageNameParams, options?: TransactionOptions) => Promise<void>;
    };
    updatePackageVersionIpfsCid: {
        (params: IUpdatePackageVersionIpfsCidParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdatePackageVersionIpfsCidParams, options?: TransactionOptions) => Promise<void>;
    };
    updateProjectIpfsCid: {
        (params: IUpdateProjectIpfsCidParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateProjectIpfsCidParams, options?: TransactionOptions) => Promise<void>;
    };
    updateProjectName: {
        (params: IUpdateProjectNameParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateProjectNameParams, options?: TransactionOptions) => Promise<void>;
    };
    voidPackageVersion: {
        (packageVersionId: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (packageVersionId: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module ProjectInfo {
    interface AddAdminEvent {
        projectId: BigNumber;
        admin: string;
        _event: Event;
    }
    interface AddPackageAdminEvent {
        packageId: BigNumber;
        admin: string;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface NewPackageEvent {
        projectId: BigNumber;
        packageId: BigNumber;
        name: string;
        ipfsCid: string;
        _event: Event;
    }
    interface NewPackageVersionEvent {
        packageId: BigNumber;
        packageVersionId: BigNumber;
        version: {
            major: BigNumber;
            minor: BigNumber;
            patch: BigNumber;
        };
        _event: Event;
    }
    interface NewProjectEvent {
        projectId: BigNumber;
        owner: string;
        name: string;
        ipfsCid: string;
        _event: Event;
    }
    interface RemoveAdminEvent {
        projectId: BigNumber;
        admin: string;
        _event: Event;
    }
    interface RemovePackageAdminEvent {
        packageId: BigNumber;
        admin: string;
        _event: Event;
    }
    interface SetPackageVersionStatusEvent {
        packageId: BigNumber;
        packageVersionId: BigNumber;
        status: BigNumber;
        _event: Event;
    }
    interface StakeEvent {
        sender: string;
        projectId: BigNumber;
        amount: BigNumber;
        newBalance: BigNumber;
        _event: Event;
    }
    interface StartOwnershipTransferEvent {
        user: string;
        _event: Event;
    }
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
    interface TransferProjectOwnershipEvent {
        projectId: BigNumber;
        newOwner: string;
        _event: Event;
    }
    interface UnstakeEvent {
        sender: string;
        projectId: BigNumber;
        amount: BigNumber;
        newBalance: BigNumber;
        _event: Event;
    }
    interface UpdatePackageIpfsCidEvent {
        packageId: BigNumber;
        ipfsCid: string;
        _event: Event;
    }
    interface UpdatePackageNameEvent {
        packageId: BigNumber;
        name: string;
        _event: Event;
    }
    interface UpdatePackageVersionIpfsCidEvent {
        packageId: BigNumber;
        packageVersionId: BigNumber;
        ipfsCid: string;
        _event: Event;
    }
    interface UpdateProjectIpfsCidEvent {
        projectId: BigNumber;
        ipfsCid: string;
        _event: Event;
    }
    interface UpdateProjectNameEvent {
        projectId: BigNumber;
        name: string;
        _event: Event;
    }
}
