"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5998],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||l;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9928:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),i=["components"],a={title:"Hello World",version:"0.8.10",description:"Hello world in Solidity"},c=void 0,p={unversionedId:"solidity/example/Helloworld",id:"solidity/example/Helloworld",isDocsHomePage:!1,title:"Hello World",description:"Hello world in Solidity",source:"@site/docs/solidity/example/Helloworld.md",sourceDirName:"solidity/example",slug:"/solidity/example/Helloworld",permalink:"/rooctblog/docs/solidity/example/Helloworld",tags:[],version:"current",frontMatter:{title:"Hello World",version:"0.8.10",description:"Hello world in Solidity"},sidebar:"docs",previous:{title:"Hash",permalink:"/rooctblog/docs/solidity/example/Hash"},next:{title:"Honeypot",permalink:"/rooctblog/docs/solidity/example/HoneyPot"}},s=[],u={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pragma")," specifies the compiler version of Solidity."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\n// compiler version must be greater than or equal to 0.8.10 and less than 0.9.0\npragma solidity ^0.8.10;\n\ncontract HelloWorld {\n    string public greet = "Hello World!";\n}\n\n')))}d.isMDXComponent=!0}}]);