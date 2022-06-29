"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5912],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7465:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return l}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),s=["components"],o={},c=void 0,u={unversionedId:"algorithms/\u591a\u5c42\u7ea7\u7edf\u8ba1",id:"algorithms/\u591a\u5c42\u7ea7\u7edf\u8ba1",isDocsHomePage:!1,title:"\u591a\u5c42\u7ea7\u7edf\u8ba1",description:"`",source:"@site/docs/algorithms/\u591a\u5c42\u7ea7\u7edf\u8ba1.md",sourceDirName:"algorithms",slug:"/algorithms/\u591a\u5c42\u7ea7\u7edf\u8ba1",permalink:"/rooctblog/docs/algorithms/\u591a\u5c42\u7ea7\u7edf\u8ba1",tags:[],version:"current",frontMatter:{}},l=[],p={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'class RewardClass {\n    constructor() {\n        this.userMap = new Map()\n        this.teamMap = new Map()\n    }\n    start() {\n        this.test()\n    }\n    async test() {\n        let userList=[]\n        for (var i = 0; i < userList.length; i++) {\n            let user = userList[i];\n            let refers = await userModal.find({ "_par": user._add })\n            this.userMap.set(user._add, JSON.stringify(refers))\n            this.teamMap.set(user._add, 0)\n        }\n        // userList = [{ "address": "0xabd204d119d1067ac4cf967acb194c2041b9011c" }]\n        for (var i = 0; i < userList.length; i++) {\n            let addr = userList[i]._add;\n            await this.getArray(addr, JSON.parse(this.userMap.get(addr)), 1)\n        }\n        for (var i = 0; i < userList.length; i++) {\n            await UserTeam({\n                "address": userList[i]._add,\n                "teamcount": this.teamMap.get(userList[i]._add)\n            }).save()\n        }\n        let userTeamList = await UserTeam.find()\n        console.log("ussd-", userTeamList)\n        // console.log("map--", this.teamMap)\n    }\n\n    async getArray(addr, data, times) {\n        if (data.length > 0) {\n            this.teamMap.set(addr, parseInt(this.teamMap.get(addr)) + data.length)\n        }\n        for (var i in data) {\n            let userList = JSON.parse(this.userMap.get(data[i]._add))\n            if (userList.length > 0) {\n                await this.getArray(addr, userList, times + 1);\n            }\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);