"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleInfo = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const ModuleInfo_json_1 = __importDefault(require("./ModuleInfo.json"));
class ModuleInfo extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ModuleInfo_json_1.default.abi, ModuleInfo_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
    }
    parseCurrentVersionEvent(receipt) {
        return this.parseEvents(receipt, "CurrentVersion").map(e => this.decodeCurrentVersionEvent(e));
    }
    decodeCurrentVersionEvent(event) {
        let result = event.data;
        return {
            packageHash: result.packageHash,
            version: result.version,
            currVersionHash: result.currVersionHash,
            _event: event
        };
    }
    parseNewPackageEvent(receipt) {
        return this.parseEvents(receipt, "NewPackage").map(e => this.decodeNewPackageEvent(e));
    }
    decodeNewPackageEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            packageName: result.packageName,
            packageHash: result.packageHash,
            _event: event
        };
    }
    parseNewReleaseEvent(receipt) {
        return this.parseEvents(receipt, "NewRelease").map(e => this.decodeNewReleaseEvent(e));
    }
    decodeNewReleaseEvent(event) {
        let result = event.data;
        return {
            packageHash: result.packageHash,
            version: result.version,
            uri: result.uri,
            _event: event
        };
    }
    assign() {
        let getAllOwnerPackages_call = async (owner, options) => {
            let result = await this.call('getAllOwnerPackages', [owner], options);
            return result;
        };
        this.getAllOwnerPackages = getAllOwnerPackages_call;
        let getAllOwnerPackagesAndHash_call = async (owner, options) => {
            let result = await this.call('getAllOwnerPackagesAndHash', [owner], options);
            return {
                packageNames: result.packageNames,
                packageHashes: result.packageHashes,
                packages: result.packages.map(e => ({
                    owner: e.owner,
                    currVersion: e.currVersion,
                    currVersionHash: e.currVersionHash
                }))
            };
        };
        this.getAllOwnerPackagesAndHash = getAllOwnerPackagesAndHash_call;
        let getAllpackageReleases_call = async (packageHash, options) => {
            let result = await this.call('getAllpackageReleases', [this.wallet.utils.stringToBytes32(packageHash)], options);
            return (result.map(e => ({
                version: e.version,
                uri: e.uri
            })));
        };
        this.getAllpackageReleases = getAllpackageReleases_call;
        let getBatchOwnerPackagesParams = (params) => [params.owner, this.wallet.utils.toString(params.from), this.wallet.utils.toString(params.length)];
        let getBatchOwnerPackages_call = async (params, options) => {
            let result = await this.call('getBatchOwnerPackages', getBatchOwnerPackagesParams(params), options);
            return result;
        };
        this.getBatchOwnerPackages = getBatchOwnerPackages_call;
        let getBatchOwnerPackagesAndHashParams = (params) => [params.owner, this.wallet.utils.toString(params.from), this.wallet.utils.toString(params.length)];
        let getBatchOwnerPackagesAndHash_call = async (params, options) => {
            let result = await this.call('getBatchOwnerPackagesAndHash', getBatchOwnerPackagesAndHashParams(params), options);
            return {
                packageNames: result.packageNames,
                packageHashes: result.packageHashes,
                packages: result.packages.map(e => ({
                    owner: e.owner,
                    currVersion: e.currVersion,
                    currVersionHash: e.currVersionHash
                }))
            };
        };
        this.getBatchOwnerPackagesAndHash = getBatchOwnerPackagesAndHash_call;
        let getBatchpackageReleasesParams = (params) => [this.wallet.utils.stringToBytes32(params.packageHash), this.wallet.utils.toString(params.from), this.wallet.utils.toString(params.length)];
        let getBatchpackageReleases_call = async (params, options) => {
            let result = await this.call('getBatchpackageReleases', getBatchpackageReleasesParams(params), options);
            return (result.map(e => ({
                version: e.version,
                uri: e.uri
            })));
        };
        this.getBatchpackageReleases = getBatchpackageReleases_call;
        let ownerPackagesParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
        let ownerPackages_call = async (params, options) => {
            let result = await this.call('ownerPackages', ownerPackagesParams(params), options);
            return result;
        };
        this.ownerPackages = ownerPackages_call;
        let ownerPackagesIndexParams = (params) => [params.param1, params.param2];
        let ownerPackagesIndex_call = async (params, options) => {
            let result = await this.call('ownerPackagesIndex', ownerPackagesIndexParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.ownerPackagesIndex = ownerPackagesIndex_call;
        let ownerPackagesLength_call = async (owner, options) => {
            let result = await this.call('ownerPackagesLength', [owner], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.ownerPackagesLength = ownerPackagesLength_call;
        let packageProperties_call = async (param1, options) => {
            let result = await this.call('packageProperties', [this.wallet.utils.stringToBytes32(param1)], options);
            return {
                owner: result.owner,
                currVersion: result.currVersion,
                currVersionHash: result.currVersionHash
            };
        };
        this.packageProperties = packageProperties_call;
        let packageReleasesParams = (params) => [this.wallet.utils.stringToBytes32(params.param1), this.wallet.utils.toString(params.param2)];
        let packageReleases_call = async (params, options) => {
            let result = await this.call('packageReleases', packageReleasesParams(params), options);
            return {
                version: result.version,
                uri: result.uri
            };
        };
        this.packageReleases = packageReleases_call;
        let packageReleasesIndexParams = (params) => [this.wallet.utils.stringToBytes32(params.param1), params.param2];
        let packageReleasesIndex_call = async (params, options) => {
            let result = await this.call('packageReleasesIndex', packageReleasesIndexParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.packageReleasesIndex = packageReleasesIndex_call;
        let packageReleasesLength_call = async (packageHash, options) => {
            let result = await this.call('packageReleasesLength', [this.wallet.utils.stringToBytes32(packageHash)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.packageReleasesLength = packageReleasesLength_call;
        let addPackage_send = async (packageName, options) => {
            let result = await this.send('addPackage', [packageName], options);
            return result;
        };
        let addPackage_call = async (packageName, options) => {
            let result = await this.call('addPackage', [packageName], options);
            return;
        };
        this.addPackage = Object.assign(addPackage_send, {
            call: addPackage_call
        });
        let addReleaseParams = (params) => [this.wallet.utils.stringToBytes32(params.packageHash), params.version, params.uri, params.pulishRelease];
        let addRelease_send = async (params, options) => {
            let result = await this.send('addRelease', addReleaseParams(params), options);
            return result;
        };
        let addRelease_call = async (params, options) => {
            let result = await this.call('addRelease', addReleaseParams(params), options);
            return;
        };
        this.addRelease = Object.assign(addRelease_send, {
            call: addRelease_call
        });
        let setCurrentVersionParams = (params) => [this.wallet.utils.stringToBytes32(params.packageHash), params.version];
        let setCurrentVersion_send = async (params, options) => {
            let result = await this.send('setCurrentVersion', setCurrentVersionParams(params), options);
            return result;
        };
        let setCurrentVersion_call = async (params, options) => {
            let result = await this.call('setCurrentVersion', setCurrentVersionParams(params), options);
            return;
        };
        this.setCurrentVersion = Object.assign(setCurrentVersion_send, {
            call: setCurrentVersion_call
        });
    }
}
ModuleInfo._abi = ModuleInfo_json_1.default.abi;
exports.ModuleInfo = ModuleInfo;
