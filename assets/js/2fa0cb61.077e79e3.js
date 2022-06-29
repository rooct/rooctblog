"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2620],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return t?o.createElement(m,a(a({ref:n},u),{},{components:t})):o.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},105:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],l={title:"For and While Loop",version:"0.8.10",description:"Example of for and while loop in Solidity"},p=void 0,c={unversionedId:"solidity/example/Loop",id:"solidity/example/Loop",isDocsHomePage:!1,title:"For and While Loop",description:"Example of for and while loop in Solidity",source:"@site/docs/solidity/example/Loop.md",sourceDirName:"solidity/example",slug:"/solidity/example/Loop",permalink:"/rooctblog/docs/solidity/example/Loop",tags:[],version:"current",frontMatter:{title:"For and While Loop",version:"0.8.10",description:"Example of for and while loop in Solidity"},sidebar:"docs",previous:{title:"Library",permalink:"/rooctblog/docs/solidity/example/Library"},next:{title:"Mapping",permalink:"/rooctblog/docs/solidity/example/Mapping"}},u=[],s={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Solidity supports ",(0,i.kt)("inlineCode",{parentName:"p"},"for"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"while"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"do while")," loops."),(0,i.kt)("p",null,"Don't write loops that are unbounded as this can hit the gas limit, causing your transaction to fail."),(0,i.kt)("p",null,"For the reason above, ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"do while")," loops are rarely used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ncontract Loop {\n    function loop() public {\n        // for loop\n        for (uint i = 0; i < 10; i++) {\n            if (i == 3) {\n                // Skip to next iteration with continue\n                continue;\n            }\n            if (i == 5) {\n                // Exit loop with break\n                break;\n            }\n        }\n\n        // while loop\n        uint j;\n        while (j < 10) {\n            j++;\n        }\n    }\n}\n\n")))}d.isMDXComponent=!0}}]);