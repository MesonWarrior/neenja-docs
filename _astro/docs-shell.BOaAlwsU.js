import{r as h,R as A}from"./index.BUolSf6J.js";var E={exports:{}},k={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _;function O(){if(_)return k;_=1;var s=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function t(c,i,r){var d=null;if(r!==void 0&&(d=""+r),i.key!==void 0&&(d=""+i.key),"key"in i){r={};for(var o in i)o!=="key"&&(r[o]=i[o])}else r=i;return i=r.ref,{$$typeof:s,type:c,key:d,ref:i!==void 0?i:null,props:r}}return k.Fragment=a,k.jsx=t,k.jsxs=t,k}var W;function B(){return W||(W=1,E.exports=O()),E.exports}var e=B();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=(...s)=>s.filter((a,t,c)=>!!a&&a.trim()!==""&&c.indexOf(a)===t).join(" ").trim();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,t,c)=>c?c.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=s=>{const a=q(s);return a.charAt(0).toUpperCase()+a.slice(1)};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var S={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=s=>{for(const a in s)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1},F=h.createContext({}),J=()=>h.useContext(F),H=h.forwardRef(({color:s,size:a,strokeWidth:t,absoluteStrokeWidth:c,className:i="",children:r,iconNode:d,...o},p)=>{const{size:m=24,strokeWidth:x=2,absoluteStrokeWidth:f=!1,color:u="currentColor",className:N=""}=J()??{},l=c??f?Number(t??x)*24/Number(a??m):t??x;return h.createElement("svg",{ref:p,...S,width:a??m??S.width,height:a??m??S.height,stroke:s??u,strokeWidth:l,className:M("lucide",N,i),...!r&&!P(o)&&{"aria-hidden":"true"},...o},[...d.map(([j,g])=>h.createElement(j,g)),...Array.isArray(r)?r:[r]])});/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(s,a)=>{const t=h.forwardRef(({className:c,...i},r)=>h.createElement(H,{ref:r,iconNode:a,className:M(`lucide-${I(z(s))}`,`lucide-${s}`,c),...i}));return t.displayName=z(s),t};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Y=C("check",U);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],G=C("chevron-down",Z);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],X=C("copy",V);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],D=C("menu",Q);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],R=C("search",K);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],se=C("x",ee);async function te(s){if(typeof navigator<"u"&&navigator.clipboard?.writeText){await navigator.clipboard.writeText(s);return}if(typeof document>"u")throw new Error("Clipboard is unavailable.");const a=document.createElement("textarea");a.value=s,a.setAttribute("readonly",""),a.style.position="fixed",a.style.opacity="0",a.style.pointerEvents="none",document.body.append(a),a.select();const c=document.execCommand?.call(document,"copy")??!1;if(document.body.removeChild(a),!c)throw new Error("Copy failed.")}function ae({code:s,language:a}){const[t,c]=h.useState(!1),i=a.trim();h.useEffect(()=>{if(!t)return;const d=window.setTimeout(()=>{c(!1)},1800);return()=>{window.clearTimeout(d)}},[t]);const r=async()=>{try{await te(s),c(!0)}catch{c(!1)}};return e.jsxs("div",{className:"code-block",children:[e.jsxs("div",{className:"code-block-header",children:[e.jsx("span",{className:"code-block-language","aria-hidden":i?void 0:!0,children:i||" "}),e.jsx("button",{type:"button",className:"code-copy-button","aria-label":t?"Code copied":"Copy code",title:t?"Code copied":"Copy code",onClick:r,children:t?e.jsx(Y,{size:15,strokeWidth:2.2}):e.jsx(X,{size:15,strokeWidth:2.1})})]}),e.jsx("pre",{"data-language":a||void 0,children:e.jsx("code",{children:s})})]})}function v(s){return s.split(/(`[^`]+`)/g).map((t,c)=>t.startsWith("`")&&t.endsWith("`")?e.jsx("code",{children:t.slice(1,-1)},`${t}-${c}`):t.split(/(\*\*[^*]+\*\*)/g).map((r,d)=>r.startsWith("**")&&r.endsWith("**")?e.jsx("strong",{children:r.slice(2,-2)},`${r}-${d}`):e.jsx(A.Fragment,{children:r},`${r}-${d}`)))}function re({content:s}){const a=s.replace(/\r\n/g,`
`).split(`
`),t=[];let c=[],i=[],r=null,d=null,o=!1,p="",m=[];const x=()=>{c.length!==0&&(t.push(e.jsx("p",{children:v(c.join(" "))},`paragraph-${t.length}`)),c=[])},f=()=>{if(i.length===0||!r)return;const l=r==="ul"?e.jsx("ul",{children:i.map((j,g)=>e.jsx("li",{children:v(j.text)},`${j.text}-${g}`))},`list-${t.length}`):e.jsx("ol",{start:d??void 0,children:i.map((j,g)=>e.jsx("li",{children:v(j.text)},`${j.text}-${g}`))},`list-${t.length}`);t.push(l),i=[],r=null,d=null},u=()=>{const l=m.join(`
`);t.push(e.jsx(ae,{code:l,language:p},`code-${t.length}`)),m=[],p=""},N=l=>!r||i.length===0||!/^\s+/.test(l)?!1:(i[i.length-1]={text:`${i[i.length-1].text} ${l.trim()}`},!0);for(const l of a){if(l.startsWith("```")){x(),f(),o?(u(),o=!1):(o=!0,p=l.slice(3).trim());continue}if(o){m.push(l);continue}if(l.trim()===""){x(),f();continue}if(l.startsWith("#### ")){x(),f(),t.push(e.jsx("h4",{children:v(l.slice(5).trim())},`h4-${t.length}`));continue}if(l.startsWith("### ")){x(),f(),t.push(e.jsx("h3",{children:v(l.slice(4).trim())},`h3-${t.length}`));continue}if(l.startsWith("> ")){x(),f(),t.push(e.jsx("blockquote",{children:v(l.slice(2).trim())},`blockquote-${t.length}`));continue}const j=/^[-*]\s+(.*)$/.exec(l);if(j){x(),r&&r!=="ul"&&f(),r="ul",i.push({text:j[1]});continue}const g=/^(\d+)\.\s+(.*)$/.exec(l);if(g){x(),r&&r!=="ol"&&f();const w=Number.parseInt(g[1],10);r="ol",i.length===0&&(d=w),i.push({text:g[2]});continue}N(l)||c.push(l.trim())}return x(),f(),m.length>0&&u(),e.jsx(e.Fragment,{children:t})}function ne(s){return s==="/"?"":s.replace(/\/+$/,"")}function ie(s,a){const t=ne(s||"/");return a==="/"?t?`${t}/`:"/":`${t}${a}`.replace(/\/{2,}/g,"/")}function L(s,a){return ie(s,`/${a}/`)}function ce(s){return s.trim().toLowerCase()}function oe(s,a){return a?[s.title,s.category,s.summary,s.tags.join(" "),s.related.join(" "),s.content].join(`
`).toLowerCase().includes(a):!0}function le({text:s,className:a}){const[t,c]=h.useState(!1),[i,r]=h.useState(!1),d=h.useRef(null);return h.useEffect(()=>{if(t)return;const o=d.current;if(!o)return;const p=()=>{r(o.scrollHeight>o.clientHeight+1)};p();const m=new ResizeObserver(p);return m.observe(o),window.addEventListener("resize",p),()=>{m.disconnect(),window.removeEventListener("resize",p)}},[t,s]),e.jsxs("div",{className:"expandable-copy",children:[e.jsx("p",{ref:d,className:`${a} ${t?"":"is-clamped"}`.trim(),children:s}),i?e.jsx("button",{type:"button",className:"inline-toggle",onClick:()=>c(o=>!o),children:t?"Show less":"Read more"}):null]})}function he({document:s,selectedConceptId:a,homeHref:t="/",basePath:c="/",brandIconSrc:i="/brand/neenja.svg"}){const[r,d]=h.useState(!1),[o,p]=h.useState(!1),[m,x]=h.useState(""),f=h.useRef(null),u=s.conceptsById[a??""]??s.concepts[0],N=u?.categorySlug,l=ce(m),j=s.concepts.filter(n=>oe(n,l)),[g,w]=h.useState(()=>Object.fromEntries(s.categories.map(n=>[n.slug,n.slug===N])));h.useEffect(()=>{N&&w(n=>({...n,[N]:!0}))},[N]),h.useEffect(()=>{d(!1),p(!1)},[a]),h.useEffect(()=>{if(!o)return;const n=window.setTimeout(()=>{f.current?.focus()},80);return()=>{window.clearTimeout(n)}},[o]),h.useEffect(()=>{if(!o&&!r)return;const n=b=>{b.key==="Escape"&&(p(!1),d(!1))},y=window.document.body.style.overflow;return window.document.body.style.overflow="hidden",window.addEventListener("keydown",n),()=>{window.document.body.style.overflow=y,window.removeEventListener("keydown",n)}},[o,r]);const T=()=>{d(!1),p(!0)},$=()=>{p(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("header",{className:"site-header docs-header",children:e.jsxs("div",{className:"docs-header-inner",children:[e.jsxs("div",{className:"docs-header-left",children:[e.jsx("button",{type:"button",className:"icon-button nav-toggle","aria-label":"Open navigation","aria-expanded":r,onClick:()=>d(n=>!n),children:e.jsx(D,{size:18})}),e.jsx("span",{className:"brand-mark","aria-hidden":"true",children:e.jsx("img",{className:"brand-mark-icon-image",src:i,alt:""})}),e.jsxs("div",{className:"brand-copy",children:[e.jsxs("p",{className:"eyebrow",children:[e.jsx("span",{className:"gray",children:"Powered by"})," ",e.jsx("a",{href:"https://github.com/MesonWarrior/Neenja",children:"Neenja"})]}),e.jsx("a",{href:t,className:"brand-link",children:s.meta.title})]})]}),e.jsxs("div",{className:"docs-header-right",children:[e.jsxs("button",{type:"button",className:"search-trigger desktop-search-trigger",onClick:T,"aria-haspopup":"dialog","aria-expanded":o,children:[e.jsx(R,{size:16}),e.jsx("span",{children:"Search"})]}),e.jsx("button",{type:"button",className:"icon-button mobile-search-trigger",onClick:T,"aria-label":"Search concepts","aria-haspopup":"dialog","aria-expanded":o,children:e.jsx(R,{size:18})})]})]})}),e.jsxs("div",{className:"docs-layout",children:[e.jsx("div",{className:r?"sidebar-backdrop visible":"sidebar-backdrop","aria-hidden":"true",onClick:()=>d(!1)}),e.jsxs("aside",{className:r?"sidebar open":"sidebar",children:[e.jsxs("section",{className:"sidebar-panel hero-panel",children:[e.jsx("p",{className:"eyebrow",children:"Description"}),e.jsx(le,{text:s.meta.summary,className:"hero-copy"}),e.jsxs("p",{className:"updated",children:["Updated: ",s.meta.updated]})]}),e.jsx("section",{className:"concept-list-panel","aria-label":"Navigation",children:s.categories.map(n=>{const y=!!g[n.slug];return e.jsxs("div",{className:"category-group",children:[e.jsxs("button",{type:"button",className:"category-toggle","aria-expanded":y,onClick:()=>w(b=>({...b,[n.slug]:!b[n.slug]})),children:[e.jsx("span",{className:"category-toggle-content",children:e.jsx("span",{className:"category-heading-title",children:n.name})}),e.jsx(G,{size:16,className:y?"category-toggle-icon open":"category-toggle-icon","aria-hidden":"true"})]}),y?n.concepts.length>0?e.jsx("div",{className:"concept-sublist","aria-label":`${n.name} concepts`,children:n.concepts.map(b=>e.jsx("a",{href:L(c,b.id),className:u?.id===b.id?"concept-item-link active":"concept-item-link",onClick:()=>d(!1),children:e.jsx("span",{className:"concept-link-title",children:b.title})},b.id))}):e.jsx("p",{className:"concept-preview-empty",children:"No concepts in this category yet."}):null]},n.name)})})]}),e.jsx("section",{className:"reader",children:u?e.jsxs("article",{className:"reader-card",children:[e.jsxs("header",{className:"reader-header",children:[e.jsx("p",{className:"eyebrow",children:u.category}),e.jsx("h2",{children:u.title}),e.jsx("p",{className:"reader-summary",children:u.summary}),e.jsx("div",{className:"tag-row","aria-label":"Tags",children:u.tags.map(n=>e.jsx("span",{className:"tag-pill",children:n},n))}),e.jsx("dl",{className:"reader-meta",children:e.jsxs("div",{children:[e.jsx("dt",{children:"Related"}),e.jsx("dd",{children:u.related.length>0?e.jsx("span",{className:"related-links",children:u.related.map(n=>{const y=s.conceptsById[n];return y?e.jsx("a",{href:L(c,y.id),children:y.title},n):e.jsx("span",{children:n},n)})}):"None"})]})})]}),e.jsx("div",{className:"reader-body",children:e.jsx(re,{content:u.content})})]}):e.jsx("section",{className:"reader-card",children:e.jsxs("div",{className:"reader-header",children:[e.jsx("h2",{children:"No concepts available"}),e.jsx("p",{className:"reader-summary",children:"Add at least one `## Concept:` block to the knowledge file."})]})})})]}),o?e.jsxs("div",{className:"search-dialog-layer",role:"presentation",children:[e.jsx("button",{type:"button",className:"search-dialog-backdrop","aria-label":"Close search",onClick:$}),e.jsxs("section",{className:"search-dialog",role:"dialog","aria-modal":"true","aria-label":"Search concepts",children:[e.jsxs("div",{className:"search-dialog-header",children:[e.jsxs("div",{className:"search-dialog-input-shell",children:[e.jsx(R,{size:17}),e.jsx("input",{ref:f,className:"search-dialog-input",type:"search",value:m,onChange:n=>x(n.target.value),placeholder:"Search"})]}),e.jsx("button",{type:"button",className:"icon-button","aria-label":"Close search",onClick:$,children:e.jsx(se,{size:18})})]}),e.jsx("div",{className:"search-dialog-results","aria-label":"Matching concepts",children:j.length>0?j.map(n=>e.jsxs("a",{href:L(c,n.id),className:u?.id===n.id?"search-result-card active":"search-result-card",onClick:$,children:[e.jsx("span",{className:"search-result-eyebrow",children:n.category}),e.jsx("strong",{className:"search-result-title",children:n.title}),e.jsx("span",{className:"search-result-summary",children:n.summary||"Open this concept to inspect the details."})]},n.id)):e.jsx("p",{className:"empty-state",children:"No concepts match this search yet."})})]})]}):null]})}export{he as DocsShell};
