"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5091],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,c(c({ref:t},p),{},{components:n})):r.createElement(g,c({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7879:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],s={},i=void 0,l={unversionedId:"rusty/algos/sorting",id:"rusty/algos/sorting",isDocsHomePage:!1,title:"sorting",description:"Vector \u6392\u5e8f",source:"@site/docs/rusty/algos/sorting.md",sourceDirName:"rusty/algos",slug:"/rusty/algos/sorting",permalink:"/rooctblog/docs/rusty/algos/sorting",tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"\u751f\u6210\u968f\u673a\u503c",permalink:"/rooctblog/docs/rusty/algos/randomness"},next:{title:"\u65e5\u5e38\u5f00\u53d1\u5e38\u7528\u5e93",permalink:"/rooctblog/docs/rusty/awesome-daily-dev"}},p=[{value:"Vector \u6392\u5e8f",id:"vector-\u6392\u5e8f",children:[{value:"\u5bf9\u6574\u6570 Vector \u6392\u5e8f",id:"\u5bf9\u6574\u6570-vector-\u6392\u5e8f",children:[]},{value:"\u5bf9\u6d6e\u70b9\u6570 Vector \u6392\u5e8f",id:"\u5bf9\u6d6e\u70b9\u6570-vector-\u6392\u5e8f",children:[]},{value:"\u5bf9\u7ed3\u6784\u4f53 Vector \u6392\u5e8f",id:"\u5bf9\u7ed3\u6784\u4f53-vector-\u6392\u5e8f",children:[]}]}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vector-\u6392\u5e8f"},"Vector \u6392\u5e8f"),(0,a.kt)("h3",{id:"\u5bf9\u6574\u6570-vector-\u6392\u5e8f"},"\u5bf9\u6574\u6570 Vector \u6392\u5e8f"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/vec/struct.Vec.html#method.sort"},"Vec::sort")," \u6765\u6392\u5e8f\uff0c\u5982\u679c\u5927\u5bb6\u5e0c\u671b\u83b7\u5f97\u66f4\u9ad8\u7684\u6027\u80fd\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/vec/struct.Vec.html#method.sort_unstable"},"Vec::sort_unstable"),"\uff0c\u4f46\u662f\u8be5\u65b9\u6cd5\u65e0\u6cd5\u4fdd\u7559\u76f8\u7b49\u5143\u7d20\u7684\u987a\u5e8f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust,editable"},"fn main {\n    let mut vec = vec![1, 5, 10, 2, 15];\n    \n    vec.sort;\n\n    assert_eq!(vec, vec![1, 2, 5, 10, 15]);\n}\n")),(0,a.kt)("h3",{id:"\u5bf9\u6d6e\u70b9\u6570-vector-\u6392\u5e8f"},"\u5bf9\u6d6e\u70b9\u6570 Vector \u6392\u5e8f"),(0,a.kt)("p",null,"\u6d6e\u70b9\u6570\u6570\u7ec4\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/primitive.slice.html#method.sort_by"},"Vec::sort_by")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/cmp/trait.PartialOrd.html#tymethod.partial_cmp"},"PartialOrd::partial_cmp")," \u8fdb\u884c\u6392\u5e8f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust,editable"},"fn main {\n    let mut vec = vec![1.1, 1.15, 5.5, 1.123, 2.0];\n\n    vec.sort_by(|a, b| a.partial_cmp(b).unwrap);\n\n    assert_eq!(vec, vec![1.1, 1.123, 1.15, 2.0, 5.5]);\n}\n")),(0,a.kt)("h3",{id:"\u5bf9\u7ed3\u6784\u4f53-vector-\u6392\u5e8f"},"\u5bf9\u7ed3\u6784\u4f53 Vector \u6392\u5e8f"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u4e2d\u7684\u7ed3\u6784\u4f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," \u5c06\u5b9e\u73b0\u57fa\u4e8e\u5b57\u6bb5 ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"age")," \u7684\u81ea\u7136\u6392\u5e8f\u3002\u4e3a\u4e86\u8ba9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," \u53d8\u4e3a\u53ef\u6392\u5e8f\u7684\uff0c\u6211\u4eec\u9700\u8981\u4e3a\u5176\u6d3e\u751f ",(0,a.kt)("inlineCode",{parentName:"p"},"Eq\u3001PartialEq\u3001Ord\u3001PartialOrd")," \u7279\u5f81\uff0c\u5173\u4e8e\u8fd9\u51e0\u4e2a\u7279\u5f81\u7684\u8be6\u60c5\uff0c\u8bf7\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://course.rs/advance/confonding/eq.html"},"\u8fd9\u91cc"),"\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/vec/struct.Vec.html#method.sort_by"},"vec:sort_by")," \u65b9\u6cd5\u914d\u5408\u4e00\u4e2a\u81ea\u5b9a\u4e49\u6bd4\u8f83\u51fd\u6570\uff0c\u53ea\u6309\u7167 ",(0,a.kt)("inlineCode",{parentName:"p"},"age")," \u7684\u7ef4\u5ea6\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," \u6570\u7ec4\u6392\u5e8f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust,editable"},'#[derive(Debug, Eq, Ord, PartialEq, PartialOrd)]\nstruct Person {\n    name: String,\n    age: u32\n}\n\nimpl Person {\n    pub fn new(name: String, age: u32) -> Self {\n        Person {\n            name,\n            age\n        }\n    }\n}\n\nfn main {\n    let mut people = vec![\n        Person::new("Zoe".to_string, 25),\n        Person::new("Al".to_string, 60),\n        Person::new("John".to_string, 1),\n    ];\n\n    // \u901a\u8fc7\u6d3e\u751f\u540e\u7684\u81ea\u7136\u987a\u5e8f(Name and age)\u6392\u5e8f\n    people.sort;\n\n    assert_eq!(\n        people,\n        vec![\n            Person::new("Al".to_string, 60),\n            Person::new("John".to_string, 1),\n            Person::new("Zoe".to_string, 25),\n        ]);\n\n    // \u53ea\u901a\u8fc7 age \u6392\u5e8f\n    people.sort_by(|a, b| b.age.cmp(&a.age));\n\n    assert_eq!(\n        people,\n        vec![\n            Person::new("Al".to_string, 60),\n            Person::new("Zoe".to_string, 25),\n            Person::new("John".to_string, 1),\n        ]);\n\n}\n')))}m.isMDXComponent=!0}}]);