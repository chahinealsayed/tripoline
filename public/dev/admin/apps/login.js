import{a as U}from"../chunk/app.js";import{w as D}from"../chunk/m78c574d5c3843a3d.js";import{c as T,S as k,B as $,b as F,M as P,a as R}from"../chunk/StringInput.js";import{S as V}from"../chunk/string.js";import{l as A,n as q,o as j}from"../chunk/m6cd080c8112b9076.js";import{I as f}from"../chunk/Icon.js";import{i as S,m as G}from"../chunk/index.js";import{d as C,o as K,f as O,k as g,p as L,s as a,a as s,q as h,v as Y,r as y,l as z,T as H,F as J}from"../chunk/mc55b2a42316522d6.js";import{r as Q,u as r}from"../chunk/m6bdda40d8bd2cf5a.js";import{_ as I}from"../chunk/_plugin-vue_export-helper.js";import{K as W}from"../chunk/ma6cfd38af5d4c661.js";import"../chunk/m21bbc25c9f3922b4.js";import"../chunk/m62faa42f30679aac.js";import"../chunk/m14e047058b3edf4a.js";import"../chunk/m3fc8d974e5d8216d.js";import"../chunk/m110db13e4dc1cf62.js";import"../chunk/ma0e3fbddd3785020.js";import"../chunk/m0006e5d5f2f1d6ce.js";import"../chunk/strings.js";const X=["onSubmit"],Z={class:"d-flex justify-content-center align-items-center"},ee=C({__name:"Login",props:{redirectUrl:{default:""}},setup(v){class w extends P{get username(){var n;return this.field("username","Username",((n=this.initData)==null?void 0:n.username)??"")}get password(){var n;return this.field("password","Password",((n=this.initData)==null?void 0:n.password)??"")}get rules(){return[[[this.username,this.password],V],[[this.username,this.password],R]]}}const d=Q(null),[i,M,B]=T(w),E=()=>{var p,n;(n=(p=i.value)==null?void 0:p.validate())==null||n.then(N=>{var m,b,x;N&&((b=(m=d.value)==null?void 0:m.start)==null||b.call(m),F().post("/login",((x=i.value)==null?void 0:x.data)??{}).then(({data:t})=>{var o,l;if(t.code===200){const e=document.createElement("form");e.name="login",e.method="POST",e.action=`${(l=(o=G())==null?void 0:o.url)==null?void 0:l.self}/Login`,e.style.visibility="hidden",e.style.width="0px",e.style.height="0px",e.style.overflow="hidden",e.style.opacity="0";const c=document.createElement("input");c.type="hidden",c.name="token",c.value=t.token,e.appendChild(c);const u=document.createElement("input");u.type="hidden",u.name="expire",u.value=t.expire,e.appendChild(u);const _=document.createElement("input");_.type="hidden",_.name="redirectUrl",_.value=v.redirectUrl??"",e.appendChild(_),document.body.appendChild(e),e.submit()}}).catch(t=>{var o,l;(l=(o=i.value)==null?void 0:o.addRemoteErrors)==null||l.call(o,t)}).finally(()=>{var t,o;(o=(t=d.value)==null?void 0:t.stop)==null||o.call(t)}))})};return K(()=>{M()}),O(()=>{B()}),(p,n)=>r(i)?(g(),L("form",{key:0,onSubmit:D(E,["prevent"]),class:"login-form"},[a("div",null,[s(k,{field:r(i).username},{before:h(()=>[s(f,{path:r(A),color:r(S)()?"info":"primary"},null,8,["path","color"])]),_:1},8,["field"])]),a("div",null,[s(k,{field:r(i).password,type:"password"},{before:h(()=>[s(f,{path:r(q),color:r(S)()?"info":"primary"},null,8,["path","color"])]),_:1},8,["field"])]),a("div",Z,[s($,{type:"submit",color:"primary",class:"fw-bold w-100","spinner-color":"light",ref_key:"button",ref:d},{default:h(()=>[s(f,{path:r(j),color:"info"},null,8,["path"]),y("SIGN IN")]),_:1},512)])],40,X)):Y("",!0)}});const te=I(ee,[["__file","Login.vue"]]),oe={class:"admin-login-box"},ne={class:"copyright"},re=a("a",{href:"https://codendot.com",target:"_blank"},"Codendot",-1),se=C({__name:"Login",setup(v){return(w,d)=>(g(),L(J,null,[a("div",oe,[s(te)]),(g(),z(H,{to:"body"},[a("div",ne,[y(" Powered by "),re,y(" "+W(new Date().getFullYear()),1)])]))],64))}});const ie=I(se,[["__file","Login.vue"]]),ae=U("login",ie);ae.mount();
//# sourceMappingURL=login.js.map
