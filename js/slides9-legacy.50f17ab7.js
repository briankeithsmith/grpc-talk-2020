(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["slides9"],{3240:function(e,t,a){},"714a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"full-height-slide"},[a("h1",{staticClass:"title has-text-centered has-text-primary"},[e._v("Use Case")]),a("h4",{staticClass:"subtitle has-text-centered"},[e._v("Versioning")]),a("div",{staticClass:"tabs is-boxed is-large is-centered is-mobile"},[a("ul",[a("li",{class:{"is-active":e.isTab(1)}},[a("router-link",{attrs:{tag:"a",to:{name:"slides",params:{slide:e.currentSlide.name,subSlide:e.tabEnd(1)}}}},[a("span",{staticClass:"icon is-small"},[e._v("v1")]),a("span",[e._v("Service Versioning")])])],1),a("li",{class:{"is-active":e.isTab(2)}},[a("router-link",{attrs:{tag:"a",to:{name:"slides",params:{slide:e.currentSlide.name,subSlide:e.tabEnd(2)}}}},[a("span",{staticClass:"icon is-small"},[e._v("v2")]),a("span",[e._v("Message Versioning")])])],1)])]),e.isTab(1)?a("section",[e._m(0),e.subSlide===e.tabStart(1,0)?a("highlight-code",{staticClass:"my-code",attrs:{code:e.sourceCode(0),lang:"protobuf"}}):e._e(),e.subSlide===e.tabStart(1,1)?a("highlight-code",{staticClass:"my-code",attrs:{code:e.sourceCode(1),lang:"protobuf"}}):e._e()],1):e._e(),e.isTab(2)?a("section",[e.subSlide===e.tabStart(2,0)?a("highlight-code",{staticClass:"my-code",attrs:{code:e.sourceCode(2),lang:"protobuf"}}):e._e(),e.subSlide===e.tabStart(2,1)?a("highlight-code",{staticClass:"my-code",attrs:{code:e.sourceCode(3),lang:"protobuf"}}):e._e()],1):e._e()])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("ul",[a("li",[e._v("Single server can implement multiple services")])])])}],n=(a("a9e3"),a("d4ec")),i=a("bee2"),u=a("99de"),c=a("7e84"),l=a("262e"),o=a("9ab4"),d=a("60a3"),b=a("0613"),v=a("c964"),g=a("2e8e"),p=a.n(g);a("9f21");d["c"].use(v["a"],{languages:{protobuf:p.a}});var f="\nservice FeatureServicev1 {\n  rpc GetFeatures (FeatureRequest) returns (FeaturesResponse);\n  rpc GetFeatureDetail (Feature) returns (FeatureDetail);\n}\n",F="\nservice FeatureServicev1 {\n  rpc GetFeatures (FeatureRequest) returns (FeaturesResponse);\n  rpc GetFeatureDetail (Feature) returns (FeatureDetail);\n}\n\nservice FeatureServicev2 {\n  rpc GetFeatures (FeatureRequest) returns (stream Feature);\n  rpc GetFeatureDetail (Feature) return (FeatureDetail);\n}",h="\nmessage FeatureRequest {\n  string region = 1;\n}\nmessage FeatureRequest {\n  float latitude = 3;\n  float longitude = 4;\n}\nservice FeatureService {\n  rpc GetFeatures (FeatureRequest) returns (Feature);\n}",S="\nmessage FeatureRequest {\n  string region = 1;\n  float latitude = 2;\n  float longitude = 3;\n  float radius = 4;\n}\nmessage FeatureRequest {\n  float latitude = 3;\n  float longitude = 4;\n}\nservice FeatureService {\n  rpc GetFeatures (FeatureRequest) returns (Feature);\n}",m=[f,F,h,S],_=[2,4],C=function(e){function t(){return Object(n["a"])(this,t),Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(i["a"])(t,[{key:"sourceCode",value:function(e){return m[e]}},{key:"isTab",value:function(e){return this.subSlide>=this.tabStart(e)&&this.subSlide<=this.tabEnd(e)}},{key:"tabEnd",value:function(e){return _[e-1]}},{key:"tabStart",value:function(e,t){return 1===e?0+(t||0)+1:_[e-2]+1+(t||0)}},{key:"currentSlide",get:function(){return b["a"].getters.slides.currentSlide}},{key:"currentSlideNumber",get:function(){return b["a"].getters.slides.currentSlide}}]),t}(d["c"]);o["a"]([Object(d["b"])({required:!1,type:Number,default:0})],C.prototype,"subSlide",void 0),C=o["a"]([Object(d["a"])({})],C);var y=C,R=y,k=(a("dbce"),a("2877")),q=Object(k["a"])(R,s,r,!1,null,"0dc19c3e",null);t["default"]=q.exports},"9f21":function(e,t,a){},dbce:function(e,t,a){"use strict";var s=a("3240"),r=a.n(s);r.a}}]);
//# sourceMappingURL=slides9-legacy.50f17ab7.js.map