"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3583],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8842:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={title:"Primitive Data Types",version:"0.8.10",description:"Primitive data types"},s=void 0,u={unversionedId:"example/Primitives",id:"example/Primitives",isDocsHomePage:!1,title:"Primitive Data Types",description:"Primitive data types",source:"@site/docs/example/Primitives.md",sourceDirName:"example",slug:"/example/Primitives",permalink:"/rooctblog/docs/example/Primitives",tags:[],version:"current",frontMatter:{title:"Primitive Data Types",version:"0.8.10",description:"Primitive data types"},sidebar:"docs",previous:{title:"Payable",permalink:"/rooctblog/docs/example/Payable"},next:{title:"Source of Randomness",permalink:"/rooctblog/docs/example/Randomness"}},c=[],p={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here we introduce you to some primitive data types available in Solidity."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uint")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"address"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ncontract Primitives {\n    bool public boo = true;\n\n    /*\n    uint stands for unsigned integer, meaning non negative integers\n    different sizes are available\n        uint8   ranges from 0 to 2 ** 8 - 1\n        uint16  ranges from 0 to 2 ** 16 - 1\n        ...\n        uint256 ranges from 0 to 2 ** 256 - 1\n    */\n    uint8 public u8 = 1;\n    uint public u256 = 456;\n    uint public u = 123; // uint is an alias for uint256\n\n    /*\n    Negative numbers are allowed for int types.\n    Like uint, different ranges are available from int8 to int256\n    \n    int256 ranges from -2 ** 255 to 2 ** 255 - 1\n    int128 ranges from -2 ** 127 to 2 ** 127 - 1\n    */\n    int8 public i8 = -1;\n    int public i256 = 456;\n    int public i = -123; // int is same as int256\n\n    // minimum and maximum of int\n    int public minInt = type(int).min;\n    int public maxInt = type(int).max;\n\n    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;\n\n    /*\n    In Solidity, the data type byte represent a sequence of bytes. \n    Solidity presents two type of bytes types :\n\n     - fixed-sized byte arrays\n     - dynamically-sized byte arrays.\n     \n     The term bytes in Solidity represents a dynamic array of bytes. \n     It\u2019s a shorthand for byte[] .\n    */\n    bytes1 a = 0xb5; //  [10110101]\n    bytes1 b = 0x56; //  [01010110]\n\n    // Default values\n    // Unassigned variables have a default value\n    bool public defaultBoo; // false\n    uint public defaultUint; // 0\n    int public defaultInt; // 0\n    address public defaultAddr; // 0x0000000000000000000000000000000000000000\n}\n\n")))}m.isMDXComponent=!0}}]);