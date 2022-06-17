"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3708],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(b,o(o({ref:n},u),{},{components:t})):r.createElement(b,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5532:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={title:"Signature Replay",version:"0.8.10",description:"An example of a contract vulnerable to signature replay attack"},c=void 0,l={unversionedId:"solidity/example/SignatureReplay",id:"solidity/example/SignatureReplay",isDocsHomePage:!1,title:"Signature Replay",description:"An example of a contract vulnerable to signature replay attack",source:"@site/docs/solidity/example/SignatureReplay.md",sourceDirName:"solidity/example",slug:"/solidity/example/SignatureReplay",permalink:"/rooctblog/docs/solidity/example/SignatureReplay",tags:[],version:"current",frontMatter:{title:"Signature Replay",version:"0.8.10",description:"An example of a contract vulnerable to signature replay attack"},sidebar:"docs",previous:{title:"Verifying Signature",permalink:"/rooctblog/docs/solidity/example/Signature"},next:{title:"Reading and Writing to a State Variable",permalink:"/rooctblog/docs/solidity/example/SimpleStorage"}},u=[{value:"Vulnerability",id:"vulnerability",children:[]},{value:"Preventative Techniques",id:"preventative-techniques",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Signing messages off-chain and having a contract that requires that signature before executing\na function is a useful technique."),(0,i.kt)("p",null,"For example this technique is used to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"reduce number of transaction on chain"),(0,i.kt)("li",{parentName:"ul"},"gas-less transaction, called ",(0,i.kt)("inlineCode",{parentName:"li"},"meta transaction"))),(0,i.kt)("h3",{id:"vulnerability"},"Vulnerability"),(0,i.kt)("p",null,"Same signature can be used multiple times to execute a function. This can be harmful\nif the signer's intention was to approve a transaction once."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\npragma experimental ABIEncoderV2;\n\nimport "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol";\n\ncontract MultiSigWallet {\n    using ECDSA for bytes32;\n\n    address[2] public owners;\n\n    constructor(address[2] memory _owners) payable {\n        owners = _owners;\n    }\n\n    function deposit() external payable {}\n\n    function transfer(\n        address _to,\n        uint _amount,\n        bytes[2] memory _sigs\n    ) external {\n        bytes32 txHash = getTxHash(_to, _amount);\n        require(_checkSigs(_sigs, txHash), "invalid sig");\n\n        (bool sent, ) = _to.call{value: _amount}("");\n        require(sent, "Failed to send Ether");\n    }\n\n    function getTxHash(address _to, uint _amount) public view returns (bytes32) {\n        return keccak256(abi.encodePacked(_to, _amount));\n    }\n\n    function _checkSigs(bytes[2] memory _sigs, bytes32 _txHash)\n        private\n        view\n        returns (bool)\n    {\n        bytes32 ethSignedHash = _txHash.toEthSignedMessageHash();\n\n        for (uint i = 0; i < _sigs.length; i++) {\n            address signer = ethSignedHash.recover(_sigs[i]);\n            bool valid = signer == owners[i];\n\n            if (!valid) {\n                return false;\n            }\n        }\n\n        return true;\n    }\n}\n\n')),(0,i.kt)("h3",{id:"preventative-techniques"},"Preventative Techniques"),(0,i.kt)("p",null,"Sign messages with ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce")," and address of the contract."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\npragma experimental ABIEncoderV2;\n\nimport "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol";\n\ncontract MultiSigWallet {\n    using ECDSA for bytes32;\n\n    address[2] public owners;\n    mapping(bytes32 => bool) public executed;\n\n    constructor(address[2] memory _owners) payable {\n        owners = _owners;\n    }\n\n    function deposit() external payable {}\n\n    function transfer(\n        address _to,\n        uint _amount,\n        uint _nonce,\n        bytes[2] memory _sigs\n    ) external {\n        bytes32 txHash = getTxHash(_to, _amount, _nonce);\n        require(!executed[txHash], "tx executed");\n        require(_checkSigs(_sigs, txHash), "invalid sig");\n\n        executed[txHash] = true;\n\n        (bool sent, ) = _to.call{value: _amount}("");\n        require(sent, "Failed to send Ether");\n    }\n\n    function getTxHash(\n        address _to,\n        uint _amount,\n        uint _nonce\n    ) public view returns (bytes32) {\n        return keccak256(abi.encodePacked(address(this), _to, _amount, _nonce));\n    }\n\n    function _checkSigs(bytes[2] memory _sigs, bytes32 _txHash)\n        private\n        view\n        returns (bool)\n    {\n        bytes32 ethSignedHash = _txHash.toEthSignedMessageHash();\n\n        for (uint i = 0; i < _sigs.length; i++) {\n            address signer = ethSignedHash.recover(_sigs[i]);\n            bool valid = signer == owners[i];\n\n            if (!valid) {\n                return false;\n            }\n        }\n\n        return true;\n    }\n}\n\n/*\n// owners\n0xe19aea93F6C1dBef6A3776848bE099A7c3253ac8\n0xfa854FE5339843b3e9Bfd8554B38BD042A42e340\n\n// to\n0xe10422cc61030C8B3dBCD36c7e7e8EC3B527E0Ac\n// amount\n100\n// nonce\n0\n// tx hash\n0x12a095462ebfca27dc4d99feef885bfe58344fb6bb42c3c52a7c0d6836d11448\n\n// signatures\n0x120f8ed8f2fa55498f2ef0a22f26e39b9b51ed29cc93fe0ef3ed1756f58fad0c6eb5a1d6f3671f8d5163639fdc40bb8720de6d8f2523077ad6d1138a60923b801c\n0xa240a487de1eb5bb971e920cb0677a47ddc6421e38f7b048f8aa88266b2c884a10455a52dc76a203a1a9a953418469f9eec2c59e87201bbc8db0e4d9796935cb1b\n*/\n\n')))}d.isMDXComponent=!0}}]);