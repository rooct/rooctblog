"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3283],{3905:function(t,n,e){e.d(n,{Zo:function(){return l},kt:function(){return m}});var r=e(7294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var u=r.createContext({}),d=function(t){var n=r.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},l=function(t){var n=d(t.components);return r.createElement(u.Provider,{value:n},t.children)},p={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(t,n){var e=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),c=d(e),m=o,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||i;return e?r.createElement(f,a(a({ref:n},l),{},{components:e})):r.createElement(f,a({ref:n},l))}));function m(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var i=e.length,a=new Array(i);a[0]=c;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var d=2;d<i;d++)a[d]=e[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}c.displayName="MDXCreateElement"},5074:function(t,n,e){e.r(n),e.d(n,{contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var r=e(7462),o=e(3366),i=(e(7294),e(3905)),a=["components"],s={},u="\u8c03\u7528\u7cfb\u7edf\u547d\u4ee4",d={unversionedId:"rusty/os/command",id:"rusty/os/command",isDocsHomePage:!1,title:"\u8c03\u7528\u7cfb\u7edf\u547d\u4ee4",description:"\u8c03\u7528\u4e00\u4e2a\u5916\u90e8\u547d\u4ee4\u5e76\u5904\u7406\u8f93\u51fa\u5185\u5bb9",source:"@site/docs/rusty/os/command.md",sourceDirName:"rusty/os",slug:"/rusty/os/command",permalink:"/rooctblog/docs/rusty/os/command",tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"\u64cd\u4f5c\u7cfb\u7edf",permalink:"/rooctblog/docs/rusty/os/awesome"},next:{title:"\u5904\u7406\u5668",permalink:"/rooctblog/docs/rusty/os/processor"}},l=[{value:"\u8c03\u7528\u4e00\u4e2a\u5916\u90e8\u547d\u4ee4\u5e76\u5904\u7406\u8f93\u51fa\u5185\u5bb9",id:"\u8c03\u7528\u4e00\u4e2a\u5916\u90e8\u547d\u4ee4\u5e76\u5904\u7406\u8f93\u51fa\u5185\u5bb9",children:[]},{value:"\u8c03\u7528 python \u89e3\u91ca\u5668\u8fd0\u884c\u4ee3\u7801\u5e76\u68c0\u67e5\u8fd4\u56de\u7684\u9519\u8bef\u7801",id:"\u8c03\u7528-python-\u89e3\u91ca\u5668\u8fd0\u884c\u4ee3\u7801\u5e76\u68c0\u67e5\u8fd4\u56de\u7684\u9519\u8bef\u7801",children:[]},{value:"\u901a\u8fc7\u7ba1\u9053\u6765\u8fd0\u884c\u5916\u90e8\u547d\u4ee4",id:"\u901a\u8fc7\u7ba1\u9053\u6765\u8fd0\u884c\u5916\u90e8\u547d\u4ee4",children:[]},{value:"\u5c06\u5b50\u8fdb\u7a0b\u7684 stdout \u548c stderr \u91cd\u5b9a\u5411\u5230\u540c\u4e00\u4e2a\u6587\u4ef6",id:"\u5c06\u5b50\u8fdb\u7a0b\u7684-stdout-\u548c-stderr-\u91cd\u5b9a\u5411\u5230\u540c\u4e00\u4e2a\u6587\u4ef6",children:[]},{value:"\u6301\u7eed\u5904\u7406\u5b50\u8fdb\u7a0b\u7684\u8f93\u51fa",id:"\u6301\u7eed\u5904\u7406\u5b50\u8fdb\u7a0b\u7684\u8f93\u51fa",children:[]},{value:"\u8bfb\u53d6\u73af\u5883\u53d8\u91cf",id:"\u8bfb\u53d6\u73af\u5883\u53d8\u91cf",children:[]}],p={toc:l};function c(t){var n=t.components,e=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8c03\u7528\u7cfb\u7edf\u547d\u4ee4"},"\u8c03\u7528\u7cfb\u7edf\u547d\u4ee4"),(0,i.kt)("h3",{id:"\u8c03\u7528\u4e00\u4e2a\u5916\u90e8\u547d\u4ee4\u5e76\u5904\u7406\u8f93\u51fa\u5185\u5bb9"},"\u8c03\u7528\u4e00\u4e2a\u5916\u90e8\u547d\u4ee4\u5e76\u5904\u7406\u8f93\u51fa\u5185\u5bb9"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u5c06\u8c03\u7528\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"git log --oneline")," \u547d\u4ee4\uff0c\u7136\u540e\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/regex/*/regex/struct.Regex.html"},"regex")," \u5bf9\u5b83\u8f93\u51fa\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," \u4e0a\u7684\u8c03\u7528\u7ed3\u679c\u8fdb\u884c\u89e3\u6790\uff0c\u4ee5\u83b7\u53d6\u54c8\u5e0c\u503c\u548c\u6700\u540e 5 \u6761\u63d0\u4ea4\u4fe1\u606f( commit )\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust,editable"},'#use error_chain::error_chain;\n\nuse std::process::Command;\nuse regex::Regex;\n\n#error_chain!{\n#    foreign_links {\n#        Io(std::io::Error);\n#        Regex(regex::Error);\n#        Utf8(std::string::FromUtf8Error);\n#    }\n#}\n\n#[derive(PartialEq, Default, Clone, Debug)]\nstruct Commit {\n    hash: String,\n    message: String,\n}\n\nfn main -> Result<> {\n    let output = Command::new("git").arg("log").arg("--oneline").output?;\n\n    if !output.status.success {\n        error_chain::bail!("Command executed with failing error code");\n    }\n\n    let pattern = Regex::new(r"(?x)\n                               ([0-9a-fA-F]+) # commit hash\n                               (.*)           # The commit message")?;\n\n    String::from_utf8(output.stdout)?\n        .lines\n        .filter_map(|line| pattern.captures(line))\n        .map(|cap| {\n                 Commit {\n                     hash: cap[1].to_string,\n                     message: cap[2].trim.to_string,\n                 }\n             })\n        .take(5)\n        .for_each(|x| println!("{:?}", x));\n\n    Ok()\n}\n')),(0,i.kt)("h3",{id:"\u8c03\u7528-python-\u89e3\u91ca\u5668\u8fd0\u884c\u4ee3\u7801\u5e76\u68c0\u67e5\u8fd4\u56de\u7684\u9519\u8bef\u7801"},"\u8c03\u7528 python \u89e3\u91ca\u5668\u8fd0\u884c\u4ee3\u7801\u5e76\u68c0\u67e5\u8fd4\u56de\u7684\u9519\u8bef\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust,editable"},'#use error_chain::error_chain;\n\nuse std::collections::HashSet;\nuse std::io::Write;\nuse std::process::{Command, Stdio};\n\n#error_chain!{\n#    errors { CmdError }\n#    foreign_links {\n#        Io(std::io::Error);\n#        Utf8(std::string::FromUtf8Error);\n#    }\n#}\n\nfn main -> Result<> {\n    let mut child = Command::new("python").stdin(Stdio::piped)\n        .stderr(Stdio::piped)\n        .stdout(Stdio::piped)\n        .spawn?;\n\n    child.stdin\n        .as_mut\n        .ok_or("Child process stdin has not been captured!")?\n        .write_all(b"import this; copyright; credits; exit")?;\n\n    let output = child.wait_with_output?;\n\n    if output.status.success {\n        let raw_output = String::from_utf8(output.stdout)?;\n        let words = raw_output.split_whitespace\n            .map(|s| s.to_lowercase)\n            .collect::<HashSet<_>>;\n        println!("Found {} unique words:", words.len);\n        println!("{:#?}", words);\n        Ok()\n    } else {\n        let err = String::from_utf8(output.stderr)?;\n        error_chain::bail!("External command failed:\\n {}", err)\n    }\n}\n')),(0,i.kt)("h3",{id:"\u901a\u8fc7\u7ba1\u9053\u6765\u8fd0\u884c\u5916\u90e8\u547d\u4ee4"},"\u901a\u8fc7\u7ba1\u9053\u6765\u8fd0\u884c\u5916\u90e8\u547d\u4ee4"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u5c06\u663e\u793a\u5f53\u524d\u76ee\u5f55\u4e2d\u5927\u5c0f\u6392\u540d\u524d\u5341\u7684\u6587\u4ef6\u548c\u5b50\u76ee\u5f55\uff0c\u6548\u679c\u7b49\u6548\u4e8e\u547d\u4ee4 ",(0,i.kt)("inlineCode",{parentName:"p"},"du -ah . | sort -hr | head -n 10"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/process/struct.Command.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Command"))," \u547d\u4ee4\u4ee3\u8868\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u5176\u4e2d\u7236\u8fdb\u7a0b\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/process/struct.Stdio.html"},"Stdio::piped")," \u6765\u6355\u83b7\u5b50\u8fdb\u7a0b\u7684\u8f93\u51fa\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust,editable"},'#use error_chain::error_chain;\n\nuse std::process::{Command, Stdio};\n\n#error_chain! {\n#    foreign_links {\n#        Io(std::io::Error);\n#        Utf8(std::string::FromUtf8Error);\n#    }\n#}\n\nfn main -> Result<> {\n    let directory = std::env::current_dir?;\n    let mut du_output_child = Command::new("du")\n        .arg("-ah")\n        .arg(&directory)\n        .stdout(Stdio::piped)\n        .spawn?;\n\n    if let Some(du_output) = du_output_child.stdout.take {\n        let mut sort_output_child = Command::new("sort")\n            .arg("-hr")\n            .stdin(du_output)\n            .stdout(Stdio::piped)\n            .spawn?;\n\n        du_output_child.wait?;\n\n        if let Some(sort_output) = sort_output_child.stdout.take {\n            let head_output_child = Command::new("head")\n                .args(&["-n", "10"])\n                .stdin(sort_output)\n                .stdout(Stdio::piped)\n                .spawn?;\n\n            let head_stdout = head_output_child.wait_with_output?;\n\n            sort_output_child.wait?;\n\n            println!(\n                "Top 10 biggest files and directories in \'{}\':\\n{}",\n                directory.display,\n                String::from_utf8(head_stdout.stdout).unwrap\n            );\n        }\n    }\n\n    Ok()\n}\n')),(0,i.kt)("h3",{id:"\u5c06\u5b50\u8fdb\u7a0b\u7684-stdout-\u548c-stderr-\u91cd\u5b9a\u5411\u5230\u540c\u4e00\u4e2a\u6587\u4ef6"},"\u5c06\u5b50\u8fdb\u7a0b\u7684 stdout \u548c stderr \u91cd\u5b9a\u5411\u5230\u540c\u4e00\u4e2a\u6587\u4ef6"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u5c06\u751f\u6210\u4e00\u4e2a\u5b50\u8fdb\u7a0b\uff0c\u7136\u540e\u5c06\u5b83\u7684\u6807\u51c6\u8f93\u51fa\u548c\u6807\u51c6\u9519\u8bef\u8f93\u51fa\u90fd\u8f93\u51fa\u5230\u540c\u4e00\u4e2a\u6587\u4ef6\u4e2d\u3002\u6700\u7ec8\u7684\u6548\u679c\u8ddf Unix \u547d\u4ee4 ",(0,i.kt)("inlineCode",{parentName:"p"},"ls . oops >out.txt 2>&1")," \u76f8\u540c\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/fs/struct.File.html#method.try_clone"},"File::try_clone")," \u4f1a\u514b\u9686\u4e00\u4efd\u6587\u4ef6\u53e5\u67c4\u7684\u5f15\u7528\uff0c\u7136\u540e\u4fdd\u8bc1\u8fd9\u4e24\u4e2a\u53e5\u67c4\u5728\u5199\u7684\u65f6\u5019\u4f1a\u4f7f\u7528\u76f8\u540c\u7684\u6e38\u6807\u4f4d\u7f6e\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust,editable"},'use std::fs::File;\nuse std::io::Error;\nuse std::process::{Command, Stdio};\n\nfn main -> Result<, Error> {\n    let outputs = File::create("out.txt")?;\n    let errors = outputs.try_clone?;\n\n    Command::new("ls")\n        .args(&[".", "oops"])\n        .stdout(Stdio::from(outputs))\n        .stderr(Stdio::from(errors))\n        .spawn?\n        .wait_with_output?;\n\n    Ok()\n}\n')),(0,i.kt)("h3",{id:"\u6301\u7eed\u5904\u7406\u5b50\u8fdb\u7a0b\u7684\u8f93\u51fa"},"\u6301\u7eed\u5904\u7406\u5b50\u8fdb\u7a0b\u7684\u8f93\u51fa"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u4f1a\u521b\u5efa\u4e00\u4e2a\u7ba1\u9053\uff0c\u7136\u540e\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"BufReader")," \u66f4\u65b0\u65f6\uff0c\u5c31\u6301\u7eed\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," \u4e2d\u8bfb\u53d6\u6570\u636e\u3002\u6700\u7ec8\u6548\u679c\u7b49\u540c\u4e8e Unix \u547d\u4ee4 ",(0,i.kt)("inlineCode",{parentName:"p"},"journalctl | grep usb"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust,editable"},'use std::process::{Command, Stdio};\nuse std::io::{BufRead, BufReader, Error, ErrorKind};\n\nfn main -> Result<, Error> {\n    let stdout = Command::new("journalctl")\n        .stdout(Stdio::piped)\n        .spawn?\n        .stdout\n        .ok_or_else(|| Error::new(ErrorKind::Other,"Could not capture standard output."))?;\n\n    let reader = BufReader::new(stdout);\n\n    reader\n        .lines\n        .filter_map(|line| line.ok)\n        .filter(|line| line.find("usb").is_some)\n        .for_each(|line| println!("{}", line));\n\n     Ok()\n}\n')),(0,i.kt)("h3",{id:"\u8bfb\u53d6\u73af\u5883\u53d8\u91cf"},"\u8bfb\u53d6\u73af\u5883\u53d8\u91cf"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/env/fn.var.html"},"std::env::var")," \u53ef\u4ee5\u8bfb\u53d6\u7cfb\u7edf\u4e2d\u7684\u73af\u5883\u53d8\u91cf\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust,editable"},'use std::env;\nuse std::fs;\nuse std::io::Error;\n\nfn main -> Result<, Error> {\n    // \u8bfb\u53d6\u73af\u5883\u53d8\u91cf `CONFIG` \u7684\u503c\u5e76\u5199\u5165\u5230 `config_path` \u4e2d\u3002\n    // \u82e5 `CONFIG` \u73af\u5883\u53d8\u91cf\u6ca1\u6709\u8bbe\u7f6e\uff0c\u5219\u4f7f\u7528\u4e00\u4e2a\u9ed8\u8ba4\u7684\u503c "/etc/myapp/config"\n    let config_path = env::var("CONFIG")\n        .unwrap_or("/etc/myapp/config".to_string);\n\n    let config: String = fs::read_to_string(config_path)?;\n    println!("Config: {}", config);\n\n    Ok()\n}\n')))}c.isMDXComponent=!0}}]);