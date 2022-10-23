"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[564],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),y=a,f=m["".concat(i,".").concat(y)]||m[y]||p[y]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7738:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],s={},i="\u5168\u5c40\u53d8\u91cf",l={unversionedId:"rusty/memory/global-vars",id:"rusty/memory/global-vars",isDocsHomePage:!1,title:"\u5168\u5c40\u53d8\u91cf",description:"\u4f7f\u7528 lazy_static \u5728\u8fd0\u884c\u671f\u521d\u59cb\u5316\u5168\u5c40\u53d8\u91cf",source:"@site/docs/rusty/memory/global-vars.md",sourceDirName:"rusty/memory",slug:"/rusty/memory/global-vars",permalink:"/rooctblog/docs/rusty/memory/global-vars",tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"Cookbook \u76ee\u5f55\u7d22\u5f15",permalink:"/rooctblog/docs/rusty/index-cookbook"},next:{title:"\u64cd\u4f5c\u7cfb\u7edf",permalink:"/rooctblog/docs/rusty/os/awesome"}},u=[{value:"\u4f7f\u7528 lazy_static \u5728\u8fd0\u884c\u671f\u521d\u59cb\u5316\u5168\u5c40\u53d8\u91cf",id:"\u4f7f\u7528-lazy_static-\u5728\u8fd0\u884c\u671f\u521d\u59cb\u5316\u5168\u5c40\u53d8\u91cf",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5168\u5c40\u53d8\u91cf"},"\u5168\u5c40\u53d8\u91cf"),(0,o.kt)("h3",{id:"\u4f7f\u7528-lazy_static-\u5728\u8fd0\u884c\u671f\u521d\u59cb\u5316\u5168\u5c40\u53d8\u91cf"},"\u4f7f\u7528 lazy_static \u5728\u8fd0\u884c\u671f\u521d\u59cb\u5316\u5168\u5c40\u53d8\u91cf"),(0,o.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/lazy_static/latest/lazy_static/"},"lazy_static")," \u58f0\u660e\u4e00\u4e2a\u5728\u8fd0\u884c\u671f\u521d\u59cb\u5316( \u61d2\u6c42\u503c )\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Hashmap"),"\uff0c\u5b83\u4f1a\u88ab\u6c42\u503c\u4e00\u6b21\uff0c\u7136\u540e\u4fdd\u5b58\u5728\u4e00\u4e2a\u5168\u5c40\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"static")," \u5f15\u7528\u4e4b\u540e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust,editable"},'use lazy_static::lazy_static;\nuse std::collections::HashMap;\n\nlazy_static! {\n    static ref PRIVILEGES: HashMap<&\'static str, Vec<&\'static str>> = {\n        let mut map = HashMap::new;\n        map.insert("James", vec!["user", "admin"]);\n        map.insert("Jim", vec!["user"]);\n        map\n    };\n}\n\nfn show_access(name: &str) {\n    let access = PRIVILEGES.get(name);\n    println!("{}: {:?}", name, access);\n}\n\nfn main {\n    let access = PRIVILEGES.get("James");\n    println!("James: {:?}", access);\n\n    show_access("Jim");\n}\n')))}m.isMDXComponent=!0}}]);