(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["slides0~slides14"],{"201b":function(e,n,t){"use strict";e.exports=e=>{const n=e.match(/^[ \t]*(?=\S)/gm);if(!n)return e;const t=Math.min.apply(Math,n.map(e=>e.length)),r=new RegExp(`^[ \\t]{${t}}`,"gm");return t>0?e.replace(r,""):e}},"2e8e":function(e,n){e.exports=function(e){return{keywords:{keyword:"package import option optional required repeated group oneof",built_in:"double float int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 sfixed32 sfixed64 bool string bytes",literal:"true false"},contains:[e.QUOTE_STRING_MODE,e.NUMBER_MODE,e.C_LINE_COMMENT_MODE,{className:"class",beginKeywords:"message enum service",end:/\{/,illegal:/\n/,contains:[e.inherit(e.TITLE_MODE,{starts:{endsWithParent:!0,excludeEnd:!0}})]},{className:"function",beginKeywords:"rpc",end:/;/,excludeEnd:!0,keywords:"rpc returns"},{begin:/^\s*[A-Z_]+/,end:/\s*=/,excludeEnd:!0}]}}},"302a":function(e,n,t){"use strict";e.exports=(e,n,t)=>{const r="object"===typeof t?Object.assign({indent:" "},t):{indent:t||" "};if(n=void 0===n?1:n,"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof n)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof n}\``);if("string"!==typeof r.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);if(0===n)return e;const a=r.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(a,r.indent.repeat(n))}},"7ddf":function(e,n,t){"use strict";const r=t("201b"),a=t("302a");e.exports=(e,n,t)=>a(r(e),n||0,t)},a70e:function(e,n,t){var r,a;(function(t){var o="object"===typeof window&&window||"object"===typeof self&&self;n.nodeType?o&&(o.hljs=t({}),r=[],a=function(){return o.hljs}.apply(n,r),void 0===a||(e.exports=a)):t(n)})((function(e){var n,t=[],r=Object.keys,a={},o={},i=!0,c=/^(no-?highlight|plain|text)$/i,s=/\blang(?:uage)?-([\w-]+)\b/i,u=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,l="</span>",f="Could not find the language '{}', did you forget to load/include a language module?",d={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},g="of and for in not or if then".split(" ");function p(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function v(e){return e.nodeName.toLowerCase()}function h(e,n){var t=e&&e.exec(n);return t&&0===t.index}function b(e){return c.test(e)}function E(e){var n,t,r,a,o=e.className+" ";if(o+=e.parentNode?e.parentNode.className:"",t=s.exec(o),t){var i=K(t[1]);return i||(console.warn(f.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),i?t[1]:"no-highlight"}for(o=o.split(/\s+/),n=0,r=o.length;n<r;n++)if(a=o[n],b(a)||K(a))return a}function m(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach((function(e){for(n in e)t[n]=e[n]})),t}function _(e){var n=[];return function e(t,r){for(var a=t.firstChild;a;a=a.nextSibling)3===a.nodeType?r+=a.nodeValue.length:1===a.nodeType&&(n.push({event:"start",offset:r,node:a}),r=e(a,r),v(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:a}));return r}(e,0),n}function y(e,n,r){var a=0,o="",i=[];function c(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function s(e){function n(e){return" "+e.nodeName+'="'+p(e.value).replace(/"/g,"&quot;")+'"'}o+="<"+v(e)+t.map.call(e.attributes,n).join("")+">"}function u(e){o+="</"+v(e)+">"}function l(e){("start"===e.event?s:u)(e.node)}while(e.length||n.length){var f=c();if(o+=p(r.substring(a,f[0].offset)),a=f[0].offset,f===e){i.reverse().forEach(u);do{l(f.splice(0,1)[0]),f=c()}while(f===e&&f.length&&f[0].offset===a);i.reverse().forEach(s)}else"start"===f[0].event?i.push(f[0].node):i.pop(),l(f.splice(0,1)[0])}return o+p(r.substr(a))}function O(e){return!!e&&(e.endsWithParent||O(e.starts))}function w(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return m(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:O(e)?[m(e,{starts:e.starts?m(e.starts):null})]:Object.isFrozen(e)?[m(e)]:[e]}function R(e){if(n&&!e.langApiRestored){for(var t in e.langApiRestored=!0,n)e[t]&&(e[n[t]]=e[t]);(e.contains||[]).concat(e.variants||[]).forEach(R)}}function M(e,n){var t={};return"string"===typeof e?a("keyword",e):r(e).forEach((function(n){a(n,e[n])})),t;function a(e,r){n&&(r=r.toLowerCase()),r.split(" ").forEach((function(n){var r=n.split("|");t[r[0]]=[e,x(r[0],r[1])]}))}}function x(e,n){return n?Number(n):N(e)?0:1}function N(e){return-1!=g.indexOf(e.toLowerCase())}function D(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}function r(e){return new RegExp(e.toString()+"|").exec("").length-1}function a(e,t){for(var r=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,a=0,o="",i=0;i<e.length;i++){a+=1;var c=a,s=n(e[i]);i>0&&(o+=t),o+="(";while(s.length>0){var u=r.exec(s);if(null==u){o+=s;break}o+=s.substring(0,u.index),s=s.substring(u.index+u[0].length),"\\"==u[0][0]&&u[1]?o+="\\"+String(Number(u[1])+c):(o+=u[0],"("==u[0]&&a++)}o+=")"}return o}function o(e){var n,o,i={},c=[],s={},u=1;function l(e,n){i[u]=e,c.push([e,n]),u+=r(n)+1}for(var f=0;f<e.contains.length;f++){var d;o=e.contains[f],d=o.beginKeywords?"\\.?(?:"+o.begin+")\\.?":o.begin,l(o,d)}e.terminator_end&&l("end",e.terminator_end),e.illegal&&l("illegal",e.illegal);var g=c.map((function(e){return e[1]}));return n=t(a(g,"|"),!0),s.lastIndex=0,s.exec=function(t){var r;if(0===c.length)return null;n.lastIndex=s.lastIndex;var a=n.exec(t);if(!a)return null;for(var o=0;o<a.length;o++)if(void 0!=a[o]&&void 0!=i[""+o]){r=i[""+o];break}return"string"===typeof r?(a.type=r,a.extra=[e.illegal,e.terminator_end]):(a.type="begin",a.rule=r),a},s}function c(r,a){r.compiled||(r.compiled=!0,r.keywords=r.keywords||r.beginKeywords,r.keywords&&(r.keywords=M(r.keywords,e.case_insensitive)),r.lexemesRe=t(r.lexemes||/\w+/,!0),a&&(r.beginKeywords&&(r.begin="\\b("+r.beginKeywords.split(" ").join("|")+")\\b"),r.begin||(r.begin=/\B|\b/),r.beginRe=t(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(r.endRe=t(r.end)),r.terminator_end=n(r.end)||"",r.endsWithParent&&a.terminator_end&&(r.terminator_end+=(r.end?"|":"")+a.terminator_end)),r.illegal&&(r.illegalRe=t(r.illegal)),null==r.relevance&&(r.relevance=1),r.contains||(r.contains=[]),r.contains=Array.prototype.concat.apply([],r.contains.map((function(e){return w("self"===e?r:e)}))),r.contains.forEach((function(e){c(e,r)})),r.starts&&c(r.starts,a),r.terminators=o(r))}if(e.contains&&-1!=e.contains.indexOf("self")){if(!i)throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");e.contains=e.contains.filter((function(e){return"self"!=e}))}c(e)}function A(e,n,t,r){var o=n;function c(e){return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function s(e,n){if(h(e.endRe,n)){while(e.endsParent&&e.parent)e=e.parent;return e}if(e.endsWithParent)return s(e.parent,n)}function u(e,n){var t=R.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function g(e,n,t,r){if(!t&&""===n)return"";if(!e)return n;var a=r?"":d.classPrefix,o='<span class="'+a,i=t?"":l;return o+=e+'">',o+n+i}function v(){var e,n,t,r;if(!x.keywords)return p(T);r="",n=0,x.lexemesRe.lastIndex=0,t=x.lexemesRe.exec(T);while(t)r+=p(T.substring(n,t.index)),e=u(x,t),e?(j+=e[1],r+=g(e[0],p(t[0]))):r+=p(t[0]),n=x.lexemesRe.lastIndex,t=x.lexemesRe.exec(T);return r+p(T.substr(n))}function b(){var e="string"===typeof x.subLanguage;if(e&&!a[x.subLanguage])return p(T);var n=e?A(x.subLanguage,T,!0,N[x.subLanguage]):C(T,x.subLanguage.length?x.subLanguage:void 0);return x.relevance>0&&(j+=n.relevance),e&&(N[x.subLanguage]=n.top),g(n.language,n.value,!1,!0)}function E(){S+=null!=x.subLanguage?b():v(),T=""}function m(e){S+=e.className?g(e.className,"",!0):"",x=Object.create(e,{parent:{value:x}})}function _(e){var n=e[0],t=e.rule;return t&&t.endSameAsBegin&&(t.endRe=c(n)),t.skip?T+=n:(t.excludeBegin&&(T+=n),E(),t.returnBegin||t.excludeBegin||(T=n)),m(t),t.returnBegin?0:n.length}function y(e){var n=e[0],t=o.substr(e.index),r=s(x,t);if(r){var a=x;a.skip?T+=n:(a.returnEnd||a.excludeEnd||(T+=n),E(),a.excludeEnd&&(T=n));do{x.className&&(S+=l),x.skip||x.subLanguage||(j+=x.relevance),x=x.parent}while(x!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),m(r.starts)),a.returnEnd?0:n.length}}var O={};function w(e,n){var r=n&&n[0];if(T+=e,null==r)return E(),0;if("begin"==O.type&&"end"==n.type&&O.index==n.index&&""===r)return T+=o.slice(n.index,n.index+1),1;if(O=n,"begin"===n.type)return _(n);if("illegal"===n.type&&!t)throw new Error('Illegal lexeme "'+r+'" for mode "'+(x.className||"<unnamed>")+'"');if("end"===n.type){var a=y(n);if(void 0!=a)return a}return T+=r,r.length}var R=K(e);if(!R)throw console.error(f.replace("{}",e)),new Error('Unknown language: "'+e+'"');D(R);var M,x=r||R,N={},S="";for(M=x;M!==R;M=M.parent)M.className&&(S=g(M.className,"",!0)+S);var T="",j=0;try{var L,B,P=0;while(1){if(x.terminators.lastIndex=P,L=x.terminators.exec(o),!L)break;B=w(o.substring(P,L.index),L),P=L.index+B}for(w(o.substr(P)),M=x;M.parent;M=M.parent)M.className&&(S+=l);return{relevance:j,value:S,illegal:!1,language:e,top:x}}catch(k){if(k.message&&-1!==k.message.indexOf("Illegal"))return{illegal:!0,relevance:0,value:p(o)};if(i)return{relevance:0,value:p(o),language:e,top:x,errorRaised:k};throw k}}function C(e,n){n=n||d.languages||r(a);var t={relevance:0,value:p(e)},o=t;return n.filter(K).filter($).forEach((function(n){var r=A(n,e,!1);r.language=n,r.relevance>o.relevance&&(o=r),r.relevance>t.relevance&&(o=t,t=r)})),o.language&&(t.second_best=o),t}function S(e){return d.tabReplace||d.useBR?e.replace(u,(function(e,n){return d.useBR&&"\n"===e?"<br>":d.tabReplace?n.replace(/\t/g,d.tabReplace):""})):e}function T(e,n,t){var r=n?o[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function j(e){var n,t,r,a,o,i=E(e);b(i)||(d.useBR?(n=document.createElement("div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,o=n.textContent,r=i?A(i,o,!0):C(o),t=_(n),t.length&&(a=document.createElement("div"),a.innerHTML=r.value,r.value=y(t,_(a),o)),r.value=S(r.value),e.innerHTML=r.value,e.className=T(e.className,i,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function L(e){d=m(d,e)}function B(){if(!B.called){B.called=!0;var e=document.querySelectorAll("pre code");t.forEach.call(e,j)}}function P(){window.addEventListener("DOMContentLoaded",B,!1),window.addEventListener("load",B,!1)}var k={disableAutodetect:!0};function I(n,t){var r;try{r=t(e)}catch(c){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!i)throw c;console.error(c),r=k}a[n]=r,R(r),r.rawDefinition=t.bind(null,e),r.aliases&&r.aliases.forEach((function(e){o[e]=n}))}function U(){return r(a)}function H(e){var n=K(e);if(n)return n;var t=new Error("The '{}' language is required, but not loaded.".replace("{}",e));throw t}function K(e){return e=(e||"").toLowerCase(),a[e]||a[o[e]]}function $(e){var n=K(e);return n&&!n.disableAutodetect}e.highlight=A,e.highlightAuto=C,e.fixMarkup=S,e.highlightBlock=j,e.configure=L,e.initHighlighting=B,e.initHighlightingOnLoad=P,e.registerLanguage=I,e.listLanguages=U,e.getLanguage=K,e.requireLanguage=H,e.autoDetection=$,e.inherit=m,e.debugMode=function(){i=!1},e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,t,r){var a=e.inherit({className:"comment",begin:n,end:t,contains:[]},r||{});return a.contains.push(e.PHRASAL_WORDS_MODE),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),a},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0};var G=[e.BACKSLASH_ESCAPE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.PHRASAL_WORDS_MODE,e.COMMENT,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.HASH_COMMENT_MODE,e.NUMBER_MODE,e.C_NUMBER_MODE,e.BINARY_NUMBER_MODE,e.CSS_NUMBER_MODE,e.REGEXP_MODE,e.TITLE_MODE,e.UNDERSCORE_TITLE_MODE,e.METHOD_GUARD];function W(e){Object.freeze(e);var n="function"===typeof e;return Object.getOwnPropertyNames(e).forEach((function(t){!e.hasOwnProperty(t)||null===e[t]||"object"!==typeof e[t]&&"function"!==typeof e[t]||n&&("caller"===t||"callee"===t||"arguments"===t)||Object.isFrozen(e[t])||W(e[t])})),e}return G.forEach((function(e){W(e)})),e}))},b6de:function(e,n,t){"use strict";const r=/^(?:( )+|\t+)/;function a(e){let n=0,t=0,r=0;for(const a of e){const e=a[0],o=a[1],i=o[0],c=o[1];(i>t||i===t&&c>r)&&(t=i,r=c,n=Number(e))}return n}e.exports=e=>{if("string"!==typeof e)throw new TypeError("Expected a string");let n=0,t=0,o=0;const i=new Map;let c,s;for(const a of e.split(/\n/g)){if(!a)continue;let e;const u=a.match(r);u?(e=u[0].length,u[1]?t++:n++):e=0;const l=e-o;o=e,l?(s=l>0,c=i.get(s?l:-l),c?c[0]++:(c=[1,0],i.set(l,c))):c&&(c[1]+=Number(s))}const u=a(i);let l,f;return u?t>=n?(l="space",f=" ".repeat(u)):(l="tab",f="\t".repeat(u)):(l=null,f=""),{amount:u,type:l,indent:f}}},bee2:function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}t.d(n,"a",(function(){return a}))},c964:function(e,n,t){"use strict";var r=t("9ab4"),a=t("a70e"),o=t.n(a),i=t("2b0e"),c=t("b6de"),s=t.n(c),u=t("7ddf"),l=t.n(u);function f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function d(e,n){return n={exports:{}},e(n,n.exports),n.exports}var g=d((function(e,n){function t(e){return e&&"object"===typeof e&&"default"in e?e["default"]:e}Object.defineProperty(n,"__esModule",{value:!0});var r=t(i["a"]),a="undefined"!==typeof Reflect&&Reflect.defineMetadata;function o(e,n){c(e,n),Object.getOwnPropertyNames(n.prototype).forEach((function(t){c(e.prototype,n.prototype,t)})),Object.getOwnPropertyNames(n).forEach((function(t){c(e,n,t)}))}function c(e,n,t){var r=t?Reflect.getOwnMetadataKeys(n,t):Reflect.getOwnMetadataKeys(n);r.forEach((function(r){var a=t?Reflect.getOwnMetadata(r,n,t):Reflect.getOwnMetadata(r,n);t?Reflect.defineMetadata(r,a,e,t):Reflect.defineMetadata(r,a,e)}))}var s={__proto__:[]},u=s instanceof Array;function l(e){return function(n,t,r){var a="function"===typeof n?n:n.constructor;a.__decorators__||(a.__decorators__=[]),"number"!==typeof r&&(r=void 0),a.__decorators__.push((function(n){return e(n,t,r)}))}}function f(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return r.extend({mixins:e})}function d(e){var n=typeof e;return null==e||"object"!==n&&"function"!==n}function g(e,n){var t=n.prototype._init;n.prototype._init=function(){var n=this,t=Object.getOwnPropertyNames(e);if(e.$options.props)for(var r in e.$options.props)e.hasOwnProperty(r)||t.push(r);t.forEach((function(t){"_"!==t.charAt(0)&&Object.defineProperty(n,t,{get:function(){return e[t]},set:function(n){e[t]=n},configurable:!0})}))};var r=new n;n.prototype._init=t;var a={};return Object.keys(r).forEach((function(e){void 0!==r[e]&&(a[e]=r[e])})),a}var p=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured"];function v(e,n){void 0===n&&(n={}),n.name=n.name||e._componentTag||e.name;var t=e.prototype;Object.getOwnPropertyNames(t).forEach((function(e){if("constructor"!==e)if(p.indexOf(e)>-1)n[e]=t[e];else{var r=Object.getOwnPropertyDescriptor(t,e);void 0!==r.value?"function"===typeof r.value?(n.methods||(n.methods={}))[e]=r.value:(n.mixins||(n.mixins=[])).push({data:function(){var n;return n={},n[e]=r.value,n}}):(r.get||r.set)&&((n.computed||(n.computed={}))[e]={get:r.get,set:r.set})}})),(n.mixins||(n.mixins=[])).push({data:function(){return g(this,e)}});var i=e.__decorators__;i&&(i.forEach((function(e){return e(n)})),delete e.__decorators__);var c=Object.getPrototypeOf(e.prototype),s=c instanceof r?c.constructor:r,u=s.extend(n);return h(u,e,s),a&&o(u,e),u}function h(e,n,t){Object.getOwnPropertyNames(n).forEach((function(r){if("prototype"!==r){var a=Object.getOwnPropertyDescriptor(e,r);if(!a||a.configurable){var o=Object.getOwnPropertyDescriptor(n,r);if(!u){if("cid"===r)return;var i=Object.getOwnPropertyDescriptor(t,r);if(!d(o.value)&&i&&i.value===o.value)return}Object.defineProperty(e,r,o)}}}))}function b(e){return"function"===typeof e?v(e):function(n){return v(n,e)}}b.registerHooks=function(e){p.push.apply(p,e)},n.default=b,n.createDecorator=l,n.mixins=f})),p=f(g),v=g.createDecorator;g.mixins;function h(e){return void 0===e&&(e={}),v((function(n,t){(n.props||(n.props={}))[t]=e}))}function b(e){return"string"===typeof e?e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e}function E(e){return Array.isArray(e)?e.map((function(e){return Array.isArray(e.children)&&e.children.length>0?E(e.children):e.text})).join(""):""}function m(e){if("string"===typeof e){var n=s()(e).indent||"\t";return e=l()(e,0,n),e.trim()}return e}function _(e){"object"===typeof e&&Object.keys(e).forEach((function(n){var t=e[n];o.a.registerLanguage(n,t)}))}var y={display:"inline !important","vertical-align":"middle"},O=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return Object(r["b"])(n,e),Object.defineProperty(n.prototype,"hasCode",{get:function(){return"string"===typeof this.code&&this.code.length>0},enumerable:!0,configurable:!0}),n.prototype.render=function(e){var n,t,r=this,a=r.hasCode,i=r.inline,c=r.auto,s=this.lang,u=a?this.code:E(this.$slots.default);i||(u=m(u));try{c?(n=o.a.highlightAuto(u),s=n.language,t=n.value):t=s?o.a.highlight(s,u).value:b(u)}catch(l){t=b(u),console.error(l)}return e(i?"span":"pre",[e("code",{class:["hljs"].concat(s?[s]:[]),style:i?y:{},domProps:{innerHTML:t}})])},Object(r["a"])([h(String)],n.prototype,"lang",void 0),Object(r["a"])([h({type:Boolean,default:!1})],n.prototype,"inline",void 0),Object(r["a"])([h(String)],n.prototype,"code",void 0),Object(r["a"])([h(Boolean)],n.prototype,"auto",void 0),n=Object(r["a"])([p({name:"HighlightCode"})],n),n}(i["a"]),w=function(e,n){void 0===n&&(n={languages:{}});var t=n.languages;_(t),e.component("highlight-code",O)};"undefined"!==typeof window&&window.Vue&&w(window.Vue);var R={install:w};n["a"]=R}}]);
//# sourceMappingURL=slides0~slides14.16dddd58.js.map