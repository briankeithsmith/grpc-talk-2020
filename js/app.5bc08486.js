(function(e){function t(t){for(var r,i,a=t[0],c=t[1],l=t[2],u=0,d=[];u<a.length;u++)i=a[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},o={app:0},s=[];function a(e){return c.p+"js/"+({demo:"demo",slides:"slides","slides-section-1":"slides-section-1","slides-section-2":"slides-section-2","slides-section-3":"slides-section-3"}[e]||e)+"."+{demo:"5184e326",slides:"92822c84","slides-section-1":"e04ab9a3","slides-section-2":"701ca9fe","slides-section-3":"6d72f135"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={slides:1,"slides-section-2":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({demo:"demo",slides:"slides","slides-section-1":"slides-section-1","slides-section-2":"slides-section-2","slides-section-3":"slides-section-3"}[e]||e)+"."+{demo:"31d6cfe0",slides:"875a7b45","slides-section-1":"31d6cfe0","slides-section-2":"9fbeb06c","slides-section-3":"31d6cfe0"}[e]+".css",o=c.p+r,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var l=s[a],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete i[e],f.parentNode.removeChild(f),n(s)},f.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){i[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",d.name="ChunkLoadError",d.type=r,d.request=i,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/grpc-talk-2020/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";var r=n("2b0e"),i=n("2f62"),o=(n("99af"),n("b680"),n("96cf"),n("1da1")),s=n("1898"),a=[0,4,9,0,0,0,0,0,0,0],c=Object(s["b"])({namespaced:!0,state:function(){return{currentSlide:1,currentSubSlide:0,maxSubSlides:0,maxSlides:10}},getters:{currentSlide:function(e){return e.currentSlide},currentSub:function(e){return e.currentSubSlide},canNavigateForward:function(e){return e.currentSlide<e.maxSlides},canNavigateBackwards:function(e){return e.currentSlide>1},currentSlideRoute:function(e){return"/slides/".concat(e.currentSlide.toFixed(0),"/").concat(e.currentSubSlide.toFixed(0))},nextSlideRoute:function(e){return e.currentSlide>=e.maxSlides?"/slides/".concat(e.maxSlides.toFixed(0),"}/0"):"/slides/".concat((e.currentSlide+1).toFixed(0),"/0")},previousSlideRoute:function(e){return e.currentSlide<=1?"/slides/1/0":"/slides/".concat((e.currentSlide-1).toFixed(0),"/0")}},mutations:{SET_CurrentSlide:function(e,t){e.currentSlide=t,e.maxSubSlides=a[t-1]},SET_CurrentSubSlide:function(e,t){e.currentSubSlide=t}},actions:{navigateSubSlide:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=u(t),i=r.state.currentSubSlide,n.forward||!(r.state.currentSubSlide>=0)||r.getters.canNavigateBackwards){e.next=4;break}return e.abrupt("return",!1);case 4:if(o=i+(n.forward?1:-1),!(o>r.state.maxSubSlides)){e.next=7;break}return e.abrupt("return",r.dispatch.navigateOne({forward:!0}));case 7:if(!(o<0)){e.next=9;break}return e.abrupt("return",r.dispatch.navigateOne({forward:!1,subSlideEnd:!0}));case 9:return r.commit.SET_CurrentSubSlide(o),e.abrupt("return",r.getters.currentSlideRoute);case 11:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),navigateOne:function(e,t){var n=u(e),r=n.state.currentSlide;if(t.forward&&!n.getters.canNavigateForward)return!1;if(!t.forward&&!n.getters.canNavigateBackwards)return!1;var i=r+(t.forward?1:-1);return n.commit.SET_CurrentSlide(i),n.commit.SET_CurrentSubSlide(t.subSlideEnd?n.state.maxSubSlides:0),n.getters.currentSlideRoute},navigateToSlide:function(e,t){var n=u(e);return!(t.slideNumber<0||t.slideNumber>n.state.maxSlides)&&(n.commit.SET_CurrentSlide(t.slideNumber),n.getters.currentSlideRoute)},initializeOnSlide:function(e,t){var n=u(e);n.state.currentSlide!==t.slide&&n.commit.SET_CurrentSlide(t.slide),n.state.currentSubSlide!==t.subSlide&&n.commit.SET_CurrentSubSlide(t.subSlide)}}}),l=c,u=function(e){return b(e,c)};n.d(t,"b",(function(){return b})),r["a"].use(i["a"]);var d=Object(s["a"])({modules:{slides:l},actions:{}}),f=d.store,b=(d.rootActionContext,d.moduleActionContext);t["a"]=f},"0d68":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"hero is-primary is-fullheight-with-navbar"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-centered"},[n("h1",{staticClass:"title"},[e._v("GRPC & Protobuf")]),n("h4",{staticClass:"subtitle"},[e._v("Intro to next generation inter-service communication protocol")]),n("div",{staticClass:"level"},[n("div",{staticClass:"buttons level-item"},[n("b-button",{attrs:{tag:"a",href:"https://v2tools.com",target:"_blank"}},[e._v("Adam Vaden")]),n("a",{staticClass:"button",attrs:{href:"https://github.com/abvaden"}},[n("span",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg"}})],1)]),n("a",{staticClass:"button",attrs:{type:"text",href:"mailto:adam@v2tools.com"}},[n("span",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:"envelope"}})],1),n("span",[e._v("adam@v2tols.com")])]),n("a",{staticClass:"button",attrs:{href:"https://v2tools.com"}},[n("span",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:"globe"}})],1),n("span",[e._v("v2tools.com")])])],1)])])])])},i=[],o=(n("a9e3"),n("d4ec")),s=n("99de"),a=n("7e84"),c=n("262e"),l=n("9ab4"),u=n("60a3"),d=n("ad3d"),f=n("ecee"),b=n("c074"),p=n("f2d1");f["c"].add(p["a"]),f["c"].add(b["d"]),f["c"].add(b["c"]);var m=function(e){function t(){return Object(o["a"])(this,t),Object(s["a"])(this,Object(a["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),t}(u["c"]);l["a"]([Object(u["b"])({required:!1,type:Number,default:0})],m.prototype,"subSlide",void 0),m=l["a"]([Object(u["a"])({components:{FontAwesomeIcon:d["a"]}})],m);var v=m,h=v,g=n("2877"),S=Object(g["a"])(h,r,i,!1,null,"427e5a2f",null);t["default"]=S.exports},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("b-navbar",{staticClass:"is-primary"},[r("template",{slot:"brand"},[r("b-navbar-item",{attrs:{tag:"router-link",to:{name:"home"}}},[r("img",{attrs:{src:n("de22"),alt:"GRPC"}})])],1),r("template",{slot:"start"},[r("b-navbar-item",{attrs:{tag:"router-link",to:{name:"slides",params:{slide:1,subSlide:0}}}},[e._v("Slides")]),r("b-navbar-item",{attrs:{tag:"router-link",to:{name:"demo"}}},[e._v("Demo")]),r("b-navbar-dropdown",{attrs:{label:"Links"}},[r("b-navbar-item",{attrs:{href:"https://grpc.io/docs/quickstart/"}},[e._v("Quick Start")]),r("b-navbar-item",{attrs:{href:"https://grpc.io/docs"}},[e._v("Docs")]),r("b-navbar-item",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3"}},[e._v("ProtoBuf Guide")])],1)],1),r("template",{slot:"end"},[r("b-navbar-item",{attrs:{tag:"div"}},[r("div",{staticClass:"buttons"},[r("a",{staticClass:"button is-light"},[e._v("Join Presentation")])])])],1)],2),r("router-view")],1)},o=[],s=n("d4ec"),a=n("99de"),c=n("7e84"),l=n("262e"),u=n("9ab4"),d=n("60a3"),f=function(e){function t(){return Object(s["a"])(this,t),Object(a["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(d["c"]);f=u["a"]([Object(d["a"])({components:{}})],f);var b=f,p=b,m=n("2877"),v=Object(m["a"])(p,i,o,!1,null,null,null),h=v.exports,g=(n("99af"),n("2909")),S=n("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("slide-1")},y=[],C=n("0d68"),O={name:"home",components:{Slide1:C["default"]}},x=O,_=Object(m["a"])(x,w,y,!1,null,"d6ce34c4",null),j=_.exports,k=(n("d3b7"),[{path:"/slides",component:function(){return n.e("slides").then(n.bind(null,"6b1b"))},children:[{path:"",redirect:"/slides/1/0"},{path:"/slides/:slide/:subSlide",component:function(){return n.e("slides").then(n.bind(null,"0d68"))},name:"slides"},{path:"*",redirect:"/slides/1/0"}]}]);r["a"].component("slide-1",(function(){return Promise.resolve().then(n.bind(null,"0d68"))})),r["a"].component("slide-2",(function(){return n.e("slides-section-1").then(n.bind(null,"af5c"))})),r["a"].component("slide-3",(function(){return n.e("slides-section-2").then(n.bind(null,"4c9d"))})),r["a"].component("slide-4",(function(){return n.e("slides-section-2").then(n.bind(null,"fd5d"))})),r["a"].component("slide-5",(function(){return n.e("slides-section-2").then(n.bind(null,"cf7f"))})),r["a"].component("slide-6",(function(){return n.e("slides-section-2").then(n.bind(null,"e812"))})),r["a"].component("slide-7",(function(){return n.e("slides-section-3").then(n.bind(null,"c2e4"))})),r["a"].component("slide-8",(function(){return n.e("slides-section-3").then(n.bind(null,"bdc6"))})),r["a"].component("slide-9",(function(){return n.e("slides-section-3").then(n.bind(null,"9bbf"))})),r["a"].component("slide-10",(function(){return n.e("slides-section-3").then(n.bind(null,"6d3c"))}));var E=[{path:"/demo",component:function(){return n.e("demo").then(n.bind(null,"680c"))},name:"demo"}];r["a"].use(S["a"]);var N=[{path:"/",component:j,name:"home"},{path:"*",redirect:"/"}].concat(Object(g["a"])(k),Object(g["a"])(E)),T=new S["a"]({mode:"hash",base:"/grpc-talk-2020/",routes:N}),P=T,A=n("0613"),F=n("9483");Object(F["a"])("".concat("/grpc-talk-2020/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var R=n("289d");n("d698");r["a"].use(R["a"]),r["a"].config.productionTip=!1,new r["a"]({router:P,store:A["a"].original,render:function(e){return e(h)}}).$mount("#app")},d698:function(e,t,n){},de22:function(e,t,n){e.exports=n.p+"img/grpc-logo.949404dc.png"}});
//# sourceMappingURL=app.5bc08486.js.map