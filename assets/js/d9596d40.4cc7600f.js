(self.webpackChunkrunty_website=self.webpackChunkrunty_website||[]).push([[389],{3926:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=n(2122),r=(n(7294),n(3905));const i={title:"Standard Library (fns)"},l={unversionedId:"fns",id:"fns",isDocsHomePage:!1,title:"Standard Library (fns)",description:"Introduction",source:"@site/docs/fns.md",sourceDirName:".",slug:"/fns",permalink:"/docs/fns",editUrl:"https://github.com/nderscore/runty/edit/master/website/docs/fns.md",version:"current",frontMatter:{title:"Standard Library (fns)"},sidebar:"sidebar",previous:{title:"API Reference",permalink:"/docs/api"},next:{title:"Extending With Custom Functions",permalink:"/docs/custom-fns"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"logicFns",id:"logicfns",children:[{value:"and",id:"and",children:[]},{value:"eq",id:"eq",children:[]},{value:"gt",id:"gt",children:[]},{value:"gte",id:"gte",children:[]},{value:"is",id:"is",children:[]},{value:"lt",id:"lt",children:[]},{value:"lte",id:"lte",children:[]},{value:"not",id:"not",children:[]},{value:"or",id:"or",children:[]}]},{value:"numberFns",id:"numberfns",children:[{value:"add",id:"add",children:[]},{value:"ceil",id:"ceil",children:[]},{value:"div",id:"div",children:[]},{value:"flr",id:"flr",children:[]},{value:"fix",id:"fix",children:[]},{value:"max",id:"max",children:[]},{value:"min",id:"min",children:[]},{value:"mul",id:"mul",children:[]},{value:"rnd",id:"rnd",children:[]},{value:"sub",id:"sub",children:[]}]},{value:"stringFns",id:"stringfns",children:[{value:"cat",id:"cat",children:[]},{value:"idx",id:"idx",children:[]},{value:"len",id:"len",children:[]},{value:"low",id:"low",children:[]},{value:"pl",id:"pl",children:[]},{value:"pr",id:"pr",children:[]},{value:"rpt",id:"rpt",children:[]},{value:"rpl",id:"rpl",children:[]},{value:"sbs",id:"sbs",children:[]},{value:"slc",id:"slc",children:[]},{value:"trim",id:"trim",children:[]},{value:"up",id:"up",children:[]}]},{value:"utilFns",id:"utilfns",children:[{value:"$ (variable getter)",id:"-variable-getter",children:[]},{value:"get",id:"get",children:[]},{value:"join",id:"join",children:[]},{value:"idx",id:"idx-1",children:[]},{value:"len",id:"len-1",children:[]},{value:"slc",id:"slc-1",children:[]}]}],o={toc:s};function p({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The standard library, ",(0,r.kt)("inlineCode",{parentName:"p"},"fns"),", is a set of small, template-friendly utility functions covering a broad range of string template needs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// import the entire standard library\nimport { runty, fns } from 'runty';\n\n// pass as 'fns' option in the runty constructor\nconst runt = runty({ fns });\n")),(0,r.kt)("p",null,"Because the standard library covers a broad range of use cases, you will rarely want to import the entire collection. The standard library is also made available as classes of functions, and as independent functions which can be imported individually."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// import a class of functions\nimport { runty, stringFns } from 'runty';\n\nconst runt = runty({ fns: stringFns });\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// or only import the function(s) you need\nimport { runty, eq, not } from 'runty';\n\nconst runt = runty({\n  fns: { \n    eq,\n    not\n  }\n});\n")),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"classes"},"Classes"),(0,r.kt)("h2",{id:"logicfns"},"logicFns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { logicFns } from 'runty';\n\nconst runt = runty({ fns: logicFns });\n")),(0,r.kt)("h3",{id:"and"},"and"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$and(%a,%b,...)\n")),(0,r.kt)("p",null,"Boolean AND operation. Accepts any number of arguments. Evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when all arguments are truthy, with number ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," also being truthy."),(0,r.kt)("h3",{id:"eq"},"eq"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$eq(%a,%b)\n")),(0,r.kt)("p",null,"Loose equality check of two values. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses ",(0,r.kt)("inlineCode",{parentName:"p"},"===")," equality."),(0,r.kt)("h3",{id:"gt"},"gt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$gt(%a,%b)\n")),(0,r.kt)("p",null,"Greater than comparison. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses ",(0,r.kt)("inlineCode",{parentName:"p"},">")," comparison without type-casting."),(0,r.kt)("h3",{id:"gte"},"gte"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$gte(%a,%b)\n")),(0,r.kt)("p",null,"Greater than or equal to comparison. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses ",(0,r.kt)("inlineCode",{parentName:"p"},">=")," comparison without type-casting."),(0,r.kt)("h3",{id:"is"},"is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$is(%a,%b)\n")),(0,r.kt)("p",null,"Strict equality check of two values using ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.is")),(0,r.kt)("h3",{id:"lt"},"lt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$lt(%a,%b)\n")),(0,r.kt)("p",null,"Less than comparison. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses ",(0,r.kt)("inlineCode",{parentName:"p"},"<")," comparison without type-casting."),(0,r.kt)("h3",{id:"lte"},"lte"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$lte(%a,%b)\n")),(0,r.kt)("p",null,"Less than or equal to comparison. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses ",(0,r.kt)("inlineCode",{parentName:"p"},"<=")," comparison without type-casting."),(0,r.kt)("h3",{id:"not"},"not"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$not(%val)\n")),(0,r.kt)("p",null,"Boolean NOT operation. Negates a value, resolving to a boolean while treating number ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," as a truthy value."),(0,r.kt)("h3",{id:"or"},"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$or(%a,%b,%c,...)\n")),(0,r.kt)("p",null,"Boolean OR operation. Accepts any number of arguments. Evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when at least one argument is truthy, with number ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," also being truthy."),(0,r.kt)("h2",{id:"numberfns"},"numberFns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { numberFns } from 'runty';\n\nconst runt = runty({ fns: numberFns });\n")),(0,r.kt)("h3",{id:"add"},"add"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$add(%a,%b,...)\n")),(0,r.kt)("p",null,"Addition. Evaluates two or more arguments as numbers and adds them."),(0,r.kt)("h3",{id:"ceil"},"ceil"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ceil(%val)\n")),(0,r.kt)("p",null,"Ceil operation. Rounds a decimal value up to the next largest integer."),(0,r.kt)("h3",{id:"div"},"div"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$div(%a,%b,...)\n")),(0,r.kt)("p",null,"Division. Evaluates two or more arguments as numbers and divides them."),(0,r.kt)("h3",{id:"flr"},"flr"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$flr(%val)\n")),(0,r.kt)("p",null,"Floor operation. Rounds a decimal value down to the largest integer less than or equal to it."),(0,r.kt)("h3",{id:"fix"},"fix"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$fix(%val,%digits)\n")),(0,r.kt)("p",null,"Fixed digit formatting. Converts a number (",(0,r.kt)("inlineCode",{parentName:"p"},"%val"),") into a string with a fixed number of specific digits (",(0,r.kt)("inlineCode",{parentName:"p"},"%digits"),")."),(0,r.kt)("h3",{id:"max"},"max"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$max(%a,%b,...)\n")),(0,r.kt)("p",null,"Maximum. Evaluates two or more arguments as numbers and returns the largest value."),(0,r.kt)("h3",{id:"min"},"min"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$min(%a,%b,...)\n")),(0,r.kt)("p",null,"Minimum. Evaluates two or more arguments as numbers and returns the smallest value."),(0,r.kt)("h3",{id:"mul"},"mul"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$mul(%a,%b,...)\n")),(0,r.kt)("p",null,"Multiplication. Evaluates two or more arguments as numbers and multiplies them."),(0,r.kt)("h3",{id:"rnd"},"rnd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$rnd(%val)\n")),(0,r.kt)("p",null,"Round. Rounds a decimal value to the nearest integer."),(0,r.kt)("h3",{id:"sub"},"sub"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$sub(%a,%b,...)\n")),(0,r.kt)("p",null,"Subtraction. Evaluates two or more arguments as numbers and subtracts them."),(0,r.kt)("h2",{id:"stringfns"},"stringFns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { stringFns } from 'runty';\n\nconst runt = runty({ fns: stringFns });\n")),(0,r.kt)("h3",{id:"cat"},"cat"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$cat(%a,%b,...)\n")),(0,r.kt)("p",null,"Concatenate. Evaluates two or more arguments as strings and joins them."),(0,r.kt)("h3",{id:"idx"},"idx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$idx(%str,%search)\n")),(0,r.kt)("p",null,"Index Of. Finds the index of a search string (",(0,r.kt)("inlineCode",{parentName:"p"},"%search"),") in some string value (%str)"),(0,r.kt)("p",null,"This function can also be used with Arrays and is shared with ",(0,r.kt)("a",{parentName:"p",href:"#utilfns"},(0,r.kt)("inlineCode",{parentName:"a"},"utilFns"))),(0,r.kt)("h3",{id:"len"},"len"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$len(%str)\n")),(0,r.kt)("p",null,"Length. Gets the length of a string."),(0,r.kt)("p",null,"This function can also be used with Arrays and is shared with ",(0,r.kt)("a",{parentName:"p",href:"#utilfns"},(0,r.kt)("inlineCode",{parentName:"a"},"utilFns"))),(0,r.kt)("h3",{id:"low"},"low"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$low(%str)\n")),(0,r.kt)("p",null,"To Lower Case. Converts a string to all lowercase letters."),(0,r.kt)("h3",{id:"pl"},"pl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$pl(%str,%len[,%padString])\n")),(0,r.kt)("p",null,"Pad left. Pads the left-hand side of a string until it is at least a minimum length (",(0,r.kt)("inlineCode",{parentName:"p"},"%len"),") with spaces (",(0,r.kt)("inlineCode",{parentName:"p"}," "),") or with ",(0,r.kt)("inlineCode",{parentName:"p"},"%padString")," (optional)"),(0,r.kt)("h3",{id:"pr"},"pr"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$pr(%str,%len[,%padString])\n")),(0,r.kt)("p",null,"Pad right. Pads the right-hand side of a string until it is at least a minimum length (",(0,r.kt)("inlineCode",{parentName:"p"},"%len"),") with spaces (",(0,r.kt)("inlineCode",{parentName:"p"}," "),") or with ",(0,r.kt)("inlineCode",{parentName:"p"},"%padString")," (optional)"),(0,r.kt)("h3",{id:"rpt"},"rpt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$rpt(%str,%count)\n")),(0,r.kt)("p",null,"Repeat. Repeats a string (",(0,r.kt)("inlineCode",{parentName:"p"},"%str"),") a number of times (",(0,r.kt)("inlineCode",{parentName:"p"},"%count"),")"),(0,r.kt)("h3",{id:"rpl"},"rpl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$rpl(%str,%search,%replacement)\n")),(0,r.kt)("p",null,"Replace. Replaces all instances of a search string (",(0,r.kt)("inlineCode",{parentName:"p"},"%search"),") in a string (",(0,r.kt)("inlineCode",{parentName:"p"},"%str"),") with a replacement string (",(0,r.kt)("inlineCode",{parentName:"p"},"%replacement"),")"),(0,r.kt)("h3",{id:"sbs"},"sbs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$sbs(%str,%start,%length)\n")),(0,r.kt)("p",null,"Substring. Extracts a portion of a string (",(0,r.kt)("inlineCode",{parentName:"p"},"%str"),") of a specific length (",(0,r.kt)("inlineCode",{parentName:"p"},"%length"),") from a starting index (",(0,r.kt)("inlineCode",{parentName:"p"},"%start"),")"),(0,r.kt)("h3",{id:"slc"},"slc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$slc(%str,%start,%end)\n")),(0,r.kt)("p",null,"Slice. Extracts a portion of a string (",(0,r.kt)("inlineCode",{parentName:"p"},"%str"),") from a starting index (",(0,r.kt)("inlineCode",{parentName:"p"},"%start"),") to an ending index (",(0,r.kt)("inlineCode",{parentName:"p"},"%end"),")"),(0,r.kt)("p",null,"This function can also be used with Arrays and is shared with ",(0,r.kt)("a",{parentName:"p",href:"#utilfns"},(0,r.kt)("inlineCode",{parentName:"a"},"utilFns"))),(0,r.kt)("h3",{id:"trim"},"trim"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$trim(%str)\n")),(0,r.kt)("p",null,"Trim. Removes leading or trailing whitespace from a string."),(0,r.kt)("h3",{id:"up"},"up"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$up(%str)\n")),(0,r.kt)("p",null,"To Upper Case. Converts a string to all uppercase letters."),(0,r.kt)("h2",{id:"utilfns"},"utilFns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { utilFns } from 'runty';\n\nconst runt = runty({ fns: utilFns });\n")),(0,r.kt)("h3",{id:"-variable-getter"},"$ (variable getter)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$$(%a,...)\n")),(0,r.kt)("p",null,"Dynamicly access variables values. Accepts any number of arguments, which are treated as chained property accessors. Behaves just like a variable accessor (",(0,r.kt)("inlineCode",{parentName:"p"},"%foo")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"%foo.bar.etc"),")"),(0,r.kt)("h3",{id:"get"},"get"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$get(%obj,%prop,...)\n")),(0,r.kt)("p",null,"Property accessor for objects. Retrieves a property (",(0,r.kt)("inlineCode",{parentName:"p"},"%prop"),") from an object (",(0,r.kt)("inlineCode",{parentName:"p"},"%obj"),"). Accepts any number of additional arguments, which are treated as chained property accessors."),(0,r.kt)("h3",{id:"join"},"join"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$join(%arr,%str)\n")),(0,r.kt)("p",null,"Array join. Merges the values in an array (",(0,r.kt)("inlineCode",{parentName:"p"},"%arr"),") as a string, with an optional string delimiter (",(0,r.kt)("inlineCode",{parentName:"p"},"%str"),")."),(0,r.kt)("h3",{id:"idx-1"},"idx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$idx(%arr,%search)\n")),(0,r.kt)("p",null,"Index Of. Finds the index of a value (",(0,r.kt)("inlineCode",{parentName:"p"},"%search"),") in some array (",(0,r.kt)("inlineCode",{parentName:"p"},"%arr"),")"),(0,r.kt)("p",null,"This function can also be used with strings and is shared with ",(0,r.kt)("a",{parentName:"p",href:"#stringfns"},(0,r.kt)("inlineCode",{parentName:"a"},"stringFns"))),(0,r.kt)("h3",{id:"len-1"},"len"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$len(%arr)\n")),(0,r.kt)("p",null,"Length. Gets the length of an array."),(0,r.kt)("p",null,"This function can also be used with strings and is shared with ",(0,r.kt)("a",{parentName:"p",href:"#stringfns"},(0,r.kt)("inlineCode",{parentName:"a"},"stringFns"))),(0,r.kt)("h3",{id:"slc-1"},"slc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$slc(%arr,%start,%end)\n")),(0,r.kt)("p",null,"Slice. Extracts a portion of an array (",(0,r.kt)("inlineCode",{parentName:"p"},"%arr"),") from a starting index (",(0,r.kt)("inlineCode",{parentName:"p"},"%start"),") to an ending index (",(0,r.kt)("inlineCode",{parentName:"p"},"%end"),")"),(0,r.kt)("p",null,"This function can also be used with strings and is shared with ",(0,r.kt)("a",{parentName:"p",href:"#stringfns"},(0,r.kt)("inlineCode",{parentName:"a"},"stringFns"))))}p.isMDXComponent=!0}}]);