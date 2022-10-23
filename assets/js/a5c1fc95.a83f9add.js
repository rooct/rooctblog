"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4970],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,y=p["".concat(i,".").concat(m)]||p[m]||f[m]||s;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},569:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=["components"],l={},i="\u4f4d\u5b57\u6bb5",c={unversionedId:"rusty/algos/datastructures/bitfield",id:"rusty/algos/datastructures/bitfield",isDocsHomePage:!1,title:"\u4f4d\u5b57\u6bb5",description:"\u5b9a\u4e49\u548c\u64cd\u4f5c\u4f4d\u5b57\u6bb5",source:"@site/docs/rusty/algos/datastructures/bitfield.md",sourceDirName:"rusty/algos/datastructures",slug:"/rusty/algos/datastructures/bitfield",permalink:"/rooctblog/docs/rusty/algos/datastructures/bitfield",tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"\u6570\u636e\u7ed3\u6784",permalink:"/rooctblog/docs/rusty/algos/datastructures/awesome"},next:{title:"\u590d\u6570",permalink:"/rooctblog/docs/rusty/algos/math/complex"}},u=[{value:"\u5b9a\u4e49\u548c\u64cd\u4f5c\u4f4d\u5b57\u6bb5",id:"\u5b9a\u4e49\u548c\u64cd\u4f5c\u4f4d\u5b57\u6bb5",children:[]}],f={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u4f4d\u5b57\u6bb5"},"\u4f4d\u5b57\u6bb5"),(0,s.kt)("h3",{id:"\u5b9a\u4e49\u548c\u64cd\u4f5c\u4f4d\u5b57\u6bb5"},"\u5b9a\u4e49\u548c\u64cd\u4f5c\u4f4d\u5b57\u6bb5"),(0,s.kt)("p",null,"\u4f7f\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/bitflags/1.3.2/bitflags/macro.bitflags.html"},(0,s.kt)("inlineCode",{parentName:"a"},"bitflags!"))," \u5b8f\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u521b\u5efa\u5b89\u5168\u7684\u4f4d\u5b57\u6bb5\u7c7b\u578b ",(0,s.kt)("inlineCode",{parentName:"p"},"MyFlags"),"\uff0c\u7136\u540e\u4e3a\u5176\u5b9e\u73b0\u57fa\u672c\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"clear")," \u64cd\u4f5c\u3002\u4ee5\u4e0b\u4ee3\u7801\u5c55\u793a\u4e86\u57fa\u672c\u7684\u4f4d\u64cd\u4f5c\u548c\u683c\u5f0f\u5316:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust,editable"},'use bitflags::bitflags;\nuse std::fmt;\n\nbitflags! {\n    struct MyFlags: u32 {\n        const FLAG_A       = 0b00000001;\n        const FLAG_B       = 0b00000010;\n        const FLAG_C       = 0b00000100;\n        const FLAG_ABC     = Self::FLAG_A.bits\n                           | Self::FLAG_B.bits\n                           | Self::FLAG_C.bits;\n    }\n}\n\nimpl MyFlags {\n    pub fn clear(&mut self) -> &mut MyFlags {\n        self.bits = 0;  \n        self\n    }\n}\n\nimpl fmt::Display for MyFlags {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        write!(f, "{:032b}", self.bits)\n    }\n}\n\nfn main {\n    let e1 = MyFlags::FLAG_A | MyFlags::FLAG_C;\n    let e2 = MyFlags::FLAG_B | MyFlags::FLAG_C;\n    assert_eq!((e1 | e2), MyFlags::FLAG_ABC);   \n    assert_eq!((e1 & e2), MyFlags::FLAG_C);    \n    assert_eq!((e1 - e2), MyFlags::FLAG_A);    \n    assert_eq!(!e2, MyFlags::FLAG_A);           \n\n    let mut flags = MyFlags::FLAG_ABC;\n    assert_eq!(format!("{}", flags), "00000000000000000000000000000111");\n    assert_eq!(format!("{}", flags.clear), "00000000000000000000000000000000");\n    assert_eq!(format!("{:?}", MyFlags::FLAG_B), "FLAG_B");\n    assert_eq!(format!("{:?}", MyFlags::FLAG_A | MyFlags::FLAG_B), "FLAG_A | FLAG_B");\n}\n')))}p.isMDXComponent=!0}}]);