(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(e,t,s){"use strict";s.d(t,"a",(function(){return i})),s.d(t,"b",(function(){return c})),s.d(t,"c",(function(){return r})),s.d(t,"d",(function(){return o})),s.d(t,"e",(function(){return u}));const n={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const s=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:s})},notification(e){const t=this.getEngine();if(!t)return;const s=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:s})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},r=()=>{n.selection()},i=()=>{n.selectionStart()},c=()=>{n.selectionChanged()},u=()=>{n.selectionEnd()},o=e=>{n.impact(e)}},"6i10":function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));const n={bubbles:{dur:1e3,circles:9,fn:(e,t,s)=>{const n=e*t/s-e+"ms",r=2*Math.PI*t/s;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(e,t,s)=>{const n=t/s,r=e*n-e+"ms",i=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/s-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/s-e+"ms"}})}}},Ebwu:function(e,t,s){"use strict";s.d(t,"a",(function(){return T}));var n=s("2Vo4"),r=s("XNiG"),i=s("quSY");class c extends i.a{constructor(e,t){super()}schedule(e,t=0){return this}}class u extends c{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){if(this.closed)return this;this.state=e;const s=this.id,n=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(n,s,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(n,this.id,t),this}requestAsyncId(e,t,s=0){return setInterval(e.flush.bind(e,this),s)}recycleAsyncId(e,t,s=0){if(null!==s&&this.delay===s&&!1===this.pending)return t;clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(e,t);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let s=!1,n=void 0;try{this.work(e)}catch(r){s=!0,n=!!r&&r||new Error(r)}if(s)return this.unsubscribe(),n}_unsubscribe(){const e=this.id,t=this.scheduler,s=t.actions,n=s.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==n&&s.splice(n,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}class o extends u{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}schedule(e,t=0){return t>0?super.schedule(e,t):(this.delay=t,this.state=e,this.scheduler.flush(this),this)}execute(e,t){return t>0||this.closed?super.execute(e,t):this._execute(e,t)}requestAsyncId(e,t,s=0){return null!==s&&s>0||null===s&&this.delay>0?super.requestAsyncId(e,t,s):e.flush(this)}}let a=(()=>{class e{constructor(t,s=e.now){this.SchedulerAction=t,this.now=s}schedule(e,t=0,s){return new this.SchedulerAction(this,e).schedule(s,t)}}return e.now=()=>Date.now(),e})();class l extends a{constructor(e,t=a.now){super(e,()=>l.delegate&&l.delegate!==this?l.delegate.now():t()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(e,t=0,s){return l.delegate&&l.delegate!==this?l.delegate.schedule(e,t,s):super.schedule(e,t,s)}flush(e){const{actions:t}=this;if(this.active)return void t.push(e);let s;this.active=!0;do{if(s=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,s){for(;e=t.shift();)e.unsubscribe();throw s}}}class h extends l{}const d=new h(o);var f=s("7o/Q"),p=s("EY2u"),m=s("LRne"),g=s("HDdC");let b=(()=>{class e{constructor(e,t,s){this.kind=e,this.value=t,this.error=s,this.hasValue="N"===e}observe(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}do(e,t,s){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return s&&s()}}accept(e,t,s){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,s)}toObservable(){switch(this.kind){case"N":return Object(m.a)(this.value);case"E":return e=this.error,new g.a(t=>t.error(e));case"C":return Object(p.b)()}var e;throw new Error("unexpected notification kind value")}static createNext(t){return void 0!==t?new e("N",t):e.undefinedValueNotification}static createError(t){return new e("E",void 0,t)}static createComplete(){return e.completeNotification}}return e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e})();class w extends f.a{constructor(e,t,s=0){super(e),this.scheduler=t,this.delay=s}static dispatch(e){const{notification:t,destination:s}=e;t.observe(s),this.unsubscribe()}scheduleMessage(e){this.destination.add(this.scheduler.schedule(w.dispatch,this.delay,new y(e,this.destination)))}_next(e){this.scheduleMessage(b.createNext(e))}_error(e){this.scheduleMessage(b.createError(e)),this.unsubscribe()}_complete(){this.scheduleMessage(b.createComplete()),this.unsubscribe()}}class y{constructor(e,t){this.notification=e,this.destination=t}}var E=s("9ppp"),v=s("Ylt2");class S extends r.a{constructor(e=Number.POSITIVE_INFINITY,t=Number.POSITIVE_INFINITY,s){super(),this.scheduler=s,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=e<1?1:e,this._windowTime=t<1?1:t,t===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(e){const t=this._events;t.push(e),t.length>this._bufferSize&&t.shift(),super.next(e)}nextTimeWindow(e){this._events.push(new x(this._getNow(),e)),this._trimBufferThenGetEvents(),super.next(e)}_subscribe(e){const t=this._infiniteTimeWindow,s=t?this._events:this._trimBufferThenGetEvents(),n=this.scheduler,r=s.length;let c;if(this.closed)throw new E.a;if(this.isStopped||this.hasError?c=i.a.EMPTY:(this.observers.push(e),c=new v.a(this,e)),n&&e.add(e=new w(e,n)),t)for(let i=0;i<r&&!e.closed;i++)e.next(s[i]);else for(let i=0;i<r&&!e.closed;i++)e.next(s[i].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),c}_getNow(){return(this.scheduler||d).now()}_trimBufferThenGetEvents(){const e=this._getNow(),t=this._bufferSize,s=this._windowTime,n=this._events,r=n.length;let i=0;for(;i<r&&!(e-n[i].time<s);)i++;return r>t&&(i=Math.max(i,r-t)),i>0&&n.splice(0,i),n}}class x{constructor(e,t){this.time=e,this.value=t}}var N=s("fXoL"),C=s("e8h1");let T=(()=>{class e{constructor(e){this.db=e,this.PREFERENCES_KEY="app-preferences",this.preferences=new n.a({twentyfour:!1,bells:!1}),this.currentSchedule=new S(1),e.get(this.PREFERENCES_KEY).then(t=>{t?this.preferences.next(t):e.set(this.PREFERENCES_KEY,this.preferences.getValue())})}getPreferences(){return this.preferences.asObservable()}setPreferences(e){this.db.set(this.PREFERENCES_KEY,this.preferences).then(()=>this.preferences.next(e))}setPreference(e,t){let s=this.preferences.getValue();s[e]=t,this.db.set(this.PREFERENCES_KEY,s).then(()=>this.preferences.next(s))}getCurrentSchedule(){return this.currentSchedule.asObservable()}setCurrentSchedule(e){this.currentSchedule.next(e)}}return e.\u0275fac=function(t){return new(t||e)(N.Ob(C.b))},e.\u0275prov=N.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},NqGI:function(e,t,s){"use strict";s.d(t,"a",(function(){return n})),s.d(t,"b",(function(){return r}));const n=async(e,t,s,n,r)=>{if(e)return e.attachViewToDom(t,s,r,n);if("string"!=typeof s&&!(s instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof s?t.ownerDocument&&t.ownerDocument.createElement(s):s;return n&&n.forEach(e=>i.classList.add(e)),r&&Object.assign(i,r),t.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},r=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},"U/uv":function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var n=s("sxy2"),r=s("ItpF"),i=s("2c9M");const c=(e,t)=>{let s,c;const u=(e,n,r)=>{if("undefined"==typeof document)return;const i=document.elementFromPoint(e,n);i&&t(i)?i!==s&&(a(),o(i,r)):a()},o=(e,t)=>{s=e,c||(c=s);const r=s;Object(n.g)(()=>r.classList.add("ion-activated")),t()},a=(e=!1)=>{if(!s)return;const t=s;Object(n.g)(()=>t.classList.remove("ion-activated")),e&&c!==s&&s.click(),s=void 0};return Object(r.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>u(e.currentX,e.currentY,i.a),onMove:e=>u(e.currentX,e.currentY,i.b),onEnd:()=>{a(!0),Object(i.e)(),c=void 0}})}},bNmx:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var n=s("fXoL");let r=(()=>{class e{transform(e,t){let s="";if(!t&&e){let t=e.indexOf(":"),n=Number(e.substring(0,t));return s+=String(n>12?n-12:n),s+=e.substring(t),s+=n>=12?"p":"a",s}return e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=n.Gb({name:"timeFormat",type:e,pure:!0}),e})()},ekzQ:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var n=s("fXoL"),r=s("tk/3"),i=s("Ebwu");let c=(()=>{class e{constructor(e,t){this.http=e,this.state=t,this.SCHEDULES_API="https://schedules-data.lasa2019.com"}getSchedules(){return this.http.get(this.SCHEDULES_API+"/schedule.json")}getSchoolYear(){return this.http.get(this.SCHEDULES_API+"/school-year.json")}determineSchedule(e,t,s){e=this.stripTime(e);let n=!1,r={currentSchedule:null};if(e<new Date(t.not_before)||e>new Date(t.not_after))return r.scheduleReason="School not in session",e>new Date(t.not_after)?(r.statusCode=-1,r):(r.statusCode=0,r);if(t.holidays.forEach(t=>{this.dateApplies(e,t)&&(r.scheduleReason="School Holiday",n=!0)}),n)return r.statusCode=0,r;for(let i=0;i<s.length;i++){if("dates"in s[i]&&s[i].dates.forEach(t=>{this.dateApplies(e,t)&&(r.currentSchedule=i,n=!0)}),n)return r.statusCode=3,r;if("applyDay"in s[i]&&e.getDay()==s[i].applyDay)return r.currentSchedule=i,r.statusCode=2,r}return 6==e.getDay()||0==e.getDay()?(r.currentSchedule=null,r.scheduleReason="Weekend",r.statusCode=0,r):(r.currentSchedule=0,r.statusCode=1,r)}dateApplies(e,t){return t instanceof Array?e>=new Date(t[0])&&e<=new Date(t[1]):e.getTime()===new Date(t).getTime()}stripTime(e){return(e=new Date(e.getTime())).setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),e}subtractTime(e,t){let s=e.split(":"),n=t.split(":"),r=3600*Number(s[0])+60*Number(s[1])+Number(s[2])-(3600*Number(n[0])+60*Number(n[1])+Number(n[2])),i=[Math.floor(r/3600),Math.floor(r%3600/60),r%60],c=[];return i.forEach(e=>{let t=e.toString();c.push(t.length<2?"0"+t:t)}),c[0]+":"+c[1]+":"+c[2]}addTime(e,t){let s=e.split(":"),n=t.split(":"),r=3600*Number(s[0])+60*Number(s[1])+Number(s[2])+(3600*Number(n[0])+60*Number(n[1])+Number(n[2])),i=[Math.floor(r/3600),Math.floor(r%3600/60),r%60],c=[];return i.forEach(e=>{let t=e.toString();c.push(t.length<2?"0"+t:t)}),c[0]+":"+c[1]+":"+c[2]}periodCheck(e,t,s){let n=e.toLocaleTimeString([],{hour12:!1}),r=this.determineSchedule(e,t,s);if(this.state.setCurrentSchedule(s[r.currentSchedule]),null==r.currentSchedule)return{currentPeriod:r.scheduleReason};let i=s[r.currentSchedule].combinedAB||!1;for(let c=0;c<s[r.currentSchedule].schedule.length;c++){let t=s[r.currentSchedule].schedule[c],u=(4===t.startTime.length?"0":"")+t.startTime+":00",o=(4===t.endTime.length?"0":"")+t.endTime+":00";if(n<u&&0==c)return{currentPeriod:"School not started.",timeRemaining:this.subtractTime(u,n)};let a,l=s[r.currentSchedule].schedule[c+1]?s[r.currentSchedule].schedule[c+1]:null,h=t.name;if(i&&-1!=h.indexOf("/")&&(1===e.getDay()||3===e.getDay()?h=t.name.substring(0,1):2!==e.getDay()&&4!==e.getDay()||(h=t.name.substring(2))),null!=l&&(a=l.name,i&&-1!=a.indexOf("/")&&(1===e.getDay()||3===e.getDay()?a=l.name.substring(0,1):2!==e.getDay()&&4!==e.getDay()||(a=l.name.substring(2)))),n<o&&n>=u)return{currentPeriod:h,periodEndTime:o,timeRemaining:this.subtractTime(o+":00",n)};if(null!=l&&n>=o&&n<l.startTime)return{currentPeriod:"Between "+h+" and "+a,timeRemaining:this.subtractTime(l.startTime+":00",n)};if(null==l&&n>=o)return{currentPeriod:"School is released."}}}}return e.\u0275fac=function(t){return new(t||e)(n.Ob(r.a),n.Ob(i.a))},e.\u0275prov=n.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},iTUp:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var n=s("ofXK"),r=s("fXoL");let i=(()=>{class e{}return e.\u0275mod=r.Fb({type:e}),e.\u0275inj=r.Eb({factory:function(t){return new(t||e)},imports:[[n.b]]}),e})()},sPtc:function(e,t,s){"use strict";s.d(t,"a",(function(){return r})),s.d(t,"b",(function(){return i})),s.d(t,"c",(function(){return n})),s.d(t,"d",(function(){return u}));const n=(e,t)=>null!==t.closest(e),r=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,["ion-color-"+e]:!0},t):t,i=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},c=/^[a-z][a-z0-9+\-.]*:/,u=async(e,t,s,n)=>{if(null!=e&&"#"!==e[0]&&!c.test(e)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(e,s,n)}return!1}}}]);