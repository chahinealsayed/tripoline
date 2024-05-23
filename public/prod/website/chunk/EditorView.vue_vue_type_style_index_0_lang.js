var h=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var p=(t,e,r)=>(h(t,e,"read from private field"),r?r.call(t):e.get(t)),g=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},_=(t,e,r,a)=>(h(t,e,"write to private field"),a?a.call(t,r):e.set(t,r),r);import{u as O}from"./m78c574d5c3843a3d.js";import{m as k,a as x}from"./m6cd080c8112b9076.js";import{d as w,f as S,o as M,l as T,m as z,q as P}from"./mc55b2a42316522d6.js";import{r as B,u as m}from"./m6bdda40d8bd2cf5a.js";const d=(t,e)=>(t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1)+t)),V=(t="id")=>`${t}-${d(1e3,9999)}-${d(1e5,999999)}-${d(1e3,9999)}-${d(1e6,9999999)}-${d(1e3,9999)}-${d(1e7,99999999)}`;function v(t,e=!1){if(typeof t>"u"||t===null)return"";var r=e||typeof e>"u"?"<br />":"<br>";return(t+"").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1"+r+"$2")}function E(t){const{path:e,size:r,viewBox:a,attrs:l,color:o}={size:24,viewBox:"0 0 24 24",attrs:{},...t??{}},s=Object.keys(l).map(n=>`${n}="${l[n]}"`).join(" ");return Object.hasOwn(l,"style")&&l.style.includes("--r")&&(l.style+="transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1));"),`
	<svg
		width="${r}"
		height="${r}"
		viewBox="${a}"
		class="${`${o?"text":"default"}-${o??"color"}`}"
		${s}
	>
		<path d="${e}" style="fill: currentColor" />
	</svg>
	`}var u;class i{constructor(e){g(this,u,void 0);this.block=e,_(this,u,V("block"))}get id(){return`${p(this,u)}-${this.block.id}`}get classes(){return[]}}u=new WeakMap;class q extends i{render(){const{text:e,level:r,alignment:a}=this.block.data;return`
            <h${r} style="text-align: ${a};">${e}</h${r}>
        `}}const C=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));class L extends i{render(){const{text:e,alignment:r}=this.block.data;return`
            <p style="text-align: ${r};">${e}</p>
        `}}const H=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));class A extends i{render(){const{file:e,caption:r}=this.block.data;return`
            <figure class="figure" data-size="${e.size}" data-width="${e.width}" data-height="${e.height}" data-mime="${e.mime}" data-bit="${e.bit}">
                <img src="${e.url}" alt="${r||e.url}" style="max-width: 100%;" >
                ${r&&`<figcaption>${r}</figcaption>`||""}
            </figure>
        `}get classes(){const{withBorder:e,stretched:r,withBackground:a}=this.block.data,l=[];return e&&l.push("image-border"),r&&l.push("image-stretched"),a&&l.push("image-bg"),l}}const I=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));class N extends i{render(){const{html:e}=this.block.data;return`
            ${e}
        `}}const D=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));class F extends i{render(){var l,o,s;const{withHeadings:e,content:r}=this.block.data;let a="";return e==="true"&&(a=`
                <thead>
                    <tr>
                        ${((o=(l=r==null?void 0:r[0])==null?void 0:l.map(n=>`<th>${n}</th>`))==null?void 0:o.join(""))??""}
                    </tr>
                </thead>
            `,r.splice(0,1)),`
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    ${a}
                    <tbody>
                        ${((s=r==null?void 0:r.map(n=>{var c;return`
                            <tr>${((c=n==null?void 0:n.map(f=>`<td>${f}</td>`))==null?void 0:c.join(""))??""}</tr>
                        `}))==null?void 0:s.join(""))??""}
                    </tbody>
                </table>
            </div>
        `}}const G=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));class J extends i{render(){const{service:e,source:r,embed:a,width:l=700,height:o=400,caption:s}=this.block.data;return`
            <div style="display: flex; width: 100%; height: ${o}px; flex-direction: column; overflow: hidden;">
                <iframe src="${a}" width="${l}" height="${o}" style="--width:${l}px;--height:${o}px; flex-grow: 1; border: none; margin: 0; padding: 0;" data-url="${r}"></iframe>
                ${s?`<div class="caption">${s}</div>`:""}
            </div>
        `}get classes(){const{service:e}=this.block.data;return[e]}}const K=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));class Q extends i{render(){return""}}const R=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));class U extends i{render(){const{text:e,caption:r,alignment:a}=this.block.data;return`
            <div class="text" style="text-align:${a}">${e}</div>
            <div class="caption">${r}</div>
        `}}const W=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));class X extends i{render(){const{items:e,style:r}=this.block.data;return j(r==="ordered"?"ol":"ul",e)}}function j(t,e){return`
            <${t}>
                ${e.map(({content:r,items:a=[]})=>`<li><div>${r}</div>${j(t,a)}</li>`).join("")}
            </${t}>
        `}const Y=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));class Z extends i{render(){const{items:e,style:r}=this.block.data,a=r==="ordered"?"ol":"ul";return`
            <${a}>
                ${e.map(({text:l,checked:o})=>`<li class="${o?"checked":""}">${E({path:o?k:x})}&nbsp;${l}</li>`).join("")}
            </${a}>
        `}}const ee=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));class te extends i{render(){const{type:e,message:r}=this.block.data;return`
            <div class="alert alert-${e}">${r}</div>
        `}}const re=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"}));class ae extends i{render(){const{title:e,message:r}=this.block.data;return`
            <div class="alert alert-warning">
                <h3>${e}</h3>
                <p>${r}</p>
            </div>
        `}}const le=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));class oe extends i{render(){const{link:e,meta:{image:{url:r},title:a,description:l,keywords:o,site_name:s}}=this.block.data;return`
            <a href="${e}" target="_blank" class="link-view">
                <div class="image" style="--image: url(${r});"></div>
                <div class="info">
                    <h4 class="title">${a}</h4>
                    <p class="description">${l}</p>
                    <div class="keywords">${o}</div>
                    <div class="site">${s}</div>
                </div>
            </a>
        `}}const se=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));class ne extends i{render(){const{name:e,bio:r,image:a}=this.block.data;return`
            <div class="card">
                <img src="${a.url}" class="card-img-top" >
                <div class="card-body">
                    <h5 class="card-title">${v(e)}</h5>
                    <p class="card-text">${v(r)}</p>
                </div>
            </div>
        `}}const ie=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"})),y=Object.freeze(Object.defineProperty({__proto__:null,Author:ie,alert:re,checklist:ee,delimiter:R,embed:K,header:C,image:I,linkTool:se,list:Y,paragraph:H,quote:W,raw:D,table:G,warning:le},Symbol.toStringTag,{value:"Module"})),b={"call-out":t=>`<div class="tunes tunes-call-out">${t}</div>`,citation:t=>`<div class="tunes tunes-citation">${t}</div>`,details:t=>`<div class="tunes tunes-details">${t}</div>`},de=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),ce=Object.freeze(Object.defineProperty({__proto__:null,textVariant:de},Symbol.toStringTag,{value:"Module"}));function ue(t,e){var r;if(Object.hasOwn(e.tunes,"textVariant")&&Object.hasOwn(ce,"textVariant")){const a=(b==null?void 0:b[(r=e.tunes)==null?void 0:r.textVariant])??null;if(a)return a(t)}return t}function be(t){var r,a;const e=[];return(a=(r=t==null?void 0:t.blocks)==null?void 0:r.forEach)==null||a.call(r,l=>{if(Object.hasOwn(y,l.type)){const o=y[l.type].default,s=new o(l);e.push(`
                <div id="${s.id}" class="block block-${l.type} ${s.classes.join(" ")}">
                    ${ue(s.render(),l)}
                </div>
            `)}}),e.join("")??""}const fe={class:"editor-view-wrapper"},$e=["innerHTML"],ye=w({__name:"EditorView",props:{content:{},rtl:{type:Boolean,default:!1}},setup(t){O(s=>({"9f73b9e2":m(r),"152bfa95":m(a)}));const e=B(null),r=t.rtl?"rtl":"ltr",a=t.rtl?"right !important":"left",l=S(()=>be(t.content)),o=()=>{var n,c;(((c=(n=e.value)==null?void 0:n.querySelectorAll)==null?void 0:c.call(n,".block-embed"))??[]).forEach(f=>{const $=f.querySelector("iframe");$&&$.addEventListener("load",he=>{})})};return M(()=>{o()}),(s,n)=>(T(),z("div",fe,[P("div",{ref_key:"container",ref:e,innerHTML:l.value,class:"editor-view"},null,8,$e)]))}});export{ye as _};
