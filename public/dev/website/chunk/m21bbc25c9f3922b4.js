import{i as H}from"./m62faa42f30679aac.js";import{s as P}from"./m14e047058b3edf4a.js";import{e as G,r as J,m as j,t as $,u as B}from"./m6bdda40d8bd2cf5a.js";import{w as W}from"./mc55b2a42316522d6.js";/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Y=Symbol();var m;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(m||(m={}));const L=typeof window<"u",A=L,k=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function z(e,{autoBom:n=!1}={}){return n&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function T(e,n,o){const t=new XMLHttpRequest;t.open("GET",e),t.responseType="blob",t.onload=function(){x(t.response,n,o)},t.onerror=function(){console.error("could not download file")},t.send()}function R(e){const n=new XMLHttpRequest;n.open("HEAD",e,!1);try{n.send()}catch{}return n.status>=200&&n.status<=299}function w(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{const o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(o)}}const _=typeof navigator=="object"?navigator:{userAgent:""},U=(()=>/Macintosh/.test(_.userAgent)&&/AppleWebKit/.test(_.userAgent)&&!/Safari/.test(_.userAgent))(),x=L?typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype&&!U?q:"msSaveOrOpenBlob"in _?X:K:()=>{};function q(e,n="download",o){const t=document.createElement("a");t.download=n,t.rel="noopener",typeof e=="string"?(t.href=e,t.origin!==location.origin?R(t.href)?T(e,n,o):(t.target="_blank",w(t)):w(t)):(t.href=URL.createObjectURL(e),setTimeout(function(){URL.revokeObjectURL(t.href)},4e4),setTimeout(function(){w(t)},0))}function X(e,n="download",o){if(typeof e=="string")if(R(e))T(e,n,o);else{const t=document.createElement("a");t.href=e,t.target="_blank",setTimeout(function(){w(t)})}else navigator.msSaveOrOpenBlob(z(e,o),n)}function K(e,n,o,t){if(t=t||open("","_blank"),t&&(t.document.title=t.document.body.innerText="downloading..."),typeof e=="string")return T(e,n,o);const r=e.type==="application/octet-stream",s=/constructor/i.test(String(k.HTMLElement))||"safari"in k,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||r&&s||U)&&typeof FileReader<"u"){const a=new FileReader;a.onloadend=function(){let c=a.result;if(typeof c!="string")throw t=null,new Error("Wrong reader.result type");c=i?c:c.replace(/^data:[^;]*;/,"data:attachment/file;"),t?t.location.href=c:location.assign(c),t=null},a.readAsDataURL(e)}else{const a=URL.createObjectURL(e);t?t.location.assign(a):location.href=a,t=null,setTimeout(function(){URL.revokeObjectURL(a)},4e4)}}function l(e,n){const o="🍍 "+e;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(o,n):n==="error"?console.error(o):n==="warn"?console.warn(o):console.log(o)}function E(e){return"_a"in e&&"install"in e}function D(){if(!("clipboard"in navigator))return l("Your browser doesn't support the Clipboard API","error"),!0}function V(e){return e instanceof Error&&e.message.toLowerCase().includes("document is not focused")?(l('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function Q(e){if(!D())try{await navigator.clipboard.writeText(JSON.stringify(e.state.value)),l("Global state copied to clipboard.")}catch(n){if(V(n))return;l("Failed to serialize the state. Check the console for more details.","error"),console.error(n)}}async function Z(e){if(!D())try{M(e,JSON.parse(await navigator.clipboard.readText())),l("Global state pasted from clipboard.")}catch(n){if(V(n))return;l("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(n)}}async function ee(e){try{x(new Blob([JSON.stringify(e.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(n){l("Failed to export the state as JSON. Check the console for more details.","error"),console.error(n)}}let p;function te(){p||(p=document.createElement("input"),p.type="file",p.accept=".json");function e(){return new Promise((n,o)=>{p.onchange=async()=>{const t=p.files;if(!t)return n(null);const r=t.item(0);return n(r?{text:await r.text(),file:r}:null)},p.oncancel=()=>n(null),p.onerror=o,p.click()})}return e}async function ne(e){try{const o=await te()();if(!o)return;const{text:t,file:r}=o;M(e,JSON.parse(t)),l(`Global state imported from "${r.name}".`)}catch(n){l("Failed to import the state from JSON. Check the console for more details.","error"),console.error(n)}}function M(e,n){for(const o in n){const t=e.state.value[o];t&&Object.assign(t,n[o])}}function d(e){return{_custom:{display:e}}}const N="🍍 Pinia (root)",O="_root";function oe(e){return E(e)?{id:O,label:N}:{id:e.$id,label:e.$id}}function re(e){if(E(e)){const o=Array.from(e._s.keys()),t=e._s;return{state:o.map(s=>({editable:!0,key:s,value:e.state.value[s]})),getters:o.filter(s=>t.get(s)._getters).map(s=>{const i=t.get(s);return{editable:!1,key:s,value:i._getters.reduce((a,c)=>(a[c]=i[c],a),{})}})}}const n={state:Object.keys(e.$state).map(o=>({editable:!0,key:o,value:e.$state[o]}))};return e._getters&&e._getters.length&&(n.getters=e._getters.map(o=>({editable:!1,key:o,value:e[o]}))),e._customProperties.size&&(n.customProperties=Array.from(e._customProperties).map(o=>({editable:!0,key:o,value:e[o]}))),n}function se(e){return e?Array.isArray(e)?e.reduce((n,o)=>(n.keys.push(o.key),n.operations.push(o.type),n.oldValue[o.key]=o.oldValue,n.newValue[o.key]=o.newValue,n),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:d(e.type),key:d(e.key),oldValue:e.oldValue,newValue:e.newValue}:{}}function ie(e){switch(e){case m.direct:return"mutation";case m.patchFunction:return"$patch";case m.patchObject:return"$patch";default:return"unknown"}}let y=!0;const b=[],g="pinia:mutations",f="pinia",{assign:ae}=Object,v=e=>"🍍 "+e;function ce(e,n){P({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:b,app:e},o=>{typeof o.now!="function"&&l("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),o.addTimelineLayer({id:g,label:"Pinia 🍍",color:15064968}),o.addInspector({id:f,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{Q(n)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await Z(n),o.sendInspectorTree(f),o.sendInspectorState(f)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{ee(n)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await ne(n),o.sendInspectorTree(f),o.sendInspectorState(f)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:'Reset the state (with "$reset")',action:t=>{const r=n._s.get(t);r?typeof r.$reset!="function"?l(`Cannot reset "${t}" store because it doesn't have a "$reset" method implemented.`,"warn"):(r.$reset(),l(`Store "${t}" reset.`)):l(`Cannot reset "${t}" store because it wasn't found.`,"warn")}}]}),o.on.inspectComponent((t,r)=>{const s=t.componentInstance&&t.componentInstance.proxy;if(s&&s._pStores){const i=t.componentInstance.proxy._pStores;Object.values(i).forEach(a=>{t.instanceData.state.push({type:v(a.$id),key:"state",editable:!0,value:a._isOptionsAPI?{_custom:{value:$(a.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>a.$reset()}]}}:Object.keys(a.$state).reduce((c,u)=>(c[u]=a.$state[u],c),{})}),a._getters&&a._getters.length&&t.instanceData.state.push({type:v(a.$id),key:"getters",editable:!1,value:a._getters.reduce((c,u)=>{try{c[u]=a[u]}catch(S){c[u]=S}return c},{})})})}}),o.on.getInspectorTree(t=>{if(t.app===e&&t.inspectorId===f){let r=[n];r=r.concat(Array.from(n._s.values())),t.rootNodes=(t.filter?r.filter(s=>"$id"in s?s.$id.toLowerCase().includes(t.filter.toLowerCase()):N.toLowerCase().includes(t.filter.toLowerCase())):r).map(oe)}}),o.on.getInspectorState(t=>{if(t.app===e&&t.inspectorId===f){const r=t.nodeId===O?n:n._s.get(t.nodeId);if(!r)return;r&&(t.state=re(r))}}),o.on.editInspectorState((t,r)=>{if(t.app===e&&t.inspectorId===f){const s=t.nodeId===O?n:n._s.get(t.nodeId);if(!s)return l(`store "${t.nodeId}" not found`,"error");const{path:i}=t;E(s)?i.unshift("state"):(i.length!==1||!s._customProperties.has(i[0])||i[0]in s.$state)&&i.unshift("$state"),y=!1,t.set(s,i,t.state.value),y=!0}}),o.on.editComponentState(t=>{if(t.type.startsWith("🍍")){const r=t.type.replace(/^🍍\s*/,""),s=n._s.get(r);if(!s)return l(`store "${r}" not found`,"error");const{path:i}=t;if(i[0]!=="state")return l(`Invalid path for store "${r}":
${i}
Only state can be modified.`);i[0]="$state",y=!1,t.set(s,i,t.state.value),y=!0}})})}function le(e,n){b.includes(v(n.$id))||b.push(v(n.$id)),P({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:b,app:e,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},o=>{const t=typeof o.now=="function"?o.now.bind(o):Date.now;n.$onAction(({after:i,onError:a,name:c,args:u})=>{const S=F++;o.addTimelineEvent({layerId:g,event:{time:t(),title:"🛫 "+c,subtitle:"start",data:{store:d(n.$id),action:d(c),args:u},groupId:S}}),i(I=>{h=void 0,o.addTimelineEvent({layerId:g,event:{time:t(),title:"🛬 "+c,subtitle:"end",data:{store:d(n.$id),action:d(c),args:u,result:I},groupId:S}})}),a(I=>{h=void 0,o.addTimelineEvent({layerId:g,event:{time:t(),logType:"error",title:"💥 "+c,subtitle:"end",data:{store:d(n.$id),action:d(c),args:u,error:I},groupId:S}})})},!0),n._customProperties.forEach(i=>{W(()=>B(n[i]),(a,c)=>{o.notifyComponentUpdate(),o.sendInspectorState(f),y&&o.addTimelineEvent({layerId:g,event:{time:t(),title:"Change",subtitle:i,data:{newValue:a,oldValue:c},groupId:h}})},{deep:!0})}),n.$subscribe(({events:i,type:a},c)=>{if(o.notifyComponentUpdate(),o.sendInspectorState(f),!y)return;const u={time:t(),title:ie(a),data:ae({store:d(n.$id)},se(i)),groupId:h};a===m.patchFunction?u.subtitle="⤵️":a===m.patchObject?u.subtitle="🧩":i&&!Array.isArray(i)&&(u.subtitle=i.type),i&&(u.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:i}}),o.addTimelineEvent({layerId:g,event:u})},{detached:!0,flush:"sync"});const r=n._hotUpdate;n._hotUpdate=j(i=>{r(i),o.addTimelineEvent({layerId:g,event:{time:t(),title:"🔥 "+n.$id,subtitle:"HMR update",data:{store:d(n.$id),info:d("HMR update")}}}),o.notifyComponentUpdate(),o.sendInspectorTree(f),o.sendInspectorState(f)});const{$dispose:s}=n;n.$dispose=()=>{s(),o.notifyComponentUpdate(),o.sendInspectorTree(f),o.sendInspectorState(f),o.getSettings().logStoreChanges&&l(`Disposed "${n.$id}" store 🗑`)},o.notifyComponentUpdate(),o.sendInspectorTree(f),o.sendInspectorState(f),o.getSettings().logStoreChanges&&l(`"${n.$id}" store installed 🆕`)})}let F=0,h;function C(e,n,o){const t=n.reduce((r,s)=>(r[s]=$(e)[s],r),{});for(const r in t)e[r]=function(){const s=F,i=o?new Proxy(e,{get(...c){return h=s,Reflect.get(...c)},set(...c){return h=s,Reflect.set(...c)}}):e;h=s;const a=t[r].apply(i,arguments);return h=void 0,a}}function ue({app:e,store:n,options:o}){if(n.$id.startsWith("__hot:"))return;n._isOptionsAPI=!!o.state,C(n,Object.keys(o.actions),n._isOptionsAPI);const t=n._hotUpdate;$(n)._hotUpdate=function(r){t.apply(this,arguments),C(n,Object.keys(r._hmrPayload.actions),!!n._isOptionsAPI)},le(e,n)}function ge(){const e=G(!0),n=e.run(()=>J({}));let o=[],t=[];const r=j({install(s){r._a=s,s.provide(Y,r),s.config.globalProperties.$pinia=r,A&&ce(s,r),t.forEach(i=>o.push(i)),t=[]},use(s){return!this._a&&!H?t.push(s):o.push(s),this},_p:o,_a:null,_e:e,_s:new Map,state:n});return A&&typeof Proxy<"u"&&r.use(ue),r}export{ge as c};
//# sourceMappingURL=m21bbc25c9f3922b4.js.map
