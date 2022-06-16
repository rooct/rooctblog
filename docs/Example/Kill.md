---
title: Kill
---

**自毁合约 selfdestruct()**
- 删除合约
- 强制发送主币到指定地址中，如果接收方为合约并且没有设置receive回调函数，也会强制接收主币

```
contract Kill {
    constructor() payable {}

    function kill() external {
        selfdestruct(payable(msg.sender));
    }

    function testCall() external pure returns(uint){
        return 1;
    }
}

contract Helper {
    function getBalance() external view returns(uint){
        returnn address(this).balance;
    }

    function kill(Kill _kill) external {
        _kill.kill();
    }
}
```