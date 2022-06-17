---
title: PiggyBank
---

**小猪个人存钱罐**
- 个人提取并销毁合约

```
contract PiggyBank {
    event Deposit(address,uint);
    event Withdraw(address,uint);

    receive() external payable{
        emit Deposit(msg.sender,msg.value);
    }

    address public owner;

    constructor() external {
        owner = msg.sender;
    }

    function withdraw() external {
        require(msg.sender==owner,"owner not allowed");
        emit Withdraw(msg.sender,address(this).balance);
        selfdestruct(payable(msg.sender));
    }

}
```