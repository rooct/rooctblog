---
title: View and Pure Functions
version: 0.8.10
description: An example of view and pure functions in Solidity
---

> 只要读取了链上的状态变量，就需要使用 `view`

> 没有读取链上的数据 ，该用`pure`

Getter functions can be declared `view` or `pure`.

`View` function declares that no state will be changed.

`Pure` function declares that no state variable will be changed or read.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract ViewAndPure {
    uint public x = 1;

    // Promise not to modify the state.
    function addToX(uint y) public view returns (uint) {
        return x + y;
    }

    // Promise not to modify or read from the state.
    function add(uint i, uint j) public pure returns (uint) {
        return i + j;
    }
}

```
