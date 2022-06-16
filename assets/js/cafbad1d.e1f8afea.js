"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3269],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(t),m=a,y=c["".concat(o,".").concat(m)]||c[m]||u[m]||p;return t?r.createElement(y,i(i({ref:n},d),{},{components:t})):r.createElement(y,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<p;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4264:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=t(7462),a=t(3366),p=(t(7294),t(3905)),i=["components"],s={title:"Iterable Mapping",version:"0.8.10",description:"Iterable Mapping in Solidity"},o=void 0,l={unversionedId:"example/app/IterableMapping",id:"example/app/IterableMapping",isDocsHomePage:!1,title:"Iterable Mapping",description:"Iterable Mapping in Solidity",source:"@site/docs/example/app/IterableMapping.md",sourceDirName:"example/app",slug:"/example/app/IterableMapping",permalink:"/rooctblog/docs/example/app/IterableMapping",tags:[],version:"current",frontMatter:{title:"Iterable Mapping",version:"0.8.10",description:"Iterable Mapping in Solidity"},sidebar:"docs",previous:{title:"Ether Wallet",permalink:"/rooctblog/docs/example/app/EtherWallet"},next:{title:"Merkle Tree",permalink:"/rooctblog/docs/example/app/MerkleTree"}},d=[],u={toc:d};function c(e){var n=e.components,t=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"You cannot iterate through a ",(0,p.kt)("inlineCode",{parentName:"p"},"mapping"),". So here is an example of how to create an iterable ",(0,p.kt)("inlineCode",{parentName:"p"},"mapping"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\nlibrary IterableMapping {\n    // Iterable mapping from address to uint;\n    struct Map {\n        address[] keys;\n        mapping(address => uint) values;\n        mapping(address => uint) indexOf;\n        mapping(address => bool) inserted;\n    }\n\n    function get(Map storage map, address key) public view returns (uint) {\n        return map.values[key];\n    }\n\n    function getKeyAtIndex(Map storage map, uint index) public view returns (address) {\n        return map.keys[index];\n    }\n\n    function size(Map storage map) public view returns (uint) {\n        return map.keys.length;\n    }\n\n    function set(\n        Map storage map,\n        address key,\n        uint val\n    ) public {\n        if (map.inserted[key]) {\n            map.values[key] = val;\n        } else {\n            map.inserted[key] = true;\n            map.values[key] = val;\n            map.indexOf[key] = map.keys.length;\n            map.keys.push(key);\n        }\n    }\n\n    function remove(Map storage map, address key) public {\n        if (!map.inserted[key]) {\n            return;\n        }\n\n        delete map.inserted[key];\n        delete map.values[key];\n\n        uint index = map.indexOf[key];\n        uint lastIndex = map.keys.length - 1;\n        address lastKey = map.keys[lastIndex];\n\n        map.indexOf[lastKey] = index;\n        delete map.indexOf[key];\n\n        map.keys[index] = lastKey;\n        map.keys.pop();\n    }\n}\n\ncontract TestIterableMap {\n    using IterableMapping for IterableMapping.Map;\n\n    IterableMapping.Map private map;\n\n    function testIterableMap() public {\n        map.set(address(0), 0);\n        map.set(address(1), 100);\n        map.set(address(2), 200); // insert\n        map.set(address(2), 200); // update\n        map.set(address(3), 300);\n\n        for (uint i = 0; i < map.size(); i++) {\n            address key = map.getKeyAtIndex(i);\n\n            assert(map.get(key) == i * 100);\n        }\n\n        map.remove(address(1));\n\n        // keys = [address(0), address(3), address(2)]\n        assert(map.size() == 3);\n        assert(map.getKeyAtIndex(0) == address(0));\n        assert(map.getKeyAtIndex(1) == address(3));\n        assert(map.getKeyAtIndex(2) == address(2));\n    }\n}\n\n")))}c.isMDXComponent=!0}}]);