!function(){"use strict";function e(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function r(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}(self.webpackChunklasa_schedules=self.webpackChunklasa_schedules||[]).push([[9921],{9921:function(t,i,s){s.r(i),s.d(i,{ion_refresher:function(){return w},ion_refresher_content:function(){return R}});var o,a=s(8239),l=s(3150),f=s(7585),c=s(7807),h=s(2377),u=s(2954),p=s(4086),g=s(6575),d=s(408),m=function(e){var r=e.querySelector("ion-spinner"),t=r.shadowRoot.querySelector("circle"),n=e.querySelector(".spinner-arrow-container"),i=e.querySelector(".arrow-container"),s=i?i.querySelector("ion-icon"):null,o=(0,p.c)().duration(1e3).easing("ease-out"),a=(0,p.c)().addElement(n).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),l=(0,p.c)().addElement(t).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),f=(0,p.c)().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(i&&s){var c=(0,p.c)().addElement(i).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),h=(0,p.c)().addElement(s).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([c,h])}return o.addAnimation([a,l,f])},v=function(e,r){e.style.setProperty("opacity",r.toString())},y=function(e,r){if(!e)return Promise.resolve();var t=k(e,200);return(0,l.c)(function(){e.style.setProperty("transition","0.2s all ease-out"),void 0===r?e.style.removeProperty("transform"):e.style.setProperty("transform","translate3d(0px, ".concat(r,", 0px)"))}),t},b=(o=(0,a.Z)(regeneratorRuntime.mark(function e(r,t){var n,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.querySelector("ion-refresher-content")){e.next=3;break}return e.abrupt("return",Promise.resolve(!1));case 3:return e.next=5,new Promise(function(e){return(0,h.c)(n,e)});case 5:return i=r.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),s=r.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),e.abrupt("return",null!==i&&null!==s&&("ios"===t&&(0,f.a)("mobile")&&void 0!==r.style.webkitOverflowScrolling||"md"===t));case 7:case"end":return e.stop()}},e)})),function(e,r){return o.apply(this,arguments)}),k=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new Promise(function(t){x(e,r,t)})},x=function(e){var r,t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,s={passive:!0},o=function(){r&&r()},a=function(r){(void 0===r||e===r.target)&&(o(),i(r))};return e&&(e.addEventListener("webkitTransitionEnd",a,s),e.addEventListener("transitionend",a,s),t=setTimeout(a,n+500),r=function(){t&&(clearTimeout(t),t=void 0),e.removeEventListener("webkitTransitionEnd",a,s),e.removeEventListener("transitionend",a,s)}),o},w=function(){function t(e){r(this,t),(0,l.r)(this,e),this.ionRefresh=(0,l.e)(this,"ionRefresh",7),this.ionPull=(0,l.e)(this,"ionPull",7),this.ionStart=(0,l.e)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}return n(t,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"checkNativeRefresher",value:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark(function r(){var t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b(e.el,(0,f.b)(e));case 2:(t=r.sent)&&!e.nativeRefresher?(n=e.el.closest("ion-content"),e.setupNativeRefresher(n)):t||e.destroyNativeRefresher();case 4:case"end":return r.stop()}},r)}))()}},{key:"destroyNativeRefresher",value:function(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}},{key:"resetNativeRefresher",value:function(e,r){var t=this;return(0,a.Z)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t.state=r,"ios"!==(0,f.b)(t)){n.next=6;break}return n.next=4,y(e,void 0);case 4:n.next=8;break;case 6:return n.next=8,k(t.el.querySelector(".refresher-refreshing-icon"),200);case 8:t.didRefresh=!1,t.needsCompletion=!1,t.pointerDown=!1,t.animations.forEach(function(e){return e.destroy()}),t.animations=[],t.progress=0,t.state=1;case 15:case"end":return n.stop()}},n)}))()}},{key:"setupiOSNativeRefresher",value:function(e,r){var t=this;return(0,a.Z)(regeneratorRuntime.mark(function n(){var i,o,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.elementToTransform=t.scrollEl,i=e.shadowRoot.querySelectorAll("svg"),o=.16*t.scrollEl.clientHeight,a=i.length,(0,l.c)(function(){return i.forEach(function(e){return e.style.setProperty("animation","none")})}),t.scrollListenerCallback=function(){!t.pointerDown&&1===t.state||(0,l.f)(function(){var n=t.scrollEl.scrollTop,s=t.el.clientHeight;if(n>0){if(8===t.state){var f=(0,h.j)(0,n/(.5*s),1);return void(0,l.c)(function(){return v(r,1-f)})}(0,l.c)(function(){return v(e,0)})}else{t.pointerDown&&(t.didStart||(t.didStart=!0,t.ionStart.emit()),t.pointerDown&&t.ionPull.emit());var c=(0,h.j)(0,Math.abs(n)/s,.99),p=t.progress=(0,h.j)(0,(Math.abs(n)-30)/o,1),g=(0,h.j)(0,Math.floor(p*a),a-1);8===t.state||g===a-1?(t.pointerDown&&function(e,r){(0,l.c)(function(){e.style.setProperty("--refreshing-rotation-duration",r>=1?"0.5s":"2s"),e.style.setProperty("opacity","1")})}(r,t.lastVelocityY),t.didRefresh||(t.beginRefresh(),t.didRefresh=!0,(0,u.d)({style:"light"}),t.pointerDown||y(t.elementToTransform,"".concat(s,"px")))):(t.state=2,function(e,r,t,n){(0,l.c)(function(){v(e,t),r.forEach(function(e,r){return e.style.setProperty("opacity",r<=n?"0.99":"0")})})}(e,i,c,g))}})},t.scrollEl.addEventListener("scroll",t.scrollListenerCallback),n.next=9,Promise.resolve().then(s.bind(s,9461));case 9:t.gesture=n.sent.createGesture({el:t.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:function(){t.pointerDown=!0,t.didRefresh||y(t.elementToTransform,"0px"),0===o&&(o=.16*t.scrollEl.clientHeight)},onMove:function(e){t.lastVelocityY=e.velocityY},onEnd:function(){t.pointerDown=!1,t.didStart=!1,t.needsCompletion?(t.resetNativeRefresher(t.elementToTransform,32),t.needsCompletion=!1):t.didRefresh&&(0,l.f)(function(){return y(t.elementToTransform,"".concat(t.el.clientHeight,"px"))})}}),t.disabledChanged();case 11:case"end":return n.stop()}},n)}))()}},{key:"setupMDNativeRefresher",value:function(e,r,t){var n=this;return(0,a.Z)(regeneratorRuntime.mark(function i(){var o,f,u;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return o=(0,h.g)(r).querySelector("circle"),f=n.el.querySelector("ion-refresher-content .refresher-pulling-icon"),u=(0,h.g)(t).querySelector("circle"),null!==o&&null!==u&&(0,l.c)(function(){o.style.setProperty("animation","none"),t.style.setProperty("animation-delay","-655ms"),u.style.setProperty("animation-delay","-655ms")}),i.next=4,Promise.resolve().then(s.bind(s,9461));case 4:n.gesture=i.sent.createGesture({el:n.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:function(){return 8!==n.state&&32!==n.state&&0===n.scrollEl.scrollTop},onStart:function(e){e.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:function(r){if(r.velocityY<0&&0===n.progress&&!r.data.didStart||r.data.cancelled)r.data.cancelled=!0;else{if(!r.data.didStart){r.data.didStart=!0,n.state=2,(0,l.c)(function(){return n.scrollEl.style.setProperty("--overflow","hidden")});var t=function(e,r,t){return"scale"===e?function(e,r){var t=r.clientHeight,n=(0,p.c)().addElement(e).keyframes([{offset:0,transform:"scale(0) translateY(-".concat(t,"px)")},{offset:1,transform:"scale(1) translateY(100px)"}]);return m(e).addAnimation([n])}(r,t):function(e,r){var t=r.clientHeight,n=(0,p.c)().addElement(e).keyframes([{offset:0,transform:"translateY(-".concat(t,"px)")},{offset:1,transform:"translateY(100px)"}]);return m(e).addAnimation([n])}(r,t)}(function(e){var r=e.previousElementSibling;return null!==r&&"ION-HEADER"===r.tagName?"translate":"scale"}(e),f,n.el);return r.data.animation=t,t.progressStart(!1,0),n.ionStart.emit(),void n.animations.push(t)}n.progress=(0,h.j)(0,r.deltaY/180*.5,1),r.data.animation.progressStep(n.progress),n.ionPull.emit()}},onEnd:function(e){if(e.data.didStart){if((0,l.c)(function(){return n.scrollEl.style.removeProperty("--overflow")}),n.progress<=.4)return n.gesture.enable(!1),void e.data.animation.progressEnd(0,n.progress,500).onFinish(function(){n.animations.forEach(function(e){return e.destroy()}),n.animations=[],n.gesture.enable(!0),n.state=1});var r=(0,c.g)([0,0],[0,0],[1,1],[1,1],n.progress)[0],t=function(e){return(0,p.c)().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)")}(f);n.animations.push(t),(0,l.c)((0,a.Z)(regeneratorRuntime.mark(function i(){return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f.style.setProperty("--ion-pulling-refresher-translate",100*r+"px"),e.data.animation.progressEnd(),i.next=4,t.play();case 4:n.beginRefresh(),e.data.animation.destroy();case 6:case"end":return i.stop()}},i)})))}}}),n.disabledChanged();case 6:case"end":return i.stop()}},i)}))()}},{key:"setupNativeRefresher",value:function(e){var r=this;return(0,a.Z)(regeneratorRuntime.mark(function t(){var n,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.scrollListenerCallback&&e&&!r.nativeRefresher&&r.scrollEl){t.next=2;break}return t.abrupt("return");case 2:r.setCss(0,"",!1,""),r.nativeRefresher=!0,n=r.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),i=r.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),"ios"===(0,f.b)(r)?r.setupiOSNativeRefresher(n,i):r.setupMDNativeRefresher(e,n,i);case 5:case"end":return t.stop()}},t)}))()}},{key:"componentDidUpdate",value:function(){this.checkNativeRefresher()}},{key:"connectedCallback",value:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark(function r(){var t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if("fixed"===e.el.getAttribute("slot")){r.next=2;break}return r.abrupt("return",void console.error('Make sure you use: <ion-refresher slot="fixed">'));case 2:if(!(t=e.el.closest("ion-content"))){r.next=22;break}return r.next=6,new Promise(function(e){return(0,h.c)(t,e)});case 6:return r.next=8,t.getScrollElement();case 8:return e.scrollEl=r.sent,e.backgroundContentEl=(0,h.g)(t).querySelector("#background-content"),r.next=12,b(e.el,(0,f.b)(e));case 12:if(!r.sent){r.next=16;break}e.setupNativeRefresher(t),r.next=20;break;case 16:return r.next=18,Promise.resolve().then(s.bind(s,9461));case 18:e.gesture=r.sent.createGesture({el:t,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:function(){return e.canStart()},onStart:function(){return e.onStart()},onMove:function(r){return e.onMove(r)},onEnd:function(){return e.onEnd()}}),e.disabledChanged();case 20:r.next=23;break;case 22:console.error("<ion-refresher> must be used inside an <ion-content>");case 23:case"end":return r.stop()}},r)}))()}},{key:"disconnectedCallback",value:function(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e.nativeRefresher?(e.needsCompletion=!0,e.pointerDown||(0,h.r)(function(){return(0,h.r)(function(){return e.resetNativeRefresher(e.elementToTransform,32)})})):e.close(32,"120ms");case 1:case"end":return r.stop()}},r)}))()}},{key:"cancel",value:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e.nativeRefresher?e.pointerDown||(0,h.r)(function(){return(0,h.r)(function(){return e.resetNativeRefresher(e.elementToTransform,16)})}):e.close(16,"");case 1:case"end":return r.stop()}},r)}))()}},{key:"getProgress",value:function(){return Promise.resolve(this.progress)}},{key:"canStart",value:function(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}},{key:"onStart",value:function(){this.progress=0,this.state=1}},{key:"onMove",value:function(e){if(this.scrollEl){var r=e.event;if(!(r.touches&&r.touches.length>1||0!=(56&this.state))){var t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,n=e.deltaY*t;if(n<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(n,"0ms",!0,""),0!==n){var i=this.pullMin;this.progress=n/i,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),n<i?this.state=2:n>this.pullMax?this.beginRefresh():this.state=4}else this.progress=0}}}},{key:"onEnd",value:function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}},{key:"beginRefresh",value:function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}},{key:"close",value:function(e,r){var t=this;setTimeout(function(){t.state=1,t.progress=0,t.didStart=!1,t.setCss(0,"0ms",!1,"")},600),this.state=e,this.setCss(0,this.closeDuration,!0,r)}},{key:"setCss",value:function(e,r,t,n){var i=this;this.nativeRefresher||(this.appliedStyles=e>0,(0,l.c)(function(){if(i.scrollEl&&i.backgroundContentEl){var s=i.scrollEl.style,o=i.backgroundContentEl.style;s.transform=o.transform=e>0?"translateY(".concat(e,"px) translateZ(0px)"):"",s.transitionDuration=o.transitionDuration=r,s.transitionDelay=o.transitionDelay=n,s.overflow=t?"hidden":""}}))}},{key:"render",value:function(){var r,t=(0,f.b)(this);return(0,l.h)(l.H,{slot:"fixed",class:(r={},e(r,t,!0),e(r,"refresher-".concat(t),!0),e(r,"refresher-native",this.nativeRefresher),e(r,"refresher-active",1!==this.state),e(r,"refresher-pulling",2===this.state),e(r,"refresher-ready",4===this.state),e(r,"refresher-refreshing",8===this.state),e(r,"refresher-cancelling",16===this.state),e(r,"refresher-completing",32===this.state),r)})}},{key:"el",get:function(){return(0,l.i)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),t}();w.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};var R=function(){function e(t){r(this,e),(0,l.r)(this,t)}return n(e,[{key:"componentWillLoad",value:function(){if(void 0===this.pullingIcon){var e=(0,f.b)(this),r=void 0!==this.el.style.webkitOverflowScrolling?"lines":"arrow-down";this.pullingIcon=f.c.get("refreshingIcon","ios"===e&&(0,f.a)("mobile")?f.c.get("spinner",r):"circular")}if(void 0===this.refreshingSpinner){var t=(0,f.b)(this);this.refreshingSpinner=f.c.get("refreshingSpinner",f.c.get("spinner","ios"===t?"lines":"circular"))}}},{key:"render",value:function(){var e=this.pullingIcon,r=null!=e&&void 0!==d.S[e],t=(0,f.b)(this);return(0,l.h)(l.H,{class:t},(0,l.h)("div",{class:"refresher-pulling"},this.pullingIcon&&r&&(0,l.h)("div",{class:"refresher-pulling-icon"},(0,l.h)("div",{class:"spinner-arrow-container"},(0,l.h)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===t&&"circular"===this.pullingIcon&&(0,l.h)("div",{class:"arrow-container"},(0,l.h)("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!r&&(0,l.h)("div",{class:"refresher-pulling-icon"},(0,l.h)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&(0,l.h)("div",{class:"refresher-pulling-text",innerHTML:(0,g.s)(this.pullingText)})),(0,l.h)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&(0,l.h)("div",{class:"refresher-refreshing-icon"},(0,l.h)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&(0,l.h)("div",{class:"refresher-refreshing-text",innerHTML:(0,g.s)(this.refreshingText)})))}},{key:"el",get:function(){return(0,l.i)(this)}}]),e}()}}])}();