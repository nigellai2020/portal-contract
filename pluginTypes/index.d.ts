/// <amd-module name="@scom/portal-contract/contracts/AuditInfo.json.ts" />
declare module "@scom/portal-contract/contracts/AuditInfo.json.ts" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@scom/portal-contract/contracts/AuditInfo.ts" />
declare module "@scom/portal-contract/contracts/AuditInfo.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        projectInfo: string;
        auditorInfo: string;
        quorum: number | BigNumber;
        auditDuration: number | BigNumber;
        minAuditRequired: number | BigNumber;
    }
    export interface IAddAuditReportParams {
        packageVersionsId: number | BigNumber;
        auditResult: number | BigNumber;
        ipfsCid: string;
    }
    export interface IAuditHistoryParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
        param3: number | BigNumber;
    }
    export interface IAuditHistoryLengthParams {
        packageVersionsId: number | BigNumber;
        auditor: string;
    }
    export interface IPackageVersionsAuditorsParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
    }
    export interface IPackageVersionsAuditorsInvParams {
        param1: number | BigNumber;
        param2: string;
    }
    export class AuditInfo extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAddAuditReportEvent(receipt: TransactionReceipt): AuditInfo.AddAuditReportEvent[];
        decodeAddAuditReportEvent(event: Event): AuditInfo.AddAuditReportEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): AuditInfo.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): AuditInfo.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): AuditInfo.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): AuditInfo.DeauthorizeEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): AuditInfo.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): AuditInfo.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): AuditInfo.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): AuditInfo.TransferOwnershipEvent;
        QUORUM_BASE: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        addAuditReport: {
            (params: IAddAuditReportParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddAuditReportParams, options?: TransactionOptions) => Promise<void>;
        };
        auditDuration: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        auditHistory: {
            (params: IAuditHistoryParams, options?: TransactionOptions): Promise<{
                auditResult: BigNumber;
                ipfsCid: string;
                timestamp: BigNumber;
            }>;
        };
        auditHistoryAuditorLength: {
            (packageVersionsId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        auditHistoryLength: {
            (params: IAuditHistoryLengthParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        auditorInfo: {
            (options?: TransactionOptions): Promise<string>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        getLastAuditResult: {
            (packageVersionsId: number | BigNumber, options?: TransactionOptions): Promise<{
                auditors: string[];
                results: BigNumber[];
            }>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        lastAuditResultBeforeAuditPeriod: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        latestAuditResult: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        minAuditRequired: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        newOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        packageVersionsAuditors: {
            (params: IPackageVersionsAuditorsParams, options?: TransactionOptions): Promise<string>;
        };
        packageVersionsAuditorsInv: {
            (params: IPackageVersionsAuditorsInvParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        projectInfo: {
            (options?: TransactionOptions): Promise<string>;
        };
        quorum: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        setAuditDuration: {
            (auditDuration: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (auditDuration: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        setMinAuditRequired: {
            (minAuditRequired: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (minAuditRequired: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        setQuorum: {
            (quorum: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (quorum: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module AuditInfo {
        interface AddAuditReportEvent {
            auditor: string;
            packageVersionsId: BigNumber;
            auditResult: BigNumber;
            ipfsCid: string;
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
        interface StartOwnershipTransferEvent {
            user: string;
            _event: Event;
        }
        interface TransferOwnershipEvent {
            user: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/portal-contract/contracts/AuditorInfo.json.ts" />
declare module "@scom/portal-contract/contracts/AuditorInfo.json.ts" {
    const _default_1: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@scom/portal-contract/contracts/AuditorInfo.ts" />
declare module "@scom/portal-contract/contracts/AuditorInfo.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        token: string;
        cooldownPeriod: number | BigNumber;
    }
    export interface IGetAuditorsParams {
        auditorIdStart: number | BigNumber;
        length: number | BigNumber;
    }
    export class AuditorInfo extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAddAuditorEvent(receipt: TransactionReceipt): AuditorInfo.AddAuditorEvent[];
        decodeAddAuditorEvent(event: Event): AuditorInfo.AddAuditorEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): AuditorInfo.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): AuditorInfo.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): AuditorInfo.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): AuditorInfo.DeauthorizeEvent;
        parseDisableAuditorEvent(receipt: TransactionReceipt): AuditorInfo.DisableAuditorEvent[];
        decodeDisableAuditorEvent(event: Event): AuditorInfo.DisableAuditorEvent;
        parseSetCooldownPeriodEvent(receipt: TransactionReceipt): AuditorInfo.SetCooldownPeriodEvent[];
        decodeSetCooldownPeriodEvent(event: Event): AuditorInfo.SetCooldownPeriodEvent;
        parseStakeBondEvent(receipt: TransactionReceipt): AuditorInfo.StakeBondEvent[];
        decodeStakeBondEvent(event: Event): AuditorInfo.StakeBondEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): AuditorInfo.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): AuditorInfo.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): AuditorInfo.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): AuditorInfo.TransferOwnershipEvent;
        parseUnstakeBondRequestEvent(receipt: TransactionReceipt): AuditorInfo.UnstakeBondRequestEvent[];
        decodeUnstakeBondRequestEvent(event: Event): AuditorInfo.UnstakeBondRequestEvent;
        parseWithdrawBondEvent(receipt: TransactionReceipt): AuditorInfo.WithdrawBondEvent[];
        decodeWithdrawBondEvent(event: Event): AuditorInfo.WithdrawBondEvent;
        MAX_COOLDOWN_PERIOD: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        addAuditor: {
            (auditor: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (auditor: string, options?: TransactionOptions) => Promise<void>;
        };
        auditorBalance: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        auditorIdCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        auditorIds: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        auditorsData: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<{
                auditor: string;
                status: BigNumber;
            }>;
        };
        cooldownPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        disableAuditor: {
            (auditor: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (auditor: string, options?: TransactionOptions) => Promise<void>;
        };
        getAuditors: {
            (params: IGetAuditorsParams, options?: TransactionOptions): Promise<{
                auditor: string;
                status: BigNumber;
            }[]>;
        };
        isActiveAuditor: {
            (account: string, options?: TransactionOptions): Promise<boolean>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        newOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        pendingWithdrawal: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<{
                amount: BigNumber;
                releaseTime: BigNumber;
            }>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        setCooldownPeriod: {
            (cooldownPeriod: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (cooldownPeriod: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        stakeBond: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        token: {
            (options?: TransactionOptions): Promise<string>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        unstakeBondRequest: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        withdrawBond: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module AuditorInfo {
        interface AddAuditorEvent {
            auditor: string;
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
        interface DisableAuditorEvent {
            auditor: string;
            _event: Event;
        }
        interface SetCooldownPeriodEvent {
            cooldownPeriod: BigNumber;
            _event: Event;
        }
        interface StakeBondEvent {
            sender: string;
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
        interface UnstakeBondRequestEvent {
            sender: string;
            amount: BigNumber;
            newBalance: BigNumber;
            _event: Event;
        }
        interface WithdrawBondEvent {
            sender: string;
            amount: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/portal-contract/contracts/Authorization.json.ts" />
declare module "@scom/portal-contract/contracts/Authorization.json.ts" {
    const _default_2: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@scom/portal-contract/contracts/Authorization.ts" />
declare module "@scom/portal-contract/contracts/Authorization.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, Event, TransactionOptions } from "@ijstech/eth-contract";
    export class Authorization extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseAuthorizeEvent(receipt: TransactionReceipt): Authorization.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): Authorization.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): Authorization.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): Authorization.DeauthorizeEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Authorization.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): Authorization.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): Authorization.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): Authorization.TransferOwnershipEvent;
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
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module Authorization {
        interface AuthorizeEvent {
            user: string;
            _event: Event;
        }
        interface DeauthorizeEvent {
            user: string;
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
    }
}
/// <amd-module name="@scom/portal-contract/contracts/DomainInfo.json.ts" />
declare module "@scom/portal-contract/contracts/DomainInfo.json.ts" {
    const _default_3: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_3;
}
/// <amd-module name="@scom/portal-contract/contracts/DomainInfo.ts" />
declare module "@scom/portal-contract/contracts/DomainInfo.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAllowancesParams {
        param1: string;
        param2: string;
        param3: string;
    }
    export interface IBalanceOfParams {
        param1: string;
        param2: string;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        domainName: string;
        subtractedValue: number | BigNumber;
    }
    export interface IDepositParams {
        domainName: string;
        amount: number | BigNumber;
    }
    export interface IDomainModuleParams {
        param1: string;
        param2: string;
    }
    export interface IDomainTypeParams {
        param1: string;
        param2: string;
    }
    export interface IGetDomainInfoParams {
        owner: string;
        domainName: string;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        domainName: string;
        addedValue: number | BigNumber;
    }
    export interface ISpendParams {
        owner: string;
        domainName: string;
        destination: string;
        amount: number | BigNumber;
    }
    export interface IUpdateDomainInfoParams {
        domainName: string;
        moduleType: number | BigNumber;
        module: string;
    }
    export interface IUpdateDomainModuleParams {
        domainName: string;
        module: string;
    }
    export interface IWithdrawParams {
        domainName: string;
        amount: number | BigNumber;
    }
    export class DomainInfo extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(token: string, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): DomainInfo.ApprovalEvent[];
        decodeApprovalEvent(event: Event): DomainInfo.ApprovalEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): DomainInfo.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): DomainInfo.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): DomainInfo.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): DomainInfo.DeauthorizeEvent;
        parseDepositEvent(receipt: TransactionReceipt): DomainInfo.DepositEvent[];
        decodeDepositEvent(event: Event): DomainInfo.DepositEvent;
        parseSpendEvent(receipt: TransactionReceipt): DomainInfo.SpendEvent[];
        decodeSpendEvent(event: Event): DomainInfo.SpendEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): DomainInfo.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): DomainInfo.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): DomainInfo.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): DomainInfo.TransferOwnershipEvent;
        parseUpdateDomainInfoEvent(receipt: TransactionReceipt): DomainInfo.UpdateDomainInfoEvent[];
        decodeUpdateDomainInfoEvent(event: Event): DomainInfo.UpdateDomainInfoEvent;
        parseUpdateDomainModuleEvent(receipt: TransactionReceipt): DomainInfo.UpdateDomainModuleEvent[];
        decodeUpdateDomainModuleEvent(event: Event): DomainInfo.UpdateDomainModuleEvent;
        parseWithdrawEvent(receipt: TransactionReceipt): DomainInfo.WithdrawEvent[];
        decodeWithdrawEvent(event: Event): DomainInfo.WithdrawEvent;
        allowances: {
            (params: IAllowancesParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        balanceOf: {
            (params: IBalanceOfParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<void>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        deposit: {
            (params: IDepositParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDepositParams, options?: TransactionOptions) => Promise<void>;
        };
        domainModule: {
            (params: IDomainModuleParams, options?: TransactionOptions): Promise<string>;
        };
        domainType: {
            (params: IDomainTypeParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getDomainInfo: {
            (params: IGetDomainInfoParams, options?: TransactionOptions): Promise<{
                moduleType: BigNumber;
                module: string;
            }>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<void>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        newOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        spend: {
            (params: ISpendParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISpendParams, options?: TransactionOptions) => Promise<void>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        token: {
            (options?: TransactionOptions): Promise<string>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        updateDomainInfo: {
            (params: IUpdateDomainInfoParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdateDomainInfoParams, options?: TransactionOptions) => Promise<void>;
        };
        updateDomainModule: {
            (params: IUpdateDomainModuleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdateDomainModuleParams, options?: TransactionOptions) => Promise<void>;
        };
        withdraw: {
            (params: IWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IWithdrawParams, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module DomainInfo {
        interface ApprovalEvent {
            owner: string;
            domainName: string;
            spender: string;
            value: BigNumber;
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
        interface DepositEvent {
            owner: string;
            domainName: string;
            amount: BigNumber;
            newBalance: BigNumber;
            _event: Event;
        }
        interface SpendEvent {
            sender: string;
            owner: string;
            domainName: string;
            spender: string;
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
        interface UpdateDomainInfoEvent {
            owner: string;
            domainName: string;
            domainType: BigNumber;
            module: string;
            _event: Event;
        }
        interface UpdateDomainModuleEvent {
            owner: string;
            domainName: string;
            module: string;
            _event: Event;
        }
        interface WithdrawEvent {
            owner: string;
            domainName: string;
            amount: BigNumber;
            newBalance: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/portal-contract/contracts/ModuleInfo.json.ts" />
declare module "@scom/portal-contract/contracts/ModuleInfo.json.ts" {
    const _default_4: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_4;
}
/// <amd-module name="@scom/portal-contract/contracts/ModuleInfo.ts" />
declare module "@scom/portal-contract/contracts/ModuleInfo.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAddReleaseParams {
        packageHash: string;
        version: string;
        uri: string;
        pulishRelease: boolean;
    }
    export interface IGetBatchOwnerPackagesParams {
        owner: string;
        from: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetBatchOwnerPackagesAndHashParams {
        owner: string;
        from: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetBatchpackageReleasesParams {
        packageHash: string;
        from: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IOwnerPackagesParams {
        param1: string;
        param2: number | BigNumber;
    }
    export interface IOwnerPackagesIndexParams {
        param1: string;
        param2: string;
    }
    export interface IPackageReleasesParams {
        param1: string;
        param2: number | BigNumber;
    }
    export interface IPackageReleasesIndexParams {
        param1: string;
        param2: string;
    }
    export interface ISetCurrentVersionParams {
        packageHash: string;
        version: string;
    }
    export class ModuleInfo extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseCurrentVersionEvent(receipt: TransactionReceipt): ModuleInfo.CurrentVersionEvent[];
        decodeCurrentVersionEvent(event: Event): ModuleInfo.CurrentVersionEvent;
        parseNewPackageEvent(receipt: TransactionReceipt): ModuleInfo.NewPackageEvent[];
        decodeNewPackageEvent(event: Event): ModuleInfo.NewPackageEvent;
        parseNewReleaseEvent(receipt: TransactionReceipt): ModuleInfo.NewReleaseEvent[];
        decodeNewReleaseEvent(event: Event): ModuleInfo.NewReleaseEvent;
        addPackage: {
            (packageName: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (packageName: string, options?: TransactionOptions) => Promise<void>;
        };
        addRelease: {
            (params: IAddReleaseParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddReleaseParams, options?: TransactionOptions) => Promise<void>;
        };
        getAllOwnerPackages: {
            (owner: string, options?: TransactionOptions): Promise<string[]>;
        };
        getAllOwnerPackagesAndHash: {
            (owner: string, options?: TransactionOptions): Promise<{
                packageNames: string[];
                packageHashes: string[];
                packages: {
                    owner: string;
                    currVersion: string;
                    currVersionHash: string;
                }[];
            }>;
        };
        getAllpackageReleases: {
            (packageHash: string, options?: TransactionOptions): Promise<{
                version: string;
                uri: string;
            }[]>;
        };
        getBatchOwnerPackages: {
            (params: IGetBatchOwnerPackagesParams, options?: TransactionOptions): Promise<string[]>;
        };
        getBatchOwnerPackagesAndHash: {
            (params: IGetBatchOwnerPackagesAndHashParams, options?: TransactionOptions): Promise<{
                packageNames: string[];
                packageHashes: string[];
                packages: {
                    owner: string;
                    currVersion: string;
                    currVersionHash: string;
                }[];
            }>;
        };
        getBatchpackageReleases: {
            (params: IGetBatchpackageReleasesParams, options?: TransactionOptions): Promise<{
                version: string;
                uri: string;
            }[]>;
        };
        ownerPackages: {
            (params: IOwnerPackagesParams, options?: TransactionOptions): Promise<string>;
        };
        ownerPackagesIndex: {
            (params: IOwnerPackagesIndexParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        ownerPackagesLength: {
            (owner: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        packageProperties: {
            (param1: string, options?: TransactionOptions): Promise<{
                owner: string;
                currVersion: string;
                currVersionHash: string;
            }>;
        };
        packageReleases: {
            (params: IPackageReleasesParams, options?: TransactionOptions): Promise<{
                version: string;
                uri: string;
            }>;
        };
        packageReleasesIndex: {
            (params: IPackageReleasesIndexParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        packageReleasesLength: {
            (packageHash: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        setCurrentVersion: {
            (params: ISetCurrentVersionParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetCurrentVersionParams, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module ModuleInfo {
        interface CurrentVersionEvent {
            packageHash: string;
            version: string;
            currVersionHash: string;
            _event: Event;
        }
        interface NewPackageEvent {
            owner: string;
            packageName: string;
            packageHash: string;
            _event: Event;
        }
        interface NewReleaseEvent {
            packageHash: string;
            version: string;
            uri: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/portal-contract/contracts/ProjectInfo.json.ts" />
declare module "@scom/portal-contract/contracts/ProjectInfo.json.ts" {
    const _default_5: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_5;
}
/// <amd-module name="@scom/portal-contract/contracts/ProjectInfo.ts" />
declare module "@scom/portal-contract/contracts/ProjectInfo.ts" {
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
    export class ProjectInfo extends _Contract {
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
    export module ProjectInfo {
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
}
/// <amd-module name="@scom/portal-contract/contracts/Scom.json.ts" />
declare module "@scom/portal-contract/contracts/Scom.json.ts" {
    const _default_6: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_6;
}
/// <amd-module name="@scom/portal-contract/contracts/Scom.ts" />
declare module "@scom/portal-contract/contracts/Scom.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        minter: string;
        initSupplyTo: string;
        initSupply: number | BigNumber;
        totalSupply: number | BigNumber;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface IMintParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface ITransferParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        amount: number | BigNumber;
    }
    export class Scom extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): Scom.ApprovalEvent[];
        decodeApprovalEvent(event: Event): Scom.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): Scom.TransferEvent[];
        decodeTransferEvent(event: Event): Scom.TransferEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        cap: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        mint: {
            (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
        };
        minter: {
            (options?: TransactionOptions): Promise<string>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        private assign;
    }
    export module Scom {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/portal-contract/contracts/index.ts" />
declare module "@scom/portal-contract/contracts/index.ts" {
    export { AuditInfo } from "@scom/portal-contract/contracts/AuditInfo.ts";
    export { AuditorInfo } from "@scom/portal-contract/contracts/AuditorInfo.ts";
    export { Authorization } from "@scom/portal-contract/contracts/Authorization.ts";
    export { DomainInfo } from "@scom/portal-contract/contracts/DomainInfo.ts";
    export { ModuleInfo } from "@scom/portal-contract/contracts/ModuleInfo.ts";
    export { ProjectInfo } from "@scom/portal-contract/contracts/ProjectInfo.ts";
    export { Scom } from "@scom/portal-contract/contracts/Scom.ts";
}
/// <amd-module name="@scom/portal-contract" />
declare module "@scom/portal-contract" {
    import { IWallet, BigNumber } from "@ijstech/eth-wallet";
    import * as Contracts from "@scom/portal-contract/contracts/index.ts";
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
    export var DefaultDeployOptions: IDeployOptions;
    export function deploy(wallet: IWallet, Config: IDeployOptions, onProgress: (msg: string) => void): Promise<IDeployResult>;
    const _default_7: {
        Contracts: typeof Contracts;
        deploy: typeof deploy;
        DefaultDeployOptions: IDeployOptions;
    };
    export default _default_7;
}
