"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{6712:(O,E,r)=>{r.d(E,{c:()=>c});var v=r(1688),s=r(7150),l=r(9203);const c=(i,e)=>{let n,o;const u=(a,h,w)=>{if(typeof document>"u")return;const M=document.elementFromPoint(a,h);M&&e(M)?M!==n&&(t(),g(M,w)):t()},g=(a,h)=>{n=a,o||(o=n);const w=n;(0,v.w)(()=>w.classList.add("ion-activated")),h()},t=(a=!1)=>{if(!n)return;const h=n;(0,v.w)(()=>h.classList.remove("ion-activated")),a&&o!==n&&n.click(),n=void 0};return(0,l.createGesture)({el:i,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>u(a.currentX,a.currentY,s.a),onMove:a=>u(a.currentX,a.currentY,s.b),onEnd:()=>{t(!0),(0,s.h)(),o=void 0}})}},4874:(O,E,r)=>{r.d(E,{g:()=>s});var v=r(6225);const s=()=>{if(void 0!==v.w)return v.w.Capacitor}},5149:(O,E,r)=>{r.d(E,{g:()=>v});const v=(e,n,o,u,g)=>l(e[1],n[1],o[1],u[1],g).map(t=>s(e[0],n[0],o[0],u[0],t)),s=(e,n,o,u,g)=>g*(3*n*Math.pow(g-1,2)+g*(-3*o*g+3*o+u*g))-e*Math.pow(g-1,3),l=(e,n,o,u,g)=>i((u-=g)-3*(o-=g)+3*(n-=g)-(e-=g),3*o-6*n+3*e,3*n-3*e,e).filter(a=>a>=0&&a<=1),i=(e,n,o,u)=>{if(0===e)return((e,n,o)=>{const u=n*n-4*e*o;return u<0?[]:[(-n+Math.sqrt(u))/(2*e),(-n-Math.sqrt(u))/(2*e)]})(n,o,u);const g=(3*(o/=e)-(n/=e)*n)/3,t=(2*n*n*n-9*n*o+27*(u/=e))/27;if(0===g)return[Math.pow(-t,1/3)];if(0===t)return[Math.sqrt(-g),-Math.sqrt(-g)];const a=Math.pow(t/2,2)+Math.pow(g/3,3);if(0===a)return[Math.pow(t/2,.5)-n/3];if(a>0)return[Math.pow(-t/2+Math.sqrt(a),1/3)-Math.pow(t/2+Math.sqrt(a),1/3)-n/3];const h=Math.sqrt(Math.pow(-g/3,3)),w=Math.acos(-t/(2*Math.sqrt(Math.pow(-g/3,3)))),M=2*Math.pow(h,1/3);return[M*Math.cos(w/3)-n/3,M*Math.cos((w+2*Math.PI)/3)-n/3,M*Math.cos((w+4*Math.PI)/3)-n/3]}},5085:(O,E,r)=>{r.d(E,{i:()=>v});const v=s=>s&&""!==s.dir?"rtl"===s.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},2779:(O,E,r)=>{r.r(E),r.d(E,{startFocusVisible:()=>c});const v="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=i=>{let e=[],n=!0;const o=i?i.shadowRoot:document,u=i||document.body,g=y=>{e.forEach(d=>d.classList.remove(v)),y.forEach(d=>d.classList.add(v)),e=y},t=()=>{n=!1,g([])},a=y=>{n=l.includes(y.key),n||g([])},h=y=>{if(n&&void 0!==y.composedPath){const d=y.composedPath().filter(_=>!!_.classList&&_.classList.contains("ion-focusable"));g(d)}},w=()=>{o.activeElement===u&&g([])};return o.addEventListener("keydown",a),o.addEventListener("focusin",h),o.addEventListener("focusout",w),o.addEventListener("touchstart",t,{passive:!0}),o.addEventListener("mousedown",t),{destroy:()=>{o.removeEventListener("keydown",a),o.removeEventListener("focusin",h),o.removeEventListener("focusout",w),o.removeEventListener("touchstart",t),o.removeEventListener("mousedown",t)},setFocus:g}}},5487:(O,E,r)=>{r.d(E,{c:()=>s});var v=r(839);const s=e=>{const n=e;let o;return{hasLegacyControl:()=>{if(void 0===o){const g=void 0!==n.label||l(n),t=n.hasAttribute("aria-label")||n.hasAttribute("aria-labelledby")&&null===n.shadowRoot,a=(0,v.h)(n);o=!0===n.legacy||!g&&!t&&null!==a}return o}}},l=e=>null!==e.shadowRoot&&!!(c.includes(e.tagName)&&null!==e.querySelector('[slot="label"]')||i.includes(e.tagName)&&""!==e.textContent),c=["ION-RANGE"],i=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7150:(O,E,r)=>{r.d(E,{I:()=>s,a:()=>n,b:()=>o,c:()=>e,d:()=>g,h:()=>u});var v=r(4874),s=function(t){return t.Heavy="HEAVY",t.Medium="MEDIUM",t.Light="LIGHT",t}(s||{});const c={getEngine(){const t=window.TapticEngine;if(t)return t;const a=(0,v.g)();return null!=a&&a.isPluginAvailable("Haptics")?a.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const a=(0,v.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,v.g)(),impact(t){const a=this.getEngine();if(!a)return;const h=this.isCapacitor()?t.style:t.style.toLowerCase();a.impact({style:h})},notification(t){const a=this.getEngine();if(!a)return;const h=this.isCapacitor()?t.type:t.type.toLowerCase();a.notification({type:h})},selection(){const t=this.isCapacitor()?s.Light:"light";this.impact({style:t})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>c.available(),e=()=>{i()&&c.selection()},n=()=>{i()&&c.selectionStart()},o=()=>{i()&&c.selectionChanged()},u=()=>{i()&&c.selectionEnd()},g=t=>{i()&&c.impact(t)}},8360:(O,E,r)=>{r.d(E,{I:()=>e,a:()=>g,b:()=>i,c:()=>h,d:()=>M,f:()=>t,g:()=>u,i:()=>o,p:()=>w,r:()=>y,s:()=>a});var v=r(5861),s=r(839),l=r(6710);const i="ion-content",e=".ion-content-scroll-host",n=`${i}, ${e}`,o=d=>"ION-CONTENT"===d.tagName,u=function(){var d=(0,v.Z)(function*(_){return o(_)?(yield new Promise(m=>(0,s.c)(_,m)),_.getScrollElement()):_});return function(m){return d.apply(this,arguments)}}(),g=d=>d.querySelector(e)||d.querySelector(n),t=d=>d.closest(n),a=(d,_)=>o(d)?d.scrollToTop(_):Promise.resolve(d.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),h=(d,_,m,p)=>o(d)?d.scrollByPoint(_,m,p):Promise.resolve(d.scrollBy({top:m,left:_,behavior:p>0?"smooth":"auto"})),w=d=>(0,l.b)(d,i),M=d=>{if(o(d)){const m=d.scrollY;return d.scrollY=!1,m}return d.style.setProperty("overflow","hidden"),!0},y=(d,_)=>{o(d)?d.scrollY=_:d.style.removeProperty("overflow")}},3173:(O,E,r)=>{r.d(E,{a:()=>v,b:()=>h,c:()=>n,d:()=>w,e:()=>D,f:()=>e,g:()=>M,h:()=>l,i:()=>s,j:()=>p,k:()=>C,l:()=>o,m:()=>t,n:()=>y,o:()=>g,p:()=>i,q:()=>c,r:()=>m,s:()=>f,t:()=>a,u:()=>d,v:()=>_,w:()=>u});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(O,E,r)=>{r.d(E,{c:()=>c,g:()=>i});var v=r(6225),s=r(839),l=r(6710);const c=(n,o,u)=>{let g,t;void 0!==v.w&&"MutationObserver"in v.w&&(g=new MutationObserver(M=>{for(const y of M)for(const d of y.addedNodes)if(d.nodeType===Node.ELEMENT_NODE&&d.slot===o)return u(),void(0,s.r)(()=>a(d))}),g.observe(n,{childList:!0}));const a=M=>{var y;t&&(t.disconnect(),t=void 0),t=new MutationObserver(d=>{u();for(const _ of d)for(const m of _.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===o&&w()}),t.observe(null!==(y=M.parentElement)&&void 0!==y?y:M,{subtree:!0,childList:!0})},w=()=>{t&&(t.disconnect(),t=void 0)};return{destroy:()=>{g&&(g.disconnect(),g=void 0),w()}}},i=(n,o,u)=>{const g=null==n?0:n.toString().length,t=e(g,o);if(void 0===u)return t;try{return u(g,o)}catch(a){return(0,l.a)("Exception in provided `counterFormatter`.",a),t}},e=(n,o)=>`${n} / ${o}`},7484:(O,E,r)=>{r.d(E,{K:()=>c,a:()=>l});var v=r(4874),s=function(i){return i.Unimplemented="UNIMPLEMENTED",i.Unavailable="UNAVAILABLE",i}(s||{}),l=function(i){return i.Body="body",i.Ionic="ionic",i.Native="native",i.None="none",i}(l||{});const c={getEngine(){const i=(0,v.g)();if(null!=i&&i.isPluginAvailable("Keyboard"))return i.Plugins.Keyboard},getResizeMode(){const i=this.getEngine();return null!=i&&i.getResizeMode?i.getResizeMode().catch(e=>{if(e.code!==s.Unimplemented)throw e}):Promise.resolve(void 0)}}},1612:(O,E,r)=>{r.r(E),r.d(E,{KEYBOARD_DID_CLOSE:()=>i,KEYBOARD_DID_OPEN:()=>c,copyVisualViewport:()=>C,keyboardDidClose:()=>d,keyboardDidOpen:()=>M,keyboardDidResize:()=>y,resetKeyboardAssist:()=>g,setKeyboardClose:()=>w,setKeyboardOpen:()=>h,startKeyboardAssist:()=>t,trackViewportChanges:()=>p});var v=r(7484);r(4874),r(6225);const c="ionKeyboardDidShow",i="ionKeyboardDidHide";let n={},o={},u=!1;const g=()=>{n={},o={},u=!1},t=f=>{if(v.K.getEngine())a(f);else{if(!f.visualViewport)return;o=C(f.visualViewport),f.visualViewport.onresize=()=>{p(f),M()||y(f)?h(f):d(f)&&w(f)}}},a=f=>{f.addEventListener("keyboardDidShow",D=>h(f,D)),f.addEventListener("keyboardDidHide",()=>w(f))},h=(f,D)=>{_(f,D),u=!0},w=f=>{m(f),u=!1},M=()=>!u&&n.width===o.width&&(n.height-o.height)*o.scale>150,y=f=>u&&!d(f),d=f=>u&&o.height===f.innerHeight,_=(f,D)=>{const P=new CustomEvent(c,{detail:{keyboardHeight:D?D.keyboardHeight:f.innerHeight-o.height}});f.dispatchEvent(P)},m=f=>{const D=new CustomEvent(i);f.dispatchEvent(D)},p=f=>{n=Object.assign({},o),o=C(f.visualViewport)},C=f=>({width:Math.round(f.width),height:Math.round(f.height),offsetTop:f.offsetTop,offsetLeft:f.offsetLeft,pageTop:f.pageTop,pageLeft:f.pageLeft,scale:f.scale})},3459:(O,E,r)=>{r.d(E,{c:()=>e});var v=r(5861),s=r(6225),l=r(7484);const c=n=>{if(void 0===s.d||n===l.a.None||void 0===n)return null;const o=s.d.querySelector("ion-app");return null!=o?o:s.d.body},i=n=>{const o=c(n);return null===o?0:o.clientHeight},e=function(){var n=(0,v.Z)(function*(o){let u,g,t,a;const h=function(){var _=(0,v.Z)(function*(){const m=yield l.K.getResizeMode(),p=void 0===m?void 0:m.mode;u=()=>{void 0===a&&(a=i(p)),t=!0,w(t,p)},g=()=>{t=!1,w(t,p)},null==s.w||s.w.addEventListener("keyboardWillShow",u),null==s.w||s.w.addEventListener("keyboardWillHide",g)});return function(){return _.apply(this,arguments)}}(),w=(_,m)=>{o&&o(_,M(m))},M=_=>{if(0===a||a===i(_))return;const m=c(_);return null!==m?new Promise(p=>{const f=new ResizeObserver(()=>{m.clientHeight===a&&(f.disconnect(),p())});f.observe(m)}):void 0};return yield h(),{init:h,destroy:()=>{null==s.w||s.w.removeEventListener("keyboardWillShow",u),null==s.w||s.w.removeEventListener("keyboardWillHide",g),u=g=void 0},isKeyboardVisible:()=>t}});return function(u){return n.apply(this,arguments)}}()},679:(O,E,r)=>{r.d(E,{c:()=>l});var v=r(6225),s=r(839);const l=(c,i,e)=>{let n;const o=()=>!(void 0===i()||void 0!==c.label||null===e()),g=()=>{const a=i();if(void 0===a)return;if(!o())return void a.style.removeProperty("width");const h=e().scrollWidth;if(0===h&&null===a.offsetParent&&void 0!==v.w&&"IntersectionObserver"in v.w){if(void 0!==n)return;const w=n=new IntersectionObserver(M=>{1===M[0].intersectionRatio&&(g(),w.disconnect(),n=void 0)},{threshold:.01,root:c});w.observe(a)}else a.style.setProperty("width",.75*h+"px")};return{calculateNotchWidth:()=>{o()&&(0,s.r)(()=>{g()})},destroy:()=>{n&&(n.disconnect(),n=void 0)}}}},3781:(O,E,r)=>{r.d(E,{S:()=>s});const s={bubbles:{dur:1e3,circles:9,fn:(l,c,i)=>{const e=l*c/i-l+"ms",n=2*Math.PI*c/i;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":e}}}},circles:{dur:1e3,circles:8,fn:(l,c,i)=>{const e=c/i,n=l*e-l+"ms",o=2*Math.PI*e;return{r:5,style:{top:32*Math.sin(o)+"%",left:32*Math.cos(o)+"%","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,c)=>({r:6,style:{left:32-32*c+"%","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,c,i)=>({y1:14,y2:26,style:{transform:`rotate(${360/i*c+(c<i/2?180:-180)}deg)`,"animation-delay":l*c/i-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,c,i)=>({y1:12,y2:20,style:{transform:`rotate(${360/i*c+(c<i/2?180:-180)}deg)`,"animation-delay":l*c/i-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,c,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":l*c/i-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,c,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":l*c/i-l+"ms"}})}}},8466:(O,E,r)=>{r.r(E),r.d(E,{createSwipeBackGesture:()=>i});var v=r(839),s=r(5085),l=r(9203);r(619);const i=(e,n,o,u,g)=>{const t=e.ownerDocument.defaultView;let a=(0,s.i)(e);const w=m=>a?-m.deltaX:m.deltaX;return(0,l.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:m=>(a=(0,s.i)(e),(m=>{const{startX:C}=m;return a?C>=t.innerWidth-50:C<=50})(m)&&n()),onStart:o,onMove:m=>{const C=w(m)/t.innerWidth;u(C)},onEnd:m=>{const p=w(m),C=t.innerWidth,f=p/C,D=(m=>a?-m.velocityX:m.velocityX)(m),P=D>=0&&(D>.2||p>C/2),S=(P?1-f:f)*C;let T=0;if(S>5){const A=S/Math.abs(D);T=Math.min(A,540)}g(P,f<=0?.01:(0,v.l)(0,f,.9999),T)}})}},7063:(O,E,r)=>{r.d(E,{w:()=>v});const v=(c,i,e)=>{if(typeof MutationObserver>"u")return;const n=new MutationObserver(o=>{e(s(o,i))});return n.observe(c,{childList:!0,subtree:!0}),n},s=(c,i)=>{let e;return c.forEach(n=>{for(let o=0;o<n.addedNodes.length;o++)e=l(n.addedNodes[o],i)||e}),e},l=(c,i)=>1!==c.nodeType?void 0:(c.tagName===i.toUpperCase()?[c]:Array.from(c.querySelectorAll(i))).find(n=>n.value===c.value)},7937:(O,E,r)=>{r.d(E,{a:()=>i});var v=r(6814),s=r(95),l=r(9843),c=r(9468);let i=(()=>{var e;class n{}return(e=n).\u0275fac=function(u){return new(u||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[v.ez,s.u5,l.Pc]}),n})()},4373:(O,E,r)=>{r.d(E,{g:()=>n});var v=r(5861),s=r(9468),l=r(9843),c=r(3660),i=r(1414),e=r(95);let n=(()=>{var o;class u{constructor(t,a,h,w){this.modalController=t,this.settingsService=a,this.wakelockService=h,this.alertController=w,this.preventScreenTimeout=!1,this.buttonLongPressDelay=1e3}ngOnInit(){var t=this;return(0,v.Z)(function*(){yield t.loadCurrentSettings()})()}confirm(){var t=this;return(0,v.Z)(function*(){yield t.saveSettings(),yield t.modalController.dismiss(null,"confirm")})()}cancel(){var t=this;return(0,v.Z)(function*(){yield t.modalController.dismiss(null,"cancel")})()}saveSettings(){var t=this;return(0,v.Z)(function*(){yield t.settingsService.setWakeLockEnabled(t.preventScreenTimeout),yield t.settingsService.setButtonLongPressDelay(t.buttonLongPressDelay),yield t.wakelockService.updateWakeLock()})()}loadCurrentSettings(){var t=this;return(0,v.Z)(function*(){t.preventScreenTimeout=yield t.settingsService.getWakeLockEnabled(),t.buttonLongPressDelay=yield t.settingsService.getButtonLongPressDelay()})()}preventScreenTimeoutChange(t){var a=this;return(0,v.Z)(function*(){!0===t&&(yield(yield a.alertController.create({header:"Warning",message:"Displaying a static image for a long time can cause screen burn-in on some screens.",buttons:["OK"]})).present())})()}}return(o=u).\u0275fac=function(t){return new(t||o)(s.Y36(l.IN),s.Y36(c.g),s.Y36(i.$),s.Y36(l.Br))},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-settings-modal"]],decls:21,vars:4,consts:[["slot","start"],[3,"click"],["slot","end"],[3,"strong","click"],["name","timer","slot","start"],[3,"ngModel","ngModelChange"],["slot","start",1,"mdi","mdi-gesture-tap-box","d-flex","align-items-center"],["label-placement","start","label","Button long press delay","ticks","true","step","100","snaps","true","min","100","max","2000",3,"ngModel","ngModelChange"]],template:function(t,a){1&t&&(s.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),s.NdJ("click",function(){return a.cancel()}),s._uU(4,"Cancel"),s.qZA()(),s.TgZ(5,"ion-title"),s._uU(6,"Settings"),s.qZA(),s.TgZ(7,"ion-buttons",2)(8,"ion-button",3),s.NdJ("click",function(){return a.confirm()}),s._uU(9,"Save"),s.qZA()()()(),s.TgZ(10,"ion-content")(11,"ion-list")(12,"ion-item"),s._UZ(13,"ion-icon",4),s.TgZ(14,"ion-toggle",5),s.NdJ("ngModelChange",function(w){return a.preventScreenTimeoutChange(w)})("ngModelChange",function(w){return a.preventScreenTimeout=w}),s._uU(15,"Prevent screen timeout"),s.qZA()(),s.TgZ(16,"ion-item"),s._UZ(17,"ion-icon",6),s.TgZ(18,"ion-range",7),s.NdJ("ngModelChange",function(w){return a.buttonLongPressDelay=w}),s.qZA(),s.TgZ(19,"ion-label",2),s._uU(20),s.qZA()()()()),2&t&&(s.xp6(8),s.Q6J("strong",!0),s.xp6(6),s.Q6J("ngModel",a.preventScreenTimeout),s.xp6(4),s.Q6J("ngModel",a.buttonLongPressDelay),s.xp6(2),s.hij("",a.buttonLongPressDelay,"ms"))},dependencies:[l.YG,l.Sm,l.W2,l.Gu,l.gu,l.Ie,l.Q$,l.q_,l.I_,l.wd,l.ho,l.sr,l.w,l.QI,e.JJ,e.On]}),u})()},7911:(O,E,r)=>{r.r(E),r.d(E,{WebHomePageModule:()=>y});var v=r(6814),s=r(95),l=r(9843),c=r(5877),i=r(5861),e=r(9468),n=r(3593),o=r(5015),u=r(1414),g=r(3660);function t(d,_){if(1&d&&(e.TgZ(0,"div",3),e._UZ(1,"div",4),e.TgZ(2,"h4"),e._uU(3,"I lost the connection to the server \u{1fae4}"),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.qZA()()),2&d){const m=e.oxw();e.xp6(5),e.hij("I'll try to reconnect in ",m.retryCountdown,"...")}}const h=[{path:"",component:(()=>{var d;class _{constructor(p,C,f,D,L,P,b,S){this.document=p,this.connectionService=C,this.route=f,this.modalController=D,this.alertController=L,this.websocketService=P,this.wakeLockService=b,this.settingsService=S,this.connectionLost=!1,this.retryCountdown=10}ngOnInit(){var p=this;return(0,i.Z)(function*(){p.clientId=yield p.settingsService.getClientId(),p.version="Web Version",yield p.connect(),p.websocketService.connectionLost.subscribe((0,i.Z)(function*(){yield p.lostConnection()}))})()}lostConnection(){var p=this;return(0,i.Z)(function*(){p.connectionLost=!0,p.retryCountdown=10;let C=setInterval((0,i.Z)(function*(){p.retryCountdown--,0==p.retryCountdown&&(clearInterval(C),yield p.connect())}),1e3)})()}connect(){var p=this;return(0,i.Z)(function*(){p.connectionLost=!1;const f=p.document.baseURI.split("/"),P=`${f[0].toLowerCase().replace("http","ws")}//${f[2]}`;yield p.websocketService.connectToString(P)})()}}return(d=_).\u0275fac=function(p){return new(p||d)(e.Y36(v.K0),e.Y36(n.M),e.Y36(c.gz),e.Y36(l.IN),e.Y36(l.Br),e.Y36(o.i),e.Y36(u.$),e.Y36(g.g))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-web-home"]],decls:7,vars:3,consts:[[1,"d-flex","justify-content-center","align-items-center","align-content-center","h-100"],["class","d-flex flex-column align-items-center",4,"ngIf"],[1,"ms-3"],[1,"d-flex","flex-column","align-items-center"],[1,"icon","mb-2"]],template:function(p,C){1&p&&(e.TgZ(0,"ion-content")(1,"div",0),e.YNc(2,t,6,1,"div",1),e.qZA()(),e.TgZ(3,"ion-footer")(4,"ion-toolbar")(5,"ion-text",2),e._uU(6),e.qZA()()()),2&p&&(e.xp6(2),e.Q6J("ngIf",C.connectionLost),e.xp6(4),e.AsE("",C.version," | Client Id: ",C.clientId,""))},dependencies:[v.O5,l.W2,l.fr,l.yW,l.sr],styles:[".icon[_ngcontent-%COMP%]{background-image:url(assets/icon.png);width:10rem;height:10rem;background-size:contain;background-repeat:no-repeat;background-position:center;transform:scale(.9);animation:_ngcontent-%COMP%_pulseAnimation 2s ease 1s infinite normal forwards}@keyframes _ngcontent-%COMP%_pulseAnimation{0%{transform:scale(.9)}50%{transform:scale(1)}to{transform:scale(.9)}}"]}),_})()}];let w=(()=>{var d;class _{}return(d=_).\u0275fac=function(p){return new(p||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[c.Bz.forChild(h),c.Bz]}),_})();var M=r(7937);let y=(()=>{var d;class _{}return(d=_).\u0275fac=function(p){return new(p||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[v.ez,s.u5,l.Pc,w,M.a]}),_})()},3593:(O,E,r)=>{r.d(E,{M:()=>c});var v=r(5861),s=r(9468),l=r(2014);let c=(()=>{var i;class e{constructor(o){this.storage=o,this.connectionsStorageKey="connections"}getConnections(){var o=this;return(0,v.Z)(function*(){const u=yield o.storage.get(o.connectionsStorageKey);return void 0===u?[]:JSON.parse(u)})()}addUpdateConnection(o){var u=this;return(0,v.Z)(function*(){var g;const t=yield u.storage.get(u.connectionsStorageKey);let a=null!==(g=JSON.parse(t))&&void 0!==g?g:[];if(console.log(o),void 0===o.id)o.id=`connection${Math.floor(Date.now()/1e3)}`;else{const h=a.findIndex(w=>w.id===o.id);h>-1&&a.splice(h,1)}a.push(o),console.log(a),yield u.storage.set(u.connectionsStorageKey,JSON.stringify(a))})()}deleteConnection(o){var u=this;return(0,v.Z)(function*(){var g;const t=yield u.storage.get(u.connectionsStorageKey);let a=null!==(g=JSON.parse(t))&&void 0!==g?g:[];const h=a.findIndex(w=>w.id==o);h>-1&&a.splice(h,1),yield u.storage.set(u.connectionsStorageKey,JSON.stringify(a))})()}}return(i=e).\u0275fac=function(o){return new(o||i)(s.LFG(l.K))},i.\u0275prov=s.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),e})()}}]);