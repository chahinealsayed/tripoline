import{d as Q,p as S,o as be,n as ye,e as xe,i as fe,w as q,j as ve,h as _,F as Ae,k as T}from"./mc55b2a42316522d6.js";import{r as f,a as E}from"./m6bdda40d8bd2cf5a.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const d={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},pe={itemsToShow:{default:d.itemsToShow,type:Number},itemsToScroll:{default:d.itemsToScroll,type:Number},wrapAround:{default:d.wrapAround,type:Boolean},throttle:{default:d.throttle,type:Number},snapAlign:{default:d.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:d.transition,type:Number},breakpoints:{default:d.breakpoints,type:Object},autoplay:{default:d.autoplay,type:Number},pauseAutoplayOnHover:{default:d.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:d.mouseDrag,type:Boolean},touchDrag:{default:d.touchDrag,type:Boolean},dir:{default:d.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:d.i18n,type:Object},settings:{default(){return{}},type:Object}};function Te({config:e,slidesCount:r}){const{snapAlign:n,wrapAround:o,itemsToShow:l=1}=e;if(o)return Math.max(r-1,0);let i;switch(n){case"start":i=r-l;break;case"end":i=r-1;break;case"center":case"center-odd":i=r-Math.ceil((l-.5)/2);break;case"center-even":i=r-Math.ceil(l/2);break;default:i=0;break}return Math.max(i,0)}function ke({config:e,slidesCount:r}){const{wrapAround:n,snapAlign:o,itemsToShow:l=1}=e;let i=0;if(n||l>r)return i;switch(o){case"start":i=0;break;case"end":i=l-1;break;case"center":case"center-odd":i=Math.floor((l-1)/2);break;case"center-even":i=Math.floor((l-2)/2);break;default:i=0;break}return i}function J({val:e,max:r,min:n}){return r<n?e:Math.min(Math.max(e,n),r)}function Ce({config:e,currentSlide:r,slidesCount:n}){const{snapAlign:o,wrapAround:l,itemsToShow:i=1}=e;let g=r;switch(o){case"center":case"center-odd":g-=(i-1)/2;break;case"center-even":g-=(i-2)/2;break;case"end":g-=i-1;break}return l?g:J({val:g,max:n-i,min:0})}function ge(e){return e?e.reduce((r,n)=>{var o;return n.type===Ae?[...r,...ge(n.children)]:((o=n.type)===null||o===void 0?void 0:o.name)==="CarouselSlide"?[...r,n]:r},[]):[]}function K({val:e,max:r,min:n=0}){return e>r?K({val:e-(r+1),max:r,min:n}):e<n?K({val:e+(r+1),max:r,min:n}):e}function _e(e,r){let n;return r?function(...o){const l=this;n||(e.apply(l,o),n=!0,setTimeout(()=>n=!1,r))}:e}function Oe(e,r){let n;return function(...o){n&&clearTimeout(n),n=setTimeout(()=>{e(...o),n=null},r)}}function Me(e="",r={}){return Object.entries(r).reduce((n,[o,l])=>n.replace(`{${o}}`,String(l)),e)}var je=Q({name:"ARIA",setup(){const e=T("config",E(Object.assign({},d))),r=T("currentSlide",f(0)),n=T("slidesCount",f(0));return()=>_("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Me(e.i18n.itemXofY,{currentSlide:r.value+1,slidesCount:n.value}))}}),De=Q({name:"Carousel",props:pe,setup(e,{slots:r,emit:n,expose:o}){var l;const i=f(null),g=f([]),w=f(0),v=f(0),a=E(Object.assign({},d));let m=Object.assign({},d),b;const u=f((l=e.modelValue)!==null&&l!==void 0?l:0),R=f(0),Z=f(0),k=f(0),O=f(0);let C,V;S("config",a),S("slidesCount",v),S("currentSlide",u),S("maxSlide",k),S("minSlide",O),S("slideWidth",w);function X(){b=Object.assign({},e.breakpoints),m=Object.assign(Object.assign(Object.assign({},m),e),{i18n:Object.assign(Object.assign({},m.i18n),e.i18n),breakpoints:void 0}),ee(m)}function N(){if(!b||!Object.keys(b).length)return;const t=Object.keys(b).map(s=>Number(s)).sort((s,h)=>+h-+s);let c=Object.assign({},m);t.some(s=>{const h=window.matchMedia(`(min-width: ${s}px)`).matches;return h&&(c=Object.assign(Object.assign({},c),b[s])),h}),ee(c)}function ee(t){Object.entries(t).forEach(([c,s])=>a[c]=s)}const te=Oe(()=>{N(),M()},16);function M(){if(!i.value)return;const t=i.value.getBoundingClientRect();w.value=t.width/a.itemsToShow}function B(){v.value<=0||(Z.value=Math.ceil((v.value-1)/2),k.value=Te({config:a,slidesCount:v.value}),O.value=ke({config:a,slidesCount:v.value}),a.wrapAround||(u.value=J({val:u.value,max:k.value,min:O.value})))}be(()=>{ye(()=>M()),setTimeout(()=>M(),1e3),N(),ie(),window.addEventListener("resize",te,{passive:!0}),n("init")}),xe(()=>{V&&clearTimeout(V),C&&clearInterval(C),window.removeEventListener("resize",te,{passive:!0})});let p=!1;const D={x:0,y:0},I={x:0,y:0},y=E({x:0,y:0}),L=f(!1),$=f(!1),he=()=>{L.value=!0},Se=()=>{L.value=!1};function ne(t){["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||(p=t.type==="touchstart",p||t.preventDefault(),!(!p&&t.button!==0||x.value)&&(D.x=p?t.touches[0].clientX:t.clientX,D.y=p?t.touches[0].clientY:t.clientY,document.addEventListener(p?"touchmove":"mousemove",re,!0),document.addEventListener(p?"touchend":"mouseup",ae,!0)))}const re=_e(t=>{$.value=!0,I.x=p?t.touches[0].clientX:t.clientX,I.y=p?t.touches[0].clientY:t.clientY;const c=I.x-D.x,s=I.y-D.y;y.y=s,y.x=c},a.throttle);function ae(){const t=a.dir==="rtl"?-1:1,c=Math.sign(y.x)*.4,s=Math.round(y.x/w.value+c)*t;if(s&&!p){const h=W=>{W.stopPropagation(),window.removeEventListener("click",h,!0)};window.addEventListener("click",h,!0)}A(u.value-s),y.x=0,y.y=0,$.value=!1,document.removeEventListener(p?"touchmove":"mousemove",re,!0),document.removeEventListener(p?"touchend":"mouseup",ae,!0)}function ie(){!a.autoplay||a.autoplay<=0||(C=setInterval(()=>{a.pauseAutoplayOnHover&&L.value||P()},a.autoplay))}function oe(){C&&(clearInterval(C),C=null),ie()}const x=f(!1);function A(t){const c=a.wrapAround?t:J({val:t,max:k.value,min:O.value});u.value===c||x.value||(n("slide-start",{slidingToIndex:t,currentSlideIndex:u.value,prevSlideIndex:R.value,slidesCount:v.value}),x.value=!0,R.value=u.value,u.value=c,V=setTimeout(()=>{if(a.wrapAround){const s=K({val:c,max:k.value,min:0});s!==u.value&&(u.value=s,n("loop",{currentSlideIndex:u.value,slidingToIndex:t}))}n("update:modelValue",u.value),n("slide-end",{currentSlideIndex:u.value,prevSlideIndex:R.value,slidesCount:v.value}),x.value=!1,oe()},a.transition))}function P(){A(u.value+a.itemsToScroll)}function Y(){A(u.value-a.itemsToScroll)}const le={slideTo:A,next:P,prev:Y};S("nav",le),S("isSliding",x);const se=fe(()=>Ce({config:a,currentSlide:u.value,slidesCount:v.value}));S("slidesToScroll",se);const we=fe(()=>{const t=a.dir==="rtl"?-1:1,c=se.value*w.value*t;return{transform:`translateX(${y.x-c}px)`,transition:`${x.value?a.transition:0}ms`,margin:a.wrapAround?`0 -${v.value*w.value}px`:"",width:"100%"}});function ue(){X(),N(),B(),M(),oe()}Object.keys(pe).forEach(t=>{["modelValue"].includes(t)||q(()=>e[t],ue)}),q(()=>e.modelValue,t=>{t!==u.value&&A(Number(t))}),q(v,B),n("before-init"),X();const ce={config:a,slidesCount:v,slideWidth:w,next:P,prev:Y,slideTo:A,currentSlide:u,maxSlide:k,minSlide:O,middleSlide:Z};o({updateBreakpointsConfigs:N,updateSlidesData:B,updateSlideWidth:M,initDefaultConfigs:X,restartCarousel:ue,slideTo:A,next:P,prev:Y,nav:le,data:ce});const H=r.default||r.slides,U=r.addons,de=E(ce);return()=>{const t=ge(H==null?void 0:H(de)),c=(U==null?void 0:U(de))||[];t.forEach((z,F)=>z.props.index=F);let s=t;if(a.wrapAround){const z=t.map((G,j)=>ve(G,{index:-t.length+j,isClone:!0,key:`clone-before-${j}`})),F=t.map((G,j)=>ve(G,{index:t.length+j,isClone:!0,key:`clone-after-${j}`}));s=[...z,...t,...F]}g.value=t,v.value=Math.max(t.length,1);const h=_("ol",{class:"carousel__track",style:we.value,onMousedownCapture:a.mouseDrag?ne:null,onTouchstartPassiveCapture:a.touchDrag?ne:null},s),W=_("div",{class:"carousel__viewport"},h);return _("section",{ref:i,class:{carousel:!0,"is-sliding":x.value,"is-dragging":$.value,"is-hover":L.value,"carousel--rtl":a.dir==="rtl"},dir:a.dir,"aria-label":a.i18n.ariaGallery,tabindex:"0",onMouseenter:he,onMouseleave:Se},[W,c,_(je)])}}}),me;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(me||(me={}));var Ie=Q({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:r}){const n=T("config",E(Object.assign({},d))),o=T("currentSlide",f(0)),l=T("slidesToScroll",f(0)),i=T("isSliding",f(!1)),g=()=>e.index===o.value,w=()=>e.index===o.value-1,v=()=>e.index===o.value+1,a=()=>{const m=Math.floor(l.value),b=Math.ceil(l.value+n.itemsToShow-1);return e.index>=m&&e.index<=b};return()=>{var m;return _("li",{style:{width:`${100/n.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":a(),"carousel__slide--active":g(),"carousel__slide--prev":w(),"carousel__slide--next":v(),"carousel__slide--sliding":i.value},"aria-hidden":!a()},(m=r.default)===null||m===void 0?void 0:m.call(r))}}});export{De as C,Ie as S};
//# sourceMappingURL=m9d9b7be94b8ce3fb.js.map