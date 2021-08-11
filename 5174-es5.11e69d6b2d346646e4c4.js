!function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw i}}}}function r(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var s=function(e,t,n){return new Promise(function(r,o){var a=function(e){try{u(n.next(e))}catch(t){o(t)}},i=function(e){try{u(n.throw(e))}catch(t){o(t)}},u=function(e){return e.done?r(e.value):Promise.resolve(e.value).then(a,i)};u((n=n.apply(e,t)).next())})};(self.webpackChunklasa_schedules=self.webpackChunklasa_schedules||[]).push([[5174],{5174:function(r,o,i){var c=this;i.r(o),i.d(o,{ion_route:function(){return d},ion_route_redirect:function(){return p},ion_router:function(){return W},ion_router_link:function(){return _}});var l=i(3150),h=i(2377),f=i(7585),v=i(1269),d=function(){function e(t){a(this,e),(0,l.r)(this,t),this.ionRouteDataChanged=(0,l.e)(this,"ionRouteDataChanged",7),this.url=""}return u(e,[{key:"onUpdate",value:function(e){this.ionRouteDataChanged.emit(e)}},{key:"onComponentProps",value:function(e,t){if(e!==t){var r=e?Object.keys(e):[],o=t?Object.keys(t):[];if(r.length===o.length){var a,i=n(r);try{for(i.s();!(a=i.n()).done;){var u=a.value;if(e[u]!==t[u])return void this.onUpdate(e)}}catch(s){i.e(s)}finally{i.f()}}else this.onUpdate(e)}}},{key:"connectedCallback",value:function(){this.ionRouteDataChanged.emit()}}],[{key:"watchers",get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}]),e}(),p=function(){function e(t){a(this,e),(0,l.r)(this,t),this.ionRouteRedirectChanged=(0,l.e)(this,"ionRouteRedirectChanged",7)}return u(e,[{key:"propDidChange",value:function(){this.ionRouteRedirectChanged.emit()}},{key:"connectedCallback",value:function(){this.ionRouteRedirectChanged.emit()}}],[{key:"watchers",get:function(){return{from:["propDidChange"],to:["propDidChange"]}}}]),e}(),g="root",m="forward",b=function(e){return"/"+e.filter(function(e){return e.length>0}).join("/")},y=function(e){var t,n=[""];if(null!=e){var r=e.indexOf("?");r>-1&&(t=e.substr(r+1),e=e.substr(0,r)),0===(n=e.split("/").map(function(e){return e.trim()}).filter(function(e){return e.length>0})).length&&(n=[""])}return{segments:n,queryString:t}},w=function e(t,n,r,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5?arguments[5]:void 0;return s(c,null,regeneratorRuntime.mark(function u(){var s,c,l;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(u.prev=0,s=x(t),!(o>=n.length)&&s){u.next=4;break}return u.abrupt("return",a);case 4:return u.next=6,new Promise(function(e){return(0,h.c)(s,e)});case 6:return c=n[o],u.next=9,s.setRouteId(c.id,c.params,r,i);case 9:return(l=u.sent).changed&&(r=g,a=!0),u.next=13,e(l.element,n,r,o+1,a,i);case 13:if(a=u.sent,u.t0=l.markVisible,!u.t0){u.next=18;break}return u.next=18,l.markVisible();case 18:return u.abrupt("return",a);case 21:return u.prev=21,u.t1=u.catch(0),u.abrupt("return",(console.error(u.t1),!1));case 24:case"end":return u.stop()}},u,null,[[0,21]])}))},k=function(e){return s(c,null,regeneratorRuntime.mark(function t(){var n,r,o,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=[],o=e;case 2:if(!(r=x(o))){t.next=11;break}return t.next=5,r.getRouteId();case 5:if(a=t.sent){t.next=8;break}return t.abrupt("break",11);case 8:o=a.element,a.element=void 0,n.push(a);case 9:t.next=2;break;case 11:return t.abrupt("return",{ids:n,outlet:r});case 12:case"end":return t.stop()}},t)}))},R=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",x=function(e){if(e){if(e.matches(R))return e;var t=e.querySelector(R);return null!=t?t:void 0}},C=function(e,t){return t.find(function(t){return function(e,t){var n=t.from;if(void 0===t.to||n.length>e.length)return!1;for(var r=0;r<n.length;r++){var o=n[r];if("*"===o)return!0;if(o!==e[r])return!1}return n.length===e.length}(e,t)})},S=function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n&&e[r].toLowerCase()===t[r].id;r++);return r},P=function(e,t){for(var r,o=new L(e),a=!1,i=0;i<t.length;i++){var u=t[i].path;if(""===u[0])a=!0;else{var s,c=n(u);try{for(c.s();!(s=c.n()).done;){var l=s.value,h=o.next();if(":"===l[0]){if(""===h)return null;((r=r||[])[i]||(r[i]={}))[l.slice(1)]=h}else if(h!==l)return null}}catch(f){c.e(f)}finally{c.f()}a=!1}}return a&&a!==(""===o.next())?null:r?t.map(function(e,t){return{id:e.id,path:e.path,params:E(e.params,r[t]),beforeEnter:e.beforeEnter,beforeLeave:e.beforeLeave}}):t},E=function(e,t){return e||t?Object.assign(Object.assign({},e),t):void 0},D=function(e,t){var r,o=null,a=0,i=n(t);try{for(i.s();!(r=i.n()).done;){var u=r.value,s=P(e,u);if(null!==s){var c=j(s);c>a&&(a=c,o=s)}}}catch(l){i.e(l)}finally{i.f()}return o},j=function(e){var t,r=1,o=1,a=n(e);try{for(a.s();!(t=a.n()).done;){var i,u=n(t.value.path);try{for(u.s();!(i=u.n()).done;){var s=i.value;":"===s[0]?r+=Math.pow(1,o):""!==s&&(r+=Math.pow(2,o)),o++}}catch(c){u.e(c)}finally{u.f()}}}catch(c){a.e(c)}finally{a.f()}return r},L=function(){function e(t){a(this,e),this.path=t.slice()}return u(e,[{key:"next",value:function(){return this.path.length>0?this.path.shift():""}}]),e}(),O=function(e,t){return t in e?e[t]:e.hasAttribute(t)?e.getAttribute(t):null},N=function(e){return Array.from(e.children).filter(function(e){return"ION-ROUTE-REDIRECT"===e.tagName}).map(function(e){var t=O(e,"to");return{from:y(O(e,"from")).segments,to:null==t?void 0:y(t)}})},A=function(e){return I(U(e))},U=function e(t){return Array.from(t.children).filter(function(e){return"ION-ROUTE"===e.tagName&&e.component}).map(function(t){var n=O(t,"component");return{path:y(O(t,"url")).segments,id:n.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:e(t)}})},I=function(e){var t,r=[],o=n(e);try{for(o.s();!(t=o.n()).done;){var a=t.value;T([],r,a)}}catch(i){o.e(i)}finally{o.f()}return r},T=function e(t,r,o){if((t=t.slice()).push({id:o.id,path:o.path,params:o.params,beforeLeave:o.beforeLeave,beforeEnter:o.beforeEnter}),0!==o.children.length){var a,i=n(o.children);try{for(i.s();!(a=i.n()).done;){e(t,r,a.value)}}catch(u){i.e(u)}finally{i.f()}}else r.push(t)},W=function(){function e(t){a(this,e),(0,l.r)(this,t),this.ionRouteWillChange=(0,l.e)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,l.e)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return u(e,[{key:"componentWillLoad",value:function(){return s(this,null,regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(document.body)?Promise.resolve():new Promise(function(e){window.addEventListener("ionNavWillLoad",e,{once:!0})});case 2:return e.next=4,this.runGuards(this.getPath());case 4:if(!0===(t=e.sent)){e.next=13;break}if("object"!=typeof t){e.next=11;break}return n=t.redirect,r=y(n),this.setPath(r.segments,g,r.queryString),e.next=11,this.writeNavStateRoot(r.segments,g);case 11:e.next=15;break;case 13:return e.next=15,this.onRoutesChanged();case 15:case"end":return e.stop()}},e,this)}))}},{key:"componentDidLoad",value:function(){window.addEventListener("ionRouteRedirectChanged",(0,h.n)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,h.n)(this.onRoutesChanged.bind(this),100))}},{key:"onPopState",value:function(){return s(this,null,regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.historyDirection(),n=this.getPath(),e.next=4,this.runGuards(n);case 4:if(!0===(r=e.sent)){e.next=9;break}if("object"==typeof r){e.next=8;break}return e.abrupt("return",!1);case 8:n=y(r.redirect).segments;case 9:return e.abrupt("return",this.writeNavStateRoot(n,t));case 10:case"end":return e.stop()}},e,this)}))}},{key:"onBackButton",value:function(e){var t=this;e.detail.register(0,function(e){t.back(),e()})}},{key:"canTransition",value:function(){return s(this,null,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.runGuards();case 2:return t=e.sent,e.abrupt("return",!0===t||"object"==typeof t&&t.redirect);case 4:case"end":return e.stop()}},e,this)}))}},{key:"push",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"forward",n=arguments.length>2?arguments[2]:void 0;return s(this,null,regeneratorRuntime.mark(function r(){var o,a;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e.startsWith(".")&&(e=new URL(e,window.location.href).pathname),o=y(e),r.next=4,this.runGuards(o.segments);case 4:if(!0===(a=r.sent)){r.next=9;break}if("object"==typeof a){r.next=8;break}return r.abrupt("return",!1);case 8:o=y(a.redirect);case 9:return r.abrupt("return",(this.setPath(o.segments,t,o.queryString),this.writeNavStateRoot(o.segments,t,n)));case 10:case"end":return r.stop()}},r,this)}))}},{key:"back",value:function(){return window.history.back(),Promise.resolve(this.waitPromise)}},{key:"printDebug",value:function(){return s(this,null,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(function(e){console.group("[ion-core] ROUTES[".concat(e.length,"]"));var r,o=n(e);try{var a=function(){var e=r.value,n=[];e.forEach(function(e){return n.push.apply(n,t(e.path))});var o=e.map(function(e){return e.id});console.debug("%c ".concat(b(n)),"font-weight: bold; padding-left: 20px","=>\t","(".concat(o.join(", "),")"))};for(o.s();!(r=o.n()).done;)a()}catch(i){o.e(i)}finally{o.f()}console.groupEnd()})(A(this.el)),function(e){console.group("[ion-core] REDIRECTS[".concat(e.length,"]"));var t,r=n(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;o.to&&console.debug("FROM: ","$c ".concat(b(o.from)),"font-weight: bold"," TO: ","$c ".concat(b(o.to.segments)),"font-weight: bold")}}catch(a){r.e(a)}finally{r.f()}console.groupEnd()}(N(this.el));case 1:case"end":return e.stop()}},e,this)}))}},{key:"navChanged",value:function(e){return s(this,null,regeneratorRuntime.mark(function t(){var r,o,a,i,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.busy){t.next=2;break}return t.abrupt("return",(console.warn("[ion-router] router is busy, navChanged was cancelled"),!1));case 2:return t.next=4,k(window.document.body);case 4:if(r=t.sent,o=r.ids,a=r.outlet,i=function(e,t){var r,o=null,a=0,i=e.map(function(e){return e.id}),u=n(t);try{for(u.s();!(r=u.n()).done;){var s=r.value,c=S(i,s);c>a&&(o=s,a=c)}}catch(l){u.e(l)}finally{u.f()}return o?o.map(function(t,n){return{id:t.id,path:t.path,params:E(t.params,e[n]&&e[n].params)}}):null}(o,A(this.el))){t.next=10;break}return t.abrupt("return",(console.warn("[ion-router] no matching URL for ",o.map(function(e){return e.id})),!1));case 10:if(!(u=function(e){var t,r=[],o=n(e);try{for(o.s();!(t=o.n()).done;){var a,i=t.value,u=n(i.path);try{for(u.s();!(a=u.n()).done;){var s=a.value;if(":"===s[0]){var c=i.params&&i.params[s.slice(1)];if(!c)return null;r.push(c)}else""!==s&&r.push(s)}}catch(l){u.e(l)}finally{u.f()}}}catch(l){o.e(l)}finally{o.f()}return r}(i))){t.next=18;break}return this.setPath(u,e),t.next=15,this.safeWriteNavState(a,i,g,u,null,o.length);case 15:t.t0=!0,t.next=19;break;case 18:t.t0=(console.warn("[ion-router] router could not match path because some required param is missing"),!1);case 19:return t.abrupt("return",t.t0);case 20:case"end":return t.stop()}},t,this)}))}},{key:"onRedirectChanged",value:function(){var e=this.getPath();e&&C(e,N(this.el))&&this.writeNavStateRoot(e,g)}},{key:"onRoutesChanged",value:function(){return this.writeNavStateRoot(this.getPath(),g)}},{key:"historyDirection",value:function(){var e,t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,null===(e=t.document.location)||void 0===e?void 0:e.href));var n=t.history.state,r=this.lastState;return this.lastState=n,n>r||n>=r&&r>0?m:n<r?"back":g}},{key:"writeNavStateRoot",value:function(e,t,n){return s(this,null,regeneratorRuntime.mark(function r(){var o,a,i,u,s,c,l,h;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=2;break}return r.abrupt("return",(console.error("[ion-router] URL is not part of the routing set"),!1));case 2:return o=N(this.el),a=C(e,o),i=null,a&&(u=a.to,s=u.segments,c=u.queryString,this.setPath(s,t,c),i=a.from,e=s),l=A(this.el),h=D(e,l),r.abrupt("return",h?this.safeWriteNavState(document.body,h,t,e,i,0,n):(console.error("[ion-router] the path does not match any route"),!1));case 7:case"end":return r.stop()}},r,this)}))}},{key:"safeWriteNavState",value:function(e,t,n,r,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=arguments.length>6?arguments[6]:void 0;return s(this,null,regeneratorRuntime.mark(function u(){var s,c;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.lock();case 2:return s=u.sent,c=!1,u.prev=4,u.next=7,this.writeNavState(e,t,n,r,o,a,i);case 7:c=u.sent,u.next=13;break;case 10:u.prev=10,u.t0=u.catch(4),console.error(u.t0);case 13:return u.abrupt("return",(s(),c));case 14:case"end":return u.stop()}},u,this,[[4,10]])}))}},{key:"lock",value:function(){return s(this,null,regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.waitPromise,this.waitPromise=new Promise(function(e){return n=e}),e.t0=void 0!==t,!e.t0){e.next=6;break}return e.next=6,t;case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)}))}},{key:"runGuards",value:function(){return s(this,arguments,regeneratorRuntime.mark(function e(){var t,n,r,o,a,i,u,s,c=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>0&&void 0!==c[0]?c[0]:this.getPath(),void 0===(n=c.length>1?c[1]:void 0)&&(n=y(this.previousPath).segments),t&&n){e.next=4;break}return e.abrupt("return",!0);case 4:if(r=A(this.el),o=D(n,r),a=o&&o[o.length-1].beforeLeave,e.t0=!a,e.t0){e.next=12;break}return e.next=11,a();case 11:e.t0=e.sent;case 12:if(!1!==(i=e.t0)&&"object"!=typeof i){e.next=15;break}return e.abrupt("return",i);case 15:return u=D(t,r),s=u&&u[u.length-1].beforeEnter,e.abrupt("return",!s||s());case 17:case"end":return e.stop()}},e,this)}))}},{key:"writeNavState",value:function(e,t,n,r,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=arguments.length>6?arguments[6]:void 0;return s(this,null,regeneratorRuntime.mark(function u(){var s,c;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!this.busy){u.next=2;break}return u.abrupt("return",(console.warn("[ion-router] router is busy, transition was cancelled"),!1));case 2:return this.busy=!0,(s=this.routeChangeEvent(r,o))&&this.ionRouteWillChange.emit(s),u.next=7,w(e,t,n,a,!1,i);case 7:return c=u.sent,u.abrupt("return",(this.busy=!1,s&&this.ionRouteDidChange.emit(s),c));case 9:case"end":return u.stop()}},u,this)}))}},{key:"setPath",value:function(e,n,r){this.state++,function(e,n,r,o,a,i,u){var s=function(e,t,n){var r=b(e);return t&&(r="#"+r),void 0!==n&&(r+="?"+n),r}([].concat(t(y(n).segments),t(o)),r,u);a===m?e.pushState(i,"",s):e.replaceState(i,"",s)}(window.history,this.root,this.useHash,e,n,this.state,r)}},{key:"getPath",value:function(){var e,t,n,r,o=this;return e=window.location,t=this.useHash,n=y(o.root).segments,r=t?e.hash.slice(1):e.pathname,function(e,t){if(e.length>t.length)return null;if(e.length<=1&&""===e[0])return t;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return null;return t.length===e.length?[""]:t.slice(e.length)}(n,y(r).segments)}},{key:"routeChangeEvent",value:function(e,t){var n=this.previousPath,r=b(e);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:t?b(t):null,to:r}}},{key:"el",get:function(){return(0,l.i)(this)}}]),e}(),_=function(){function t(e){var n=this;a(this,t),(0,l.r)(this,e),this.routerDirection="forward",this.onClick=function(e){(0,v.o)(n.href,e,n.routerDirection,n.routerAnimation)}}return u(t,[{key:"render",value:function(){var t,n=(0,f.b)(this),r={href:this.href,rel:this.rel,target:this.target};return(0,l.h)(l.H,{onClick:this.onClick,class:(0,v.c)(this.color,(t={},e(t,n,!0),e(t,"ion-activatable",!0),t))},(0,l.h)("a",Object.assign({},r),(0,l.h)("slot",null)))}}]),t}();_.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}])}();