var Me=Object.defineProperty;var Te=(l,e,t)=>e in l?Me(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var le=(l,e,t)=>(Te(l,typeof e!="symbol"?e+"":e,t),t);import{c as we,a as Se}from"../chunk/app.js";import{c as J,u as Ne,l as Q,t as oe}from"../chunk/index.js";import{M as de,c as Ee,F as X,C as Be,f as Fe}from"../chunk/ModalForm.js";import{M as G,a as fe,b as P,B as z,S as Z,s as re}from"../chunk/StringInput.js";import{I as F}from"../chunk/Icon.js";import{b as Ae,a as ee,c as Oe,d as je,m as pe,e as ve,f as he,g as Le,h as Re,j as Pe,k as We}from"../chunk/m6cd080c8112b9076.js";import{S as me}from"../chunk/string.js";import{w as ne,u as ze}from"../chunk/m78c574d5c3843a3d.js";import{d as E,k as f,p as g,F as A,t as q,s as _,u as j,a as i,r as S,v as T,l as N,f as Ve,i as qe,q as h,n as Y,x as He,y as _e,T as Ue,z as Ke,A as Xe,o as Ye,g as Ge,c as H,B as ye,C as Je}from"../chunk/mc55b2a42316522d6.js";import{r as $,u as k}from"../chunk/m6bdda40d8bd2cf5a.js";import{x as W,K as R,y as K}from"../chunk/ma6cfd38af5d4c661.js";import{_ as B}from"../chunk/_plugin-vue_export-helper.js";import{T as ge}from"../chunk/TextInput.js";import{A as Qe,C as be,d as Ze,E as et,a as tt,c as lt}from"../chunk/ContentLoader.js";import{R as $e}from"../chunk/RadioInput.js";import{u as at,i as st,n as nt}from"../chunk/strings.js";import{M as ke}from"../chunk/Modal.js";import{T as it}from"../chunk/m3fc8d974e5d8216d.js";import{E as ot}from"../chunk/EditorView.js";import{S as rt}from"../chunk/Seo.js";import"../chunk/m21bbc25c9f3922b4.js";import"../chunk/m62faa42f30679aac.js";import"../chunk/m14e047058b3edf4a.js";import"../chunk/ma0e3fbddd3785020.js";import"../chunk/m0006e5d5f2f1d6ce.js";import"../chunk/md74f29767a891470.js";import"../chunk/m1f9feaba4f71d948.js";import"../chunk/mf9318287aef1aff7.js";import"../chunk/md825331c71ee2150.js";import"../chunk/mb498c278f04b6af0.js";import"../chunk/m9d53afba68c66192.js";import"../chunk/me2dc73ba3ddff3a0.js";import"../chunk/m91cc365b03266d60.js";import"../chunk/m83ea0bef6cab8431.js";import"../chunk/m2386e084f602c82c.js";import"../chunk/mb8063646094169aa.js";import"../chunk/m739ab1bf02c2db17.js";import"../chunk/mdbebdd5e57731077.js";import"../chunk/mab64b07d054bfd6d.js";import"../chunk/m7d7a7c6d011d9316.js";import"../chunk/mfe9c7759b05c1c34.js";import"../chunk/m00b1a7b3e0dbba07.js";import"../chunk/m89ff8ec026ac6cd4.js";import"../chunk/m5ac4d662e96449dd.js";import"../chunk/m80659984369ac5fa.js";import"../chunk/m110db13e4dc1cf62.js";const[ue,ut]=we({});class V extends G{static generate(e,t,a={},r="content"){var x,M,m,I;let s=e,y=e.split(/\[(.*)\](.*)/).filter(n=>n);y.length>1&&(s=y[1]);const o=((I=(m=(M=(x=J())==null?void 0:x[r][s])==null?void 0:M.attrs)==null?void 0:m.find(n=>`${n.column}`==`${t}`))==null?void 0:I.fields)??[];return new V(a,n=>{ut(n,o)})}get attrs(){return ue(this)}beforeCreate(){ue(this).forEach(t=>{var r;this.createField(t.name,t.label,((r=this.initData)==null?void 0:r[t.name])??t.defaultValue??"");const a=this[t.name];this.setField(a)})}get rules(){return[]}}class ct extends G{constructor(){super(...arguments);le(this,"type","default")}get id(){var t;return this.field("id","ID",((t=this.initData)==null?void 0:t.id)??null)}get contentId(){var t;return this.field("content_id","Content ID",((t=this.initData)==null?void 0:t.content_id)??null)}get language(){var t;return this.field("language","Language",((t=this.initData)==null?void 0:t.language)??"en")}get title(){var t;return this.field("title","Title",((t=this.initData)==null?void 0:t.title)??"")}get excerpt(){var t;return this.field("excerpt","Excerpt",((t=this.initData)==null?void 0:t.excerpt)??"")}get blocks(){var t;return this.field("blocks","Text",((t=this.initData)==null?void 0:t.blocks)??{})}get attrs(){return this.hasOne("attrs",t=>V.generate(this.type,"local",t))}get rules(){return[[[this.title],me],[[this.title],fe]]}}class dt extends G{get id(){var e;return this.field("id","ID",((e=this.initData)==null?void 0:e.id)??null)}get type(){var e;return this.field("type","Type",((e=this.initData)==null?void 0:e.type)??"default")}get status(){var e;return this.field("status","Status",((e=this.initData)==null?void 0:e.status)??"active")}get position(){var e;return this.field("position","Position",((e=this.initData)==null?void 0:e.position)??"0")}get categories(){var e;return this.field("categories","Categories",((e=this.initData)==null?void 0:e.categories)??[])}get attrs1(){return this.hasOne("attrs1",e=>{var t;return V.generate(((t=this.initData)==null?void 0:t.type)??"default","1",this.initData.attrs)})}get attrs2(){return this.hasOne("attrs2",e=>{var t;return V.generate(((t=this.initData)==null?void 0:t.type)??"default","2",this.initData.attrs)})}get attrs3(){return this.hasOne("attrs3",e=>{var t;return V.generate(((t=this.initData)==null?void 0:t.type)??"default","3",this.initData.attrs)})}get locals(){return this.hasLocals(e=>new ct(e,t=>{t.type=this.initData.type??"default"}))}get rules(){return[]}controlData(e){return e.attrs={...e.attrs1,...e.attrs2,...e.attrs3},delete e.attrs1,delete e.attrs2,delete e.attrs3,e}}const ft=["id","onClick","disabled"],pt=E({__name:"Navs",props:{type:{default:"nav"},tabs:{},alignment:{default:"start"},vertical:{type:Boolean,default:!1},fill:{type:Boolean,default:!1},justified:{type:Boolean,default:!1},responsive:{type:Boolean,default:!1}},emits:["select"],setup(l,{emit:e}){var r;const t=$(((r=l.tabs[0])==null?void 0:r.name)??""),a=s=>{t.value=s.name,e("select",s)};return(s,y)=>(f(),g("ul",{class:W(["nav",{"nav-tabs":s.type==="tabs","nav-pills":s.type==="pills","nav-fill":s.fill,"nav-justified":s.justified,"flex-column":s.vertical,"justify-content-start":s.alignment==="start","justify-content-center":s.alignment==="center","justify-content-end":s.alignment==="end","flex-sm-row":s.responsive}]),role:"tablist"},[(f(!0),g(A,null,q(s.tabs,(o,p)=>(f(),g("li",{key:p,class:W(["nav-item",{"flex-sm-fill":s.responsive,"text-sm-center":s.responsive}])},[_("a",{href:"#",class:W(["nav-link",{disabled:o.disabled??!1,active:t.value===o.name}]),id:`tab-${o.name}`,"aria-current":"page",onClick:ne(x=>a(o),["prevent"]),disabled:o.disabled},[j(s.$slots,`${o.name}-tab`,{tab:o},()=>[o.icon?(f(),g(A,{key:0},[i(F,{path:o.icon},null,8,["path"]),S("  ")],64)):T("",!0),_("span",null,R(o.label),1)])],10,ft)],2))),128))],2))}}),ie=B(pt,[["__file","Navs.vue"]]),vt={class:"tab-content"},ht=["aria-labelledby","tabindex"],mt=E({__name:"TabContent",props:{type:{default:"nav"},tabs:{},alignment:{default:"start"},vertical:{type:Boolean,default:!1},fill:{type:Boolean,default:!1},justified:{type:Boolean,default:!1},responsive:{type:Boolean,default:!1},disableNavs:{type:Boolean,default:!1}},setup(l,{expose:e}){var r;const t=$(((r=l.tabs[0])==null?void 0:r.name)??""),a=s=>{t.value=s.name};return e({select:a}),(s,y)=>(f(),g(A,null,[s.disableNavs?T("",!0):(f(),N(ie,{key:0,type:s.type,tabs:s.tabs,alignment:s.alignment,vertical:s.vertical,fill:s.fill,justified:s.justified,responsive:s.responsive,onSelect:a},null,8,["type","tabs","alignment","vertical","fill","justified","responsive"])),_("div",vt,[(f(!0),g(A,null,q(s.tabs,(o,p)=>(f(),g("div",{key:p,class:W(["tab-pane fade",{show:t.value===o.name,active:t.value===o.name}]),role:"tabpanel","aria-labelledby":`tab-${o.name}`,tabindex:p},[j(s.$slots,o.name,{tab:o},void 0,!0)],10,ht))),128))])],64))}});const Ce=B(mt,[["__scopeId","data-v-7d81ee70"],["__file","TabContent.vue"]]),_t=E({inheritAttrs:!1,__name:"AttrsInput",props:{model:{}},setup(l){return(e,t)=>(f(!0),g(A,null,q(e.model.attrs,a=>{var r;return f(),g("div",{key:a.name,class:"mb-3"},[i(Qe,{type:a.type,field:(r=e.model)==null?void 0:r[a.name],attributes:a.attributes,props:a.props},null,8,["type","field","attributes","props"])])}),128))}}),U=B(_t,[["__file","AttrsInput.vue"]]),yt=E({__name:"Wait",props:{time:{}},setup(l){const e=$(!1),t=setTimeout(()=>{e.value=!0},l.time);return Ve(()=>{clearTimeout(t)}),(a,r)=>e.value?j(a.$slots,"default",{key:0}):T("",!0)}}),gt=B(yt,[["__file","Wait.vue"]]),bt=l=>{let e=l,t=null,a=l.split(/\[(.*)\](.*)/).filter(r=>r);return a.length>1&&(t=+a[0],e=a[1]),{id:t,name:e}};function $t(l){var a;const{name:e}=bt(l);let t=!0;return Object.entries((a=J())==null?void 0:a.content).forEach(([r,s])=>{var o,p,x;r.split(".")[0]===e&&(t=t&&((x=(p=(o=J())==null?void 0:o.content)==null?void 0:p[r])==null?void 0:x.max)>0)}),t}class kt extends G{constructor(){super(...arguments);le(this,"type","default")}get id(){var t;return this.field("id","ID",((t=this.initData)==null?void 0:t.id)??null)}get categoryId(){var t;return this.field("category_id","Category ID",((t=this.initData)==null?void 0:t.category_id)??null)}get language(){var t;return this.field("language","Language",((t=this.initData)==null?void 0:t.language)??"en")}get title(){var t;return this.field("title","Title",((t=this.initData)==null?void 0:t.title)??"")}get excerpt(){var t;return this.field("excerpt","Excerpt",((t=this.initData)==null?void 0:t.excerpt)??"")}get attrs(){return this.hasOne("attrs",t=>V.generate(this.type,"local",t,"category"))}get rules(){return[[[this.title],me],[[this.title],fe]]}}class Ct extends G{get id(){var e;return this.field("id","ID",((e=this.initData)==null?void 0:e.id)??null)}get type(){var e;return this.field("type","Type",((e=this.initData)==null?void 0:e.type)??"default")}get parentId(){var e;return this.field("parent_id","Parent ID",((e=this.initData)==null?void 0:e.parent_id)??null)}get path(){var e;return this.field("path","Path",((e=this.initData)==null?void 0:e.path)??null)}get status(){var e;return this.field("status","Status",((e=this.initData)==null?void 0:e.status)??"active")}get position(){var e;return this.field("position","Position",((e=this.initData)==null?void 0:e.position)??"0")}get locals(){return this.hasLocals(e=>new kt(e,t=>{t.type=this.initData.type??"default"}))}get attrs(){return this.hasOne("attrs",e=>{var t;return V.generate(((t=this.initData)==null?void 0:t.type)??"default","settings",this.initData.attrs,"category")})}get rules(){return[]}}const Dt={class:"node-header"},xt={class:"prefix"},It=["onClick"],Mt={class:"title"},Tt={key:0,class:"node-body"},wt={key:1,class:"text-muted px-3"},St=E({__name:"Node",props:{model:{},index:{},refresh:{type:Function},level:{default:0},defaultMsg:{type:Boolean,default:!1}},setup(l){const e=$(!1),t=$([]),a=$(null),r=()=>{e.value=!e.value,Y(()=>{e.value&&!t.length&&y()})},s=qe("dataFactory"),y=()=>{var p;(p=a.value)==null||p.start(),s({parent:l.model,level:l.level+1,index:l.index},x=>{var M;t.value=x,(M=a.value)==null||M.stop()})},o=()=>{t.value=[],Y(()=>{y()})};return(p,x)=>(f(),g("div",{class:W(["node",{expanded:e.value}])},[_("div",Dt,[_("div",xt,[_("div",{class:"toggle-icon",onClick:ne(r,["stop"])},[i(F,{path:e.value?k(Ae):k(ee)},null,8,["path"])],8,It)]),_("div",Mt,[j(p.$slots,"default",{model:p.model,level:p.level,index:p.index,refresh:p.refresh},void 0,!0)])]),e.value?(f(),g("div",Tt,[i(be,{ref_key:"loader",ref:a,title:"Data",class:"ps-4"},{default:h(()=>[t.value.length>0?(f(),N(De,{key:0,parent:p.model,children:t.value,level:p.level+1,"default-msg":p.defaultMsg,refresh:o},{default:h(({model:M,level:m,index:I,refresh:n})=>[j(p.$slots,"default",{model:M,level:m,index:I,refresh:n},void 0,!0)]),_:3},8,["parent","children","level","default-msg"])):p.defaultMsg?(f(),g("div",wt,"There are no children yet")):T("",!0)]),_:3},512)])):T("",!0)],2))}});const Nt=B(St,[["__scopeId","data-v-c0c6c439"],["__file","Node.vue"]]),Et={key:0,class:"nodes"},Bt=E({__name:"Nodes",props:{parent:{default:null},children:{},level:{default:0},defaultMsg:{type:Boolean,default:!1},refresh:{type:Function}},setup(l){return(e,t)=>e.children.length>0?(f(),g("div",Et,[(f(!0),g(A,null,q(e.children,(a,r)=>(f(),N(Nt,{key:r,model:a,index:r,level:e.level,"default-msg":e.defaultMsg,refresh:e.refresh},{default:h(({model:s,level:y,index:o,refresh:p})=>[j(e.$slots,"default",{model:s,level:y,index:o,refresh:p},void 0,!0)]),_:2},1032,["model","index","level","default-msg","refresh"]))),128))])):T("",!0)}});const De=B(Bt,[["__scopeId","data-v-cd8069a7"],["__file","Nodes.vue"]]),Ft={key:0,class:"tree"},At=E({__name:"Tree",props:{dataFactory:{type:Function},defaultMsg:{type:Boolean,default:!1}},setup(l,{expose:e}){He("dataFactory",l.dataFactory);const t=$([]),a=()=>{l.dataFactory({parent:null,level:0,index:0},s=>{t.value=s})},r=()=>{t.value=[],Y(()=>{a()})};return a(),e({refresh:r}),(s,y)=>t.value.length>0?(f(),g("div",Ft,[i(De,{children:t.value,refresh:r,"default-msg":s.defaultMsg},{default:h(({model:o,level:p,index:x,refresh:M})=>[j(s.$slots,"default",{model:o,level:p,index:x,refresh:M},void 0,!0)]),_:3},8,["children","default-msg"])])):T("",!0)}});const Ot=B(At,[["__scopeId","data-v-e8708bdc"],["__file","Tree.vue"]]),jt={beforeMount(l,e,t){l.clickOutsideEvent=function(a){!(l===a.target||l.contains(a.target))&&e.value&&e.value(a,l)},document.addEventListener("click",l.clickOutsideEvent),document.addEventListener("touchstart",l.clickOutsideEvent)},unmounted(l){document.removeEventListener("click",l.clickOutsideEvent),document.removeEventListener("touchstart",l.clickOutsideEvent)}},Lt=jt,Rt=l=>(Ke("data-v-3a157bd5"),l=l(),Xe(),l),Pt=Rt(()=>_("div",{class:"fallback"},"No content found",-1)),Wt=E({__name:"ContextMenu",emits:["open","close"],setup(l,{expose:e,emit:t}){ze(m=>({"01c3ee35":o.value,"01c3ee34":y.value}));const a=$(!1),r=$(null),s=$(null),y=$(0),o=$(0),p=m=>{a.value=!0,document.body.click(),Y(()=>{M(m.clientX,m.clientY),t("open")})},x=()=>{a.value=!1,t("close")},M=(m,I)=>{y.value=m,o.value=I;const n=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),v=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);if(r.value){const{width:c,height:b}=r.value.getBoundingClientRect();c+y.value>n&&y.value-c<0?y.value=Math.ceil((c+y.value)/2):c+y.value>n&&(y.value-=c),b+o.value>v&&o.value-b<0?o.value=Math.ceil((b+o.value)/2):b+o.value>v&&(o.value-=b)}y.value=`${y.value}px`,o.value=`${o.value}px`};return e({open:p,close:x}),(m,I)=>(f(),g(A,null,[j(m.$slots,"default",{ref_key:"element",ref:s,open:n=>p(n)},void 0,!0),(f(),N(Ue,{to:"body"},[a.value?_e((f(),g("div",{key:0,ref_key:"contextMenu",ref:r,class:"context-menu"},[j(m.$slots,"contextmenu",{},()=>[Pt],!0)])),[[k(Lt),x]]):T("",!0)]))],64))}});const zt=B(Wt,[["__scopeId","data-v-3a157bd5"],["__file","ContextMenu.vue"]]),ae=new Map,Vt={beforeMount(l,e,t){var r;let a={};typeof e.value=="object"?(l.setAttribute("title",((r=e.value)==null?void 0:r.title)??null),a={...a,...e.value}):typeof e.value=="string"&&(l.setAttribute("title",e.value),a.title=e.value),ae.set(l,new it(l,a))},beforeUnmount(l){var e;(e=ae.get(l))==null||e.dispose(),ae.delete(l)}},qt=Vt,Ht=["onContextmenu"],Ut={key:0,class:"text-danger"},Kt={key:0,class:"list-group list-group-flush"},Xt=["onClick"],Yt={class:"item"},Gt={class:"name"},Jt={key:1,class:"text-muted"},se={},ce=[],Qt=E({__name:"Ref",props:{value:{},startWith:{}},setup(l,{expose:e}){const t=Ge();ce.push(t);const a=$(null),r=$(null),s=$(null),y=$(null),o=(m=!1)=>new Promise(I=>{var n;(n=r.value)==null||n.start(),a.value=null,!m&&Object.hasOwn(se,l.startWith)?Y(()=>{var v;a.value=[...se[l.startWith]],x(),(v=r.value)==null||v.stop(),I(a.value)}):P().get(`/settings/references?startWith=${l.startWith}`).then(({data:v})=>{a.value=se[l.startWith]=v.map(c=>p(c)),x(),I(a.value)}).finally(()=>{var v;(v=r.value)==null||v.stop()})}),p=m=>({...m,label:m.name.split(".").reverse().map(I=>at(I)).join(" ")}),x=()=>{s.value=null,a.value.forEach(m=>{+m.value==+l.value&&(s.value={...p(m)})})},M=m=>{var v;const I=((v=s.value)==null?void 0:v.id)??0,n=m.id;I!==n&&(P().post("/settings/references",{oldId:I,newId:n,value:l.value}).finally(()=>{var c;(c=y.value)==null||c.close(),o(!0).then(()=>{ce.forEach((b,w)=>{var O;(b==null?void 0:b.uid)!==(t==null?void 0:t.uid)&&((O=b==null?void 0:b.exposed)==null||O.fetch())})})}),s.value={...m,value:l.value})};return Ye(()=>{o()}),e({fetch:o}),(m,I)=>k(Ne)().type==="developer"?(f(),N(zt,{key:0,ref_key:"contextMenu",ref:y},{default:h(({open:n})=>[_("span",{onContextmenu:ne(v=>n(v),["right","prevent"])},[j(m.$slots,"default",{},()=>[S(R(m.value),1)],!0),s.value&&+s.value.value==+m.value?_e((f(),g("sup",Ut,[S("*")])),[[k(qt),`${s.value.label}
${s.value.name}`]]):T("",!0)],40,Ht)]),contextmenu:h(()=>[i(be,{ref_key:"loader",ref:r,title:"References"},{default:h(()=>[a.value&&a.value.length>0?(f(),g("ul",Kt,[(f(!0),g(A,null,q(a.value,n=>(f(),g("li",{key:n.id,class:"list-group-item p-0",onClick:v=>M(n)},[_("div",Yt,[s.value&&+s.value.value==+n.value?(f(),N(F,{key:0,path:k(Oe),color:"success"},null,8,["path"])):(f(),N(F,{key:1,path:k(je),color:"muted"},null,8,["path"])),_("span",Gt,R(n.label),1)])],8,Xt))),128))])):(f(),g("div",Jt,"There are no references yet"))]),_:1},512)]),_:3},512)):j(m.$slots,"default",{key:1},()=>[S(R(m.value),1)],!0)}});const xe=B(Qt,[["__scopeId","data-v-9615b275"],["__file","Ref.vue"]]),Zt={class:"actions"},el={class:"categories"},tl={class:"category-node"},ll={class:"name"},al={class:"node-actions"},sl={class:"box mb-3"},nl={class:"h6"},il={class:"mb-3"},ol={class:"mb-3"},rl={class:"mb-3"},ul={class:"mb-3"},cl=E({__name:"Categories",props:{type:{},id:{default:0}},setup(l){const e=$(null),t=$(null),a=$(null),r=$(null),s=(n,v)=>{y(n.parent).then(c=>{v(c)})},y=n=>new Promise(v=>{P().get(`/categories?expand=local,locals&filter[type][like]=${l.id>0?`[${l.id}]`:""}${l.type}&filter[parent_id]=${(n==null?void 0:n.id)??null}&sort=position,local.name`).then(({data:c})=>{v(c)})}),o=(n,v=null)=>{var c,b;a.value=n,(b=(c=e.value)==null?void 0:c.open)==null||b.call(c,{type:`${l.id>0?`[${l.id}]`:""}${l.type}`,parent_id:(v==null?void 0:v.id)??null,path:v!=null&&v.id?`${[v.id].reduce((w,O)=>(w.push(O),w),v.path?v.path.split(","):[]).join(",")}`:null})},p=(n,v)=>{var c,b;a.value=n,(b=(c=e.value)==null?void 0:c.open)==null||b.call(c,v)},x=(n,v)=>{let c;n.isNewRecord?c=P().post("/categories",n.data):c=P().put(`/categories/${n.id.value}`,n.data),c.then(()=>{v(),a.value&&(a.value(),a.value=null)})},M=H(()=>[...Q().map(n=>({name:n.value,label:n.label,icon:ve})),{name:"settings",label:"Settings",icon:he}]),m=H(()=>[{value:"active",label:"Active"},{value:"draft",label:"Draft"},{value:"pending",label:"Pending"},{value:"deleted",label:"Deleted"}]),I=n=>{r.value.select(n)};return(n,v)=>(f(),g(A,null,[_("div",Zt,[t.value?(f(),N(z,{key:0,color:"primary",onClick:v[0]||(v[0]=c=>o(t.value.refresh))},{default:h(()=>[i(F,{path:k(ee)},null,8,["path"]),S("Add New Category ")]),_:1})):T("",!0)]),_("div",el,[i(Ot,{ref_key:"tree",ref:t,"data-factory":s,"default-msg":""},{default:h(({model:c,level:b,index:w,refresh:O})=>[_("div",tl,[_("div",ll,[(f(),N(xe,{key:c.id,value:c.id,"start-with":`cms.categories.${n.id>0?`${n.id}.`:""}${n.type}`},{default:h(()=>[S(R(c.local.title),1)]),_:2},1032,["value","start-with"]))]),_("div",al,[i(z,{color:"primary",size:"sm",onClick:te=>o(O,c)},{default:h(()=>[i(F,{path:k(ee)},null,8,["path"])]),_:2},1032,["onClick"]),i(z,{color:"primary",size:"sm",onClick:te=>p(O,c)},{default:h(()=>[i(F,{path:k(pe)},null,8,["path"])]),_:2},1032,["onClick"])])])]),_:1},512)]),i(de,{name:"Category","model-class":k(Ct),size:"lg",ref_key:"modal",ref:e,onSave:x},{header:h(()=>[i(ie,{type:"pills",tabs:M.value,alignment:"center",onSelect:I,style:{flex:"auto"}},null,8,["tabs"])]),default:h(({model:c})=>[i(Ce,{tabs:M.value,type:"tabs","disable-navs":"",ref_key:"tabContent",ref:r},ye({navs:h(()=>[]),settings:h(({tab:b})=>[i(U,{model:c.attrs},null,8,["model"]),_("div",rl,[i(Z,{field:c.position,type:"number"},null,8,["field"])]),_("div",ul,[i($e,{field:c.status,options:m.value,inline:""},null,8,["field","options"])])]),_:2},[q(k(Q)(),(b,w)=>({name:b.value,fn:h(({tab:O})=>[_("div",sl,[_("div",nl,R(b.label),1),_("div",{style:K([b.value==="ar"?{direction:"rtl"}:{direction:"ltr"}])},[_("div",il,[i(Z,{field:c.locals[w].title,style:K([b.value==="ar"?{direction:"rtl","text-align":"right"}:{direction:"ltr","text-align":"left"}])},null,8,["field","style"])]),_("div",ol,[i(ge,{field:c.locals[w].excerpt,style:K([b.value==="ar"?{direction:"rtl","text-align":"right"}:{direction:"ltr","text-align":"left"}])},null,8,["field","style"])]),i(U,{model:c.locals[w].attrs},null,8,["model"])],4)])])}))]),1032,["tabs"])]),_:1},8,["model-class"])],64))}});const dl=B(cl,[["__scopeId","data-v-1bc09c54"],["__file","Categories.vue"]]),fl=E({inheritAttrs:!1,__name:"SeoModal",props:{target:{default:""},title:{default:""}},setup(l){const e=$(null),t=()=>{var a;(a=e.value)==null||a.open()};return(a,r)=>(f(),g(A,null,[i(z,Je(a.$attrs,{onClick:t,class:"btn btn-warning"}),{default:h(()=>[i(F,{path:k(Le)},null,8,["path"]),S(" Seo ")]),_:1},16),i(ke,{ref_key:"modal",ref:e,title:`${a.title??a.target} SEO`,size:"xl"},{default:h(()=>[i(rt,{target:a.target},null,8,["target"])]),_:1},8,["title"])],64))}}),pl=B(fl,[["__file","SeoModal.vue"]]),vl={class:"col-md-3"},hl={class:"position-sticky top-0"},ml={class:"mb-3"},_l={class:"mb-3"},yl={class:"row h-100"},gl={class:"categories-checks"},bl={class:"mb-3"},$l={class:"mb-3"},kl=E({__name:"Contents",props:{type:{},id:{default:0}},setup(l){const e=$(null),t=$(null),a=$(null),r=$(null),s=$(null),y=$([]),o=Ee({type:X.Number,name:"id",label:"ID",fitable:!0,sortable:!0,searchable:!0},{type:X.String,name:"title",label:"Title",searchable:!0,sortable:!0},{type:X.String,name:"status",label:"Status",fitable:!0,searchable:!0,sortable:!0},{type:X.Number,name:"position",label:"Position",fitable:!0,searchable:!0,sortable:!0},{type:X.Number,name:"type",label:"Type",fitable:!0,searchable:!0,sortable:!0}),p=H(()=>{var d,D,u;return((u=(D=(d=J())==null?void 0:d.type)==null?void 0:D.find(C=>C.name===l.type))==null?void 0:u.label)??l.type}),x=()=>{var d,D;(D=(d=t.value)==null?void 0:d.open)==null||D.call(d,{type:`${l.id>0?`[${l.id}]`:""}${l.type}`})},M=d=>{var u,C;const D={...d};D.categories&&(D.categories=D.categories.map(L=>L.id)),(C=(u=t.value)==null?void 0:u.open)==null||C.call(u,D)},m=(d,D)=>{let u;d.isNewRecord?u=P().post("/contents",d.data):u=P().put(`/contents/${d.id.value}`,d.data),u.then(()=>{var C;re(`${p.value} ${d.locals[0].title.value} Saved Successfully`),(C=e.value)==null||C.refresh(),D()})},I=d=>{lt(`Delete ${d.locals[0].title}`).then(D=>{D&&P().delete(`/contents/${d.id}`).then(()=>{var u;re(`Content "${d.locals[0].title}" deleted successfully`),(u=e.value)==null||u.refresh()})})},n=H(()=>[...Q().map(d=>({name:d.value,label:d.label,icon:ve})),{name:"settings",label:"Settings",icon:he}]),v=d=>{r.value.select(d)},c=d=>{y.value.push(d)},b=H(()=>[{value:"active",label:"Active"},{value:"draft",label:"Draft"},{value:"pending",label:"Pending"},{value:"deleted",label:"Deleted"}]),w=H(()=>Array.isArray(s.value)&&s.value.length>0?"col-md-3":"col-md-4"),O=()=>{s.value=[],P().get(`/categories?expand=local&filter[type]=${l.type}&sort=position,local.name`).then(async({data:d})=>{s.value=Ze((D,u,C,L)=>({value:D.id,label:`${u}&nbsp;${D.local.title}`,title:D.local.title}),d,{delimiter:st({path:We})})})},te=()=>{var d,D;(D=(d=a.value)==null?void 0:d.open)==null||D.call(d)},Ie=()=>{O()};return O(),(d,D)=>(f(),g(A,null,[i(Be,{ref_key:"crud",ref:e,fields:k(o),fetch:k(Fe)("/contents","local,locals,categories",{filter:{type:{like:`${d.id>0?`[${d.id}]`:""}${d.type}`}}})},{topActions:h(()=>[k($t)(d.type)?T("",!0):(f(),g(A,{key:0},[i(z,{color:"primary",onClick:te},{default:h(()=>[i(F,{path:k(Re),color:"info"},null,8,["path"]),S(R(k(oe)("Categories")),1)]),_:1}),i(z,{color:"primary",onClick:x},{default:h(()=>[i(F,{path:k(ee),color:"info"},null,8,["path"]),S(R(`${k(oe)("Add New")} ${p.value}`),1)]),_:1})],64))]),actions:h(({item:u})=>{var C;return[i(pl,{target:`content:${u.id}-`,title:(C=u==null?void 0:u.local)==null?void 0:C.title,color:"warning",size:"sm"},null,8,["target","title"]),i(z,{color:"info",class:"text-light btn btn-primary",onClick:L=>M(u),size:"sm"},{default:h(()=>[i(F,{path:k(pe),color:"light"},null,8,["path"]),S("Edit ")]),_:2},1032,["onClick"]),i(z,{color:"danger",class:"text-light btn btn-danger",onClick:L=>I(u),size:"sm"},{default:h(()=>[i(F,{path:k(Pe),color:"light"},null,8,["path"]),S("Delete ")]),_:2},1032,["onClick"])]}),idValue:h(({item:u})=>[u.id?(f(),N(xe,{key:u.id,value:u.id,"start-with":`cms.contents.${d.id>0?`${d.id}.`:""}${d.type}`},{default:h(()=>[S(R(u.id),1)]),_:2},1032,["value","start-with"])):T("",!0)]),titleValue:h(({item:u})=>{var C;return[S(R(((C=u.local)==null?void 0:C.title)??k(nt)()),1)]}),details:h(({item:u})=>{var C;return[i(ot,{content:(C=u.local)==null?void 0:C.blocks},null,8,["content"])]}),_:1},8,["fields","fetch"]),i(de,{name:p.value,"model-class":k(dt),fullscreen:"",ref_key:"modal",ref:t,onSave:m},{header:h(()=>[i(ie,{type:"pills",tabs:n.value,alignment:"center",onSelect:v,style:{flex:"auto"}},null,8,["tabs"])]),default:h(({model:u})=>[i(Ce,{tabs:n.value,type:"tabs","disable-navs":"",ref_key:"tabContent",ref:r},ye({settings:h(({tab:C})=>[_("div",yl,[s.value.length>0?(f(),g("div",{key:0,class:W({[w.value]:!0})},[_("div",gl,[s.value.length>0?(f(),N(tt,{key:0,field:u.categories,options:s.value},null,8,["field","options"])):T("",!0)])],2)):T("",!0),_("div",{class:W({[w.value]:!0})},[i(U,{model:u.attrs1},null,8,["model"]),_("div",bl,[i(Z,{field:u.position},null,8,["field"])]),_("div",$l,[i($e,{field:u.status,inline:"",options:b.value},null,8,["field","options"])])],2),u.attrs2.length>0?(f(),g("div",{key:1,class:W({[w.value]:!0})},[i(U,{model:u.attrs2},null,8,["model"])],2)):T("",!0),u.attrs3.length>0?(f(),g("div",{key:2,class:W({[w.value]:!0})},[i(U,{model:u.attrs3},null,8,["model"])],2)):T("",!0)])]),_:2},[q(k(Q)(),(C,L)=>({name:C.value,fn:h(({tab:Ml})=>[_("div",{class:"row h-100",style:K([C.value==="ar"?{direction:"rtl"}:{direction:"ltr"}])},[_("div",vl,[_("div",hl,[_("div",ml,[i(Z,{field:u.locals[L].title,style:K([C.value==="ar"?{direction:"rtl","text-align":"right"}:{direction:"ltr","text-align":"left"}])},null,8,["field","style"])]),_("div",_l,[i(ge,{field:u.locals[L].excerpt,style:K([C.value==="ar"?{direction:"rtl","text-align":"right"}:{direction:"ltr","text-align":"left"},{height:"300px"}])},null,8,["field","style"])]),i(U,{model:u.locals[L].attrs},null,8,["model"])])]),_("div",{class:"col-md-9",ref:c},[y.value[L]?(f(),N(gt,{key:0,time:800},{default:h(()=>[i(et,{field:u.locals[L].blocks,rtl:C.value==="ar",altitude:y.value[0].clientHeight-18,"no-label":""},null,8,["field","rtl","altitude"])]),_:2},1024)):T("",!0)])],4)])}))]),1032,["tabs"])]),_:1},8,["name","model-class"]),i(ke,{ref_key:"categoriesModal",ref:a,title:`Categories of ${p.value} `,size:"lg",onClose:Ie},{default:h(()=>[i(dl,{type:d.type,id:d.id},null,8,["type","id"])]),_:1},8,["title"])],64))}}),Cl=B(kl,[["__file","Contents.vue"]]),Dl=E({__name:"Contents",props:{type:{}},setup(l){return(e,t)=>(f(),N(Cl,{type:e.type},null,8,["type"]))}}),xl=B(Dl,[["__file","Contents.vue"]]),Il=Se("contents",xl);Il.mount();
//# sourceMappingURL=contents.js.map
