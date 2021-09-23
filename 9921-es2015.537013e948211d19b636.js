"use strict";(self.webpackChunklasa_schedules=self.webpackChunklasa_schedules||[]).push([[9921],{9921:function(e,r,t){t.r(r),t.d(r,{ion_refresher:function(){return v},ion_refresher_content:function(){return b}});var n=t(8239),s=t(3150),i=t(7585),o=t(7807),a=t(2377),l=t(2954),h=t(4086),f=t(6575),c=t(408);const d=e=>{const r=e.querySelector("ion-spinner"),t=r.shadowRoot.querySelector("circle"),n=e.querySelector(".spinner-arrow-container"),s=e.querySelector(".arrow-container"),i=s?s.querySelector("ion-icon"):null,o=(0,h.c)().duration(1e3).easing("ease-out"),a=(0,h.c)().addElement(n).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),l=(0,h.c)().addElement(t).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),f=(0,h.c)().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(s&&i){const e=(0,h.c)().addElement(s).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),r=(0,h.c)().addElement(i).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([e,r])}return o.addAnimation([a,l,f])},p=(e,r)=>{e.style.setProperty("opacity",r.toString())},g=(e,r)=>{if(!e)return Promise.resolve();const t=u(e,200);return(0,s.c)(()=>{e.style.setProperty("transition","0.2s all ease-out"),void 0===r?e.style.removeProperty("transform"):e.style.setProperty("transform",`translate3d(0px, ${r}, 0px)`)}),t},m=function(){var e=(0,n.Z)(function*(e,r){const t=e.querySelector("ion-refresher-content");if(!t)return Promise.resolve(!1);yield new Promise(e=>(0,a.c)(t,e));const n=e.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),s=e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return null!==n&&null!==s&&("ios"===r&&(0,i.a)("mobile")&&void 0!==e.style.webkitOverflowScrolling||"md"===r)});return function(r,t){return e.apply(this,arguments)}}(),u=(e,r=0)=>new Promise(t=>{y(e,r,t)}),y=(e,r=0,t)=>{let n,s;const i={passive:!0},o=()=>{n&&n()},a=r=>{(void 0===r||e===r.target)&&(o(),t(r))};return e&&(e.addEventListener("webkitTransitionEnd",a,i),e.addEventListener("transitionend",a,i),s=setTimeout(a,r+500),n=()=>{s&&(clearTimeout(s),s=void 0),e.removeEventListener("webkitTransitionEnd",a,i),e.removeEventListener("transitionend",a,i)}),o},v=class{constructor(e){(0,s.r)(this,e),this.ionRefresh=(0,s.e)(this,"ionRefresh",7),this.ionPull=(0,s.e)(this,"ionPull",7),this.ionStart=(0,s.e)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}checkNativeRefresher(){var e=this;return(0,n.Z)(function*(){const r=yield m(e.el,(0,i.b)(e));if(r&&!e.nativeRefresher){const r=e.el.closest("ion-content");e.setupNativeRefresher(r)}else r||e.destroyNativeRefresher()})()}destroyNativeRefresher(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}resetNativeRefresher(e,r){var t=this;return(0,n.Z)(function*(){t.state=r,"ios"===(0,i.b)(t)?yield g(e,void 0):yield u(t.el.querySelector(".refresher-refreshing-icon"),200),t.didRefresh=!1,t.needsCompletion=!1,t.pointerDown=!1,t.animations.forEach(e=>e.destroy()),t.animations=[],t.progress=0,t.state=1})()}setupiOSNativeRefresher(e,r){var i=this;return(0,n.Z)(function*(){i.elementToTransform=i.scrollEl;const n=e.shadowRoot.querySelectorAll("svg");let o=.16*i.scrollEl.clientHeight;const h=n.length;(0,s.c)(()=>n.forEach(e=>e.style.setProperty("animation","none"))),i.scrollListenerCallback=()=>{!i.pointerDown&&1===i.state||(0,s.f)(()=>{const t=i.scrollEl.scrollTop,f=i.el.clientHeight;if(t>0){if(8===i.state){const e=(0,a.j)(0,t/(.5*f),1);return void(0,s.c)(()=>p(r,1-e))}return void(0,s.c)(()=>p(e,0))}i.pointerDown&&(i.didStart||(i.didStart=!0,i.ionStart.emit()),i.pointerDown&&i.ionPull.emit());const c=(0,a.j)(0,Math.abs(t)/f,.99),d=i.progress=(0,a.j)(0,(Math.abs(t)-30)/o,1),m=(0,a.j)(0,Math.floor(d*h),h-1);8===i.state||m===h-1?(i.pointerDown&&((e,r)=>{(0,s.c)(()=>{e.style.setProperty("--refreshing-rotation-duration",r>=1?"0.5s":"2s"),e.style.setProperty("opacity","1")})})(r,i.lastVelocityY),i.didRefresh||(i.beginRefresh(),i.didRefresh=!0,(0,l.d)({style:"light"}),i.pointerDown||g(i.elementToTransform,`${f}px`))):(i.state=2,((e,r,t,n)=>{(0,s.c)(()=>{p(e,t),r.forEach((e,r)=>e.style.setProperty("opacity",r<=n?"0.99":"0"))})})(e,n,c,m))})},i.scrollEl.addEventListener("scroll",i.scrollListenerCallback),i.gesture=(yield Promise.resolve().then(t.bind(t,9461))).createGesture({el:i.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:()=>{i.pointerDown=!0,i.didRefresh||g(i.elementToTransform,"0px"),0===o&&(o=.16*i.scrollEl.clientHeight)},onMove:e=>{i.lastVelocityY=e.velocityY},onEnd:()=>{i.pointerDown=!1,i.didStart=!1,i.needsCompletion?(i.resetNativeRefresher(i.elementToTransform,32),i.needsCompletion=!1):i.didRefresh&&(0,s.f)(()=>g(i.elementToTransform,`${i.el.clientHeight}px`))}}),i.disabledChanged()})()}setupMDNativeRefresher(e,r,i){var l=this;return(0,n.Z)(function*(){const f=(0,a.g)(r).querySelector("circle"),c=l.el.querySelector("ion-refresher-content .refresher-pulling-icon"),p=(0,a.g)(i).querySelector("circle");null!==f&&null!==p&&(0,s.c)(()=>{f.style.setProperty("animation","none"),i.style.setProperty("animation-delay","-655ms"),p.style.setProperty("animation-delay","-655ms")}),l.gesture=(yield Promise.resolve().then(t.bind(t,9461))).createGesture({el:l.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:()=>8!==l.state&&32!==l.state&&0===l.scrollEl.scrollTop,onStart:e=>{e.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:r=>{if(r.velocityY<0&&0===l.progress&&!r.data.didStart||r.data.cancelled)r.data.cancelled=!0;else{if(!r.data.didStart){r.data.didStart=!0,l.state=2,(0,s.c)(()=>l.scrollEl.style.setProperty("--overflow","hidden"));const t=((e,r,t)=>"scale"===e?((e,r)=>{const t=r.clientHeight,n=(0,h.c)().addElement(e).keyframes([{offset:0,transform:`scale(0) translateY(-${t}px)`},{offset:1,transform:"scale(1) translateY(100px)"}]);return d(e).addAnimation([n])})(r,t):((e,r)=>{const t=r.clientHeight,n=(0,h.c)().addElement(e).keyframes([{offset:0,transform:`translateY(-${t}px)`},{offset:1,transform:"translateY(100px)"}]);return d(e).addAnimation([n])})(r,t))((e=>{const r=e.previousElementSibling;return null!==r&&"ION-HEADER"===r.tagName?"translate":"scale"})(e),c,l.el);return r.data.animation=t,t.progressStart(!1,0),l.ionStart.emit(),void l.animations.push(t)}l.progress=(0,a.j)(0,r.deltaY/180*.5,1),r.data.animation.progressStep(l.progress),l.ionPull.emit()}},onEnd:e=>{if(!e.data.didStart)return;if((0,s.c)(()=>l.scrollEl.style.removeProperty("--overflow")),l.progress<=.4)return l.gesture.enable(!1),void e.data.animation.progressEnd(0,l.progress,500).onFinish(()=>{l.animations.forEach(e=>e.destroy()),l.animations=[],l.gesture.enable(!0),l.state=1});const r=(0,o.g)([0,0],[0,0],[1,1],[1,1],l.progress)[0],t=(e=>(0,h.c)().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)"))(c);l.animations.push(t),(0,s.c)((0,n.Z)(function*(){c.style.setProperty("--ion-pulling-refresher-translate",100*r+"px"),e.data.animation.progressEnd(),yield t.play(),l.beginRefresh(),e.data.animation.destroy()}))}}),l.disabledChanged()})()}setupNativeRefresher(e){var r=this;return(0,n.Z)(function*(){if(r.scrollListenerCallback||!e||r.nativeRefresher||!r.scrollEl)return;r.setCss(0,"",!1,""),r.nativeRefresher=!0;const t=r.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),n=r.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");"ios"===(0,i.b)(r)?r.setupiOSNativeRefresher(t,n):r.setupMDNativeRefresher(e,t,n)})()}componentDidUpdate(){this.checkNativeRefresher()}connectedCallback(){var e=this;return(0,n.Z)(function*(){if("fixed"!==e.el.getAttribute("slot"))return void console.error('Make sure you use: <ion-refresher slot="fixed">');const r=e.el.closest("ion-content");r?(yield new Promise(e=>(0,a.c)(r,e)),e.scrollEl=yield r.getScrollElement(),e.backgroundContentEl=(0,a.g)(r).querySelector("#background-content"),(yield m(e.el,(0,i.b)(e)))?e.setupNativeRefresher(r):(e.gesture=(yield Promise.resolve().then(t.bind(t,9461))).createGesture({el:r,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:()=>e.canStart(),onStart:()=>e.onStart(),onMove:r=>e.onMove(r),onEnd:()=>e.onEnd()}),e.disabledChanged())):console.error("<ion-refresher> must be used inside an <ion-content>")})()}disconnectedCallback(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(){var e=this;return(0,n.Z)(function*(){e.nativeRefresher?(e.needsCompletion=!0,e.pointerDown||(0,a.r)(()=>(0,a.r)(()=>e.resetNativeRefresher(e.elementToTransform,32)))):e.close(32,"120ms")})()}cancel(){var e=this;return(0,n.Z)(function*(){e.nativeRefresher?e.pointerDown||(0,a.r)(()=>(0,a.r)(()=>e.resetNativeRefresher(e.elementToTransform,16))):e.close(16,"")})()}getProgress(){return Promise.resolve(this.progress)}canStart(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}onStart(){this.progress=0,this.state=1}onMove(e){if(!this.scrollEl)return;const r=e.event;if(r.touches&&r.touches.length>1||0!=(56&this.state))return;const t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,n=e.deltaY*t;if(n<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(n,"0ms",!0,""),0===n)return void(this.progress=0);const s=this.pullMin;this.progress=n/s,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),n<s?this.state=2:n>this.pullMax?this.beginRefresh():this.state=4}onEnd(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}beginRefresh(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}close(e,r){setTimeout(()=>{this.state=1,this.progress=0,this.didStart=!1,this.setCss(0,"0ms",!1,"")},600),this.state=e,this.setCss(0,this.closeDuration,!0,r)}setCss(e,r,t,n){this.nativeRefresher||(this.appliedStyles=e>0,(0,s.c)(()=>{if(this.scrollEl&&this.backgroundContentEl){const s=this.scrollEl.style,i=this.backgroundContentEl.style;s.transform=i.transform=e>0?`translateY(${e}px) translateZ(0px)`:"",s.transitionDuration=i.transitionDuration=r,s.transitionDelay=i.transitionDelay=n,s.overflow=t?"hidden":""}}))}render(){const e=(0,i.b)(this);return(0,s.h)(s.H,{slot:"fixed",class:{[e]:!0,[`refresher-${e}`]:!0,"refresher-native":this.nativeRefresher,"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state}})}get el(){return(0,s.i)(this)}static get watchers(){return{disabled:["disabledChanged"]}}};v.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};const b=class{constructor(e){(0,s.r)(this,e)}componentWillLoad(){if(void 0===this.pullingIcon){const e=(0,i.b)(this),r=void 0!==this.el.style.webkitOverflowScrolling?"lines":"arrow-down";this.pullingIcon=i.c.get("refreshingIcon","ios"===e&&(0,i.a)("mobile")?i.c.get("spinner",r):"circular")}if(void 0===this.refreshingSpinner){const e=(0,i.b)(this);this.refreshingSpinner=i.c.get("refreshingSpinner",i.c.get("spinner","ios"===e?"lines":"circular"))}}render(){const e=this.pullingIcon,r=null!=e&&void 0!==c.S[e],t=(0,i.b)(this);return(0,s.h)(s.H,{class:t},(0,s.h)("div",{class:"refresher-pulling"},this.pullingIcon&&r&&(0,s.h)("div",{class:"refresher-pulling-icon"},(0,s.h)("div",{class:"spinner-arrow-container"},(0,s.h)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===t&&"circular"===this.pullingIcon&&(0,s.h)("div",{class:"arrow-container"},(0,s.h)("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!r&&(0,s.h)("div",{class:"refresher-pulling-icon"},(0,s.h)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&(0,s.h)("div",{class:"refresher-pulling-text",innerHTML:(0,f.s)(this.pullingText)})),(0,s.h)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&(0,s.h)("div",{class:"refresher-refreshing-icon"},(0,s.h)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&(0,s.h)("div",{class:"refresher-refreshing-text",innerHTML:(0,f.s)(this.refreshingText)})))}get el(){return(0,s.i)(this)}}}}]);