(function(e){function t(t){for(var n,i,o=t[0],d=t[1],l=t[2],c=0,u=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);f&&f(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var o=r[i];0!==a[o]&&(n=!1)}n&&(s.splice(t--,1),e=d(d.s=r[0]))}return e}var n={},i={app:0},a={app:0},s=[];function o(e){return d.p+"js/"+({demo:"demo","slide-not-found":"slide-not-found",slides:"slides","slides0~slides9":"slides0~slides9",slides0:"slides0",slides9:"slides9",slides1:"slides1",slides2:"slides2",slides3:"slides3",slides4:"slides4",slides5:"slides5",slides6:"slides6",slides8:"slides8"}[e]||e)+"-legacy."+{demo:"c2e7e21d","slide-not-found":"94ec8301",slides:"668ac572","slides0~slides9":"15cd88da",slides0:"7a7896fe",slides9:"50f17ab7",slides1:"87885928",slides2:"35237286",slides3:"745ca934",slides4:"f78ca0b8",slides5:"e1f70d6e",slides6:"dee3c8dc",slides8:"8a3a235c"}[e]+".js"}function d(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,d),r.l=!0,r.exports}d.e=function(e){var t=[],r={slides:1,slides0:1,slides9:1,slides3:1,slides8:1};i[e]?t.push(i[e]):0!==i[e]&&r[e]&&t.push(i[e]=new Promise((function(t,r){for(var n="css/"+({demo:"demo","slide-not-found":"slide-not-found",slides:"slides","slides0~slides9":"slides0~slides9",slides0:"slides0",slides9:"slides9",slides1:"slides1",slides2:"slides2",slides3:"slides3",slides4:"slides4",slides5:"slides5",slides6:"slides6",slides8:"slides8"}[e]||e)+"."+{demo:"31d6cfe0","slide-not-found":"31d6cfe0",slides:"093e93ef","slides0~slides9":"31d6cfe0",slides0:"250423d8",slides9:"61af84fa",slides1:"31d6cfe0",slides2:"31d6cfe0",slides3:"cc361214",slides4:"31d6cfe0",slides5:"31d6cfe0",slides6:"31d6cfe0",slides8:"cc361214"}[e]+".css",a=d.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===n||c===a))return t()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){l=u[o],c=l.getAttribute("data-href");if(c===n||c===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete i[e],f.parentNode.removeChild(f),r(s)},f.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){i[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=s);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.src=o(e);var u=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,r[1](u)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},d.m=e,d.c=n,d.d=function(e,t,r){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(d.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)d.d(r,n,function(t){return e[t]}.bind(null,n));return r},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/grpc-talk-2020/",d.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0613":function(e,t,r){"use strict";var n=r("2b0e"),i=r("2f62"),a=(r("99af"),r("7db0"),r("c740"),r("b0c0"),r("b680"),r("96cf"),r("1da1")),s=r("1898"),o=r("270f"),d=Object(s["b"])({namespaced:!0,state:function(){return{currentSlide:o["b"],currentSubSlide:0,currentSlideOrder:0,maxSlides:o["a"].length-1}},getters:{currentSlide:function(e){return e.currentSlide},currentSub:function(e){return e.currentSubSlide},canNavigateForward:function(e){return e.currentSlideOrder<e.maxSlides},canNavigateBackwards:function(e){return e.currentSlideOrder>0},canNavigateSubForward:function(e){return e.currentSlideOrder<e.maxSlides||e.currentSubSlide<e.currentSlide.maxSubSlides},canNavigateSubBackwards:function(e){return e.currentSlideOrder>0||e.currentSubSlide>0},currentSlideRoute:function(e){return"/slides/".concat(e.currentSlide.name,"/").concat(e.currentSubSlide.toFixed(0))},nextSlideRoute:function(e){return e.currentSlideOrder>=e.maxSlides?"/slides/".concat(o["a"][o["a"].length-1].name,"/").concat(o["a"][o["a"].length-1].maxSubSlides):"/slides/".concat(o["a"][e.currentSlideOrder+1].name,"/0")},nextSubSlideRoute:function(e){return e.currentSlideOrder>=e.maxSlides?"/slides/".concat(o["a"][o["a"].length-1].name,"/").concat(o["a"][o["a"].length-1].maxSubSlides):e.currentSubSlide>=e.currentSlide.maxSubSlides?"/slides/".concat(o["a"][e.currentSlideOrder+1].name,"/0"):"/slides/".concat(o["a"][e.currentSlideOrder+1].name,"/").concat(e.currentSubSlide+1)},previousSlideRoute:function(e){return e.currentSlideOrder<=1?"/slides/".concat(o["a"][0].name,"/0"):"/slides/".concat(o["a"][e.currentSlideOrder-1].name,"/0")},previousSubSlideRoute:function(e){return e.currentSubSlide<=0?e.currentSlideOrder<=0?"/slides/".concat(o["a"][0].name,"/0"):"/slides/".concat(o["a"][e.currentSlideOrder-1].name,"/").concat(o["a"][e.currentSlideOrder-1].maxSubSlides):"/slides/".concat(o["a"][e.currentSlideOrder].name,"/").concat(e.currentSubSlide-1)},slideOrder:function(e){return function(e){return o["a"].findIndex((function(t){return t.name===e}))}},slideConfig:function(e){return function(e){return o["a"].find((function(t){return t.name===e}))}}},mutations:{SET_CurrentSlide:function(e,t){e.currentSlide=t},SET_CurrentSlideOrder:function(e,t){e.currentSlideOrder=t},SET_CurrentSubSlide:function(e,t){e.currentSubSlide=t}},actions:{navigateSubSlide:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(void 0===r.forward||void 0===r.value){e.next=2;break}return e.abrupt("return",!1);case 2:if(n=c(t),i=n.state.currentSubSlide,void 0===r.forward){e.next=7;break}if(r.forward||!(n.state.currentSubSlide>=0)||n.getters.canNavigateBackwards){e.next=7;break}return e.abrupt("return",!1);case 7:if(a=0,void 0===r.forward){e.next=12;break}a=i+(r.forward?1:-1),e.next=17;break;case 12:if(void 0===r.value){e.next=16;break}a=r.value,e.next=17;break;case 16:return e.abrupt("return",!1);case 17:if(!(a>n.state.currentSlide.maxSubSlides)){e.next=19;break}return e.abrupt("return",n.dispatch.navigateOne({forward:!0}));case 19:if(!(a<0)){e.next=21;break}return e.abrupt("return",n.dispatch.navigateOne({forward:!1,subSlideEnd:!0}));case 21:if(n.state.currentSubSlide!==a){e.next=23;break}return e.abrupt("return",!1);case 23:return n.commit.SET_CurrentSubSlide(a),e.abrupt("return",n.getters.currentSlideRoute);case 25:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),navigateOne:function(e,t){var r=c(e),n=r.state.currentSlideOrder;if(t.forward&&!r.getters.canNavigateForward)return!1;if(!t.forward&&!r.getters.canNavigateBackwards)return!1;var i,a=n+(t.forward?1:-1);i=a<0?o["a"][0]:a>=o["a"].length?o["a"][o["a"].length-1]:o["a"][a],r.commit.SET_CurrentSlide(i);var s=r.getters.slideOrder(i.name);return r.commit.SET_CurrentSlideOrder(s),r.commit.SET_CurrentSubSlide(t.subSlideEnd?i.maxSubSlides:0),r.getters.currentSlideRoute},initializeOnSlide:function(e,t){var r=c(e),n=r.getters.slideConfig(t.slide);n||(n=o["a"][0]),r.state.currentSlide.name!==t.slide&&r.commit.SET_CurrentSlide(n);var i=r.getters.slideOrder(t.slide);r.commit.SET_CurrentSlideOrder(i),r.state.currentSubSlide!==t.subSlide&&r.commit.SET_CurrentSubSlide(t.subSlide)}}}),l=d,c=function(e){return b(e,d)};r.d(t,"b",(function(){return b})),n["a"].use(i["a"]);var u=Object(s["a"])({modules:{slides:l},actions:{}}),f=u.store,b=(u.rootActionContext,u.moduleActionContext);t["a"]=f},"270f":function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return f}));var n={maxSubSlides:0,name:"Title"},i={maxSubSlides:4,name:"GRPC"},a={maxSubSlides:21,name:"Features"},s={maxSubSlides:22,name:"UseCase-MicroService"},o={maxSubSlides:3,name:"UseCase-Versioning"},d={maxSubSlides:4,name:"TechnicalDetails-Workflow"},l={maxSubSlides:4,name:"TechnicalDetails-WireFormat"},c={maxSubSlides:4,name:"TechnicalDetails-LibraryStructure"},u={maxSubSlides:6,name:"Limitations"},f=[n,i,a,s,o,d,l,c,u]},"368d":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"hero is-primary is-fullheight"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container has-text-centered"},[r("h1",{staticClass:"title"},[e._v("GRPC & Protobuf")]),r("h4",{staticClass:"subtitle"},[e._v("Intro to next generation inter-service communication protocol")]),r("div",{staticClass:"level section"},[r("div",{staticClass:"buttons level-item"},[r("b-button",{attrs:{tag:"a",href:"https://www.linkedin.com/in/adam-vaden-4a77057b/",target:"_blank"}},[e._v("Adam Vaden")]),r("a",{staticClass:"button",attrs:{href:"https://github.com/abvaden"}},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg"}})],1)]),r("a",{staticClass:"button",attrs:{href:"https://www.linkedin.com/in/adam-vaden-4a77057b/"}},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)]),r("a",{staticClass:"button",attrs:{type:"text",href:"mailto:adam@v2tools.com"}},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:"envelope"}})],1),r("span",[e._v("adam@V2tools.com")])]),r("a",{staticClass:"button",attrs:{href:"https://v2tools.com"}},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:"globe"}})],1),r("span",[e._v("V2tools.com")])])],1)])])])])},i=[],a=(r("a9e3"),r("d4ec")),s=r("99de"),o=r("7e84"),d=r("262e"),l=r("9ab4"),c=r("60a3"),u=r("ad3d"),f=r("ecee"),b=r("d2c9"),m=r("0882"),S=r("eb55"),v=r("230d");f["c"].add(S["faGithub"]),f["c"].add(m["faGlobe"]),f["c"].add(b["faEnvelope"]),f["c"].add(v["faLinkedin"]);var p=function(e){function t(){return Object(a["a"])(this,t),Object(s["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),t}(c["c"]);l["a"]([Object(c["b"])({required:!1,type:Number,default:0})],p.prototype,"subSlide",void 0),p=l["a"]([Object(c["a"])({components:{FontAwesomeIcon:u["a"]}})],p);var h=p,g=h,w=r("2877"),O=Object(w["a"])(g,n,i,!1,null,"bc23b724",null);t["default"]=O.exports},"7bdb":function(e,t,r){var n={"./Features.vue":["260a","slides0~slides9","slides0"],"./GRPC.vue":["3e8f","slides1"],"./Limitations.vue":["be7b","slides2"],"./MicroServiceDemoSVG.vue":["4d8c","slides3"],"./TechnicalDetails-LibraryStructure.vue":["7e2f","slides4"],"./TechnicalDetails-WireFormat.vue":["7757","slides5"],"./TechnicalDetails-Workflow.vue":["c248","slides6"],"./Title.vue":["368d"],"./UseCase-MicroService.vue":["a962","slides8"],"./UseCase-Versioning.vue":["714a","slides0~slides9","slides9"]};function i(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r(i)}))}i.keys=function(){return Object.keys(n)},i.id="7bdb",e.exports=i},b3a6:function(e,t){e.exports="data:image/webp;base64,UklGRqQDAABXRUJQVlA4TJcDAAAvdsAMEBXRbSjIktxc6AzlQplQLpMxZqd7tqEFaBZw5nlt6WcxhKKrGH5NYCwCa9Ivud8MBLQyKeElUgkoBAJFUz+GANwGupr8mwwlKEEJSlBaE4FA0v6SoyAEgDahhBJKKKGEMpSTvAmQ1+qL4evbtAKLdbF7FN6ideCbxbbEnurWyQ/wCt0aW6L3cz1bMVbcw8O6xbJEPtPs7Xm+gae1Re5Rs2L94fc/7ucS3jFbwX2zGuv7Zkf1FV6RFVXVOdxK7O251N7A34tsee9R7pWx7FHwtB5Psfv5aUdXvFJNtwLTKNS5wr3OhlKoaTtL4O357Rvgqfby8vLbA5KFvz2tPsPLeX66FFSqFwSVs1d4UBnj0lI6zxc22/XcAzr319H5OTyfS7ylWBC7G8ii2N0QvcQmQMzhvftQtnlBltB5vmweZf7Xo0TK11Oe7z8uQSlYIbFt70MBRomLbbtnAGF7pkBkl90+AfKCvDvv3wLPj7KPUm4PHz0tL/Z++lPKCgcQvWi/K5A7poB2KR4l8u5+P4HPrUJEFtNilKMkgXGIWEDYpQlMqR3hsv/+/uF8/v+3daiutM4C5jGSQL/gwJR6k9L39w8f5bp1oqAHOeAbC4h+QOUiXiTS2mxgAEMatt67NaAwr6UQ1o7PCCLmMBHP9MM6kAdNiC4iHUhptSv76jIgjzIF+jEOqIjIALwVBwidcwYwjjNXYMoRPQF8kxDWiANkFxGxETBrclzMqQBqJTkupgZAynaCSps9IFx2bUJN5exSUplyUWE2koBLoelhKz4xXfZrYnZprQekFHvVzMxUwE1KNzMvDzfZb2dA9DLRGhcR6QFTqlyOnKBtJEypzENkAN5EQlgTE7JmHGMKai044E3oAX6MOJAtdCCbmAeMg2RC9AZEIayFBK3Jo3rAbMGB0YIDvUKPkgS8AVGI3oAFzDLnMFMIa8ABtbo+rUISGCU9jhMHsgFJQK3GlPAKU2DseXAFmUBvQCagXtYVGBXSA5huIuYJzCt0YLZgE2D2PRsBpFR3BQjVABjjCpLAaEAk2WoOdx8zAFIOtAx21eUqFhC9BXGlUl2OtTFVVdNNKjSiTDwixgWNuIqIzyjQYXJFM7lYJGZmZWJmthEzs+uImI+cc6Z3aTNh7N1UBb9FPYh+E+aoSFC5gTYhiwbgNyEA9Z2ewJSb2BVAc4yRM4Bpt0Esg+KU29lT41Jkl9vafdtNXisDAA=="},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-navbar",{staticClass:"is-primary is-fixed-top"},[n("template",{slot:"brand"},[n("b-navbar-item",{attrs:{tag:"router-link",to:{name:"home"}}},[n("img",{attrs:{src:r("b3a6"),alt:"GRPC"}})])],1),n("template",{slot:"start"},[n("b-navbar-item",{attrs:{tag:"router-link",to:{name:"slides",params:{slide:"Title",subSlide:0}}}},[e._v("Slides")]),n("b-navbar-item",{attrs:{tag:"router-link",to:{name:"demo"}}},[e._v("Demo")]),n("b-navbar-dropdown",{attrs:{label:"Links"}},[n("b-navbar-item",{attrs:{href:"https://grpc.io/docs/quickstart/"}},[e._v("Quick Start")]),n("b-navbar-item",{attrs:{href:"https://grpc.io/docs"}},[e._v("Docs")]),n("b-navbar-item",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3"}},[e._v("ProtoBuf Guide")])],1)],1),n("template",{slot:"end"},[n("b-navbar-item",{attrs:{tag:"div"}},[n("div",{staticClass:"buttons"},[n("a",{staticClass:"button is-light"},[e._v("Join Presentation")])])])],1)],2),n("router-view")],1)},a=[],s=r("d4ec"),o=r("99de"),d=r("7e84"),l=r("262e"),c=r("9ab4"),u=r("60a3"),f=function(e){function t(){return Object(s["a"])(this,t),Object(o["a"])(this,Object(d["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(u["c"]);f=c["a"]([Object(u["a"])({components:{}})],f);var b=f,m=b,S=r("2877"),v=Object(S["a"])(m,i,a,!1,null,null,null),p=v.exports,h=(r("99af"),r("2909")),g=r("8c4f"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("title-slide")},O=[],x=r("368d"),C={name:"home",components:{TitleSlide:x["default"]}},k=C,y=Object(S["a"])(k,w,O,!1,null,"20fdb57e",null),A=y.exports,E=(r("a4d3"),r("e01a"),r("d28b"),r("b0c0"),r("d3b7"),r("3ca3"),r("ddb0"),r("270f")),j=[{path:"/slides",component:function(){return r.e("slides").then(r.bind(null,"6b1b"))},children:[{path:"",redirect:"/slides/Title/0"},{path:"/slides/:slide/:subSlide",component:function(){return r.e("slides").then(r.bind(null,"368d"))},name:"slides"},{path:"*",component:function(){return r.e("slide-not-found").then(r.bind(null,"f11b"))},name:"slide-not-found"}]}],F=!0,T=!1,B=void 0;try{for(var N,_=function(){var e=N.value;n["a"].component("slide-grpc-".concat(e.name),(function(){return r("7bdb")("./".concat(e.name,".vue"))}))},P=E["a"][Symbol.iterator]();!(F=(N=P.next()).done);F=!0)_()}catch(J){T=!0,B=J}finally{try{F||null==P.return||P.return()}finally{if(T)throw B}}var M=[{path:"/demo",component:function(){return r.e("demo").then(r.bind(null,"680c"))},name:"demo"}];n["a"].use(g["a"]);var L=[{path:"/",component:A,name:"home"},{path:"*",redirect:"/"}].concat(Object(h["a"])(j),Object(h["a"])(M)),R=new g["a"]({mode:"hash",base:"/grpc-talk-2020/",routes:L}),U=R,K=r("0613"),G=r("9483");Object(G["a"])("".concat("/grpc-talk-2020/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var D=r("184c"),Q=r("77b4"),I=r("b897");r("d698");n["a"].use(D["a"]),n["a"].use(Q["a"]),n["a"].use(I["a"]),n["a"].config.productionTip=!1,new n["a"]({store:K["a"].original,router:U,render:function(e){return e(p)}}).$mount("#app")},d698:function(e,t,r){}});
//# sourceMappingURL=app-legacy.13a67520.js.map