"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[889],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),y=o,f=p["".concat(i,".").concat(y)]||p[y]||u[y]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var d=2;d<a;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8065:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],s={title:"Create2",version:"0.8.10",description:"Precompute contract address with create2"},i=void 0,d={unversionedId:"Example/app/Create2",id:"Example/app/Create2",isDocsHomePage:!1,title:"Create2",description:"Precompute contract address with create2",source:"@site/docs/Example/app/Create2.md",sourceDirName:"Example/app",slug:"/Example/app/Create2",permalink:"/rooctblog/docs/Example/app/Create2",tags:[],version:"current",frontMatter:{title:"Create2",version:"0.8.10",description:"Precompute contract address with create2"},sidebar:"tutorialSidebar",previous:{title:"Bi-Directional Payment Channel",permalink:"/rooctblog/docs/Example/app/BiDirectionalPaymentChannel"},next:{title:"Crowd Fund",permalink:"/rooctblog/docs/Example/app/CrowdFund"}},l=[],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contract address can be precomputed, before the contract is deployed, using ",(0,a.kt)("inlineCode",{parentName:"p"},"create2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ncontract Factory {\n    // Returns the address of the newly deployed contract\n    function deploy(\n        address _owner,\n        uint _foo,\n        bytes32 _salt\n    ) public payable returns (address) {\n        // This syntax is a newer way to invoke create2 without assembly, you just need to pass salt\n        // https://docs.soliditylang.org/en/latest/control-structures.html#salted-contract-creations-create2\n        return address(new TestContract{salt: _salt}(_owner, _foo));\n    }\n}\n\n// This is the older way of doing it using assembly\ncontract FactoryAssembly {\n    event Deployed(address addr, uint salt);\n\n    // 1. Get bytecode of contract to be deployed\n    // NOTE: _owner and _foo are arguments of the TestContract's constructor\n    function getBytecode(address _owner, uint _foo) public pure returns (bytes memory) {\n        bytes memory bytecode = type(TestContract).creationCode;\n\n        return abi.encodePacked(bytecode, abi.encode(_owner, _foo));\n    }\n\n    // 2. Compute the address of the contract to be deployed\n    // NOTE: _salt is a random number used to create an address\n    function getAddress(bytes memory bytecode, uint _salt)\n        public\n        view\n        returns (address)\n    {\n        bytes32 hash = keccak256(\n            abi.encodePacked(bytes1(0xff), address(this), _salt, keccak256(bytecode))\n        );\n\n        // NOTE: cast last 20 bytes of hash to address\n        return address(uint160(uint(hash)));\n    }\n\n    // 3. Deploy the contract\n    // NOTE:\n    // Check the event log Deployed which contains the address of the deployed TestContract.\n    // The address in the log should equal the address computed from above.\n    function deploy(bytes memory bytecode, uint _salt) public payable {\n        address addr;\n\n        /*\n        NOTE: How to call create2\n\n        create2(v, p, n, s)\n        create new contract with code at memory p to p + n\n        and send v wei\n        and return the new address\n        where new address = first 20 bytes of keccak256(0xff + address(this) + s + keccak256(mem[p\u2026(p+n)))\n              s = big-endian 256-bit value\n        */\n        assembly {\n            addr := create2(\n                callvalue(), // wei sent with current call\n                // Actual code starts after skipping the first 32 bytes\n                add(bytecode, 0x20),\n                mload(bytecode), // Load the size of code contained in the first 32 bytes\n                _salt // Salt from function arguments\n            )\n\n            if iszero(extcodesize(addr)) {\n                revert(0, 0)\n            }\n        }\n\n        emit Deployed(addr, _salt);\n    }\n}\n\ncontract TestContract {\n    address public owner;\n    uint public foo;\n\n    constructor(address _owner, uint _foo) payable {\n        owner = _owner;\n        foo = _foo;\n    }\n\n    function getBalance() public view returns (uint) {\n        return address(this).balance;\n    }\n}\n\n")))}p.isMDXComponent=!0}}]);