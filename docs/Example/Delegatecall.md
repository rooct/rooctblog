---
title: Delegatecall
version: 0.8.10
description: Example of how to use deletegatecall in Solidity
---

**委托调用合约**
- 委托调用合约 与 被调用合约的变量位置布局需要一致
- 可在被调用合约的变量 往后添加，保证前面的变量 与委托合约变量一致

`delegatecall` is a low level function similar to `call`.

When contract `A` executes `delegatecall` to contract `B`, `B`'s code is excuted

with contract `A`'s storage, `msg.sender` and `msg.value`.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// NOTE: Deploy this contract first
contract B {
    // NOTE: storage layout must be the same as contract A
    // uint public testAbc; //不可添加变量
    uint public num;
    address public sender;
    uint public value;
    uint public testAbc;//可添加变量

    function setVars(uint _num) public payable {
        num = _num;
        sender = msg.sender;
        value = msg.value;
    }
}

contract A {
    uint public num;
    address public sender;
    uint public value;

    function setVars(address _contract, uint _num) public payable {
        // A's storage is set, B is not modified.
        (bool success, bytes memory data) = _contract.delegatecall(
            abi.encodeWithSignature("setVars(uint256)", _num)
        );
    }
}

```
