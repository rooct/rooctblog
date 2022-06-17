---
title: Immutable
version: 0.8.10
description: Immutable variables
---

- Immutable 关键词 类似于constant, 
- constant提前知道变量的值，而且必须部署前初始化
- Immutable 可以部署的时候赋值，节省gas

Immutable variables are like constants. Values of immutable variables can be set inside the constructor but cannot be modified afterwards.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Immutable {
    // coding convention to uppercase constant variables
    address public immutable MY_ADDRESS;
    uint public immutable MY_UINT;

    constructor(uint _myUint) {
        MY_ADDRESS = msg.sender;
        MY_UINT = _myUint;
    }
}

```
