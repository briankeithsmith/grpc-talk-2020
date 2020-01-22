(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["slides0"],{"116f":function(t,e,s){t.exports=s.p+"img/load-balancing.af54668a.png"},2850:function(t,e,s){"use strict";var a=s("3bab"),i=s.n(a);i.a},"3bab":function(t,e,s){},"55fb":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"full-height-slide"},[a("h1",{staticClass:"title has-text-centered has-text-primary"},[t._v("Features")]),a("div",{staticClass:"tabs is-centered is-boxed is-large"},[a("ul",[a("li",{class:{"is-active":t.isTab(1)},on:{click:function(t){t.stopPropagation()}}},[a("router-link",{attrs:{to:{name:"slides",params:{silde:t.currentSlideNumber,subSlide:t.tabEnd(1)}}}},[t._v("Code Generation")])],1),a("li",{class:{"is-active":t.isTab(2)},on:{click:function(t){t.stopPropagation()}}},[a("router-link",{attrs:{to:{name:"slides",params:{silde:t.currentSlideNumber,subSlide:t.tabEnd(2)}}}},[t._v("Streaming")])],1),a("li",{class:{"is-active":t.isTab(3)},on:{click:function(t){t.stopPropagation()}}},[a("router-link",{attrs:{to:{name:"slides",params:{silde:t.currentSlideNumber,subSlide:t.tabEnd(3)}}}},[t._v("Load Balancing")])],1),a("li",{class:{"is-active":t.isTab(4)},on:{click:function(t){t.stopPropagation()}}},[a("router-link",{attrs:{to:{name:"slides",params:{silde:t.currentSlideNumber,subSlide:t.tabEnd(4)}}}},[t._v("...")])],1)])]),a("section",[a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isTab(1)?a("div",{key:"code-generation",staticClass:"container"},[t.subSlide>=t.tabStart(1)?a("a",{staticClass:"is-size-4",attrs:{href:"https://github.com/protocolbuffers/protobuf/releases",target:"_blank"}},[t._v("Protoc (.proto)")]):t._e(),a("div",{staticClass:"content"},[a("ul",[t.subSlide>=t.tabStart(1,1)?a("li",[t._v("Generate code through cli or api")]):t._e(),t.subSlide>=t.tabStart(1,2)?a("li",[t._v("Optional standard library")]):t._e(),t.subSlide>=t.tabStart(1,3)?a("li",[t._v("Composeable")]):t._e()])])]):t._e(),t.isTab(2)?a("div",{key:"streaming",staticClass:"content"},[a("h4",{staticClass:"has-text-centered"},[t._v("4 Different RPC Options")]),a("div",{staticClass:"columns is-vcentered"},[a("div",{staticClass:"column is-narrow"},[a("ol",[t.subSlide>=t.tabStart(2,1)?a("li",[a("span",{staticClass:"is-size-5",class:{"has-text-primary":t.subSlide==t.tabStart(2,1)}},[t._v("Unary")])]):t._e(),t.subSlide>=t.tabStart(2,2)?a("li",[a("span",{staticClass:"is-size-5",class:{"has-text-primary":t.subSlide==t.tabStart(2,2)}},[t._v("Server Streaming")])]):t._e(),t.subSlide>=t.tabStart(2,3)?a("li",[a("span",{staticClass:"is-size-5",class:{"has-text-primary":t.subSlide==t.tabStart(2,3)}},[t._v("Client Streaming")])]):t._e(),t.subSlide>=t.tabStart(2,4)?a("li",[a("span",{staticClass:"is-size-5",class:{"has-text-primary":t.subSlide==t.tabStart(2,4)}},[t._v("Bidirectional Streaming")])]):t._e()])]),a("div",{staticClass:"column is-hidden-mobile is-hidden-tablet-only"},[t.subSlide>=t.tabStart(2,1)?a("highlight-code",{staticClass:"my-code",attrs:{code:t.sourceCode,lang:"protobuf"}}):t._e()],1)])]):t._e(),t.isTab(3)?a("div",{key:"load-balancing"},[a("section",[a("div",{staticClass:"container has-text-centered"},[a("a",{staticClass:"is-size-4 has-text-link",attrs:{href:"https://github.com/grpc/grpc/blob/master/doc/load-balancing.md",target:"_blank"}},[t._v("Documentation")])])]),a("section",[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"content"},[a("ul",[t.subSlide>=t.tabStart(3,1)?a("li",[t._v("Proxy Based")]):t._e(),t.subSlide>=t.tabStart(3,2)?a("li",[t._v("Thick Client")]):t._e(),t.subSlide>=t.tabStart(3,3)?a("li",{staticClass:"has-text-weight-bold"},[t._v("Lookaside / External")]):t._e()])])]),a("div",{staticClass:"column"},[t.subSlide===t.tabStart(3,3)?a("img",{attrs:{src:s("116f")}}):t._e()])])])]):t._e(),t.isTab(4)?a("div",{key:"..."},[a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[a("ul",[t.subSlide>=t.tabStart(4,0)?a("li",[t._v("Deadlines")]):t._e(),t.subSlide>=t.tabStart(4,1)?a("li",[t._v("Cancelation Propogation")]):t._e(),t.subSlide>=t.tabStart(4,2)?a("li",[t._v("Request Compression")]):t._e(),t.subSlide>=t.tabStart(4,3)?a("li",[t._v("TLS / SSL")]):t._e(),t.subSlide>=t.tabStart(4,4)?a("li",[t._v("Synchronous & Asynchronous")]):t._e(),t.subSlide>=t.tabStart(4,5)?a("li",[t._v("Observability")]):t._e(),t.subSlide>=t.tabStart(4,6)?a("li",[t._v("Mature Ecosystem")]):t._e(),t.subSlide>=t.tabStart(4,7)?a("li",[t._v(" Runtime discoverability - "),a("a",{attrs:{href:"https://github.com/fullstorydev/grpcurl",target:"_blank"}},[t._v("grpCurl")])]):t._e()])])])]):t._e()])],1)])},i=[],l=(s("a9e3"),s("d4ec")),r=s("bee2"),n=s("99de"),o=s("7e84"),c=s("262e"),b=s("9ab4"),u=s("60a3"),d=s("0613"),S=s("c964"),p=s("2e8e"),v=s.n(p);u["c"].use(S["a"],{languages:{protobuf:v.a}});var _=[4,9,13,99],h="\nrpc SayHello(HelloRequest) \n    returns (HelloResponse) { }",m="\nrpc LotsOfReplies(HelloRequest) \n    returns (stream HelloResponse) { }",g="\nrpc LotsOfGreetings(stream HelloRequest) \n    returns (HelloResponse) { }",f="\nrpc BidiHello(stream HelloRequest) \n    returns (stream HelloResponse) { }",C=function(t){function e(){return Object(l["a"])(this,e),Object(n["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(r["a"])(e,[{key:"isTab",value:function(t){return this.subSlide>=this.tabStart(t)&&this.subSlide<=this.tabEnd(t)}},{key:"tabEnd",value:function(t){return _[t-1]}},{key:"tabStart",value:function(t,e){return 1===t?0+(e||0)+1:_[t-2]+1+(e||0)}},{key:"currentSlideNumber",get:function(){return d["a"].getters.slides.currentSlide}},{key:"sourceCode",get:function(){return this.subSlide===this.tabStart(2,1)?h:this.subSlide===this.tabStart(2,2)?m:this.subSlide===this.tabStart(2,3)?g:this.subSlide===this.tabStart(2,4)?f:""}}]),e}(u["c"]);b["a"]([Object(u["b"])({required:!1,type:Number,default:0})],C.prototype,"subSlide",void 0),C=b["a"]([u["a"]],C);var y=C,k=y,x=(s("2850"),s("2877")),O=Object(x["a"])(k,a,i,!1,null,"70b77d34",null);e["default"]=O.exports}}]);
//# sourceMappingURL=slides0.82762d79.js.map