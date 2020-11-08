!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{T0So:function(t,i,o){"use strict";o.r(i),o.d(i,"CurrentSchedulePageModule",(function(){return I}));var r,c=o("ofXK"),a=o("3Pt+"),b=o("TEn/"),s=o("tyNb"),l=o("mrSG"),u=o("fXoL"),d=((r=function(){function t(n){e(this,t),this.me=n}return n(t,[{key:"ngOnInit",value:function(){}},{key:"dismissModal",value:function(){this.me.dismiss()}}]),t}()).\u0275fac=function(e){return new(e||r)(u.Hb(b.D))},r.\u0275cmp=u.Bb({type:r,selectors:[["app-about"]],decls:63,vars:1,consts:[["slot","end"],[3,"click"],["name","close"],[3,"fullscreen"],["collapse","condense"],["size","large"],["src","assets/lasa-banner.png"],["color","lasa",2,"vertical-align","middle"],["href","mailto:cameron@lasa2019.com?subject=LASA%20Schedules%20App%20Feedback"],["href","https://schedules-editor.lasa2019.com","target","_blank"],["href","https://github.com/camtheman256/lasa-schedules-3","target","_blank"],["name","logo-github","slot","start"],["href","https://github.com/camtheman256/lasa-schedules-data","target","_blank"],["href","https://github.com/camtheman256/lasa-schedules-editor","target","_blank"],["href","https://camk.co","target","_blank"],["name","person","slot","start"],["href","https://lasa2019.com","target","_blank"],["name","school","slot","start"],[2,"margin-top","1rem"],["href","https://creativecommons.org/licenses/by/4.0/legalcode","target","_blank"],["href","https://notificationsounds.com/wake-up-tones/solemn-522"]],template:function(e,t){1&e&&(u.Kb(0,"ion-header"),u.Kb(1,"ion-toolbar"),u.Kb(2,"ion-title"),u.ic(3,"About LASA Schedules"),u.Jb(),u.Kb(4,"ion-buttons",0),u.Kb(5,"ion-button",1),u.Sb("click",(function(){return t.dismissModal()})),u.Ib(6,"ion-icon",2),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Kb(7,"ion-content",3),u.Kb(8,"ion-header",4),u.Kb(9,"ion-toolbar"),u.Kb(10,"ion-title",5),u.ic(11,"About"),u.Jb(),u.Jb(),u.Jb(),u.Kb(12,"ion-card"),u.Ib(13,"img",6),u.Kb(14,"ion-card-header"),u.Kb(15,"ion-card-title"),u.ic(16,"LASA Schedules "),u.Kb(17,"ion-badge",7),u.ic(18,"v3"),u.Jb(),u.Jb(),u.Kb(19,"ion-card-subtitle"),u.ic(20,"by Cameron Kleiman for LASA 2019"),u.Jb(),u.Jb(),u.Kb(21,"ion-card-content"),u.Kb(22,"p"),u.ic(23,"If you have feedback, please email "),u.Kb(24,"a",8),u.ic(25,"cameron@lasa2019.com"),u.Jb(),u.ic(26,"."),u.Jb(),u.Kb(27,"p"),u.ic(28,"You can edit the schedules powering this app! Visit "),u.Kb(29,"a",9),u.ic(30,"LASA Schedules Editor"),u.Jb(),u.ic(31," to get started."),u.Jb(),u.Kb(32,"ion-list"),u.Kb(33,"ion-list-header"),u.ic(34,"Links"),u.Jb(),u.Kb(35,"ion-item",10),u.Kb(36,"ion-label"),u.ic(37,"LASA Schedules 3"),u.Jb(),u.Ib(38,"ion-icon",11),u.Jb(),u.Kb(39,"ion-item",12),u.Kb(40,"ion-label"),u.ic(41,"LASA Schedules Data API"),u.Jb(),u.Ib(42,"ion-icon",11),u.Jb(),u.Kb(43,"ion-item",13),u.Kb(44,"ion-label"),u.ic(45,"LASA Schedules Editor"),u.Jb(),u.Ib(46,"ion-icon",11),u.Jb(),u.Kb(47,"ion-item",14),u.Kb(48,"ion-label"),u.ic(49,"Cameron Kleiman"),u.Jb(),u.Ib(50,"ion-icon",15),u.Jb(),u.Kb(51,"ion-item",16),u.Kb(52,"ion-label"),u.ic(53,"LASA 2019"),u.Jb(),u.Ib(54,"ion-icon",17),u.Jb(),u.Jb(),u.Kb(55,"p",18),u.ic(56," The bell sound used, unaltered, is copyright notificationsounds.com and licensed under "),u.Kb(57,"a",19),u.ic(58,"CC BY 4.0"),u.Jb(),u.ic(59,". It can be found at "),u.Kb(60,"a",20),u.ic(61,"this link"),u.Jb(),u.ic(62,". "),u.Jb(),u.Jb(),u.Jb(),u.Jb()),2&e&&(u.xb(7),u.Zb("fullscreen",!0))},directives:[b.l,b.A,b.y,b.e,b.d,b.m,b.k,b.f,b.h,b.j,b.c,b.i,b.g,b.p,b.q,b.n,b.o],styles:[""]}),r),h=o("ekzQ"),f=o("Ebwu"),m=o("bNmx");function p(e,t){if(1&e&&(u.Kb(0,"h2"),u.ic(1),u.Vb(2,"timeFormat"),u.Jb()),2&e){var n=u.Ub(2);u.xb(1),u.kc(" Ends at ",u.Wb(2,1,n.currentStatus.periodEndTime,!!n.preferences&&n.preferences.twentyfour)," ")}}function g(e,t){if(1&e&&(u.Kb(0,"p"),u.ic(1),u.Jb()),2&e){var n=u.Ub(2);u.xb(1),u.kc(" Time remaining: ",n.currentStatus.timeRemaining," ")}}function K(e,t){if(1&e&&(u.Kb(0,"div"),u.Kb(1,"ion-card-header"),u.Kb(2,"ion-card-subtitle"),u.ic(3,"Current Period"),u.Jb(),u.Kb(4,"ion-card-title"),u.ic(5),u.Jb(),u.Jb(),u.Kb(6,"ion-card-content"),u.gc(7,p,3,4,"h2",14),u.gc(8,g,2,1,"p",14),u.Jb(),u.Jb()),2&e){var n=u.Ub();u.xb(5),u.jc(n.currentStatus.currentPeriod),u.xb(2),u.Zb("ngIf",n.currentStatus.periodEndTime),u.xb(1),u.Zb("ngIf",n.currentStatus.timeRemaining)}}function J(e,t){1&e&&(u.Kb(0,"ion-card-content"),u.Kb(1,"ion-card-title"),u.ic(2,"Loading..."),u.Jb(),u.Jb())}var S,y,k,v=[{path:"",component:(S=function(){function t(n,i,o){e(this,t),this.sched=n,this.state=i,this.modal=o,this.bells=!1,this.bell_sound=new Audio("assets/solemn.mp3")}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.sched.getSchedules().subscribe((function(t){return e.schedules=t})),this.sched.getSchoolYear().subscribe((function(t){return e.schoolYear=t})),this.state.getPreferences().subscribe((function(t){e.preferences=t,e.bells=t.bells})),this.state.getCurrentSchedule().subscribe((function(t){return e.currentSchedule=t})),setInterval((function(){var t=new Date;if(e.currentTime=t.toLocaleTimeString([],{hour12:!1}),e.currentDate=t.toLocaleDateString([],{weekday:"long",month:"long",day:"numeric",year:"numeric"}),e.schedules&&e.schoolYear){var n=e.sched.periodCheck(t,e.schoolYear,e.schedules);e.currentStatus&&e.bells&&n.currentPeriod!==e.currentStatus.currentPeriod&&e.bell_sound.play(),e.currentStatus=n}}),500)}},{key:"toggleTimeFormat",value:function(e){this.preferences&&this.state.setPreference("twentyfour",!this.preferences.twentyfour)}},{key:"toggleBells",value:function(e){this.preferences&&this.state.setPreference("bells",this.bells)}},{key:"presentAboutPage",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modal.create({component:d});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"playBell",value:function(e){this.bell_sound.play()}}]),t}(),S.\u0275fac=function(e){return new(e||S)(u.Hb(h.a),u.Hb(f.a),u.Hb(b.D))},S.\u0275cmp=u.Bb({type:S,selectors:[["app-current-schedule"]],decls:40,vars:10,consts:[["color","lasa"],["slot","end"],[3,"click"],["slot","icon-only","name","information-circle"],[4,"ngIf","ngIfElse"],["loading",""],["lines","none"],["text-wrap",""],["slot","start","color","lasa",3,"ngModel","ngModelChange"],[3,"hidden"],["slot","start","fill","clear","color","lasa","size","default",3,"click"],["name","play"],["name","share-outline","slot","start"],["name","cog-outline","slot","start"],[4,"ngIf"]],template:function(e,t){if(1&e&&(u.Kb(0,"ion-header"),u.Kb(1,"ion-toolbar",0),u.Kb(2,"ion-title"),u.ic(3),u.Jb(),u.Kb(4,"ion-buttons",1),u.Kb(5,"ion-button",2),u.Sb("click",(function(){return t.presentAboutPage()})),u.Ib(6,"ion-icon",3),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Kb(7,"ion-content"),u.Kb(8,"ion-card",2),u.Sb("click",(function(e){return t.toggleTimeFormat(e)})),u.Kb(9,"ion-card-header"),u.Kb(10,"ion-card-subtitle"),u.ic(11,"Current Time"),u.Jb(),u.Kb(12,"ion-card-title"),u.ic(13),u.Vb(14,"timeFormat"),u.Jb(),u.Kb(15,"div"),u.ic(16),u.Jb(),u.Jb(),u.Jb(),u.Kb(17,"ion-card",0),u.gc(18,K,9,3,"div",4),u.gc(19,J,3,0,"ng-template",null,5,u.hc),u.Jb(),u.Kb(21,"ion-card-content"),u.Kb(22,"ion-list",6),u.Kb(23,"ion-item"),u.Kb(24,"ion-label",7),u.ic(25,"Use virtual bells (requires app open)"),u.Jb(),u.Kb(26,"ion-toggle",8),u.Sb("ngModelChange",(function(e){return t.bells=e}))("ngModelChange",(function(e){return t.toggleBells(e)})),u.Jb(),u.Jb(),u.Kb(27,"ion-item",9),u.Kb(28,"ion-label",7),u.ic(29,"If bells aren't working, press the play button once to start."),u.Jb(),u.Kb(30,"ion-button",10),u.Sb("click",(function(e){return t.playBell(e)})),u.Ib(31,"ion-icon",11),u.Jb(),u.Jb(),u.Kb(32,"ion-item"),u.Kb(33,"ion-label",7),u.ic(34,"Install this app by adding it to your home screen."),u.Jb(),u.Ib(35,"ion-icon",12),u.Jb(),u.Kb(36,"ion-item"),u.Kb(37,"ion-label",7),u.ic(38,"Tap the time to change between 12-hour and 24-hour time."),u.Jb(),u.Ib(39,"ion-icon",13),u.Jb(),u.Jb(),u.Jb(),u.Jb()),2&e){var n=u.cc(20);u.xb(3),u.jc(t.currentSchedule?t.currentSchedule.name+" Schedule":"Current Schedule"),u.xb(10),u.jc(u.Wb(14,7,t.currentTime,!!t.preferences&&t.preferences.twentyfour)),u.xb(3),u.jc(t.currentDate),u.xb(2),u.Zb("ngIf",t.currentStatus)("ngIfElse",n),u.xb(8),u.Zb("ngModel",t.bells),u.xb(1),u.Zb("hidden",!t.bells)}},directives:[b.l,b.A,b.y,b.e,b.d,b.m,b.k,b.f,b.h,b.i,b.j,c.i,b.g,b.p,b.n,b.o,b.z,b.a,a.d,a.e],pipes:[m.a],styles:[".fix-element-width[_ngcontent-%COMP%]{width:50px}"]}),S)}],w=((y=function t(){e(this,t)}).\u0275mod=u.Fb({type:y}),y.\u0275inj=u.Eb({factory:function(e){return new(e||y)},imports:[[s.i.forChild(v)],s.i]}),y),A=o("iTUp"),I=((k=function t(){e(this,t)}).\u0275mod=u.Fb({type:k}),k.\u0275inj=u.Eb({factory:function(e){return new(e||k)},imports:[[c.b,a.a,b.B,w,A.a]]}),k)}}])}();