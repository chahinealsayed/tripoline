import{g as _}from"./m0006e5d5f2f1d6ce.js";var T={exports:{}};(function(M,z){(function(b,y){M.exports=y()})(window,function(){return function(b){var y={};function a(n){if(y[n])return y[n].exports;var o=y[n]={i:n,l:!1,exports:{}};return b[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=b,a.c=y,a.d=function(n,o,h){a.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:h})},a.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,o){if(1&o&&(n=a(n)),8&o||4&o&&typeof n=="object"&&n&&n.__esModule)return n;var h=Object.create(null);if(a.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:n}),2&o&&typeof n!="string")for(var p in n)a.d(h,p,(function(s){return n[s]}).bind(null,p));return h},a.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(o,"a",o),o},a.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},a.p="/",a(a.s=5)}([function(b,y,a){var n=a(1);typeof n=="string"&&(n=[[b.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(3)(n,o),n.locals&&(b.exports=n.locals)},function(b,y,a){(b.exports=a(2)(!1)).push([b.i,`.ce-rawtool__textarea {
  min-height: 200px;
  resize: vertical;
  border-radius: 8px;
  border: 0;
  background-color: #1e2128;
  font-family: Menlo, Monaco, Consolas, Courier New, monospace;
  font-size: 12px;
  line-height: 1.6;
  letter-spacing: -0.2px;
  color: #a1a7b6;
  overscroll-behavior: contain;
}
`,""])},function(b,y){b.exports=function(a){var n=[];return n.toString=function(){return this.map(function(o){var h=function(p,s){var f=p[1]||"",l=p[3];if(!l)return f;if(s&&typeof btoa=="function"){var g=(w=l,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(w))))+" */"),m=l.sources.map(function(L){return"/*# sourceURL="+l.sourceRoot+L+" */"});return[f].concat(m).concat([g]).join(`
`)}var w;return[f].join(`
`)}(o,a);return o[2]?"@media "+o[2]+"{"+h+"}":h}).join("")},n.i=function(o,h){typeof o=="string"&&(o=[[null,o,""]]);for(var p={},s=0;s<this.length;s++){var f=this[s][0];typeof f=="number"&&(p[f]=!0)}for(s=0;s<o.length;s++){var l=o[s];typeof l[0]=="number"&&p[l[0]]||(h&&!l[2]?l[2]=h:h&&(l[2]="("+l[2]+") and ("+h+")"),n.push(l))}},n}},function(b,y,a){var n,o,h={},p=(n=function(){return window&&document&&document.all&&!window.atob},function(){return o===void 0&&(o=n.apply(this,arguments)),o}),s=function(e){return document.querySelector(e)},f=function(e){var t={};return function(r){if(typeof r=="function")return r();if(t[r]===void 0){var i=s.call(this,r);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch{i=null}t[r]=i}return t[r]}}(),l=null,g=0,m=[],w=a(4);function L(e,t){for(var r=0;r<e.length;r++){var i=e[r],c=h[i.id];if(c){c.refs++;for(var u=0;u<c.parts.length;u++)c.parts[u](i.parts[u]);for(;u<i.parts.length;u++)c.parts.push(R(i.parts[u],t))}else{var v=[];for(u=0;u<i.parts.length;u++)v.push(R(i.parts[u],t));h[i.id]={id:i.id,refs:1,parts:v}}}}function S(e,t){for(var r=[],i={},c=0;c<e.length;c++){var u=e[c],v=t.base?u[0]+t.base:u[0],d={css:u[1],media:u[2],sourceMap:u[3]};i[v]?i[v].parts.push(d):r.push(i[v]={id:v,parts:[d]})}return r}function j(e,t){var r=f(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=m[m.length-1];if(e.insertAt==="top")i?i.nextSibling?r.insertBefore(t,i.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),m.push(t);else if(e.insertAt==="bottom")r.appendChild(t);else{if(typeof e.insertAt!="object"||!e.insertAt.before)throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);var c=f(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,c)}}function k(e){if(e.parentNode===null)return!1;e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function O(e){var t=document.createElement("style");return e.attrs.type===void 0&&(e.attrs.type="text/css"),E(t,e.attrs),j(e,t),t}function E(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function R(e,t){var r,i,c,u;if(t.transform&&e.css){if(!(u=t.transform(e.css)))return function(){};e.css=u}if(t.singleton){var v=g++;r=l||(l=O(t)),i=U.bind(null,r,v,!1),c=U.bind(null,r,v,!0)}else e.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(r=function(d){var x=document.createElement("link");return d.attrs.type===void 0&&(d.attrs.type="text/css"),d.attrs.rel="stylesheet",E(x,d.attrs),j(d,x),x}(t),i=D.bind(null,r,t),c=function(){k(r),r.href&&URL.revokeObjectURL(r.href)}):(r=O(t),i=I.bind(null,r),c=function(){k(r)});return i(e),function(d){if(d){if(d.css===e.css&&d.media===e.media&&d.sourceMap===e.sourceMap)return;i(e=d)}else c()}}b.exports=function(e,t){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs=typeof t.attrs=="object"?t.attrs:{},t.singleton||typeof t.singleton=="boolean"||(t.singleton=p()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=S(e,t);return L(r,t),function(i){for(var c=[],u=0;u<r.length;u++){var v=r[u];(d=h[v.id]).refs--,c.push(d)}for(i&&L(S(i,t),t),u=0;u<c.length;u++){var d;if((d=c[u]).refs===0){for(var x=0;x<d.parts.length;x++)d.parts[x]();delete h[d.id]}}}};var C,A=(C=[],function(e,t){return C[e]=t,C.filter(Boolean).join(`
`)});function U(e,t,r,i){var c=r?"":i.css;if(e.styleSheet)e.styleSheet.cssText=A(t,c);else{var u=document.createTextNode(c),v=e.childNodes;v[t]&&e.removeChild(v[t]),v.length?e.insertBefore(u,v[t]):e.appendChild(u)}}function I(e,t){var r=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function D(e,t,r){var i=r.css,c=r.sourceMap,u=t.convertToAbsoluteUrls===void 0&&c;(t.convertToAbsoluteUrls||u)&&(i=w(i)),c&&(i+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */");var v=new Blob([i],{type:"text/css"}),d=e.href;e.href=URL.createObjectURL(v),d&&URL.revokeObjectURL(d)}},function(b,y){b.exports=function(a){var n=typeof window<"u"&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!a||typeof a!="string")return a;var o=n.protocol+"//"+n.host,h=o+n.pathname.replace(/\/[^\/]*$/,"/");return a.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(p,s){var f,l=s.trim().replace(/^"(.*)"$/,function(g,m){return m}).replace(/^'(.*)'$/,function(g,m){return m});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(l)?p:(f=l.indexOf("//")===0?l:l.indexOf("/")===0?o+l:h+l.replace(/^\.\//,""),"url("+JSON.stringify(f)+")")})}},function(b,y,a){a.r(y),a.d(y,"default",function(){return h}),a(0);function n(p,s){for(var f=0;f<s.length;f++){var l=s[f];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(p,l.key,l)}}function o(p,s,f){return s&&n(p.prototype,s),f&&n(p,f),p}/**
 * Raw HTML Tool for CodeX Editor
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */var h=function(){function p(s){var f=s.data,l=s.config,g=s.api,m=s.readOnly;(function(w,L){if(!(w instanceof L))throw new TypeError("Cannot call a class as a function")})(this,p),this.api=g,this.readOnly=m,this.placeholder=l.placeholder||p.DEFAULT_PLACEHOLDER,this.CSS={baseClass:this.api.styles.block,input:this.api.styles.input,wrapper:"ce-rawtool",textarea:"ce-rawtool__textarea"},this.data={html:f.html||""},this.textarea=null,this.resizeDebounce=null}return o(p,null,[{key:"isReadOnlySupported",get:function(){return!0}},{key:"displayInToolbox",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!0}},{key:"toolbox",get:function(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.6954 5C17.912 5 18.8468 6.07716 18.6755 7.28165L17.426 16.0659C17.3183 16.8229 16.7885 17.4522 16.061 17.6873L12.6151 18.8012C12.2152 18.9304 11.7848 18.9304 11.3849 18.8012L7.93898 17.6873C7.21148 17.4522 6.6817 16.8229 6.57403 16.0659L5.32454 7.28165C5.15322 6.07716 6.088 5 7.30461 5H16.6954Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8.4H9L9.42857 11.7939H14.5714L14.3571 13.2788L14.1429 14.7636L12 15.4L9.85714 14.7636L9.77143 14.3394"/></svg>',title:"Raw HTML"}}}]),o(p,[{key:"render",value:function(){var s=this,f=document.createElement("div");return this.textarea=document.createElement("textarea"),f.classList.add(this.CSS.baseClass,this.CSS.wrapper),this.textarea.classList.add(this.CSS.textarea,this.CSS.input),this.textarea.textContent=this.data.html,this.textarea.placeholder=this.placeholder,this.readOnly?this.textarea.disabled=!0:this.textarea.addEventListener("input",function(){s.onInput()}),f.appendChild(this.textarea),setTimeout(function(){s.resize()},100),f}},{key:"save",value:function(s){return{html:s.querySelector("textarea").value}}},{key:"onInput",value:function(){var s=this;this.resizeDebounce&&clearTimeout(this.resizeDebounce),this.resizeDebounce=setTimeout(function(){s.resize()},200)}},{key:"resize",value:function(){this.textarea.style.height="auto",this.textarea.style.height=this.textarea.scrollHeight+"px"}}],[{key:"DEFAULT_PLACEHOLDER",get:function(){return"Enter HTML code"}},{key:"sanitize",get:function(){return{html:!0}}}]),p}()}]).default})})(T);var B=T.exports;const N=_(B);export{N as R};