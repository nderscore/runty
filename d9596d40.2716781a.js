(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(6),i=(n(0),n(75)),b={title:"Standard Library (fns)"},l={unversionedId:"fns",id:"fns",isDocsHomePage:!1,title:"Standard Library (fns)",description:"Introduction",source:"@site/docs/fns.md",slug:"/fns",permalink:"/docs/fns",editUrl:"https://github.com/nderscore/runty/edit/master/website/docs/fns.md",version:"current",sidebar:"sidebar",previous:{title:"API Reference",permalink:"/docs/api"},next:{title:"Extending With Custom Functions",permalink:"/docs/custom-fns"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"logicFns",id:"logicfns",children:[{value:"and",id:"and",children:[]},{value:"eq",id:"eq",children:[]},{value:"gt",id:"gt",children:[]},{value:"gte",id:"gte",children:[]},{value:"is",id:"is",children:[]},{value:"lt",id:"lt",children:[]},{value:"lte",id:"lte",children:[]},{value:"not",id:"not",children:[]},{value:"or",id:"or",children:[]}]},{value:"numberFns",id:"numberfns",children:[{value:"add",id:"add",children:[]},{value:"ceil",id:"ceil",children:[]},{value:"div",id:"div",children:[]},{value:"flr",id:"flr",children:[]},{value:"fix",id:"fix",children:[]},{value:"max",id:"max",children:[]},{value:"min",id:"min",children:[]},{value:"mul",id:"mul",children:[]},{value:"rnd",id:"rnd",children:[]},{value:"sub",id:"sub",children:[]}]},{value:"stringFns",id:"stringfns",children:[{value:"cat",id:"cat",children:[]},{value:"idx",id:"idx",children:[]},{value:"len",id:"len",children:[]},{value:"low",id:"low",children:[]},{value:"pl",id:"pl",children:[]},{value:"pr",id:"pr",children:[]},{value:"rpt",id:"rpt",children:[]},{value:"rpl",id:"rpl",children:[]},{value:"sbs",id:"sbs",children:[]},{value:"slc",id:"slc",children:[]},{value:"trim",id:"trim",children:[]},{value:"up",id:"up",children:[]}]},{value:"utilFns",id:"utilfns",children:[{value:"$ (variable getter)",id:"-variable-getter",children:[]},{value:"get",id:"get",children:[]},{value:"join",id:"join",children:[]},{value:"idx",id:"idx-1",children:[]},{value:"len",id:"len-1",children:[]},{value:"slc",id:"slc-1",children:[]}]}],s={rightToc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"The standard library, ",Object(i.b)("inlineCode",{parentName:"p"},"fns"),", is a set of small, template-friendly utility functions covering a broad range of string template needs."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// import the entire standard library\nimport { runty, fns } from 'runty';\n\n// pass as 'fns' option in the runty constructor\nconst runt = runty({ fns });\n")),Object(i.b)("p",null,"Because the standard library covers a broad range of use cases, you will rarely want to import the entire collection. The standard library is also made available as classes of functions, and as independent functions which can be imported individually."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// import a class of functions\nimport { runty, stringFns } from 'runty';\n\nconst runt = runty({ fns: stringFns });\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// or only import the function(s) you need\nimport { runty, eq, not } from 'runty';\n\nconst runt = runty({\n  fns: { \n    eq,\n    not\n  }\n});\n")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"classes"},"Classes"),Object(i.b)("h2",{id:"logicfns"},"logicFns"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { logicFns } from 'runty';\n\nconst runt = runty({ fns: logicFns });\n")),Object(i.b)("h3",{id:"and"},"and"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$and(%a,%b,...)\n")),Object(i.b)("p",null,"Boolean AND operation. Accepts any number of arguments. Evaluates to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when all arguments are truthy, with number ",Object(i.b)("inlineCode",{parentName:"p"},"0")," also being truthy."),Object(i.b)("h3",{id:"eq"},"eq"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$eq(%a,%b)\n")),Object(i.b)("p",null,"Loose equality check of two values. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses ",Object(i.b)("inlineCode",{parentName:"p"},"===")," equality."),Object(i.b)("h3",{id:"gt"},"gt"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$gt(%a,%b)\n")),Object(i.b)("p",null,"Greater than comparison. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses ",Object(i.b)("inlineCode",{parentName:"p"},">")," comparison without type-casting."),Object(i.b)("h3",{id:"gte"},"gte"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$gte(%a,%b)\n")),Object(i.b)("p",null,"Greater than or equal to comparison. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses ",Object(i.b)("inlineCode",{parentName:"p"},">=")," comparison without type-casting."),Object(i.b)("h3",{id:"is"},"is"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$is(%a,%b)\n")),Object(i.b)("p",null,"Strict equality check of two values using ",Object(i.b)("inlineCode",{parentName:"p"},"Object.is")),Object(i.b)("h3",{id:"lt"},"lt"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$lt(%a,%b)\n")),Object(i.b)("p",null,"Less than comparison. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses ",Object(i.b)("inlineCode",{parentName:"p"},"<")," comparison without type-casting."),Object(i.b)("h3",{id:"lte"},"lte"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$lte(%a,%b)\n")),Object(i.b)("p",null,"Less than or equal to comparison. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses ",Object(i.b)("inlineCode",{parentName:"p"},"<=")," comparison without type-casting."),Object(i.b)("h3",{id:"not"},"not"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$not(%val)\n")),Object(i.b)("p",null,"Boolean NOT operation. Negates a value, resolving to a boolean while treating number ",Object(i.b)("inlineCode",{parentName:"p"},"0")," as a truthy value."),Object(i.b)("h3",{id:"or"},"or"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$or(%a,%b,%c,...)\n")),Object(i.b)("p",null,"Boolean OR operation. Accepts any number of arguments. Evaluates to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when at least one argument is truthy, with number ",Object(i.b)("inlineCode",{parentName:"p"},"0")," also being truthy."),Object(i.b)("h2",{id:"numberfns"},"numberFns"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { numberFns } from 'runty';\n\nconst runt = runty({ fns: numberFns });\n")),Object(i.b)("h3",{id:"add"},"add"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$add(%a,%b,...)\n")),Object(i.b)("p",null,"Addition. Evaluates two or more arguments as numbers and adds them."),Object(i.b)("h3",{id:"ceil"},"ceil"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ceil(%val)\n")),Object(i.b)("p",null,"Ceil operation. Rounds a decimal value up to the next largest integer."),Object(i.b)("h3",{id:"div"},"div"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$div(%a,%b,...)\n")),Object(i.b)("p",null,"Division. Evaluates two or more arguments as numbers and divides them."),Object(i.b)("h3",{id:"flr"},"flr"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$flr(%val)\n")),Object(i.b)("p",null,"Floor operation. Rounds a decimal value down to the largest integer less than or equal to it."),Object(i.b)("h3",{id:"fix"},"fix"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$fix(%val,%digits)\n")),Object(i.b)("p",null,"Fixed digit formatting. Converts a number (",Object(i.b)("inlineCode",{parentName:"p"},"%val"),") into a string with a fixed number of specific digits (",Object(i.b)("inlineCode",{parentName:"p"},"%digits"),")."),Object(i.b)("h3",{id:"max"},"max"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$max(%a,%b,...)\n")),Object(i.b)("p",null,"Maximum. Evaluates two or more arguments as numbers and returns the largest value."),Object(i.b)("h3",{id:"min"},"min"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$min(%a,%b,...)\n")),Object(i.b)("p",null,"Minimum. Evaluates two or more arguments as numbers and returns the smallest value."),Object(i.b)("h3",{id:"mul"},"mul"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$mul(%a,%b,...)\n")),Object(i.b)("p",null,"Multiplication. Evaluates two or more arguments as numbers and multiplies them."),Object(i.b)("h3",{id:"rnd"},"rnd"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$rnd(%val)\n")),Object(i.b)("p",null,"Round. Rounds a decimal value to the nearest integer."),Object(i.b)("h3",{id:"sub"},"sub"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$sub(%a,%b,...)\n")),Object(i.b)("p",null,"Subtraction. Evaluates two or more arguments as numbers and subtracts them."),Object(i.b)("h2",{id:"stringfns"},"stringFns"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { stringFns } from 'runty';\n\nconst runt = runty({ fns: stringFns });\n")),Object(i.b)("h3",{id:"cat"},"cat"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$cat(%a,%b,...)\n")),Object(i.b)("p",null,"Concatenate. Evaluates two or more arguments as strings and joins them."),Object(i.b)("h3",{id:"idx"},"idx"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$idx(%str,%search)\n")),Object(i.b)("p",null,"Index Of. Finds the index of a search string (",Object(i.b)("inlineCode",{parentName:"p"},"%search"),") in some string value (%str)"),Object(i.b)("p",null,"This function can also be used with Arrays and is shared with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#utilfns"}),Object(i.b)("inlineCode",{parentName:"a"},"utilFns"))),Object(i.b)("h3",{id:"len"},"len"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$len(%str)\n")),Object(i.b)("p",null,"Length. Gets the length of a string."),Object(i.b)("p",null,"This function can also be used with Arrays and is shared with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#utilfns"}),Object(i.b)("inlineCode",{parentName:"a"},"utilFns"))),Object(i.b)("h3",{id:"low"},"low"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$low(%str)\n")),Object(i.b)("p",null,"To Lower Case. Converts a string to all lowercase letters."),Object(i.b)("h3",{id:"pl"},"pl"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$pl(%str,%len[,%padString])\n")),Object(i.b)("p",null,"Pad left. Pads the left-hand side of a string until it is at least a minimum length (",Object(i.b)("inlineCode",{parentName:"p"},"%len"),") with spaces (",Object(i.b)("inlineCode",{parentName:"p"}," "),") or with ",Object(i.b)("inlineCode",{parentName:"p"},"%padString")," (optional)"),Object(i.b)("h3",{id:"pr"},"pr"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$pr(%str,%len[,%padString])\n")),Object(i.b)("p",null,"Pad right. Pads the right-hand side of a string until it is at least a minimum length (",Object(i.b)("inlineCode",{parentName:"p"},"%len"),") with spaces (",Object(i.b)("inlineCode",{parentName:"p"}," "),") or with ",Object(i.b)("inlineCode",{parentName:"p"},"%padString")," (optional)"),Object(i.b)("h3",{id:"rpt"},"rpt"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$rpt(%str,%count)\n")),Object(i.b)("p",null,"Repeat. Repeats a string (",Object(i.b)("inlineCode",{parentName:"p"},"%str"),") a number of times (",Object(i.b)("inlineCode",{parentName:"p"},"%count"),")"),Object(i.b)("h3",{id:"rpl"},"rpl"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$rpl(%str,%search,%replacement)\n")),Object(i.b)("p",null,"Replace. Replaces all instances of a search string (",Object(i.b)("inlineCode",{parentName:"p"},"%search"),") in a string (",Object(i.b)("inlineCode",{parentName:"p"},"%str"),") with a replacement string (",Object(i.b)("inlineCode",{parentName:"p"},"%replacement"),")"),Object(i.b)("h3",{id:"sbs"},"sbs"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$sbs(%str,%start,%length)\n")),Object(i.b)("p",null,"Substring. Extracts a portion of a string (",Object(i.b)("inlineCode",{parentName:"p"},"%str"),") of a specific length (",Object(i.b)("inlineCode",{parentName:"p"},"%length"),") from a starting index (",Object(i.b)("inlineCode",{parentName:"p"},"%start"),")"),Object(i.b)("h3",{id:"slc"},"slc"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$slc(%str,%start,%end)\n")),Object(i.b)("p",null,"Slice. Extracts a portion of a string (",Object(i.b)("inlineCode",{parentName:"p"},"%str"),") from a starting index (",Object(i.b)("inlineCode",{parentName:"p"},"%start"),") to an ending index (",Object(i.b)("inlineCode",{parentName:"p"},"%end"),")"),Object(i.b)("p",null,"This function can also be used with Arrays and is shared with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#utilfns"}),Object(i.b)("inlineCode",{parentName:"a"},"utilFns"))),Object(i.b)("h3",{id:"trim"},"trim"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$trim(%str)\n")),Object(i.b)("p",null,"Trim. Removes leading or trailing whitespace from a string."),Object(i.b)("h3",{id:"up"},"up"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$up(%str)\n")),Object(i.b)("p",null,"To Upper Case. Converts a string to all uppercase letters."),Object(i.b)("h2",{id:"utilfns"},"utilFns"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { utilFns } from 'runty';\n\nconst runt = runty({ fns: utilFns });\n")),Object(i.b)("h3",{id:"-variable-getter"},"$ (variable getter)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$$(%a,...)\n")),Object(i.b)("p",null,"Dynamicly access variables values. Accepts any number of arguments, which are treated as chained property accessors. Behaves just like a variable accessor (",Object(i.b)("inlineCode",{parentName:"p"},"%foo")," / ",Object(i.b)("inlineCode",{parentName:"p"},"%foo.bar.etc"),")"),Object(i.b)("h3",{id:"get"},"get"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$get(%obj,%prop,...)\n")),Object(i.b)("p",null,"Property accessor for objects. Retrieves a property (",Object(i.b)("inlineCode",{parentName:"p"},"%prop"),") from an object (",Object(i.b)("inlineCode",{parentName:"p"},"%obj"),"). Accepts any number of additional arguments, which are treated as chained property accessors."),Object(i.b)("h3",{id:"join"},"join"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$join(%arr,%str)\n")),Object(i.b)("p",null,"Array join. Merges the values in an array (",Object(i.b)("inlineCode",{parentName:"p"},"%arr"),") as a string, with an optional string delimiter (",Object(i.b)("inlineCode",{parentName:"p"},"%str"),")."),Object(i.b)("h3",{id:"idx-1"},"idx"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$idx(%arr,%search)\n")),Object(i.b)("p",null,"Index Of. Finds the index of a value (",Object(i.b)("inlineCode",{parentName:"p"},"%search"),") in some array (",Object(i.b)("inlineCode",{parentName:"p"},"%arr"),")"),Object(i.b)("p",null,"This function can also be used with strings and is shared with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#stringfns"}),Object(i.b)("inlineCode",{parentName:"a"},"stringFns"))),Object(i.b)("h3",{id:"len-1"},"len"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$len(%arr)\n")),Object(i.b)("p",null,"Length. Gets the length of an array."),Object(i.b)("p",null,"This function can also be used with strings and is shared with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#stringfns"}),Object(i.b)("inlineCode",{parentName:"a"},"stringFns"))),Object(i.b)("h3",{id:"slc-1"},"slc"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$slc(%arr,%start,%end)\n")),Object(i.b)("p",null,"Slice. Extracts a portion of an array (",Object(i.b)("inlineCode",{parentName:"p"},"%arr"),") from a starting index (",Object(i.b)("inlineCode",{parentName:"p"},"%start"),") to an ending index (",Object(i.b)("inlineCode",{parentName:"p"},"%end"),")"),Object(i.b)("p",null,"This function can also be used with strings and is shared with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#stringfns"}),Object(i.b)("inlineCode",{parentName:"a"},"stringFns"))))}o.isMDXComponent=!0}}]);