(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["slides"],{"6b1b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("PresentationContainer",{attrs:{slideNumber:e.currentSlideNumber}},[n("router-view")],1)},i=[],r=n("d4ec"),s=n("bee2"),u=n("99de"),o=n("7e84"),c=n("262e"),l=n("9ab4"),d=n("60a3"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"presentation-container"},[n("div",{staticClass:"slide-container",on:{click:function(t){return e.slideClicked(t)}}},[n("transition",{attrs:{name:e.transitionName}},[n("slide-"+e.slide,{tag:"component",attrs:{subSlide:e.subSlide}})],1)],1),e.showControls?n("div",{staticClass:"slide-nav-button-container"},[n("b-button",{attrs:{tag:"a",href:e.previousSlideRoute,disabled:!e.canNavigateBackward,type:"is-link"},on:{click:function(t){return t.preventDefault(),e.navigateClicked(!1)}}},[n("font-awesome-icon",{attrs:{icon:"angle-left",size:"lg"}})],1),n("b-button",{attrs:{tag:"a",href:e.nextSlideRoute,disabled:!e.canNavigateForward,type:"is-link"},on:{click:function(t){return t.preventDefault(),e.navigateClicked(!0)}}},[n("font-awesome-icon",{attrs:{icon:"angle-right",size:"lg"}})],1)],1):e._e()])},f=[],p=(n("b0c0"),n("d3b7"),n("96cf"),n("1da1")),v=n("2b0e"),g=n("ad3d"),h=n("ecee"),m=n("c074"),w=n("0613");h["c"].add(m["b"]),h["c"].add(m["a"]);var k=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(u["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.transitionName="fade",e}return Object(c["a"])(t,e),Object(s["a"])(t,[{key:"slideClicked",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t){var n,a,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.x,null!==t.srcElement){e.next=3;break}return e.abrupt("return");case 3:return a=t.srcElement.clientWidth,i=n/a,e.next=7,w["a"].dispatch.slides.navigateSubSlide({forward:i>=.5});case 7:r=e.sent,this.navigateToNewPath(r);case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"navigateClicked",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w["a"].dispatch.slides.navigateOne({forward:t});case 2:n=e.sent,this.navigateToNewPath(n);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"navigateToNewPath",value:function(e){if(!e)return Promise.resolve(this.$route);var t={};return Object.assign(t,this.$route),t.path=e,t.name=void 0,this.$router.push(t)}},{key:"slide",get:function(){var e=w["a"].getters.slides.currentSlide.name,t=v["a"].options.components["slide-"+e];return t||this.$router.push({name:"slide-not-found"}),e}},{key:"subSlide",get:function(){return w["a"].getters.slides.currentSub}},{key:"nextSlideRoute",get:function(){return w["a"].getters.slides.nextSlideRoute}},{key:"previousSlideRoute",get:function(){return w["a"].getters.slides.previousSlideRoute}},{key:"canNavigateForward",get:function(){return w["a"].getters.slides.canNavigateForward}},{key:"canNavigateBackward",get:function(){return w["a"].getters.slides.canNavigateBackwards}}]),t}(d["c"]);l["a"]([Object(d["b"])({default:!0,type:Boolean})],k.prototype,"showSlideNumber",void 0),l["a"]([Object(d["b"])({default:!0,type:Boolean})],k.prototype,"showControls",void 0),k=l["a"]([Object(d["a"])({components:{FontAwesomeIcon:g["a"]}})],k);var S=k,y=S,O=(n("72c9"),n("2877")),j=Object(O["a"])(y,b,f,!1,null,"d4ede9ce",null),N=j.exports,R=function(e){function t(){return Object(r["a"])(this,t),Object(u["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(s["a"])(t,[{key:"mounted",value:function(){w["a"].dispatch.slides.initializeOnSlide(this.getSlideNumberFromRoute(this.$route))}},{key:"watchRoute",value:function(e,t){var n=this.getSlideNumberFromRoute(e);w["a"].dispatch.slides.initializeOnSlide(n)}},{key:"getSlideNumberFromRoute",value:function(e){var t=e.params["slide"],n=e.params["subSlide"];if(!t)return{slide:t,subSlide:0};if(!n)return{slide:t,subSlide:0};var a=parseInt(n);return isFinite(a)?a<0?{slide:t,subSlide:0}:{slide:t,subSlide:a}:{slide:t,subSlide:0}}},{key:"currentSlideNumber",get:function(){return w["a"].getters.slides.currentSlide}}]),t}(d["c"]);l["a"]([Object(d["d"])("$route",{immediate:!0,deep:!0})],R.prototype,"watchRoute",null),R=l["a"]([Object(d["a"])({components:{PresentationContainer:N}})],R);var C=R,x=C,F=Object(O["a"])(x,a,i,!1,null,"40da18ea",null);t["default"]=F.exports},"72c9":function(e,t,n){"use strict";var a=n("8393"),i=n.n(a);i.a},8393:function(e,t,n){},bee2:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=slides.8323b52b.js.map