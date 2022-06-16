"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2644],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||c;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5379:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=t(7462),a=t(3366),c=(t(7294),t(3905)),o=["components"],i={title:"Hashing with Keccak256",version:"0.8.10",description:"Example of hashing using Keccak256 in Solidity"},l=void 0,s={unversionedId:"example/Keccak256",id:"example/Keccak256",isDocsHomePage:!1,title:"Hashing with Keccak256",description:"Example of hashing using Keccak256 in Solidity",source:"@site/docs/example/Keccak256.md",sourceDirName:"example",slug:"/example/Keccak256",permalink:"/rooctblog/docs/example/Keccak256",tags:[],version:"current",frontMatter:{title:"Hashing with Keccak256",version:"0.8.10",description:"Example of hashing using Keccak256 in Solidity"},sidebar:"docs",previous:{title:"Interface",permalink:"/rooctblog/docs/example/Interface"},next:{title:"Kill",permalink:"/rooctblog/docs/example/Kill"}},u=[],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("hr",null),(0,c.kt)("p",null,"ethers.js   -> ethers.utils.solidityKeccak256(",'["string","uint256","address"]',",","[_text,_num,_addr]",")\nethers.utils.arrayify(hash)"),(0,c.kt)("hr",null),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"keccak256")," computes the Keccak-256 hash of the input."),(0,c.kt)("p",null,"Some use cases are:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Creating a deterministic unique ID from a input"),(0,c.kt)("li",{parentName:"ul"},"Commit-Reveal scheme"),(0,c.kt)("li",{parentName:"ul"},"Compact cryptographic signature (by signing the hash instead of a larger input)")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ncontract HashFunction {\n    function hash(\n        string memory _text,\n        uint _num,\n        address _addr\n    ) public pure returns (bytes32) {\n        \n        return keccak256(abi.encodePacked(_text, _num, _addr));\n    }\n\n    // Example of hash collision\n    // Hash collision can occur when you pass more than one dynamic data type\n    // to abi.encodePacked. In such case, you should use abi.encode instead.\n    function collision(string memory _text, string memory _anotherText)\n        public\n        pure\n        returns (bytes32)\n    {\n        // encodePacked(AAA, BBB) -> AAABBB\n        // encodePacked(AA, ABBB) -> AAABBB\n        return keccak256(abi.encodePacked(_text, _anotherText));\n    }\n}\n\ncontract GuessTheMagicWord {\n    bytes32 public answer =\n        0x60298f78cc0b47170ba79c10aa3851d7648bd96f2f8e46a19dbc777c36fb0c00;\n\n    // Magic word is "Solidity"\n    function guess(string memory _word) public view returns (bool) {\n        return keccak256(abi.encodePacked(_word)) == answer;\n    }\n}\n\n')))}d.isMDXComponent=!0}}]);