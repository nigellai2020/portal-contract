// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.13;

import "./Authorization.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./AuditorInfo.sol";

contract ProjectInfo is Authorization, ReentrancyGuard {
    using SafeERC20 for IERC20;

    enum PackageStatus {INACTIVE, ACTIVE}
    enum PackageVersionStatus {WORKING, AUDITING, VOIDED}

    struct Package {
        uint256 projectId;
        uint256 currVersionIndex;
        string ipfsCid;
        bytes32 category;
        PackageStatus status;
    }
    struct SemVer {
        uint256 major;
        uint256 minor;
        uint256 patch;        
    }
    struct PackageVersion {
        uint256 packageId;
        SemVer version;
        PackageVersionStatus status;
        string ipfsCid;
        uint256 timestamp;
    }
    
    IERC20 public immutable token;
    AuditorInfo public auditorInfo;
    // active package list
    uint256 public projectCount;
    // package name max length: 214, repository name max length: 100
    uint256 private constant maxNameLength = 100;

    mapping(uint256 => uint256) public projectBalance; //projectBalance[projectId] = amount
    mapping(address => mapping(uint256 => uint256)) public projectBackerBalance; //projectBackerBalance[staker][projectId] = amount
    mapping(uint256 => bytes) public projectName; // projectName[projectId] = name
    mapping(bytes => uint256) public projectNameInv; //  projectNameInv[name] = projectId
    mapping(uint256 => string) public projectIpfsCid; // projectIpfsCid[projectId] = ipfsCid
    
    // project <-> owner / admin
    mapping(uint256 => address) public projectOwner; // projectOwner[projectId] = owner
    mapping(address => uint256[]) public ownersProjects; // ownersProjects[owner][ownersProjectsIdx] = projectId
    mapping(address => mapping(uint256 => uint256)) public ownersProjectsInv; // ownersProjectsInv[owner][projectId] = ownersProjectsIdx
    mapping(uint256 => address) public projectNewOwner; // projectNewOwner[projectId] = newOwner
    mapping(uint256 => address[]) public projectAdmin; // projectAdmin[projectId][idx] = admin
    mapping(uint256 => mapping(address => uint256)) public projectAdminInv; // projectAdminInv[projectId][admin] = idx

    // package
    Package[] public packages; // packages[packageId] = {projectId, currVersionIndex, status}
    PackageVersion[] public packageVersions; // packageVersions[packageVersionsId] = {packageId, version, status, ipfsCid}
    mapping(uint256 => uint256[]) public packageVersionsList; // packageVersionsList[packageId][idx] = packageVersionsId
    mapping(uint256 => mapping(uint256 => bytes)) public packageName; // packageName[projectId][packageId] = name;
    mapping(uint256 => mapping(bytes => uint256)) public packageNameInv; // packageNameInv[projectId][name] = packageId;

    // package <-> admin
    mapping(uint256 => address[]) public packageAdmin; // packageAdmin[packageId][idx] = admin
    mapping(uint256 => mapping(address => uint256)) public packageAdminInv; // packageAdminInv[packageId][admin] = idx

    // project <-> package
    mapping(uint256 => uint256[]) public projectPackages; // projectPackages[projectId][projectPackagesIdx] = packageId
    mapping(uint256 => mapping(uint256 => uint256)) public projectPackagesInv; // projectPackagesInv[projectId][packageId] = projectPackagesIdx
    mapping(uint256 => uint256) private projectPackagesMaxLength; // projectPackagesMaxLength[projectId] = length

    event NewProject(uint256 indexed projectId, address indexed owner, string name, string ipfsCid);
    event UpdateProjectName(uint256 indexed projectId, string name);
    event UpdateProjectIpfsCid(uint256 indexed projectId, string ipfsCid);
    
    event TransferProjectOwnership(uint256 indexed projectId, address indexed newOwner);
    event AddAdmin(uint256 indexed projectId, address indexed admin);
    event RemoveAdmin(uint256 indexed projectId, address indexed admin);

    event NewPackage(uint256 indexed projectId, uint256 indexed packageId, string name, string ipfsCid);
    event UpdatePackageName(uint256 indexed packageId, string name);
    event UpdatePackageIpfsCid(uint256 indexed packageId, string ipfsCid);
    event NewPackageVersion(uint256 indexed packageId, uint256 indexed packageVersionId, SemVer version);
    event UpdatePackageVersionIpfsCid(uint256 indexed packageId, uint256 indexed packageVersionId, string ipfsCid);
    event SetPackageVersionStatus(uint256 indexed packageId, uint256 indexed packageVersionId, PackageVersionStatus status);
    event AddPackageAdmin(uint256 indexed packageId, address indexed admin);
    event RemovePackageAdmin(uint256 indexed packageId, address indexed admin);

    event Stake(address indexed sender, uint256 indexed projectId, uint256 amount, uint256 newBalance);
    event Unstake(address indexed sender, uint256 indexed projectId, uint256 amount, uint256 newBalance);

    constructor(IERC20 _token, AuditorInfo _auditorInfo) {
        token = _token;
        auditorInfo = _auditorInfo;
    }

    modifier onlyProjectOwner(uint256 projectId) {
        require(projectOwner[projectId] == msg.sender, "not from owner");
        _;
    }

    modifier isProjectAdminOrOwner(uint256 projectId) {
        require(projectAdmin[projectId].length > 0 &&  
            projectAdmin[projectId][projectAdminInv[projectId][msg.sender]] == msg.sender 
            || projectOwner[projectId] == msg.sender
        , "not from admin");
        _;
    }

    modifier isProjectOwner(uint256 packageId) {
        require(packageId < packages.length, "invalid packageId");
        Package storage package = packages[packageId];
        uint256 projectId = package.projectId;
        require(projectOwner[package.projectId] == msg.sender, "not from owner");
        _;
    }

    modifier onlyActiveAuditor {
        require(auditorInfo.isActiveAuditor(msg.sender), "not from active auditor");
        _;
    }

    function ownersProjectsLength(address owner) external view returns (uint256 length) {
        length = ownersProjects[owner].length;
    }
    function projectAdminLength(uint256 projectId) external view returns (uint256 length) {
        length = projectAdmin[projectId].length;
    }
    function packageAdminLength(uint256 packageId) external view returns (uint256 length) {
        length = packageAdmin[packageId].length;
    }
    function packagesLength() external view returns (uint256 length) {
        length = packages.length;
    }
    function packageVersionsLength() external view returns (uint256 length) {
        length = packageVersions.length;
    }
    function packageVersionsListLength(uint256 packageId) external view returns (uint256 length) {
        length = packageVersionsList[packageId].length;
    }
    function projectPackagesLength(uint256 projectId) external view returns (uint256 length) {
        length = projectPackages[projectId].length;
    }
    function _isValidName(bytes memory bName) internal pure returns (bool) {
        // first char must be a-z0-9-
        if (bName[0] > 0x7a) return false;
        if (bName[0] < 0x61) {
            if (bName[0] > 0x39) return false;
            if (bName[0] < 0x30 && bName[0] != 0x2d) return false;
        }
        // Allowed characters: a-z0-9-._
        for (uint i = 1; i < bName.length; i++) {
            if (bName[i] >= 0x61 && bName[i] <= 0x7a) continue;
            if (bName[i] >= 0x30 && bName[i] <= 0x39) continue;
            if (bName[i] == 0x2d) continue;
            if (bName[i] == 0x5f) continue;
            if (bName[i] == 0x2e) continue;
            return false;
        }
        return true;
    }
    function isValidProjectName(uint256 projectId, bytes memory bName) internal view returns (bool) {
        if (bName.length == 0) return false;
        // excluding hyphen between project name and package name
        uint256 pLength = projectPackagesMaxLength[projectId] > 0 ? projectPackagesMaxLength[projectId] : 1;
        if ((bName.length + pLength) > maxNameLength - 1) return false;
        if (projectNameInv[bName] != projectId) {
            bytes memory pName = projectName[projectNameInv[bName]];
            if (bName.length == pName.length && keccak256(bName) == keccak256(pName)) return false;
        }
        return _isValidName(bName);
    }
    function isValidPackageName(uint256 projectId, uint256 packageId, bytes memory bName) internal view returns (bool) {
        if (bName.length == 0) return false;
        // excluding hyphen between project name and package name
        if ((projectName[projectId].length + bName.length) > maxNameLength - 1) return false;
        uint256 _packageId = packageNameInv[projectId][bName];
        if (_packageId != packageId) {
            bytes memory pName = packageName[projectId][_packageId];
            if (bName.length == pName.length && keccak256(bName) == keccak256(pName)) return false;
        }
        return _isValidName(bName);
    }
    function isPackageAdmin(uint256 packageId) internal view returns (bool) {
        Package storage package = packages[packageId];
        uint256 projectId = package.projectId;
        if((projectAdmin[projectId].length > 0 &&  
            projectAdmin[projectId][projectAdminInv[projectId][msg.sender]] == msg.sender)
            || projectOwner[projectId] == msg.sender
            || (packageAdmin[packageId].length > 0 &&
            packageAdmin[packageId][packageAdminInv[packageId][msg.sender]] == msg.sender)
        ) return true;
        return false;
    }

    //
    // functions called by project owners
    //
    function newProject(string calldata name, string calldata ipfsCid) external returns (uint256 projectId) {
        projectId = projectCount;
        bytes memory bName = bytes(name);
        require(isValidProjectName(projectId, bName), "invalid project name");
        projectOwner[projectId] = msg.sender;
        ownersProjectsInv[msg.sender][projectId] = ownersProjects[msg.sender].length;
        ownersProjects[msg.sender].push(projectId);
        projectName[projectId] = bName;
        projectNameInv[bName] = projectId;
        projectIpfsCid[projectId] = ipfsCid;
        projectCount++;
        emit NewProject(projectId, msg.sender, name, ipfsCid);
    }
    function updateProjectName(uint256 projectId, string calldata name) external isProjectAdminOrOwner(projectId) {
        bytes memory bName = bytes(name);
        require(isValidProjectName(projectId, bName), "invalid project name");
        delete projectNameInv[projectName[projectId]];
        projectName[projectId] = bName;
        projectNameInv[bName] = projectId;
        emit UpdateProjectName(projectId, name);
    }
    function updateProjectIpfsCid(uint256 projectId, string calldata ipfsCid) external isProjectAdminOrOwner(projectId) {
        require(projectId < projectCount, "invalid projectId");
        projectIpfsCid[projectId] = ipfsCid;
        emit UpdateProjectIpfsCid(projectId, ipfsCid);
    }
    function _removeProjectFromOwner(address owner, uint256 projectId) internal {
        // make sure the project ownership is checked !
        uint256 idx = ownersProjectsInv[owner][projectId];
        uint256 lastIdx = ownersProjects[owner].length - 1;
        if (idx < lastIdx) {
            uint256 lastProjectId = ownersProjects[owner][lastIdx];
            ownersProjectsInv[owner][lastProjectId] = idx;
            ownersProjects[owner][idx] = lastProjectId;
        }
        delete ownersProjectsInv[owner][projectId];
        ownersProjects[owner].pop();
    }
    function transferProjectOwnership(uint256 projectId, address newOwner) external onlyProjectOwner(projectId) {
        
        projectNewOwner[projectId] = newOwner;
    }
    function takeProjectOwnership(uint256 projectId) external {
        require(projectNewOwner[projectId] == msg.sender, "not from new owner");
        address prevOwner = projectOwner[projectId];
        projectOwner[projectId] = msg.sender;
        projectNewOwner[projectId] = address(0);

        _removeProjectFromOwner(prevOwner, projectId);

        emit TransferProjectOwnership(projectId, msg.sender);
    }
    function addProjectAdmin(uint256 projectId, address admin) external onlyProjectOwner(projectId) {
        require(projectAdmin[projectId].length == 0 || projectAdmin[projectId][projectAdminInv[projectId][admin]] != admin, "already a admin");
        projectAdminInv[projectId][admin] = projectAdmin[projectId].length;
        projectAdmin[projectId].push(admin);

        emit AddAdmin(projectId, admin);
    }
    function removeProjectAdmin(uint256 projectId, address admin) external onlyProjectOwner(projectId) {
        uint256 idx = projectAdminInv[projectId][admin];
        uint256 lastIdx = projectAdmin[projectId].length - 1;
        if (idx < lastIdx) {
            address lastAdmin = projectAdmin[projectId][lastIdx];
            projectAdminInv[projectId][lastAdmin] = idx;
            projectAdmin[projectId][idx] = lastAdmin;
        }
        delete projectAdminInv[projectId][admin];
        projectAdmin[projectId].pop();

        emit RemoveAdmin(projectId, admin);
    }
    function newPackage(uint256 projectId, string calldata name, bytes32 category, string calldata ipfsCid) external isProjectAdminOrOwner(projectId) returns (uint256 packageId) {
        packageId = packages.length;
        bytes memory bName = bytes(name);
        require(isValidPackageName(projectId, packageId, bName), "invalid package name");
        packages.push(Package({
            projectId: projectId,
            currVersionIndex: 0,
            ipfsCid: ipfsCid,
            category: category,
            status: PackageStatus.ACTIVE
        }));
        packageName[projectId][packageId] = bName;
        packageNameInv[projectId][bName] = packageId;
        projectPackages[projectId].push(packageId);
        if (bName.length > projectPackagesMaxLength[projectId]) {
            projectPackagesMaxLength[projectId] = bName.length;
        }
        emit NewPackage(projectId, packageId, name, ipfsCid);
    }
    function updatePackageName(uint256 projectId, uint256 packageId, string calldata name) external isProjectAdminOrOwner(projectId) {
        bytes memory bName = bytes(name);
        require(isValidPackageName(projectId, packageId, bName), "invalid package name");
        delete  packageNameInv[projectId][packageName[projectId][packageId]];
        packageName[projectId][packageId] = bName;
        packageNameInv[projectId][bName] = packageId;
        if (bName.length > projectPackagesMaxLength[projectId]) {
            projectPackagesMaxLength[projectId] = bName.length;
        }
        emit UpdatePackageName(packageId, name);
    }
    function updatePackageIpfsCid(uint256 projectId, uint256 packageId, string calldata ipfsCid) external isProjectAdminOrOwner(projectId) {
        require(packageId < packages.length, "invalid packageId");
        Package storage package = packages[packageId];
        require(package.projectId == projectId, "projectId/packageId not match");
        package.ipfsCid = ipfsCid;
        emit UpdatePackageIpfsCid(packageId, ipfsCid);
    }
    function addPackageAdmin(uint256 packageId, address admin) external isProjectOwner(packageId) {
        require(packageAdmin[packageId].length == 0 || packageAdmin[packageId][packageAdminInv[packageId][admin]] != admin, "already a admin");
        packageAdminInv[packageId][admin] = packageAdmin[packageId].length;
        packageAdmin[packageId].push(admin);
        emit AddPackageAdmin(packageId, admin);
    }
    function removePackageAdmin(uint256 packageId, address admin) external isProjectOwner(packageId) {
        uint256 idx = packageAdminInv[packageId][admin];
        uint256 lastIdx = packageAdmin[packageId].length - 1;
        if (idx < lastIdx) {
            address lastAdmin = packageAdmin[packageId][lastIdx];
            packageAdminInv[packageId][lastAdmin] = idx;
            packageAdmin[packageId][idx] = lastAdmin;
        }
        delete packageAdminInv[packageId][admin];
        packageAdmin[packageId].pop();
        emit RemovePackageAdmin(packageId, admin);
    }

    function newPackageVersion(uint256 projectId, uint256 packageId, SemVer memory version, string calldata ipfsCid) public isProjectAdminOrOwner(projectId) returns (uint256 packageVersionId) {
        require(packageId < packages.length, "invalid packageId");
        require(packages[packageId].projectId == projectId, "projectId/packageId not match");
        uint256 versionsLength = packageVersionsList[packageId].length;
        if (versionsLength > 0) {
            uint256 lastVersionId = packageVersionsList[packageId][versionsLength - 1];
            PackageVersion memory lastPackageVersion = packageVersions[lastVersionId];
            if (lastPackageVersion.version.major == version.major) {
                if (lastPackageVersion.version.minor == version.minor) {
                    require(version.patch > lastPackageVersion.version.patch, "patch version must be bumped");
                }
                else {
                    require(version.minor > lastPackageVersion.version.minor, "minor version must be bumped");
                }
            }
            else {
                require(version.major > lastPackageVersion.version.major, "major version must be bumped");
            }
        }        
        packageVersionId = packageVersions.length;
        packageVersionsList[packageId].push(packageVersionId);
        packageVersions.push(PackageVersion({
            packageId: packageId,
            version: version,
            status: PackageVersionStatus.WORKING,
            ipfsCid: ipfsCid,
            timestamp: block.timestamp
        }));

        emit NewPackageVersion(packageId, packageVersionId, version);
    }
    function updatePackageVersionIpfsCid(uint256 packageVersionId, string calldata ipfsCid) external {
        require(packageVersionId < packageVersions.length, "invalid packageVersionId");
        PackageVersion storage packageVersion = packageVersions[packageVersionId];
        require(packageVersion.status == PackageVersionStatus.WORKING, "not under working");
        require(isPackageAdmin(packageVersion.packageId), "not from admin");
        packageVersion.ipfsCid = ipfsCid;
        emit UpdatePackageVersionIpfsCid(packageVersion.packageId, packageVersionId, ipfsCid);
    }

    function _setPackageVersionStatus(PackageVersion storage packageVersion, uint256 packageVersionId, PackageVersionStatus status) internal {
        packageVersion.status = status;
        emit SetPackageVersionStatus(packageVersion.packageId, packageVersionId, status);
    }

    function voidPackageVersion(uint256 packageVersionId) external {
        require(packageVersionId < packageVersions.length, "invalid packageVersionId");
        PackageVersion storage packageVersion = packageVersions[packageVersionId];
        require(packageVersion.status != PackageVersionStatus.VOIDED, "already voided");
        // require(packageVersion.status != PackageVersionStatus.AUDIT_PASSED, "Audit passed version cannot be voided");
        _setPackageVersionStatus(packageVersion, packageVersionId, PackageVersionStatus.VOIDED);
    } 
    function setPackageVersionToAuditing(uint256 packageVersionId) external {
        require(packageVersionId < packageVersions.length, "invalid packageVersionId");
        PackageVersion storage packageVersion = packageVersions[packageVersionId];
        require(packageVersion.status == PackageVersionStatus.WORKING, "not under working");
        require(isPackageAdmin(packageVersion.packageId), "not from admin");
        _setPackageVersionStatus(packageVersion, packageVersionId, PackageVersionStatus.AUDITING);
    }
    // function addProjectPackage(uint256 projectId, uint256 packageId) external isProjectAdminOrOwner(projectId) {
    //     require(packageId < packages.length, "invalid packageId");
    //     projectPackagesInv[projectId][packageId] = projectPackages[projectId].length;
    //     projectPackages[projectId].push(packageId);

    //     emit AddProjectPackage(projectId, packageId);
    // }
    // function removeProjectPackage(uint256 projectId, uint256 packageId) external isProjectAdminOrOwner(projectId) {
    //     uint256 idx = projectPackagesInv[projectId][packageId];
    //     uint256 lastIdx = projectPackages[projectId].length - 1;
    //     if (idx < lastIdx) {
    //         uint256 lastPackageId = projectPackages[projectId][lastIdx];
    //         projectPackagesInv[projectId][lastPackageId] = idx;
    //         projectPackages[projectId][idx] = lastPackageId;
    //     }
    //     delete projectPackagesInv[projectId][packageId];
    //     projectPackages[projectId].pop();

    //     emit RemoveProjectPackage(projectId, packageId);        
    // }

    function stake(uint256 projectId, uint256 amount) external nonReentrant {
        require(amount > 0, "amount = 0");
        amount = _transferTokenFrom(amount);
        uint256 newBalance = projectBackerBalance[msg.sender][projectId] + amount;
        projectBackerBalance[msg.sender][projectId] = newBalance;
        projectBalance[projectId] += amount;
        emit Stake(msg.sender, projectId, amount, newBalance);
    }

    function unstake(uint256 projectId, uint256 amount) external nonReentrant {
        require(amount > 0, "amount = 0");
        uint256 newBalance = projectBackerBalance[msg.sender][projectId] - amount;
        projectBackerBalance[msg.sender][projectId] = newBalance;
        projectBalance[projectId] -= amount;
        token.safeTransfer(msg.sender, amount);
        emit Unstake(msg.sender, projectId, amount, newBalance);
    }

    function _transferTokenFrom(uint amount) internal returns (uint256 balance) {
        balance = token.balanceOf(address(this));
        token.safeTransferFrom(msg.sender, address(this), amount);
        balance = token.balanceOf(address(this)) - balance;
    }
}