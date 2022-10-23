---
title: Solidity签名验证
---


#### Solidity-链下签名签名-链上验证；链下使用 Ether.js 进行签名，链上使用 OpenZeppelin ECDSA 验证

### ethers.js
```
const provider = new ethers.providers.Web3Provider(ethereum);
      let signer = await provider.getSigner();
      // 2. 签名内容进行 solidityKeccak256格式 Hash
      let message = ethers.utils.solidityKeccak256(["string"], ["HelloWorld"]);
      // 3.转成UTF8 bytes
      let arrayifyMessage = ethers.utils.arrayify(message);
      // 4.使用私钥进行消息签名
      let flatSignature = await signer.signMessage(arrayifyMessage);
```

### contract
```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract Verification {
    address owner;
    using ECDSA for bytes32;

    constructor() {
        owner = msg.sender;
    }

    function isMessageValid(bytes memory _signature)
        public
        view
        returns (address, bool)
    {
        // 1. 对签名信息进行 abi 编码
        bytes memory abiEncode = abi.encodePacked("HelloWorld");

        // 2. 再进行 keccak256 Hash运算
        bytes32 messagehash = keccak256(abiEncode);
        
        // 3. 添加前缀，可以将计算出的以太坊特定的签名。这可以防止恶意 DApp 可以签署任意数据（例如交易）并使用签名来冒充受害者的滥用行为。
        bytes32 ethSignedMessageHash = ECDSA.toEthSignedMessageHash(messagehash);
        
        // 4. 从签名恢复地址
        address signer = ECDSA.recover(ethSignedMessageHash,_signature);

        if (owner == signer) {
            return (signer, true);
        } else {
            return (signer, false);
        }
    }
}
```


```
bytes memory bytecode = type(SmartVault).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(address(this)));
        address _smartVault;
        assembly {
            _smartVault := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }

        SmartVault(_smartVault).initialize(usdtToken, this);
```


```
function computeAddress(address factory, PoolKey memory key) internal pure returns (address pool) {
    require(key.token0 < key.token1);
    pool = address(
        uint256(
            keccak256(
                abi.encodePacked(
                    hex'ff',
                    factory,
                    keccak256(abi.encode(key.token0, key.token1, key.fee)),
                    POOL_INIT_CODE_HASH
                )
            )
        )
    );
}
```



```
import { ethers } from "ethers";

export async function getSignData(addr: string, originPerform: any) {
    let privateKey = "";
    let signer = new ethers.Wallet(privateKey);

    const Permit = [
        { name: 'owner', type: 'address' },
        { name: 'value', type: 'uint256' },
        { name: 'deadline', type: 'uint256' },
    ]
    let amount = ethers.utils.parseEther(String(originPerform));
    let deadLine = Math.round(new Date().getTime() / 1000) + 120;

    let result = await signer._signTypedData({
        version: '1',
        chainId: 256,
        verifyingContract: "0xF040A6A3CfeF6890Cd278A1017bdA077021cd11b",
    }, {
        Permit
    }, {
        owner: addr,
        value: amount,
        deadline: deadLine,
    });

    const signature = result.substring(2);
    const r = "0x" + signature.substring(0, 64);
    const s = "0x" + signature.substring(64, 128);
    const v = parseInt(signature.substring(128, 130), 16);
    return {
        "value": amount,
        "deadline": deadLine,
        "s": s,
        "r": r,
        "v": v
    }
}
```


