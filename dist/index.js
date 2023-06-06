define("@scom/portal-contract/contracts/AuditInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/AuditInfo.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract ProjectInfo", "name": "_projectInfo", "type": "address" }, { "internalType": "contract AuditorInfo", "name": "_auditorInfo", "type": "address" }, { "internalType": "uint256", "name": "_quorum", "type": "uint256" }, { "internalType": "uint256", "name": "_auditDuration", "type": "uint256" }, { "internalType": "uint256", "name": "_minAuditRequired", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "auditor", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "packageVersionsId", "type": "uint256" }, { "indexed": false, "internalType": "enum AuditInfo.AuditResult", "name": "auditResult", "type": "uint8" }, { "indexed": false, "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "AddAuditReport", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "inputs": [], "name": "QUORUM_BASE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageVersionsId", "type": "uint256" }, { "internalType": "enum AuditInfo.AuditResult", "name": "auditResult", "type": "uint8" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "addAuditReport", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "auditDuration", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "auditHistory", "outputs": [{ "internalType": "enum AuditInfo.AuditResult", "name": "auditResult", "type": "uint8" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageVersionsId", "type": "uint256" }], "name": "auditHistoryAuditorLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageVersionsId", "type": "uint256" }, { "internalType": "address", "name": "auditor", "type": "address" }], "name": "auditHistoryLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "auditorInfo", "outputs": [{ "internalType": "contract AuditorInfo", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageVersionsId", "type": "uint256" }], "name": "getLastAuditResult", "outputs": [{ "internalType": "address[]", "name": "auditors", "type": "address[]" }, { "internalType": "enum AuditInfo.AuditResult[]", "name": "results", "type": "uint8[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "lastAuditResultBeforeAuditPeriod", "outputs": [{ "internalType": "enum AuditInfo.AuditResult", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "latestAuditResult", "outputs": [{ "internalType": "enum AuditInfo.AuditResult", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "minAuditRequired", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageVersionsAuditors", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "packageVersionsAuditorsInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "projectInfo", "outputs": [{ "internalType": "contract ProjectInfo", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "quorum", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_auditDuration", "type": "uint256" }], "name": "setAuditDuration", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_minAuditRequired", "type": "uint256" }], "name": "setMinAuditRequired", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_quorum", "type": "uint256" }], "name": "setQuorum", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b5060405162001b2838038062001b288339810160408190526200003491620000ed565b600080546001600160a01b0319163317905560016003556103e88310620000925760405162461bcd60e51b815260206004820152600e60248201526d696e76616c69642071756f72756d60901b604482015260640160405180910390fd5b600480546001600160a01b039687166001600160a01b0319918216179091556005805495909616941693909317909355600b55600d91909155600c5562000145565b6001600160a01b0381168114620000ea57600080fd5b50565b600080600080600060a086880312156200010657600080fd5b85516200011381620000d4565b60208701519095506200012681620000d4565b6040870151606088015160809098015196999198509695945092505050565b6119d380620001556000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c806360536172116100ee578063a8e5ed2111610097578063c1ba4e5911610071578063c1ba4e59146103ea578063d4ee1d90146103fd578063e3dcc5261461041d578063f2fde38b1461043e57600080fd5b8063a8e5ed21146103a1578063ac1c4f4c146103aa578063be12f753146103ca57600080fd5b80638da5cb5b116100c85780638da5cb5b1461035b5780639c52a7f11461037b578063a2f55ae51461038e57600080fd5b8063605361721461031d5780636dfc33aa1461032557806375a320b31461033857600080fd5b80632de703f91161015057806357d441cb1161012a57806357d441cb146102d55780635bc8f9b8146102e85780635d6bade01461030a57600080fd5b80632de703f91461026e5780633fd8cc4e14610299578063484146c1146102cc57600080fd5b80631703a018116101815780631703a0181461020d578063185b69101461021657806328e6c8ab1461025b57600080fd5b8063083ba199146101a85780630fac3451146101e157806311fd63b8146101f6575b600080fd5b6101cb6101b6366004611287565b60096020526000908152604090205460ff1681565b6040516101d8919061130a565b60405180910390f35b6101f46101ef366004611287565b610451565b005b6101ff600c5481565b6040519081526020016101d8565b6101ff600b5481565b6004546102369073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101d8565b6101ff610269366004611341565b61047a565b6101ff61027c366004611341565b600860209081526000928352604080842090915290825290205481565b6102bc6102a736600461136d565b60026020526000908152604090205460ff1681565b60405190151581526020016101d8565b6101ff6103e881565b6101f46102e336600461138f565b610580565b6102fb6102f636600461141c565b610b74565b6040516101d893929190611478565b6102366103183660046114df565b610c5f565b6101f4610ca4565b6101f4610333366004611287565b610dce565b6101cb610346366004611287565b600a6020526000908152604090205460ff1681565b6000546102369073ffffffffffffffffffffffffffffffffffffffff1681565b6101f461038936600461136d565b610df7565b6101f461039c36600461136d565b610e9e565b6101ff600d5481565b6005546102369073ffffffffffffffffffffffffffffffffffffffff1681565b6101ff6103d8366004611287565b60009081526007602052604090205490565b6101f46103f8366004611287565b610f41565b6001546102369073ffffffffffffffffffffffffffffffffffffffff1681565b61043061042b366004611287565b610f6a565b6040516101d8929190611501565b6101f461044c36600461136d565b611157565b60005473ffffffffffffffffffffffffffffffffffffffff16331461047557600080fd5b600d55565b6000828152600660205260408120805473ffffffffffffffffffffffffffffffffffffffff8416919083906104b1576104b1611599565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff160361050a57600083815260076020526040812080549091906104f7576104f7611599565b600091825260209091200154905061057a565b600083815260086020908152604080832073ffffffffffffffffffffffffffffffffffffffff86168452909152902054801561057357600084815260076020526040902080548290811061056057610560611599565b6000918252602090912001549150610578565b600091505b505b92915050565b6005546040517fb7419ee100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b7419ee190602401602060405180830381865afa1580156105ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061291906115c8565b61067d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f6e6f742066726f6d206163746976652061756469746f7200000000000000000060448201526064015b60405180910390fd5b6000848152600760205260408120549081900361070d5760008581526006602090815260408083208054600181810183559185528385200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001633908117909155898552600884528285209085528352818420859055888452600790925282208054909101815590526107ae565b6000858152600860209081526040808320338452909152812054908190036107a85760008681526006602090815260408083208054600181810183559185528385200180547fffffffffffffffffffffffff000000000000000000000000000000000000000016339081179091558a8552600884528285209085528352818420869055898452600790925282208054909101815590526107ac565b8091505b505b60008581526007602052604090208054829081106107ce576107ce611599565b9060005260206000200160405180606001604052808660018111156107f5576107f56112a0565b815260200185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093855250504260209384015250835460018181018655948252919020825160039092020180549293909283917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911690838181111561088e5761088e6112a0565b021790555060208281015180516108ab92600185019201906111ee565b50604082015181600201555050843373ffffffffffffffffffffffffffffffffffffffff167f68f77877df899ccf85484ce7965cbf190f87968c4601e950ed6cac43031a4a86868686604051610903939291906115ea565b60405180910390a3600085815260076020526040902054600c548110610b6c5760006103e8600b54836109369190611674565b61094091906116b1565b90506000805b838110156109f957600089815260076020526040812080548390811061096e5761096e611599565b6000918252602090912001905060018154829061098d906001906116ec565b8154811061099d5761099d611599565b600091825260209091206003909102015460ff1660018111156109c2576109c26112a0565b036109e657836109d181611703565b945050836000036109e65760019250506109f9565b50806109f181611738565b915050610946565b50600088815260096020526040902080548291907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660018381811115610a4257610a426112a0565b0217905550600480546040517f723dd3da0000000000000000000000000000000000000000000000000000000081529182018a905260009173ffffffffffffffffffffffffffffffffffffffff9091169063723dd3da90602401600060405180830381865afa158015610ab9573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610aff919081019061186e565b945050505050600d5481610b139190611932565b421015610b68576000898152600a6020526040902080548391907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660018381811115610b6257610b626112a0565b02179055505b5050505b505050505050565b60076020528260005260406000208281548110610b9057600080fd5b906000526020600020018181548110610ba857600080fd5b60009182526020909120600390910201805460018201805460ff9092169550919350909150610bd69061194a565b80601f0160208091040260200160405190810160405280929190818152602001828054610c029061194a565b8015610c4f5780601f10610c2457610100808354040283529160200191610c4f565b820191906000526020600020905b815481529060010190602001808311610c3257829003601f168201915b5050505050908060020154905083565b60066020528160005260406000208181548110610c7b57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610d4b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610674565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff163314610df257600080fd5b600c55565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e1b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ec257600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610e93565b60005473ffffffffffffffffffffffffffffffffffffffff163314610f6557600080fd5b600b55565b60008181526007602052604090205460609081908067ffffffffffffffff811115610f9757610f97611770565b604051908082528060200260200182016040528015610fc0578160200160208202803683370190505b5092508067ffffffffffffffff811115610fdc57610fdc611770565b604051908082528060200260200182016040528015611005578160200160208202803683370190505b50915060005b8181101561115057600085815260066020526040902080548290811061103357611033611599565b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684828151811061107057611070611599565b73ffffffffffffffffffffffffffffffffffffffff90921660209283029190910182015260008681526007909152604081208054839081106110b4576110b4611599565b90600052602060002001905080600182805490506110d291906116ec565b815481106110e2576110e2611599565b6000918252602090912060039091020154845160ff9091169085908490811061110d5761110d611599565b60200260200101906001811115611126576111266112a0565b90816001811115611139576111396112a0565b90525081905061114881611738565b91505061100b565b5050915091565b60005473ffffffffffffffffffffffffffffffffffffffff16331461117b57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610e93565b8280546111fa9061194a565b90600052602060002090601f01602090048101928261121c5760008555611262565b82601f1061123557805160ff1916838001178555611262565b82800160010185558215611262579182015b82811115611262578251825591602001919060010190611247565b5061126e929150611272565b5090565b5b8082111561126e5760008155600101611273565b60006020828403121561129957600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110611306577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b6020810161057a82846112cf565b803573ffffffffffffffffffffffffffffffffffffffff8116811461133c57600080fd5b919050565b6000806040838503121561135457600080fd5b8235915061136460208401611318565b90509250929050565b60006020828403121561137f57600080fd5b61138882611318565b9392505050565b600080600080606085870312156113a557600080fd5b843593506020850135600281106113bb57600080fd5b9250604085013567ffffffffffffffff808211156113d857600080fd5b818701915087601f8301126113ec57600080fd5b8135818111156113fb57600080fd5b88602082850101111561140d57600080fd5b95989497505060200194505050565b60008060006060848603121561143157600080fd5b505081359360208301359350604090920135919050565b60005b8381101561146357818101518382015260200161144b565b83811115611472576000848401525b50505050565b61148281856112cf565b60606020820152600083518060608401526114a4816080850160208801611448565b604083019390935250601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160160800192915050565b600080604083850312156114f257600080fd5b50508035926020909101359150565b604080825283519082018190526000906020906060840190828701845b8281101561155057815173ffffffffffffffffffffffffffffffffffffffff168452928401929084019060010161151e565b5050508381038285015284518082528583019183019060005b8181101561158c5761157c8385516112cf565b9284019291840191600101611569565b5090979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156115da57600080fd5b8151801515811461138857600080fd5b6115f481856112cf565b60406020820152816040820152818360608301376000818301606090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156116ac576116ac611645565b500290565b6000826116e7577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000828210156116fe576116fe611645565b500390565b60008161171257611712611645565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361176957611769611645565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156117c2576117c2611770565b60405290565b600082601f8301126117d957600080fd5b815167ffffffffffffffff808211156117f4576117f4611770565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561183a5761183a611770565b8160405283815286602085880101111561185357600080fd5b611864846020830160208901611448565b9695505050505050565b600080600080600085870360e081121561188757600080fd5b8651955060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0820112156118bb57600080fd5b506118c461179f565b602087015181526040870151602082015260608701516040820152809450506080860151600381106118f557600080fd5b60a087015190935067ffffffffffffffff81111561191257600080fd5b61191e888289016117c8565b92505060c086015190509295509295909350565b6000821982111561194557611945611645565b500190565b600181811c9082168061195e57607f821691505b602082108103611997577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea2646970667358221220f114fe0a86c6ee67346af06c4506b20157d0f325f8d7697eb4b894ae26f5be3764736f6c634300080d0033"
    };
});
define("@scom/portal-contract/contracts/AuditInfo.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/portal-contract/contracts/AuditInfo.json.ts"], function (require, exports, eth_contract_1, AuditInfo_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuditInfo = void 0;
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
});
define("@scom/portal-contract/contracts/AuditorInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/AuditorInfo.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract IERC20", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "_cooldownPeriod", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "auditor", "type": "address" }], "name": "AddAuditor", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "auditor", "type": "address" }], "name": "DisableAuditor", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "cooldownPeriod", "type": "uint256" }], "name": "SetCooldownPeriod", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "StakeBond", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "UnstakeBondRequest", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "WithdrawBond", "type": "event" },
            { "inputs": [], "name": "MAX_COOLDOWN_PERIOD", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "auditor", "type": "address" }], "name": "addAuditor", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "auditorBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "auditorIdCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "auditorIds", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "auditorsData", "outputs": [{ "internalType": "address", "name": "auditor", "type": "address" }, { "internalType": "enum AuditorInfo.AuditorStatus", "name": "status", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "cooldownPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "auditor", "type": "address" }], "name": "disableAuditor", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "auditorIdStart", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getAuditors", "outputs": [{ "components": [{ "internalType": "address", "name": "auditor", "type": "address" }, { "internalType": "enum AuditorInfo.AuditorStatus", "name": "status", "type": "uint8" }], "internalType": "struct AuditorInfo.AuditorData[]", "name": "auditors", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isActiveAuditor", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pendingWithdrawal", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "releaseTime", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_cooldownPeriod", "type": "uint256" }], "name": "setCooldownPeriod", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stakeBond", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "unstakeBondRequest", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "withdrawBond", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60a060405234801561001057600080fd5b50604051611fc3380380611fc383398101604081905261002f9161005d565b600080546001600160a01b0319163317905560016003556001600160a01b0391909116608052600555610097565b6000806040838503121561007057600080fd5b82516001600160a01b038116811461008757600080fd5b6020939093015192949293505050565b608051611eee6100d5600039600081816104180152818161097d01528181610bce015281816115b00152818161164c01526116a40152611eee6000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c806380ea3de1116100e3578063bcdb851d1161008c578063f2fde38b11610066578063f2fde38b146103ed578063f5d0278414610400578063fc0c546a1461041357600080fd5b8063bcdb851d146103b1578063d4ee1d90146103ba578063e429cef1146103da57600080fd5b80639c52a7f1116100bd5780639c52a7f114610378578063a2f55ae51461038b578063b7419ee11461039e57600080fd5b806380ea3de1146103005780638c345172146103135780638da5cb5b1461033357600080fd5b80635f3416fb1161014557806366eb9cec1161011f57806366eb9cec146102c557806369b68f20146102cd57806377903d72146102e057600080fd5b80635f3416fb1461023c578063605361721461025c57806360c4aa1f1461026457600080fd5b806313d5e8861161017657806313d5e886146101c35780633fd8cc4e146101ff578063556d1a091461023257600080fd5b806304646a49146101925780630f1c6ec6146101ae575b600080fd5b61019b60055481565b6040519081526020015b60405180910390f35b6101c16101bc366004611b7d565b61043a565b005b6101ea6101d1366004611b7d565b6009602052600090815260409020805460019091015482565b604080519283526020830191909152016101a5565b61022261020d366004611b96565b60026020526000908152604090205460ff1681565b60405190151581526020016101a5565b61019b62093a8081565b61019b61024a366004611b96565b60076020526000908152604090205481565b6101c1610667565b6102b7610272366004611b7d565b60066020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900460ff1682565b6040516101a5929190611c36565b6101c1610791565b6101c16102db366004611b7d565b6109d6565b6102f36102ee366004611c60565b610ca2565b6040516101a59190611c82565b6101c161030e366004611b7d565b610e0b565b61019b610321366004611b7d565b60086020526000908152604090205481565b6000546103539073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a5565b6101c1610386366004611b96565b610ed8565b6101c1610399366004611b96565b610f78565b6102226103ac366004611b96565b61101b565b61019b60045481565b6001546103539073ffffffffffffffffffffffffffffffffffffffff1681565b6101c16103e8366004611b96565b611090565b6101c16103fb366004611b96565b611310565b6101c161040e366004611b96565b6113a7565b6103537f000000000000000000000000000000000000000000000000000000000000000081565b33600090815260076020526040902054801580159061049257506000808281526006602052604090205474010000000000000000000000000000000000000000900460ff16600181111561049057610490611bcc565b145b6104fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f6e6f742066726f6d206163746976652061756469746f7200000000000000000060448201526064015b60405180910390fd5b600260035403610569576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104f4565b6002600355816105d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d20300000000000000000000000000000000000000000000060448201526064016104f4565b6105de8261157f565b3360009081526007602090815260408083205480845260089092528220549294509161060b908590611d1f565b600083815260086020908152604091829020839055815187815290810183905291925033917fef09830aa6d9761a05de9164a872a4bdc0fcf49518db2cf33b7ec0fbac8c24a391015b60405180910390a2505060016003555050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461070e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016104f4565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b3360009081526007602052604090205480158015906107e957506000808281526006602052604090205474010000000000000000000000000000000000000000900460ff1660018111156107e7576107e7611bcc565b145b61084f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f6e6f742066726f6d206163746976652061756469746f7200000000000000000060448201526064016104f4565b6002600354036108bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104f4565b6002600355336000908152600760209081526040808320548084526009909252909120600181015442101561094c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f706c65617365207761697400000000000000000000000000000000000000000060448201526064016104f4565b80546000838152600960205260408120818155600101556109a473ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163383611734565b60405181815233907f1e85dc785ce23b2937c3586b4fe81fb37118b9318e9203bea983f2c5bb6ca59590602001610654565b336000908152600760205260409020548015801590610a2e57506000808281526006602052604090205474010000000000000000000000000000000000000000900460ff166001811115610a2c57610a2c611bcc565b145b610a94576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f6e6f742066726f6d206163746976652061756469746f7200000000000000000060448201526064016104f4565b600260035403610b00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104f4565b600260035581610b6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d20300000000000000000000000000000000000000000000060448201526064016104f4565b336000908152600760209081526040808320548084526008909252822054909190610b98908590611d37565b600083815260086020526040812082905560055491925003610c2f57610bf573ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163386611734565b60405184815233907f1e85dc785ce23b2937c3586b4fe81fb37118b9318e9203bea983f2c5bb6ca5959060200160405180910390a2610c6a565b6000828152600960205260408120805490918691839190610c51908490611d1f565b9091555050600554610c639042611d1f565b6001909101555b604080518581526020810183905233917fb598aaefbe74e8588e20f67924733ccc5a3aa971e912603f0e2dd34d516cf7fc9101610654565b60606004546001610cb39190611d1f565b610cbd8385611d1f565b1115610cdf5782600454610cd19190611d37565b610cdc906001611d1f565b91505b8167ffffffffffffffff811115610cf857610cf8611d4e565b604051908082528060200260200182016040528015610d3d57816020015b6040805180820190915260008082526020820152815260200190600190039081610d165790505b50905060005b82811015610e04576000848152600660209081526040918290208251808401909352805473ffffffffffffffffffffffffffffffffffffffff81168452909183019074010000000000000000000000000000000000000000900460ff166001811115610db157610db1611bcc565b6001811115610dc257610dc2611bcc565b81525050828281518110610dd857610dd8611d7d565b60200260200101819052508380610dee90611dac565b9450508080610dfc90611dac565b915050610d43565b5092915050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e2f57600080fd5b62093a80811115610e9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4d617820636f6f6c646f776e20706572696f64203e2031207765656b2100000060448201526064016104f4565b60058190556040518181527f94714a16ed27a5dc1201f16c27868fa024cb3b7420dd30baa7d06854c4cc54b3906020015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff163314610efc57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a78849101610ecd565b60005473ffffffffffffffffffffffffffffffffffffffff163314610f9c57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610ecd565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260076020526040812054801580159061108957506000808281526006602052604090205474010000000000000000000000000000000000000000900460ff16600181111561108757611087611bcc565b145b9392505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146110b457600080fd5b73ffffffffffffffffffffffffffffffffffffffff8116600090815260076020526040812054908190036111ff576004600081546110f190611dac565b91829055506040805180820190915273ffffffffffffffffffffffffffffffffffffffff84168152909150602081016000905260008281526006602090815260409091208251815473ffffffffffffffffffffffffffffffffffffffff9091167fffffffffffffffffffffffff000000000000000000000000000000000000000082168117835592840151919283917fffffffffffffffffffffff0000000000000000000000000000000000000000001617740100000000000000000000000000000000000000008360018111156111cb576111cb611bcc565b0217905550505073ffffffffffffffffffffffffffffffffffffffff821660009081526007602052604090208190556112cb565b60008181526006602052604090206001815474010000000000000000000000000000000000000000900460ff16600181111561123d5761123d611bcc565b146112a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f61756469746f7220616c7265616479206578697374730000000000000000000060448201526064016104f4565b80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690555b60405173ffffffffffffffffffffffffffffffffffffffff8316907fed1ecf94eb5bfce7b0aaeb460f42f04a1844abdd664b74d4144d81006800088290600090a25050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461133457600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610ecd565b60005473ffffffffffffffffffffffffffffffffffffffff1633146113cb57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081526007602052604090205480611458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f61756469746f72206e6f7420657869737400000000000000000000000000000060448201526064016104f4565b600081815260066020526040812090815474010000000000000000000000000000000000000000900460ff16600181111561149557611495611bcc565b146114fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f61756469746f7220616c72656164792064697361626c6564000000000000000060448201526064016104f4565b80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000017815560405173ffffffffffffffffffffffffffffffffffffffff8416907ff275d9cb928f95f37ce1edc602232801d265d6f9499e2bd2b68775168f4267db90600090a2505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa15801561160c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116309190611de4565b905061167473ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001633308561180d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015611700573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117249190611de4565b61172e9190611d37565b92915050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526118089084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611871565b505050565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261186b9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611786565b50505050565b60006118d3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661197d9092919063ffffffff16565b80519091501561180857808060200190518101906118f19190611dfd565b611808576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104f4565b606061198c8484600085611994565b949350505050565b606082471015611a26576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016104f4565b73ffffffffffffffffffffffffffffffffffffffff85163b611aa4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104f4565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611acd9190611e4b565b60006040518083038185875af1925050503d8060008114611b0a576040519150601f19603f3d011682016040523d82523d6000602084013e611b0f565b606091505b5091509150611b1f828286611b2a565b979650505050505050565b60608315611b39575081611089565b825115611b495782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f49190611e67565b600060208284031215611b8f57600080fd5b5035919050565b600060208284031215611ba857600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461108957600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110611c32577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b73ffffffffffffffffffffffffffffffffffffffff83168152604081016110896020830184611bfb565b60008060408385031215611c7357600080fd5b50508035926020909101359150565b602080825282518282018190526000919060409081850190868401855b82811015611ce3578151805173ffffffffffffffffffffffffffffffffffffffff168552860151611cd287860182611bfb565b509284019290850190600101611c9f565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115611d3257611d32611cf0565b500190565b600082821015611d4957611d49611cf0565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611ddd57611ddd611cf0565b5060010190565b600060208284031215611df657600080fd5b5051919050565b600060208284031215611e0f57600080fd5b8151801515811461108957600080fd5b60005b83811015611e3a578181015183820152602001611e22565b8381111561186b5750506000910152565b60008251611e5d818460208701611e1f565b9190910192915050565b6020815260008251806020840152611e86816040850160208701611e1f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220c12ea9f668b474ddc5db1338858782c5ef49baca746f1ec1ef26e3d48f8a2e2664736f6c634300080d0033"
    };
});
define("@scom/portal-contract/contracts/AuditorInfo.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/portal-contract/contracts/AuditorInfo.json.ts"], function (require, exports, eth_contract_2, AuditorInfo_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuditorInfo = void 0;
    class AuditorInfo extends eth_contract_2.Contract {
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
                cooldownPeriod: new eth_contract_2.BigNumber(result.cooldownPeriod),
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
                amount: new eth_contract_2.BigNumber(result.amount),
                newBalance: new eth_contract_2.BigNumber(result.newBalance),
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
                amount: new eth_contract_2.BigNumber(result.amount),
                newBalance: new eth_contract_2.BigNumber(result.newBalance),
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
                amount: new eth_contract_2.BigNumber(result.amount),
                _event: event
            };
        }
        assign() {
            let MAX_COOLDOWN_PERIOD_call = async (options) => {
                let result = await this.call('MAX_COOLDOWN_PERIOD', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.MAX_COOLDOWN_PERIOD = MAX_COOLDOWN_PERIOD_call;
            let auditorBalance_call = async (param1, options) => {
                let result = await this.call('auditorBalance', [this.wallet.utils.toString(param1)], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.auditorBalance = auditorBalance_call;
            let auditorIdCount_call = async (options) => {
                let result = await this.call('auditorIdCount', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.auditorIdCount = auditorIdCount_call;
            let auditorIds_call = async (param1, options) => {
                let result = await this.call('auditorIds', [param1], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.auditorIds = auditorIds_call;
            let auditorsData_call = async (param1, options) => {
                let result = await this.call('auditorsData', [this.wallet.utils.toString(param1)], options);
                return {
                    auditor: result.auditor,
                    status: new eth_contract_2.BigNumber(result.status)
                };
            };
            this.auditorsData = auditorsData_call;
            let cooldownPeriod_call = async (options) => {
                let result = await this.call('cooldownPeriod', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.cooldownPeriod = cooldownPeriod_call;
            let getAuditorsParams = (params) => [this.wallet.utils.toString(params.auditorIdStart), this.wallet.utils.toString(params.length)];
            let getAuditors_call = async (params, options) => {
                let result = await this.call('getAuditors', getAuditorsParams(params), options);
                return (result.map(e => ({
                    auditor: e.auditor,
                    status: new eth_contract_2.BigNumber(e.status)
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
                    amount: new eth_contract_2.BigNumber(result.amount),
                    releaseTime: new eth_contract_2.BigNumber(result.releaseTime)
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
});
define("@scom/portal-contract/contracts/Authorization.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/Authorization.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "608060405234801561001057600080fd5b50600080546001600160a01b031916331790556104e4806100326000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639c52a7f11161005b5780639c52a7f114610109578063a2f55ae51461011c578063d4ee1d901461012f578063f2fde38b1461014f57600080fd5b80633fd8cc4e1461008257806360536172146100ba5780638da5cb5b146100c4575b600080fd5b6100a5610090366004610471565b60026020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100c2610162565b005b6000546100e49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b1565b6100c2610117366004610471565b610290565b6100c261012a366004610471565b610337565b6001546100e49073ffffffffffffffffffffffffffffffffffffffff1681565b6100c261015d366004610471565b6103da565b60015473ffffffffffffffffffffffffffffffffffffffff16331461020d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840160405180910390fd5b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102b457600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461035b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910161032c565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103fe57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b9060200161032c565b60006020828403121561048357600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146104a757600080fd5b939250505056fea2646970667358221220b6523287b342d9ec3fca18b09875ca00358cfbd586d642b53bb7ac292207227664736f6c634300080d0033"
    };
});
define("@scom/portal-contract/contracts/Authorization.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/portal-contract/contracts/Authorization.json.ts"], function (require, exports, eth_contract_3, Authorization_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Authorization = void 0;
    class Authorization extends eth_contract_3.Contract {
        constructor(wallet, address) {
            super(wallet, address, Authorization_json_1.default.abi, Authorization_json_1.default.bytecode);
            this.assign();
        }
        deploy(options) {
            return this.__deploy([], options);
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
    Authorization._abi = Authorization_json_1.default.abi;
    exports.Authorization = Authorization;
});
define("@scom/portal-contract/contracts/DomainInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/DomainInfo.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract IERC20", "name": "_token", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "domainName", "type": "string" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "domainName", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "Deposit", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "domainName", "type": "string" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "Spend", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "domainName", "type": "string" }, { "indexed": false, "internalType": "uint8", "name": "domainType", "type": "uint8" }, { "indexed": false, "internalType": "string", "name": "module", "type": "string" }], "name": "UpdateDomainInfo", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "domainName", "type": "string" }, { "indexed": false, "internalType": "string", "name": "module", "type": "string" }], "name": "UpdateDomainModule", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "domainName", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "Withdraw", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" }], "name": "domainModule", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" }], "name": "domainType", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "domainName", "type": "string" }], "name": "getDomainInfo", "outputs": [{ "internalType": "uint8", "name": "moduleType", "type": "uint8" }, { "internalType": "string", "name": "module", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "address", "name": "destination", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "spend", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "uint8", "name": "moduleType", "type": "uint8" }, { "internalType": "string", "name": "module", "type": "string" }], "name": "updateDomainInfo", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "string", "name": "module", "type": "string" }], "name": "updateDomainModule", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60a060405234801561001057600080fd5b50604051620023333803806200233383398101604081905261003191610059565b600080546001600160a01b0319163317905560016003556001600160a01b0316608052610089565b60006020828403121561006b57600080fd5b81516001600160a01b038116811461008257600080fd5b9392505050565b60805161226b620000c8600039600081816103fd0152818161058601528181610d5401528181611564015281816116000152611658015261226b6000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c80638e27d719116100cd578063b9b092c811610081578063e80ef21611610066578063e80ef216146103d2578063f2fde38b146103e5578063fc0c546a146103f857600080fd5b8063b9b092c814610376578063d4ee1d90146103b257600080fd5b80639d204278116100b25780639d204278146102f2578063a2f55ae514610343578063a7b055b31461035657600080fd5b80638e27d719146102cc5780639c52a7f1146102df57600080fd5b806360536172116101245780637709aac7116101095780637709aac7146102615780637ee9cef0146102745780638da5cb5b1461028757600080fd5b806360536172146102095780636de9c6e61461021157600080fd5b806337ac63b71161015557806337ac63b7146101995780633b80430f146101ac5780633fd8cc4e146101d657600080fd5b806330b39a62146101715780633518785014610186575b600080fd5b61018461017f366004611b5a565b61041f565b005b610184610194366004611ba6565b61060c565b6101846101a7366004611c5a565b6106f6565b6101bf6101ba366004611cb4565b61077c565b6040516101cd929190611d7d565b60405180910390f35b6101f96101e4366004611d99565b60026020526000908152604090205460ff1681565b60405190151581526020016101cd565b6101846108a2565b61025361021f366004611e8e565b6007602090815260009384526040808520845180860184018051928152908401958401959095209452929052825290205481565b6040519081526020016101cd565b61018461026f366004611eec565b6109cc565b610184610282366004611f58565b610a65565b6000546102a79073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101cd565b6101846102da366004611b5a565b610e0b565b6101846102ed366004611d99565b610f99565b610331610300366004611fc5565b6005602090815260009283526040909220815180830184018051928152908401929093019190912091525460ff1681565b60405160ff90911681526020016101cd565b610184610351366004611d99565b611040565b610369610364366004611fc5565b6110e3565b6040516101cd9190612013565b610253610384366004611fc5565b6006602090815260009283526040909220815180830184018051928152908401929093019190912091525481565b6001546102a79073ffffffffffffffffffffffffffffffffffffffff1681565b6101846103e0366004611c5a565b611199565b6101846103f3366004611d99565b611213565b6102a77f000000000000000000000000000000000000000000000000000000000000000081565b600260035403610490576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600355806104fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d2030000000000000000000000000000000000000000000006044820152606401610487565b33600090815260066020526040808220905183919061051e9087908790612026565b9081526020016040518091039020546105379190612065565b33600090815260066020526040908190209051919250829161055c9087908790612026565b908152604051908190036020019020556105ad73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001633846112aa565b3373ffffffffffffffffffffffffffffffffffffffff167fcab96aa5dae2c7c5f897bf248f4f8531bb6fe7d29c7fac163391926e0bef8313858585856040516105f994939291906120c5565b60405180910390a2505060016003555050565b33600090815260046020526040908190209051839183916106309089908990612026565b90815260405190819003602001902061064a929091611a5a565b503360009081526005602052604090819020905184919061066e9088908890612026565b908152604051908190036020018120805460ff939093167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009093169290921790915533907f1dd5cf9af64bf7411cd2222bc84149ef8841a58465c912adc512580b717b0335906106e790889088908890889088906120ec565b60405180910390a25050505050565b6000805473ffffffffffffffffffffffffffffffffffffffff16815260076020526040808220905161072b9086908690612026565b908152604080516020928190038301902073ffffffffffffffffffffffffffffffffffffffff8816600090815292529020549050610775338585886107708787612065565b611383565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600560205260408082209051606091906107b59086908690612026565b9081526040805191829003602090810183205473ffffffffffffffffffffffffffffffffffffffff89166000908152600490925291902060ff9091169350906108019086908690612026565b9081526020016040518091039020805461081a90612128565b80601f016020809104026020016040519081016040528092919081815260200182805461084690612128565b80156108935780601f1061086857610100808354040283529160200191610893565b820191906000526020600020905b81548152906001019060200180831161087657829003601f168201915b50505050509050935093915050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610949576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610487565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b33600090815260046020526040908190209051839183916109f09088908890612026565b908152604051908190036020019020610a0a929091611a5a565b503373ffffffffffffffffffffffffffffffffffffffff167f8fdcf277ae4a11f2263407e04c5a0ca73a95a5143412f6701a3803ec74e8e68e85858585604051610a57949392919061217b565b60405180910390a250505050565b600260035403610ad1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610487565b600260035580610b3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d2030000000000000000000000000000000000000000000006044820152606401610487565b73ffffffffffffffffffffffffffffffffffffffff8216610bba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f7472616e7366657220746f207a65726f206164647265737300000000000000006044820152606401610487565b73ffffffffffffffffffffffffffffffffffffffff85166000908152600760205260408082209051610bef9087908790612026565b908152604080516020928190038301902073ffffffffffffffffffffffffffffffffffffffff861660009081529252902054905081811015610c8d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f696e73756666696369656e7420616c6c6f77616e6365000000000000000000006044820152606401610487565b73ffffffffffffffffffffffffffffffffffffffff86166000908152600660205260408082209051849190610cc59089908990612026565b908152602001604051809103902054610cde9190612065565b73ffffffffffffffffffffffffffffffffffffffff88166000908152600660205260409081902090519192508291610d199089908990612026565b90815260405190819003602001902055610d3a878787876107708888612065565b610d7b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001685856112aa565b8373ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fd7c0b15ea32a9948b06fee27d39c83085ad847db085fd4fd3e723a0268a3ff4689898887604051610df594939291906120c5565b60405180910390a4505060016003555050505050565b600260035403610e77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610487565b600260035580610ee3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d2030000000000000000000000000000000000000000000006044820152606401610487565b610eec81611533565b3360009081526006602052604080822090519293509091839190610f139087908790612026565b908152602001604051809103902054610f2c91906121a2565b336000908152600660205260409081902090519192508291610f519087908790612026565b9081526040519081900360200181209190915533907fc9c6fab6ecbdd99f0fff2b919fb3ff1ef9ec3e382592cd5323cbb3571da624fc906105f99087908790879087906120c5565b60005473ffffffffffffffffffffffffffffffffffffffff163314610fbd57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461106457600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101611035565b600460209081526000928352604090922081518083018401805192815290840192909301919091209152805461111890612128565b80601f016020809104026020016040519081016040528092919081815260200182805461114490612128565b80156111915780601f1061116657610100808354040283529160200191611191565b820191906000526020600020905b81548152906001019060200180831161117457829003601f168201915b505050505081565b6000805473ffffffffffffffffffffffffffffffffffffffff1681526007602052604080822090516111ce9086908690612026565b908152604080516020928190038301902073ffffffffffffffffffffffffffffffffffffffff88166000908152925290205490506107753385858861077087876121a2565b60005473ffffffffffffffffffffffffffffffffffffffff16331461123757600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001611035565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261137e9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526116e8565b505050565b73ffffffffffffffffffffffffffffffffffffffff8516611400576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f617070726f76652066726f6d20746865207a65726f20616464726573730000006044820152606401610487565b73ffffffffffffffffffffffffffffffffffffffff821661147d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f617070726f766520746f20746865207a65726f206164647265737300000000006044820152606401610487565b73ffffffffffffffffffffffffffffffffffffffff85166000908152600760205260409081902090518291906114b69087908790612026565b90815260408051918290036020908101832073ffffffffffffffffffffffffffffffffffffffff808816600081815292909352929020939093558716907fa6c0f34eded777ad8c063a30e4aaa434929cbc9810c83ef9e7e036fd9f1ef92b90611524908890889087906121ba565b60405180910390a35050505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156115c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e491906121de565b905061162873ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163330856117f4565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156116b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d891906121de565b6116e29190612065565b92915050565b600061174a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166118589092919063ffffffff16565b80519091501561137e578080602001905181019061176891906121f7565b61137e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610487565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526118529085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016112fc565b50505050565b60606118678484600085611871565b90505b9392505050565b606082471015611903576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610487565b73ffffffffffffffffffffffffffffffffffffffff85163b611981576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610487565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516119aa9190612219565b60006040518083038185875af1925050503d80600081146119e7576040519150601f19603f3d011682016040523d82523d6000602084013e6119ec565b606091505b50915091506119fc828286611a07565b979650505050505050565b60608315611a1657508161186a565b825115611a265782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104879190612013565b828054611a6690612128565b90600052602060002090601f016020900481019282611a885760008555611aec565b82601f10611abf578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00823516178555611aec565b82800160010185558215611aec579182015b82811115611aec578235825591602001919060010190611ad1565b50611af8929150611afc565b5090565b5b80821115611af85760008155600101611afd565b60008083601f840112611b2357600080fd5b50813567ffffffffffffffff811115611b3b57600080fd5b602083019150836020828501011115611b5357600080fd5b9250929050565b600080600060408486031215611b6f57600080fd5b833567ffffffffffffffff811115611b8657600080fd5b611b9286828701611b11565b909790965060209590950135949350505050565b600080600080600060608688031215611bbe57600080fd5b853567ffffffffffffffff80821115611bd657600080fd5b611be289838a01611b11565b90975095506020880135915060ff82168214611bfd57600080fd5b90935060408701359080821115611c1357600080fd5b50611c2088828901611b11565b969995985093965092949392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611c5557600080fd5b919050565b60008060008060608587031215611c7057600080fd5b611c7985611c31565b9350602085013567ffffffffffffffff811115611c9557600080fd5b611ca187828801611b11565b9598909750949560400135949350505050565b600080600060408486031215611cc957600080fd5b611cd284611c31565b9250602084013567ffffffffffffffff811115611cee57600080fd5b611cfa86828701611b11565b9497909650939450505050565b60005b83811015611d22578181015183820152602001611d0a565b838111156118525750506000910152565b60008151808452611d4b816020860160208601611d07565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60ff831681526040602082015260006118676040830184611d33565b600060208284031215611dab57600080fd5b61186a82611c31565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f830112611df457600080fd5b813567ffffffffffffffff80821115611e0f57611e0f611db4565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611e5557611e55611db4565b81604052838152866020858801011115611e6e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600060608486031215611ea357600080fd5b611eac84611c31565b9250602084013567ffffffffffffffff811115611ec857600080fd5b611ed486828701611de3565b925050611ee360408501611c31565b90509250925092565b60008060008060408587031215611f0257600080fd5b843567ffffffffffffffff80821115611f1a57600080fd5b611f2688838901611b11565b90965094506020870135915080821115611f3f57600080fd5b50611f4c87828801611b11565b95989497509550505050565b600080600080600060808688031215611f7057600080fd5b611f7986611c31565b9450602086013567ffffffffffffffff811115611f9557600080fd5b611fa188828901611b11565b9095509350611fb4905060408701611c31565b949793965091946060013592915050565b60008060408385031215611fd857600080fd5b611fe183611c31565b9150602083013567ffffffffffffffff811115611ffd57600080fd5b61200985828601611de3565b9150509250929050565b60208152600061186a6020830184611d33565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561207757612077612036565b500390565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6060815260006120d960608301868861207c565b6020830194909452506040015292915050565b60608152600061210060608301878961207c565b60ff86166020840152828103604084015261211c81858761207c565b98975050505050505050565b600181811c9082168061213c57607f821691505b602082108103612175577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60408152600061218f60408301868861207c565b82810360208401526119fc81858761207c565b600082198211156121b5576121b5612036565b500190565b6040815260006121ce60408301858761207c565b9050826020830152949350505050565b6000602082840312156121f057600080fd5b5051919050565b60006020828403121561220957600080fd5b8151801515811461186a57600080fd5b6000825161222b818460208701611d07565b919091019291505056fea2646970667358221220d415c91cad8a0502b251b35f1f45bdf06762cb342567318beba66982dcd0ba8e64736f6c634300080d0033"
    };
});
define("@scom/portal-contract/contracts/DomainInfo.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/portal-contract/contracts/DomainInfo.json.ts"], function (require, exports, eth_contract_4, DomainInfo_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DomainInfo = void 0;
    class DomainInfo extends eth_contract_4.Contract {
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
                value: new eth_contract_4.BigNumber(result.value),
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
                amount: new eth_contract_4.BigNumber(result.amount),
                newBalance: new eth_contract_4.BigNumber(result.newBalance),
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
                amount: new eth_contract_4.BigNumber(result.amount),
                newBalance: new eth_contract_4.BigNumber(result.newBalance),
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
                domainType: new eth_contract_4.BigNumber(result.domainType),
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
                amount: new eth_contract_4.BigNumber(result.amount),
                newBalance: new eth_contract_4.BigNumber(result.newBalance),
                _event: event
            };
        }
        assign() {
            let allowancesParams = (params) => [params.param1, params.param2, params.param3];
            let allowances_call = async (params, options) => {
                let result = await this.call('allowances', allowancesParams(params), options);
                return new eth_contract_4.BigNumber(result);
            };
            this.allowances = allowances_call;
            let balanceOfParams = (params) => [params.param1, params.param2];
            let balanceOf_call = async (params, options) => {
                let result = await this.call('balanceOf', balanceOfParams(params), options);
                return new eth_contract_4.BigNumber(result);
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
                return new eth_contract_4.BigNumber(result);
            };
            this.domainType = domainType_call;
            let getDomainInfoParams = (params) => [params.owner, params.domainName];
            let getDomainInfo_call = async (params, options) => {
                let result = await this.call('getDomainInfo', getDomainInfoParams(params), options);
                return {
                    moduleType: new eth_contract_4.BigNumber(result.moduleType),
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
});
define("@scom/portal-contract/contracts/ModuleInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/ModuleInfo.json.ts'/> 
    exports.default = {
        "abi": [
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }, { "indexed": true, "internalType": "string", "name": "version", "type": "string" }, { "indexed": true, "internalType": "bytes32", "name": "currVersionHash", "type": "bytes32" }], "name": "CurrentVersion", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "string", "name": "packageName", "type": "string" }, { "indexed": true, "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }], "name": "NewPackage", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }, { "indexed": true, "internalType": "string", "name": "version", "type": "string" }, { "indexed": false, "internalType": "string", "name": "uri", "type": "string" }], "name": "NewRelease", "type": "event" },
            { "inputs": [{ "internalType": "string", "name": "packageName", "type": "string" }], "name": "addPackage", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }, { "internalType": "string", "name": "version", "type": "string" }, { "internalType": "string", "name": "uri", "type": "string" }, { "internalType": "bool", "name": "pulishRelease", "type": "bool" }], "name": "addRelease", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "getAllOwnerPackages", "outputs": [{ "internalType": "string[]", "name": "packageNames", "type": "string[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "getAllOwnerPackagesAndHash", "outputs": [{ "internalType": "string[]", "name": "packageNames", "type": "string[]" }, { "internalType": "bytes32[]", "name": "packageHashes", "type": "bytes32[]" }, { "components": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "currVersion", "type": "string" }, { "internalType": "bytes32", "name": "currVersionHash", "type": "bytes32" }], "internalType": "struct ModuleInfo.Package[]", "name": "packages", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }], "name": "getAllpackageReleases", "outputs": [{ "components": [{ "internalType": "string", "name": "version", "type": "string" }, { "internalType": "string", "name": "uri", "type": "string" }], "internalType": "struct ModuleInfo.Release[]", "name": "releases", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "from", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getBatchOwnerPackages", "outputs": [{ "internalType": "string[]", "name": "packageNames", "type": "string[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "from", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getBatchOwnerPackagesAndHash", "outputs": [{ "internalType": "string[]", "name": "packageNames", "type": "string[]" }, { "internalType": "bytes32[]", "name": "packageHashes", "type": "bytes32[]" }, { "components": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "currVersion", "type": "string" }, { "internalType": "bytes32", "name": "currVersionHash", "type": "bytes32" }], "internalType": "struct ModuleInfo.Package[]", "name": "packages", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }, { "internalType": "uint256", "name": "from", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getBatchpackageReleases", "outputs": [{ "components": [{ "internalType": "string", "name": "version", "type": "string" }, { "internalType": "string", "name": "uri", "type": "string" }], "internalType": "struct ModuleInfo.Release[]", "name": "releases", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "ownerPackages", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" }], "name": "ownerPackagesIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "ownerPackagesLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "packageProperties", "outputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "currVersion", "type": "string" }, { "internalType": "bytes32", "name": "currVersionHash", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageReleases", "outputs": [{ "internalType": "string", "name": "version", "type": "string" }, { "internalType": "string", "name": "uri", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }, { "internalType": "string", "name": "", "type": "string" }], "name": "packageReleasesIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }], "name": "packageReleasesLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }, { "internalType": "string", "name": "version", "type": "string" }], "name": "setCurrentVersion", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "608060405234801561001057600080fd5b50612688806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636b13706411610097578063b8b921e611610066578063b8b921e614610274578063bcb6a21a146102b0578063c7ecf2be146102d0578063e834198e1461030c57600080fd5b80636b1370641461020d5780638953480314610220578063ae0efa5914610240578063b40eb9a81461025357600080fd5b806342b4fb70116100d357806342b4fb701461019857806347cebd3e146101ab578063537eb5e2146101cd57806357eae14c146101ed57600080fd5b80630ace8c9a1461010557806323d7cd791461011a57806330bc5ed4146101635780633b3aa3c514610176575b600080fd5b610118610113366004611cbf565b61031f565b005b610150610128366004611d2a565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b6040519081526020015b60405180910390f35b610118610171366004611d4c565b610520565b610189610184366004611ddd565b6107ea565b60405161015a93929190611efc565b6101186101a6366004611ffb565b610bf8565b6101be6101b9366004612047565b610d74565b60405161015a93929190612060565b6101e06101db36600461209f565b610e36565b60405161015a91906120cb565b6102006101fb36600461216e565b611076565b60405161015a9190612198565b61018961021b366004611d2a565b61112f565b61023361022e366004611ddd565b6114a9565b60405161015a91906121ab565b61023361024e366004611d2a565b611652565b6102666102613660046121be565b61174e565b60405161015a9291906121e0565b6101506102823660046122e8565b6002602090815260009283526040909220815180830184018051928152908401929093019190912091525481565b6101506102be366004612047565b60009081526003602052604090205490565b6101506102de366004612336565b6004602090815260009283526040909220815180830184018051928152908401929093019190912091525481565b6101e061031a366004612047565b61189f565b3360009081526001602052604090208054158061039757503360009081526002602052604090819020905161039791839161035d9087908790612367565b9081526020016040518091039020548154811061037c5761037c612377565b906000526020600020018484611a2a9290919263ffffffff16565b610402576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f7061636b61676520616c7265616479206578697374730000000000000000000060448201526064015b60405180910390fd5b8054336000908152600260205260409081902090516104249086908690612367565b9081526040516020918190038201902091909155815460018101835560008381529190912061045591018484611b4b565b50600033848460405160200161046d939291906123a6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152828252805160209182012060008181529182905291902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001633179055915081906104e89086908690612367565b6040519081900381209033907f579649d2aa6da55b0268fdeb659787ece76b47a589d697e308c7ebf945f9c94f90600090a450505050565b60008681526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1633146105ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6e6f742066726f6d207061636b616765206f776e65720000000000000000000060448201526064016103f9565b600086815260036020526040902080541580610623575061062381600460008a815260200190815260200160002088886040516105eb929190612367565b9081526020016040518091039020548154811061060a5761060a612377565b6000918252602090912088918891600290910201611a2a565b610689576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f76657273696f6e20616c7265616479206578697374730000000000000000000060448201526064016103f9565b80546000888152600460205260409081902090516106aa9089908990612367565b908152604080519182900360209081018320939093556060601f8901849004909302820183018152810187815283928291908a908a9081908501838280828437600092019190915250505090825250604080516020601f8901819004810282018101909252878152918101919088908890819084018382808284376000920182905250939094525050835460018101855593815260209081902083518051949560020290910193610762935084929190910190611bed565b50602082810151805161077b9260018501920190611bed565b505050858560405161078e929190612367565b6040518091039020877fb9746d38e4663162c7b0943efcc013d2012228d3e30313994da19f6a5a141ee486866040516107c89291906123e5565b60405180910390a381156107e1576107e1878787611a86565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604090205460609081908190806108228688612461565b1115610835576108328682612479565b94505b8467ffffffffffffffff81111561084e5761084e61220e565b60405190808252806020026020018201604052801561088157816020015b606081526020019060019003908161086c5790505b5093508467ffffffffffffffff81111561089d5761089d61220e565b6040519080825280602002602001820160405280156108c6578160200160208202803683370190505b5092508467ffffffffffffffff8111156108e2576108e261220e565b60405190808252806020026020018201604052801561093257816020015b604080516060808201835260008083526020830191909152918101919091528152602001906001900390816109005790505b50915060005b85811015610bed5773ffffffffffffffffffffffffffffffffffffffff8816600090815260016020526040902080548890811061097757610977612377565b90600052602060002001805461098c90612490565b80601f01602080910402602001604051908101604052809291908181526020018280546109b890612490565b8015610a055780601f106109da57610100808354040283529160200191610a05565b820191906000526020600020905b8154815290600101906020018083116109e857829003601f168201915b5050505050858281518110610a1c57610a1c612377565b602002602001018190525087858281518110610a3a57610a3a612377565b6020026020010151604051602001610a539291906124e3565b60405160208183030381529060405280519060200120848281518110610a7b57610a7b612377565b602002602001018181525050600080858381518110610a9c57610a9c612377565b602002602001015181526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054610b2390612490565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4f90612490565b8015610b9c5780601f10610b7157610100808354040283529160200191610b9c565b820191906000526020600020905b815481529060010190602001808311610b7f57829003601f168201915b50505050508152602001600282015481525050838281518110610bc157610bc1612377565b60200260200101819052508680610bd79061252e565b9750508080610be59061252e565b915050610938565b505093509350939050565b60008381526020819052604090205473ffffffffffffffffffffffffffffffffffffffff163314610c85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6e6f742066726f6d207061636b616765206f776e65720000000000000000000060448201526064016103f9565b6000838152600360205260409020805415801590610cfd5750610cfd81600460008781526020019081526020016000208585604051610cc5929190612367565b90815260200160405180910390205481548110610ce457610ce4612377565b6000918252602090912085918591600290910201611a2a565b610d63576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f76657273696f6e206e6f7420657869737473000000000000000000000000000060448201526064016103f9565b610d6e848484611a86565b50505050565b6000602081905290815260409020805460018201805473ffffffffffffffffffffffffffffffffffffffff9092169291610dad90612490565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd990612490565b8015610e265780601f10610dfb57610100808354040283529160200191610e26565b820191906000526020600020905b815481529060010190602001808311610e0957829003601f168201915b5050505050908060020154905083565b60008381526003602052604090205460609080610e538486612461565b1115610e6657610e638482612479565b92505b8267ffffffffffffffff811115610e7f57610e7f61220e565b604051908082528060200260200182016040528015610ec457816020015b6040805180820190915260608082526020820152815260200190600190039081610e9d5790505b50915060005b8381101561106d576000868152600360205260409020805486908110610ef257610ef2612377565b9060005260206000209060020201604051806040016040529081600082018054610f1b90612490565b80601f0160208091040260200160405190810160405280929190818152602001828054610f4790612490565b8015610f945780601f10610f6957610100808354040283529160200191610f94565b820191906000526020600020905b815481529060010190602001808311610f7757829003601f168201915b50505050508152602001600182018054610fad90612490565b80601f0160208091040260200160405190810160405280929190818152602001828054610fd990612490565b80156110265780601f10610ffb57610100808354040283529160200191611026565b820191906000526020600020905b81548152906001019060200180831161100957829003601f168201915b50505050508152505083828151811061104157611041612377565b602002602001018190525084806110579061252e565b95505080806110659061252e565b915050610eca565b50509392505050565b6001602052816000526040600020818154811061109257600080fd5b906000526020600020016000915091505080546110ae90612490565b80601f01602080910402602001604051908101604052809291908181526020018280546110da90612490565b80156111275780601f106110fc57610100808354040283529160200191611127565b820191906000526020600020905b81548152906001019060200180831161110a57829003601f168201915b505050505081565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602090815260408083208054825181850281018501909352808352606094859485949392919084015b8282101561122257838290600052602060002001805461119590612490565b80601f01602080910402602001604051908101604052809291908181526020018280546111c190612490565b801561120e5780601f106111e35761010080835404028352916020019161120e565b820191906000526020600020905b8154815290600101906020018083116111f157829003601f168201915b505050505081526020019060010190611176565b505082519295508291505067ffffffffffffffff8111156112455761124561220e565b60405190808252806020026020018201604052801561126e578160200160208202803683370190505b5092508067ffffffffffffffff81111561128a5761128a61220e565b6040519080825280602002602001820160405280156112da57816020015b604080516060808201835260008083526020830191909152918101919091528152602001906001900390816112a85790505b50915060005b818110156114a057858582815181106112fb576112fb612377565b60200260200101516040516020016113149291906124e3565b6040516020818303038152906040528051906020012084828151811061133c5761133c612377565b60200260200101818152505060008085838151811061135d5761135d612377565b602002602001015181526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546113e490612490565b80601f016020809104026020016040519081016040528092919081815260200182805461141090612490565b801561145d5780601f106114325761010080835404028352916020019161145d565b820191906000526020600020905b81548152906001019060200180831161144057829003601f168201915b5050505050815260200160028201548152505083828151811061148257611482612377565b602002602001018190525080806114989061252e565b9150506112e0565b50509193909250565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260016020526040902054606090806114dd8486612461565b11156114f0576114ed8482612479565b92505b8267ffffffffffffffff8111156115095761150961220e565b60405190808252806020026020018201604052801561153c57816020015b60608152602001906001900390816115275790505b50915060005b8381101561106d5773ffffffffffffffffffffffffffffffffffffffff8616600090815260016020526040902080548690811061158157611581612377565b90600052602060002001805461159690612490565b80601f01602080910402602001604051908101604052809291908181526020018280546115c290612490565b801561160f5780601f106115e45761010080835404028352916020019161160f565b820191906000526020600020905b8154815290600101906020018083116115f257829003601f168201915b505050505083828151811061162657611626612377565b6020026020010181905250848061163c9061252e565b955050808061164a9061252e565b915050611542565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600160209081526040808320805482518185028101850190935280835260609492939192909184015b828210156117435783829060005260206000200180546116b690612490565b80601f01602080910402602001604051908101604052809291908181526020018280546116e290612490565b801561172f5780601f106117045761010080835404028352916020019161172f565b820191906000526020600020905b81548152906001019060200180831161171257829003601f168201915b505050505081526020019060010190611697565b505050509050919050565b6003602052816000526040600020818154811061176a57600080fd5b90600052602060002090600202016000915091505080600001805461178e90612490565b80601f01602080910402602001604051908101604052809291908181526020018280546117ba90612490565b80156118075780601f106117dc57610100808354040283529160200191611807565b820191906000526020600020905b8154815290600101906020018083116117ea57829003601f168201915b50505050509080600101805461181c90612490565b80601f016020809104026020016040519081016040528092919081815260200182805461184890612490565b80156118955780601f1061186a57610100808354040283529160200191611895565b820191906000526020600020905b81548152906001019060200180831161187857829003601f168201915b5050505050905082565b606060036000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015611743578382906000526020600020906002020160405180604001604052908160008201805461190790612490565b80601f016020809104026020016040519081016040528092919081815260200182805461193390612490565b80156119805780601f1061195557610100808354040283529160200191611980565b820191906000526020600020905b81548152906001019060200180831161196357829003601f168201915b5050505050815260200160018201805461199990612490565b80601f01602080910402602001604051908101604052809291908181526020018280546119c590612490565b8015611a125780601f106119e757610100808354040283529160200191611a12565b820191906000526020600020905b8154815290600101906020018083116119f557829003601f168201915b505050505081525050815260200190600101906118d4565b600081604051602001611a3d9190612566565b604051602081830303815290604052805190602001208484604051602001611a66929190612367565b604051602081830303815290604052805190602001201490509392505050565b6000838152602081905260409020611aa2906001018383611b4b565b506000838383604051602001611aba93929190612638565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152828252805160209182012060008881529182905291902060020181905591508190611b139085908590612367565b6040519081900381209086907f571fbb5167d8bdf75368372c7ff4760e0f3f94fd3ddc5b7dda1735fc5eca793e90600090a450505050565b828054611b5790612490565b90600052602060002090601f016020900481019282611b795760008555611bdd565b82601f10611bb0578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00823516178555611bdd565b82800160010185558215611bdd579182015b82811115611bdd578235825591602001919060010190611bc2565b50611be9929150611c61565b5090565b828054611bf990612490565b90600052602060002090601f016020900481019282611c1b5760008555611bdd565b82601f10611c3457805160ff1916838001178555611bdd565b82800160010185558215611bdd579182015b82811115611bdd578251825591602001919060010190611c46565b5b80821115611be95760008155600101611c62565b60008083601f840112611c8857600080fd5b50813567ffffffffffffffff811115611ca057600080fd5b602083019150836020828501011115611cb857600080fd5b9250929050565b60008060208385031215611cd257600080fd5b823567ffffffffffffffff811115611ce957600080fd5b611cf585828601611c76565b90969095509350505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d2557600080fd5b919050565b600060208284031215611d3c57600080fd5b611d4582611d01565b9392505050565b60008060008060008060808789031215611d6557600080fd5b86359550602087013567ffffffffffffffff80821115611d8457600080fd5b611d908a838b01611c76565b90975095506040890135915080821115611da957600080fd5b50611db689828a01611c76565b90945092505060608701358015158114611dcf57600080fd5b809150509295509295509295565b600080600060608486031215611df257600080fd5b611dfb84611d01565b95602085013595506040909401359392505050565b60005b83811015611e2b578181015183820152602001611e13565b83811115610d6e5750506000910152565b60008151808452611e54816020860160208601611e10565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b84811015611eef577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0868403018952611edd838351611e3c565b98840198925090830190600101611ea3565b5090979650505050505050565b60006060808352611f0f81840187611e86565b83810360208581019190915286518083528782019282019060005b81811015611f4657845183529383019391830191600101611f2a565b505060409250858103838701528087518083528383019150838160051b840101848a0160005b83811015611fe9577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0868403018552815173ffffffffffffffffffffffffffffffffffffffff8151168452878101518a89860152611fcc8b860182611e3c565b918a0151948a019490945294870194925090860190600101611f6c565b50909c9b505050505050505050505050565b60008060006040848603121561201057600080fd5b83359250602084013567ffffffffffffffff81111561202e57600080fd5b61203a86828701611c76565b9497909650939450505050565b60006020828403121561205957600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff8416815260606020820152600061208f6060830185611e3c565b9050826040830152949350505050565b6000806000606084860312156120b457600080fd5b505081359360208301359350604090920135919050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b83811015612160577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08984030185528151805187855261213488860182611e3c565b91890151858303868b015291905061214c8183611e3c565b9689019694505050908601906001016120f2565b509098975050505050505050565b6000806040838503121561218157600080fd5b61218a83611d01565b946020939093013593505050565b602081526000611d456020830184611e3c565b602081526000611d456020830184611e86565b600080604083850312156121d157600080fd5b50508035926020909101359150565b6040815260006121f36040830185611e3c565b82810360208401526122058185611e3c565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261224e57600080fd5b813567ffffffffffffffff808211156122695761226961220e565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156122af576122af61220e565b816040528381528660208588010111156122c857600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156122fb57600080fd5b61230483611d01565b9150602083013567ffffffffffffffff81111561232057600080fd5b61232c8582860161223d565b9150509250929050565b6000806040838503121561234957600080fd5b82359150602083013567ffffffffffffffff81111561232057600080fd5b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008460601b168152818360148301376000910160140190815292915050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561247457612474612432565b500190565b60008282101561248b5761248b612432565b500390565b600181811c908216806124a457607f821691505b6020821081036124dd577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008360601b16815260008251612520816014850160208701611e10565b919091016014019392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361255f5761255f612432565b5060010190565b600080835481600182811c91508083168061258257607f831692505b602080841082036125ba577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b8180156125ce57600181146125fd5761262a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0086168952848901965061262a565b60008a81526020902060005b868110156126225781548b820152908501908301612609565b505084890196505b509498975050505050505050565b83815281836020830137600091016020019081529291505056fea264697066735822122031d0aef7642ea469eae6c6a7a10a95fe9a52019c1313db7d3b579d79fb10859a64736f6c634300080d0033"
    };
});
define("@scom/portal-contract/contracts/ModuleInfo.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/portal-contract/contracts/ModuleInfo.json.ts"], function (require, exports, eth_contract_5, ModuleInfo_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ModuleInfo = void 0;
    class ModuleInfo extends eth_contract_5.Contract {
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
                return new eth_contract_5.BigNumber(result);
            };
            this.ownerPackagesIndex = ownerPackagesIndex_call;
            let ownerPackagesLength_call = async (owner, options) => {
                let result = await this.call('ownerPackagesLength', [owner], options);
                return new eth_contract_5.BigNumber(result);
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
                return new eth_contract_5.BigNumber(result);
            };
            this.packageReleasesIndex = packageReleasesIndex_call;
            let packageReleasesLength_call = async (packageHash, options) => {
                let result = await this.call('packageReleasesLength', [this.wallet.utils.stringToBytes32(packageHash)], options);
                return new eth_contract_5.BigNumber(result);
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
});
define("@scom/portal-contract/contracts/ProjectInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/ProjectInfo.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract IERC20", "name": "_token", "type": "address" }, { "internalType": "contract AuditorInfo", "name": "_auditorInfo", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "admin", "type": "address" }], "name": "AddAdmin", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "admin", "type": "address" }], "name": "AddPackageAdmin", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }, { "indexed": false, "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "NewPackage", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "major", "type": "uint256" }, { "internalType": "uint256", "name": "minor", "type": "uint256" }, { "internalType": "uint256", "name": "patch", "type": "uint256" }], "indexed": false, "internalType": "struct ProjectInfo.SemVer", "name": "version", "type": "tuple" }], "name": "NewPackageVersion", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }, { "indexed": false, "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "NewProject", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "admin", "type": "address" }], "name": "RemoveAdmin", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "admin", "type": "address" }], "name": "RemovePackageAdmin", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }, { "indexed": false, "internalType": "enum ProjectInfo.PackageVersionStatus", "name": "status", "type": "uint8" }], "name": "SetPackageVersionStatus", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "Stake", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "TransferProjectOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "Unstake", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "UpdatePackageIpfsCid", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }], "name": "UpdatePackageName", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "UpdatePackageVersionIpfsCid", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "UpdateProjectIpfsCid", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }], "name": "UpdateProjectName", "type": "event" },
            { "inputs": [{ "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "internalType": "address", "name": "admin", "type": "address" }], "name": "addPackageAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "address", "name": "admin", "type": "address" }], "name": "addProjectAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "auditorInfo", "outputs": [{ "internalType": "contract AuditorInfo", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "bytes32", "name": "category", "type": "bytes32" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "newPackage", "outputs": [{ "internalType": "uint256", "name": "packageId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "major", "type": "uint256" }, { "internalType": "uint256", "name": "minor", "type": "uint256" }, { "internalType": "uint256", "name": "patch", "type": "uint256" }], "internalType": "struct ProjectInfo.SemVer", "name": "version", "type": "tuple" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "newPackageVersion", "outputs": [{ "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "newProject", "outputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "ownersProjects", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "ownersProjectsInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "ownersProjectsLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageAdmin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "packageAdminInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageId", "type": "uint256" }], "name": "packageAdminLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageName", "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "packageNameInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageVersions", "outputs": [{ "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "major", "type": "uint256" }, { "internalType": "uint256", "name": "minor", "type": "uint256" }, { "internalType": "uint256", "name": "patch", "type": "uint256" }], "internalType": "struct ProjectInfo.SemVer", "name": "version", "type": "tuple" }, { "internalType": "enum ProjectInfo.PackageVersionStatus", "name": "status", "type": "uint8" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "packageVersionsLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageVersionsList", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageId", "type": "uint256" }], "name": "packageVersionsListLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packages", "outputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "currVersionIndex", "type": "uint256" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }, { "internalType": "bytes32", "name": "category", "type": "bytes32" }, { "internalType": "enum ProjectInfo.PackageStatus", "name": "status", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "packagesLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectAdmin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "projectAdminInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }], "name": "projectAdminLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectBackerBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "projectCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectIpfsCid", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectName", "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "name": "projectNameInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectNewOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectPackages", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectPackagesInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }], "name": "projectPackagesLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "internalType": "address", "name": "admin", "type": "address" }], "name": "removePackageAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "address", "name": "admin", "type": "address" }], "name": "removeProjectAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }], "name": "setPackageVersionToAuditing", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }], "name": "takeProjectOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferProjectOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "updatePackageIpfsCid", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }], "name": "updatePackageName", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "updatePackageVersionIpfsCid", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "updateProjectIpfsCid", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }], "name": "updateProjectName", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }], "name": "voidPackageVersion", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60a06040523480156200001157600080fd5b506040516200557a3803806200557a833981016040819052620000349162000088565b600080546001600160a01b0319908116331790915560016003556001600160a01b0392831660805260048054929093169116179055620000c7565b6001600160a01b03811681146200008557600080fd5b50565b600080604083850312156200009c57600080fd5b8251620000a9816200006f565b6020840151909250620000bc816200006f565b809150509250929050565b60805161547b620000ff600039600081816109270152818161261a01528181613e2401528181613ec00152613f18015261547b6000f3fe608060405234801561001057600080fd5b506004361061036d5760003560e01c80638da5cb5b116101d3578063c341468311610104578063f032a6c5116100a2578063fb10856d1161007c578063fb10856d146108d7578063fb34907814610902578063fc0c546a14610922578063fc7a86ae1461094957600080fd5b8063f032a6c51461085d578063f2fde38b14610899578063f88668c5146108ac57600080fd5b8063ccbeffc2116100de578063ccbeffc2146107c9578063d4ee1d90146107ff578063d99f367f1461081f578063dfecbd8e1461084a57600080fd5b8063c341468314610790578063c727a2ea146107a3578063c9d6b13d146107b657600080fd5b8063abcfb19011610171578063bfadf0421161014b578063bfadf0421461070e578063c107979214610739578063c113aeb014610759578063c216212a1461076c57600080fd5b8063abcfb190146106c8578063ac1c4f4c146106db578063beaf2d35146106fb57600080fd5b80639e2c8a5b116101ad5780639e2c8a5b1461067c578063a2f55ae51461068f578063a6ddbf69146106a2578063a828477c146106b557600080fd5b80638da5cb5b1461061e578063977f39701461063e5780639c52a7f11461066957600080fd5b806336fbad26116102ad578063758a5b031161024b5780637d8c0ef1116102255780637d8c0ef1146105af57806387899a36146105c257806387bfc51f146105d557806389fe08f8146105e857600080fd5b8063758a5b03146105765780637b0472f0146105895780637b2246dc1461059c57600080fd5b8063557de32811610287578063557de328146104ff578063605361721461053757806371b439c61461053f578063723dd3da1461055257600080fd5b806336fbad26146104bb5780633fd8cc4e146104c45780634f24c5fa146104f757600080fd5b806329d1e7491161031a57806332799c57116102f457806332799c5714610457578063368e98521461048257806336b44a191461049557806336c9ac76146104a857600080fd5b806329d1e749146103f757806329d91b6c146104175780632e0cc82b1461043757600080fd5b806311187a5f1161034b57806311187a5f146103b15780631251c946146103c457806324115090146103d757600080fd5b8063068c539114610372578063087d9886146103875780630d1706731461039e575b600080fd5b610385610380366004614b1b565b61097f565b005b6011545b6040519081526020015b60405180910390f35b6103856103ac366004614b90565b610ba3565b6103856103bf366004614b90565b610e07565b6103856103d2366004614bdc565b610fd2565b61038b6103e5366004614bdc565b6000908152600f602052604090205490565b61038b610405366004614bdc565b60009081526018602052604090205490565b61042a610425366004614bf5565b6110fb565b6040516103959190614c8d565b61038b610445366004614bdc565b60009081526016602052604090205490565b61038b610465366004614ca0565b600d60209081526000928352604080842090915290825290205481565b610385610490366004614b1b565b6111a0565b61038b6104a3366004614cca565b61143a565b61042a6104b6366004614bdc565b6117d8565b61038b60055481565b6104e76104d2366004614d4d565b60026020526000908152604090205460ff1681565b6040519015158152602001610395565b60125461038b565b61051261050d366004614bf5565b6117f1565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610395565b610385611836565b61038b61054d366004614bf5565b611960565b610565610560366004614bdc565b611991565b604051610395959493929190614dab565b61038b610584366004614e04565b611a81565b610385610597366004614bf5565b611c62565b6103856105aa366004614b1b565b611df3565b61038b6105bd366004614ca0565b612126565b6103856105d0366004614e70565b612142565b6105126105e3366004614bf5565b612400565b6105126105f6366004614bdc565b600b6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6000546105129073ffffffffffffffffffffffffffffffffffffffff1681565b61038b61064c366004614b1b565b601060209081526000928352604080842090915290825290205481565b610385610677366004614d4d565b61241c565b61038561068a366004614bf5565b6124c3565b61038561069d366004614d4d565b61267b565b6103856106b0366004614b1b565b61271e565b61042a6106c3366004614bdc565b6129d6565b6103856106d6366004614e70565b6129ef565b6004546105129073ffffffffffffffffffffffffffffffffffffffff1681565b61038b610709366004614ee6565b612c33565b61038b61071c366004614b1b565b601760209081526000928352604080842090915290825290205481565b61038b610747366004614bdc565b60009081526013602052604090205490565b610385610767366004614bdc565b6132ac565b61077f61077a366004614bdc565b6133d0565b604051610395959493929190614fb4565b61038561079e366004614b90565b6134a2565b6103856107b1366004614bdc565b613678565b61038b6107c4366004614bf5565b613806565b61038b6107d7366004614d4d565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c602052604090205490565b6001546105129073ffffffffffffffffffffffffffffffffffffffff1681565b61038b61082d366004614ca0565b600760209081526000928352604080842090915290825290205481565b610385610858366004614b1b565b613822565b61038b61086b3660046150a6565b6015602090815260009283526040909220815180830184018051928152908401929093019190912091525481565b6103856108a7366004614d4d565b613905565b61038b6108ba3660046150ed565b805160208183018101805160098252928201919093012091525481565b61038b6108e5366004614bf5565b601960209081526000928352604080842090915290825290205481565b61038b610910366004614bdc565b60066020526000908152604090205481565b6105127f000000000000000000000000000000000000000000000000000000000000000081565b610512610957366004614bdc565b600e6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6000828152600b6020526040902054829073ffffffffffffffffffffffffffffffffffffffff163314610a13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e657200000000000000000000000000000000000060448201526064015b60405180910390fd5b6000838152600f60205260409020541580610a9857506000838152600f602090815260408083206010835281842073ffffffffffffffffffffffffffffffffffffffff8716808652935292205482549192918110610a7357610a73615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b610afe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f616c726561647920612061646d696e00000000000000000000000000000000006044820152606401610a0a565b6000838152600f6020818152604080842080546010845282862073ffffffffffffffffffffffffffffffffffffffff891680885290855283872082905594845260018101825590855291842090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000168317905551909185917f223ed65ee8c25e2e5c9d766412212deb5a8966c1a32b6608f0e65bd7f1ff89359190a3505050565b6000838152600f6020526040902054839015801590610c1557506000818152600f602090815260408083206010835281842033808652935292205482549192918110610bf157610bf1615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80610c4357506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b610ca9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b600083838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929350610cf1925087915083905061399c565b610d57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c69642070726f6a656374206e616d650000000000000000000000006044820152606401610a0a565b600085815260086020526040908190209051600991610d75916151a4565b908152604080516020928190038301902060009081905587815260088352208251610da2928401906149c7565b5084600982604051610db49190615276565b908152602001604051809103902081905550847fdaa562afcb682535ccff278b5881e249435b61d592905fa2fe0f33a9a363e11b8585604051610df89291906152db565b60405180910390a25050505050565b6000838152600f6020526040902054839015801590610e7957506000818152600f602090815260408083206010835281842033808652935292205482549192918110610e5557610e55615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80610ea757506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b610f0d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6005548410610f78576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c69642070726f6a65637449640000000000000000000000000000006044820152606401610a0a565b6000848152600a60205260409020610f91908484614a4b565b50837fc3aaa2655bd006e3aa89d43d7df93d47dd9392fec712a0ffea9e2fd5b58f7b388484604051610fc49291906152db565b60405180910390a250505050565b6000818152600e602052604090205473ffffffffffffffffffffffffffffffffffffffff16331461105f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742066726f6d206e6577206f776e657200000000000000000000000000006044820152606401610a0a565b6000818152600b6020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000008082163317909255600e9093529220805490921690915573ffffffffffffffffffffffffffffffffffffffff166110ca8183613b2a565b604051339083907fd76f6b3fb9ea3802f0403d54d37db427cea79df08cd8817552eb23790d2b549190600090a35050565b60146020908152600092835260408084209091529082529020805461111f90615151565b80601f016020809104026020016040519081016040528092919081815260200182805461114b90615151565b80156111985780601f1061116d57610100808354040283529160200191611198565b820191906000526020600020905b81548152906001019060200180831161117b57829003601f168201915b505050505081565b6000828152600b6020526040902054829073ffffffffffffffffffffffffffffffffffffffff16331461122f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610a0a565b600083815260106020908152604080832073ffffffffffffffffffffffffffffffffffffffff86168452825280832054868452600f9092528220549091906112799060019061531e565b90508082101561134c576000858152600f602052604081208054839081106112a3576112a3615122565b600091825260208083209091015488835260108252604080842073ffffffffffffffffffffffffffffffffffffffff909216808552918352808420879055898452600f9092529120805491925082918590811061130257611302615122565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b600085815260106020908152604080832073ffffffffffffffffffffffffffffffffffffffff881684528252808320839055878352600f909152902080548061139757611397615335565b60008281526020812082017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590910190915560405173ffffffffffffffffffffffffffffffffffffffff86169187917f6f99f547e1793782dd433d72ded398bd72f423ed3fe41650df9b0fae5008f33d9190a35050505050565b6000868152600f60205260408120548790158015906114ac57506000818152600f60209081526040808320601083528184203380865293529220548254919291811061148857611488615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b806114da57506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b611540576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6011805490509150600087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061159192508b915085905083613c84565b6115f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c6964207061636b616765206e616d650000000000000000000000006044820152606401610a0a565b60116040518060a001604052808b81526020016000815260200187878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506020810189905260400160019052815460018181018455600093845260209384902083516005909302019182558383015190820155604082015180519293919261169a92600285019201906149c7565b506060820151600382015560808201516004820180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600183818111156116e5576116e5614d68565b02179055505050600089815260146020908152604080832086845282529091208251611713928401906149c7565b5082601560008b8152602001908152602001600020826040516117369190615276565b90815260408051602092819003830190209290925560008b8152601882528281208054600181018255908252828220018690558b8152601a90915220548151111561178d57805160008a8152601a60205260409020555b82897ffa6aee631c6b190fd8d9fbeda093ea95ec6e8f4b2d87cd3884a4445ffd9211208a8a89896040516117c49493929190615364565b60405180910390a350509695505050505050565b600a602052600090815260409020805461111f90615151565b6016602052816000526040600020818154811061180d57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146118dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610a0a565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b6013602052816000526040600020818154811061197c57600080fd5b90600052602060002001600091509150505481565b601281815481106119a157600080fd5b600091825260209182902060079091020180546040805160608101825260018401548152600284015494810194909452600383015490840152600482015460058301805492955060ff90911692916119f890615151565b80601f0160208091040260200160405190810160405280929190818152602001828054611a2490615151565b8015611a715780601f10611a4657610100808354040283529160200191611a71565b820191906000526020600020905b815481529060010190602001808311611a5457829003601f168201915b5050505050908060060154905085565b600554604080516020601f87018190048102820181019092528581526000918790879081908401838280828437600092019190915250929350611aca925084915083905061399c565b611b30576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c69642070726f6a656374206e616d650000000000000000000000006044820152606401610a0a565b6000828152600b6020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000016339081179091558352600c82528083208054600d8452828520878652845282852081905560018101825590845282842001859055848352600882529091208251611bb1928401906149c7565b5081600982604051611bc39190615276565b9081526040805160209281900383019020929092556000848152600a90915220611bee908585614a4b565b5060058054906000611bff8361538b565b91905055503373ffffffffffffffffffffffffffffffffffffffff16827f9ab04f24c89dafa22164ed8f6de07a0b21fb8d93a7b761ef1212fc9a997e8d5388888888604051611c519493929190615364565b60405180910390a350949350505050565b600260035403611cce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610a0a565b600260035580611d3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d2030000000000000000000000000000000000000000000006044820152606401610a0a565b611d4381613df3565b33600090815260076020908152604080832086845290915281205491925090611d6d9083906153c3565b33600090815260076020908152604080832087845282528083208490556006909152812080549293508492909190611da69084906153c3565b90915550506040805183815260208101839052849133917ff556991011e831bcfac4f406d547e5e32cdd98267efab83935230d5f8d02c44691015b60405180910390a35050600160035550565b60115482908110611e60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b600060118281548110611e7557611e75615122565b6000918252602080832060059092029091018054808452600b9092526040909220549192509073ffffffffffffffffffffffffffffffffffffffff163314611f19576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610a0a565b600085815260176020908152604080832073ffffffffffffffffffffffffffffffffffffffff881684528252808320548884526016909252822054909190611f639060019061531e565b905080821015612036576000878152601660205260408120805483908110611f8d57611f8d615122565b60009182526020808320909101548a835260178252604080842073ffffffffffffffffffffffffffffffffffffffff9092168085529183528084208790558b8452601690925291208054919250829185908110611fec57611fec615122565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b600087815260176020908152604080832073ffffffffffffffffffffffffffffffffffffffff8a16845282528083208390558983526016909152902080548061208157612081615335565b60008281526020812082017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590910190915560405173ffffffffffffffffffffffffffffffffffffffff88169189917f68ae736c2c34a7e53507d009996d4f68a3f4daa5386f03f5672bfae701d4078a9190a350505050505050565b600c602052816000526040600020818154811061197c57600080fd5b6000848152600f60205260409020548490158015906121b457506000818152600f60209081526040808320601083528184203380865293529220548254919291811061219057612190615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b806121e257506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b612248576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b600083838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929350612291925088915087905083613c84565b6122f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c6964207061636b616765206e616d650000000000000000000000006044820152606401610a0a565b6000868152601560209081526040808320601483528184208985529092529182902091519091612326916151a4565b908152604080516020928190038301902060009081905588815260148352818120888252835220825161235b928401906149c7565b5084601560008881526020019081526020016000208260405161237e9190615276565b908152602001604051809103902081905550601a600087815260200190815260200160002054815111156123be5780516000878152601a60205260409020555b847ffefb07da0d267ba7a9bdd0d55154b06358bbac3326916bcaeedc87adbcdb3d0385856040516123f09291906152db565b60405180910390a2505050505050565b600f602052816000526040600020818154811061180d57600080fd5b60005473ffffffffffffffffffffffffffffffffffffffff16331461244057600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60026003540361252f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610a0a565b60026003558061259b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f616d6f756e74203d2030000000000000000000000000000000000000000000006044820152606401610a0a565b3360009081526007602090815260408083208584529091528120546125c190839061531e565b336000908152600760209081526040808320878452825280832084905560069091528120805492935084929091906125fa90849061531e565b90915550612641905073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163384613fa2565b6040805183815260208101839052849133917ffbd65cfd6de1493db337385c0712095397ecbd0504df64b861cdfceb80c7b4229101611de1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461269f57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016124b8565b6011548290811061278b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b6000601182815481106127a0576127a0615122565b6000918252602080832060059092029091018054808452600b9092526040909220549192509073ffffffffffffffffffffffffffffffffffffffff163314612844576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610a0a565b60008581526016602052604090205415806128c9575060008581526016602090815260408083206017835281842073ffffffffffffffffffffffffffffffffffffffff89168086529352922054825491929181106128a4576128a4615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b61292f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f616c726561647920612061646d696e00000000000000000000000000000000006044820152606401610a0a565b600085815260166020818152604080842080546017845282862073ffffffffffffffffffffffffffffffffffffffff8b1680885290855283872082905594845260018101825590855291842090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000168317905551909187917f1e2202e3f0fa61b74c5e417a0c222f963a53a4a02cac56ef30069e6f7335347a9190a35050505050565b6008602052600090815260409020805461111f90615151565b6000848152600f6020526040902054849015801590612a6157506000818152600f602090815260408083206010835281842033808652935292205482549192918110612a3d57612a3d615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80612a8f57506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b612af5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6011548410612b60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b600060118581548110612b7557612b75615122565b9060005260206000209060050201905085816000015414612bf2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f70726f6a65637449642f7061636b6167654964206e6f74206d617463680000006044820152606401610a0a565b612c00600282018585614a4b565b50847f26fb0729afd95719cada7729b90195198a6f35edd9383154a3c42ed9f973911f85856040516123f09291906152db565b6000858152600f6020526040812054869015801590612ca557506000818152600f602090815260408083206010835281842033808652935292205482549192918110612c8157612c81615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80612cd357506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b612d39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6011548610612da4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b61676549640000000000000000000000000000006044820152606401610a0a565b8660118781548110612db857612db8615122565b90600052602060002090600502016000015414612e31576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f70726f6a65637449642f7061636b6167654964206e6f74206d617463680000006044820152606401610a0a565b6000868152601360205260409020548015613132576000878152601360205260408120612e5f60018461531e565b81548110612e6f57612e6f615122565b90600052602060002001549050600060128281548110612e9157612e91615122565b60009182526020918290206040805160a08101825260079093029091018054835281516060810183526001820154815260028083015482870152600383015482850152948401526004810154929390929184019160ff1690811115612ef857612ef8614d68565b6002811115612f0957612f09614d68565b8152602001600582018054612f1d90615151565b80601f0160208091040260200160405190810160405280929190818152602001828054612f4990615151565b8015612f965780601f10612f6b57610100808354040283529160200191612f96565b820191906000526020600020905b815481529060010190602001808311612f7957829003601f168201915b5050505050815260200160068201548152505090508760000151816020015160000151036130c05787602001518160200151602001510361304b57806020015160400151886040015111613046576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f70617463682076657273696f6e206d7573742062652062756d706564000000006044820152606401610a0a565b61312f565b806020015160200151886020015111613046576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6d696e6f722076657273696f6e206d7573742062652062756d706564000000006044820152606401610a0a565b60208101515188511161312f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6d616a6f722076657273696f6e206d7573742062652062756d706564000000006044820152606401610a0a565b50505b601280546000898152601360209081526040808320805460018101825590845282842001849055805160a0810182528c81529182018b905292965091820190815260200187878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093855250504260209384015250835460018181018655948252908290208351600790920201908155828201518051828601559182015160028083019190915560409283015160038301559183015160048201805494959294919390927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009092169190849081111561323b5761323b614d68565b02179055506060820151805161325b9160058401916020909101906149c7565b5060808201518160060155505082877f30b46001c7b708476546827f01ccfda71f20291b9283deca04e05953fc5915888860405161329991906153db565b60405180910390a3505095945050505050565b6012548110613317576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f696e76616c6964207061636b61676556657273696f6e496400000000000000006044820152606401610a0a565b60006012828154811061332c5761332c615122565b6000918252602090912060079091020190506002600482015460ff16600281111561335957613359614d68565b036133c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f616c726561647920766f696465640000000000000000000000000000000000006044820152606401610a0a565b6133cc8183600261407b565b5050565b601181815481106133e057600080fd5b906000526020600020906005020160009150905080600001549080600101549080600201805461340f90615151565b80601f016020809104026020016040519081016040528092919081815260200182805461343b90615151565b80156134885780601f1061345d57610100808354040283529160200191613488565b820191906000526020600020905b81548152906001019060200180831161346b57829003601f168201915b50505050600383015460049093015491929160ff16905085565b601254831061350d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f696e76616c6964207061636b61676556657273696f6e496400000000000000006044820152606401610a0a565b60006012848154811061352257613522615122565b6000918252602082206007909102019150600482015460ff16600281111561354c5761354c614d68565b146135b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420756e64657220776f726b696e670000000000000000000000000000006044820152606401610a0a565b80546135be90614101565b613624576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b613632600582018484614a4b565b508381600001547f097b4eb6f8403c2a7c0a11a6030a86be5f926638aa685eb855dcb634bffa6272858560405161366a9291906152db565b60405180910390a350505050565b60125481106136e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f696e76616c6964207061636b61676556657273696f6e496400000000000000006044820152606401610a0a565b6000601282815481106136f8576136f8615122565b6000918252602082206007909102019150600482015460ff16600281111561372257613722614d68565b14613789576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420756e64657220776f726b696e670000000000000000000000000000006044820152606401610a0a565b805461379490614101565b6137fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e0000000000000000000000000000000000006044820152606401610a0a565b6133cc8183600161407b565b6018602052816000526040600020818154811061197c57600080fd5b6000828152600b6020526040902054829073ffffffffffffffffffffffffffffffffffffffff1633146138b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610a0a565b506000918252600e602052604090912080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff16331461392957600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016124b8565b600081516000036139af57506000613b24565b6000838152601a60205260408120546139c95760016139d9565b6000848152601a60205260409020545b90506139e76001606461531e565b8184516139f491906153c3565b1115613a04576000915050613b24565b83600984604051613a159190615276565b90815260200160405180910390205414613b1757600060086000600986604051613a3f9190615276565b90815260200160405180910390205481526020019081526020016000208054613a6790615151565b80601f0160208091040260200160405190810160405280929190818152602001828054613a9390615151565b8015613ae05780601f10613ab557610100808354040283529160200191613ae0565b820191906000526020600020905b815481529060010190602001808311613ac357829003601f168201915b5050505050905080518451148015613b05575080805190602001208480519060200120145b15613b1557600092505050613b24565b505b613b208361425b565b9150505b92915050565b73ffffffffffffffffffffffffffffffffffffffff82166000818152600d60209081526040808320858452825280832054938352600c909152812054613b729060019061531e565b905080821015613c1e5773ffffffffffffffffffffffffffffffffffffffff84166000908152600c60205260408120805483908110613bb357613bb3615122565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff8816808452600d835260408085208386528452808520889055908452600c90925291208054919250829185908110613c1057613c10615122565b600091825260209091200155505b73ffffffffffffffffffffffffffffffffffffffff84166000818152600d602090815260408083208784528252808320839055928252600c905220805480613c6857613c68615335565b6001900381819060005260206000200160009055905550505050565b60008151600003613c9757506000613dec565b613ca36001606461531e565b825160008681526008602052604090208054613cbe90615151565b613cc99291506153c3565b1115613cd757506000613dec565b6000848152601560205260408082209051613cf3908590615276565b9081526020016040518091039020549050838114613ddf57600085815260146020908152604080832084845290915281208054613d2f90615151565b80601f0160208091040260200160405190810160405280929190818152602001828054613d5b90615151565b8015613da85780601f10613d7d57610100808354040283529160200191613da8565b820191906000526020600020905b815481529060010190602001808311613d8b57829003601f168201915b5050505050905080518451148015613dcd575080805190602001208480519060200120145b15613ddd57600092505050613dec565b505b613de88361425b565b9150505b9392505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015613e80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613ea491906153fc565b9050613ee873ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016333085614657565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015613f74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613f9891906153fc565b613b24919061531e565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526140769084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526146bb565b505050565b6004830180548291907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660018360028111156140ba576140ba614d68565b02179055508183600001547fecd286616049aec5a52fa7273fbce1b7652affad46cd95c127e03ee4958fec14836040516140f49190615415565b60405180910390a3505050565b6000806011838154811061411757614117615122565b6000918252602080832060059092029091018054808452600f909252604090922054919250901580159061419e57506000818152600f60209081526040808320601083528184203380865293529220548254919291811061417a5761417a615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b806141cc57506000818152600b602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b8061424257506000848152601660205260409020541580159061424257506000848152601660209081526040808320601783528184203380865293529220548254919291811061421e5761421e615122565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b15614251575060019392505050565b5060009392505050565b6000607a60f81b8260008151811061427557614275615122565b01602001517fff000000000000000000000000000000000000000000000000000000000000001611156142aa57506000919050565b606160f81b826000815181106142c2576142c2615122565b01602001517fff000000000000000000000000000000000000000000000000000000000000001610156143ef57603960f81b8260008151811061430757614307615122565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016111561433c57506000919050565b603060f81b8260008151811061435457614354615122565b01602001517fff00000000000000000000000000000000000000000000000000000000000000161080156143e257508160008151811061439657614396615122565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f2d0000000000000000000000000000000000000000000000000000000000000014155b156143ef57506000919050565b60015b825181101561464e57606160f81b83828151811061441257614412615122565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016108015906144835750607a60f81b83828151811061445957614459615122565b01602001517fff000000000000000000000000000000000000000000000000000000000000001611155b61463c57603060f81b83828151811061449e5761449e615122565b01602001517fff00000000000000000000000000000000000000000000000000000000000000161080159061450f5750603960f81b8382815181106144e5576144e5615122565b01602001517fff000000000000000000000000000000000000000000000000000000000000001611155b61463c5782818151811061452557614525615122565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f2d000000000000000000000000000000000000000000000000000000000000001461463c5782818151811061458557614585615122565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f5f000000000000000000000000000000000000000000000000000000000000001461463c578281815181106145e5576145e5615122565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f2e000000000000000000000000000000000000000000000000000000000000001461463c5750600092915050565b806146468161538b565b9150506143f2565b50600192915050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526146b59085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401613ff4565b50505050565b600061471d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166147c79092919063ffffffff16565b805190915015614076578080602001905181019061473b9190615423565b614076576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a0a565b60606147d684846000856147de565b949350505050565b606082471015614870576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a0a565b73ffffffffffffffffffffffffffffffffffffffff85163b6148ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a0a565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516149179190615276565b60006040518083038185875af1925050503d8060008114614954576040519150601f19603f3d011682016040523d82523d6000602084013e614959565b606091505b5091509150614969828286614974565b979650505050505050565b60608315614983575081613dec565b8251156149935782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0a9190614c8d565b8280546149d390615151565b90600052602060002090601f0160209004810192826149f55760008555614a3b565b82601f10614a0e57805160ff1916838001178555614a3b565b82800160010185558215614a3b579182015b82811115614a3b578251825591602001919060010190614a20565b50614a47929150614add565b5090565b828054614a5790615151565b90600052602060002090601f016020900481019282614a795760008555614a3b565b82601f10614ab0578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00823516178555614a3b565b82800160010185558215614a3b579182015b82811115614a3b578235825591602001919060010190614ac2565b5b80821115614a475760008155600101614ade565b803573ffffffffffffffffffffffffffffffffffffffff81168114614b1657600080fd5b919050565b60008060408385031215614b2e57600080fd5b82359150614b3e60208401614af2565b90509250929050565b60008083601f840112614b5957600080fd5b50813567ffffffffffffffff811115614b7157600080fd5b602083019150836020828501011115614b8957600080fd5b9250929050565b600080600060408486031215614ba557600080fd5b83359250602084013567ffffffffffffffff811115614bc357600080fd5b614bcf86828701614b47565b9497909650939450505050565b600060208284031215614bee57600080fd5b5035919050565b60008060408385031215614c0857600080fd5b50508035926020909101359150565b60005b83811015614c32578181015183820152602001614c1a565b838111156146b55750506000910152565b60008151808452614c5b816020860160208601614c17565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000613dec6020830184614c43565b60008060408385031215614cb357600080fd5b614cbc83614af2565b946020939093013593505050565b60008060008060008060808789031215614ce357600080fd5b86359550602087013567ffffffffffffffff80821115614d0257600080fd5b614d0e8a838b01614b47565b9097509550604089013594506060890135915080821115614d2e57600080fd5b50614d3b89828a01614b47565b979a9699509497509295939492505050565b600060208284031215614d5f57600080fd5b613dec82614af2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110614da757614da7614d68565b9052565b858152614dcf60208201868051825260208082015190830152604090810151910152565b614ddc6080820185614d97565b60e060a08201526000614df260e0830185614c43565b90508260c08301529695505050505050565b60008060008060408587031215614e1a57600080fd5b843567ffffffffffffffff80821115614e3257600080fd5b614e3e88838901614b47565b90965094506020870135915080821115614e5757600080fd5b50614e6487828801614b47565b95989497509550505050565b60008060008060608587031215614e8657600080fd5b8435935060208501359250604085013567ffffffffffffffff811115614eab57600080fd5b614e6487828801614b47565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080600080600085870360c0811215614eff57600080fd5b863595506020870135945060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc082011215614f3a57600080fd5b506040516060810167ffffffffffffffff8282108183111715614f5f57614f5f614eb7565b8160405260408901358352606089013560208401526080890135604084015282955060a0890135925080831115614f9557600080fd5b5050614fa388828901614b47565b969995985093965092949392505050565b85815284602082015260a060408201526000614fd360a0830186614c43565b905083606083015260028310614feb57614feb614d68565b8260808301529695505050505050565b600082601f83011261500c57600080fd5b813567ffffffffffffffff8082111561502757615027614eb7565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561506d5761506d614eb7565b8160405283815286602085880101111561508657600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156150b957600080fd5b82359150602083013567ffffffffffffffff8111156150d757600080fd5b6150e385828601614ffb565b9150509250929050565b6000602082840312156150ff57600080fd5b813567ffffffffffffffff81111561511657600080fd5b613b2084828501614ffb565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061516557607f821691505b60208210810361519e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600080835481600182811c9150808316806151c057607f831692505b602080841082036151f8577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b81801561520c576001811461523b57615268565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861689528489019650615268565b60008a81526020902060005b868110156152605781548b820152908501908301615247565b505084890196505b509498975050505050505050565b60008251615288818460208701614c17565b9190910192915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6020815260006147d6602083018486615292565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015615330576153306152ef565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b604081526000615378604083018688615292565b8281036020840152614969818587615292565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036153bc576153bc6152ef565b5060010190565b600082198211156153d6576153d66152ef565b500190565b81518152602080830151908201526040808301519082015260608101613b24565b60006020828403121561540e57600080fd5b5051919050565b60208101613b248284614d97565b60006020828403121561543557600080fd5b81518015158114613dec57600080fdfea264697066735822122017153e41c58d27ca12240b3fe1e286c751095e3241a2c84b80aae5c681b263c464736f6c634300080d0033"
    };
});
define("@scom/portal-contract/contracts/ProjectInfo.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/portal-contract/contracts/ProjectInfo.json.ts"], function (require, exports, eth_contract_6, ProjectInfo_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProjectInfo = void 0;
    class ProjectInfo extends eth_contract_6.Contract {
        constructor(wallet, address) {
            super(wallet, address, ProjectInfo_json_1.default.abi, ProjectInfo_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.token, params.auditorInfo], options);
        }
        parseAddAdminEvent(receipt) {
            return this.parseEvents(receipt, "AddAdmin").map(e => this.decodeAddAdminEvent(e));
        }
        decodeAddAdminEvent(event) {
            let result = event.data;
            return {
                projectId: new eth_contract_6.BigNumber(result.projectId),
                admin: result.admin,
                _event: event
            };
        }
        parseAddPackageAdminEvent(receipt) {
            return this.parseEvents(receipt, "AddPackageAdmin").map(e => this.decodeAddPackageAdminEvent(e));
        }
        decodeAddPackageAdminEvent(event) {
            let result = event.data;
            return {
                packageId: new eth_contract_6.BigNumber(result.packageId),
                admin: result.admin,
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
        parseNewPackageEvent(receipt) {
            return this.parseEvents(receipt, "NewPackage").map(e => this.decodeNewPackageEvent(e));
        }
        decodeNewPackageEvent(event) {
            let result = event.data;
            return {
                projectId: new eth_contract_6.BigNumber(result.projectId),
                packageId: new eth_contract_6.BigNumber(result.packageId),
                name: result.name,
                ipfsCid: result.ipfsCid,
                _event: event
            };
        }
        parseNewPackageVersionEvent(receipt) {
            return this.parseEvents(receipt, "NewPackageVersion").map(e => this.decodeNewPackageVersionEvent(e));
        }
        decodeNewPackageVersionEvent(event) {
            let result = event.data;
            return {
                packageId: new eth_contract_6.BigNumber(result.packageId),
                packageVersionId: new eth_contract_6.BigNumber(result.packageVersionId),
                version: {
                    major: new eth_contract_6.BigNumber(result.version.major),
                    minor: new eth_contract_6.BigNumber(result.version.minor),
                    patch: new eth_contract_6.BigNumber(result.version.patch)
                },
                _event: event
            };
        }
        parseNewProjectEvent(receipt) {
            return this.parseEvents(receipt, "NewProject").map(e => this.decodeNewProjectEvent(e));
        }
        decodeNewProjectEvent(event) {
            let result = event.data;
            return {
                projectId: new eth_contract_6.BigNumber(result.projectId),
                owner: result.owner,
                name: result.name,
                ipfsCid: result.ipfsCid,
                _event: event
            };
        }
        parseRemoveAdminEvent(receipt) {
            return this.parseEvents(receipt, "RemoveAdmin").map(e => this.decodeRemoveAdminEvent(e));
        }
        decodeRemoveAdminEvent(event) {
            let result = event.data;
            return {
                projectId: new eth_contract_6.BigNumber(result.projectId),
                admin: result.admin,
                _event: event
            };
        }
        parseRemovePackageAdminEvent(receipt) {
            return this.parseEvents(receipt, "RemovePackageAdmin").map(e => this.decodeRemovePackageAdminEvent(e));
        }
        decodeRemovePackageAdminEvent(event) {
            let result = event.data;
            return {
                packageId: new eth_contract_6.BigNumber(result.packageId),
                admin: result.admin,
                _event: event
            };
        }
        parseSetPackageVersionStatusEvent(receipt) {
            return this.parseEvents(receipt, "SetPackageVersionStatus").map(e => this.decodeSetPackageVersionStatusEvent(e));
        }
        decodeSetPackageVersionStatusEvent(event) {
            let result = event.data;
            return {
                packageId: new eth_contract_6.BigNumber(result.packageId),
                packageVersionId: new eth_contract_6.BigNumber(result.packageVersionId),
                status: new eth_contract_6.BigNumber(result.status),
                _event: event
            };
        }
        parseStakeEvent(receipt) {
            return this.parseEvents(receipt, "Stake").map(e => this.decodeStakeEvent(e));
        }
        decodeStakeEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                projectId: new eth_contract_6.BigNumber(result.projectId),
                amount: new eth_contract_6.BigNumber(result.amount),
                newBalance: new eth_contract_6.BigNumber(result.newBalance),
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
        parseTransferProjectOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferProjectOwnership").map(e => this.decodeTransferProjectOwnershipEvent(e));
        }
        decodeTransferProjectOwnershipEvent(event) {
            let result = event.data;
            return {
                projectId: new eth_contract_6.BigNumber(result.projectId),
                newOwner: result.newOwner,
                _event: event
            };
        }
        parseUnstakeEvent(receipt) {
            return this.parseEvents(receipt, "Unstake").map(e => this.decodeUnstakeEvent(e));
        }
        decodeUnstakeEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                projectId: new eth_contract_6.BigNumber(result.projectId),
                amount: new eth_contract_6.BigNumber(result.amount),
                newBalance: new eth_contract_6.BigNumber(result.newBalance),
                _event: event
            };
        }
        parseUpdatePackageIpfsCidEvent(receipt) {
            return this.parseEvents(receipt, "UpdatePackageIpfsCid").map(e => this.decodeUpdatePackageIpfsCidEvent(e));
        }
        decodeUpdatePackageIpfsCidEvent(event) {
            let result = event.data;
            return {
                packageId: new eth_contract_6.BigNumber(result.packageId),
                ipfsCid: result.ipfsCid,
                _event: event
            };
        }
        parseUpdatePackageNameEvent(receipt) {
            return this.parseEvents(receipt, "UpdatePackageName").map(e => this.decodeUpdatePackageNameEvent(e));
        }
        decodeUpdatePackageNameEvent(event) {
            let result = event.data;
            return {
                packageId: new eth_contract_6.BigNumber(result.packageId),
                name: result.name,
                _event: event
            };
        }
        parseUpdatePackageVersionIpfsCidEvent(receipt) {
            return this.parseEvents(receipt, "UpdatePackageVersionIpfsCid").map(e => this.decodeUpdatePackageVersionIpfsCidEvent(e));
        }
        decodeUpdatePackageVersionIpfsCidEvent(event) {
            let result = event.data;
            return {
                packageId: new eth_contract_6.BigNumber(result.packageId),
                packageVersionId: new eth_contract_6.BigNumber(result.packageVersionId),
                ipfsCid: result.ipfsCid,
                _event: event
            };
        }
        parseUpdateProjectIpfsCidEvent(receipt) {
            return this.parseEvents(receipt, "UpdateProjectIpfsCid").map(e => this.decodeUpdateProjectIpfsCidEvent(e));
        }
        decodeUpdateProjectIpfsCidEvent(event) {
            let result = event.data;
            return {
                projectId: new eth_contract_6.BigNumber(result.projectId),
                ipfsCid: result.ipfsCid,
                _event: event
            };
        }
        parseUpdateProjectNameEvent(receipt) {
            return this.parseEvents(receipt, "UpdateProjectName").map(e => this.decodeUpdateProjectNameEvent(e));
        }
        decodeUpdateProjectNameEvent(event) {
            let result = event.data;
            return {
                projectId: new eth_contract_6.BigNumber(result.projectId),
                name: result.name,
                _event: event
            };
        }
        assign() {
            let auditorInfo_call = async (options) => {
                let result = await this.call('auditorInfo', [], options);
                return result;
            };
            this.auditorInfo = auditorInfo_call;
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
            let ownersProjectsParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let ownersProjects_call = async (params, options) => {
                let result = await this.call('ownersProjects', ownersProjectsParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.ownersProjects = ownersProjects_call;
            let ownersProjectsInvParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let ownersProjectsInv_call = async (params, options) => {
                let result = await this.call('ownersProjectsInv', ownersProjectsInvParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.ownersProjectsInv = ownersProjectsInv_call;
            let ownersProjectsLength_call = async (owner, options) => {
                let result = await this.call('ownersProjectsLength', [owner], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.ownersProjectsLength = ownersProjectsLength_call;
            let packageAdminParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let packageAdmin_call = async (params, options) => {
                let result = await this.call('packageAdmin', packageAdminParams(params), options);
                return result;
            };
            this.packageAdmin = packageAdmin_call;
            let packageAdminInvParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
            let packageAdminInv_call = async (params, options) => {
                let result = await this.call('packageAdminInv', packageAdminInvParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.packageAdminInv = packageAdminInv_call;
            let packageAdminLength_call = async (packageId, options) => {
                let result = await this.call('packageAdminLength', [this.wallet.utils.toString(packageId)], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.packageAdminLength = packageAdminLength_call;
            let packageNameParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let packageName_call = async (params, options) => {
                let result = await this.call('packageName', packageNameParams(params), options);
                return result;
            };
            this.packageName = packageName_call;
            let packageNameInvParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.stringToBytes(params.param2)];
            let packageNameInv_call = async (params, options) => {
                let result = await this.call('packageNameInv', packageNameInvParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.packageNameInv = packageNameInv_call;
            let packageVersions_call = async (param1, options) => {
                let result = await this.call('packageVersions', [this.wallet.utils.toString(param1)], options);
                return {
                    packageId: new eth_contract_6.BigNumber(result.packageId),
                    version: {
                        major: new eth_contract_6.BigNumber(result.version.major),
                        minor: new eth_contract_6.BigNumber(result.version.minor),
                        patch: new eth_contract_6.BigNumber(result.version.patch)
                    },
                    status: new eth_contract_6.BigNumber(result.status),
                    ipfsCid: result.ipfsCid,
                    timestamp: new eth_contract_6.BigNumber(result.timestamp)
                };
            };
            this.packageVersions = packageVersions_call;
            let packageVersionsLength_call = async (options) => {
                let result = await this.call('packageVersionsLength', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.packageVersionsLength = packageVersionsLength_call;
            let packageVersionsListParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let packageVersionsList_call = async (params, options) => {
                let result = await this.call('packageVersionsList', packageVersionsListParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.packageVersionsList = packageVersionsList_call;
            let packageVersionsListLength_call = async (packageId, options) => {
                let result = await this.call('packageVersionsListLength', [this.wallet.utils.toString(packageId)], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.packageVersionsListLength = packageVersionsListLength_call;
            let packages_call = async (param1, options) => {
                let result = await this.call('packages', [this.wallet.utils.toString(param1)], options);
                return {
                    projectId: new eth_contract_6.BigNumber(result.projectId),
                    currVersionIndex: new eth_contract_6.BigNumber(result.currVersionIndex),
                    ipfsCid: result.ipfsCid,
                    category: result.category,
                    status: new eth_contract_6.BigNumber(result.status)
                };
            };
            this.packages = packages_call;
            let packagesLength_call = async (options) => {
                let result = await this.call('packagesLength', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.packagesLength = packagesLength_call;
            let projectAdminParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let projectAdmin_call = async (params, options) => {
                let result = await this.call('projectAdmin', projectAdminParams(params), options);
                return result;
            };
            this.projectAdmin = projectAdmin_call;
            let projectAdminInvParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
            let projectAdminInv_call = async (params, options) => {
                let result = await this.call('projectAdminInv', projectAdminInvParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectAdminInv = projectAdminInv_call;
            let projectAdminLength_call = async (projectId, options) => {
                let result = await this.call('projectAdminLength', [this.wallet.utils.toString(projectId)], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectAdminLength = projectAdminLength_call;
            let projectBackerBalanceParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let projectBackerBalance_call = async (params, options) => {
                let result = await this.call('projectBackerBalance', projectBackerBalanceParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectBackerBalance = projectBackerBalance_call;
            let projectBalance_call = async (param1, options) => {
                let result = await this.call('projectBalance', [this.wallet.utils.toString(param1)], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectBalance = projectBalance_call;
            let projectCount_call = async (options) => {
                let result = await this.call('projectCount', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectCount = projectCount_call;
            let projectIpfsCid_call = async (param1, options) => {
                let result = await this.call('projectIpfsCid', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.projectIpfsCid = projectIpfsCid_call;
            let projectName_call = async (param1, options) => {
                let result = await this.call('projectName', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.projectName = projectName_call;
            let projectNameInv_call = async (param1, options) => {
                let result = await this.call('projectNameInv', [this.wallet.utils.stringToBytes(param1)], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectNameInv = projectNameInv_call;
            let projectNewOwner_call = async (param1, options) => {
                let result = await this.call('projectNewOwner', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.projectNewOwner = projectNewOwner_call;
            let projectOwner_call = async (param1, options) => {
                let result = await this.call('projectOwner', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.projectOwner = projectOwner_call;
            let projectPackagesParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let projectPackages_call = async (params, options) => {
                let result = await this.call('projectPackages', projectPackagesParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectPackages = projectPackages_call;
            let projectPackagesInvParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let projectPackagesInv_call = async (params, options) => {
                let result = await this.call('projectPackagesInv', projectPackagesInvParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectPackagesInv = projectPackagesInv_call;
            let projectPackagesLength_call = async (projectId, options) => {
                let result = await this.call('projectPackagesLength', [this.wallet.utils.toString(projectId)], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.projectPackagesLength = projectPackagesLength_call;
            let token_call = async (options) => {
                let result = await this.call('token', [], options);
                return result;
            };
            this.token = token_call;
            let addPackageAdminParams = (params) => [this.wallet.utils.toString(params.packageId), params.admin];
            let addPackageAdmin_send = async (params, options) => {
                let result = await this.send('addPackageAdmin', addPackageAdminParams(params), options);
                return result;
            };
            let addPackageAdmin_call = async (params, options) => {
                let result = await this.call('addPackageAdmin', addPackageAdminParams(params), options);
                return;
            };
            this.addPackageAdmin = Object.assign(addPackageAdmin_send, {
                call: addPackageAdmin_call
            });
            let addProjectAdminParams = (params) => [this.wallet.utils.toString(params.projectId), params.admin];
            let addProjectAdmin_send = async (params, options) => {
                let result = await this.send('addProjectAdmin', addProjectAdminParams(params), options);
                return result;
            };
            let addProjectAdmin_call = async (params, options) => {
                let result = await this.call('addProjectAdmin', addProjectAdminParams(params), options);
                return;
            };
            this.addProjectAdmin = Object.assign(addProjectAdmin_send, {
                call: addProjectAdmin_call
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
            let newPackageParams = (params) => [this.wallet.utils.toString(params.projectId), params.name, this.wallet.utils.stringToBytes32(params.category), params.ipfsCid];
            let newPackage_send = async (params, options) => {
                let result = await this.send('newPackage', newPackageParams(params), options);
                return result;
            };
            let newPackage_call = async (params, options) => {
                let result = await this.call('newPackage', newPackageParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.newPackage = Object.assign(newPackage_send, {
                call: newPackage_call
            });
            let newPackageVersionParams = (params) => [this.wallet.utils.toString(params.projectId), this.wallet.utils.toString(params.packageId), [this.wallet.utils.toString(params.version.major), this.wallet.utils.toString(params.version.minor), this.wallet.utils.toString(params.version.patch)], params.ipfsCid];
            let newPackageVersion_send = async (params, options) => {
                let result = await this.send('newPackageVersion', newPackageVersionParams(params), options);
                return result;
            };
            let newPackageVersion_call = async (params, options) => {
                let result = await this.call('newPackageVersion', newPackageVersionParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.newPackageVersion = Object.assign(newPackageVersion_send, {
                call: newPackageVersion_call
            });
            let newProjectParams = (params) => [params.name, params.ipfsCid];
            let newProject_send = async (params, options) => {
                let result = await this.send('newProject', newProjectParams(params), options);
                return result;
            };
            let newProject_call = async (params, options) => {
                let result = await this.call('newProject', newProjectParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.newProject = Object.assign(newProject_send, {
                call: newProject_call
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
            let removePackageAdminParams = (params) => [this.wallet.utils.toString(params.packageId), params.admin];
            let removePackageAdmin_send = async (params, options) => {
                let result = await this.send('removePackageAdmin', removePackageAdminParams(params), options);
                return result;
            };
            let removePackageAdmin_call = async (params, options) => {
                let result = await this.call('removePackageAdmin', removePackageAdminParams(params), options);
                return;
            };
            this.removePackageAdmin = Object.assign(removePackageAdmin_send, {
                call: removePackageAdmin_call
            });
            let removeProjectAdminParams = (params) => [this.wallet.utils.toString(params.projectId), params.admin];
            let removeProjectAdmin_send = async (params, options) => {
                let result = await this.send('removeProjectAdmin', removeProjectAdminParams(params), options);
                return result;
            };
            let removeProjectAdmin_call = async (params, options) => {
                let result = await this.call('removeProjectAdmin', removeProjectAdminParams(params), options);
                return;
            };
            this.removeProjectAdmin = Object.assign(removeProjectAdmin_send, {
                call: removeProjectAdmin_call
            });
            let setPackageVersionToAuditing_send = async (packageVersionId, options) => {
                let result = await this.send('setPackageVersionToAuditing', [this.wallet.utils.toString(packageVersionId)], options);
                return result;
            };
            let setPackageVersionToAuditing_call = async (packageVersionId, options) => {
                let result = await this.call('setPackageVersionToAuditing', [this.wallet.utils.toString(packageVersionId)], options);
                return;
            };
            this.setPackageVersionToAuditing = Object.assign(setPackageVersionToAuditing_send, {
                call: setPackageVersionToAuditing_call
            });
            let stakeParams = (params) => [this.wallet.utils.toString(params.projectId), this.wallet.utils.toString(params.amount)];
            let stake_send = async (params, options) => {
                let result = await this.send('stake', stakeParams(params), options);
                return result;
            };
            let stake_call = async (params, options) => {
                let result = await this.call('stake', stakeParams(params), options);
                return;
            };
            this.stake = Object.assign(stake_send, {
                call: stake_call
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
            let takeProjectOwnership_send = async (projectId, options) => {
                let result = await this.send('takeProjectOwnership', [this.wallet.utils.toString(projectId)], options);
                return result;
            };
            let takeProjectOwnership_call = async (projectId, options) => {
                let result = await this.call('takeProjectOwnership', [this.wallet.utils.toString(projectId)], options);
                return;
            };
            this.takeProjectOwnership = Object.assign(takeProjectOwnership_send, {
                call: takeProjectOwnership_call
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
            let transferProjectOwnershipParams = (params) => [this.wallet.utils.toString(params.projectId), params.newOwner];
            let transferProjectOwnership_send = async (params, options) => {
                let result = await this.send('transferProjectOwnership', transferProjectOwnershipParams(params), options);
                return result;
            };
            let transferProjectOwnership_call = async (params, options) => {
                let result = await this.call('transferProjectOwnership', transferProjectOwnershipParams(params), options);
                return;
            };
            this.transferProjectOwnership = Object.assign(transferProjectOwnership_send, {
                call: transferProjectOwnership_call
            });
            let unstakeParams = (params) => [this.wallet.utils.toString(params.projectId), this.wallet.utils.toString(params.amount)];
            let unstake_send = async (params, options) => {
                let result = await this.send('unstake', unstakeParams(params), options);
                return result;
            };
            let unstake_call = async (params, options) => {
                let result = await this.call('unstake', unstakeParams(params), options);
                return;
            };
            this.unstake = Object.assign(unstake_send, {
                call: unstake_call
            });
            let updatePackageIpfsCidParams = (params) => [this.wallet.utils.toString(params.projectId), this.wallet.utils.toString(params.packageId), params.ipfsCid];
            let updatePackageIpfsCid_send = async (params, options) => {
                let result = await this.send('updatePackageIpfsCid', updatePackageIpfsCidParams(params), options);
                return result;
            };
            let updatePackageIpfsCid_call = async (params, options) => {
                let result = await this.call('updatePackageIpfsCid', updatePackageIpfsCidParams(params), options);
                return;
            };
            this.updatePackageIpfsCid = Object.assign(updatePackageIpfsCid_send, {
                call: updatePackageIpfsCid_call
            });
            let updatePackageNameParams = (params) => [this.wallet.utils.toString(params.projectId), this.wallet.utils.toString(params.packageId), params.name];
            let updatePackageName_send = async (params, options) => {
                let result = await this.send('updatePackageName', updatePackageNameParams(params), options);
                return result;
            };
            let updatePackageName_call = async (params, options) => {
                let result = await this.call('updatePackageName', updatePackageNameParams(params), options);
                return;
            };
            this.updatePackageName = Object.assign(updatePackageName_send, {
                call: updatePackageName_call
            });
            let updatePackageVersionIpfsCidParams = (params) => [this.wallet.utils.toString(params.packageVersionId), params.ipfsCid];
            let updatePackageVersionIpfsCid_send = async (params, options) => {
                let result = await this.send('updatePackageVersionIpfsCid', updatePackageVersionIpfsCidParams(params), options);
                return result;
            };
            let updatePackageVersionIpfsCid_call = async (params, options) => {
                let result = await this.call('updatePackageVersionIpfsCid', updatePackageVersionIpfsCidParams(params), options);
                return;
            };
            this.updatePackageVersionIpfsCid = Object.assign(updatePackageVersionIpfsCid_send, {
                call: updatePackageVersionIpfsCid_call
            });
            let updateProjectIpfsCidParams = (params) => [this.wallet.utils.toString(params.projectId), params.ipfsCid];
            let updateProjectIpfsCid_send = async (params, options) => {
                let result = await this.send('updateProjectIpfsCid', updateProjectIpfsCidParams(params), options);
                return result;
            };
            let updateProjectIpfsCid_call = async (params, options) => {
                let result = await this.call('updateProjectIpfsCid', updateProjectIpfsCidParams(params), options);
                return;
            };
            this.updateProjectIpfsCid = Object.assign(updateProjectIpfsCid_send, {
                call: updateProjectIpfsCid_call
            });
            let updateProjectNameParams = (params) => [this.wallet.utils.toString(params.projectId), params.name];
            let updateProjectName_send = async (params, options) => {
                let result = await this.send('updateProjectName', updateProjectNameParams(params), options);
                return result;
            };
            let updateProjectName_call = async (params, options) => {
                let result = await this.call('updateProjectName', updateProjectNameParams(params), options);
                return;
            };
            this.updateProjectName = Object.assign(updateProjectName_send, {
                call: updateProjectName_call
            });
            let voidPackageVersion_send = async (packageVersionId, options) => {
                let result = await this.send('voidPackageVersion', [this.wallet.utils.toString(packageVersionId)], options);
                return result;
            };
            let voidPackageVersion_call = async (packageVersionId, options) => {
                let result = await this.call('voidPackageVersion', [this.wallet.utils.toString(packageVersionId)], options);
                return;
            };
            this.voidPackageVersion = Object.assign(voidPackageVersion_send, {
                call: voidPackageVersion_call
            });
        }
    }
    ProjectInfo._abi = ProjectInfo_json_1.default.abi;
    exports.ProjectInfo = ProjectInfo;
});
define("@scom/portal-contract/contracts/Scom.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/portal-contract/contracts/Scom.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "address", "name": "_minter", "type": "address" }, { "internalType": "address", "name": "initSupplyTo", "type": "address" }, { "internalType": "uint256", "name": "initSupply", "type": "uint256" }, { "internalType": "uint256", "name": "totalSupply", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "cap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "minter", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60c06040523480156200001157600080fd5b50604051620012b3380380620012b3833981016040819052620000349162000349565b60408051808201825260048082526353434f4d60e01b60208084018281528551808701909652928552840152815184939162000074916003919062000286565b5080516200008a90600490602084019062000286565b50505060008111620000e35760405162461bcd60e51b815260206004820152601560248201527f45524332304361707065643a206361702069732030000000000000000000000060448201526064015b60405180910390fd5b6080526001600160a01b03841660a052620000ff838362000109565b50505050620003f4565b60805181620001226200019960201b620003521760201c565b6200012e919062000391565b11156200017e5760405162461bcd60e51b815260206004820152601960248201527f45524332304361707065643a20636170206578636565646564000000000000006044820152606401620000da565b6200019582826200019f60201b620005681760201c565b5050565b60025490565b6001600160a01b038216620001f75760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401620000da565b80600260008282546200020b919062000391565b90915550506001600160a01b038216600090815260208190526040812080548392906200023a90849062000391565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a362000195565b8280546200029490620003b8565b90600052602060002090601f016020900481019282620002b8576000855562000303565b82601f10620002d357805160ff191683800117855562000303565b8280016001018555821562000303579182015b8281111562000303578251825591602001919060010190620002e6565b506200031192915062000315565b5090565b5b8082111562000311576000815560010162000316565b80516001600160a01b03811681146200034457600080fd5b919050565b600080600080608085870312156200036057600080fd5b6200036b856200032c565b93506200037b602086016200032c565b6040860151606090960151949790965092505050565b60008219821115620003b357634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620003cd57607f821691505b602082108103620003ee57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a051610e8b620004286000396000818161011201526103e00152600081816101b20152610bc70152610e8b6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063395093511161008c57806395d89b411161006657806395d89b4114610234578063a457c2d71461023c578063a9059cbb1461024f578063dd62ed3e1461026257600080fd5b806339509351146101d657806340c10f19146101e957806370a08231146101fe57600080fd5b806318160ddd116100c857806318160ddd1461017c57806323b872dd1461018e578063313ce567146101a1578063355274ea146101b057600080fd5b806306fdde03146100ef578063075461721461010d578063095ea7b314610159575b600080fd5b6100f76102a8565b6040516101049190610c6c565b60405180910390f35b6101347f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610104565b61016c610167366004610d08565b61033a565b6040519015158152602001610104565b6002545b604051908152602001610104565b61016c61019c366004610d32565b610358565b60405160128152602001610104565b7f0000000000000000000000000000000000000000000000000000000000000000610180565b61016c6101e4366004610d08565b61037c565b6101fc6101f7366004610d08565b6103c8565b005b61018061020c366004610d6e565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100f761047a565b61016c61024a366004610d08565b610489565b61016c61025d366004610d08565b61055a565b610180610270366004610d90565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6060600380546102b790610dc3565b80601f01602080910402602001604051908101604052809291908181526020018280546102e390610dc3565b80156103305780601f1061030557610100808354040283529160200191610330565b820191906000526020600020905b81548152906001019060200180831161031357829003601f168201915b5050505050905090565b600033610348818585610688565b5060019392505050565b60025490565b60003361036685828561083b565b610371858585610912565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919061034890829086906103c3908790610e16565b610688565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461046c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d206d696e746572000000000000000000000000000000000060448201526064015b60405180910390fd5b6104768282610bc5565b5050565b6060600480546102b790610dc3565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091908381101561054d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610463565b6103718286868403610688565b600033610348818585610912565b73ffffffffffffffffffffffffffffffffffffffff82166105e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610463565b80600260008282546105f79190610e16565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604081208054839290610631908490610e16565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff831661072a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610463565b73ffffffffffffffffffffffffffffffffffffffff82166107cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610463565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461090c57818110156108ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610463565b61090c8484848403610688565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166109b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610463565b73ffffffffffffffffffffffffffffffffffffffff8216610a58576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610463565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610b0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610463565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610b52908490610e16565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bb891815260200190565b60405180910390a361090c565b7f000000000000000000000000000000000000000000000000000000000000000081610bf060025490565b610bfa9190610e16565b1115610c62576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f45524332304361707065643a20636170206578636565646564000000000000006044820152606401610463565b6104768282610568565b600060208083528351808285015260005b81811015610c9957858101830151858201604001528201610c7d565b81811115610cab576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610d0357600080fd5b919050565b60008060408385031215610d1b57600080fd5b610d2483610cdf565b946020939093013593505050565b600080600060608486031215610d4757600080fd5b610d5084610cdf565b9250610d5e60208501610cdf565b9150604084013590509250925092565b600060208284031215610d8057600080fd5b610d8982610cdf565b9392505050565b60008060408385031215610da357600080fd5b610dac83610cdf565b9150610dba60208401610cdf565b90509250929050565b600181811c90821680610dd757607f821691505b602082108103610e10577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60008219821115610e50577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b50019056fea26469706673582212201a028a0224b1ef18991fd089455ec00cef28a55923216571eaa4fb6e61b9a35f64736f6c634300080d0033"
    };
});
define("@scom/portal-contract/contracts/Scom.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/portal-contract/contracts/Scom.json.ts"], function (require, exports, eth_contract_7, Scom_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scom = void 0;
    class Scom extends eth_contract_7.Contract {
        constructor(wallet, address) {
            super(wallet, address, Scom_json_1.default.abi, Scom_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.minter, params.initSupplyTo, this.wallet.utils.toString(params.initSupply), this.wallet.utils.toString(params.totalSupply)], options);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_contract_7.BigNumber(result.value),
                _event: event
            };
        }
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                from: result.from,
                to: result.to,
                value: new eth_contract_7.BigNumber(result.value),
                _event: event
            };
        }
        assign() {
            let allowanceParams = (params) => [params.owner, params.spender];
            let allowance_call = async (params, options) => {
                let result = await this.call('allowance', allowanceParams(params), options);
                return new eth_contract_7.BigNumber(result);
            };
            this.allowance = allowance_call;
            let balanceOf_call = async (account, options) => {
                let result = await this.call('balanceOf', [account], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let cap_call = async (options) => {
                let result = await this.call('cap', [], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.cap = cap_call;
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.decimals = decimals_call;
            let minter_call = async (options) => {
                let result = await this.call('minter', [], options);
                return result;
            };
            this.minter = minter_call;
            let name_call = async (options) => {
                let result = await this.call('name', [], options);
                return result;
            };
            this.name = name_call;
            let symbol_call = async (options) => {
                let result = await this.call('symbol', [], options);
                return result;
            };
            this.symbol = symbol_call;
            let totalSupply_call = async (options) => {
                let result = await this.call('totalSupply', [], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
            let approve_send = async (params, options) => {
                let result = await this.send('approve', approveParams(params), options);
                return result;
            };
            let approve_call = async (params, options) => {
                let result = await this.call('approve', approveParams(params), options);
                return result;
            };
            this.approve = Object.assign(approve_send, {
                call: approve_call
            });
            let decreaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.subtractedValue)];
            let decreaseAllowance_send = async (params, options) => {
                let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            let decreaseAllowance_call = async (params, options) => {
                let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
                call: decreaseAllowance_call
            });
            let increaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.addedValue)];
            let increaseAllowance_send = async (params, options) => {
                let result = await this.send('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            let increaseAllowance_call = async (params, options) => {
                let result = await this.call('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            this.increaseAllowance = Object.assign(increaseAllowance_send, {
                call: increaseAllowance_call
            });
            let mintParams = (params) => [params.account, this.wallet.utils.toString(params.amount)];
            let mint_send = async (params, options) => {
                let result = await this.send('mint', mintParams(params), options);
                return result;
            };
            let mint_call = async (params, options) => {
                let result = await this.call('mint', mintParams(params), options);
                return;
            };
            this.mint = Object.assign(mint_send, {
                call: mint_call
            });
            let transferParams = (params) => [params.to, this.wallet.utils.toString(params.amount)];
            let transfer_send = async (params, options) => {
                let result = await this.send('transfer', transferParams(params), options);
                return result;
            };
            let transfer_call = async (params, options) => {
                let result = await this.call('transfer', transferParams(params), options);
                return result;
            };
            this.transfer = Object.assign(transfer_send, {
                call: transfer_call
            });
            let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.amount)];
            let transferFrom_send = async (params, options) => {
                let result = await this.send('transferFrom', transferFromParams(params), options);
                return result;
            };
            let transferFrom_call = async (params, options) => {
                let result = await this.call('transferFrom', transferFromParams(params), options);
                return result;
            };
            this.transferFrom = Object.assign(transferFrom_send, {
                call: transferFrom_call
            });
        }
    }
    Scom._abi = Scom_json_1.default.abi;
    exports.Scom = Scom;
});
define("@scom/portal-contract/contracts/index.ts", ["require", "exports", "@scom/portal-contract/contracts/AuditInfo.ts", "@scom/portal-contract/contracts/AuditorInfo.ts", "@scom/portal-contract/contracts/Authorization.ts", "@scom/portal-contract/contracts/DomainInfo.ts", "@scom/portal-contract/contracts/ModuleInfo.ts", "@scom/portal-contract/contracts/ProjectInfo.ts", "@scom/portal-contract/contracts/Scom.ts"], function (require, exports, AuditInfo_1, AuditorInfo_1, Authorization_1, DomainInfo_1, ModuleInfo_1, ProjectInfo_1, Scom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scom = exports.ProjectInfo = exports.ModuleInfo = exports.DomainInfo = exports.Authorization = exports.AuditorInfo = exports.AuditInfo = void 0;
    Object.defineProperty(exports, "AuditInfo", { enumerable: true, get: function () { return AuditInfo_1.AuditInfo; } });
    Object.defineProperty(exports, "AuditorInfo", { enumerable: true, get: function () { return AuditorInfo_1.AuditorInfo; } });
    Object.defineProperty(exports, "Authorization", { enumerable: true, get: function () { return Authorization_1.Authorization; } });
    Object.defineProperty(exports, "DomainInfo", { enumerable: true, get: function () { return DomainInfo_1.DomainInfo; } });
    Object.defineProperty(exports, "ModuleInfo", { enumerable: true, get: function () { return ModuleInfo_1.ModuleInfo; } });
    Object.defineProperty(exports, "ProjectInfo", { enumerable: true, get: function () { return ProjectInfo_1.ProjectInfo; } });
    Object.defineProperty(exports, "Scom", { enumerable: true, get: function () { return Scom_1.Scom; } });
});
define("@scom/portal-contract", ["require", "exports", "@scom/portal-contract/contracts/index.ts"], function (require, exports, Contracts) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.deploy = exports.DefaultDeployOptions = exports.Contracts = void 0;
    exports.Contracts = Contracts;
    ;
    exports.DefaultDeployOptions = {
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
            quorum: 500,
            auditDuration: 14 * 24 * 60 * 60,
            minAuditRequired: 3
        }
    };
    async function deployScom(wallet, Config) {
        let scomOptions = Config.token;
        let token = new Contracts.Scom(wallet);
        await token.deploy({
            minter: scomOptions.minter,
            initSupplyTo: scomOptions.initSupplyTo,
            initSupply: wallet.utils.toDecimals(scomOptions.initSupply),
            totalSupply: wallet.utils.toDecimals(scomOptions.totalSupply)
        });
        return token.address;
    }
    async function deployAuditorInfo(wallet, token, Config) {
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
    async function deployProjectInfo(wallet, token, auditorInfo, Config) {
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
    async function deployDomainInfo(wallet, token) {
        let domainInfo = new Contracts.DomainInfo(wallet);
        return await domainInfo.deploy(token);
    }
    async function deployAuditInfo(wallet, projectInfo, auditorInfo, Config) {
        let auditInfo = new Contracts.AuditInfo(wallet);
        return await auditInfo.deploy(Object.assign({ projectInfo, auditorInfo }, Config.audit));
    }
    async function deploy(wallet, Config, onProgress) {
        var _a;
        let result = {
            token: '',
            domain: '',
            auditor: '',
            project: '',
            audit: '',
        };
        if (!Config.token.initSupplyTo) {
            onProgress('ERROR: token.initSupplyTo not defined!');
            return;
        }
        onProgress('1/5 Deploy token contract');
        if (!((_a = Config.token) === null || _a === void 0 ? void 0 : _a.address)) {
            result.token = await deployScom(wallet, Config);
        }
        else
            result.token = Config.token.address;
        onProgress('2/5 Deploy domain contract');
        result.domain = await deployDomainInfo(wallet, result.token);
        onProgress('3/5 Deploy auditor contract');
        result.auditor = await deployAuditorInfo(wallet, result.token, Config);
        onProgress('4/5 Deploy project contract');
        result.project = await deployProjectInfo(wallet, result.token, result.auditor, Config);
        onProgress('5/5 Deploy audit contract');
        result.audit = await deployAuditInfo(wallet, result.project, result.auditor, Config);
        return result;
    }
    exports.deploy = deploy;
    exports.default = {
        Contracts,
        deploy,
        DefaultDeployOptions: exports.DefaultDeployOptions
    };
});
