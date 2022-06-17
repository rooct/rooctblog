---
title: Crypto
---

### Crypto
addmod(uint x, uint y, uint k) returns (uint):  
计算(x + y) % k，加法支持任意的精度且不会在2**256处溢出，从0.5.0版本开始断言k != 0。

mulmod(uint x, uint y, uint k) returns (uint):  
计算 (x y) % k， 乘法支持任意的精度且不会在2*256处溢出， 从0.5.0版本开始断言k != 0。

keccak256(…) returns (bytes32):  
使用以太坊的（Keccak-256）计算HASH值。紧密打包参数。

sha256(…) returns (bytes32):  
使用SHA-256计算hash值，紧密打包参数。

sha3(…) returns (bytes32):  
keccak256的别名

ripemd160(…) returns (bytes20):  
使用RIPEMD-160计算HASH值。紧密打包参数。

ecrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) returns (address):  
通过椭圆曲线签名来恢复与公钥关联的地址，或者在错误时返回零。可用于签名数据的校验，如果返回结果是签名者的公匙地址，那么说明数据是正确的。