import{i as W,d as vt,h as Y,a as A,b as w,t as Rt,c as mt,N as Et,e as z,f as $,g as H,m as bt,j as St}from"./ma6cfd38af5d4c661.js";let l;class It{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=l,!e&&l&&(this.index=(l.scopes||(l.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const s=l;try{return l=this,e()}finally{l=s}}}on(){l=this}off(){l=this.parent}stop(e){if(this._active){let s,r;for(s=0,r=this.effects.length;s<r;s++)this.effects[s].stop();for(s=0,r=this.cleanups.length;s<r;s++)this.cleanups[s]();if(this.scopes)for(s=0,r=this.scopes.length;s<r;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function oe(t){return new It(t)}function Mt(t,e=l){e&&e.active&&e.effects.push(t)}function ae(){return l}const B=t=>{const e=new Set(t);return e.w=0,e.n=0,e},nt=t=>(t.w&R)>0,rt=t=>(t.n&R)>0,Tt=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=R},xt=t=>{const{deps:e}=t;if(e.length){let s=0;for(let r=0;r<e.length;r++){const n=e[r];nt(n)&&!rt(n)?n.delete(t):e[s++]=n,n.w&=~R,n.n&=~R}e.length=s}},N=new WeakMap;let S=0,R=1;const y=30;let h;const E=Symbol(""),D=Symbol("");class Kt{constructor(e,s=null,r){this.fn=e,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Mt(this,r)}run(){if(!this.active)return this.fn();let e=h,s=v;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=h,h=this,v=!0,R=1<<++S,S<=y?Tt(this):Q(this),this.fn()}finally{S<=y&&xt(this),R=1<<--S,h=this.parent,v=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){h===this?this.deferStop=!0:this.active&&(Q(this),this.onStop&&this.onStop(),this.active=!1)}}function Q(t){const{deps:e}=t;if(e.length){for(let s=0;s<e.length;s++)e[s].delete(t);e.length=0}}let v=!0;const it=[];function Pt(){it.push(v),v=!1}function Ot(){const t=it.pop();v=t===void 0?!0:t}function f(t,e,s){if(v&&h){let r=N.get(t);r||N.set(t,r=new Map);let n=r.get(s);n||r.set(s,n=B()),ct(n)}}function ct(t,e){let s=!1;S<=y?rt(t)||(t.n|=R,s=!nt(t)):s=!t.has(h),s&&(t.add(h),h.deps.push(t))}function m(t,e,s,r,n,i){const c=N.get(t);if(!c)return;let o=[];if(e==="clear")o=[...c.values()];else if(s==="length"&&w(t)){const u=Number(r);c.forEach((d,_)=>{(_==="length"||_>=u)&&o.push(d)})}else switch(s!==void 0&&o.push(c.get(s)),e){case"add":w(t)?$(s)&&o.push(c.get("length")):(o.push(c.get(E)),z(t)&&o.push(c.get(D)));break;case"delete":w(t)||(o.push(c.get(E)),z(t)&&o.push(c.get(D)));break;case"set":z(t)&&o.push(c.get(E));break}if(o.length===1)o[0]&&G(o[0]);else{const u=[];for(const d of o)d&&u.push(...d);G(B(u))}}function G(t,e){const s=w(t)?t:[...t];for(const r of s)r.computed&&X(r);for(const r of s)r.computed||X(r)}function X(t,e){(t!==h||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const zt=bt("__proto__,__v_isRef,__isVue"),ot=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(W)),At=F(),Ht=F(!1,!0),jt=F(!0),Z=Ct();function Ct(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...s){const r=a(this);for(let i=0,c=this.length;i<c;i++)f(r,"get",i+"");const n=r[e](...s);return n===-1||n===!1?r[e](...s.map(a)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...s){Pt();const r=a(this)[e].apply(this,s);return Ot(),r}}),t}function Nt(t){const e=a(this);return f(e,"has",t),e.hasOwnProperty(t)}function F(t=!1,e=!1){return function(r,n,i){if(n==="__v_isReactive")return!t;if(n==="__v_isReadonly")return t;if(n==="__v_isShallow")return e;if(n==="__v_raw"&&i===(t?e?Zt:ht:e?lt:ut).get(r))return r;const c=w(r);if(!t){if(c&&H(Z,n))return Reflect.get(Z,n,i);if(n==="hasOwnProperty")return Nt}const o=Reflect.get(r,n,i);return(W(n)?ot.has(n):zt(n))||(t||f(r,"get",n),e)?o:p(o)?c&&$(n)?o:o.value:A(o)?t?dt(o):pt(o):o}}const yt=at(),Dt=at(!0);function at(t=!1){return function(s,r,n,i){let c=s[r];if(b(c)&&p(c)&&!p(n))return!1;if(!t&&(!_t(n)&&!b(n)&&(c=a(c),n=a(n)),!w(s)&&p(c)&&!p(n)))return c.value=n,!0;const o=w(s)&&$(r)?Number(r)<s.length:H(s,r),u=Reflect.set(s,r,n,i);return s===a(i)&&(o?Y(n,c)&&m(s,"set",r,n):m(s,"add",r,n)),u}}function Gt(t,e){const s=H(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&s&&m(t,"delete",e,void 0),r}function Wt(t,e){const s=Reflect.has(t,e);return(!W(e)||!ot.has(e))&&f(t,"has",e),s}function Yt(t){return f(t,"iterate",w(t)?"length":E),Reflect.ownKeys(t)}const ft={get:At,set:yt,deleteProperty:Gt,has:Wt,ownKeys:Yt},$t={get:jt,set(t,e){return!0},deleteProperty(t,e){return!0}},Bt=St({},ft,{get:Ht,set:Dt}),V=t=>t,j=t=>Reflect.getPrototypeOf(t);function T(t,e,s=!1,r=!1){t=t.__v_raw;const n=a(t),i=a(e);s||(e!==i&&f(n,"get",e),f(n,"get",i));const{has:c}=j(n),o=r?V:s?J:I;if(c.call(n,e))return o(t.get(e));if(c.call(n,i))return o(t.get(i));t!==n&&t.get(e)}function x(t,e=!1){const s=this.__v_raw,r=a(s),n=a(t);return e||(t!==n&&f(r,"has",t),f(r,"has",n)),t===n?s.has(t):s.has(t)||s.has(n)}function K(t,e=!1){return t=t.__v_raw,!e&&f(a(t),"iterate",E),Reflect.get(t,"size",t)}function k(t){t=a(t);const e=a(this);return j(e).has.call(e,t)||(e.add(t),m(e,"add",t,t)),this}function tt(t,e){e=a(e);const s=a(this),{has:r,get:n}=j(s);let i=r.call(s,t);i||(t=a(t),i=r.call(s,t));const c=n.call(s,t);return s.set(t,e),i?Y(e,c)&&m(s,"set",t,e):m(s,"add",t,e),this}function et(t){const e=a(this),{has:s,get:r}=j(e);let n=s.call(e,t);n||(t=a(t),n=s.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return n&&m(e,"delete",t,void 0),i}function st(){const t=a(this),e=t.size!==0,s=t.clear();return e&&m(t,"clear",void 0,void 0),s}function P(t,e){return function(r,n){const i=this,c=i.__v_raw,o=a(c),u=e?V:t?J:I;return!t&&f(o,"iterate",E),c.forEach((d,_)=>r.call(n,u(d),u(_),i))}}function O(t,e,s){return function(...r){const n=this.__v_raw,i=a(n),c=z(i),o=t==="entries"||t===Symbol.iterator&&c,u=t==="keys"&&c,d=n[t](...r),_=s?V:e?J:I;return!e&&f(i,"iterate",u?D:E),{next(){const{value:M,done:C}=d.next();return C?{value:M,done:C}:{value:o?[_(M[0]),_(M[1])]:_(M),done:C}},[Symbol.iterator](){return this}}}}function g(t){return function(...e){return t==="delete"?!1:this}}function Ft(){const t={get(i){return T(this,i)},get size(){return K(this)},has:x,add:k,set:tt,delete:et,clear:st,forEach:P(!1,!1)},e={get(i){return T(this,i,!1,!0)},get size(){return K(this)},has:x,add:k,set:tt,delete:et,clear:st,forEach:P(!1,!0)},s={get(i){return T(this,i,!0)},get size(){return K(this,!0)},has(i){return x.call(this,i,!0)},add:g("add"),set:g("set"),delete:g("delete"),clear:g("clear"),forEach:P(!0,!1)},r={get(i){return T(this,i,!0,!0)},get size(){return K(this,!0)},has(i){return x.call(this,i,!0)},add:g("add"),set:g("set"),delete:g("delete"),clear:g("clear"),forEach:P(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=O(i,!1,!1),s[i]=O(i,!0,!1),e[i]=O(i,!1,!0),r[i]=O(i,!0,!0)}),[t,s,e,r]}const[Vt,Lt,Ut,qt]=Ft();function L(t,e){const s=e?t?qt:Ut:t?Lt:Vt;return(r,n,i)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?r:Reflect.get(H(s,n)&&n in r?s:r,n,i)}const Jt={get:L(!1,!1)},Qt={get:L(!1,!0)},Xt={get:L(!0,!1)},ut=new WeakMap,lt=new WeakMap,ht=new WeakMap,Zt=new WeakMap;function kt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function te(t){return t.__v_skip||!Object.isExtensible(t)?0:kt(Rt(t))}function pt(t){return b(t)?t:U(t,!1,ft,Jt,ut)}function fe(t){return U(t,!1,Bt,Qt,lt)}function dt(t){return U(t,!0,$t,Xt,ht)}function U(t,e,s,r,n){if(!A(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=n.get(t);if(i)return i;const c=te(t);if(c===0)return t;const o=new Proxy(t,c===2?r:s);return n.set(t,o),o}function q(t){return b(t)?q(t.__v_raw):!!(t&&t.__v_isReactive)}function b(t){return!!(t&&t.__v_isReadonly)}function _t(t){return!!(t&&t.__v_isShallow)}function ue(t){return q(t)||b(t)}function a(t){const e=t&&t.__v_raw;return e?a(e):t}function le(t){return vt(t,"__v_skip",!0),t}const I=t=>A(t)?pt(t):t,J=t=>A(t)?dt(t):t;function gt(t){v&&h&&(t=a(t),ct(t.dep||(t.dep=B())))}function wt(t,e){t=a(t);const s=t.dep;s&&G(s)}function p(t){return!!(t&&t.__v_isRef===!0)}function he(t){return ee(t,!1)}function ee(t,e){return p(t)?t:new se(t,e)}class se{constructor(e,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?e:a(e),this._value=s?e:I(e)}get value(){return gt(this),this._value}set value(e){const s=this.__v_isShallow||_t(e)||b(e);e=s?e:a(e),Y(e,this._rawValue)&&(this._rawValue=e,this._value=s?e:I(e),wt(this))}}function ne(t){return p(t)?t.value:t}const re={get:(t,e,s)=>ne(Reflect.get(t,e,s)),set:(t,e,s,r)=>{const n=t[e];return p(n)&&!p(s)?(n.value=s,!0):Reflect.set(t,e,s,r)}};function pe(t){return q(t)?t:new Proxy(t,re)}class ie{constructor(e,s,r,n){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Kt(e,()=>{this._dirty||(this._dirty=!0,wt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=r}get value(){const e=a(this);return gt(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function de(t,e,s=!1){let r,n;const i=mt(t);return i?(r=t,n=Et):(r=t.get,n=t.set),new ie(r,n,i||!n,s)}export{It as E,Kt as R,pt as a,p as b,de as c,_t as d,oe as e,q as f,ae as g,Pt as h,ue as i,Ot as j,a as k,m as l,le as m,pe as p,he as r,fe as s,f as t,ne as u};