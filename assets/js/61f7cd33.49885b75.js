"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9337],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9740:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],p={title:"Mapping",version:"0.8.10",description:"Example of using mapping in Solidity"},l=void 0,u={unversionedId:"solidity/example/Mapping",id:"solidity/example/Mapping",isDocsHomePage:!1,title:"Mapping",description:"Example of using mapping in Solidity",source:"@site/docs/solidity/example/Mapping.md",sourceDirName:"solidity/example",slug:"/solidity/example/Mapping",permalink:"/rooctblog/docs/solidity/example/Mapping",tags:[],version:"current",frontMatter:{title:"Mapping",version:"0.8.10",description:"Example of using mapping in Solidity"},sidebar:"docs",previous:{title:"For and While Loop",permalink:"/rooctblog/docs/solidity/example/Loop"},next:{title:"Contract that Creates other Contracts",permalink:"/rooctblog/docs/solidity/example/NewContract"}},c=[],s={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Maps are created with the syntax ",(0,a.kt)("inlineCode",{parentName:"p"},"mapping(keyType => valueType)"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"keyType")," can be any built-in value type, bytes, string, or any contract."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"valueType")," can be any type including another mapping or an array."),(0,a.kt)("p",null,"Mappings are not iterable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ncontract Mapping {\n    // Mapping from address to uint\n    mapping(address => uint) public myMap;\n\n    function get(address _addr) public view returns (uint) {\n        // Mapping always returns a value.\n        // If the value was never set, it will return the default value.\n        return myMap[_addr];\n    }\n\n    function set(address _addr, uint _i) public {\n        // Update the value at this address\n        myMap[_addr] = _i;\n    }\n\n    function remove(address _addr) public {\n        // Reset the value to the default value.\n        delete myMap[_addr];\n    }\n}\n\ncontract NestedMapping {\n    // Nested mapping (mapping from address to another mapping)\n    mapping(address => mapping(uint => bool)) public nested;\n\n    function get(address _addr1, uint _i) public view returns (bool) {\n        // You can get values from a nested mapping\n        // even when it is not initialized\n        return nested[_addr1][_i];\n    }\n\n    function set(\n        address _addr1,\n        uint _i,\n        bool _boo\n    ) public {\n        nested[_addr1][_i] = _boo;\n    }\n\n    function remove(address _addr1, uint _i) public {\n        delete nested[_addr1][_i];\n    }\n}\n\n")))}d.isMDXComponent=!0}}]);