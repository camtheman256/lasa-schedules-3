!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{T0So:function(n,i,o){"use strict";o.r(i),o.d(i,"CurrentSchedulePageModule",(function(){return A}));var r,c=o("ofXK"),b=o("3Pt+"),a=o("TEn/"),s=o("tyNb"),l=o("mrSG"),u=o("fXoL"),d=((r=function(){function n(t){e(this,n),this.me=t}return t(n,[{key:"ngOnInit",value:function(){}},{key:"dismissModal",value:function(){this.me.dismiss()}}]),n}()).\u0275fac=function(e){return new(e||r)(u.Hb(a.D))},r.\u0275cmp=u.Bb({type:r,selectors:[["app-about"]],decls:54,vars:1,consts:[["slot","end"],[3,"click"],["name","close"],[3,"fullscreen"],["collapse","condense"],["size","large"],["src","assets/lasa-banner.png"],["color","lasa",2,"vertical-align","middle"],["href","mailto:cameron@lasa2019.com?subject=LASA%20Schedules%20App%20Feedback"],["href","https://github.com/camtheman256/lasa-schedules-3","target","_blank"],["name","logo-github","slot","start"],["href","https://github.com/camtheman256/lasa-schedules-data","target","_blank"],["href","https://camk.co","target","_blank"],["name","person","slot","start"],["href","https://lasa2019.com","target","_blank"],["name","school","slot","start"],[2,"margin-top","1rem"],["href","https://creativecommons.org/licenses/by/4.0/legalcode","target","_blank"],["href","https://notificationsounds.com/wake-up-tones/solemn-522"]],template:function(e,n){1&e&&(u.Kb(0,"ion-header"),u.Kb(1,"ion-toolbar"),u.Kb(2,"ion-title"),u.ic(3,"About LASA Schedules"),u.Jb(),u.Kb(4,"ion-buttons",0),u.Kb(5,"ion-button",1),u.Sb("click",(function(){return n.dismissModal()})),u.Ib(6,"ion-icon",2),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Kb(7,"ion-content",3),u.Kb(8,"ion-header",4),u.Kb(9,"ion-toolbar"),u.Kb(10,"ion-title",5),u.ic(11,"About"),u.Jb(),u.Jb(),u.Jb(),u.Kb(12,"ion-card"),u.Ib(13,"img",6),u.Kb(14,"ion-card-header"),u.Kb(15,"ion-card-title"),u.ic(16,"LASA Schedules "),u.Kb(17,"ion-badge",7),u.ic(18,"v3"),u.Jb(),u.Jb(),u.Kb(19,"ion-card-subtitle"),u.ic(20,"by Cameron Kleiman for LASA 2019"),u.Jb(),u.Jb(),u.Kb(21,"ion-card-content"),u.Kb(22,"p"),u.ic(23,"If you have feedback, please email "),u.Kb(24,"a",8),u.ic(25,"cameron@lasa2019.com"),u.Jb(),u.ic(26,"."),u.Jb(),u.Kb(27,"ion-list"),u.Kb(28,"ion-list-header"),u.ic(29,"Links"),u.Jb(),u.Kb(30,"ion-item",9),u.Kb(31,"ion-label"),u.ic(32,"LASA Schedules 3"),u.Jb(),u.Ib(33,"ion-icon",10),u.Jb(),u.Kb(34,"ion-item",11),u.Kb(35,"ion-label"),u.ic(36,"LASA Schedule Data API"),u.Jb(),u.Ib(37,"ion-icon",10),u.Jb(),u.Kb(38,"ion-item",12),u.Kb(39,"ion-label"),u.ic(40,"Cameron Kleiman"),u.Jb(),u.Ib(41,"ion-icon",13),u.Jb(),u.Kb(42,"ion-item",14),u.Kb(43,"ion-label"),u.ic(44,"LASA 2019"),u.Jb(),u.Ib(45,"ion-icon",15),u.Jb(),u.Jb(),u.Kb(46,"p",16),u.ic(47," The bell sound used, unaltered, is copyright notificationsounds.com and licensed under "),u.Kb(48,"a",17),u.ic(49,"CC BY 4.0"),u.Jb(),u.ic(50,". It can be found at "),u.Kb(51,"a",18),u.ic(52,"this link"),u.Jb(),u.ic(53,". "),u.Jb(),u.Jb(),u.Jb(),u.Jb()),2&e&&(u.xb(7),u.Zb("fullscreen",!0))},directives:[a.l,a.A,a.y,a.e,a.d,a.m,a.k,a.f,a.h,a.j,a.c,a.i,a.g,a.p,a.q,a.n,a.o],styles:[""]}),r),h=o("ekzQ"),f=o("Ebwu"),m=o("bNmx");function p(e,n){if(1&e&&(u.Kb(0,"h2"),u.ic(1),u.Vb(2,"timeFormat"),u.Jb()),2&e){var t=u.Ub(2);u.xb(1),u.kc(" Ends at ",u.Wb(2,1,t.currentStatus.periodEndTime,!!t.preferences&&t.preferences.twentyfour)," ")}}function g(e,n){if(1&e&&(u.Kb(0,"p"),u.ic(1),u.Jb()),2&e){var t=u.Ub(2);u.xb(1),u.kc(" Time remaining: ",t.currentStatus.timeRemaining," ")}}function K(e,n){if(1&e&&(u.Kb(0,"div"),u.Kb(1,"ion-card-header"),u.Kb(2,"ion-card-subtitle"),u.ic(3,"Current Period"),u.Jb(),u.Kb(4,"ion-card-title"),u.ic(5),u.Jb(),u.Jb(),u.Kb(6,"ion-card-content"),u.gc(7,p,3,4,"h2",14),u.gc(8,g,2,1,"p",14),u.Jb(),u.Jb()),2&e){var t=u.Ub();u.xb(5),u.jc(t.currentStatus.currentPeriod),u.xb(2),u.Zb("ngIf",t.currentStatus.periodEndTime),u.xb(1),u.Zb("ngIf",t.currentStatus.timeRemaining)}}function J(e,n){1&e&&(u.Kb(0,"ion-card-content"),u.Kb(1,"ion-card-title"),u.ic(2,"Loading..."),u.Jb(),u.Jb())}var y,k,v,S=[{path:"",component:(y=function(){function n(t,i,o){e(this,n),this.sched=t,this.state=i,this.modal=o,this.bells=!1,this.bell_sound=new Audio("assets/solemn.mp3")}return t(n,[{key:"ngOnInit",value:function(){var e=this;this.sched.getSchedules().subscribe((function(n){return e.schedules=n})),this.sched.getSchoolYear().subscribe((function(n){return e.schoolYear=n})),this.state.getPreferences().subscribe((function(n){e.preferences=n,e.bells=n.bells})),setInterval((function(){var n=new Date;if(e.currentTime=n.toLocaleTimeString([],{hour12:!1}),e.schedules&&e.schoolYear){var t=e.sched.periodCheck(n,e.schoolYear,e.schedules);e.currentStatus&&e.bells&&t.currentPeriod!==e.currentStatus.currentPeriod&&e.bell_sound.play(),e.currentStatus=t}}),500)}},{key:"toggleTimeFormat",value:function(e){this.preferences&&this.state.setPreference("twentyfour",!this.preferences.twentyfour)}},{key:"toggleBells",value:function(e){this.preferences&&this.state.setPreference("bells",this.bells)}},{key:"presentAboutPage",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modal.create({component:d});case 2:return n=e.sent,e.next=5,n.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"playBell",value:function(e){this.bell_sound.play()}}]),n}(),y.\u0275fac=function(e){return new(e||y)(u.Hb(h.a),u.Hb(f.a),u.Hb(a.D))},y.\u0275cmp=u.Bb({type:y,selectors:[["app-current-schedule"]],decls:38,vars:8,consts:[["color","lasa"],["slot","end"],[3,"click"],["slot","icon-only","name","information-circle"],[4,"ngIf","ngIfElse"],["loading",""],["lines","none"],["text-wrap",""],["slot","start","color","lasa",3,"ngModel","ngModelChange"],[3,"hidden"],["slot","start","fill","clear","color","lasa","size","default",3,"click"],["name","play"],["name","share-outline","slot","start"],["name","cog-outline","slot","start"],[4,"ngIf"]],template:function(e,n){if(1&e&&(u.Kb(0,"ion-header"),u.Kb(1,"ion-toolbar",0),u.Kb(2,"ion-title"),u.ic(3,"Current Schedule"),u.Jb(),u.Kb(4,"ion-buttons",1),u.Kb(5,"ion-button",2),u.Sb("click",(function(){return n.presentAboutPage()})),u.Ib(6,"ion-icon",3),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Kb(7,"ion-content"),u.Kb(8,"ion-card",2),u.Sb("click",(function(e){return n.toggleTimeFormat(e)})),u.Kb(9,"ion-card-header"),u.Kb(10,"ion-card-subtitle"),u.ic(11,"Current Time"),u.Jb(),u.Kb(12,"ion-card-title"),u.ic(13),u.Vb(14,"timeFormat"),u.Jb(),u.Jb(),u.Jb(),u.Kb(15,"ion-card",0),u.gc(16,K,9,3,"div",4),u.gc(17,J,3,0,"ng-template",null,5,u.hc),u.Jb(),u.Kb(19,"ion-card-content"),u.Kb(20,"ion-list",6),u.Kb(21,"ion-item"),u.Kb(22,"ion-label",7),u.ic(23,"Use virtual bells (requires app open)"),u.Jb(),u.Kb(24,"ion-toggle",8),u.Sb("ngModelChange",(function(e){return n.bells=e}))("ngModelChange",(function(e){return n.toggleBells(e)})),u.Jb(),u.Jb(),u.Kb(25,"ion-item",9),u.Kb(26,"ion-label",7),u.ic(27,"If bells aren't working, press the play button once to start."),u.Jb(),u.Kb(28,"ion-button",10),u.Sb("click",(function(e){return n.playBell(e)})),u.Ib(29,"ion-icon",11),u.Jb(),u.Jb(),u.Kb(30,"ion-item"),u.Kb(31,"ion-label",7),u.ic(32,"Install this app by adding it to your home screen."),u.Jb(),u.Ib(33,"ion-icon",12),u.Jb(),u.Kb(34,"ion-item"),u.Kb(35,"ion-label",7),u.ic(36,"Tap the time to change between 12-hour and 24-hour time."),u.Jb(),u.Ib(37,"ion-icon",13),u.Jb(),u.Jb(),u.Jb(),u.Jb()),2&e){var t=u.cc(18);u.xb(13),u.jc(u.Wb(14,5,n.currentTime,!!n.preferences&&n.preferences.twentyfour)),u.xb(3),u.Zb("ngIf",n.currentStatus)("ngIfElse",t),u.xb(8),u.Zb("ngModel",n.bells),u.xb(1),u.Zb("hidden",!n.bells)}},directives:[a.l,a.A,a.y,a.e,a.d,a.m,a.k,a.f,a.h,a.i,a.j,c.i,a.g,a.p,a.n,a.o,a.z,a.a,b.d,b.e],pipes:[m.a],styles:[".fix-element-width[_ngcontent-%COMP%]{width:50px}"]}),y)}],w=((k=function n(){e(this,n)}).\u0275mod=u.Fb({type:k}),k.\u0275inj=u.Eb({factory:function(e){return new(e||k)},imports:[[s.i.forChild(S)],s.i]}),k),I=o("iTUp"),A=((v=function n(){e(this,n)}).\u0275mod=u.Fb({type:v}),v.\u0275inj=u.Eb({factory:function(e){return new(e||v)},imports:[[c.b,b.a,a.B,w,I.a]]}),v)}}])}();