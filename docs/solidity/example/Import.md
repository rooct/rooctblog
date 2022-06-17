---
title: Import
version: 0.8.10
description: Learn how to import other Solidity files
---

You can import local and external files in Solidity.

### Local

Here is our folder structure.

```
├── Import.sol
└── Foo.sol
```

Foo.sol

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

struct Point {
    uint x;
    uint y;
}

error Unauthorized(address caller);

function add(uint x, uint y) pure returns (uint) {
    return x + y;
}

contract Foo {
    string public name = "Foo";
}

```

Import.sol

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// import Foo.sol from current directory
import "./Foo.sol";

// import {symbol1 as alias, symbol2} from "filename";
import {Unauthorized, add as func, Point} from "./Foo.sol";

contract Import {
    // Initialize Foo.sol
    Foo public foo = new Foo();

    // Test Foo.sol by getting it's name.
    function getFooName() public view returns (string memory) {
        return foo.name();
    }
}

```

### External

You can also import from [GitHub](https://github.com) by simply copying the url

```solidity
// https://github.com/owner/repo/blob/branch/path/to/Contract.sol
import "https://github.com/owner/repo/blob/branch/path/to/Contract.sol";

// Example import ECDSA.sol from openzeppelin-contract repo, release-v4.5 branch
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol";

```
