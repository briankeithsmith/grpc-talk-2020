(function(e){function t(t){for(var s,n,d=t[0],l=t[1],o=t[2],c=0,u=[];c<d.length;c++)n=d[c],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);b&&b(t);while(u.length)u.shift()();return a.push.apply(a,o||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],s=!0,n=1;n<r.length;n++){var d=r[n];0!==i[d]&&(s=!1)}s&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var s={},n={app:0},i={app:0},a=[];function d(e){return l.p+"js/"+({demo:"demo","slide-not-found":"slide-not-found",slides:"slides","slides0~slides9":"slides0~slides9",slides0:"slides0",slides9:"slides9",slides1:"slides1",slides2:"slides2",slides3:"slides3",slides4:"slides4",slides5:"slides5",slides6:"slides6",slides8:"slides8"}[e]||e)+"."+{demo:"2bc906db","slide-not-found":"21f08f64",slides:"55c97d65","slides0~slides9":"80a59723",slides0:"b5f7efff",slides9:"b9f63983",slides1:"09d5fdb3",slides2:"c7d497a7",slides3:"bf718b45",slides4:"1b0a378a",slides5:"39dc9fcb",slides6:"1b9a4df8",slides8:"0a34572d"}[e]+".js"}function l(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={slides:1,slides0:1,slides9:1,slides3:1,slides8:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var s="css/"+({demo:"demo","slide-not-found":"slide-not-found",slides:"slides","slides0~slides9":"slides0~slides9",slides0:"slides0",slides9:"slides9",slides1:"slides1",slides2:"slides2",slides3:"slides3",slides4:"slides4",slides5:"slides5",slides6:"slides6",slides8:"slides8"}[e]||e)+"."+{demo:"31d6cfe0","slide-not-found":"31d6cfe0",slides:"093e93ef","slides0~slides9":"31d6cfe0",slides0:"250423d8",slides9:"61af84fa",slides1:"31d6cfe0",slides2:"31d6cfe0",slides3:"cc361214",slides4:"31d6cfe0",slides5:"31d6cfe0",slides6:"31d6cfe0",slides8:"cc361214"}[e]+".css",i=l.p+s,a=document.getElementsByTagName("link"),d=0;d<a.length;d++){var o=a[d],c=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===s||c===i))return t()}var u=document.getElementsByTagName("style");for(d=0;d<u.length;d++){o=u[d],c=o.getAttribute("data-href");if(c===s||c===i)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var s=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=s,delete n[e],b.parentNode.removeChild(b),r(a)},b.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){n[e]=0})));var s=i[e];if(0!==s)if(s)t.push(s[2]);else{var a=new Promise((function(t,r){s=i[e]=[t,r]}));t.push(s[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=d(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(b);var r=i[e];if(0!==r){if(r){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",u.name="ChunkLoadError",u.type=s,u.request=n,r[1](u)}i[e]=void 0}};var b=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=s,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(r,s,function(t){return e[t]}.bind(null,s));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/grpc-talk-2020/",l.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var b=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0613":function(e,t,r){"use strict";var s=r("2b0e"),n=r("2f62"),i=(r("b680"),r("1da1")),a=r("1898"),d=r("270f"),l=Object(a["b"])({namespaced:!0,state:()=>({currentSlide:d["b"],currentSubSlide:0,currentSlideOrder:0,maxSlides:d["a"].length-1}),getters:{currentSlide(e){return e.currentSlide},currentSub(e){return e.currentSubSlide},canNavigateForward(e){return e.currentSlideOrder<e.maxSlides},canNavigateBackwards(e){return e.currentSlideOrder>0},canNavigateSubForward(e){return e.currentSlideOrder<e.maxSlides||e.currentSubSlide<e.currentSlide.maxSubSlides},canNavigateSubBackwards(e){return e.currentSlideOrder>0||e.currentSubSlide>0},currentSlideRoute(e){return"/slides/".concat(e.currentSlide.name,"/").concat(e.currentSubSlide.toFixed(0))},nextSlideRoute(e){return e.currentSlideOrder>=e.maxSlides?"/slides/".concat(d["a"][d["a"].length-1].name,"/").concat(d["a"][d["a"].length-1].maxSubSlides):"/slides/".concat(d["a"][e.currentSlideOrder+1].name,"/0")},nextSubSlideRoute(e){return e.currentSlideOrder>=e.maxSlides?"/slides/".concat(d["a"][d["a"].length-1].name,"/").concat(d["a"][d["a"].length-1].maxSubSlides):e.currentSubSlide>=e.currentSlide.maxSubSlides?"/slides/".concat(d["a"][e.currentSlideOrder+1].name,"/0"):"/slides/".concat(d["a"][e.currentSlideOrder+1].name,"/").concat(e.currentSubSlide+1)},previousSlideRoute(e){return e.currentSlideOrder<=1?"/slides/".concat(d["a"][0].name,"/0"):"/slides/".concat(d["a"][e.currentSlideOrder-1].name,"/0")},previousSubSlideRoute(e){return e.currentSubSlide<=0?e.currentSlideOrder<=0?"/slides/".concat(d["a"][0].name,"/0"):"/slides/".concat(d["a"][e.currentSlideOrder-1].name,"/").concat(d["a"][e.currentSlideOrder-1].maxSubSlides):"/slides/".concat(d["a"][e.currentSlideOrder].name,"/").concat(e.currentSubSlide-1)},slideOrder(e){return e=>d["a"].findIndex(t=>t.name===e)},slideConfig(e){return e=>d["a"].find(t=>t.name===e)}},mutations:{SET_CurrentSlide(e,t){e.currentSlide=t},SET_CurrentSlideOrder(e,t){e.currentSlideOrder=t},SET_CurrentSubSlide(e,t){e.currentSubSlide=t}},actions:{navigateSubSlide(e,t){return Object(i["a"])((function*(){if(void 0!==t.forward&&void 0!==t.value)return!1;var r=c(e),s=r.state.currentSubSlide;if(void 0!==t.forward&&!t.forward&&r.state.currentSubSlide>=0&&!r.getters.canNavigateBackwards)return!1;var n=0;if(void 0!==t.forward)n=s+(t.forward?1:-1);else{if(void 0===t.value)return!1;n=t.value}return n>r.state.currentSlide.maxSubSlides?r.dispatch.navigateOne({forward:!0}):n<0?r.dispatch.navigateOne({forward:!1,subSlideEnd:!0}):r.state.currentSubSlide!==n&&(r.commit.SET_CurrentSubSlide(n),r.getters.currentSlideRoute)}))()},navigateOne(e,t){var r=c(e),s=r.state.currentSlideOrder;if(t.forward&&!r.getters.canNavigateForward)return!1;if(!t.forward&&!r.getters.canNavigateBackwards)return!1;var n,i=s+(t.forward?1:-1);n=i<0?d["a"][0]:i>=d["a"].length?d["a"][d["a"].length-1]:d["a"][i],r.commit.SET_CurrentSlide(n);var a=r.getters.slideOrder(n.name);return r.commit.SET_CurrentSlideOrder(a),r.commit.SET_CurrentSubSlide(t.subSlideEnd?n.maxSubSlides:0),r.getters.currentSlideRoute},initializeOnSlide(e,t){var r=c(e),s=r.getters.slideConfig(t.slide);s||(s=d["a"][0]),r.state.currentSlide.name!==t.slide&&r.commit.SET_CurrentSlide(s);var n=r.getters.slideOrder(t.slide);r.commit.SET_CurrentSlideOrder(n),r.state.currentSubSlide!==t.subSlide&&r.commit.SET_CurrentSubSlide(t.subSlide)}}}),o=l,c=e=>f(e,l);r.d(t,"b",(function(){return f})),s["a"].use(n["a"]);var{store:u,rootActionContext:b,moduleActionContext:f}=Object(a["a"])({modules:{slides:o},actions:{}});t["a"]=u},"270f":function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return b}));var s={maxSubSlides:0,name:"Title"},n={maxSubSlides:4,name:"GRPC"},i={maxSubSlides:21,name:"Features"},a={maxSubSlides:22,name:"UseCase-MicroService"},d={maxSubSlides:3,name:"UseCase-Versioning"},l={maxSubSlides:4,name:"TechnicalDetails-Workflow"},o={maxSubSlides:4,name:"TechnicalDetails-WireFormat"},c={maxSubSlides:4,name:"TechnicalDetails-LibraryStructure"},u={maxSubSlides:6,name:"Limitations"},b=[s,n,i,a,d,l,o,c,u]},"368d":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"hero is-primary is-fullheight"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container has-text-centered"},[r("h1",{staticClass:"title"},[e._v("GRPC & Protobuf")]),r("h4",{staticClass:"subtitle"},[e._v("Intro to next generation inter-service communication protocol")]),r("div",{staticClass:"level section"},[r("div",{staticClass:"buttons level-item"},[r("b-button",{attrs:{tag:"a",href:"https://www.linkedin.com/in/adam-vaden-4a77057b/",target:"_blank"}},[e._v("Adam Vaden")]),r("a",{staticClass:"button",attrs:{href:"https://github.com/abvaden"}},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg"}})],1)]),r("a",{staticClass:"button",attrs:{href:"https://www.linkedin.com/in/adam-vaden-4a77057b/"}},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)]),r("a",{staticClass:"button",attrs:{type:"text",href:"mailto:adam@v2tools.com"}},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:"envelope"}})],1),r("span",[e._v("adam@V2tools.com")])]),r("a",{staticClass:"button",attrs:{href:"https://v2tools.com"}},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:"globe"}})],1),r("span",[e._v("V2tools.com")])])],1)])])])])},n=[],i=r("9ab4"),a=r("60a3"),d=r("ad3d"),l=r("ecee"),o=r("d2c9"),c=r("0882"),u=r("eb55"),b=r("230d");l["c"].add(u["faGithub"]),l["c"].add(c["faGlobe"]),l["c"].add(o["faEnvelope"]),l["c"].add(b["faLinkedin"]);var f=class extends a["c"]{};i["a"]([Object(a["b"])({required:!1,type:Number,default:0})],f.prototype,"subSlide",void 0),f=i["a"]([Object(a["a"])({components:{FontAwesomeIcon:d["a"]}})],f);var m=f,S=m,v=r("2877"),p=Object(v["a"])(S,s,n,!1,null,"bc23b724",null);t["default"]=p.exports},"7bdb":function(e,t,r){var s={"./Features.vue":["260a","slides0~slides9","slides0"],"./GRPC.vue":["3e8f","slides1"],"./Limitations.vue":["be7b","slides2"],"./MicroServiceDemoSVG.vue":["4d8c","slides3"],"./TechnicalDetails-LibraryStructure.vue":["7e2f","slides4"],"./TechnicalDetails-WireFormat.vue":["7757","slides5"],"./TechnicalDetails-Workflow.vue":["c248","slides6"],"./Title.vue":["368d"],"./UseCase-MicroService.vue":["a962","slides8"],"./UseCase-Versioning.vue":["714a","slides0~slides9","slides9"]};function n(e){if(!r.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],n=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r(n)}))}n.keys=function(){return Object.keys(s)},n.id="7bdb",e.exports=n},b3a6:function(e,t){e.exports="data:image/webp;base64,UklGRqQDAABXRUJQVlA4TJcDAAAvdsAMEBXRbSjIktxc6AzlQplQLpMxZqd7tqEFaBZw5nlt6WcxhKKrGH5NYCwCa9Ivud8MBLQyKeElUgkoBAJFUz+GANwGupr8mwwlKEEJSlBaE4FA0v6SoyAEgDahhBJKKKGEMpSTvAmQ1+qL4evbtAKLdbF7FN6ideCbxbbEnurWyQ/wCt0aW6L3cz1bMVbcw8O6xbJEPtPs7Xm+gae1Re5Rs2L94fc/7ucS3jFbwX2zGuv7Zkf1FV6RFVXVOdxK7O251N7A34tsee9R7pWx7FHwtB5Psfv5aUdXvFJNtwLTKNS5wr3OhlKoaTtL4O357Rvgqfby8vLbA5KFvz2tPsPLeX66FFSqFwSVs1d4UBnj0lI6zxc22/XcAzr319H5OTyfS7ylWBC7G8ii2N0QvcQmQMzhvftQtnlBltB5vmweZf7Xo0TK11Oe7z8uQSlYIbFt70MBRomLbbtnAGF7pkBkl90+AfKCvDvv3wLPj7KPUm4PHz0tL/Z++lPKCgcQvWi/K5A7poB2KR4l8u5+P4HPrUJEFtNilKMkgXGIWEDYpQlMqR3hsv/+/uF8/v+3daiutM4C5jGSQL/gwJR6k9L39w8f5bp1oqAHOeAbC4h+QOUiXiTS2mxgAEMatt67NaAwr6UQ1o7PCCLmMBHP9MM6kAdNiC4iHUhptSv76jIgjzIF+jEOqIjIALwVBwidcwYwjjNXYMoRPQF8kxDWiANkFxGxETBrclzMqQBqJTkupgZAynaCSps9IFx2bUJN5exSUplyUWE2koBLoelhKz4xXfZrYnZprQekFHvVzMxUwE1KNzMvDzfZb2dA9DLRGhcR6QFTqlyOnKBtJEypzENkAN5EQlgTE7JmHGMKai044E3oAX6MOJAtdCCbmAeMg2RC9AZEIayFBK3Jo3rAbMGB0YIDvUKPkgS8AVGI3oAFzDLnMFMIa8ABtbo+rUISGCU9jhMHsgFJQK3GlPAKU2DseXAFmUBvQCagXtYVGBXSA5huIuYJzCt0YLZgE2D2PRsBpFR3BQjVABjjCpLAaEAk2WoOdx8zAFIOtAx21eUqFhC9BXGlUl2OtTFVVdNNKjSiTDwixgWNuIqIzyjQYXJFM7lYJGZmZWJmthEzs+uImI+cc6Z3aTNh7N1UBb9FPYh+E+aoSFC5gTYhiwbgNyEA9Z2ewJSb2BVAc4yRM4Bpt0Esg+KU29lT41Jkl9vafdtNXisDAA=="},cd49:function(e,t,r){"use strict";r.r(t);var s=r("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("b-navbar",{staticClass:"is-primary is-fixed-top"},[s("template",{slot:"brand"},[s("b-navbar-item",{attrs:{tag:"router-link",to:{name:"home"}}},[s("img",{attrs:{src:r("b3a6"),alt:"GRPC"}})])],1),s("template",{slot:"start"},[s("b-navbar-item",{attrs:{tag:"router-link",to:{name:"slides",params:{slide:"Title",subSlide:0}}}},[e._v("Slides")]),s("b-navbar-item",{attrs:{tag:"router-link",to:{name:"demo"}}},[e._v("Demo")]),s("b-navbar-dropdown",{attrs:{label:"Links"}},[s("b-navbar-item",{attrs:{href:"https://grpc.io/docs/quickstart/"}},[e._v("Quick Start")]),s("b-navbar-item",{attrs:{href:"https://grpc.io/docs"}},[e._v("Docs")]),s("b-navbar-item",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3"}},[e._v("ProtoBuf Guide")])],1)],1),s("template",{slot:"end"},[s("b-navbar-item",{attrs:{tag:"div"}},[s("div",{staticClass:"buttons"},[s("a",{staticClass:"button is-light"},[e._v("Join Presentation")])])])],1)],2),s("router-view")],1)},i=[],a=r("9ab4"),d=r("60a3"),l=class extends d["c"]{};l=a["a"]([Object(d["a"])({components:{}})],l);var o=l,c=o,u=r("2877"),b=Object(u["a"])(c,n,i,!1,null,null,null),f=b.exports,m=(r("e260"),r("ddb0"),r("8c4f")),S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("title-slide")},v=[],p=r("368d"),h={name:"home",components:{TitleSlide:p["default"]}},g=h,w=Object(u["a"])(g,S,v,!1,null,"20fdb57e",null),C=w.exports,O=(r("e6cf"),r("270f")),x=[{path:"/slides",component:()=>r.e("slides").then(r.bind(null,"6b1b")),children:[{path:"",redirect:"/slides/Title/0"},{path:"/slides/:slide/:subSlide",component:()=>r.e("slides").then(r.bind(null,"368d")),name:"slides"},{path:"*",component:()=>r.e("slide-not-found").then(r.bind(null,"f11b")),name:"slide-not-found"}]}],A=function(e){s["a"].component("slide-grpc-".concat(e.name),()=>r("7bdb")("./".concat(e.name,".vue")))};for(var E of O["a"])A(E);var y=[{path:"/demo",component:()=>r.e("demo").then(r.bind(null,"680c")),name:"demo"}];s["a"].use(m["a"]);var k=[{path:"/",component:C,name:"home"},{path:"*",redirect:"/"},...x,...y],F=new m["a"]({mode:"hash",base:"/grpc-talk-2020/",routes:k}),T=F,B=r("0613"),N=r("9483");Object(N["a"])("".concat("/grpc-talk-2020/","service-worker.js"),{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var j=r("184c"),_=r("77b4"),P=r("b897");r("d698");s["a"].use(j["a"]),s["a"].use(_["a"]),s["a"].use(P["a"]),s["a"].config.productionTip=!1,new s["a"]({store:B["a"].original,router:T,render:e=>e(f)}).$mount("#app")},d698:function(e,t,r){}});
//# sourceMappingURL=app.a01fee69.js.map