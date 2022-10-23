"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9760],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=t.createContext({}),l=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,s=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),f=i,m=p["".concat(d,".").concat(f)]||p[f]||c[f]||s;return r?t.createElement(m,a(a({ref:n},u),{},{components:r})):t.createElement(m,a({ref:n},u))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=p;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1218:function(e,n,r){r.r(n),r.d(n,{contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var t=r(7462),i=r(3366),s=(r(7294),r(3905)),a=["components"],o={title:"\u94fe\u8868\u5408\u7ea6"},d=void 0,l={unversionedId:"dapps/\u5de5\u5177\u5408\u7ea6/\u94fe\u8868",id:"dapps/\u5de5\u5177\u5408\u7ea6/\u94fe\u8868",isDocsHomePage:!1,title:"\u94fe\u8868\u5408\u7ea6",description:"`",source:"@site/docs/dapps/\u5de5\u5177\u5408\u7ea6/\u94fe\u8868.md",sourceDirName:"dapps/\u5de5\u5177\u5408\u7ea6",slug:"/dapps/\u5de5\u5177\u5408\u7ea6/\u94fe\u8868",permalink:"/rooctblog/docs/dapps/\u5de5\u5177\u5408\u7ea6/\u94fe\u8868",tags:[],version:"current",frontMatter:{title:"\u94fe\u8868\u5408\u7ea6"},sidebar:"dapp",previous:{title:"\u7b97\u6cd5\u7a33\u5b9a\u5e01",permalink:"/rooctblog/docs/dapps/StableCoin/README"}},u=[],c={toc:u};function p(e){var n=e.components,r=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'// SPDX-License-Identifier: GPL-3.0\n\npragma solidity >=0.6.12 <0.9.0;\n\nlibrary LinkList {\n  address internal constant start = address(1);\n  address internal constant end = address(1);\n  address internal constant empty = address(0);\n\n  struct List {\n    uint256 llSize;\n    mapping(address => address) next;\n  }\n\n  function init(List storage list) internal returns (List storage) {\n    list.next[start] = end;\n\n    return list;\n  }\n\n  function has(List storage list, address addr) internal view returns (bool) {\n    return list.next[addr] != empty;\n  }\n\n  function add(List storage list, address addr) internal returns (List storage) {\n    require(!has(list, addr), "existed");\n    list.next[addr] = list.next[start];\n    list.next[start] = addr;\n    list.llSize++;\n\n    return list;\n  }\n\n  function remove(\n    List storage list,\n    address addr,\n    address prevAddr\n  ) internal returns (List storage) {\n    require(has(list, addr), "!exist");\n    require(list.next[prevAddr] == addr, "wrong prev");\n    list.next[prevAddr] = list.next[addr];\n    list.next[addr] = empty;\n    list.llSize--;\n\n    return list;\n  }\n\n  function getAll(List storage list) internal view returns (address[] memory) {\n    address[] memory addrs = new address[](list.llSize);\n    address curr = list.next[start];\n    for (uint256 i = 0; curr != end; i++) {\n      addrs[i] = curr;\n      curr = list.next[curr];\n    }\n    return addrs;\n  }\n\n  function getPreviousOf(List storage list, address addr) internal view returns (address) {\n    address curr = list.next[start];\n    require(curr != empty, "!inited");\n    for (uint256 i = 0; curr != end; i++) {\n      if (list.next[curr] == addr) return curr;\n      curr = list.next[curr];\n    }\n    return end;\n  }\n\n  function getNextOf(List storage list, address curr) internal view returns (address) {\n    return list.next[curr];\n  }\n\n  function length(List storage list) internal view returns (uint256) {\n    return list.llSize;\n  }\n}\n\n')))}p.isMDXComponent=!0}}]);