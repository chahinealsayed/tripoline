import{C as H,B as I}from"./StringInput.vue_vue_type_script_setup_true_lang.js";import{M as O}from"./m3fc8d974e5d8216d.js";import{I as R}from"./Icon.js";import{t as U}from"./m6cd080c8112b9076.js";import{d as q,o as A,f as K,k as n,l as h,D as j,C as G,q as T,T as J,s as y,p as C,u as k,v,a as Q,r as W}from"./mc55b2a42316522d6.js";import{r as M,u as X}from"./m6bdda40d8bd2cf5a.js";import{K as N,y as Y,x as Z}from"./ma6cfd38af5d4c661.js";const _={class:"modal-content"},x={key:0,class:"modal-header"},ee={class:"modal-title"},oe={key:2,class:"modal-footer"},le={class:"d-flex flex-row gap-3"},me=q({inheritAttrs:!1,__name:"Modal",props:{title:{default:null},center:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},size:{default:null},fullscreen:{type:[Boolean,String],default:!1},backdrop:{type:[Boolean,String],default:"static"},focus:{type:Boolean,default:!1},keyboard:{type:Boolean,default:!1},noHeader:{type:Boolean,default:!1},noFooter:{type:Boolean,default:!1},noClose:{type:Boolean,default:!1},controller:{default:null},closeText:{default:"Close"},tag:{default:"div"},padding:{default:"1rem"}},emits:["close","closed","prevented","open","opened","dismiss"],setup(i,{expose:P,emit:r}){const l=M(null),p=M(null),B=e=>{r("close",e)},g=e=>{r("closed",e),i.controller&&i.controller.removeController()},E=e=>{r("prevented",e)},L=e=>{r("open",e)},w=e=>{r("opened",e)},$=e=>{r("dismiss",e)},V=()=>{var e,o,a,u,s,m,t,f,d,c;p.value=new O(l.value,{backdrop:i.backdrop,focus:i.focus,keyboard:i.keyboard}),(o=(e=l.value)==null?void 0:e.addEventListener)==null||o.call(e,"hide.bs.modal",B),(u=(a=l.value)==null?void 0:a.addEventListener)==null||u.call(a,"hidden.bs.modal",g),(m=(s=l.value)==null?void 0:s.addEventListener)==null||m.call(s,"hidePrevented.bs.modal",E),(f=(t=l.value)==null?void 0:t.addEventListener)==null||f.call(t,"show.bs.modal",L),(c=(d=l.value)==null?void 0:d.addEventListener)==null||c.call(d,"shown.bs.modal",w)},D=()=>{var e,o;(o=(e=p.value)==null?void 0:e.show)==null||o.call(e)},F=()=>{var e,o;(o=(e=p.value)==null?void 0:e.hide)==null||o.call(e)},z=()=>{var e,o,a,u,s,m,t,f,d,c,b,S;(o=(e=l.value)==null?void 0:e.removeEventListener)==null||o.call(e,"hide.bs.modal",B),(u=(a=l.value)==null?void 0:a.removeEventListener)==null||u.call(a,"hidden.bs.modal",g),(m=(s=l.value)==null?void 0:s.removeEventListener)==null||m.call(s,"hidePrevented.bs.modal",E),(f=(t=l.value)==null?void 0:t.removeEventListener)==null||f.call(t,"show.bs.modal",L),(c=(d=l.value)==null?void 0:d.removeEventListener)==null||c.call(d,"shown.bs.modal",w),(S=(b=l.value)==null?void 0:b.dispose)==null||S.call(b)};return P({open:D,close:F,dispose:z,update:()=>{var e,o;(o=(e=p.value)==null?void 0:e.handleUpdate)==null||o.call(e)}}),A(()=>{V()}),K(()=>{z()}),(e,o)=>(n(),h(J,{to:"body"},[(n(),h(j(e.tag),G({ref_key:"modalRef",ref:l,class:"modal fade",tabindex:"-1"},e.$attrs),{default:T(()=>[y("div",{class:Z(["modal-dialog",{"modal-dialog-centered":e.center,"modal-dialog-scrollable":e.scrollable,...e.size?{[`modal-${e.size}`]:!0}:{},...e.fullscreen?{[`modal-fullscreen${typeof e.fullscreen=="string"?`-${e.fullscreen}-down`:""}`]:!0}:{}}])},[y("div",_,[e.noHeader?v("",!0):(n(),C("div",x,[k(e.$slots,"title",{},()=>[y("h5",ee,N(e.title),1)]),k(e.$slots,"header"),e.noClose?v("",!0):(n(),h(H,{key:0,"data-bs-dismiss":"modal","aria-label":"Close",onClick:$}))])),e.$slots.default?(n(),C("div",{key:1,class:"modal-body",style:Y({"--bs-modal-padding":e.padding})},[k(e.$slots,"default")],4)):v("",!0),e.noFooter?v("",!0):(n(),C("div",oe,[y("div",le,[e.noClose?v("",!0):(n(),h(I,{key:0,color:"dark","data-bs-dismiss":"modal",onClick:$},{default:T(()=>[Q(R,{path:X(U)},null,8,["path"]),W(N(e.closeText),1)]),_:1})),k(e.$slots,"buttons")])]))])],2)]),_:3},16))]))}});export{me as _};
