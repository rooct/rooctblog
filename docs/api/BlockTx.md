---
title: Block & Transaction
---

### Block
- 只能查看最近的256个区块  
1. block.blockhash(uint blockNumber) returns (bytes32)：返回给定区块号的哈希值，只支持最近256个区块，且不包含当前区块。  
2. block.coinbase (address): 当前块矿工的地址。  
3. block.difficulty (uint):当前块的难度。  
4. block.gaslimit (uint):当前块的gaslimit。  
5. block.number (uint):当前区块的块号。  
6. block.timestamp (uint): 当前块的Unix时间戳（从1970/1/1 00:00:00 UTC开始所经过的秒数）  
7. msg.data (bytes): 完整的调用数据（calldata）。  
8. msg.gas (uint): 当前还剩的gas。  
9. msg.sender (address): 当前调用发起人的地址。  
10. msg.sig (bytes4):调用数据(calldata)的前四个字节（例如为：函数标识符）。  
11. msg.value (uint): 这个消息所附带的以太币，单位为wei。  
12. now (uint): 当前块的时间戳(block.timestamp的别名)  
13. tx.gasprice (uint) : 交易的gas价格。  
14. tx.origin (address): 交易的发送者（全调用链）  