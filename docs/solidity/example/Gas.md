---
title: Gas
version: 0.8.10
description: Example of gas and gas limit in Solidity
---

### Gas优化

- 参数使用calldata 替代 memory
- 将变量转化为内存中使用
- 简化代码，减少变量的使用
- i++ 换成 ++
- 使用变量固定数组长度
- 提前读取出数组元素


### 优化前代码
```
contract GasGolf {
    uint public total;

    function testGas(uint[] memory nums) external {
        for( uint i = 0; i< nums.length; i++){
            bool isEven = nums[i] % 2 == 0;
            bool isLessThan99 = nums[i] < 99 ;
            if (isEven && isLessThan99 ){
                total += nums[i];
            }
        }
    }
}
```

### 优化后代码
```
contract GasGolf {
    uint public total;

    function testGas(uint[] calldata nums) external {
        uint _total = total;
        uint len = nums.length;
        for( uint i = 0; i< len; ++i){
            uint num = nums[i];
            bool isEven = num % 2 == 0;
            bool isLessThan99 = num < 99 ;
            if (num % 2 == 0 && isLessThan99 = num < 99 ){
                _total += num;
            }
        }
        total = _total;
    }
}
```

### How much `ether` do you need to pay for a transaction?

You pay `gas spent * gas price` amount of `ether`, where

- `gas` is a unit of computation
- `gas spent` is the total amount of `gas` used in a transaction
- `gas price` is how much `ether` you are willing to pay per `gas`

Transactions with higher gas price have higher priority to be included in a block.

Unspent gas will be refunded.

### Gas Limit

There are 2 upper bounds to the amount of gas you can spend

- `gas limit` (max amount of gas you're willing to use for your transaction, set by you)
- `block gas limit` (max amount of gas allowed in a block, set by the network)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Gas {
    uint public i = 0;

    // Using up all of the gas that you send causes your transaction to fail.
    // State changes are undone.
    // Gas spent are not refunded.
    function forever() public {
        // Here we run a loop until all of the gas are spent
        // and the transaction fails
        while (true) {
            i += 1;
        }
    }
}

```
