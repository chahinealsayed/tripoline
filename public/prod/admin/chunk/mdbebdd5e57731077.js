import{g as D}from"./m0006e5d5f2f1d6ce.js";var _={exports:{}};(function(I,Y){(function(m,b){I.exports=b()})(window,function(){return function(m){var b={};function d(s){if(b[s])return b[s].exports;var l=b[s]={i:s,l:!1,exports:{}};return m[s].call(l.exports,l,l.exports,d),l.l=!0,l.exports}return d.m=m,d.c=b,d.d=function(s,l,u){d.o(s,l)||Object.defineProperty(s,l,{enumerable:!0,get:u})},d.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},d.t=function(s,l){if(1&l&&(s=d(s)),8&l||4&l&&typeof s=="object"&&s&&s.__esModule)return s;var u=Object.create(null);if(d.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:s}),2&l&&typeof s!="string")for(var v in s)d.d(u,v,(function(w){return s[w]}).bind(null,v));return u},d.n=function(s){var l=s&&s.__esModule?function(){return s.default}:function(){return s};return d.d(l,"a",l),l},d.o=function(s,l){return Object.prototype.hasOwnProperty.call(s,l)},d.p="/",d(d.s=6)}([function(m,b){m.exports='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><rect width="18" height="18" fill="#F4F5F7" rx="2"></rect><circle cx="11.5" cy="6.5" r="1.5"></circle><circle cx="11.5" cy="11.5" r="1.5"></circle><circle cx="6.5" cy="6.5" r="1.5"></circle><circle cx="6.5" cy="11.5" r="1.5"></circle></svg>'},function(m,b,d){var s=d(2);typeof s=="string"&&(s=[[m.i,s,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};d(4)(s,l),s.locals&&(m.exports=s.locals)},function(m,b,d){(m.exports=d(3)(!1)).push([m.i,'.tc-wrap{--color-background:#f9f9fb;--color-text-secondary:#7b7e89;--color-border:#e8e8eb;--cell-size:34px;--toolbox-icon-size:18px;--toolbox-padding:6px;--toolbox-aiming-field-size:calc(var(--toolbox-icon-size) + var(--toolbox-padding)*2);border-left:0;position:relative;height:100%;width:100%;margin-top:var(--toolbox-icon-size);box-sizing:border-box;display:grid;grid-template-columns:calc(100% - var(--cell-size)) var(--cell-size);}.tc-wrap--readonly{grid-template-columns:100% var(--cell-size)}.tc-wrap svg{vertical-align:top}@media print{.tc-wrap{border-left-color:var(--color-border);border-left-style:solid;border-left-width:1px;grid-template-columns:100% var(--cell-size)}}@media print{.tc-wrap .tc-row:after{display:none}}.tc-table{position:relative;width:100%;height:100%;display:grid;font-size:14px;border-top:1px solid var(--color-border);line-height:1.4;}.tc-table:after{width:calc(var(--cell-size));height:100%;left:calc(var(--cell-size)*-1);top:0}.tc-table:after,.tc-table:before{position:absolute;content:""}.tc-table:before{width:100%;height:var(--toolbox-aiming-field-size);top:calc(var(--toolbox-aiming-field-size)*-1);left:0}.tc-table--heading .tc-row:first-child{font-weight:600;border-bottom:2px solid var(--color-border);}.tc-table--heading .tc-row:first-child [contenteditable]:empty:before{content:attr(heading);color:var(--color-text-secondary)}.tc-table--heading .tc-row:first-child:after{bottom:-2px;border-bottom:2px solid var(--color-border)}.tc-add-column,.tc-add-row{display:flex;color:var(--color-text-secondary)}@media print{.tc-add{display:none}}.tc-add-column{padding:4px 0;justify-content:center;border-top:1px solid var(--color-border);}@media print{.tc-add-column{display:none}}.tc-add-row{height:var(--cell-size);align-items:center;padding-left:4px;position:relative;}.tc-add-row:before{content:"";position:absolute;right:calc(var(--cell-size)*-1);width:var(--cell-size);height:100%}@media print{.tc-add-row{display:none}}.tc-add-column,.tc-add-row{transition:0s;cursor:pointer;will-change:background-color;}.tc-add-column:hover,.tc-add-row:hover{transition:background-color .1s ease;background-color:var(--color-background)}.tc-add-row{margin-top:1px;}.tc-add-row:hover:before{transition:.1s;background-color:var(--color-background)}.tc-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(10px,1fr));position:relative;border-bottom:1px solid var(--color-border);}.tc-row:after{content:"";pointer-events:none;position:absolute;width:var(--cell-size);height:100%;bottom:-1px;right:calc(var(--cell-size)*-1);border-bottom:1px solid var(--color-border)}.tc-row--selected{background:var(--color-background)}.tc-row--selected:after{background:var(--color-background)}.tc-cell{border-right:1px solid var(--color-border);padding:6px 12px;overflow:hidden;outline:none;line-break:normal;}.tc-cell--selected{background:var(--color-background)}.tc-wrap--readonly .tc-row:after{display:none}.tc-toolbox{--toolbox-padding:6px;--popover-margin:30px;--toggler-click-zone-size:30px;--toggler-dots-color:#7b7e89;--toggler-dots-color-hovered:#1d202b;position:absolute;cursor:pointer;z-index:1;opacity:0;transition:opacity .1s;will-change:left,opacity;}.tc-toolbox--column{top:calc(var(--toggler-click-zone-size)*-1);transform:translateX(calc(var(--toggler-click-zone-size)*-1/2));will-change:left,opacity}.tc-toolbox--row{left:calc(var(--popover-margin)*-1);transform:translateY(calc(var(--toggler-click-zone-size)*-1/2));margin-top:-1px;will-change:top,opacity}.tc-toolbox--showed{opacity:1}.tc-toolbox .tc-popover{position:absolute;top:0;left:var(--popover-margin)}.tc-toolbox__toggler{display:flex;align-items:center;justify-content:center;width:var(--toggler-click-zone-size);height:var(--toggler-click-zone-size);color:var(--toggler-dots-color);opacity:0;transition:opacity .15s ease;will-change:opacity;}.tc-toolbox__toggler:hover{color:var(--toggler-dots-color-hovered)}.tc-toolbox__toggler svg{fill:currentColor}.tc-wrap:hover .tc-toolbox__toggler{opacity:1}.tc-settings .cdx-settings-button{width:50%;margin:0}.tc-popover{--color-border:#eaeaea;--color-background:#fff;--color-background-hover:rgba(232,232,235,0.49);--color-background-confirm:#e24a4a;--color-background-confirm-hover:#d54040;--color-text-confirm:#fff;background:var(--color-background);border:1px solid var(--color-border);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;padding:6px;display:none;will-change:opacity,transform;}.tc-popover--opened{display:block;animation:menuShowing .1s cubic-bezier(.215,.61,.355,1) forwards}.tc-popover__item{display:flex;align-items:center;padding:2px 14px 2px 2px;border-radius:5px;cursor:pointer;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;user-select:none;}.tc-popover__item:hover{background:var(--color-background-hover)}.tc-popover__item:not(:last-of-type){margin-bottom:2px}.tc-popover__item-icon{display:inline-flex;width:26px;height:26px;align-items:center;justify-content:center;background:var(--color-background);border-radius:5px;border:1px solid var(--color-border);margin-right:8px}.tc-popover__item-label{line-height:22px;font-size:14px;font-weight:500}.tc-popover__item--confirm{background:var(--color-background-confirm);color:var(--color-text-confirm);}.tc-popover__item--confirm:hover{background-color:var(--color-background-confirm-hover)}.tc-popover__item--confirm .tc-popover__item-icon{background:var(--color-background-confirm);border-color:rgba(0,0,0,.1);}.tc-popover__item--confirm .tc-popover__item-icon svg{transition:transform .2s ease-in;transform:rotate(90deg) scale(1.2)}.tc-popover__item--hidden{display:none}@keyframes menuShowing{0%{opacity:0;transform:translateY(-8px) scale(.9)}70%{opacity:1;transform:translateY(2px)}to{transform:translateY(0)}}',""])},function(m,b){m.exports=function(d){var s=[];return s.toString=function(){return this.map(function(l){var u=function(v,w){var p=v[1]||"",f=v[3];if(!f)return p;if(w&&typeof btoa=="function"){var k=(R=f,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(R))))+" */"),g=f.sources.map(function(S){return"/*# sourceURL="+f.sourceRoot+S+" */"});return[p].concat(g).concat([k]).join(`
`)}var R;return[p].join(`
`)}(l,d);return l[2]?"@media "+l[2]+"{"+u+"}":u}).join("")},s.i=function(l,u){typeof l=="string"&&(l=[[null,l,""]]);for(var v={},w=0;w<this.length;w++){var p=this[w][0];typeof p=="number"&&(v[p]=!0)}for(w=0;w<l.length;w++){var f=l[w];typeof f[0]=="number"&&v[f[0]]||(u&&!f[2]?f[2]=u:u&&(f[2]="("+f[2]+") and ("+u+")"),s.push(f))}},s}},function(m,b,d){var s,l,u={},v=(s=function(){return window&&document&&document.all&&!window.atob},function(){return l===void 0&&(l=s.apply(this,arguments)),l}),w=function(r,e){return e?e.querySelector(r):document.querySelector(r)},p=function(r){var e={};return function(t,o){if(typeof t=="function")return t();if(e[t]===void 0){var i=w.call(this,t,o);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch{i=null}e[t]=i}return e[t]}}(),f=null,k=0,g=[],R=d(5);function S(r,e){for(var t=0;t<r.length;t++){var o=r[t],i=u[o.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](o.parts[n]);for(;n<o.parts.length;n++)i.parts.push(L(o.parts[n],e))}else{var c=[];for(n=0;n<o.parts.length;n++)c.push(L(o.parts[n],e));u[o.id]={id:o.id,refs:1,parts:c}}}}function T(r,e){for(var t=[],o={},i=0;i<r.length;i++){var n=r[i],c=e.base?n[0]+e.base:n[0],a={css:n[1],media:n[2],sourceMap:n[3]};o[c]?o[c].parts.push(a):t.push(o[c]={id:c,parts:[a]})}return t}function z(r,e){var t=p(r.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=g[g.length-1];if(r.insertAt==="top")o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),g.push(e);else if(r.insertAt==="bottom")t.appendChild(e);else{if(typeof r.insertAt!="object"||!r.insertAt.before)throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);var i=p(r.insertAt.before,t);t.insertBefore(e,i)}}function O(r){if(r.parentNode===null)return!1;r.parentNode.removeChild(r);var e=g.indexOf(r);e>=0&&g.splice(e,1)}function C(r){var e=document.createElement("style");if(r.attrs.type===void 0&&(r.attrs.type="text/css"),r.attrs.nonce===void 0){var t=function(){return d.nc}();t&&(r.attrs.nonce=t)}return M(e,r.attrs),z(r,e),e}function M(r,e){Object.keys(e).forEach(function(t){r.setAttribute(t,e[t])})}function L(r,e){var t,o,i,n;if(e.transform&&r.css){if(!(n=typeof e.transform=="function"?e.transform(r.css):e.transform.default(r.css)))return function(){};r.css=n}if(e.singleton){var c=k++;t=f||(f=C(e)),o=H.bind(null,t,c,!1),i=H.bind(null,t,c,!0)}else r.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(t=function(a){var h=document.createElement("link");return a.attrs.type===void 0&&(a.attrs.type="text/css"),a.attrs.rel="stylesheet",M(h,a.attrs),z(a,h),h}(e),o=j.bind(null,t,e),i=function(){O(t),t.href&&URL.revokeObjectURL(t.href)}):(t=C(e),o=E.bind(null,t),i=function(){O(t)});return o(r),function(a){if(a){if(a.css===r.css&&a.media===r.media&&a.sourceMap===r.sourceMap)return;o(r=a)}else i()}}m.exports=function(r,e){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs=typeof e.attrs=="object"?e.attrs:{},e.singleton||typeof e.singleton=="boolean"||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=T(r,e);return S(t,e),function(o){for(var i=[],n=0;n<t.length;n++){var c=t[n];(a=u[c.id]).refs--,i.push(a)}for(o&&S(T(o,e),e),n=0;n<i.length;n++){var a;if((a=i[n]).refs===0){for(var h=0;h<a.parts.length;h++)a.parts[h]();delete u[a.id]}}}};var x,A=(x=[],function(r,e){return x[r]=e,x.filter(Boolean).join(`
`)});function H(r,e,t,o){var i=t?"":o.css;if(r.styleSheet)r.styleSheet.cssText=A(e,i);else{var n=document.createTextNode(i),c=r.childNodes;c[e]&&r.removeChild(c[e]),c.length?r.insertBefore(n,c[e]):r.appendChild(n)}}function E(r,e){var t=e.css,o=e.media;if(o&&r.setAttribute("media",o),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}function j(r,e,t){var o=t.css,i=t.sourceMap,n=e.convertToAbsoluteUrls===void 0&&i;(e.convertToAbsoluteUrls||n)&&(o=R(o)),i&&(o+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var c=new Blob([o],{type:"text/css"}),a=r.href;r.href=URL.createObjectURL(c),a&&URL.revokeObjectURL(a)}},function(m,b){m.exports=function(d){var s=typeof window<"u"&&window.location;if(!s)throw new Error("fixUrls requires window.location");if(!d||typeof d!="string")return d;var l=s.protocol+"//"+s.host,u=l+s.pathname.replace(/\/[^\/]*$/,"/");return d.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(v,w){var p,f=w.trim().replace(/^"(.*)"$/,function(k,g){return g}).replace(/^'(.*)'$/,function(k,g){return g});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(f)?v:(p=f.indexOf("//")===0?f:f.indexOf("/")===0?l+f:u+f.replace(/^\.\//,""),"url("+JSON.stringify(p)+")")})}},function(m,b,d){function s(r,e,t={}){const o=document.createElement(r);Array.isArray(e)?o.classList.add(...e):e&&o.classList.add(e);for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i]);return o}function l(r){const e=r.getBoundingClientRect();return{y1:Math.floor(e.top+window.pageYOffset),x1:Math.floor(e.left+window.pageXOffset),x2:Math.floor(e.right+window.pageXOffset),y2:Math.floor(e.bottom+window.pageYOffset)}}function u(r,e){const t=l(r),o=l(e);return{fromTopBorder:o.y1-t.y1,fromLeftBorder:o.x1-t.x1,fromRightBorder:t.x2-o.x2,fromBottomBorder:t.y2-o.y2}}function v(r,e){return e.parentNode.insertBefore(r,e)}function w(r,e=!0){const t=document.createRange(),o=window.getSelection();t.selectNodeContents(r),t.collapse(e),o.removeAllRanges(),o.addRange(t)}d.r(b);class p{constructor({items:e}){this.items=e,this.wrapper=void 0,this.itemEls=[]}static get CSS(){return{popover:"tc-popover",popoverOpened:"tc-popover--opened",item:"tc-popover__item",itemHidden:"tc-popover__item--hidden",itemConfirmState:"tc-popover__item--confirm",itemIcon:"tc-popover__item-icon",itemLabel:"tc-popover__item-label"}}render(){return this.wrapper=s("div",p.CSS.popover),this.items.forEach((e,t)=>{const o=s("div",p.CSS.item),i=s("div",p.CSS.itemIcon,{innerHTML:e.icon}),n=s("div",p.CSS.itemLabel,{textContent:e.label});o.dataset.index=t,o.appendChild(i),o.appendChild(n),this.wrapper.appendChild(o),this.itemEls.push(o)}),this.wrapper.addEventListener("click",e=>{this.popoverClicked(e)}),this.wrapper}popoverClicked(e){const t=e.target.closest("."+p.CSS.item);if(!t)return;const o=t.dataset.index,i=this.items[o];!i.confirmationRequired||this.hasConfirmationState(t)?i.onClick():this.setConfirmationState(t)}setConfirmationState(e){e.classList.add(p.CSS.itemConfirmState)}clearConfirmationState(e){e.classList.remove(p.CSS.itemConfirmState)}hasConfirmationState(e){return e.classList.contains(p.CSS.itemConfirmState)}get opened(){return this.wrapper.classList.contains(p.CSS.popoverOpened)}open(){this.items.forEach((e,t)=>{typeof e.hideIf=="function"&&this.itemEls[t].classList.toggle(p.CSS.itemHidden,e.hideIf())}),this.wrapper.classList.add(p.CSS.popoverOpened)}close(){this.wrapper.classList.remove(p.CSS.popoverOpened),this.itemEls.forEach(e=>{this.clearConfirmationState(e)})}}var f=d(0),k=d.n(f);class g{constructor({api:e,items:t,onOpen:o,onClose:i,cssModifier:n=""}){this.api=e,this.items=t,this.onOpen=o,this.onClose=i,this.cssModifier=n,this.popover=null,this.wrapper=this.createToolbox()}static get CSS(){return{toolbox:"tc-toolbox",toolboxShowed:"tc-toolbox--showed",toggler:"tc-toolbox__toggler"}}get element(){return this.wrapper}createToolbox(){const e=s("div",[g.CSS.toolbox,this.cssModifier?`${g.CSS.toolbox}--${this.cssModifier}`:""]);e.dataset.mutationFree="true";const t=this.createPopover(),o=this.createToggler();return e.appendChild(o),e.appendChild(t),e}createToggler(){const e=s("div",g.CSS.toggler,{innerHTML:k.a});return e.addEventListener("click",()=>{this.togglerClicked()}),e}createPopover(){return this.popover=new p({items:this.items}),this.popover.render()}togglerClicked(){this.popover.opened?(this.popover.close(),this.onClose()):(this.popover.open(),this.onOpen())}show(e){const t=e();Object.entries(t).forEach(([o,i])=>{this.wrapper.style[o]=i}),this.wrapper.classList.add(g.CSS.toolboxShowed)}hide(){this.popover.close(),this.wrapper.classList.remove(g.CSS.toolboxShowed)}}const R='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>',S='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>',T="tc-wrap",z="tc-wrap--readonly",O="tc-table",C="tc-row",M="tc-table--heading",L="tc-row--selected",x="tc-cell",A="tc-cell--selected",H="tc-add-row",E="tc-add-column";class j{constructor(e,t,o,i){this.readOnly=e,this.api=t,this.data=o,this.config=i,this.wrapper=null,this.table=null,this.toolboxColumn=this.createColumnToolbox(),this.toolboxRow=this.createRowToolbox(),this.createTableWrapper(),this.hoveredRow=0,this.hoveredColumn=0,this.selectedRow=0,this.selectedColumn=0,this.tunes={withHeadings:!1},this.resize(),this.fill(),this.focusedCell={row:0,column:0},this.documentClicked=n=>{const c=n.target.closest("."+O)!==null,a=n.target.closest("."+T)===null;(c||a)&&this.hideToolboxes();const h=n.target.closest("."+H),y=n.target.closest("."+E);h&&h.parentNode===this.wrapper?(this.addRow(void 0,!0),this.hideToolboxes()):y&&y.parentNode===this.wrapper&&(this.addColumn(void 0,!0),this.hideToolboxes())},this.readOnly||this.bindEvents()}getWrapper(){return this.wrapper}bindEvents(){document.addEventListener("click",this.documentClicked),this.table.addEventListener("mousemove",function(e,t){let o=0;return function(...i){const n=new Date().getTime();if(!(n-o<e))return o=n,t(...i)}}(150,e=>this.onMouseMoveInTable(e)),{passive:!0}),this.table.onkeypress=e=>this.onKeyPressListener(e),this.table.addEventListener("keydown",e=>this.onKeyDownListener(e)),this.table.addEventListener("focusin",e=>this.focusInTableListener(e))}createColumnToolbox(){return new g({api:this.api,cssModifier:"column",items:[{label:this.api.i18n.t("Add column to left"),icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.9167 14.9167L11.5833 18.25M11.5833 18.25L8.25 14.9167M11.5833 18.25L11.5833 10.0833C11.5833 9.19928 11.9345 8.35143 12.5596 7.72631C13.1848 7.10119 14.0326 6.75 14.9167 6.75"/></svg>',onClick:()=>{this.addColumn(this.selectedColumn,!0),this.hideToolboxes()}},{label:this.api.i18n.t("Add column to right"),icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.13333 14.9167L12.4667 18.25M12.4667 18.25L15.8 14.9167M12.4667 18.25L12.4667 10.0833C12.4667 9.19928 12.1155 8.35143 11.4904 7.72631C10.8652 7.10119 10.0174 6.75 9.13333 6.75"/></svg>',onClick:()=>{this.addColumn(this.selectedColumn+1,!0),this.hideToolboxes()}},{label:this.api.i18n.t("Delete column"),icon:R,hideIf:()=>this.numberOfColumns===1,confirmationRequired:!0,onClick:()=>{this.deleteColumn(this.selectedColumn),this.hideToolboxes()}}],onOpen:()=>{this.selectColumn(this.hoveredColumn),this.hideRowToolbox()},onClose:()=>{this.unselectColumn()}})}createRowToolbox(){return new g({api:this.api,cssModifier:"row",items:[{label:this.api.i18n.t("Add row above"),icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 15.8333L18.2167 12.5M18.2167 12.5L14.8833 9.16667M18.2167 12.5L10.05 12.5C9.16595 12.5 8.31811 12.8512 7.69299 13.4763C7.06787 14.1014 6.71667 14.9493 6.71667 15.8333"/></svg>',onClick:()=>{this.addRow(this.selectedRow,!0),this.hideToolboxes()}},{label:this.api.i18n.t("Add row below"),icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 9.16666L18.2167 12.5M18.2167 12.5L14.8833 15.8333M18.2167 12.5H10.05C9.16594 12.5 8.31809 12.1488 7.69297 11.5237C7.06785 10.8986 6.71666 10.0507 6.71666 9.16666"/></svg>',onClick:()=>{this.addRow(this.selectedRow+1,!0),this.hideToolboxes()}},{label:this.api.i18n.t("Delete row"),icon:R,hideIf:()=>this.numberOfRows===1,confirmationRequired:!0,onClick:()=>{this.deleteRow(this.selectedRow),this.hideToolboxes()}}],onOpen:()=>{this.selectRow(this.hoveredRow),this.hideColumnToolbox()},onClose:()=>{this.unselectRow()}})}moveCursorToNextRow(){this.focusedCell.row!==this.numberOfRows?(this.focusedCell.row+=1,this.focusCell(this.focusedCell)):(this.addRow(),this.focusedCell.row+=1,this.focusCell(this.focusedCell),this.updateToolboxesPosition(0,0))}getCell(e,t){return this.table.querySelectorAll(`.${C}:nth-child(${e}) .${x}`)[t-1]}getRow(e){return this.table.querySelector(`.${C}:nth-child(${e})`)}getRowByCell(e){return e.parentElement}getRowFirstCell(e){return e.querySelector(`.${x}:first-child`)}setCellContent(e,t,o){this.getCell(e,t).innerHTML=o}addColumn(e=-1,t=!1){let o=this.numberOfColumns;for(let i=1;i<=this.numberOfRows;i++){let n;const c=this.createCell();if(e>0&&e<=o?(n=this.getCell(i,e),v(c,n)):n=this.getRow(i).appendChild(c),i===1){const a=this.getCell(i,e>0?e:o+1);a&&t&&w(a)}}this.addHeadingAttrToFirstRow()}addRow(e=-1,t=!1){let o,i=s("div",C);this.tunes.withHeadings&&this.removeHeadingAttrFromFirstRow();let n=this.numberOfColumns;e>0&&e<=this.numberOfRows?o=v(i,this.getRow(e)):o=this.table.appendChild(i),this.fillRow(o,n),this.tunes.withHeadings&&this.addHeadingAttrToFirstRow();const c=this.getRowFirstCell(o);return c&&t&&w(c),o}deleteColumn(e){for(let t=1;t<=this.numberOfRows;t++){const o=this.getCell(t,e);if(!o)return;o.remove()}}deleteRow(e){this.getRow(e).remove(),this.addHeadingAttrToFirstRow()}createTableWrapper(){if(this.wrapper=s("div",T),this.table=s("div",O),this.readOnly&&this.wrapper.classList.add(z),this.wrapper.appendChild(this.toolboxRow.element),this.wrapper.appendChild(this.toolboxColumn.element),this.wrapper.appendChild(this.table),!this.readOnly){const e=s("div",E,{innerHTML:S}),t=s("div",H,{innerHTML:S});this.wrapper.appendChild(e),this.wrapper.appendChild(t)}}computeInitialSize(){const e=this.data&&this.data.content,t=Array.isArray(e),o=!!t&&e.length,i=t?e.length:void 0,n=o?e[0].length:void 0,c=Number.parseInt(this.config&&this.config.rows),a=Number.parseInt(this.config&&this.config.cols),h=!isNaN(c)&&c>0?c:void 0,y=!isNaN(a)&&a>0?a:void 0;return{rows:i||h||2,cols:n||y||2}}resize(){const{rows:e,cols:t}=this.computeInitialSize();for(let o=0;o<e;o++)this.addRow();for(let o=0;o<t;o++)this.addColumn()}fill(){const e=this.data;if(e&&e.content)for(let t=0;t<e.content.length;t++)for(let o=0;o<e.content[t].length;o++)this.setCellContent(t+1,o+1,e.content[t][o])}fillRow(e,t){for(let o=1;o<=t;o++){const i=this.createCell();e.appendChild(i)}}createCell(){return s("div",x,{contentEditable:!this.readOnly})}get numberOfRows(){return this.table.childElementCount}get numberOfColumns(){return this.numberOfRows?this.table.querySelectorAll(`.${C}:first-child .${x}`).length:0}get isColumnMenuShowing(){return this.selectedColumn!==0}get isRowMenuShowing(){return this.selectedRow!==0}onMouseMoveInTable(e){const{row:t,column:o}=this.getHoveredCell(e);this.hoveredColumn=o,this.hoveredRow=t,this.updateToolboxesPosition()}onKeyPressListener(e){if(e.key==="Enter"){if(e.shiftKey)return!0;this.moveCursorToNextRow()}return e.key!=="Enter"}onKeyDownListener(e){e.key==="Tab"&&e.stopPropagation()}focusInTableListener(e){const t=e.target,o=this.getRowByCell(t);this.focusedCell={row:Array.from(this.table.querySelectorAll("."+C)).indexOf(o)+1,column:Array.from(o.querySelectorAll("."+x)).indexOf(t)+1}}hideToolboxes(){this.hideRowToolbox(),this.hideColumnToolbox(),this.updateToolboxesPosition()}hideRowToolbox(){this.unselectRow(),this.toolboxRow.hide()}hideColumnToolbox(){this.unselectColumn(),this.toolboxColumn.hide()}focusCell(){this.focusedCellElem.focus()}get focusedCellElem(){const{row:e,column:t}=this.focusedCell;return this.getCell(e,t)}updateToolboxesPosition(e=this.hoveredRow,t=this.hoveredColumn){this.isColumnMenuShowing||t>0&&t<=this.numberOfColumns&&this.toolboxColumn.show(()=>({left:`calc((100% - var(--cell-size)) / (${this.numberOfColumns} * 2) * (1 + (${t} - 1) * 2))`})),this.isRowMenuShowing||e>0&&e<=this.numberOfRows&&this.toolboxRow.show(()=>{const o=this.getRow(e),{fromTopBorder:i}=u(this.table,o),{height:n}=o.getBoundingClientRect();return{top:Math.ceil(i+n/2)+"px"}})}setHeadingsSetting(e){this.tunes.withHeadings=e,e?(this.table.classList.add(M),this.addHeadingAttrToFirstRow()):(this.table.classList.remove(M),this.removeHeadingAttrFromFirstRow())}addHeadingAttrToFirstRow(){for(let e=1;e<=this.numberOfColumns;e++){let t=this.getCell(1,e);t&&t.setAttribute("heading",this.api.i18n.t("Heading"))}}removeHeadingAttrFromFirstRow(){for(let e=1;e<=this.numberOfColumns;e++){let t=this.getCell(1,e);t&&t.removeAttribute("heading")}}selectRow(e){const t=this.getRow(e);t&&(this.selectedRow=e,t.classList.add(L))}unselectRow(){if(this.selectedRow<=0)return;const e=this.table.querySelector("."+L);e&&e.classList.remove(L),this.selectedRow=0}selectColumn(e){for(let t=1;t<=this.numberOfRows;t++){const o=this.getCell(t,e);o&&o.classList.add(A)}this.selectedColumn=e}unselectColumn(){if(this.selectedColumn<=0)return;let e=this.table.querySelectorAll("."+A);Array.from(e).forEach(t=>{t.classList.remove(A)}),this.selectedColumn=0}getHoveredCell(e){let t=this.hoveredRow,o=this.hoveredColumn;const{width:i,height:n,x:c,y:a}=function(h,y){const B=h.getBoundingClientRect(),{width:U,height:F,x:N,y:q}=B,{clientX:$,clientY:P}=y;return{width:U,height:F,x:$-N,y:P-q}}(this.table,e);return c>=0&&(o=this.binSearch(this.numberOfColumns,h=>this.getCell(1,h),({fromLeftBorder:h})=>c<h,({fromRightBorder:h})=>c>i-h)),a>=0&&(t=this.binSearch(this.numberOfRows,h=>this.getCell(h,1),({fromTopBorder:h})=>a<h,({fromBottomBorder:h})=>a>n-h)),{row:t||this.hoveredRow,column:o||this.hoveredColumn}}binSearch(e,t,o,i){let n,c=0,a=e+1,h=0;for(;c<a-1&&h<10;){n=Math.ceil((c+a)/2);const y=t(n),B=u(this.table,y);if(o(B))a=n;else{if(!i(B))break;c=n}h++}return n}getData(){const e=[];for(let t=1;t<=this.numberOfRows;t++){const o=this.table.querySelector(`.${C}:nth-child(${t})`),i=Array.from(o.querySelectorAll("."+x));i.every(n=>!n.textContent.trim())||e.push(i.map(n=>n.innerHTML))}return e}destroy(){document.removeEventListener("click",this.documentClicked)}}d(1),b.default=class{static get isReadOnlySupported(){return!0}static get enableLineBreaks(){return!0}constructor({data:r,config:e,api:t,readOnly:o}){this.api=t,this.readOnly=o,this.config=e,this.data={withHeadings:this.getConfig("withHeadings",!1,r),content:r&&r.content?r.content:[]},this.table=null}static get toolbox(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>',title:"Table"}}render(){return this.table=new j(this.readOnly,this.api,this.data,this.config),this.container=s("div",this.api.styles.block),this.container.appendChild(this.table.getWrapper()),this.table.setHeadingsSetting(this.data.withHeadings),this.container}renderSettings(){return[{label:this.api.i18n.t("With headings"),icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>',isActive:this.data.withHeadings,closeOnActivate:!0,toggle:!0,onActivate:()=>{this.data.withHeadings=!0,this.table.setHeadingsSetting(this.data.withHeadings)}},{label:this.api.i18n.t("Without headings"),icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M14 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><path stroke="currentColor" stroke-width="2" d="M5 14H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>',isActive:!this.data.withHeadings,closeOnActivate:!0,toggle:!0,onActivate:()=>{this.data.withHeadings=!1,this.table.setHeadingsSetting(this.data.withHeadings)}}]}save(){const r=this.table.getData();return{withHeadings:this.data.withHeadings,content:r}}destroy(){this.table.destroy()}getConfig(r,e,t){const o=this.data||t;return o?o[r]?o[r]:e:this.config&&this.config[r]?this.config[r]:e}static get pasteConfig(){return{tags:["TABLE","TR","TH","TD"]}}onPaste(r){const e=r.detail.data,t=e.querySelector(":scope > thead, tr:first-of-type th"),o=Array.from(e.querySelectorAll("tr")).map(i=>Array.from(i.querySelectorAll("th, td")).map(n=>n.innerHTML));this.data={withHeadings:t!==null,content:o},this.table.wrapper&&this.table.wrapper.replaceWith(this.render())}}}]).default})})(_);var W=_.exports;const V=D(W);export{V as T};
