"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainInfo = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const DomainInfo_json_1 = __importDefault(require("./DomainInfo.json"));
class DomainInfo extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, DomainInfo_json_1.default.abi, DomainInfo_json_1.default.bytecode);
        this.assign();
    }
    deploy(token, options) {
        return this.__deploy([token], options);
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            domainName: result.domainName,
            spender: result.spender,
            value: new eth_contract_1.BigNumber(result.value),
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
    parseDepositEvent(receipt) {
        return this.parseEvents(receipt, "Deposit").map(e => this.decodeDepositEvent(e));
    }
    decodeDepositEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            domainName: result.domainName,
            amount: new eth_contract_1.BigNumber(result.amount),
            newBalance: new eth_contract_1.BigNumber(result.newBalance),
            _event: event
        };
    }
    parseSpendEvent(receipt) {
        return this.parseEvents(receipt, "Spend").map(e => this.decodeSpendEvent(e));
    }
    decodeSpendEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            owner: result.owner,
            domainName: result.domainName,
            spender: result.spender,
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
    parseUpdateDomainInfoEvent(receipt) {
        return this.parseEvents(receipt, "UpdateDomainInfo").map(e => this.decodeUpdateDomainInfoEvent(e));
    }
    decodeUpdateDomainInfoEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            domainName: result.domainName,
            domainType: new eth_contract_1.BigNumber(result.domainType),
            module: result.module,
            _event: event
        };
    }
    parseUpdateDomainModuleEvent(receipt) {
        return this.parseEvents(receipt, "UpdateDomainModule").map(e => this.decodeUpdateDomainModuleEvent(e));
    }
    decodeUpdateDomainModuleEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            domainName: result.domainName,
            module: result.module,
            _event: event
        };
    }
    parseWithdrawEvent(receipt) {
        return this.parseEvents(receipt, "Withdraw").map(e => this.decodeWithdrawEvent(e));
    }
    decodeWithdrawEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            domainName: result.domainName,
            amount: new eth_contract_1.BigNumber(result.amount),
            newBalance: new eth_contract_1.BigNumber(result.newBalance),
            _event: event
        };
    }
    assign() {
        let allowancesParams = (params) => [params.param1, params.param2, params.param3];
        let allowances_call = async (params, options) => {
            let result = await this.call('allowances', allowancesParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.allowances = allowances_call;
        let balanceOfParams = (params) => [params.param1, params.param2];
        let balanceOf_call = async (params, options) => {
            let result = await this.call('balanceOf', balanceOfParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.balanceOf = balanceOf_call;
        let domainModuleParams = (params) => [params.param1, params.param2];
        let domainModule_call = async (params, options) => {
            let result = await this.call('domainModule', domainModuleParams(params), options);
            return result;
        };
        this.domainModule = domainModule_call;
        let domainTypeParams = (params) => [params.param1, params.param2];
        let domainType_call = async (params, options) => {
            let result = await this.call('domainType', domainTypeParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.domainType = domainType_call;
        let getDomainInfoParams = (params) => [params.owner, params.domainName];
        let getDomainInfo_call = async (params, options) => {
            let result = await this.call('getDomainInfo', getDomainInfoParams(params), options);
            return {
                moduleType: new eth_contract_1.BigNumber(result.moduleType),
                module: result.module
            };
        };
        this.getDomainInfo = getDomainInfo_call;
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
        let token_call = async (options) => {
            let result = await this.call('token', [], options);
            return result;
        };
        this.token = token_call;
        let decreaseAllowanceParams = (params) => [params.spender, params.domainName, this.wallet.utils.toString(params.subtractedValue)];
        let decreaseAllowance_send = async (params, options) => {
            let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params), options);
            return result;
        };
        let decreaseAllowance_call = async (params, options) => {
            let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params), options);
            return;
        };
        this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call: decreaseAllowance_call
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
        let depositParams = (params) => [params.domainName, this.wallet.utils.toString(params.amount)];
        let deposit_send = async (params, options) => {
            let result = await this.send('deposit', depositParams(params), options);
            return result;
        };
        let deposit_call = async (params, options) => {
            let result = await this.call('deposit', depositParams(params), options);
            return;
        };
        this.deposit = Object.assign(deposit_send, {
            call: deposit_call
        });
        let increaseAllowanceParams = (params) => [params.spender, params.domainName, this.wallet.utils.toString(params.addedValue)];
        let increaseAllowance_send = async (params, options) => {
            let result = await this.send('increaseAllowance', increaseAllowanceParams(params), options);
            return result;
        };
        let increaseAllowance_call = async (params, options) => {
            let result = await this.call('increaseAllowance', increaseAllowanceParams(params), options);
            return;
        };
        this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call: increaseAllowance_call
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
        let spendParams = (params) => [params.owner, params.domainName, params.destination, this.wallet.utils.toString(params.amount)];
        let spend_send = async (params, options) => {
            let result = await this.send('spend', spendParams(params), options);
            return result;
        };
        let spend_call = async (params, options) => {
            let result = await this.call('spend', spendParams(params), options);
            return;
        };
        this.spend = Object.assign(spend_send, {
            call: spend_call
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
        let updateDomainInfoParams = (params) => [params.domainName, this.wallet.utils.toString(params.moduleType), params.module];
        let updateDomainInfo_send = async (params, options) => {
            let result = await this.send('updateDomainInfo', updateDomainInfoParams(params), options);
            return result;
        };
        let updateDomainInfo_call = async (params, options) => {
            let result = await this.call('updateDomainInfo', updateDomainInfoParams(params), options);
            return;
        };
        this.updateDomainInfo = Object.assign(updateDomainInfo_send, {
            call: updateDomainInfo_call
        });
        let updateDomainModuleParams = (params) => [params.domainName, params.module];
        let updateDomainModule_send = async (params, options) => {
            let result = await this.send('updateDomainModule', updateDomainModuleParams(params), options);
            return result;
        };
        let updateDomainModule_call = async (params, options) => {
            let result = await this.call('updateDomainModule', updateDomainModuleParams(params), options);
            return;
        };
        this.updateDomainModule = Object.assign(updateDomainModule_send, {
            call: updateDomainModule_call
        });
        let withdrawParams = (params) => [params.domainName, this.wallet.utils.toString(params.amount)];
        let withdraw_send = async (params, options) => {
            let result = await this.send('withdraw', withdrawParams(params), options);
            return result;
        };
        let withdraw_call = async (params, options) => {
            let result = await this.call('withdraw', withdrawParams(params), options);
            return;
        };
        this.withdraw = Object.assign(withdraw_send, {
            call: withdraw_call
        });
    }
}
DomainInfo._abi = DomainInfo_json_1.default.abi;
exports.DomainInfo = DomainInfo;
