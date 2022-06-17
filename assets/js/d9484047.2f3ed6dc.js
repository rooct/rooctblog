"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9847],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return b}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),b=o,d=u["".concat(l,".").concat(b)]||u[b]||f[b]||i;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9401:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"Merkle Tree",version:"0.8.10",description:"Learn about Merkle tree in Solidity"},l=void 0,s={unversionedId:"solidity/example/app/MerkleTree",id:"solidity/example/app/MerkleTree",isDocsHomePage:!1,title:"Merkle Tree",description:"Learn about Merkle tree in Solidity",source:"@site/docs/solidity/example/app/MerkleTree.md",sourceDirName:"solidity/example/app",slug:"/solidity/example/app/MerkleTree",permalink:"/rooctblog/docs/solidity/example/app/MerkleTree",tags:[],version:"current",frontMatter:{title:"Merkle Tree",version:"0.8.10",description:"Learn about Merkle tree in Solidity"},sidebar:"docs",previous:{title:"Iterable Mapping",permalink:"/rooctblog/docs/solidity/example/app/IterableMapping"},next:{title:"Minimal Proxy Contract",permalink:"/rooctblog/docs/solidity/example/app/MinimalProxy"}},p=[],f={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Merkle tree allows you to cryptographically prove that an element is contained"),(0,i.kt)("p",null,"in a set without revealing the entire set."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ncontract MerkleProof {\n    function verify(\n        bytes32[] memory proof,\n        bytes32 root,\n        bytes32 leaf,\n        uint index\n    ) public pure returns (bool) {\n        bytes32 hash = leaf;\n\n        for (uint i = 0; i < proof.length; i++) {\n            bytes32 proofElement = proof[i];\n\n            if (index % 2 == 0) {\n                hash = keccak256(abi.encodePacked(hash, proofElement));\n            } else {\n                hash = keccak256(abi.encodePacked(proofElement, hash));\n            }\n\n            index = index / 2;\n        }\n\n        return hash == root;\n    }\n}\n\ncontract TestMerkleProof is MerkleProof {\n    bytes32[] public hashes;\n\n    constructor() {\n        string[4] memory transactions = [\n            "alice -> bob",\n            "bob -> dave",\n            "carol -> alice",\n            "dave -> bob"\n        ];\n\n        for (uint i = 0; i < transactions.length; i++) {\n            hashes.push(keccak256(abi.encodePacked(transactions[i])));\n        }\n\n        uint n = transactions.length;\n        uint offset = 0;\n\n        while (n > 0) {\n            for (uint i = 0; i < n - 1; i += 2) {\n                hashes.push(\n                    keccak256(\n                        abi.encodePacked(hashes[offset + i], hashes[offset + i + 1])\n                    )\n                );\n            }\n            offset += n;\n            n = n / 2;\n        }\n    }\n\n    function getRoot() public view returns (bytes32) {\n        return hashes[hashes.length - 1];\n    }\n\n    /* verify\n    3rd leaf\n    0x1bbd78ae6188015c4a6772eb1526292b5985fc3272ead4c65002240fb9ae5d13\n\n    root\n    0x074b43252ffb4a469154df5fb7fe4ecce30953ba8b7095fe1e006185f017ad10\n\n    index\n    2\n\n    proof\n    0x948f90037b4ea787c14540d9feb1034d4a5bc251b9b5f8e57d81e4b470027af8\n    0x63ac1b92046d474f84be3aa0ee04ffe5600862228c81803cce07ac40484aee43\n    */\n}\n\n')))}u.isMDXComponent=!0}}]);