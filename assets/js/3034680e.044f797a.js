"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8800],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8854:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={title:"Ether and Wei",version:"0.8.10",description:"An example of Ether and Wei in Solidity"},c=void 0,p={unversionedId:"solidity/example/EtherUnits",id:"solidity/example/EtherUnits",isDocsHomePage:!1,title:"Ether and Wei",description:"An example of Ether and Wei in Solidity",source:"@site/docs/solidity/example/EtherUnits.md",sourceDirName:"solidity/example",slug:"/solidity/example/EtherUnits",permalink:"/rooctblog/docs/solidity/example/EtherUnits",tags:[],version:"current",frontMatter:{title:"Ether and Wei",version:"0.8.10",description:"An example of Ether and Wei in Solidity"},sidebar:"docs",previous:{title:"Error",permalink:"/rooctblog/docs/solidity/example/Error"},next:{title:"Events",permalink:"/rooctblog/docs/solidity/example/Events"}},u=[],s={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Transactions are paid with ",(0,o.kt)("inlineCode",{parentName:"p"},"ether"),"."),(0,o.kt)("p",null,"Similar to how one dollar is equal to 100 cent, one ",(0,o.kt)("inlineCode",{parentName:"p"},"ether")," is equal to 10",(0,o.kt)("sup",null,"18")," ",(0,o.kt)("inlineCode",{parentName:"p"},"wei"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ncontract EtherUnits {\n    uint public oneWei = 1 wei;\n    // 1 wei is equal to 1\n    bool public isOneWei = 1 wei == 1;\n\n    uint public oneEther = 1 ether;\n    // 1 ether is equal to 10^18 wei\n    bool public isOneEther = 1 ether == 1e18;\n}\n\n")))}d.isMDXComponent=!0}}]);