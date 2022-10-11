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