!function(){function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e,n,r,o,i,a){try{var u=t[i](a),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,s,"next",t)}function s(t){n(a,o,i,u,s,"throw",t)}u(void 0)})}}function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=i(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){s=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw a}}}}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{k5eQ:function(n,i,a){"use strict";a.r(i),a.d(i,"ion_route",function(){return p}),a.d(i,"ion_route_redirect",function(){return v}),a.d(i,"ion_router",function(){return A}),a.d(i,"ion_router_link",function(){return U});var s=a("wEJo"),h=a("1vRN"),f=a("E/Mt"),l=a("74mu"),p=function(){function t(e){u(this,t),Object(s.o)(this,e),this.ionRouteDataChanged=Object(s.g)(this,"ionRouteDataChanged",7),this.url=""}return c(t,[{key:"onUpdate",value:function(t){this.ionRouteDataChanged.emit(t)}},{key:"onComponentProps",value:function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length){var i,a=o(n);try{for(a.s();!(i=a.n()).done;){var u=i.value;if(t[u]!==e[u])return void this.onUpdate(t)}}catch(s){a.e(s)}finally{a.f()}}else this.onUpdate(t)}}},{key:"connectedCallback",value:function(){this.ionRouteDataChanged.emit()}}],[{key:"watchers",get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}]),t}(),v=function(){function t(e){u(this,t),Object(s.o)(this,e),this.ionRouteRedirectChanged=Object(s.g)(this,"ionRouteRedirectChanged",7)}return c(t,[{key:"propDidChange",value:function(){this.ionRouteRedirectChanged.emit()}},{key:"connectedCallback",value:function(){this.ionRouteRedirectChanged.emit()}}],[{key:"watchers",get:function(){return{from:["propDidChange"],to:["propDidChange"]}}}]),t}(),d=function(t){return"/"+t.filter(function(t){return t.length>0}).join("/")},g=function(t){var e,n=[""];if(null!=t){var r=t.indexOf("?");r>-1&&(e=t.substr(r+1),t=t.substr(0,r)),0===(n=t.split("/").map(function(t){return t.trim()}).filter(function(t){return t.length>0})).length&&(n=[""])}return{segments:n,queryString:e}},m=function(){var t=r(regeneratorRuntime.mark(function t(e,n,r,o){var i,a,u,s,c,f=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=f.length>4&&void 0!==f[4]&&f[4],a=f.length>5?f[5]:void 0,t.prev=2,u=y(e),!(o>=n.length)&&u){t.next=6;break}return t.abrupt("return",i);case 6:return t.next=8,new Promise(function(t){return Object(h.c)(u,t)});case 8:return s=n[o],t.next=11,u.setRouteId(s.id,s.params,r,a);case 11:return(c=t.sent).changed&&(r="root",i=!0),t.next=15,m(c.element,n,r,o+1,i,a);case 15:if(i=t.sent,t.t0=c.markVisible,!t.t0){t.next=20;break}return t.next=20,c.markVisible();case 20:return t.abrupt("return",i);case 23:return t.prev=23,t.t1=t.catch(2),t.abrupt("return",(console.error(t.t1),!1));case 26:case"end":return t.stop()}},t,null,[[2,23]])}));return function(e,n,r,o){return t.apply(this,arguments)}}(),b=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",y=function(t){if(t)return t.matches(b)?t:t.querySelector(b)||void 0},w=function(t,e){return e.find(function(e){return function(t,e){var n=e.from;if(void 0===e.to)return!1;if(n.length>t.length)return!1;for(var r=0;r<n.length;r++){var o=n[r];if("*"===o)return!0;if(o!==t[r])return!1}return n.length===t.length}(t,e)})},k=function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n&&t[r].toLowerCase()===e[r].id;r++);return r},R=function(t,e){for(var n,r=new O(t),i=!1,a=0;a<e.length;a++){var u=e[a].path;if(""===u[0])i=!0;else{var s,c=o(u);try{for(c.s();!(s=c.n()).done;){var h=s.value,f=r.next();if(":"===h[0]){if(""===f)return null;((n=n||[])[a]||(n[a]={}))[h.slice(1)]=f}else if(f!==h)return null}}catch(l){c.e(l)}finally{c.f()}i=!1}}return i&&i!==(""===r.next())?null:n?e.map(function(t,e){return{id:t.id,path:t.path,params:x(t.params,n[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}}):e},x=function(t,e){return t||e?Object.assign(Object.assign({},t),e):void 0},C=function(t,e){var n,r=null,i=0,a=o(e);try{for(a.s();!(n=a.n()).done;){var u=n.value,s=R(t,u);if(null!==s){var c=j(s);c>i&&(i=c,r=s)}}}catch(h){a.e(h)}finally{a.f()}return r},j=function(t){var e,n=1,r=1,i=o(t);try{for(i.s();!(e=i.n()).done;){var a,u=o(e.value.path);try{for(u.s();!(a=u.n()).done;){var s=a.value;":"===s[0]?n+=Math.pow(1,r):""!==s&&(n+=Math.pow(2,r)),r++}}catch(c){u.e(c)}finally{u.f()}}}catch(c){i.e(c)}finally{i.f()}return n},O=function(){function t(e){u(this,t),this.path=e.slice()}return c(t,[{key:"next",value:function(){return this.path.length>0?this.path.shift():""}}]),t}(),S=function(t){return Array.from(t.children).filter(function(t){return"ION-ROUTE-REDIRECT"===t.tagName}).map(function(t){var e=D(t,"to");return{from:g(D(t,"from")).segments,to:null==e?void 0:g(e)}})},P=function(t){return L(E(t))},E=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return Array.from(n.children).filter(function(t){return"ION-ROUTE"===t.tagName&&t.component}).map(function(n){var r=D(n,"component");if(null==r)throw new Error("component missing in ion-route");return{path:g(D(n,"url")).segments,id:r.toLowerCase(),params:n.componentProps,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter,children:t(e,n)}})},D=function(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null},L=function(t){var e,n=[],r=o(t);try{for(r.s();!(e=r.n()).done;){var i=e.value;N([],n,i)}}catch(a){r.e(a)}finally{r.f()}return n},N=function t(e,n,r){var i=e.slice();if(i.push({id:r.id,path:r.path,params:r.params,beforeLeave:r.beforeLeave,beforeEnter:r.beforeEnter}),0!==r.children.length){var a,u=o(r.children);try{for(u.s();!(a=u.n()).done;){t(i,n,a.value)}}catch(s){u.e(s)}finally{u.f()}}else n.push(i)},A=function(){function t(e){u(this,t),Object(s.o)(this,e),this.ionRouteWillChange=Object(s.g)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(s.g)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}var n,i,a,f,l,p,v,b,R,j,O;return c(t,[{key:"componentWillLoad",value:(O=r(regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(document.body)?Promise.resolve():new Promise(function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})});case 2:return t.next=4,this.runGuards(this.getPath());case 4:if(!0===(e=t.sent)){t.next=13;break}if("object"!=typeof e){t.next=11;break}return n=e.redirect,r=g(n),this.setPath(r.segments,"root",r.queryString),t.next=11,this.writeNavStateRoot(r.segments,"root");case 11:t.next=15;break;case 13:return t.next=15,this.onRoutesChanged();case 15:case"end":return t.stop()}},t,this)})),function(){return O.apply(this,arguments)})},{key:"componentDidLoad",value:function(){window.addEventListener("ionRouteRedirectChanged",Object(h.n)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(h.n)(this.onRoutesChanged.bind(this),100))}},{key:"onPopState",value:(j=r(regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.historyDirection(),n=this.getPath(),t.next=4,this.runGuards(n);case 4:if(!0===(r=t.sent)){t.next=9;break}if("object"==typeof r){t.next=8;break}return t.abrupt("return",!1);case 8:n=g(r.redirect).segments;case 9:return t.abrupt("return",this.writeNavStateRoot(n,e));case 10:case"end":return t.stop()}},t,this)})),function(){return j.apply(this,arguments)})},{key:"onBackButton",value:function(t){var e=this;t.detail.register(0,function(t){e.back(),t()})}},{key:"canTransition",value:(R=r(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.runGuards();case 2:return e=t.sent,t.abrupt("return",!0===e||"object"==typeof e&&e.redirect);case 4:case"end":return t.stop()}},t,this)})),function(){return R.apply(this,arguments)})},{key:"push",value:(b=r(regeneratorRuntime.mark(function t(e){var n,r,o,i,a=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"forward",r=a.length>2?a[2]:void 0,e.startsWith(".")&&(e=new URL(e,window.location.href).pathname),o=g(e),t.next=6,this.runGuards(o.segments);case 6:if(!0===(i=t.sent)){t.next=11;break}if("object"==typeof i){t.next=10;break}return t.abrupt("return",!1);case 10:o=g(i.redirect);case 11:return t.abrupt("return",(this.setPath(o.segments,n,o.queryString),this.writeNavStateRoot(o.segments,n,r)));case 12:case"end":return t.stop()}},t,this)})),function(t){return b.apply(this,arguments)})},{key:"back",value:function(){return window.history.back(),Promise.resolve(this.waitPromise)}},{key:"printDebug",value:(v=r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(function(t){console.group("[ion-core] ROUTES[".concat(t.length,"]"));var n,r=o(t);try{var i=function(){var t=n.value,r=[];t.forEach(function(t){return r.push.apply(r,e(t.path))});var o=t.map(function(t){return t.id});console.debug("%c ".concat(d(r)),"font-weight: bold; padding-left: 20px","=>\t","(".concat(o.join(", "),")"))};for(r.s();!(n=r.n()).done;)i()}catch(a){r.e(a)}finally{r.f()}console.groupEnd()})(P(this.el)),function(t){console.group("[ion-core] REDIRECTS[".concat(t.length,"]"));var e,n=o(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;r.to&&console.debug("FROM: ","$c ".concat(d(r.from)),"font-weight: bold"," TO: ","$c ".concat(d(r.to.segments)),"font-weight: bold")}}catch(i){n.e(i)}finally{n.f()}console.groupEnd()}(S(this.el));case 1:case"end":return t.stop()}},t,this)})),function(){return v.apply(this,arguments)})},{key:"navChanged",value:(p=r(regeneratorRuntime.mark(function t(e){var n,i,a,u,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.busy){t.next=2;break}return t.abrupt("return",(console.warn("[ion-router] router is busy, navChanged was cancelled"),!1));case 2:return t.next=4,function(){var t=r(regeneratorRuntime.mark(function t(e){var n,r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=[],o=window.document.body;case 2:if(!(r=y(o))){t.next=11;break}return t.next=5,r.getRouteId();case 5:if(i=t.sent){t.next=8;break}return t.abrupt("break",11);case 8:o=i.element,i.element=void 0,n.push(i);case 9:t.next=2;break;case 11:return t.abrupt("return",{ids:n,outlet:r});case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()();case 4:if(n=t.sent,i=n.ids,a=n.outlet,u=function(t,e){var n,r=null,i=0,a=t.map(function(t){return t.id}),u=o(e);try{for(u.s();!(n=u.n()).done;){var s=n.value,c=k(a,s);c>i&&(r=s,i=c)}}catch(h){u.e(h)}finally{u.f()}return r?r.map(function(e,n){return{id:e.id,path:e.path,params:x(e.params,t[n]&&t[n].params)}}):null}(i,P(this.el))){t.next=10;break}return t.abrupt("return",(console.warn("[ion-router] no matching URL for ",i.map(function(t){return t.id})),!1));case 10:if(!(s=function(t){var e,n=[],r=o(t);try{for(r.s();!(e=r.n()).done;){var i,a=e.value,u=o(a.path);try{for(u.s();!(i=u.n()).done;){var s=i.value;if(":"===s[0]){var c=a.params&&a.params[s.slice(1)];if(!c)return null;n.push(c)}else""!==s&&n.push(s)}}catch(h){u.e(h)}finally{u.f()}}}catch(h){r.e(h)}finally{r.f()}return n}(u))){t.next=18;break}return this.setPath(s,e),t.next=15,this.safeWriteNavState(a,u,"root",s,null,i.length);case 15:t.t0=!0,t.next=19;break;case 18:t.t0=(console.warn("[ion-router] router could not match path because some required param is missing"),!1);case 19:return t.abrupt("return",t.t0);case 20:case"end":return t.stop()}},t,this)})),function(t){return p.apply(this,arguments)})},{key:"onRedirectChanged",value:function(){var t=this.getPath();t&&w(t,S(this.el))&&this.writeNavStateRoot(t,"root")}},{key:"onRoutesChanged",value:function(){return this.writeNavStateRoot(this.getPath(),"root")}},{key:"historyDirection",value:function(){var t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));var e=t.history.state,n=this.lastState;return this.lastState=e,e>n||e>=n&&n>0?"forward":e<n?"back":"root"}},{key:"writeNavStateRoot",value:(l=r(regeneratorRuntime.mark(function t(e,n,r){var o,i,a,u,s,c,h,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",(console.error("[ion-router] URL is not part of the routing set"),!1));case 2:return o=S(this.el),i=w(e,o),a=null,i&&(u=i.to,s=u.segments,c=u.queryString,this.setPath(s,n,c),a=i.from,e=s),h=P(this.el),f=C(e,h),t.abrupt("return",f?this.safeWriteNavState(document.body,f,n,e,a,0,r):(console.error("[ion-router] the path does not match any route"),!1));case 7:case"end":return t.stop()}},t,this)})),function(t,e,n){return l.apply(this,arguments)})},{key:"safeWriteNavState",value:(f=r(regeneratorRuntime.mark(function t(e,n,r,o,i){var a,u,s,c,h=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=h.length>5&&void 0!==h[5]?h[5]:0,u=h.length>6?h[6]:void 0,t.next=4,this.lock();case 4:return s=t.sent,c=!1,t.prev=6,t.next=9,this.writeNavState(e,n,r,o,i,a,u);case 9:c=t.sent,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(6),console.error(t.t0);case 15:return t.abrupt("return",(s(),c));case 16:case"end":return t.stop()}},t,this,[[6,12]])})),function(t,e,n,r,o){return f.apply(this,arguments)})},{key:"lock",value:(a=r(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.waitPromise,this.waitPromise=new Promise(function(t){return n=t}),t.t0=void 0!==e,!t.t0){t.next=6;break}return t.next=6,e;case 6:return t.abrupt("return",n);case 7:case"end":return t.stop()}},t,this)})),function(){return a.apply(this,arguments)})},{key:"runGuards",value:(i=r(regeneratorRuntime.mark(function t(){var e,n,r,o,i,a,u,s,c=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=c.length>0&&void 0!==c[0]?c[0]:this.getPath(),void 0===(n=c.length>1?c[1]:void 0)&&(n=g(this.previousPath).segments),e&&n){t.next=4;break}return t.abrupt("return",!0);case 4:if(r=P(this.el),o=C(n,r),i=o&&o[o.length-1].beforeLeave,t.t0=!i,t.t0){t.next=12;break}return t.next=11,i();case 11:t.t0=t.sent;case 12:if(!1!==(a=t.t0)&&"object"!=typeof a){t.next=15;break}return t.abrupt("return",a);case 15:return u=C(e,r),s=u&&u[u.length-1].beforeEnter,t.abrupt("return",!s||s());case 17:case"end":return t.stop()}},t,this)})),function(){return i.apply(this,arguments)})},{key:"writeNavState",value:(n=r(regeneratorRuntime.mark(function t(e,n,r,o,i){var a,u,s,c,h=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=h.length>5&&void 0!==h[5]?h[5]:0,u=h.length>6?h[6]:void 0,!this.busy){t.next=4;break}return t.abrupt("return",(console.warn("[ion-router] router is busy, transition was cancelled"),!1));case 4:return this.busy=!0,(s=this.routeChangeEvent(o,i))&&this.ionRouteWillChange.emit(s),t.next=9,m(e,n,r,a,!1,u);case 9:return c=t.sent,t.abrupt("return",(this.busy=!1,s&&this.ionRouteDidChange.emit(s),c));case 11:case"end":return t.stop()}},t,this)})),function(t,e,r,o,i){return n.apply(this,arguments)})},{key:"setPath",value:function(t,n,r){var o=this;this.state++,function(t,n,r,i,a,u,s){var c=d([].concat(e(g(o.root).segments),e(i)));r&&(c="#"+c),void 0!==s&&(c=c+"?"+s),"forward"===a?t.pushState(u,"",c):t.replaceState(u,"",c)}(window.history,0,this.useHash,t,n,this.state,r)}},{key:"getPath",value:function(){var t=this;return function(e,n,r){var o=e.pathname;if(t.useHash){var i=e.hash;o="#"===i[0]?i.slice(1):""}return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}(g(n).segments,g(o).segments)}(window.location,this.root)}},{key:"routeChangeEvent",value:function(t,e){var n=this.previousPath,r=d(t);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:e?d(e):null,to:r}}},{key:"el",get:function(){return Object(s.k)(this)}}]),t}(),U=function(){function e(t){var n=this;u(this,e),Object(s.o)(this,t),this.routerDirection="forward",this.onClick=function(t){Object(l.d)(n.href,t,n.routerDirection,n.routerAnimation)}}return c(e,[{key:"render",value:function(){var e,n=Object(f.b)(this),r={href:this.href,rel:this.rel,target:this.target};return Object(s.j)(s.c,{onClick:this.onClick,class:Object(l.a)(this.color,(e={},t(e,n,!0),t(e,"ion-activatable",!0),e))},Object(s.j)("a",Object.assign({},r),Object(s.j)("slot",null)))}}]),e}();U.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}])}();