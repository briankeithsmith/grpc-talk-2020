(function(e){function t(t){for(var s,i,l=t[0],d=t[1],o=t[2],c=0,u=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(e[s]=d[s]);b&&b(t);while(u.length)u.shift()();return n.push.apply(n,o||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(s=!1)}s&&(n.splice(t--,1),e=d(d.s=r[0]))}return e}var s={},i={app:0},a={app:0},n=[];function l(e){return d.p+"js/"+({demo:"demo",slides:"slides","slides0~slides10":"slides0~slides10",slides0:"slides0",slides10:"slides10",slides1:"slides1",slides2:"slides2",slides3:"slides3",slides4:"slides4",slides5:"slides5",slides6:"slides6",slides7:"slides7",slides9:"slides9"}[e]||e)+"."+{demo:"6fbc5417",slides:"079087f6","slides0~slides10":"f013167f",slides0:"4d3b4441",slides10:"b0628f80",slides1:"0585dd9b",slides2:"ba89723b",slides3:"e3d9547c",slides4:"6eba1199",slides5:"4208cbfb",slides6:"d197a61f",slides7:"0611fd57",slides9:"1fa1a627"}[e]+".js"}function d(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,d),r.l=!0,r.exports}d.e=function(e){var t=[],r={slides:1,slides0:1,slides10:1,slides3:1,slides9:1};i[e]?t.push(i[e]):0!==i[e]&&r[e]&&t.push(i[e]=new Promise((function(t,r){for(var s="css/"+({demo:"demo",slides:"slides","slides0~slides10":"slides0~slides10",slides0:"slides0",slides10:"slides10",slides1:"slides1",slides2:"slides2",slides3:"slides3",slides4:"slides4",slides5:"slides5",slides6:"slides6",slides7:"slides7",slides9:"slides9"}[e]||e)+"."+{demo:"31d6cfe0",slides:"401efa40","slides0~slides10":"31d6cfe0",slides0:"50f79304",slides10:"c937bba3",slides1:"31d6cfe0",slides2:"31d6cfe0",slides3:"191199bf",slides4:"31d6cfe0",slides5:"31d6cfe0",slides6:"31d6cfe0",slides7:"31d6cfe0",slides9:"191199bf"}[e]+".css",a=d.p+s,n=document.getElementsByTagName("link"),l=0;l<n.length;l++){var o=n[l],c=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===s||c===a))return t()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){o=u[l],c=o.getAttribute("data-href");if(c===s||c===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var s=t&&t.target&&t.target.src||a,n=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=s,delete i[e],b.parentNode.removeChild(b),r(n)},b.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(b)})).then((function(){i[e]=0})));var s=a[e];if(0!==s)if(s)t.push(s[2]);else{var n=new Promise((function(t,r){s=a[e]=[t,r]}));t.push(s[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.src=l(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(b);var r=a[e];if(0!==r){if(r){var s=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",u.name="ChunkLoadError",u.type=s,u.request=i,r[1](u)}a[e]=void 0}};var b=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},d.m=e,d.c=s,d.d=function(e,t,r){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(d.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)d.d(r,s,function(t){return e[t]}.bind(null,s));return r},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/grpc-talk-2020/",d.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var b=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0613":function(e,t,r){"use strict";var s=r("2b0e"),i=r("2f62"),a=(r("b680"),r("1da1")),n=r("1898"),l=r("a312"),d=Object(n["b"])({namespaced:!0,state:()=>({currentSlide:l["b"],currentSubSlide:0,currentSlideOrder:0,maxSlides:l["a"].length-1}),getters:{currentSlide(e){return e.currentSlide},currentSub(e){return e.currentSubSlide},canNavigateForward(e){return e.currentSlideOrder<e.maxSlides},canNavigateBackwards(e){return e.currentSlideOrder>0},canNavigateSubForward(e){return e.currentSlideOrder<e.maxSlides||e.currentSubSlide<e.currentSlide.maxSubSlides},canNavigateSubBackwards(e){return e.currentSlideOrder>0||e.currentSubSlide>0},currentSlideRoute(e){return"/slides/".concat(e.currentSlide.name,"/").concat(e.currentSubSlide.toFixed(0))},nextSlideRoute(e){return e.currentSlideOrder>=e.maxSlides?"/slides/".concat(l["a"][l["a"].length-1].name,"/").concat(l["a"][l["a"].length-1].maxSubSlides):"/slides/".concat(l["a"][e.currentSlideOrder+1].name,"/0")},nextSubSlideRoute(e){return e.currentSlideOrder>=e.maxSlides?"/slides/".concat(l["a"][l["a"].length-1].name,"/").concat(l["a"][l["a"].length-1].maxSubSlides):e.currentSubSlide>=e.currentSlide.maxSubSlides?"/slides/".concat(l["a"][e.currentSlideOrder+1].name,"/0"):"/slides/".concat(l["a"][e.currentSlideOrder+1].name,"/").concat(e.currentSubSlide+1)},previousSlideRoute(e){return e.currentSlideOrder<=1?"/slides/".concat(l["a"][0].name,"/0"):"/slides/".concat(l["a"][e.currentSlideOrder-1].name,"/0")},previousSubSlideRoute(e){return e.currentSubSlide<=0?e.currentSlideOrder<=0?"/slides/".concat(l["a"][0].name,"/0"):"/slides/".concat(l["a"][e.currentSlideOrder-1].name,"/").concat(l["a"][e.currentSlideOrder-1].maxSubSlides):"/slides/".concat(l["a"][e.currentSlideOrder].name,"/").concat(e.currentSubSlide-1)},slideOrder(e){return e=>l["a"].findIndex(t=>t.name===e)},slideConfig(e){return e=>l["a"].find(t=>t.name===e)}},mutations:{SET_CurrentSlide(e,t){e.currentSlide=t},SET_CurrentSlideOrder(e,t){e.currentSlideOrder=t},SET_CurrentSubSlide(e,t){e.currentSubSlide=t}},actions:{navigateSubSlide(e,t){return Object(a["a"])((function*(){if(void 0!==t.forward&&void 0!==t.value)return!1;var r=c(e),s=r.state.currentSubSlide;if(void 0!==t.forward&&!t.forward&&r.state.currentSubSlide>=0&&!r.getters.canNavigateBackwards)return!1;var i=0;if(void 0!==t.forward)i=s+(t.forward?1:-1);else{if(void 0===t.value)return!1;i=t.value}return i>r.state.currentSlide.maxSubSlides?r.dispatch.navigateOne({forward:!0}):i<0?r.dispatch.navigateOne({forward:!1,subSlideEnd:!0}):r.state.currentSubSlide!==i&&(r.commit.SET_CurrentSubSlide(i),r.getters.currentSlideRoute)}))()},navigateOne(e,t){var r=c(e),s=r.state.currentSlideOrder;if(t.forward&&!r.getters.canNavigateForward)return!1;if(!t.forward&&!r.getters.canNavigateBackwards)return!1;var i,a=s+(t.forward?1:-1);i=a<0?l["a"][0]:a>=l["a"].length?l["a"][l["a"].length-1]:l["a"][a],r.commit.SET_CurrentSlide(i);var n=r.getters.slideOrder(i.name);return r.commit.SET_CurrentSlideOrder(n),r.commit.SET_CurrentSubSlide(t.subSlideEnd?i.maxSubSlides:0),r.getters.currentSlideRoute},initializeOnSlide(e,t){var r=c(e),s=r.getters.slideConfig(t.slide);s||(s=l["a"][0]),r.state.currentSlide.name!==t.slide&&r.commit.SET_CurrentSlide(s);var i=r.getters.slideOrder(t.slide);r.commit.SET_CurrentSlideOrder(i),r.state.currentSubSlide!==t.subSlide&&r.commit.SET_CurrentSubSlide(t.subSlide)}}}),o=d,c=e=>m(e,d);r.d(t,"b",(function(){return m})),s["a"].use(i["a"]);var{store:u,rootActionContext:b,moduleActionContext:m}=Object(n["a"])({modules:{slides:o},actions:{}});t["a"]=u},"3c78":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"hero is-primary is-fullheight"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container has-text-centered"},[r("h1",{staticClass:"title"},[e._v("GRPC & Protobuf")]),r("h4",{staticClass:"subtitle"},[e._v("Intro to next generation inter-service communication protocol")]),r("div",{staticClass:"level section"},[r("div",{staticClass:"buttons level-item"},[r("b-button",{attrs:{tag:"a",href:"https://www.linkedin.com/in/adam-vaden-4a77057b/",target:"_blank"}},[e._v("Adam Vaden")]),r("a",{staticClass:"button",attrs:{href:"https://github.com/abvaden"}},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg"}})],1)]),r("a",{staticClass:"button",attrs:{href:"https://www.linkedin.com/in/adam-vaden-4a77057b/"}},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)]),r("a",{staticClass:"button",attrs:{type:"text",href:"mailto:adam@v2tools.com"}},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:"envelope"}})],1),r("span",[e._v("adam@V2tools.com")])]),r("a",{staticClass:"button",attrs:{href:"https://v2tools.com"}},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:"globe"}})],1),r("span",[e._v("V2tools.com")])])],1)])])])])},i=[],a=r("9ab4"),n=r("60a3"),l=r("ad3d"),d=r("ecee"),o=r("d2c9"),c=r("0882"),u=r("eb55"),b=r("230d");d["c"].add(u["faGithub"]),d["c"].add(c["faGlobe"]),d["c"].add(o["faEnvelope"]),d["c"].add(b["faLinkedin"]);var m=class extends n["c"]{};a["a"]([Object(n["b"])({required:!1,type:Number,default:0})],m.prototype,"subSlide",void 0),m=a["a"]([Object(n["a"])({components:{FontAwesomeIcon:l["a"]}})],m);var f=m,S=f,v=r("2877"),p=Object(v["a"])(S,s,i,!1,null,"59fe7132",null);t["default"]=p.exports},"9e87":function(e,t,r){var s={"./Features.vue":["55fb","slides0~slides10","slides0"],"./GRPC.vue":["9c10","slides1"],"./Limitations.vue":["9390","slides2"],"./MicroServiceDemoSVG.vue":["c7ad","slides3"],"./NotFound.vue":["f11b","slides4"],"./TechnicalDetails-LibraryStructure.vue":["35e8","slides5"],"./TechnicalDetails-WireFormat.vue":["0be0","slides6"],"./TechnicalDetails-Workflow.vue":["c760","slides7"],"./Title.vue":["3c78"],"./UseCase-MicroService.vue":["e4b2","slides9"],"./UseCase-Versioning.vue":["a274","slides0~slides10","slides10"]};function i(e){if(!r.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],i=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r(i)}))}i.keys=function(){return Object.keys(s)},i.id="9e87",e.exports=i},a312:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return b}));var s={maxSubSlides:0,name:"Title"},i={maxSubSlides:4,name:"GRPC"},a={maxSubSlides:21,name:"Features"},n={maxSubSlides:22,name:"UseCase-MicroService"},l={maxSubSlides:3,name:"UseCase-Versioning"},d={maxSubSlides:4,name:"TechnicalDetails-Workflow"},o={maxSubSlides:4,name:"TechnicalDetails-WireFormat"},c={maxSubSlides:4,name:"TechnicalDetails-LibraryStructure"},u={maxSubSlides:6,name:"Limitations"},b=[s,i,a,n,l,d,o,c,u]},b3a6:function(e,t){e.exports="data:image/webp;base64,UklGRqQDAABXRUJQVlA4TJcDAAAvdsAMEBXRbSjIktxc6AzlQplQLpMxZqd7tqEFaBZw5nlt6WcxhKKrGH5NYCwCa9Ivud8MBLQyKeElUgkoBAJFUz+GANwGupr8mwwlKEEJSlBaE4FA0v6SoyAEgDahhBJKKKGEMpSTvAmQ1+qL4evbtAKLdbF7FN6ideCbxbbEnurWyQ/wCt0aW6L3cz1bMVbcw8O6xbJEPtPs7Xm+gae1Re5Rs2L94fc/7ucS3jFbwX2zGuv7Zkf1FV6RFVXVOdxK7O251N7A34tsee9R7pWx7FHwtB5Psfv5aUdXvFJNtwLTKNS5wr3OhlKoaTtL4O357Rvgqfby8vLbA5KFvz2tPsPLeX66FFSqFwSVs1d4UBnj0lI6zxc22/XcAzr319H5OTyfS7ylWBC7G8ii2N0QvcQmQMzhvftQtnlBltB5vmweZf7Xo0TK11Oe7z8uQSlYIbFt70MBRomLbbtnAGF7pkBkl90+AfKCvDvv3wLPj7KPUm4PHz0tL/Z++lPKCgcQvWi/K5A7poB2KR4l8u5+P4HPrUJEFtNilKMkgXGIWEDYpQlMqR3hsv/+/uF8/v+3daiutM4C5jGSQL/gwJR6k9L39w8f5bp1oqAHOeAbC4h+QOUiXiTS2mxgAEMatt67NaAwr6UQ1o7PCCLmMBHP9MM6kAdNiC4iHUhptSv76jIgjzIF+jEOqIjIALwVBwidcwYwjjNXYMoRPQF8kxDWiANkFxGxETBrclzMqQBqJTkupgZAynaCSps9IFx2bUJN5exSUplyUWE2koBLoelhKz4xXfZrYnZprQekFHvVzMxUwE1KNzMvDzfZb2dA9DLRGhcR6QFTqlyOnKBtJEypzENkAN5EQlgTE7JmHGMKai044E3oAX6MOJAtdCCbmAeMg2RC9AZEIayFBK3Jo3rAbMGB0YIDvUKPkgS8AVGI3oAFzDLnMFMIa8ABtbo+rUISGCU9jhMHsgFJQK3GlPAKU2DseXAFmUBvQCagXtYVGBXSA5huIuYJzCt0YLZgE2D2PRsBpFR3BQjVABjjCpLAaEAk2WoOdx8zAFIOtAx21eUqFhC9BXGlUl2OtTFVVdNNKjSiTDwixgWNuIqIzyjQYXJFM7lYJGZmZWJmthEzs+uImI+cc6Z3aTNh7N1UBb9FPYh+E+aoSFC5gTYhiwbgNyEA9Z2ewJSb2BVAc4yRM4Bpt0Esg+KU29lT41Jkl9vafdtNXisDAA=="},cd49:function(e,t,r){"use strict";r.r(t);var s=r("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("b-navbar",{staticClass:"is-primary is-fixed-top"},[s("template",{slot:"brand"},[s("b-navbar-item",{attrs:{tag:"router-link",to:{name:"home"}}},[s("img",{attrs:{src:r("b3a6"),alt:"GRPC"}})])],1),s("template",{slot:"start"},[s("b-navbar-item",{attrs:{tag:"router-link",to:{name:"slides",params:{slide:"Title",subSlide:0}}}},[e._v("Slides")]),s("b-navbar-item",{attrs:{tag:"router-link",to:{name:"demo"}}},[e._v("Demo")]),s("b-navbar-dropdown",{attrs:{label:"Links"}},[s("b-navbar-item",{attrs:{href:"https://grpc.io/docs/quickstart/"}},[e._v("Quick Start")]),s("b-navbar-item",{attrs:{href:"https://grpc.io/docs"}},[e._v("Docs")]),s("b-navbar-item",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3"}},[e._v("ProtoBuf Guide")])],1)],1),s("template",{slot:"end"},[s("b-navbar-item",{attrs:{tag:"div"}},[s("div",{staticClass:"buttons"},[s("a",{staticClass:"button is-light"},[e._v("Join Presentation")])])])],1)],2),s("router-view")],1)},a=[],n=r("9ab4"),l=r("60a3"),d=class extends l["c"]{};d=n["a"]([Object(l["a"])({components:{}})],d);var o=d,c=o,u=r("2877"),b=Object(u["a"])(c,i,a,!1,null,null,null),m=b.exports,f=(r("e260"),r("ddb0"),r("8c4f")),S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("title-slide")},v=[],p=r("3c78"),h={name:"home",components:{TitleSlide:p["default"]}},g=h,w=Object(u["a"])(g,S,v,!1,null,"37781144",null),C=w.exports,O=(r("e6cf"),r("a312")),x=[{path:"/slides",component:()=>r.e("slides").then(r.bind(null,"6b1b")),children:[{path:"",redirect:"/slides/Title/0"},{path:"/slides/:slide/:subSlide",component:()=>r.e("slides").then(r.bind(null,"3c78")),name:"slides"},{path:"*",component:()=>r.e("slides4").then(r.bind(null,"f11b")),name:"slide-not-found"}]}],A=function(e){s["a"].component("slide-".concat(e.name),()=>r("9e87")("./".concat(e.name,".vue")))};for(var E of O["a"])A(E);var y=[{path:"/demo",component:()=>r.e("demo").then(r.bind(null,"680c")),name:"demo"}];s["a"].use(f["a"]);var k=[{path:"/",component:C,name:"home"},{path:"*",redirect:"/"},...x,...y],F=new f["a"]({mode:"hash",base:"/grpc-talk-2020/",routes:k}),T=F,B=r("0613"),N=r("9483");Object(N["a"])("".concat("/grpc-talk-2020/","service-worker.js"),{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var j=r("184c"),_=r("77b4"),P=r("b897");r("d698");s["a"].use(j["a"]),s["a"].use(_["a"]),s["a"].use(P["a"]),s["a"].config.productionTip=!1,new s["a"]({store:B["a"].original,router:T,render:e=>e(m)}).$mount("#app")},d698:function(e,t,r){}});
//# sourceMappingURL=app.7d075018.js.map