---
title: Contract
---

### Contract
this（当前合约的类型）:  
表示当前合约，可以显式的转换为Address

selfdestruct(address recipient):  
销毁当前合约，并把它所有资金发送到给定的地址。

suicide(address recipient):  
selfdestruct的别名