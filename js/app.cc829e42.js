(function(e){function t(t){for(var i,n,o=t[0],l=t[1],d=t[2],c=0,u=[];c<o.length;c++)n=o[c],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);b&&b(t);while(u.length)u.shift()();return a.push.apply(a,d||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],i=!0,n=1;n<r.length;n++){var o=r[n];0!==s[o]&&(i=!1)}i&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var i={},n={app:0},s={app:0},a=[];function o(e){return l.p+"js/"+({api:"api",demo:"demo","slide-not-found":"slide-not-found",slides:"slides","slides0~slides9":"slides0~slides9",slides0:"slides0",slides9:"slides9",slides1:"slides1",slides2:"slides2",slides3:"slides3",slides4:"slides4",slides5:"slides5",slides6:"slides6",slides8:"slides8"}[e]||e)+"."+{api:"f6c212e2",demo:"de35ac24","slide-not-found":"d1fa358d",slides:"914e514e","slides0~slides9":"80a59723",slides0:"57a752ce",slides9:"561b14bf",slides1:"ceba1cf8",slides2:"9394ce6c",slides3:"619d18b4",slides4:"608d3354",slides5:"4dc3b545",slides6:"e7bfdc8e",slides8:"5627e906"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={slides:1,slides0:1,slides9:1,slides3:1,slides8:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var i="css/"+({api:"api",demo:"demo","slide-not-found":"slide-not-found",slides:"slides","slides0~slides9":"slides0~slides9",slides0:"slides0",slides9:"slides9",slides1:"slides1",slides2:"slides2",slides3:"slides3",slides4:"slides4",slides5:"slides5",slides6:"slides6",slides8:"slides8"}[e]||e)+"."+{api:"31d6cfe0",demo:"31d6cfe0","slide-not-found":"31d6cfe0",slides:"093e93ef","slides0~slides9":"31d6cfe0",slides0:"250423d8",slides9:"61af84fa",slides1:"31d6cfe0",slides2:"31d6cfe0",slides3:"cc361214",slides4:"31d6cfe0",slides5:"31d6cfe0",slides6:"31d6cfe0",slides8:"cc361214"}[e]+".css",s=l.p+i,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var d=a[o],c=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(c===i||c===s))return t()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){d=u[o],c=d.getAttribute("data-href");if(c===i||c===s)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var i=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete n[e],b.parentNode.removeChild(b),r(a)},b.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(b)})).then((function(){n[e]=0})));var i=s[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,r){i=s[e]=[t,r]}));t.push(i[2]=a);var d,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=o(e);var u=new Error;d=function(t){c.onerror=c.onload=null,clearTimeout(b);var r=s[e];if(0!==r){if(r){var i=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",u.name="ChunkLoadError",u.type=i,u.request=n,r[1](u)}s[e]=void 0}};var b=setTimeout((function(){d({type:"timeout",target:c})}),12e4);c.onerror=c.onload=d,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(r,i,function(t){return e[t]}.bind(null,i));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/grpc-talk-2020/",l.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var b=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0613":function(e,t,r){"use strict";var i=r("2b0e"),n=r("2f62"),s=(r("b680"),r("e6cf"),r("1da1")),a=r("1898"),o=r("270f"),l=r("9d30"),d=Object(a["b"])({namespaced:!0,state:()=>({currentSlide:o["b"],currentSubSlide:0,currentSlideOrder:0,maxSlides:o["a"].length-1,presentationActive:{loading:!1,error:!1,value:!1},isPresenting:!1,isFollowing:!1}),getters:{currentSlide(e){return e.currentSlide},currentSub(e){return e.currentSubSlide},canNavigateForward(e){return e.currentSlideOrder<e.maxSlides},canNavigateBackwards(e){return e.currentSlideOrder>0},canNavigateSubForward(e){return e.currentSlideOrder<e.maxSlides||e.currentSubSlide<e.currentSlide.maxSubSlides},canNavigateSubBackwards(e){return e.currentSlideOrder>0||e.currentSubSlide>0},currentSlideRoute(e){return"/slides/".concat(e.currentSlide.name,"/").concat(e.currentSubSlide.toFixed(0))},nextSlideRoute(e){return e.currentSlideOrder>=e.maxSlides?"/slides/".concat(o["a"][o["a"].length-1].name,"/").concat(o["a"][o["a"].length-1].maxSubSlides):"/slides/".concat(o["a"][e.currentSlideOrder+1].name,"/0")},nextSubSlideRoute(e){return e.currentSlideOrder>=e.maxSlides?"/slides/".concat(o["a"][o["a"].length-1].name,"/").concat(o["a"][o["a"].length-1].maxSubSlides):e.currentSubSlide>=e.currentSlide.maxSubSlides?"/slides/".concat(o["a"][e.currentSlideOrder+1].name,"/0"):"/slides/".concat(o["a"][e.currentSlideOrder+1].name,"/").concat(e.currentSubSlide+1)},previousSlideRoute(e){return e.currentSlideOrder<=1?"/slides/".concat(o["a"][0].name,"/0"):"/slides/".concat(o["a"][e.currentSlideOrder-1].name,"/0")},previousSubSlideRoute(e){return e.currentSubSlide<=0?e.currentSlideOrder<=0?"/slides/".concat(o["a"][0].name,"/0"):"/slides/".concat(o["a"][e.currentSlideOrder-1].name,"/").concat(o["a"][e.currentSlideOrder-1].maxSubSlides):"/slides/".concat(o["a"][e.currentSlideOrder].name,"/").concat(e.currentSubSlide-1)},slideOrder(e){return e=>o["a"].findIndex(t=>t.name===e)},slideConfig(e){return e=>o["a"].find(t=>t.name===e)},presentationActive(e){return e.presentationActive},isPresenting(e){return e.isPresenting},isFollowing(e){return e.isFollowing}},mutations:{SET_CurrentSlide(e,t){e.currentSlide=t},SET_CurrentSlideOrder(e,t){e.currentSlideOrder=t},SET_CurrentSubSlide(e,t){e.currentSubSlide=t},SET_IsPresenting(e,t){e.isPresenting=t},SET_PresentationActive(e,t){void 0!==t.value?(e.presentationActive.loading=!1,e.presentationActive.error=!1,e.presentationActive.value=t.value):void 0!==t.loading?(e.presentationActive.loading=t.loading,e.presentationActive.loading&&(e.presentationActive.error=!1)):void 0!==t.error&&(e.presentationActive.error=t.error,e.presentationActive.error&&(e.presentationActive.loading=!1))}},actions:{navigateSubSlide(e,t){return Object(s["a"])((function*(){if(void 0!==t.forward&&void 0!==t.value)return!1;var r=u(e),i=r.state.currentSubSlide;if(void 0!==t.forward&&!t.forward&&r.state.currentSubSlide>=0&&!r.getters.canNavigateBackwards)return!1;var n=0;if(void 0!==t.forward)n=i+(t.forward?1:-1);else{if(void 0===t.value)return!1;n=t.value}return n>r.state.currentSlide.maxSubSlides?r.dispatch.navigateOne({forward:!0}):n<0?r.dispatch.navigateOne({forward:!1,subSlideEnd:!0}):r.state.currentSubSlide!==n&&(r.commit.SET_CurrentSubSlide(n),r.getters.currentSlideRoute)}))()},navigateOne(e,t){var r=u(e),i=r.state.currentSlideOrder;if(t.forward&&!r.getters.canNavigateForward)return!1;if(!t.forward&&!r.getters.canNavigateBackwards)return!1;var n,s=i+(t.forward?1:-1);n=s<0?o["a"][0]:s>=o["a"].length?o["a"][o["a"].length-1]:o["a"][s],r.commit.SET_CurrentSlide(n);var a=r.getters.slideOrder(n.name);return r.commit.SET_CurrentSlideOrder(a),r.commit.SET_CurrentSubSlide(t.subSlideEnd?n.maxSubSlides:0),r.getters.currentSlideRoute},initializeOnSlide(e,t){var r=u(e),i=r.getters.slideConfig(t.slide);i||(i=o["a"][0]),r.state.currentSlide.name!==t.slide&&r.commit.SET_CurrentSlide(i);var n=r.getters.slideOrder(t.slide);r.commit.SET_CurrentSlideOrder(n),r.state.currentSubSlide!==t.subSlide&&r.commit.SET_CurrentSubSlide(t.subSlide)},getIsLoading(e){return Object(s["a"])((function*(){var t=u(e);if(!t.state.presentationActive.loading)try{t.state.presentationActive.loading=!0;var i=yield r.e("api").then(r.t.bind(null,"4e94",7)),n=new i.PresentationPromiseClient("/presentations/"),s=new l["Empty"],a=yield n.activePresentation(s,{deadline:"3000"});t.state.presentationActive.error=a.getError(),t.state.presentationActive.value=a.getIsactive()}catch(o){t.state.presentationActive.error=!0}finally{t.state.presentationActive.loading=!1}}))()}}}),c=d,u=e=>v(e,d);r.d(t,"b",(function(){return v})),i["a"].use(n["a"]);var{store:b,rootActionContext:m,moduleActionContext:v}=Object(a["a"])({modules:{slides:c},actions:{}});t["a"]=b},"270f":function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return b}));var i={maxSubSlides:0,name:"Title"},n={maxSubSlides:4,name:"GRPC"},s={maxSubSlides:21,name:"Features"},a={maxSubSlides:22,name:"UseCase-MicroService"},o={maxSubSlides:3,name:"UseCase-Versioning"},l={maxSubSlides:4,name:"TechnicalDetails-Workflow"},d={maxSubSlides:4,name:"TechnicalDetails-WireFormat"},c={maxSubSlides:4,name:"TechnicalDetails-LibraryStructure"},u={maxSubSlides:6,name:"Limitations"},b=[i,n,s,a,o,l,d,c,u]},"368d":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"hero is-primary is-fullheight"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container has-text-centered"},[r("h1",{staticClass:"title"},[e._v("GRPC & Protobuf")]),r("h4",{staticClass:"subtitle"},[e._v("Intro to next generation inter-service communication protocol")]),r("div",{staticClass:"level section"},[r("div",{staticClass:"buttons level-item"},[r("b-button",{attrs:{tag:"a",href:"https://www.linkedin.com/in/adam-vaden-4a77057b/",target:"_blank"}},[e._v("Adam Vaden")]),r("a",{staticClass:"button",attrs:{href:"https://github.com/abvaden"}},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg"}})],1)]),r("a",{staticClass:"button",attrs:{href:"https://www.linkedin.com/in/adam-vaden-4a77057b/"}},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)]),r("a",{staticClass:"button",attrs:{type:"text",href:"mailto:adam@v2tools.com"}},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:"envelope"}})],1),r("span",[e._v("adam@V2tools.com")])]),r("a",{staticClass:"button",attrs:{href:"https://v2tools.com"}},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:"globe"}})],1),r("span",[e._v("V2tools.com")])])],1)]),e.presentationActive.value?r("div",{},[r("a",{staticClass:"button is-light"},[e._v("Join Presentation")])]):e._e()])])])},n=[],s=r("9ab4"),a=r("60a3"),o=r("ad3d"),l=r("ecee"),d=r("d2c9"),c=r("0882"),u=r("eb55"),b=r("230d"),m=r("0613");l["c"].add(u["faGithub"]),l["c"].add(c["faGlobe"]),l["c"].add(d["faEnvelope"]),l["c"].add(b["faLinkedin"]);var v=class extends a["c"]{get presentationActive(){return m["a"].getters.slides.presentationActive}mounted(){m["a"].dispatch.slides.getIsLoading()}};s["a"]([Object(a["b"])({required:!1,type:Number,default:0})],v.prototype,"subSlide",void 0),v=s["a"]([Object(a["a"])({components:{FontAwesomeIcon:o["a"]}})],v);var f=v,p=f,S=r("2877"),g=Object(S["a"])(p,i,n,!1,null,"c2b8ee62",null);t["default"]=g.exports},"7bdb":function(e,t,r){var i={"./Features.vue":["260a","slides0~slides9","slides0"],"./GRPC.vue":["3e8f","slides1"],"./Limitations.vue":["be7b","slides2"],"./MicroServiceDemoSVG.vue":["4d8c","slides3"],"./TechnicalDetails-LibraryStructure.vue":["7e2f","slides4"],"./TechnicalDetails-WireFormat.vue":["7757","slides5"],"./TechnicalDetails-Workflow.vue":["c248","slides6"],"./Title.vue":["368d"],"./UseCase-MicroService.vue":["a962","slides8"],"./UseCase-Versioning.vue":["714a","slides0~slides9","slides9"]};function n(e){if(!r.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],n=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r(n)}))}n.keys=function(){return Object.keys(i)},n.id="7bdb",e.exports=n},b3a6:function(e,t){e.exports="data:image/webp;base64,UklGRqQDAABXRUJQVlA4TJcDAAAvdsAMEBXRbSjIktxc6AzlQplQLpMxZqd7tqEFaBZw5nlt6WcxhKKrGH5NYCwCa9Ivud8MBLQyKeElUgkoBAJFUz+GANwGupr8mwwlKEEJSlBaE4FA0v6SoyAEgDahhBJKKKGEMpSTvAmQ1+qL4evbtAKLdbF7FN6ideCbxbbEnurWyQ/wCt0aW6L3cz1bMVbcw8O6xbJEPtPs7Xm+gae1Re5Rs2L94fc/7ucS3jFbwX2zGuv7Zkf1FV6RFVXVOdxK7O251N7A34tsee9R7pWx7FHwtB5Psfv5aUdXvFJNtwLTKNS5wr3OhlKoaTtL4O357Rvgqfby8vLbA5KFvz2tPsPLeX66FFSqFwSVs1d4UBnj0lI6zxc22/XcAzr319H5OTyfS7ylWBC7G8ii2N0QvcQmQMzhvftQtnlBltB5vmweZf7Xo0TK11Oe7z8uQSlYIbFt70MBRomLbbtnAGF7pkBkl90+AfKCvDvv3wLPj7KPUm4PHz0tL/Z++lPKCgcQvWi/K5A7poB2KR4l8u5+P4HPrUJEFtNilKMkgXGIWEDYpQlMqR3hsv/+/uF8/v+3daiutM4C5jGSQL/gwJR6k9L39w8f5bp1oqAHOeAbC4h+QOUiXiTS2mxgAEMatt67NaAwr6UQ1o7PCCLmMBHP9MM6kAdNiC4iHUhptSv76jIgjzIF+jEOqIjIALwVBwidcwYwjjNXYMoRPQF8kxDWiANkFxGxETBrclzMqQBqJTkupgZAynaCSps9IFx2bUJN5exSUplyUWE2koBLoelhKz4xXfZrYnZprQekFHvVzMxUwE1KNzMvDzfZb2dA9DLRGhcR6QFTqlyOnKBtJEypzENkAN5EQlgTE7JmHGMKai044E3oAX6MOJAtdCCbmAeMg2RC9AZEIayFBK3Jo3rAbMGB0YIDvUKPkgS8AVGI3oAFzDLnMFMIa8ABtbo+rUISGCU9jhMHsgFJQK3GlPAKU2DseXAFmUBvQCagXtYVGBXSA5huIuYJzCt0YLZgE2D2PRsBpFR3BQjVABjjCpLAaEAk2WoOdx8zAFIOtAx21eUqFhC9BXGlUl2OtTFVVdNNKjSiTDwixgWNuIqIzyjQYXJFM7lYJGZmZWJmthEzs+uImI+cc6Z3aTNh7N1UBb9FPYh+E+aoSFC5gTYhiwbgNyEA9Z2ewJSb2BVAc4yRM4Bpt0Esg+KU29lT41Jkl9vafdtNXisDAA=="},cd49:function(e,t,r){"use strict";r.r(t);var i=r("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("b-navbar",{staticClass:"is-primary is-fixed-top"},[i("template",{slot:"brand"},[i("b-navbar-item",{attrs:{tag:"router-link",to:{name:"home"}}},[i("img",{attrs:{src:r("b3a6"),alt:"GRPC"}})])],1),i("template",{slot:"start"},[i("b-navbar-item",{attrs:{tag:"router-link",to:{name:"slides",params:{slide:"Title",subSlide:0}}}},[e._v("Slides")]),i("b-navbar-item",{attrs:{tag:"router-link",to:{name:"demo"}}},[e._v("Demo")]),i("b-navbar-dropdown",{attrs:{label:"Links"}},[i("b-navbar-item",{attrs:{href:"https://grpc.io/docs/quickstart/"}},[e._v("Quick Start")]),i("b-navbar-item",{attrs:{href:"https://grpc.io/docs"}},[e._v("Docs")]),i("b-navbar-item",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3"}},[e._v("ProtoBuf Guide")])],1)],1)],2),i("router-view")],1)},s=[],a=r("9ab4"),o=r("60a3"),l=class extends o["c"]{};l=a["a"]([Object(o["a"])({components:{}})],l);var d=l,c=d,u=r("2877"),b=Object(u["a"])(c,n,s,!1,null,null,null),m=b.exports,v=(r("e260"),r("ddb0"),r("8c4f")),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("title-slide")},p=[],S=r("368d"),g={name:"home",components:{TitleSlide:S["default"]}},h=g,w=Object(u["a"])(h,f,p,!1,null,"20fdb57e",null),A=w.exports,C=(r("e6cf"),r("270f")),O=[{path:"/slides",component:()=>r.e("slides").then(r.bind(null,"6b1b")),children:[{path:"",redirect:"/slides/Title/0"},{path:"/slides/:slide/:subSlide",component:()=>r.e("slides").then(r.bind(null,"368d")),name:"slides"},{path:"*",component:()=>r.e("slide-not-found").then(r.bind(null,"f11b")),name:"slide-not-found"}]}],x=function(e){i["a"].component("slide-grpc-".concat(e.name),()=>r("7bdb")("./".concat(e.name,".vue")))};for(var E of C["a"])x(E);var y=[{path:"/demo",component:()=>r.e("demo").then(r.bind(null,"680c")),name:"demo"}];i["a"].use(v["a"]);var k=[{path:"/",component:A,name:"home"},{path:"*",redirect:"/"},...O,...y],F=new v["a"]({mode:"hash",base:"/grpc-talk-2020/",routes:k}),T=F,P=r("0613"),B=r("9483");Object(B["a"])("".concat("/grpc-talk-2020/","service-worker.js"),{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var _=r("184c"),j=r("77b4"),N=r("b897");r("d698");i["a"].use(_["a"]),i["a"].use(j["a"]),i["a"].use(N["a"]),i["a"].config.productionTip=!1,new i["a"]({store:P["a"].original,router:T,render:e=>e(m)}).$mount("#app")},d698:function(e,t,r){}});
//# sourceMappingURL=app.cc829e42.js.map