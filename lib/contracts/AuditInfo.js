"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditInfo = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const AuditInfo_json_1 = __importDefault(require("./AuditInfo.json"));
class AuditInfo extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, AuditInfo_json_1.default.abi, AuditInfo_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.projectInfo, params.auditorInfo, this.wallet.utils.toString(params.quorum), this.wallet.utils.toString(params.auditDuration), this.wallet.utils.toString(params.minAuditRequired)], options);
    }
    parseAddAuditReportEvent(receipt) {
        return this.parseEvents(receipt, "AddAuditReport").map(e => this.decodeAddAuditReportEvent(e));
    }
    decodeAddAuditReportEvent(event) {
        let result = event.data;
        return {
            auditor: result.auditor,
            packageVersionsId: new eth_contract_1.BigNumber(result.packageVersionsId),
            auditResult: new eth_contract_1.BigNumber(result.auditResult),
            ipfsCid: result.ipfsCid,
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
    assign() {
        let QUORUM_BASE_call = async (options) => {
            let result = await this.call('QUORUM_BASE', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.QUORUM_BASE = QUORUM_BASE_call;
        let auditDuration_call = async (options) => {
            let result = await this.call('auditDuration', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.auditDuration = auditDuration_call;
        let auditHistoryParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2), this.wallet.utils.toString(params.param3)];
        let auditHistory_call = async (params, options) => {
            let result = await this.call('auditHistory', auditHistoryParams(params), options);
            return {
                auditResult: new eth_contract_1.BigNumber(result.auditResult),
                ipfsCid: result.ipfsCid,
                timestamp: new eth_contract_1.BigNumber(result.timestamp)
            };
        };
        this.auditHistory = auditHistory_call;
        let auditHistoryAuditorLength_call = async (packageVersionsId, options) => {
            let result = await this.call('auditHistoryAuditorLength', [this.wallet.utils.toString(packageVersionsId)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.auditHistoryAuditorLength = auditHistoryAuditorLength_call;
        let auditHistoryLengthParams = (params) => [this.wallet.utils.toString(params.packageVersionsId), params.auditor];
        let auditHistoryLength_call = async (params, options) => {
            let result = await this.call('auditHistoryLength', auditHistoryLengthParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.auditHistoryLength = auditHistoryLength_call;
        let auditorInfo_call = async (options) => {
            let result = await this.call('auditorInfo', [], options);
            return result;
        };
        this.auditorInfo = auditorInfo_call;
        let getLastAuditResult_call = async (packageVersionsId, options) => {
            let result = await this.call('getLastAuditResult', [this.wallet.utils.toString(packageVersionsId)], options);
            return {
                auditors: result.auditors,
                results: result.results.map(e => new eth_contract_1.BigNumber(e))
            };
        };
        this.getLastAuditResult = getLastAuditResult_call;
        let isPermitted_call = async (param1, options) => {
            let result = await this.call('isPermitted', [param1], options);
            return result;
        };
        this.isPermitted = isPermitted_call;
        let lastAuditResultBeforeAuditPeriod_call = async (param1, options) => {
            let result = await this.call('lastAuditResultBeforeAuditPeriod', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lastAuditResultBeforeAuditPeriod = lastAuditResultBeforeAuditPeriod_call;
        let latestAuditResult_call = async (param1, options) => {
            let result = await this.call('latestAuditResult', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.latestAuditResult = latestAuditResult_call;
        let minAuditRequired_call = async (options) => {
            let result = await this.call('minAuditRequired', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.minAuditRequired = minAuditRequired_call;
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
        let packageVersionsAuditorsParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
        let packageVersionsAuditors_call = async (params, options) => {
            let result = await this.call('packageVersionsAuditors', packageVersionsAuditorsParams(params), options);
            return result;
        };
        this.packageVersionsAuditors = packageVersionsAuditors_call;
        let packageVersionsAuditorsInvParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
        let packageVersionsAuditorsInv_call = async (params, options) => {
            let result = await this.call('packageVersionsAuditorsInv', packageVersionsAuditorsInvParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.packageVersionsAuditorsInv = packageVersionsAuditorsInv_call;
        let projectInfo_call = async (options) => {
            let result = await this.call('projectInfo', [], options);
            return result;
        };
        this.projectInfo = projectInfo_call;
        let quorum_call = async (options) => {
            let result = await this.call('quorum', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.quorum = quorum_call;
        let addAuditReportParams = (params) => [this.wallet.utils.toString(params.packageVersionsId), this.wallet.utils.toString(params.auditResult), params.ipfsCid];
        let addAuditReport_send = async (params, options) => {
            let result = await this.send('addAuditReport', addAuditReportParams(params), options);
            return result;
        };
        let addAuditReport_call = async (params, options) => {
            let result = await this.call('addAuditReport', addAuditReportParams(params), options);
            return;
        };
        this.addAuditReport = Object.assign(addAuditReport_send, {
            call: addAuditReport_call
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
        let setAuditDuration_send = async (auditDuration, options) => {
            let result = await this.send('setAuditDuration', [this.wallet.utils.toString(auditDuration)], options);
            return result;
        };
        let setAuditDuration_call = async (auditDuration, options) => {
            let result = await this.call('setAuditDuration', [this.wallet.utils.toString(auditDuration)], options);
            return;
        };
        this.setAuditDuration = Object.assign(setAuditDuration_send, {
            call: setAuditDuration_call
        });
        let setMinAuditRequired_send = async (minAuditRequired, options) => {
            let result = await this.send('setMinAuditRequired', [this.wallet.utils.toString(minAuditRequired)], options);
            return result;
        };
        let setMinAuditRequired_call = async (minAuditRequired, options) => {
            let result = await this.call('setMinAuditRequired', [this.wallet.utils.toString(minAuditRequired)], options);
            return;
        };
        this.setMinAuditRequired = Object.assign(setMinAuditRequired_send, {
            call: setMinAuditRequired_call
        });
        let setQuorum_send = async (quorum, options) => {
            let result = await this.send('setQuorum', [this.wallet.utils.toString(quorum)], options);
            return result;
        };
        let setQuorum_call = async (quorum, options) => {
            let result = await this.call('setQuorum', [this.wallet.utils.toString(quorum)], options);
            return;
        };
        this.setQuorum = Object.assign(setQuorum_send, {
            call: setQuorum_call
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
    }
}
AuditInfo._abi = AuditInfo_json_1.default.abi;
exports.AuditInfo = AuditInfo;
