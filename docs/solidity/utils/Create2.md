```
bytes memory bytecode = type(SmartVault).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(address(this)));
        address _smartVault;
        assembly {
            _smartVault := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }

        SmartVault(_smartVault).initialize(usdtToken, this);
```