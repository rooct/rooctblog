"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4285],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||c[d]||l;return n?r.createElement(m,a(a({ref:t},g),{},{components:n})):r.createElement(m,a({ref:t},g))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5466:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return g}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],s={},i="\u65e5\u5fd7",u={unversionedId:"rusty/devtools/log",id:"rusty/devtools/log",isDocsHomePage:!1,title:"\u65e5\u5fd7",description:"log \u5305",source:"@site/docs/rusty/devtools/log.md",sourceDirName:"rusty/devtools",slug:"/rusty/devtools/log",permalink:"/rooctblog/docs/rusty/devtools/log",tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"\u914d\u7f6e\u65e5\u5fd7",permalink:"/rooctblog/docs/rusty/devtools/config-log"},next:{title:"\u7248\u672c\u53f7",permalink:"/rooctblog/docs/rusty/devtools/version"}},g=[{value:"log \u5305",id:"log-\u5305",children:[{value:"\u5728\u63a7\u5236\u53f0\u6253\u5370 debug \u4fe1\u606f",id:"\u5728\u63a7\u5236\u53f0\u6253\u5370-debug-\u4fe1\u606f",children:[]},{value:"\u5c06\u9519\u8bef\u65e5\u5fd7\u8f93\u51fa\u5230\u63a7\u5236\u53f0",id:"\u5c06\u9519\u8bef\u65e5\u5fd7\u8f93\u51fa\u5230\u63a7\u5236\u53f0",children:[]},{value:"\u5c06\u9519\u8bef\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa stdout",id:"\u5c06\u9519\u8bef\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa-stdout",children:[]},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49 logger",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49-logger",children:[]},{value:"\u8f93\u51fa\u5230 Unix syslog",id:"\u8f93\u51fa\u5230-unix-syslog",children:[]}]},{value:"tracing",id:"tracing",children:[]}],c={toc:g};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u65e5\u5fd7"},"\u65e5\u5fd7"),(0,l.kt)("h2",{id:"log-\u5305"},"log \u5305"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/crate/log/0.4.16"},"log")," \u63d0\u4f9b\u4e86\u65e5\u5fd7\u76f8\u5173\u7684\u5b9e\u7528\u5de5\u5177\u3002"),(0,l.kt)("h3",{id:"\u5728\u63a7\u5236\u53f0\u6253\u5370-debug-\u4fe1\u606f"},"\u5728\u63a7\u5236\u53f0\u6253\u5370 debug \u4fe1\u606f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"env_logger")," \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6765\u914d\u7f6e\u65e5\u5fd7\u3002",(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/log/0.4.16/log/macro.debug.html"},"log::debug!")," \u4f7f\u7528\u8d77\u6765\u8ddf ",(0,l.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/fmt/"},"std::fmt")," \u4e2d\u7684\u683c\u5f0f\u5316\u5b57\u7b26\u4e32\u5f88\u50cf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn execute_query(query: &str) {\n    log::debug!("Executing query: {}", query);\n}\n\nfn main {\n    env_logger::init;\n\n    execute_query("DROP TABLE students");\n}\n')),(0,l.kt)("p",null,"\u5982\u679c\u5927\u5bb6\u8fd0\u884c\u4ee3\u7801\uff0c\u4f1a\u53d1\u73b0\u6ca1\u6709\u4efb\u4f55\u65e5\u5fd7\u8f93\u51fa\uff0c\u539f\u56e0\u662f\u9ed8\u8ba4\u7684\u65e5\u5fd7\u7ea7\u522b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"error"),"\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"RUST_LOG")," \u73af\u5883\u53d8\u91cf\u6765\u8bbe\u7f6e\u4e0b\u65b0\u7684\u65e5\u5fd7\u7ea7\u522b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ RUST_LOG=debug cargo run\n")),(0,l.kt)("p",null,"\u7136\u540e\u4f60\u5c06\u6210\u529f\u770b\u5230\u4ee5\u4e0b\u8f93\u51fa:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"DEBUG:main: Executing query: DROP TABLE students\n")),(0,l.kt)("h3",{id:"\u5c06\u9519\u8bef\u65e5\u5fd7\u8f93\u51fa\u5230\u63a7\u5236\u53f0"},"\u5c06\u9519\u8bef\u65e5\u5fd7\u8f93\u51fa\u5230\u63a7\u5236\u53f0"),(0,l.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/log/0.4.16/log/macro.error.html"},"log::error!")," \u5c06\u9519\u8bef\u65e5\u5fd7\u8f93\u51fa\u5230\u6807\u51c6\u9519\u8bef ",(0,l.kt)("inlineCode",{parentName:"p"},"stderr"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn execute_query(_query: &str) -> Result<, &\'static str> {\n    Err("I\'m afraid I can\'t do that")\n}\n\nfn main {\n    env_logger::init;\n\n    let response = execute_query("DROP TABLE students");\n    if let Err(err) = response {\n        log::error!("Failed to execute query: {}", err);\n    }\n}\n')),(0,l.kt)("h3",{id:"\u5c06\u9519\u8bef\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa-stdout"},"\u5c06\u9519\u8bef\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa stdout"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u7684\u9519\u8bef\u4f1a\u8f93\u51fa\u5230\u6807\u51c6\u9519\u8bef\u8f93\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"stderr"),"\uff0c\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u81ea\u5b9a\u7684\u914d\u7f6e\u6765\u8ba9\u9519\u8bef\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust,editable"},'use env_logger::{Builder, Target};\n\nfn main {\n    Builder::new\n        .target(Target::Stdout)\n        .init;\n\n    log::error!("This error has been printed to Stdout");\n}\n')),(0,l.kt)("h3",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49-logger"},"\u4f7f\u7528\u81ea\u5b9a\u4e49 logger"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u5c06\u5b9e\u73b0\u4e00\u4e2a\u81ea\u5b9a\u4e49 logger ",(0,l.kt)("inlineCode",{parentName:"p"},"ConsoleLogger"),"\uff0c\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout"),"\u3002\u4e3a\u4e86\u4f7f\u7528\u65e5\u5fd7\u5b8f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ConsoleLogger")," \u9700\u8981\u5b9e\u73b0 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/log/*/log/trait.Log.html"},"log::Log")," \u7279\u5f81\uff0c\u7136\u540e\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/log/*/log/fn.set_logger.html"},"log::set_logger")," \u6765\u5b89\u88c5\u4f7f\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust,editable"},'use log::{Record, Level, Metadata, LevelFilter, SetLoggerError};\n\nstatic CONSOLE_LOGGER: ConsoleLogger = ConsoleLogger;\n\nstruct ConsoleLogger;\n\nimpl log::Log for ConsoleLogger {\n  fn enabled(&self, metadata: &Metadata) -> bool {\n     metadata.level <= Level::Info\n    }\n\n    fn log(&self, record: &Record) {\n        if self.enabled(record.metadata) {\n            println!("Rust says: {} - {}", record.level, record.args);\n        }\n    }\n\n    fn flush(&self) {}\n}\n\nfn main -> Result<, SetLoggerError> {\n    log::set_logger(&CONSOLE_LOGGER)?;\n    log::set_max_level(LevelFilter::Info);\n\n    log::info!("hello log");\n    log::warn!("warning");\n    log::error!("oops");\n    Ok()\n}\n')),(0,l.kt)("h3",{id:"\u8f93\u51fa\u5230-unix-syslog"},"\u8f93\u51fa\u5230 Unix syslog"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u5c06\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/crate/syslog/6.0.1"},"syslog")," \u5305\u5c06\u65e5\u5fd7\u8f93\u51fa\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/libc/manual/html_node/Overview-of-Syslog.html"},"Unix Syslog"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust,editable"},'#[cfg(target_os = "linux")]\n#[cfg(target_os = "linux")]\nuse syslog::{Facility, Error};\n\n#[cfg(target_os = "linux")]\nfn main -> Result<, Error> {\n    // \u521d\u59cb\u5316 logger\n    syslog::init(Facility::LOG_USER,\n                 log::LevelFilter::Debug,\n                 // \u53ef\u9009\u7684\u5e94\u7528\u540d\u79f0\n                 Some("My app name"))?;\n    log::debug!("this is a debug {}", "message");\n    log::error!("this is an error!");\n    Ok()\n}\n\n#[cfg(not(target_os = "linux"))]\nfn main {\n    println!("So far, only Linux systems are supported.");\n}\n')),(0,l.kt)("h2",{id:"tracing"},"tracing"),(0,l.kt)("p",null,"@todo"))}p.isMDXComponent=!0}}]);