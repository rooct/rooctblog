---
title: Hash
---

**哈希运算**
- encode 打包成abi的编码格式会补0
- encodePacked 只是打包成了十六进制，不会补0，存在不同的参数 相同的值，避免发生，中间加入uint值
- keccak256 函数进行加密压缩打包

```
contract HashFunc{
    function hash(string memory text0,string memory text1) external pure returns(bytes32){
        return keccak256(abi.encodePacked(text0,text1));
    }
    function encode(string memory text0,string memory text1) external pure returns(bytes){
        return abi.encode(text0,text1);
    }
    function encodePacked(string memory text0,string memory text1) external pure returns(bytes){
        return abi.encodePacked(text0,text1);
    }
}
```