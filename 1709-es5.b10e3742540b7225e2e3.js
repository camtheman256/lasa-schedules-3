!function(){"use strict";function i(i,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}(self.webpackChunklasa_schedules=self.webpackChunklasa_schedules||[]).push([[1709],{1709:function(t,n,e){e.r(n),e.d(n,{ion_img:function(){return s}});var o=e(3150),r=e(7585),s=function(){function t(i){var n=this;!function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(0,o.r)(this,i),this.ionImgWillLoad=(0,o.e)(this,"ionImgWillLoad",7),this.ionImgDidLoad=(0,o.e)(this,"ionImgDidLoad",7),this.ionError=(0,o.e)(this,"ionError",7),this.onLoad=function(){n.ionImgDidLoad.emit()},this.onError=function(){n.ionError.emit()}}var n,e,s;return n=t,s=[{key:"watchers",get:function(){return{src:["srcChanged"]}}}],(e=[{key:"srcChanged",value:function(){this.addIO()}},{key:"componentDidLoad",value:function(){this.addIO()}},{key:"addIO",value:function(){var i=this;void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(function(t){t[t.length-1].isIntersecting&&(i.load(),i.removeIO())}),this.io.observe(this.el)):setTimeout(function(){return i.load()},200))}},{key:"load",value:function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}},{key:"removeIO",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"render",value:function(){return(0,o.h)(o.H,{class:(0,r.b)(this)},(0,o.h)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))}},{key:"el",get:function(){return(0,o.i)(this)}}])&&i(n.prototype,e),s&&i(n,s),t}();s.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}])}();