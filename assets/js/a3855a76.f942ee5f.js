"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[418],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1229:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Accessing Private Data",version:"0.8.10",description:"An example of accessing private data from a Solidity smart contract"},c=void 0,l={unversionedId:"solidity/example/Vault",id:"solidity/example/Vault",isDocsHomePage:!1,title:"Accessing Private Data",description:"An example of accessing private data from a Solidity smart contract",source:"@site/docs/solidity/example/Vault.md",sourceDirName:"solidity/example",slug:"/solidity/example/Vault",permalink:"/rooctblog/docs/solidity/example/Vault",tags:[],version:"current",frontMatter:{title:"Accessing Private Data",version:"0.8.10",description:"An example of accessing private data from a Solidity smart contract"},sidebar:"docs",previous:{title:"Variables",permalink:"/rooctblog/docs/solidity/example/Variables"},next:{title:"View and Pure Functions",permalink:"/rooctblog/docs/solidity/example/ViewAndPureFunctions"}},u=[{value:"Vulnerability",id:"vulnerability",children:[]},{value:"Preventative Techniques",id:"preventative-techniques",children:[]}],b={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"vulnerability"},"Vulnerability"),(0,a.kt)("p",null,"All data on a smart contract can be read."),(0,a.kt)("p",null,"Let's see how we can read ",(0,a.kt)("inlineCode",{parentName:"p"},"private")," data. In the process you will learn how Solidity stores state variables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\n/*\nNote: cannot use web3 on JVM, so use the contract deployed on ropsten\nNote: browser Web3 is old so use Web3 from truffle console\n\nContract deployed on Ropsten\n0x3505a02BCDFbb225988161a95528bfDb279faD6b\n*/\n\n/*\n# Storage\n- 2 ** 256 slots\n- 32 bytes for each slot\n- data is stored sequentially in the order of declaration\n- storage is optimized to save space. If neighboring variables fit in a single\n  32 bytes, then they are packed into the same slot, starting from the right\n*/\n\ncontract Vault {\n    // slot 0\n    uint public count = 123;\n    // slot 1\n    address public owner = msg.sender;\n    bool public isTrue = true;\n    uint16 public u16 = 31;\n    // slot 2\n    bytes32 private password;\n\n    // constants do not use storage\n    uint public constant someConst = 123;\n\n    // slot 3, 4, 5 (one for each array element)\n    bytes32[3] public data;\n\n    struct User {\n        uint id;\n        bytes32 password;\n    }\n\n    // slot 6 - length of array\n    // starting from slot hash(6) - array elements\n    // slot where array element is stored = keccak256(slot)) + (index * elementSize)\n    // where slot = 6 and elementSize = 2 (1 (uint) +  1 (bytes32))\n    User[] private users;\n\n    // slot 7 - empty\n    // entries are stored at hash(key, slot)\n    // where slot = 7, key = map key\n    mapping(uint => User) private idToUser;\n\n    constructor(bytes32 _password) {\n        password = _password;\n    }\n\n    function addUser(bytes32 _password) public {\n        User memory user = User({id: users.length, password: _password});\n\n        users.push(user);\n        idToUser[user.id] = user;\n    }\n\n    function getArrayLocation(\n        uint slot,\n        uint index,\n        uint elementSize\n    ) public pure returns (uint) {\n        return uint(keccak256(abi.encodePacked(slot))) + (index * elementSize);\n    }\n\n    function getMapLocation(uint slot, uint key) public pure returns (uint) {\n        return uint(keccak256(abi.encodePacked(key, slot)));\n    }\n}\n\n/*\nslot 0 - count\nweb3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", 0, console.log)\nslot 1 - u16, isTrue, owner\nweb3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", 1, console.log)\nslot 2 - password\nweb3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", 2, console.log)\n\nslot 6 - array length\ngetArrayLocation(6, 0, 2)\nweb3.utils.numberToHex("111414077815863400510004064629973595961579173665589224203503662149373724986687")\nNote: We can also use web3 to get data location\nweb3.utils.soliditySha3({ type: "uint", value: 6 })\n1st user\nweb3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", "0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f", console.log)\nweb3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", "0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d40", console.log)\nNote: use web3.toAscii to convert bytes32 to alphabet\n2nd user\nweb3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", "0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d41", console.log)\nweb3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", "0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d42", console.log)\n\nslot 7 - empty\ngetMapLocation(7, 1)\nweb3.utils.numberToHex("81222191986226809103279119994707868322855741819905904417953092666699096963112")\nNote: We can also use web3 to get data location\nweb3.utils.soliditySha3({ type: "uint", value: 1 }, {type: "uint", value: 7})\nuser 1\nweb3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", "0xb39221ace053465ec3453ce2b36430bd138b997ecea25c1043da0c366812b828", console.log)\nweb3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", "0xb39221ace053465ec3453ce2b36430bd138b997ecea25c1043da0c366812b829", console.log)\n*/\n\n')),(0,a.kt)("h3",{id:"preventative-techniques"},"Preventative Techniques"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Don't store sensitive information on the blockchain.")))}p.isMDXComponent=!0}}]);