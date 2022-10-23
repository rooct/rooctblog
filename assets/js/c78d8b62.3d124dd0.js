"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6426],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||l;return n?r.createElement(d,a(a({ref:t},i),{},{components:n})):r.createElement(d,a({ref:t},i))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4227:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return i}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],u={},c="\u590d\u6570",p={unversionedId:"rusty/algos/math/complex",id:"rusty/algos/math/complex",isDocsHomePage:!1,title:"\u590d\u6570",description:"\u521b\u5efa\u590d\u6570",source:"@site/docs/rusty/algos/math/complex.md",sourceDirName:"rusty/algos/math",slug:"/rusty/algos/math/complex",permalink:"/rooctblog/docs/rusty/algos/math/complex",tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"\u4f4d\u5b57\u6bb5",permalink:"/rooctblog/docs/rusty/algos/datastructures/bitfield"},next:{title:"\u7ebf\u6027\u4ee3\u6570",permalink:"/rooctblog/docs/rusty/algos/math/linear-algebra"}},i=[{value:"\u521b\u5efa\u590d\u6570",id:"\u521b\u5efa\u590d\u6570",children:[]},{value:"\u590d\u6570\u76f8\u52a0",id:"\u590d\u6570\u76f8\u52a0",children:[]},{value:"\u6570\u5b66\u51fd\u6570",id:"\u6570\u5b66\u51fd\u6570",children:[]}],m={toc:i};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u590d\u6570"},"\u590d\u6570"),(0,l.kt)("h3",{id:"\u521b\u5efa\u590d\u6570"},"\u521b\u5efa\u590d\u6570"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://autumnai.github.io/cuticula/num/complex/struct.Complex.html"},"num::complex::Complex")," \u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u521b\u5efa\u590d\u6570\uff0c\u5176\u4e2d\u5b9e\u90e8\u548c\u865a\u90e8\u5fc5\u987b\u662f\u4e00\u6837\u7684\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust,editable"},'fn main {\n    let complex_integer = num::complex::Complex::new(10, 20);\n    let complex_float = num::complex::Complex::new(10.1, 20.1);\n\n    println!("Complex integer: {}", complex_integer);\n    println!("Complex float: {}", complex_float);\n}\n')),(0,l.kt)("h3",{id:"\u590d\u6570\u76f8\u52a0"},"\u590d\u6570\u76f8\u52a0"),(0,l.kt)("p",null,"\u590d\u6570\u8ba1\u7b97\u548c Rust \u57fa\u672c\u7c7b\u578b\u7684\u8ba1\u7b97\u5e76\u65e0\u533a\u522b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust,editable"},'fn main {\n    let complex_num1 = num::complex::Complex::new(10.0, 20.0); // Must use floats\n    let complex_num2 = num::complex::Complex::new(3.1, -4.2);\n\n    let sum = complex_num1 + complex_num2;\n\n    println!("Sum: {}", sum);\n}\n')),(0,l.kt)("h3",{id:"\u6570\u5b66\u51fd\u6570"},"\u6570\u5b66\u51fd\u6570"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://autumnai.github.io/cuticula/num/complex/struct.Complex.html"},"num::complex::Complex")," \u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e9b\u5185\u7f6e\u7684\u6570\u5b66\u51fd\u6570\uff0c\u53ef\u7528\u4e8e\u5bf9\u590d\u6570\u8fdb\u884c\u6570\u5b66\u8fd0\u7b97\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust,editable"},'use std::f64::consts::PI;\nuse num::complex::Complex;\n\nfn main {\n    let x = Complex::new(0.0, 2.0*PI);\n\n    println!("e^(2i * pi) = {}", x.exp); // =~1\n}\n')))}s.isMDXComponent=!0}}]);