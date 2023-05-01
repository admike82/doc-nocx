"use strict";(self.webpackChunkdoc_nocx=self.webpackChunkdoc_nocx||[]).push([[4369],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(4137));const o={sidebar_position:1},i="Synchroniastion Edusign",c={unversionedId:"Administration/Sync/edusign",id:"Administration/Sync/edusign",title:"Synchroniastion Edusign",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/Administration/Sync/edusign.md",sourceDirName:"Administration/Sync",slug:"/Administration/Sync/edusign",permalink:"/doc-nocx/docs/Administration/Sync/edusign",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Synchronisations",permalink:"/doc-nocx/docs/category/synchronisations"},next:{title:"Synchroniastion Galia",permalink:"/doc-nocx/docs/Administration/Sync/galia"}},s={},l=[{value:"Create your first React Page",id:"create-your-first-react-page",level:2},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"synchroniastion-edusign"},"Synchroniastion Edusign"),(0,a.kt)("p",null,"Add ",(0,a.kt)("strong",{parentName:"p"},"Markdown or React")," files to ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages")," to create a ",(0,a.kt)("strong",{parentName:"p"},"standalone page"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/pages/index.js")," \u2192 ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:3000/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/pages/foo.md")," \u2192 ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," \u2192 ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),(0,a.kt)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),(0,a.kt)("p",null,"Create a file at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),(0,a.kt)("p",null,"A new page is now available at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/my-react-page"},"http://localhost:3000/my-react-page"),"."),(0,a.kt)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),(0,a.kt)("p",null,"Create a file at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),(0,a.kt)("p",null,"A new page is now available at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/my-markdown-page"},"http://localhost:3000/my-markdown-page"),"."))}u.isMDXComponent=!0}}]);