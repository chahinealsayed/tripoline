import{c as k,a as $}from"../chunk/app.js";import{t as o}from"../chunk/index.js";import{R as I,M as x,a as p,b as v,s as V,B as g,_ as d}from"../chunk/StringInput.vue_vue_type_script_setup_true_lang.js";import{S as A}from"../chunk/string.js";import{c as B,F as u,C as T,_ as U,f as q}from"../chunk/ModalForm.vue_vue_type_script_setup_true_lang.js";import{I as w}from"../chunk/Icon.js";import{m as z,a as E}from"../chunk/m6cd080c8112b9076.js";import{_ as M}from"../chunk/RadioInput.vue_vue_type_script_setup_true_lang.js";import{d as W,k as K,p as L,a as i,q as l,F as O,r as y,s as r}from"../chunk/mc55b2a42316522d6.js";import{r as P,u as m}from"../chunk/m6bdda40d8bd2cf5a.js";import{K as C,x as j}from"../chunk/ma6cfd38af5d4c661.js";import"../chunk/m21bbc25c9f3922b4.js";import"../chunk/m62faa42f30679aac.js";import"../chunk/m78c574d5c3843a3d.js";import"../chunk/m3fc8d974e5d8216d.js";import"../chunk/m110db13e4dc1cf62.js";import"../chunk/_plugin-vue_export-helper.js";import"../chunk/ma0e3fbddd3785020.js";import"../chunk/m0006e5d5f2f1d6ce.js";import"../chunk/strings.js";import"../chunk/Modal.vue_vue_type_script_setup_true_lang.js";const[S,G]=k(),[H,D]=k();class J extends I{init(){super.init(),D(this,()=>(e,c)=>e.field.value===c.value)}compareWith(e){return G(this,e),this}validation(e){D(this,()=>e)}get defaultMessage(){return`{attribute} is not matched ${S(this).label}`}validate(){return new Promise(e=>{e(!this.field.value||H(this)(this,S(this)))})}}class Q extends x{get id(){var e;return this.field("id",o("ID"),((e=this.initData)==null?void 0:e.id)??"")}get username(){var e;return this.field("username",o("Username"),((e=this.initData)==null?void 0:e.username)??"")}get password(){return this.field("password",o("Password"),"")}get confirmPassword(){return this.field("confirm_password",o("Confirm Password"),"")}get status(){var e;return this.field("status",o("Status"),((e=this.initData)==null?void 0:e.status)??"enabled")}get rules(){return[[[this.username,this.password,this.confirmPassword],A],[[this.username],p],[[this.password,this.confirmPassword],p,e=>e.enabled(()=>this.isNewRecord)],[[this.confirmPassword],J,e=>e.compareWith(this.password)]]}}const X=r("span",{class:"text-light"},"Edit",-1),Y=r("div",{class:"h6 mb-3"},"User Information",-1),Z={class:"mb-4"},ee=r("div",{class:"h6 mb-3"},"Login Authentication",-1),se={class:"mb-4"},te={class:"row mb-4"},ae={class:"col-md-6"},ie={class:"col-md-6"},re=W({__name:"Admins",setup(h){const e=B({type:u.Number,name:"id",label:"ID",fitable:!0,sortable:!0,searchable:!0},{type:u.String,name:"name",label:"Name",fitable:!1,sortable:!0,searchable:!0},{type:u.String,name:"username",label:"Username",fitable:!0,sortable:!0,searchable:!0},{type:u.String,name:"status",label:"Status",fitable:!0,sortable:!0,searchable:!0});class c extends x{get id(){var t;return this.field("id",o("ID"),((t=this.initData)==null?void 0:t.id)??"")}get name(){var t;return this.field("name",o("Name"),((t=this.initData)==null?void 0:t.name)??"")}get user(){return this.hasOne("user",t=>new Q(t))}get rules(){return[[[this.name],A],[[this.name],p]]}}const _=P(null),f=P(null),N=()=>{var a,t;(t=(a=f.value)==null?void 0:a.open)==null||t.call(a)},F=a=>{var t,s;(s=(t=f.value)==null?void 0:t.open)==null||s.call(t,a)},R=(a,t)=>{let s;a.isNewRecord?s=v().post("/admins",a.data):s=v().put(`/admins/${a.id.value}`,a.data),s.then(()=>{var n;V(`${a.name.value}`,"Admin Saved Successfully"),(n=_.value)==null||n.refresh(),t()})};return(a,t)=>(K(),L(O,null,[i(T,{ref_key:"crud",ref:_,fields:m(e),fetch:m(q)("/admins","user")},{usernameValue:l(({item:s})=>{var n;return[y(C(((n=s.user)==null?void 0:n.username)??"--"),1)]}),statusValue:l(({item:s})=>{var n,b;return[r("span",{class:j({"text-success":((n=s.user)==null?void 0:n.status)==="enabled"})},C((b=s.user)==null?void 0:b.status),3)]}),actions:l(({item:s})=>[i(g,{color:"info",size:"sm",onClick:n=>F(s)},{default:l(()=>[i(w,{path:m(z),color:"light"},null,8,["path"]),X]),_:2},1032,["onClick"])]),topActions:l(()=>[i(g,{color:"primary",onClick:N},{default:l(()=>[i(w,{path:m(E),color:"light"},null,8,["path"]),y(" Add New Admin ")]),_:1})]),_:1},8,["fields","fetch"]),i(U,{name:"Admin","model-class":c,size:"lg",ref_key:"modal",ref:f,onSave:R},{default:l(({model:s})=>[Y,r("div",Z,[i(d,{field:s.name},null,8,["field"])]),ee,r("div",se,[i(d,{field:s.user.username},null,8,["field"])]),r("div",te,[r("div",ae,[i(d,{field:s.user.password,type:"password"},null,8,["field"])]),r("div",ie,[i(d,{field:s.user.confirmPassword,type:"password"},null,8,["field"])])]),r("div",null,[i(M,{field:s.user.status,options:[{value:"enabled",label:"Enabled"},{value:"disabled",label:"Disabled"},{value:"pending",label:"Pending"}],inline:""},null,8,["field"])])]),_:1},512)],64))}}),ne=$("admins",re);ne.mount();