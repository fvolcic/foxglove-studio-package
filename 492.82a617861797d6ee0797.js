(()=>{"use strict";var L={21023:(v,b,w)=>{var y=w(63136).Z;function N(_){if(typeof _!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(_))}function C(_,e){for(var r="",t=0,s=-1,i=0,n,o=0;o<=_.length;++o){if(o<_.length)n=_.charCodeAt(o);else{if(n===47)break;n=47}if(n===47){if(!(s===o-1||i===1))if(s!==o-1&&i===2){if(r.length<2||t!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){l===-1?(r="",t=0):(r=r.slice(0,l),t=r.length-1-r.lastIndexOf("/")),s=o,i=0;continue}}else if(r.length===2||r.length===1){r="",t=0,s=o,i=0;continue}}e&&(r.length>0?r+="/..":r="..",t=2)}else r.length>0?r+="/"+_.slice(s+1,o):r=_.slice(s+1,o),t=o-s-1;s=o,i=0}else n===46&&i!==-1?++i:i=-1}return r}function O(_,e){var r=e.dir||e.root,t=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+t:r+_+t:t}var k={resolve:function(){for(var e="",r=!1,t,s=arguments.length-1;s>=-1&&!r;s--){var i;s>=0?i=arguments[s]:(t===void 0&&(t=y.cwd()),i=t),N(i),i.length!==0&&(e=i+"/"+e,r=i.charCodeAt(0)===47)}return e=C(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(N(e),e.length===0)return".";var r=e.charCodeAt(0)===47,t=e.charCodeAt(e.length-1)===47;return e=C(e,!r),e.length===0&&!r&&(e="."),e.length>0&&t&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return N(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,r=0;r<arguments.length;++r){var t=arguments[r];N(t),t.length>0&&(e===void 0?e=t:e+="/"+t)}return e===void 0?".":k.normalize(e)},relative:function(e,r){if(N(e),N(r),e===r||(e=k.resolve(e),r=k.resolve(r),e===r))return"";for(var t=1;t<e.length&&e.charCodeAt(t)===47;++t);for(var s=e.length,i=s-t,n=1;n<r.length&&r.charCodeAt(n)===47;++n);for(var o=r.length,l=o-n,p=i<l?i:l,m=-1,g=0;g<=p;++g){if(g===p){if(l>p){if(r.charCodeAt(n+g)===47)return r.slice(n+g+1);if(g===0)return r.slice(n+g)}else i>p&&(e.charCodeAt(t+g)===47?m=g:g===0&&(m=0));break}var P=e.charCodeAt(t+g),I=r.charCodeAt(n+g);if(P!==I)break;P===47&&(m=g)}var S="";for(g=t+m+1;g<=s;++g)(g===s||e.charCodeAt(g)===47)&&(S.length===0?S+="..":S+="/..");return S.length>0?S+r.slice(n+m):(n+=m,r.charCodeAt(n)===47&&++n,r.slice(n))},_makeLong:function(e){return e},dirname:function(e){if(N(e),e.length===0)return".";for(var r=e.charCodeAt(0),t=r===47,s=-1,i=!0,n=e.length-1;n>=1;--n)if(r=e.charCodeAt(n),r===47){if(!i){s=n;break}}else i=!1;return s===-1?t?"/":".":t&&s===1?"//":e.slice(0,s)},basename:function(e,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');N(e);var t=0,s=-1,i=!0,n;if(r!==void 0&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var o=r.length-1,l=-1;for(n=e.length-1;n>=0;--n){var p=e.charCodeAt(n);if(p===47){if(!i){t=n+1;break}}else l===-1&&(i=!1,l=n+1),o>=0&&(p===r.charCodeAt(o)?--o===-1&&(s=n):(o=-1,s=l))}return t===s?s=l:s===-1&&(s=e.length),e.slice(t,s)}else{for(n=e.length-1;n>=0;--n)if(e.charCodeAt(n)===47){if(!i){t=n+1;break}}else s===-1&&(i=!1,s=n+1);return s===-1?"":e.slice(t,s)}},extname:function(e){N(e);for(var r=-1,t=0,s=-1,i=!0,n=0,o=e.length-1;o>=0;--o){var l=e.charCodeAt(o);if(l===47){if(!i){t=o+1;break}continue}s===-1&&(i=!1,s=o+1),l===46?r===-1?r=o:n!==1&&(n=1):r!==-1&&(n=-1)}return r===-1||s===-1||n===0||n===1&&r===s-1&&r===t+1?"":e.slice(r,s)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return O("/",e)},parse:function(e){N(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return r;var t=e.charCodeAt(0),s=t===47,i;s?(r.root="/",i=1):i=0;for(var n=-1,o=0,l=-1,p=!0,m=e.length-1,g=0;m>=i;--m){if(t=e.charCodeAt(m),t===47){if(!p){o=m+1;break}continue}l===-1&&(p=!1,l=m+1),t===46?n===-1?n=m:g!==1&&(g=1):n!==-1&&(g=-1)}return n===-1||l===-1||g===0||g===1&&n===l-1&&n===o+1?l!==-1&&(o===0&&s?r.base=r.name=e.slice(1,l):r.base=r.name=e.slice(o,l)):(o===0&&s?(r.name=e.slice(1,n),r.base=e.slice(1,l)):(r.name=e.slice(o,n),r.base=e.slice(o,l)),r.ext=e.slice(n,l)),o>0?r.dir=e.slice(0,o-1):s&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};k.posix=k,v.exports=k},63136:(v,b,w)=>{w.d(b,{Z:()=>N});const N={nextTick:(C,...O)=>{queueMicrotask(()=>{C(...O)})},title:"browser",browser:!0,env:{},argv:[]}}},U={};function T(v){var b=U[v];if(b!==void 0)return b.exports;var w=U[v]={exports:{}};return L[v](w,w.exports,T),w.exports}T.n=v=>{var b=v&&v.__esModule?()=>v.default:()=>v;return T.d(b,{a:b}),b},T.d=(v,b)=>{for(var w in b)T.o(b,w)&&!T.o(v,w)&&Object.defineProperty(v,w,{enumerable:!0,get:b[w]})},T.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),T.o=(v,b)=>Object.prototype.hasOwnProperty.call(v,b);var F={};(()=>{var v=T(21023),b=T.n(v);const w={Hint:1,Info:2,Warning:4,Error:8},y={Typescript:"Typescript",DatatypeExtraction:"DatatypeExtraction",InputTopicsChecker:"InputTopicsChecker",OutputTopicChecker:"OutputTopicChecker",Runtime:"Runtime"},N={RUNTIME:1,DatatypeExtraction:{NO_DEFAULT_EXPORT:1,NON_FUNC_DEFAULT_EXPORT:2,NO_TYPE_RETURN:3,BAD_TYPE_RETURN:4,UNKNOWN_ERROR:5,NO_UNIONS:6,NO_FUNCTIONS:7,NO_CLASSES:8,NO_TYPE_LITERALS:9,NO_TUPLES:10,NO_INTERSECTION_TYPES:11,NO_TYPEOF:12,PREFER_ARRAY_LITERALS:13,STRICT_MARKERS_RETURN_TYPE:14,LIMITED_UNIONS:15,NO_NESTED_ANY:16,NO_MAPPED_TYPES:17,INVALID_PROPERTY:18,INVALID_INDEXED_ACCESS:19},InputTopicsChecker:{NO_TOPIC_AVAIL:1,NO_INPUTS_EXPORT:2,EMPTY_INPUTS_EXPORT:3,BAD_INPUTS_TYPE:4},OutputTopicChecker:{NO_OUTPUTS:1,NOT_UNIQUE:2,EXISTING_TOPIC:3}},C="/studio_script/";function O(){const{palette:{mode:c,text:a}}=useTheme();return{dark:{base00:"transparent",base0B:"#ffa657",base09:"#7ee787",base07:"#79c0ff",base08:"#ff7b72",base0D:"#79c0ff",base03:a.secondary},light:{base00:"transparent",base0B:"#953800",base09:"#116329",base07:"#0550ae",base08:"#cf222e",base0D:"#0550ae",base03:a.secondary}}[c]}const k="Tab";let _;const e=c=>{for(const a of c){if(typeof a=="function")return!0;if(typeof a=="object"&&a!=null){for(const f of Object.values(a))if(e([f]))return!0}}return!1},r=c=>{if(typeof c=="function")return`${c}`;if(typeof c=="object"&&c!=null){const a={...c};for(const[f,d]of Object.entries(c))a[f]=r(d);return a}return c},t=c=>c.map(r).map(a=>typeof a=="object"?JSON.stringify(a):a),s=(c,a)=>{const f=`${b().join(C,c)}.js`;for(const[d,u]of a.entries())if(f.endsWith(d)){const h={},E=A=>s(A,a);return new Function("exports","require",u)(h,E),h}throw new Error(`User node required unknown module: '${c}'`)},i=({nodeCode:c,projectCode:a})=>{const f=[],d=[];self.log=function(...u){if(e(u)){const h=t(u);throw new Error(`Cannot invoke log() with a function argument (registerNode) - log(${h.join(", ")})`)}f.push(...u.map(h=>({source:"registerNode",value:h})))};try{const u={},h=E=>s(E,a);return new Function("exports","require",c)(u,h),_=u.default,{error:void 0,userNodeLogs:f,userNodeDiagnostics:d}}catch(u){const h=u.toString();return{error:h.length>0?h:"Unknown error encountered registering this node.",userNodeLogs:f,userNodeDiagnostics:d}}},n=({message:c,globalVariables:a})=>{const f=[],d=[];self.log=function(...u){if(e(u)){const h=t(u);throw new Error(`Cannot invoke log() with a function argument (processMessage) - log(${h.join(", ")})`)}f.push(...u.map(h=>({source:"processMessage",value:h})))};try{return{message:_(c,a),error:void 0,userNodeLogs:f,userNodeDiagnostics:d}}catch(u){const h=u.toString(),E={source:y.Runtime,severity:w.Error,message:h.length>0?h:"Unknown error encountered running this node.",code:N.RUNTIME};return{message:void 0,error:void 0,userNodeLogs:f,userNodeDiagnostics:[E]}}},o="$$RESPONSE",l="$$ERROR";function p(){const c={onmessage:void 0,postMessage(f,d){const u=new MessageEvent("message",{data:f});a.onmessage&&a.onmessage(u)},terminate:()=>{}},a={onmessage:void 0,postMessage(f,d){const u=new MessageEvent("message",{data:f});c.onmessage&&c.onmessage(u)},terminate:()=>{}};return{local:c,remote:a}}class m{constructor(a){if(this._messageId=0,this._pendingCallbacks={},this._receivers=new Map,this._onChannelMessage=f=>{const{id:d,topic:u,data:h}=f.data;if(u===o){this._pendingCallbacks[d]?.(f.data),delete this._pendingCallbacks[d];return}new Promise(E=>{const A=this._receivers.get(u);if(!A)throw new Error(`no receiver registered for ${u}`);E(A(h))}).then(E=>{if(!E)return this._channel.postMessage({topic:o,id:d});const A=E[m.transferables];delete E[m.transferables];const D={topic:o,id:d,data:E};this._channel.postMessage(D,A)}).catch(E=>{const A={topic:o,id:d,data:{[l]:!0,name:E.name,message:E.message,stack:E.stack}};this._channel.postMessage(A)})},this._channel=a,this._channel.onmessage)throw new Error("channel.onmessage is already set. Can only use one Rpc instance per channel.");this._channel.onmessage=this._onChannelMessage}terminate(){for(const[a,f]of Object.entries(this._pendingCallbacks))f({topic:o,id:a,data:{[l]:!0,name:"Error",message:"Rpc terminated",stack:new Error().stack}})}async send(a,f,d){const u=this._messageId++,h={topic:a,id:u,data:f},E=new Promise((A,D)=>{this._pendingCallbacks[u]=R=>{if(R.data?.[l]!=null){const M=new Error(R.data.message);M.name=R.data.name,M.stack=R.data.stack,D(M)}else A(R.data)}});return this._channel.postMessage(h,d),await E}receive(a,f){if(this._receivers.has(a))throw new Error(`Receiver already registered for topic: ${a}`);this._receivers.set(a,f)}}m.transferables="$$TRANSFERABLES";const g=()=>typeof T.g.postMessage<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,P=()=>typeof SharedWorkerGlobalScope<"u"&&self instanceof SharedWorkerGlobalScope,I=c=>{const a=typeof fetch<"u"&&fetch("data:test").then(()=>!0).catch(()=>!1);return async(...f)=>{if(await a)throw new Error("Content security policy too loose.");return c(...f)}};let S=[];if(T.g.onerror=c=>{S.push(c.error.toString())},T.g.onunhandledrejection=c=>{S.push(String(c.reason instanceof Error?c.reason.message:c.reason))},!P())throw new Error("Not in a SharedWorker.");T.g.onconnect=c=>{const a=c.ports[0],f=new m(a);S.forEach(async d=>await f.send("error",d)),S=[],T.g.onerror=d=>{f.send("error",d.error.toString())},T.g.onunhandledrejection=d=>{f.send("error",String(d.reason instanceof Error?d.reason.message:d.reason))},f.receive("registerNode",I(i)),f.receive("processMessage",n),a.start()}})()})();

//# sourceMappingURL=492.82a617861797d6ee0797.js.map