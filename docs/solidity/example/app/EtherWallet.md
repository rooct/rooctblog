---
title: Ether Wallet
version: 0.8.10
description: Simple example of wallet in Solidity
---


- 设置回调函数receive ，而不设置fallback函数，意思是任何人发送不存在的函数时报错，除非向合约发送主币,
- payable 为可支持主币，发送或接收需payable
  
*发送交易方法*
- transfer(uint) 消耗指定的gas
- send(uint) -> (bool,bytes) 
- call{value:amount}("") -> (bool,bytes)


An example of a basic wallet.

- Anyone can send ETH.
- Only the owner can withdraw.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract EtherWallet {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    receive() external payable {}

    function withdraw(uint _amount) external {
        require(msg.sender == owner, "caller is not owner");
        payable(msg.sender).transfer(_amount);
    }

    function getBalance() external view returns (uint) {
        return address(this).balance;
    }
}

```
