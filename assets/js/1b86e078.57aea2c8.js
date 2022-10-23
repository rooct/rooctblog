"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5869],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2857:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},s="\u6587\u4ef6\u8bfb\u5199",u={unversionedId:"rusty/files/read-write",id:"rusty/files/read-write",isDocsHomePage:!1,title:"\u6587\u4ef6\u8bfb\u5199",description:"\u8fed\u4ee3\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u884c",source:"@site/docs/rusty/files/read-write.md",sourceDirName:"rusty/files",slug:"/rusty/files/read-write",permalink:"/rooctblog/docs/rusty/files/read-write",tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"\u76ee\u5f55\u8bbf\u95ee",permalink:"/rooctblog/docs/rusty/files/dir"},next:{title:"Awesome \u76ee\u5f55\u7d22\u5f15",permalink:"/rooctblog/docs/rusty/index-awesome"}},p=[{value:"\u8fed\u4ee3\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u884c",id:"\u8fed\u4ee3\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u884c",children:[]},{value:"\u907f\u514d\u5bf9\u540c\u4e00\u4e2a\u6587\u4ef6\u8fdb\u884c\u8bfb\u5199",id:"\u907f\u514d\u5bf9\u540c\u4e00\u4e2a\u6587\u4ef6\u8fdb\u884c\u8bfb\u5199",children:[{value:"\u4f7f\u7528\u5185\u5b58\u6620\u5c04\u8bbf\u95ee\u6587\u4ef6",id:"\u4f7f\u7528\u5185\u5b58\u6620\u5c04\u8bbf\u95ee\u6587\u4ef6",children:[]}]}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6587\u4ef6\u8bfb\u5199"},"\u6587\u4ef6\u8bfb\u5199"),(0,l.kt)("h2",{id:"\u8fed\u4ee3\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u884c"},"\u8fed\u4ee3\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust,editable"},'use std::fs::File;\nuse std::io::{Write, BufReader, BufRead, Error};\n\nfn main -> Result<, Error> {\n    let path = "lines.txt";\n\n    // \u521b\u5efa\u6587\u4ef6\n    let mut output = File::create(path)?;\n    // \u5199\u5165\u4e09\u884c\u5185\u5bb9\n    write!(output, "Rust\\n\ud83d\udc96\\nFun")?;\n\n    let input = File::open(path)?;\n    let buffered = BufReader::new(input);\n\n    // \u8fed\u4ee3\u6587\u4ef6\u4e2d\u7684\u6bcf\u4e00\u884c\u5185\u5bb9\uff0cline \u662f\u5b57\u7b26\u4e32\n    for line in buffered.lines {\n        println!("{}", line?);\n    }\n\n    Ok()\n}\n')),(0,l.kt)("h2",{id:"\u907f\u514d\u5bf9\u540c\u4e00\u4e2a\u6587\u4ef6\u8fdb\u884c\u8bfb\u5199"},"\u907f\u514d\u5bf9\u540c\u4e00\u4e2a\u6587\u4ef6\u8fdb\u884c\u8bfb\u5199"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/same-file/latest/same_file/"},"same_file")," \u53ef\u4ee5\u5e2e\u6211\u4eec\u8bc6\u522b\u4e24\u4e2a\u6587\u4ef6\u662f\u5426\u662f\u76f8\u540c\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust,editable"},'use same_file::Handle;\nuse std::fs::File;\nuse std::io::{BufRead, BufReader, Error, ErrorKind};\nuse std::path::Path;\n\nfn main -> Result<, Error> {\n    let path_to_read = Path::new("new.txt");\n\n    // \u4ece\u6807\u51c6\u8f93\u51fa\u4e0a\u83b7\u53d6\u5f85\u5199\u5165\u7684\u6587\u4ef6\u540d\n    let stdout_handle = Handle::stdout?;\n    // \u5c06\u5f85\u5199\u5165\u7684\u6587\u4ef6\u540d\u8ddf\u5f85\u8bfb\u53d6\u7684\u6587\u4ef6\u540d\u8fdb\u884c\u6bd4\u8f83\n    let handle = Handle::from_path(path_to_read)?;\n\n    if stdout_handle == handle {\n        return Err(Error::new(\n            ErrorKind::Other,\n            "You are reading and writing to the same file",\n        ));\n    } else {\n        let file = File::open(&path_to_read)?;\n        let file = BufReader::new(file);\n        for (num, line) in file.lines.enumerate {\n            println!("{} : {}", num, line?.to_uppercase);\n        }\n    }\n\n    Ok()\n}\n')),(0,l.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3a\u5f85\u5199\u5165\u7684\u6587\u4ef6\u540d\u4e5f\u662f ",(0,l.kt)("em",{parentName:"p"},"new.txt"),"\uff0c\u8ddf\u5f85\u8bfb\u53d6\u7684\u6587\u4ef6\u540d\u76f8\u540c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cargo run >> ./new.txt\n")),(0,l.kt)("h3",{id:"\u4f7f\u7528\u5185\u5b58\u6620\u5c04\u8bbf\u95ee\u6587\u4ef6"},"\u4f7f\u7528\u5185\u5b58\u6620\u5c04\u8bbf\u95ee\u6587\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/memmap/"},"memmap")," \u80fd\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u7684\u5185\u5b58\u6620\u5c04( memory map )\uff0c\u7136\u540e\u6a21\u62df\u4e00\u4e9b\u975e\u987a\u5e8f\u8bfb\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u5185\u5b58\u6620\u5c04\uff0c\u610f\u5473\u7740\u4f60\u5c06\u76f8\u5173\u7684\u7d22\u5f15\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\uff0c\u800c\u4e0d\u662f\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/fs/struct.File.html#method.seek"},"seek")," \u7684\u65b9\u5f0f\u53bb\u8bbf\u95ee\u6587\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/memmap/*/memmap/struct.Mmap.html#method.map"},"Mmap::map")," \u51fd\u6570\u4f1a\u5047\u5b9a\u5f85\u6620\u5c04\u7684\u6587\u4ef6\u4e0d\u4f1a\u540c\u65f6\u88ab\u5176\u5b83\u8fdb\u7a0b\u4fee\u6539\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust,editable"},'use memmap::Mmap;\nuse std::fs::File;\nuse std::io::{Write, Error};\n\nfn main -> Result<, Error> {\n    write!(File::create("content.txt")?, "My hovercraft is full of eels!")?;\n\n    let file = File::open("content.txt")?;\n    let map = unsafe { Mmap::map(&file)? };\n\n    let random_indexes = [0, 1, 2, 19, 22, 10, 11, 29];\n    assert_eq!(&map[3..13], b"hovercraft");\n    let random_bytes: Vec<u8> = random_indexes.iter\n        .map(|&idx| map[idx])\n        .collect;\n    assert_eq!(&random_bytes[..], b"My loaf!");\n    Ok()\n}\n')))}m.isMDXComponent=!0}}]);