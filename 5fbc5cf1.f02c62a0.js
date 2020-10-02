(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(75)),l={title:"API Reference"},b={unversionedId:"api",id:"api",isDocsHomePage:!1,title:"API Reference",description:"Constructor",source:"@site/docs/api.md",slug:"/api",permalink:"/docs/api",editUrl:"https://github.com/nderscore/runty/edit/master/website/docs/api.md",version:"current",sidebar:"sidebar",previous:{title:"Template Syntax",permalink:"/docs/syntax"},next:{title:"Standard Library (fns)",permalink:"/docs/fns"}},c=[{value:"Constructor",id:"constructor",children:[{value:"Options",id:"options",children:[]},{value:"Returns",id:"returns",children:[]}]},{value:"Parser",id:"parser",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns-1",children:[]}]},{value:"Template Function",id:"template-function",children:[{value:"Arguments",id:"arguments-1",children:[]},{value:"Returns",id:"returns-2",children:[]}]},{value:"RSyntaxError",id:"rsyntaxerror",children:[{value:"Static Properties",id:"static-properties",children:[]},{value:"Instance Properties",id:"instance-properties",children:[]}]},{value:"Runty Function",id:"runty-function",children:[{value:"Arguments",id:"arguments-2",children:[]},{value:"Returns",id:"returns-3",children:[]}]}],p={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"constructor"},"Constructor"),Object(i.b)("p",null,"Creates a new instance of the runty ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#parser"}),"parser"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// with defaults:\nconst runt = runty();\n\n// with options:\nconst runt = runty({\n  asArray,\n  fns,\n  maxDepth\n});\n")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"asArray: boolean")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", all templates will result in an array of strings and tokens after execution."),Object(i.b)("li",{parentName:"ul"},"Otherwise, default stringification behavior will be used."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"fns: { [string: name]: RuntyFunction }")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Default: ",Object(i.b)("inlineCode",{parentName:"p"},"{}")," ",Object(i.b)("em",{parentName:"p"},"(empty)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Object dictionary which defines functions which will be available to templates generated by this instance of the runty parser.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Functions should follow the specification defined by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#runty-function"}),"Runty Functions"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/fns"}),"Standard Library")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/custom-fns"}),"Custom Functions")," documentation for more info.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"maxDepth: number")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("inlineCode",{parentName:"li"},"8")),Object(i.b)("li",{parentName:"ul"},"Sets the maximum depth of nested logic (expressions/function calls) that will be parsed by this instance. Runty will throw an error if this depth is exceeded.")))),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#parser"}),Object(i.b)("inlineCode",{parentName:"a"},"Parser")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A runty parser function.")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"parser"},"Parser"),Object(i.b)("p",null,"Parses a runty template and returns a compiled ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#template-function"}),"template function"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const template = runt(templateString, asArray);\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"templateString: string")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The runty ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/syntax"}),"template string")," to parse."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"asArray: boolean")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", this templates will result in an array of strings and tokens after execution."),Object(i.b)("li",{parentName:"ul"},"Otherwise, default stringification behavior will be used.")))),Object(i.b)("h3",{id:"returns-1"},"Returns"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#template-function"}),Object(i.b)("inlineCode",{parentName:"a"},"Template Function")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A compiled template function.")))),Object(i.b)("p",null,"If a template is invalid or contains syntax errors, this function will throw a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rsyntaxerror"}),Object(i.b)("inlineCode",{parentName:"a"},"RSyntaxError"))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"template-function"},"Template Function"),Object(i.b)("p",null,"Generates a string (or array of strings and tokens) from a dictionary of values."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const result = template(variables, asArray);\n")),Object(i.b)("h3",{id:"arguments-1"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"variables: object | array")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A dictionary of values to pass as variables to the template."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"asArray: boolean")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", this templates will result in an array of strings and tokens after execution."),Object(i.b)("li",{parentName:"ul"},"Otherwise, default stringification behavior will be used.")))),Object(i.b)("h3",{id:"returns-2"},"Returns"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"string | (string | any)[]"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Unless an ",Object(i.b)("inlineCode",{parentName:"li"},"asArray")," option was used, the resulting ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"If the ",Object(i.b)("inlineCode",{parentName:"li"},"asArray")," option was used, an array of ",Object(i.b)("inlineCode",{parentName:"li"},"string")," and ",Object(i.b)("inlineCode",{parentName:"li"},"any")," (tokens).")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"rsyntaxerror"},"RSyntaxError"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"RSyntaxError")," is the Error class thrown when the template parser encounters invalid syntax."),Object(i.b)("h3",{id:"static-properties"},"Static Properties"),Object(i.b)("p",null,"The following static properties are available on the ",Object(i.b)("inlineCode",{parentName:"p"},"RSyntaxError")," class, which describe types of syntax errors."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RSyntaxError.EXPECTED_END")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RSyntaxError.INVALID_EXPRESSION")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RSyntaxError.INVALID_FUNCTION")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RSyntaxError.NESTING_DEPTH")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RSyntaxError.UNTERMINATED_EXPRESSION")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RSyntaxError.UNTERMINATED_FUNCTION"))),Object(i.b)("h3",{id:"instance-properties"},"Instance Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"message: string")),Object(i.b)("p",{parentName:"li"},"Long-form syntax error message")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"type: RSyntaxError.(EXPECTED_END|INVALID_EXPRESSION|INVALID_FUNCTION|NESTING_DEPTH|UNTERMINATED_EXPRESSION|UNTERMINATED_FUNCTION)")),Object(i.b)("p",{parentName:"li"},"The type of syntax error that was encountered.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"rest: string")),Object(i.b)("p",{parentName:"li"},"The remaining unparsed template string.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"value: string")),Object(i.b)("p",{parentName:"li"},"Some errors contain another value to provide additional context, such as the function name of an ",Object(i.b)("inlineCode",{parentName:"p"},"INVALID_FUNCTION")," error"))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"runty-function"},"Runty Function"),Object(i.b)("p",null,"A function defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"fns")," option passed to the constructor."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"someFn(args, variables);\n")),Object(i.b)("h3",{id:"arguments-2"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"args: (string | any)[]")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"An array of arguments passed to the function."),Object(i.b)("li",{parentName:"ul"},"May be plain strings, token values, or results from other function calls."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"variables: object | array")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The dictionary of values passed to the template being executed.")))),Object(i.b)("h3",{id:"returns-3"},"Returns"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"any"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Should return some scalar or object value.")))))}s.isMDXComponent=!0}}]);