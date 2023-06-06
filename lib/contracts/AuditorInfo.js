"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditorInfo = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const AuditorInfo_json_1 = __importDefault(require("./AuditorInfo.json"));
class AuditorInfo extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, AuditorInfo_json_1.default.abi, AuditorInfo_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.token, this.wallet.utils.toString(params.cooldownPeriod)], options);
    }
    parseAddAuditorEvent(receipt) {
        return this.parseEvents(receipt, "AddAuditor").map(e => this.decodeAddAuditorEvent(e));
    }
    decodeAddAuditorEvent(event) {
        let result = event.data;
        return {
            auditor: result.auditor,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDisableAuditorEvent(receipt) {
        return this.parseEvents(receipt, "DisableAuditor").map(e => this.decodeDisableAuditorEvent(e));
    }
    decodeDisableAuditorEvent(event) {
        let result = event.data;
        return {
            auditor: result.auditor,
            _event: event
        };
    }
    parseSetCooldownPeriodEvent(receipt) {
        return this.parseEvents(receipt, "SetCooldownPeriod").map(e => this.decodeSetCooldownPeriodEvent(e));
    }
    decodeSetCooldownPeriodEvent(event) {
        let result = event.data;
        return {
            cooldownPeriod: new eth_contract_1.BigNumber(result.cooldownPeriod),
            _event: event
        };
    }
    parseStakeBondEvent(receipt) {
        return this.parseEvents(receipt, "StakeBond").map(e => this.decodeStakeBondEvent(e));
    }
    decodeStakeBondEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            amount: new eth_contract_1.BigNumber(result.amount),
            newBalance: new eth_contract_1.BigNumber(result.newBalance),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt) {
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt) {
        return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnstakeBondRequestEvent(receipt) {
        return this.parseEvents(receipt, "UnstakeBondRequest").map(e => this.decodeUnstakeBondRequestEvent(e));
    }
    decodeUnstakeBondRequestEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            amount: new eth_contract_1.BigNumber(result.amount),
            newBalance: new eth_contract_1.BigNumber(result.newBalance),
            _event: event
        };
    }
    parseWithdrawBondEvent(receipt) {
        return this.parseEvents(receipt, "WithdrawBond").map(e => this.decodeWithdrawBondEvent(e));
    }
    decodeWithdrawBondEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            amount: new eth_contract_1.BigNumber(result.amount),
            _event: event
        };
    }
    assign() {
        let MAX_COOLDOWN_PERIOD_call = async (options) => {
            let result = await this.call('MAX_COOLDOWN_PERIOD', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.MAX_COOLDOWN_PERIOD = MAX_COOLDOWN_PERIOD_call;
        let auditorBalance_call = async (param1, options) => {
            let result = await this.call('auditorBalance', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.auditorBalance = auditorBalance_call;
        let auditorIdCount_call = async (options) => {
            let result = await this.call('auditorIdCount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.auditorIdCount = auditorIdCount_call;
        let auditorIds_call = async (param1, options) => {
            let result = await this.call('auditorIds', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.auditorIds = auditorIds_call;
        let auditorsData_call = async (param1, options) => {
            let result = await this.call('auditorsData', [this.wallet.utils.toString(param1)], options);
            return {
                auditor: result.auditor,
                status: new eth_contract_1.BigNumber(result.status)
            };
        };
        this.auditorsData = auditorsData_call;
        let cooldownPeriod_call = async (options) => {
            let result = await this.call('cooldownPeriod', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.cooldownPeriod = cooldownPeriod_call;
        let getAuditorsParams = (params) => [this.wallet.utils.toString(params.auditorIdStart), this.wallet.utils.toString(params.length)];
        let getAuditors_call = async (params, options) => {
            let result = await this.call('getAuditors', getAuditorsParams(params), options);
            return (result.map(e => ({
                auditor: e.auditor,
                status: new eth_contract_1.BigNumber(e.status)
            })));
        };
        this.getAuditors = getAuditors_call;
        let isActiveAuditor_call = async (account, options) => {
            let result = await this.call('isActiveAuditor', [account], options);
            return result;
        };
        this.isActiveAuditor = isActiveAuditor_call;
        let isPermitted_call = async (param1, options) => {
            let result = await this.call('isPermitted', [param1], options);
            return result;
        };
        this.isPermitted = isPermitted_call;
        let newOwner_call = async (options) => {
            let result = await this.call('newOwner', [], options);
            return result;
        };
        this.newOwner = newOwner_call;
        let owner_call = async (options) => {
            let result = await this.call('owner', [], options);
            return result;
        };
        this.owner = owner_call;
        let pendingWithdrawal_call = async (param1, options) => {
            let result = await this.call('pendingWithdrawal', [this.wallet.utils.toString(param1)], options);
            return {
                amount: new eth_contract_1.BigNumber(result.amount),
                releaseTime: new eth_contract_1.BigNumber(result.releaseTime)
            };
        };
        this.pendingWithdrawal = pendingWithdrawal_call;
        let token_call = async (options) => {
            let result = await this.call('token', [], options);
            return result;
        };
        this.token = token_call;
        let addAuditor_send = async (auditor, options) => {
            let result = await this.send('addAuditor', [auditor], options);
            return result;
        };
        let addAuditor_call = async (auditor, options) => {
            let result = await this.call('addAuditor', [auditor], options);
            return;
        };
        this.addAuditor = Object.assign(addAuditor_send, {
            call: addAuditor_call
        });
        let deny_send = async (user, options) => {
            let result = await this.send('deny', [user], options);
            return result;
        };
        let deny_call = async (user, options) => {
            let result = await this.call('deny', [user], options);
            return;
        };
        this.deny = Object.assign(deny_send, {
            call: deny_call
        });
        let disableAuditor_send = async (auditor, options) => {
            let result = await this.send('disableAuditor', [auditor], options);
            return result;
        };
        let disableAuditor_call = async (auditor, options) => {
            let result = await this.call('disableAuditor', [auditor], options);
            return;
        };
        this.disableAuditor = Object.assign(disableAuditor_send, {
            call: disableAuditor_call
        });
        let permit_send = async (user, options) => {
            let result = await this.send('permit', [user], options);
            return result;
        };
        let permit_call = async (user, options) => {
            let result = await this.call('permit', [user], options);
            return;
        };
        this.permit = Object.assign(permit_send, {
            call: permit_call
        });
        let setCooldownPeriod_send = async (cooldownPeriod, options) => {
            let result = await this.send('setCooldownPeriod', [this.wallet.utils.toString(cooldownPeriod)], options);
            return result;
        };
        let setCooldownPeriod_call = async (cooldownPeriod, options) => {
            let result = await this.call('setCooldownPeriod', [this.wallet.utils.toString(cooldownPeriod)], options);
            return;
        };
        this.setCooldownPeriod = Object.assign(setCooldownPeriod_send, {
            call: setCooldownPeriod_call
        });
        let stakeBond_send = async (amount, options) => {
            let result = await this.send('stakeBond', [this.wallet.utils.toString(amount)], options);
            return result;
        };
        let stakeBond_call = async (amount, options) => {
            let result = await this.call('stakeBond', [this.wallet.utils.toString(amount)], options);
            return;
        };
        this.stakeBond = Object.assign(stakeBond_send, {
            call: stakeBond_call
        });
        let takeOwnership_send = async (options) => {
            let result = await this.send('takeOwnership', [], options);
            return result;
        };
        let takeOwnership_call = async (options) => {
            let result = await this.call('takeOwnership', [], options);
            return;
        };
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call: takeOwnership_call
        });
        let transferOwnership_send = async (newOwner, options) => {
            let result = await this.send('transferOwnership', [newOwner], options);
            return result;
        };
        let transferOwnership_call = async (newOwner, options) => {
            let result = await this.call('transferOwnership', [newOwner], options);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
        let unstakeBondRequest_send = async (amount, options) => {
            let result = await this.send('unstakeBondRequest', [this.wallet.utils.toString(amount)], options);
            return result;
        };
        let unstakeBondRequest_call = async (amount, options) => {
            let result = await this.call('unstakeBondRequest', [this.wallet.utils.toString(amount)], options);
            return;
        };
        this.unstakeBondRequest = Object.assign(unstakeBondRequest_send, {
            call: unstakeBondRequest_call
        });
        let withdrawBond_send = async (options) => {
            let result = await this.send('withdrawBond', [], options);
            return result;
        };
        let withdrawBond_call = async (options) => {
            let result = await this.call('withdrawBond', [], options);
            return;
        };
        this.withdrawBond = Object.assign(withdrawBond_send, {
            call: withdrawBond_call
        });
    }
}
AuditorInfo._abi = AuditorInfo_json_1.default.abi;
exports.AuditorInfo = AuditorInfo;
