---
title: AccountFactory
---


```
contract Account {
    address public bank;
    address public owner;

    constructor(address _owner) payable {
        bank = msg.sender;
        owner = _owner;
    }
}
contract AccountFactory{
    Account[] public accounts;

    function createAccount(address _owner) external{
        Account _account = new Account{value:111}(_owner);
        accounts.push(_account);
    }
}

```