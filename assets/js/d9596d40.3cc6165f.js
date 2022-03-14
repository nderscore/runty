"use strict";(self.webpackChunkrunty_website=self.webpackChunkrunty_website||[]).push([[389],{876:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6008:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=n(7896),r=(n(2784),n(876));const l={title:"Standard Library (fns)"},i=void 0,s={unversionedId:"fns",id:"fns",title:"Standard Library (fns)",description:"Introduction",source:"@site/docs/fns.md",sourceDirName:".",slug:"/fns",permalink:"/docs/fns",editUrl:"https://github.com/nderscore/runty/edit/master/packages/website/docs/fns.md",tags:[],version:"current",frontMatter:{title:"Standard Library (fns)"},sidebar:"sidebar",previous:{title:"API Reference",permalink:"/docs/api"},next:{title:"TypeScript",permalink:"/docs/typescript"}},o={},p=[{value:"Introduction",id:"introduction",level:2},{value:"logicFns",id:"logicfns",level:2},{value:"and",id:"and",level:3},{value:"eq",id:"eq",level:3},{value:"gt",id:"gt",level:3},{value:"gte",id:"gte",level:3},{value:"is",id:"is",level:3},{value:"lt",id:"lt",level:3},{value:"lte",id:"lte",level:3},{value:"not",id:"not",level:3},{value:"or",id:"or",level:3},{value:"numberFns",id:"numberfns",level:2},{value:"add",id:"add",level:3},{value:"ceil",id:"ceil",level:3},{value:"div",id:"div",level:3},{value:"flr",id:"flr",level:3},{value:"fix",id:"fix",level:3},{value:"max",id:"max",level:3},{value:"min",id:"min",level:3},{value:"mul",id:"mul",level:3},{value:"rnd",id:"rnd",level:3},{value:"sub",id:"sub",level:3},{value:"stringFns",id:"stringfns",level:2},{value:"cat",id:"cat",level:3},{value:"idx",id:"idx",level:3},{value:"len",id:"len",level:3},{value:"low",id:"low",level:3},{value:"pl",id:"pl",level:3},{value:"pr",id:"pr",level:3},{value:"rpt",id:"rpt",level:3},{value:"rpl",id:"rpl",level:3},{value:"sbs",id:"sbs",level:3},{value:"slc",id:"slc",level:3},{value:"trim",id:"trim",level:3},{value:"up",id:"up",level:3},{value:"utilFns",id:"utilfns",level:2},{value:"$ (variable getter)",id:"-variable-getter",level:3},{value:"get",id:"get",level:3},{value:"join",id:"join",level:3},{value:"idx",id:"idx-1",level:3},{value:"len",id:"len-1",level:3},{value:"slc",id:"slc-1",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The standard library, ",(0,r.kt)("inlineCode",{parentName:"p"},"fns"),", is a set of small, template-friendly utility functions covering a broad range of common string templating needs, ranging from logic control to formatting to manipulation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// import the entire standard library\nimport { runty, fns } from 'runty';\n\n// pass as 'fns' option in the runty constructor\nconst runt = runty({ fns });\n")),(0,r.kt)("p",null,"Because the standard library covers a broad range of use cases, you might not want to import the entire collection. The standard library is also made available as classes of functions, and as independent functions which can be imported individually and tree-shaken."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// import a class of functions\nimport { runty, stringFns } from 'runty';\n\nconst runt = runty({ fns: stringFns });\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// or only import the function(s) you need\nimport { runty, eq, not } from 'runty';\n\nconst runt = runty({\n  fns: { \n    eq,\n    not\n  }\n});\n")),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"classes"},"Classes"),(0,r.kt)("h2",{id:"logicfns"},"logicFns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { logicFns } from 'runty';\n\nconst runt = runty({ fns: logicFns });\n")),(0,r.kt)("h3",{id:"and"},"and"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$and(%a,%b,...)\n")),(0,r.kt)("p",null,"Boolean AND operation. Accepts any number of arguments. Evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when all arguments are truthy, with number ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," also being truthy."),(0,r.kt)("h3",{id:"eq"},"eq"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$eq(%a,%b)\n")),(0,r.kt)("p",null,"Loose equality check of two values. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses ",(0,r.kt)("inlineCode",{parentName:"p"},"===")," equality."),(0,r.kt)("h3",{id:"gt"},"gt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$gt(%a,%b)\n")),(0,r.kt)("p",null,"Greater than comparison. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses ",(0,r.kt)("inlineCode",{parentName:"p"},">")," comparison without type-casting."),(0,r.kt)("h3",{id:"gte"},"gte"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$gte(%a,%b)\n")),(0,r.kt)("p",null,"Greater than or equal to comparison. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses ",(0,r.kt)("inlineCode",{parentName:"p"},">=")," comparison without type-casting."),(0,r.kt)("h3",{id:"is"},"is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$is(%a,%b)\n")),(0,r.kt)("p",null,"Strict equality check of two values using ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.is")),(0,r.kt)("h3",{id:"lt"},"lt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$lt(%a,%b)\n")),(0,r.kt)("p",null,"Less than comparison. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses ",(0,r.kt)("inlineCode",{parentName:"p"},"<")," comparison without type-casting."),(0,r.kt)("h3",{id:"lte"},"lte"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$lte(%a,%b)\n")),(0,r.kt)("p",null,"Less than or equal to comparison. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses ",(0,r.kt)("inlineCode",{parentName:"p"},"<=")," comparison without type-casting."),(0,r.kt)("h3",{id:"not"},"not"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$not(%val)\n")),(0,r.kt)("p",null,"Boolean NOT operation. Negates a value, resolving to a boolean while treating number ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," as a truthy value."),(0,r.kt)("h3",{id:"or"},"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$or(%a,%b,%c,...)\n")),(0,r.kt)("p",null,"Boolean OR operation. Accepts any number of arguments. Evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when at least one argument is truthy, with number ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," also being truthy."),(0,r.kt)("h2",{id:"numberfns"},"numberFns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { numberFns } from 'runty';\n\nconst runt = runty({ fns: numberFns });\n")),(0,r.kt)("h3",{id:"add"},"add"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$add(%a,%b,...)\n")),(0,r.kt)("p",null,"Addition. Evaluates two or more arguments as numbers and adds them."),(0,r.kt)("h3",{id:"ceil"},"ceil"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ceil(%val)\n")),(0,r.kt)("p",null,"Ceil operation. Rounds a decimal value up to the next largest integer."),(0,r.kt)("h3",{id:"div"},"div"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$div(%a,%b,...)\n")),(0,r.kt)("p",null,"Division. Evaluates two or more arguments as numbers and divides them."),(0,r.kt)("h3",{id:"flr"},"flr"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$flr(%val)\n")),(0,r.kt)("p",null,"Floor operation. Rounds a decimal value down to the largest integer less than or equal to it."),(0,r.kt)("h3",{id:"fix"},"fix"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$fix(%val,%digits)\n")),(0,r.kt)("p",null,"Fixed digit formatting. Converts a number (",(0,r.kt)("inlineCode",{parentName:"p"},"%val"),") into a string with a fixed number of specific digits (",(0,r.kt)("inlineCode",{parentName:"p"},"%digits"),")."),(0,r.kt)("h3",{id:"max"},"max"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$max(%a,%b,...)\n")),(0,r.kt)("p",null,"Maximum. Evaluates two or more arguments as numbers and returns the largest value."),(0,r.kt)("h3",{id:"min"},"min"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$min(%a,%b,...)\n")),(0,r.kt)("p",null,"Minimum. Evaluates two or more arguments as numbers and returns the smallest value."),(0,r.kt)("h3",{id:"mul"},"mul"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$mul(%a,%b,...)\n")),(0,r.kt)("p",null,"Multiplication. Evaluates two or more arguments as numbers and multiplies them."),(0,r.kt)("h3",{id:"rnd"},"rnd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$rnd(%val)\n")),(0,r.kt)("p",null,"Round. Rounds a decimal value to the nearest integer."),(0,r.kt)("h3",{id:"sub"},"sub"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$sub(%a,%b,...)\n")),(0,r.kt)("p",null,"Subtraction. Evaluates two or more arguments as numbers and subtracts them."),(0,r.kt)("h2",{id:"stringfns"},"stringFns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { stringFns } from 'runty';\n\nconst runt = runty({ fns: stringFns });\n")),(0,r.kt)("h3",{id:"cat"},"cat"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$cat(%a,%b,...)\n")),(0,r.kt)("p",null,"Concatenate. Evaluates two or more arguments as strings and joins them."),(0,r.kt)("h3",{id:"idx"},"idx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$idx(%str,%search)\n")),(0,r.kt)("p",null,"Index Of. Finds the index of a search string (",(0,r.kt)("inlineCode",{parentName:"p"},"%search"),") in some string value (%str)"),(0,r.kt)("p",null,"This function can also be used with Arrays and is shared with ",(0,r.kt)("a",{parentName:"p",href:"#utilfns"},(0,r.kt)("inlineCode",{parentName:"a"},"utilFns"))),(0,r.kt)("h3",{id:"len"},"len"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$len(%str)\n")),(0,r.kt)("p",null,"Length. Gets the length of a string."),(0,r.kt)("p",null,"This function can also be used with Arrays and is shared with ",(0,r.kt)("a",{parentName:"p",href:"#utilfns"},(0,r.kt)("inlineCode",{parentName:"a"},"utilFns"))),(0,r.kt)("h3",{id:"low"},"low"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$low(%str)\n")),(0,r.kt)("p",null,"To Lower Case. Converts a string to all lowercase letters."),(0,r.kt)("h3",{id:"pl"},"pl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$pl(%str,%len[,%padString])\n")),(0,r.kt)("p",null,"Pad left. Pads the left-hand side of a string until it is at least a minimum length (",(0,r.kt)("inlineCode",{parentName:"p"},"%len"),") with spaces (",(0,r.kt)("inlineCode",{parentName:"p"}," "),") or with ",(0,r.kt)("inlineCode",{parentName:"p"},"%padString")," (optional)"),(0,r.kt)("h3",{id:"pr"},"pr"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$pr(%str,%len[,%padString])\n")),(0,r.kt)("p",null,"Pad right. Pads the right-hand side of a string until it is at least a minimum length (",(0,r.kt)("inlineCode",{parentName:"p"},"%len"),") with spaces (",(0,r.kt)("inlineCode",{parentName:"p"}," "),") or with ",(0,r.kt)("inlineCode",{parentName:"p"},"%padString")," (optional)"),(0,r.kt)("h3",{id:"rpt"},"rpt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$rpt(%str,%count)\n")),(0,r.kt)("p",null,"Repeat. Repeats a string (",(0,r.kt)("inlineCode",{parentName:"p"},"%str"),") a number of times (",(0,r.kt)("inlineCode",{parentName:"p"},"%count"),")"),(0,r.kt)("h3",{id:"rpl"},"rpl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$rpl(%str,%search,%replacement)\n")),(0,r.kt)("p",null,"Replace. Replaces all instances of a search string (",(0,r.kt)("inlineCode",{parentName:"p"},"%search"),") in a string (",(0,r.kt)("inlineCode",{parentName:"p"},"%str"),") with a replacement string (",(0,r.kt)("inlineCode",{parentName:"p"},"%replacement"),")"),(0,r.kt)("h3",{id:"sbs"},"sbs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$sbs(%str,%start,%length)\n")),(0,r.kt)("p",null,"Substring. Extracts a portion of a string (",(0,r.kt)("inlineCode",{parentName:"p"},"%str"),") of a specific length (",(0,r.kt)("inlineCode",{parentName:"p"},"%length"),") from a starting index (",(0,r.kt)("inlineCode",{parentName:"p"},"%start"),")"),(0,r.kt)("h3",{id:"slc"},"slc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$slc(%str,%start,%end)\n")),(0,r.kt)("p",null,"Slice. Extracts a portion of a string (",(0,r.kt)("inlineCode",{parentName:"p"},"%str"),") from a starting index (",(0,r.kt)("inlineCode",{parentName:"p"},"%start"),") to an ending index (",(0,r.kt)("inlineCode",{parentName:"p"},"%end"),")"),(0,r.kt)("p",null,"This function can also be used with Arrays and is shared with ",(0,r.kt)("a",{parentName:"p",href:"#utilfns"},(0,r.kt)("inlineCode",{parentName:"a"},"utilFns"))),(0,r.kt)("h3",{id:"trim"},"trim"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$trim(%str)\n")),(0,r.kt)("p",null,"Trim. Removes leading or trailing whitespace from a string."),(0,r.kt)("h3",{id:"up"},"up"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$up(%str)\n")),(0,r.kt)("p",null,"To Upper Case. Converts a string to all uppercase letters."),(0,r.kt)("h2",{id:"utilfns"},"utilFns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { utilFns } from 'runty';\n\nconst runt = runty({ fns: utilFns });\n")),(0,r.kt)("h3",{id:"-variable-getter"},"$ (variable getter)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$$(%a,...)\n")),(0,r.kt)("p",null,"Dynamicly access variables values. Accepts any number of arguments, which are treated as chained property accessors. Behaves just like a variable accessor (",(0,r.kt)("inlineCode",{parentName:"p"},"%foo")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"%foo.bar.etc"),")"),(0,r.kt)("h3",{id:"get"},"get"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$get(%obj,%prop,...)\n")),(0,r.kt)("p",null,"Property accessor for objects. Retrieves a property (",(0,r.kt)("inlineCode",{parentName:"p"},"%prop"),") from an object (",(0,r.kt)("inlineCode",{parentName:"p"},"%obj"),"). Accepts any number of additional arguments, which are treated as chained property accessors."),(0,r.kt)("h3",{id:"join"},"join"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$join(%arr,%str)\n")),(0,r.kt)("p",null,"Array join. Merges the values in an array (",(0,r.kt)("inlineCode",{parentName:"p"},"%arr"),") as a string, with an optional string delimiter (",(0,r.kt)("inlineCode",{parentName:"p"},"%str"),")."),(0,r.kt)("h3",{id:"idx-1"},"idx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$idx(%arr,%search)\n")),(0,r.kt)("p",null,"Index Of. Finds the index of a value (",(0,r.kt)("inlineCode",{parentName:"p"},"%search"),") in some array (",(0,r.kt)("inlineCode",{parentName:"p"},"%arr"),")"),(0,r.kt)("p",null,"This function can also be used with strings and is shared with ",(0,r.kt)("a",{parentName:"p",href:"#stringfns"},(0,r.kt)("inlineCode",{parentName:"a"},"stringFns"))),(0,r.kt)("h3",{id:"len-1"},"len"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$len(%arr)\n")),(0,r.kt)("p",null,"Length. Gets the length of an array."),(0,r.kt)("p",null,"This function can also be used with strings and is shared with ",(0,r.kt)("a",{parentName:"p",href:"#stringfns"},(0,r.kt)("inlineCode",{parentName:"a"},"stringFns"))),(0,r.kt)("h3",{id:"slc-1"},"slc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$slc(%arr,%start,%end)\n")),(0,r.kt)("p",null,"Slice. Extracts a portion of an array (",(0,r.kt)("inlineCode",{parentName:"p"},"%arr"),") from a starting index (",(0,r.kt)("inlineCode",{parentName:"p"},"%start"),") to an ending index (",(0,r.kt)("inlineCode",{parentName:"p"},"%end"),")"),(0,r.kt)("p",null,"This function can also be used with strings and is shared with ",(0,r.kt)("a",{parentName:"p",href:"#stringfns"},(0,r.kt)("inlineCode",{parentName:"a"},"stringFns"))))}d.isMDXComponent=!0}}]);