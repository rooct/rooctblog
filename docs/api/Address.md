---
title: Address
---

### Address
.balance (uint256):  
Address的余额，以wei为单位。

.transfer(uint256 amount):  
发送给定数量的ether到某个地址，以wei为单位。失败时抛出异常。(推荐使用)

.send(uint256 amount) returns (bool):  
发送给定数量的ether到某个地址，以wei为单位, 失败时返回false。（需要判断结果）

.call(…) returns (bool):  
发起底层的call调用。失败时返回false。（需要判断结果）

.callcode(…) returns (bool):  
发起底层的callcode调用，失败时返回false。不鼓励使用，未来可能会移除。（需要判断结果）

.delegatecall(…) returns (bool):  
发起底层的delegatecall调用，失败时返回false 属于委托调用，保证合约之间的参数布局一致