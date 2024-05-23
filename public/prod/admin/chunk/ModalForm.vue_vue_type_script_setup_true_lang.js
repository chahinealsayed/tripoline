import{w as I,a as se}from"./m78c574d5c3843a3d.js";import{I as V}from"./Icon.js";import{t as J,a as he,i as $e}from"./index.js";import{p as be,q as ye,r as ke,s as we,t as Ce,g as Se,u as Pe,v as Be,w as Ee,x as De,y as Ae,z as Ie,A as Ne,o as Ve}from"./m6cd080c8112b9076.js";import{s as ze}from"./m21bbc25c9f3922b4.js";import{B as G,p as Le,b as Oe,c as Re}from"./StringInput.vue_vue_type_script_setup_true_lang.js";import{D as Me}from"./m3fc8d974e5d8216d.js";import{d as T,k as r,l as R,q as P,C as Z,D as le,u as h,w as x,c as F,o as ne,f as Ue,E as je,y as Y,r as W,v as w,z as re,A as ue,s as p,p as v,F as O,g as de,a as A,t as q,B as Fe,n as oe}from"./mc55b2a42316522d6.js";import{J as Te,x as N,K as j}from"./ma6cfd38af5d4c661.js";import{r as S,u as b,v as Ke}from"./m6bdda40d8bd2cf5a.js";import{_ as ee}from"./_plugin-vue_export-helper.js";import{_ as qe}from"./Modal.vue_vue_type_script_setup_true_lang.js";const We=T({inheritAttrs:!1,__name:"Wrapper",props:{tag:{type:[String,Boolean],default:!1}},setup(e){return(i,u)=>i.tag?(r(),R(le(i.tag),Te(Z({key:0},i.$attrs)),{default:P(()=>[h(i.$slots,"default")]),_:3},16)):h(i.$slots,"default",{key:1})}}),_e=e=>(re("data-v-c3554bd5"),e=e(),ue(),e),He=_e(()=>p("span",{class:"visually-hidden"},"Toggle Dropdown",-1)),Je=T({inheritAttrs:!1,__name:"Dropdown",props:{title:{default:""},split:{type:Boolean,default:!1},center:{type:Boolean,default:!1},direction:{default:"down"},alignment:{default:"start"},smStart:{type:Boolean,default:!1},mdStart:{type:Boolean,default:!1},lgStart:{type:Boolean,default:!1},xlStart:{type:Boolean,default:!1},xxlStart:{type:Boolean,default:!1},smEnd:{type:Boolean,default:!1},mdEnd:{type:Boolean,default:!1},lgEnd:{type:Boolean,default:!1},xlEnd:{type:Boolean,default:!1},xxlEnd:{type:Boolean,default:!1},autoClose:{type:[Boolean,String],default:!1},offset:{default:()=>[0,2]},menuOptions:{default:()=>({})},div:{type:Boolean,default:!1},flat:{type:Boolean,default:!1},noArrow:{type:Boolean,default:!1}},emits:["close","closed","prevented","open","opened"],setup(e,{expose:i,emit:u}){const a=S(null),o=S(null);x(()=>a,t=>{t&&$()},{deep:!0});const l=t=>{u("close",t)},k=t=>{u("closed",t)},y=t=>{u("open",t)},C=t=>{u("opened",t)},$=()=>{o.value=new Me(a.value,{autoClose:e.autoClose,offset:e.offset}),a.value.addEventListener("hide.bs.dropdown",l),a.value.addEventListener("hidden.bs.dropdown",k),a.value.addEventListener("show.bs.dropdown",y),a.value.addEventListener("shown.bs.dropdown",C)},B=()=>{var t,m;(m=(t=o.value)==null?void 0:t.show)==null||m.call(t)},g=()=>{var t,m;(m=(t=o.value)==null?void 0:t.hide)==null||m.call(t)},f=()=>{var t,m;a.value.removeEventListener("hide.bs.dropdown",l),a.value.removeEventListener("hidden.bs.dropdown",k),a.value.removeEventListener("show.bs.dropdown",y),a.value.removeEventListener("shown.bs.dropdown",C),(m=(t=o.value)==null?void 0:t.dispose)==null||m.call(t)};i({open:B,close:g,dispose:f,update:()=>{var t,m;(m=(t=o.value)==null?void 0:t.update)==null||m.call(t)},tagName:()=>e.div?"div":"ul"});const D=F(()=>({"dropdown-menu":!0,[`dropdown-menu-${e.alignment}`]:!0,...e.smStart?{"dropdown-menu-sm-start":!0}:{},...e.mdStart?{"dropdown-menu-md-start":!0}:{},...e.lgStart?{"dropdown-menu-lg-start":!0}:{},...e.xlStart?{"dropdown-menu-xl-start":!0}:{},...e.xxlStart?{"dropdown-menu-xxl-start":!0}:{},...e.smEnd?{"dropdown-menu-sm-end":!0}:{},...e.mdEnd?{"dropdown-menu-md-end":!0}:{},...e.lgEnd?{"dropdown-menu-lg-end":!0}:{},...e.xlEnd?{"dropdown-menu-xl-end":!0}:{},...e.xxlEnd?{"dropdown-menu-xxl-end":!0}:{}}));return ne(()=>{}),Ue(()=>{f()}),(t,m)=>{const z=je("binds");return r(),R(We,{tag:t.flat?"div":!1,class:N({"btn-group":!0,[`drop${t.direction}${t.center?"-center":""}`]:!0})},{default:P(()=>[Y((r(),R(G,{class:N({"dropdown-toggle":!t.split,"no-arrow":t.noArrow}),"data-bs-toggle":t.split?!1:"dropdown","aria-expanded":"false",onClick:B,ref:L=>{t.split||(a.value=L.element())}},{default:P(()=>[h(t.$slots,"button",{},()=>[W(j(t.title),1)],!0)]),_:3},8,["class","data-bs-toggle"])),[[z,t.$attrs]]),t.split?Y((r(),R(G,{key:0,class:N(["dropdown-toggle dropdown-toggle-split",{"no-arrow":t.noArrow}]),"data-bs-toggle":"dropdown","aria-expanded":"false",onClick:B,ref:L=>{t.split||(a.value=L.element())}},{default:P(()=>[He]),_:1},8,["class"])),[[z,t.$attrs]]):w("",!0),Y((r(),R(le(t.div?"div":"ul"),{class:N(D.value)},{default:P(()=>[h(t.$slots,"default",{},void 0,!0)]),_:3},8,["class"])),[[z,t.menuOptions]])]),_:3},8,["tag","class"])}}});const ie=ee(Je,[["__scopeId","data-v-c3554bd5"]]),Ge={key:0},Qe=T({inheritAttrs:!1,__name:"DropdownItem",setup(e){const i=de(),u=F(()=>{var a,o,l,k,y,C,$,B;return((B=($=(C=(y=(k=(l=(o=(a=i==null?void 0:i.parent)==null?void 0:a.subTree)==null?void 0:o.children)==null?void 0:l[2])==null?void 0:k.type)==null?void 0:y.toString)==null?void 0:C.call(y))==null?void 0:$.toLowerCase)==null?void 0:B.call($))??null});return(a,o)=>(r(),v(O,null,[u.value==="ul"?(r(),v("li",Ge,[p("a",Z({class:"dropdown-item",href:"#"},a.$attrs,{onClick:o[0]||(o[0]=I(()=>{},["prevent"]))}),[h(a.$slots,"default")],16)])):w("",!0),u.value==="div"?(r(),v("a",Z({key:1,class:"dropdown-item",href:"#"},a.$attrs,{onClick:o[1]||(o[1]=I(()=>{},["prevent"]))}),[h(a.$slots,"default")],16)):w("",!0)],64))}}),Xe={class:"pagination-component"},Ye={key:0,class:"count"},Ze={key:1,"aria-label":"Page navigation",class:"pages"},xe={class:"pagination pagination-sm"},et={key:0,class:"page-link"},tt=["onClick"],at={class:"per-page"},st=T({__name:"Pagination",props:{page:{default:1},perPage:{default:10},total:{default:0},pages:{},buttons:{default:5},sizes:{default:()=>[5,10,25,50]}},emits:["update:page","update:perPage","update:total","update:buttons","change"],setup(e,{expose:i,emit:u}){const a=S(e.page),o=S(e.page),l=S(e.perPage),k=F(()=>Math.ceil(e.total/l.value)),y=F(()=>Le(a.value,e.perPage,e.total,e.buttons)),C=S(null);x([a,l],()=>{u("update:page",a),u("update:perPage",l),u("update:total",e.total),u("update:buttons",e.buttons),u("change",{page:a,perPage:l,total:e.total,pages:k.value,buttons:e.buttons})},{deep:!0}),x(l,()=>{a.value=1});const $=d=>{a.value=d},B=()=>{o.value++,o.value>k.value&&(o.value=1)},g=()=>{o.value--,o.value<1&&(o.value=k.value)},f=d=>{l.value=d,C.close()};return i({goTo:$,increment:B,decrement:g,changeSize:f}),(d,D)=>(r(),v("div",Xe,[d.total>0?(r(),v("div",Ye,j(b(J)(":?-:? of :? rows",d.perPage*a.value-(d.perPage-1),d.perPage*a.value<=d.total?d.perPage*a.value:d.total,d.total)),1)):w("",!0),y.value.length>1?(r(),v("nav",Ze,[p("ul",xe,[p("li",{class:N(["page-item",{disabled:a.value===1}])},[p("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true",onClick:D[0]||(D[0]=I(t=>$(1),["prevent"]))},[A(V,{path:b(be)},null,8,["path"])])],2),p("li",{class:N(["page-item",{disabled:a.value===1}])},[p("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true",onClick:D[1]||(D[1]=I(t=>$(a.value-1),["prevent"]))},[A(V,{path:b(ye)},null,8,["path"])])],2),(r(!0),v(O,null,q(y.value,t=>(r(),v("li",{class:N(["page-item",{active:t===a.value}]),key:t},[t===a.value?(r(),v("span",et,j(t),1)):(r(),v("a",{key:1,class:"page-link",href:"#",onClick:I(m=>$(t),["prevent"])},j(t),9,tt))],2))),128)),p("li",{class:N(["page-item",{disabled:a.value===k.value}])},[p("a",{class:"page-link",href:"#",onClick:D[2]||(D[2]=I(t=>$(a.value+1),["prevent"]))},[A(V,{path:b(ke)},null,8,["path"])])],2),p("li",{class:N(["page-item",{disabled:a.value===k.value}])},[p("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true",onClick:D[3]||(D[3]=I(t=>$(k.value),["prevent"]))},[A(V,{path:b(we)},null,8,["path"])])],2)])])):w("",!0),p("div",at,[d.total>0?(r(),R(ie,{key:0,ref_key:"dropDown",ref:C,title:`${d.perPage} ${b(J)("rows")}`,"auto-close":""},{default:P(()=>[(r(!0),v(O,null,q(d.sizes,(t,m)=>(r(),v(O,{key:t},[m===0||(d.sizes.at(m-1)??0)<=d.total?(r(),R(Qe,{key:0,onClick:I(z=>f(t),["prevent"])},{default:P(()=>[W(j(t)+" "+j(b(J)("rows")),1)]),_:2},1032,["onClick"])):w("",!0)],64))),128))]),_:1},8,["title"])):w("",!0)])]))}});const ot=ee(st,[["__scopeId","data-v-36b0b856"]]),lt={class:"input-group search-input-group"},nt=["placeholder","value","onKeydown"],rt=["onClick"],ut=T({__name:"Search",props:{modelValue:{}},emits:["update:modelValue","clear","search"],setup(e,{emit:i}){const u=l=>{i("update:modelValue",l.target.value.trim())},a=()=>{i("clear")},o=()=>{i("search")};return(l,k)=>(r(),v("div",lt,[l.$slots["start-search"]?h(l.$slots,"start-search",{key:0}):w("",!0),l.modelValue!==""?(r(),v("button",{key:1,type:"button",class:"btn btn-primary",onClick:a},[A(V,{path:b(Ce)},null,8,["path"])])):w("",!0),l.$slots["before-search"]?h(l.$slots,"before-search",{key:2}):w("",!0),p("input",{type:"text",class:"form-control",placeholder:b(J)("Search..."),value:l.modelValue,onInput:k[0]||(k[0]=y=>u(y)),onKeydown:[se(I(o,["stop"]),["enter"]),se(I(a,["stop"]),["esc"])]},null,40,nt),l.$slots["after-search"]?h(l.$slots,"after-search",{key:3}):w("",!0),p("button",{type:"button",class:"btn btn-primary",onClick:I(o,["prevent"])},[A(V,{path:b(Se)},null,8,["path"])],8,rt),l.$slots["end-search"]?h(l.$slots,"end-search",{key:4}):w("",!0)]))}}),dt=e=>(re("data-v-dc41d7ed"),e=e(),ue(),e),it={class:"row"},pt={class:"col-md-5"},ct={class:"d-flex flex-horizontal gap-3"},vt={class:"col-md-7"},ft={class:"d-flex gap-2 justify-content-end align-items-center h-100"},mt={class:"table-responsive"},gt={key:0,class:"fitable no-select"},ht=dt(()=>p("th",{class:"fitable no-select"},"#",-1)),$t=["onClick"],bt=["colspan"],yt={key:0,class:"fitable no-select align-middle"},kt={class:"fitable no-select align-middle"},wt={key:1,class:"fitable no-select align-middle"},Ct={class:"d-flex gap-2 align-items-start"},St={key:2,class:"fitable no-select align-middle"},Pt={key:0},Bt=["colspan"],Et=T({__name:"Crud",props:{fields:{},fetch:{type:Function},keyName:{default:"id"}},emits:["empty","noEmpty"],setup(e,{expose:i,emit:u}){const a=F(()=>e.fields),o=de(),l=he(),{isDarkTheme:k}=ze(l),y=Ke([]),C=S(1),$=S(5),B=S(""),g=S(e.keyName),f=S(!0),d=S(0),D=S(0),t=S(5),m=S({}),z=S(null),L=S(0),M=async()=>{var s,E,n,U;(E=(s=z.value)==null?void 0:s.start)==null||E.call(s);try{const c=await e.fetch({page:C.value,perPage:$.value,keyword:B.value,sort:`${f.value?"":"-"}${g.value}`.trim(),fields:a.value});y.value=c.data,d.value=(c==null?void 0:c.total)??0,C.value=(c==null?void 0:c.page)??1,$.value=(c==null?void 0:c.perPage)??1,D.value=(c==null?void 0:c.pages)??0,m.value={},y.value.length>0?u("noEmpty"):u("empty"),L.value++}catch{}(U=(n=z.value)==null?void 0:n.stop)==null||U.call(n)},K=async s=>{s.sortable&&(g.value=s.name,f.value=!f.value,M())},_=s=>{C.value=s.page.value,$.value=s.perPage.value,M()},pe=()=>{C.value=1,M()},ce=()=>{C.value=1,B.value="",M()},ae=()=>{M()},Q=s=>s.visible===void 0||s.visible,ve=F(()=>{var s,E,n,U,c,H;return e.fields.filter(ge=>Q(ge)).length+1+((E=(s=o==null?void 0:o.proxy)==null?void 0:s.$slots)!=null&&E.actions?1:0)+((U=(n=o==null?void 0:o.proxy)==null?void 0:n.$slots)!=null&&U.moreActions?1:0)+((H=(c=o==null?void 0:o.proxy)==null?void 0:c.$slots)!=null&&H.details?1:0)}),fe=s=>{m.value={...m.value,[s[e.keyName]]:!X(s)}},X=s=>Object.hasOwn(m.value,s[e.keyName])&&m.value[s[e.keyName]],me=F(()=>{var s;return((s=y.value)==null?void 0:s.length)??0});return ne(()=>{M()}),i({refresh:ae,length:()=>me.value,data:()=>y.value}),(s,E)=>(r(),v("div",{class:"crud-component",key:`crud-${L.value}`},[h(s.$slots,"start",{},void 0,!0),p("div",it,[p("div",pt,[p("div",ct,[A(G,{color:"primary",onClick:ae,ref_key:"refresher",ref:z,"spinner-small":"","spinner-color":"light",style:{"min-width":"50px"}},{default:P(()=>[A(V,{path:b(Pe)},null,8,["path"])]),_:1},512),A(ut,{modelValue:B.value,"onUpdate:modelValue":E[0]||(E[0]=n=>B.value=n),onClear:ce,onSearch:pe},Fe({_:2},[s.$slots["start-search"]?{name:"start-search",fn:P(()=>[h(s.$slots,"start-search",{},void 0,!0)]),key:"0"}:void 0,s.$slots["before-search"]?{name:"before-search",fn:P(()=>[h(s.$slots,"before-search",{},void 0,!0)]),key:"1"}:void 0,s.$slots["after-search"]?{name:"after-search",fn:P(()=>[h(s.$slots,"after-search",{},void 0,!0)]),key:"2"}:void 0,s.$slots["end-search"]?{name:"end-search",fn:P(()=>[h(s.$slots,"end-search",{},void 0,!0)]),key:"3"}:void 0]),1032,["modelValue"])])]),p("div",vt,[p("div",ft,[h(s.$slots,"topActions",{},void 0,!0)])])]),h(s.$slots,"before",{},void 0,!0),p("div",mt,[p("table",{class:N(["table table-bordered table-striped table-hover m-0",{"table-dark":b(k)}])},[p("thead",null,[p("tr",null,[s.$slots.details?(r(),v("th",gt," ")):w("",!0),ht,(r(!0),v(O,null,q(a.value,(n,U)=>(r(),v(O,{key:`${n.name}-${U}`},[Q(n)?(r(),v("th",{key:0,class:N({fitable:n.fitable,"no-select":!0,pointer:n.sortable,"table-active":n.sortable&&g.value===n.name})},[p("div",{class:"d-flex gap-2",onClick:I(c=>K(n),["prevent","stop"])},[p("span",null,[h(s.$slots,`${n.name}Header`,{field:n},()=>[W(j(n.label),1)],!0)]),n.sortable&&g.value===n.name?(r(),R(V,{key:0,path:f.value?b(Be):b(Ee),class:N({"ms-auto":!0}),color:b($e)()?"info":"primary"},null,8,["path","color"])):(r(),R(V,{key:1,path:b(De),class:"ms-auto text-muted"},null,8,["path"]))],8,$t)],2)):w("",!0)],64))),128)),s.$slots.moreActions||s.$slots.actions?(r(),v("th",{key:1,colspan:s.$slots.moreActions&&s.$slots.actions?2:1,class:"fitable no-select"}," Actions ",8,bt)):w("",!0)])]),p("tbody",null,[(r(!0),v(O,null,q(y.value,(n,U)=>(r(),v(O,{key:n[s.keyName]},[p("tr",null,[s.$slots.details?(r(),v("td",yt,[A(V,{path:X(n)?b(Ae):b(Ie),onClick:c=>fe(n),class:"pointer"},null,8,["path","onClick"])])):w("",!0),p("td",kt,j(U+1),1),(r(!0),v(O,null,q(a.value,(c,H)=>(r(),v(O,{key:`${c.name}-${H}`},[Q(c)?(r(),v("td",{key:0,class:N({fitable:c.fitable,"select-all":!0,"table-active":c.sortable&&g.value===c.name,border:c.sortable&&g.value===c.name,"align-middle":!0})},[h(s.$slots,`${c.name}Value`,{field:c,item:n},()=>[W(j(n[c.name]),1)],!0)],2)):w("",!0)],64))),128)),s.$slots.actions?(r(),v("td",wt,[p("div",Ct,[h(s.$slots,"actions",{item:n},void 0,!0)])])):w("",!0),s.$slots.moreActions?(r(),v("td",St,[A(ie,{"no-arrow":"",div:""},{button:P(()=>[A(V,{path:b(Ne)},null,8,["path"])]),default:P(()=>[h(s.$slots,"moreActions",{item:n},void 0,!0)]),_:2},1024)])):w("",!0)]),s.$slots.details&&X(n)?(r(),v("tr",Pt,[p("td",{colspan:ve.value,class:"p-0 align-middle"},[h(s.$slots,"details",{item:n},void 0,!0)],8,Bt)])):w("",!0)],64))),128))])],2)]),h(s.$slots,"after",{},void 0,!0),A(ot,{page:C.value,"onUpdate:page":E[1]||(E[1]=n=>C.value=n),"per-page":$.value,"onUpdate:perPage":E[2]||(E[2]=n=>$.value=n),total:d.value,"onUpdate:total":E[3]||(E[3]=n=>d.value=n),buttons:t.value,"onUpdate:buttons":E[4]||(E[4]=n=>t.value=n),onChange:_},null,8,["page","per-page","total","buttons"]),h(s.$slots,"end",{},void 0,!0)]))}});const qt=ee(Et,[["__scopeId","data-v-dc41d7ed"]]);function te(e,i=null){const u=[];let a;for(a in e)if(e.hasOwnProperty(a)){const o=i?`${i}[${a}]`:a,l=e[a];u.push(l!==null&&typeof l=="object"?te(l,o):`${encodeURIComponent(o)}=${encodeURIComponent(l)}`)}return u.join("&")}var Dt=(e=>(e.Number="number",e.String="string",e.Enum="enum",e))(Dt||{});const At=({data:e,header:i})=>({data:e,total:parseInt(i("x-pagination-total-count"))??0,page:parseInt(i("x-pagination-current-page"))??1,perPage:parseInt(i("x-pagination-per-page"))??1,pages:parseInt(i("x-pagination-page-count"))??0}),It=(e,i)=>{if(e){let u=[];for(const a of i)if(a.searchable){const o={};a.type==="number"&&/^\d+\.{0,1}\d{0,}$/.test(e)?o[a.name]=e:(a.type==="string"||a.type==="enum")&&(o[a.name]={like:e}),Object.keys(o).length>0&&u.push(o)}return u={or:u},te(u,"filter")}return""},Wt=(e,i,u)=>({page:a,perPage:o,sort:l,keyword:k,fields:y})=>new Promise((C,$)=>{const B=()=>{if(u&&Object.keys(u).length>0){let f=[];for(let d in u)typeof u[d]=="object"?f.push(te(u[d],d)):f.push(`${d}=${u[d]}`);return`&${f.join("&")}`}return""},g=It(k,y);Oe().get(`${e}?${i?`expand=${i}&`:""}page=${a}&per-page=${o}&sort=${l}${g?`&${g}`:""}${B()}`).then(f=>{C(At(f))}).catch(f=>{$(f)})}),_t=(...e)=>[...e],Ht=T({inheritAttrs:!1,__name:"ModalForm",props:{modelClass:{type:Function},name:{},size:{default:null},fullscreen:{type:[Boolean,String],default:!1}},emits:["save"],setup(e,{expose:i,emit:u}){const a=S(null),o=S(null),[l,k,y]=Re(e.modelClass),C=g=>{k({...g??{}}),oe(()=>{var f,d;(d=(f=a.value)==null?void 0:f.open)==null||d.call(f)})},$=()=>{var g,f,d,D;(D=(d=(f=(g=l.value)==null?void 0:g.validate)==null?void 0:f.call(g))==null?void 0:d.then)==null||D.call(d,t=>{var m,z;t&&l.value&&((z=(m=o.value)==null?void 0:m.start)==null||z.call(m),u("save",l.value,()=>{var L,M;(M=(L=o.value)==null?void 0:L.stop)==null||M.call(L),oe(()=>{var K,_;(_=(K=a.value)==null?void 0:K.close)==null||_.call(K)})}))})},B=()=>{y()};return i({open:C}),(g,f)=>b(l)?(r(),R(qe,{key:0,ref_key:"modal",ref:a,tag:"form",title:`${b(l).isNewRecord?"Add New":"Edit"} ${g.name}`,size:g.size,fullscreen:g.fullscreen,onSubmit:I($,["prevent"]),onClosed:B},{header:P(()=>[h(g.$slots,"header")]),buttons:P(()=>[A(G,{type:"submit",ref_key:"button",ref:o,color:"primary","spinner-color":"info",style:{height:"42px"}},{default:P(()=>[A(V,{path:b(Ve),color:"info"},null,8,["path"]),W("Save ")]),_:1},512)]),default:P(()=>[h(g.$slots,"default",{model:b(l)})]),_:3},8,["title","size","fullscreen","onSubmit"])):w("",!0)}});export{qt as C,Dt as F,Ht as _,_t as c,Wt as f};