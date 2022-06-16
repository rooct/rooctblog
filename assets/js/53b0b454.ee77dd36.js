"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2046],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=s(t),f=o,m=y["".concat(l,".").concat(f)]||y[f]||p[f]||a;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},270:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={title:"Try Catch",version:"0.8.10",description:"An example of try / catch in Solidity"},l=void 0,s={unversionedId:"example/TryCatch",id:"example/TryCatch",isDocsHomePage:!1,title:"Try Catch",description:"An example of try / catch in Solidity",source:"@site/docs/example/TryCatch.md",sourceDirName:"example",slug:"/example/TryCatch",permalink:"/rooctblog/docs/example/TryCatch",tags:[],version:"current",frontMatter:{title:"Try Catch",version:"0.8.10",description:"An example of try / catch in Solidity"},sidebar:"docs",previous:{title:"Calling Parent Contracts",permalink:"/rooctblog/docs/example/Super"},next:{title:"Phishing with tx.origin",permalink:"/rooctblog/docs/example/TxOrigin"}},u=[],p={toc:u};function y(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"try / catch")," can only catch errors from external function calls and contract creation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\n// External contract used for try / catch examples\ncontract Foo {\n    address public owner;\n\n    constructor(address _owner) {\n        require(_owner != address(0), "invalid address");\n        assert(_owner != 0x0000000000000000000000000000000000000001);\n        owner = _owner;\n    }\n\n    function myFunc(uint x) public pure returns (string memory) {\n        require(x != 0, "require failed");\n        return "my func was called";\n    }\n}\n\ncontract Bar {\n    event Log(string message);\n    event LogBytes(bytes data);\n\n    Foo public foo;\n\n    constructor() {\n        // This Foo contract is used for example of try catch with external call\n        foo = new Foo(msg.sender);\n    }\n\n    // Example of try / catch with external call\n    // tryCatchExternalCall(0) => Log("external call failed")\n    // tryCatchExternalCall(1) => Log("my func was called")\n    function tryCatchExternalCall(uint _i) public {\n        try foo.myFunc(_i) returns (string memory result) {\n            emit Log(result);\n        } catch {\n            emit Log("external call failed");\n        }\n    }\n\n    // Example of try / catch with contract creation\n    // tryCatchNewContract(0x0000000000000000000000000000000000000000) => Log("invalid address")\n    // tryCatchNewContract(0x0000000000000000000000000000000000000001) => LogBytes("")\n    // tryCatchNewContract(0x0000000000000000000000000000000000000002) => Log("Foo created")\n    function tryCatchNewContract(address _owner) public {\n        try new Foo(_owner) returns (Foo foo) {\n            // you can use variable foo here\n            emit Log("Foo created");\n        } catch Error(string memory reason) {\n            // catch failing revert() and require()\n            emit Log(reason);\n        } catch (bytes memory reason) {\n            // catch failing assert()\n            emit LogBytes(reason);\n        }\n    }\n}\n\n')))}y.isMDXComponent=!0}}]);