(self.webpackChunk=self.webpackChunk||[]).push([[363],{11037:(ye,ge,H)=>{var fe="../../node_modules/@foxglove/wasm-bz2/wasm/module.js",Se="../../node_modules/@foxglove/wasm-bz2/wasm",k=H(63136).Z,Pe=(()=>{var ne=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return ne=ne||fe,function(t){t=t||{};var t=typeof t<"u"?t:{},he,te;t.ready=new Promise(function(e,r){he=e,te=r}),t.locateFile=function(e,r){return q?r+e:e.endsWith(".wasm")?H(9942):e};var me=Object.assign({},t),ce=[],be="./this.program",se=(e,r)=>{throw r},$=typeof window=="object",Y=typeof importScripts=="function",q=typeof k=="object"&&typeof k.versions=="object"&&typeof k.versions.node=="string",Ce=!$&&!q&&!Y,x="";function Re(e){return t.locateFile?t.locateFile(e,x):x+e}var le,L,ie,Oe;function xe(e){if(e instanceof Ie)return;z("exiting due to exception: "+e)}if(q){Y?x=H(21023).dirname(x)+"/":x=Se+"/";var de,_e;de=H(62891),_e=H(21023),le=(e,r)=>(e=_e.normalize(e),de.readFileSync(e,r?void 0:"utf8")),ie=e=>{var r=le(e,!0);return r.buffer||(r=new Uint8Array(r)),r},L=(e,r,n)=>{e=_e.normalize(e),de.readFile(e,function(i,f){i?n(i):r(f.buffer)})},k.argv.length>1&&(be=k.argv[1].replace(/\\/g,"/")),ce=k.argv.slice(2),k.on("uncaughtException",function(e){if(!(e instanceof Ie))throw e}),k.on("unhandledRejection",function(e){throw e}),se=(e,r)=>{if(er())throw k.exitCode=e,r;xe(r),k.exit(e)},t.inspect=function(){return"[Emscripten Module object]"}}else($||Y)&&(Y?x=self.location.href:typeof document<"u"&&document.currentScript&&(x=document.currentScript.src),ne&&(x=ne),x.indexOf("blob:")!==0?x=x.substr(0,x.replace(/[?#].*/,"").lastIndexOf("/")+1):x="",le=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),r.responseText},Y&&(ie=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}),L=(e,r,n)=>{var i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="arraybuffer",i.onload=()=>{if(i.status==200||i.status==0&&i.response){r(i.response);return}n()},i.onerror=n,i.send(null)},Oe=e=>document.title=e);var ke=t.print||console.log.bind(console),z=t.printErr||console.warn.bind(console);Object.assign(t,me),me=null,t.arguments&&(ce=t.arguments),t.thisProgram&&(be=t.thisProgram),t.quit&&(se=t.quit);var Ke=16,je=4;function Xe(e){switch(e){case"i1":case"i8":case"u8":return 1;case"i16":case"u16":return 2;case"i32":case"u32":return 4;case"i64":case"u64":return 8;case"float":return 4;case"double":return 8;default:{if(e[e.length-1]==="*")return je;if(e[0]==="i"){const r=Number(e.substr(1));return v(r%8===0,"getNativeTypeSize invalid bits "+r+", type "+e),r/8}return 0}}}var a;t.wasmBinary&&(a=t.wasmBinary);var o=t.noExitRuntime||!0;typeof WebAssembly!="object"&&ee("no native wasm support detected");var u,c=!1,p;function v(e,r){e||ee(r)}var y=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function m(e,r,n){for(var i=r+n,f=r;e[f]&&!(f>=i);)++f;if(f-r>16&&e.buffer&&y)return y.decode(e.subarray(r,f));for(var d="";r<f;){var l=e[r++];if(!(l&128)){d+=String.fromCharCode(l);continue}var s=e[r++]&63;if((l&224)==192){d+=String.fromCharCode((l&31)<<6|s);continue}var _=e[r++]&63;if((l&240)==224?l=(l&15)<<12|s<<6|_:l=(l&7)<<18|s<<12|_<<6|e[r++]&63,l<65536)d+=String.fromCharCode(l);else{var g=l-65536;d+=String.fromCharCode(55296|g>>10,56320|g&1023)}}return d}function C(e,r){return e?m(E,e,r):""}function h(e,r,n,i){if(!(i>0))return 0;for(var f=n,d=n+i-1,l=0;l<e.length;++l){var s=e.charCodeAt(l);if(s>=55296&&s<=57343){var _=e.charCodeAt(++l);s=65536+((s&1023)<<10)|_&1023}if(s<=127){if(n>=d)break;r[n++]=s}else if(s<=2047){if(n+1>=d)break;r[n++]=192|s>>6,r[n++]=128|s&63}else if(s<=65535){if(n+2>=d)break;r[n++]=224|s>>12,r[n++]=128|s>>6&63,r[n++]=128|s&63}else{if(n+3>=d)break;r[n++]=240|s>>18,r[n++]=128|s>>12&63,r[n++]=128|s>>6&63,r[n++]=128|s&63}}return r[n]=0,n-f}function F(e,r,n){return h(e,E,r,n)}function P(e){for(var r=0,n=0;n<e.length;++n){var i=e.charCodeAt(n);i<=127?r++:i<=2047?r+=2:i>=55296&&i<=57343?(r+=4,++n):r+=3}return r}var S,j,R,E,O,B,D,U,we,Fe;function Ye(e){j=e,t.HEAP8=R=new Int8Array(e),t.HEAP16=O=new Int16Array(e),t.HEAP32=D=new Int32Array(e),t.HEAPU8=E=new Uint8Array(e),t.HEAPU16=B=new Uint16Array(e),t.HEAPU32=U=new Uint32Array(e),t.HEAPF32=we=new Float32Array(e),t.HEAPF64=Fe=new Float64Array(e)}var Xn=1048576,Yn=t.INITIAL_MEMORY||2097152,qe,Je=[],$e=[],qn=[],Qe=[],Tr=!1;function er(){return o}function Er(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Pr(t.preRun.shift());We(Je)}function Ar(){Tr=!0,We($e)}function Sr(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)Rr(t.postRun.shift());We(Qe)}function Pr(e){Je.unshift(e)}function Cr(e){$e.unshift(e)}function Jn(e){}function Rr(e){Qe.unshift(e)}var Q=0,De=null,ve=null;function $n(e){return e}function Or(e){Q++,t.monitorRunDependencies&&t.monitorRunDependencies(Q)}function xr(e){if(Q--,t.monitorRunDependencies&&t.monitorRunDependencies(Q),Q==0&&(De!==null&&(clearInterval(De),De=null),ve)){var r=ve;ve=null,r()}}function ee(e){t.onAbort&&t.onAbort(e),e="Aborted("+e+")",z(e),c=!0,p=1,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw te(r),r}var kr="data:application/octet-stream;base64,";function rr(e){return e.startsWith(kr)}function nr(e){return e.startsWith("file://")}var I;I="module.wasm",rr(I)||(I=Re(I));function tr(e){try{if(e==I&&a)return new Uint8Array(a);if(ie)return ie(e);throw"both async and sync fetching of the wasm failed"}catch(r){ee(r)}}function jr(){if(!a&&($||Y)){if(typeof fetch=="function"&&!nr(I))return fetch(I,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+I+"'";return e.arrayBuffer()}).catch(function(){return tr(I)});if(L)return new Promise(function(e,r){L(I,function(n){e(new Uint8Array(n))},r)})}return Promise.resolve().then(function(){return tr(I)})}function Dr(){var e={env:hr,wasi_snapshot_preview1:hr};function r(l,s){var _=l.exports;t.asm=_,u=t.asm.memory,Ye(u.buffer),qe=t.asm.__indirect_function_table,Cr(t.asm.__wasm_call_ctors),xr("wasm-instantiate")}Or("wasm-instantiate");function n(l){r(l.instance)}function i(l){return jr().then(function(s){return WebAssembly.instantiate(s,e)}).then(function(s){return s}).then(l,function(s){z("failed to asynchronously prepare wasm: "+s),ee(s)})}function f(){return!a&&typeof WebAssembly.instantiateStreaming=="function"&&!rr(I)&&!nr(I)&&!q&&typeof fetch=="function"?fetch(I,{credentials:"same-origin"}).then(function(l){var s=WebAssembly.instantiateStreaming(l,e);return s.then(n,function(_){return z("wasm streaming compile failed: "+_),z("falling back to ArrayBuffer instantiation"),i(n)})}):i(n)}if(t.instantiateWasm)try{var d=t.instantiateWasm(e,r);return d}catch(l){z("Module.instantiateWasm callback failed with error: "+l),te(l)}return f().catch(te),{}}var ae,Ue,Qn={};function Ie(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function We(e){for(;e.length>0;)e.shift()(t)}function Ur(e){var r=ze(),n=e();return Ze(r),n}function oe(e){return oe.recursionGuard=(oe.recursionGuard|0)+1,oe.recursionGuard>1?e:Ur(function(){try{var r=e;r.startsWith("__Z")&&(r=r.substr(1));var n=P(r)+1,i=pe(n);F(r,i,n);var f=pe(4),d=br(i,0,0,f);if(D[f>>2]===0&&d)return C(d)}catch{}finally{G(d),oe.recursionGuard<2&&--oe.recursionGuard}return e})}function et(e,r="i8"){switch(r.endsWith("*")&&(r="*"),r){case"i1":return R[e>>0];case"i8":return R[e>>0];case"i16":return O[e>>1];case"i32":return D[e>>2];case"i64":return D[e>>2];case"float":return we[e>>2];case"double":return Fe[e>>3];case"*":return U[e>>2];default:ee("invalid type for getValue: "+r)}return null}function rt(e,r,n="i8"){switch(n.endsWith("*")&&(n="*"),n){case"i1":R[e>>0]=r;break;case"i8":R[e>>0]=r;break;case"i16":O[e>>1]=r;break;case"i32":D[e>>2]=r;break;case"i64":Ue=[r>>>0,(ae=r,+Math.abs(ae)>=1?ae>0?(Math.min(+Math.floor(ae/4294967296),4294967295)|0)>>>0:~~+Math.ceil((ae-+(~~ae>>>0))/4294967296)>>>0:0)],D[e>>2]=Ue[0],D[e+4>>2]=Ue[1];break;case"float":we[e>>2]=r;break;case"double":Fe[e>>3]=r;break;case"*":U[e>>2]=r;break;default:ee("invalid type for setValue: "+n)}}function Ir(){var e=new Error;if(!e.stack){try{throw new Error}catch(r){e=r}if(!e.stack)return"(no stack trace available)"}return e.stack.toString()}function Wr(e){var r=/\b_Z[\w\d_]+/g;return e.replace(r,function(n){var i=oe(n);return n===i?n:i+" ["+n+"]"})}function nt(){var e=Ir();return t.extraStackTrace&&(e+=`
`+t.extraStackTrace()),Wr(e)}function Mr(e,r,n,i,f){}function Me(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}function Vr(){for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);ir=e}var ir=void 0;function M(e){for(var r="",n=e;E[n];)r+=ir[E[n++]];return r}var ue={},re={},Te={},Nr=48,Hr=57;function ar(e){if(e===void 0)return"_unknown";e=e.replace(/[^a-zA-Z0-9_]/g,"$");var r=e.charCodeAt(0);return r>=Nr&&r<=Hr?"_"+e:e}function or(e,r){return e=ar(e),new Function("body","return function "+e+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(r)}function Ve(e,r){var n=or(r,function(i){this.name=r,this.message=i;var f=new Error(i).stack;f!==void 0&&(this.stack=this.toString()+`
`+f.replace(/^Error(:[^\n]*)?\n/,""))});return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},n}var ur=void 0;function W(e){throw new ur(e)}var fr=void 0;function cr(e){throw new fr(e)}function Lr(e,r,n){e.forEach(function(s){Te[s]=r});function i(s){var _=n(s);_.length!==e.length&&cr("Mismatched type converter count");for(var g=0;g<e.length;++g)Z(e[g],_[g])}var f=new Array(r.length),d=[],l=0;r.forEach((s,_)=>{re.hasOwnProperty(s)?f[_]=re[s]:(d.push(s),ue.hasOwnProperty(s)||(ue[s]=[]),ue[s].push(()=>{f[_]=re[s],++l,l===d.length&&i(f)}))}),d.length===0&&i(f)}function Z(e,r,n={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var i=r.name;if(e||W('type "'+i+'" must have a positive integer typeid pointer'),re.hasOwnProperty(e)){if(n.ignoreDuplicateRegistrations)return;W("Cannot register type '"+i+"' twice")}if(re[e]=r,delete Te[e],ue.hasOwnProperty(e)){var f=ue[e];delete ue[e],f.forEach(d=>d())}}function Br(e,r,n,i,f){var d=Me(n);r=M(r),Z(e,{name:r,fromWireType:function(l){return!!l},toWireType:function(l,s){return s?i:f},argPackAdvance:8,readValueFromPointer:function(l){var s;if(n===1)s=R;else if(n===2)s=O;else if(n===4)s=D;else throw new TypeError("Unknown boolean type size: "+r);return this.fromWireType(s[l>>d])},destructorFunction:null})}var Ne=[],N=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function sr(e){e>4&&--N[e].refcount===0&&(N[e]=void 0,Ne.push(e))}function Gr(){for(var e=0,r=5;r<N.length;++r)N[r]!==void 0&&++e;return e}function zr(){for(var e=5;e<N.length;++e)if(N[e]!==void 0)return N[e];return null}function Zr(){t.count_emval_handles=Gr,t.get_first_emval=zr}var J={toValue:e=>(e||W("Cannot use deleted val. handle = "+e),N[e].value),toHandle:e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var r=Ne.length?Ne.pop():N.length;return N[r]={refcount:1,value:e},r}}}};function He(e){return this.fromWireType(D[e>>2])}function Kr(e,r){r=M(r),Z(e,{name:r,fromWireType:function(n){var i=J.toValue(n);return sr(n),i},toWireType:function(n,i){return J.toHandle(i)},argPackAdvance:8,readValueFromPointer:He,destructorFunction:null})}function tt(e){if(e===null)return"null";var r=typeof e;return r==="object"||r==="array"||r==="function"?e.toString():""+e}function Xr(e,r){switch(r){case 2:return function(n){return this.fromWireType(we[n>>2])};case 3:return function(n){return this.fromWireType(Fe[n>>3])};default:throw new TypeError("Unknown float type: "+e)}}function Yr(e,r,n){var i=Me(n);r=M(r),Z(e,{name:r,fromWireType:function(f){return f},toWireType:function(f,d){return d},argPackAdvance:8,readValueFromPointer:Xr(r,i),destructorFunction:null})}function qr(e,r){if(!(e instanceof Function))throw new TypeError("new_ called with constructor type "+typeof e+" which is not a function");var n=or(e.name||"unknownFunctionName",function(){});n.prototype=e.prototype;var i=new n,f=e.apply(i,r);return f instanceof Object?f:i}function Jr(e){for(;e.length;){var r=e.pop(),n=e.pop();n(r)}}function $r(e,r,n,i,f){var d=r.length;d<2&&W("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var l=r[1]!==null&&n!==null,s=!1,_=1;_<r.length;++_)if(r[_]!==null&&r[_].destructorFunction===void 0){s=!0;break}for(var g=r[0].name!=="void",T="",b="",_=0;_<d-2;++_)T+=(_!==0?", ":"")+"arg"+_,b+=(_!==0?", ":"")+"arg"+_+"Wired";var w="return function "+ar(e)+"("+T+`) {
if (arguments.length !== `+(d-2)+`) {
throwBindingError('function `+e+" called with ' + arguments.length + ' arguments, expected "+(d-2)+` args!');
}
`;s&&(w+=`var destructors = [];
`);var K=s?"destructors":"null",A=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],V=[W,i,f,Jr,r[0],r[1]];l&&(w+="var thisWired = classParam.toWireType("+K+`, this);
`);for(var _=0;_<d-2;++_)w+="var arg"+_+"Wired = argType"+_+".toWireType("+K+", arg"+_+"); // "+r[_+2].name+`
`,A.push("argType"+_),V.push(r[_+2]);if(l&&(b="thisWired"+(b.length>0?", ":"")+b),w+=(g?"var rv = ":"")+"invoker(fn"+(b.length>0?", ":"")+b+`);
`,s)w+=`runDestructors(destructors);
`;else for(var _=l?1:2;_<r.length;++_){var X=_===1?"thisWired":"arg"+(_-2)+"Wired";r[_].destructorFunction!==null&&(w+=X+"_dtor("+X+"); // "+r[_].name+`
`,A.push(X+"_dtor"),V.push(r[_].destructorFunction))}g&&(w+=`var ret = retType.fromWireType(rv);
return ret;
`),w+=`}
`,A.push(w);var Kn=qr(Function,A).apply(null,V);return Kn}function Qr(e,r,n){if(e[r].overloadTable===void 0){var i=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||W("Function '"+n+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[r].overloadTable+")!"),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[i.argCount]=i}}function en(e,r,n){t.hasOwnProperty(e)?((n===void 0||t[e].overloadTable!==void 0&&t[e].overloadTable[n]!==void 0)&&W("Cannot register public name '"+e+"' twice"),Qr(t,e,e),t.hasOwnProperty(n)&&W("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),t[e].overloadTable[n]=r):(t[e]=r,n!==void 0&&(t[e].numArguments=n))}function rn(e,r){for(var n=[],i=0;i<e;i++)n.push(U[r+i*4>>2]);return n}function nn(e,r,n){t.hasOwnProperty(e)||cr("Replacing nonexistant public symbol"),t[e].overloadTable!==void 0&&n!==void 0?t[e].overloadTable[n]=r:(t[e]=r,t[e].argCount=n)}function tn(e,r,n){var i=t["dynCall_"+e];return n&&n.length?i.apply(null,[r].concat(n)):i.call(null,r)}var Ee=[];function lr(e){var r=Ee[e];return r||(e>=Ee.length&&(Ee.length=e+1),Ee[e]=r=qe.get(e)),r}function an(e,r,n){if(e.includes("j"))return tn(e,r,n);var i=lr(r).apply(null,n);return i}function on(e,r){var n=[];return function(){return n.length=0,Object.assign(n,arguments),an(e,r,n)}}function un(e,r){e=M(e);function n(){return e.includes("j")?on(e,r):lr(r)}var i=n();return typeof i!="function"&&W("unknown function pointer with signature "+e+": "+r),i}var dr=void 0;function _r(e){var r=mr(e),n=M(r);return G(r),n}function fn(e,r){var n=[],i={};function f(d){if(!i[d]&&!re[d]){if(Te[d]){Te[d].forEach(f);return}n.push(d),i[d]=!0}}throw r.forEach(f),new dr(e+": "+n.map(_r).join([", "]))}function cn(e,r,n,i,f,d){var l=rn(r,n);e=M(e),f=un(i,f),en(e,function(){fn("Cannot call "+e+" due to unbound types",l)},r-1),Lr([],l,function(s){var _=[s[0],null].concat(s.slice(1));return nn(e,$r(e,_,null,f,d),r-1),[]})}function sn(e,r,n){switch(r){case 0:return n?function(f){return R[f]}:function(f){return E[f]};case 1:return n?function(f){return O[f>>1]}:function(f){return B[f>>1]};case 2:return n?function(f){return D[f>>2]}:function(f){return U[f>>2]};default:throw new TypeError("Unknown integer type: "+e)}}function ln(e,r,n,i,f){r=M(r),f===-1&&(f=4294967295);var d=Me(n),l=b=>b;if(i===0){var s=32-8*n;l=b=>b<<s>>>s}var _=r.includes("unsigned"),g=(b,w)=>{},T;_?T=function(b,w){return g(w,this.name),w>>>0}:T=function(b,w){return g(w,this.name),w},Z(e,{name:r,fromWireType:l,toWireType:T,argPackAdvance:8,readValueFromPointer:sn(r,d,i!==0),destructorFunction:null})}function dn(e,r,n){var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],f=i[r];function d(l){l=l>>2;var s=U,_=s[l],g=s[l+1];return new f(j,g,_)}n=M(n),Z(e,{name:n,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{ignoreDuplicateRegistrations:!0})}function _n(e,r){r=M(r);var n=r==="std::string";Z(e,{name:r,fromWireType:function(i){var f=U[i>>2],d=i+4,l;if(n)for(var s=d,_=0;_<=f;++_){var g=d+_;if(_==f||E[g]==0){var T=g-s,b=C(s,T);l===void 0?l=b:(l+=String.fromCharCode(0),l+=b),s=g+1}}else{for(var w=new Array(f),_=0;_<f;++_)w[_]=String.fromCharCode(E[d+_]);l=w.join("")}return G(i),l},toWireType:function(i,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var d,l=typeof f=="string";l||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||W("Cannot pass non-string to std::string"),n&&l?d=P(f):d=f.length;var s=Ge(4+d+1),_=s+4;if(U[s>>2]=d,n&&l)F(f,_,d+1);else if(l)for(var g=0;g<d;++g){var T=f.charCodeAt(g);T>255&&(G(_),W("String has UTF-16 code units that do not fit in 8 bits")),E[_+g]=T}else for(var g=0;g<d;++g)E[_+g]=f[g];return i!==null&&i.push(G,s),s},argPackAdvance:8,readValueFromPointer:He,destructorFunction:function(i){G(i)}})}var vr=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function vn(e,r){for(var n=e,i=n>>1,f=i+r/2;!(i>=f)&&B[i];)++i;if(n=i<<1,n-e>32&&vr)return vr.decode(E.subarray(e,n));for(var d="",l=0;!(l>=r/2);++l){var s=O[e+l*2>>1];if(s==0)break;d+=String.fromCharCode(s)}return d}function pn(e,r,n){if(n===void 0&&(n=2147483647),n<2)return 0;n-=2;for(var i=r,f=n<e.length*2?n/2:e.length,d=0;d<f;++d){var l=e.charCodeAt(d);O[r>>1]=l,r+=2}return O[r>>1]=0,r-i}function yn(e){return e.length*2}function gn(e,r){for(var n=0,i="";!(n>=r/4);){var f=D[e+n*4>>2];if(f==0)break;if(++n,f>=65536){var d=f-65536;i+=String.fromCharCode(55296|d>>10,56320|d&1023)}else i+=String.fromCharCode(f)}return i}function hn(e,r,n){if(n===void 0&&(n=2147483647),n<4)return 0;for(var i=r,f=i+n-4,d=0;d<e.length;++d){var l=e.charCodeAt(d);if(l>=55296&&l<=57343){var s=e.charCodeAt(++d);l=65536+((l&1023)<<10)|s&1023}if(D[r>>2]=l,r+=4,r+4>f)break}return D[r>>2]=0,r-i}function mn(e){for(var r=0,n=0;n<e.length;++n){var i=e.charCodeAt(n);i>=55296&&i<=57343&&++n,r+=4}return r}function bn(e,r,n){n=M(n);var i,f,d,l,s;r===2?(i=vn,f=pn,l=yn,d=()=>B,s=1):r===4&&(i=gn,f=hn,l=mn,d=()=>U,s=2),Z(e,{name:n,fromWireType:function(_){for(var g=U[_>>2],T=d(),b,w=_+4,K=0;K<=g;++K){var A=_+4+K*r;if(K==g||T[A>>s]==0){var V=A-w,X=i(w,V);b===void 0?b=X:(b+=String.fromCharCode(0),b+=X),w=A+r}}return G(_),b},toWireType:function(_,g){typeof g!="string"&&W("Cannot pass non-string to C++ string type "+n);var T=l(g),b=Ge(4+T+r);return U[b>>2]=T>>s,f(g,b+4,T+r),_!==null&&_.push(G,b),b},argPackAdvance:8,readValueFromPointer:He,destructorFunction:function(_){G(_)}})}function wn(e,r){r=M(r),Z(e,{isVoid:!0,name:r,argPackAdvance:0,fromWireType:function(){},toWireType:function(n,i){}})}function Fn(e){e>4&&(N[e].refcount+=1)}var Tn={};function En(e){var r=Tn[e];return r===void 0?M(e):r}function An(e){return J.toHandle(En(e))}function Sn(){return J.toHandle({})}function Pn(e,r,n){e=J.toValue(e),r=J.toValue(r),n=J.toValue(n),e[r]=n}function Cn(e,r){var n=re[e];return n===void 0&&W(r+" has unknown type "+_r(e)),n}function Rn(e,r){e=Cn(e,"_emval_take_value");var n=e.readValueFromPointer(r);return J.toHandle(n)}function On(){ee("")}function xn(e,r,n){E.copyWithin(e,r,r+n)}function kn(){return 2147483648}function jn(e){try{return u.grow(e-j.byteLength+65535>>>16),Ye(u.buffer),1}catch{}}function Dn(e){var r=E.length;e=e>>>0;var n=kn();if(e>n)return!1;let i=(_,g)=>_+(g-_%g)%g;for(var f=1;f<=4;f*=2){var d=r*(1+.2/f);d=Math.min(d,e+100663296);var l=Math.min(n,i(Math.max(e,d),65536)),s=jn(l);if(s)return!0}return!1}var pr={varargs:void 0,get:function(){pr.varargs+=4;var e=D[pr.varargs-4>>2];return e},getStr:function(e){var r=C(e);return r}};function Un(e){p=e,er()||(t.onExit&&t.onExit(e),c=!0),se(e,new Ie(e))}function In(e,r){p=e,Un(e)}var Wn=In;function Mn(e){return 52}function it(e,r){return r+2097152>>>0<4194305-!!e?(e>>>0)+r*4294967296:NaN}function Vn(e,r,n,i,f){return 70}var Le=[null,[],[]];function Be(e,r){var n=Le[e];r===0||r===10?((e===1?ke:z)(m(n,0)),n.length=0):n.push(r)}function at(){Le[1].length&&Be(1,10),Le[2].length&&Be(2,10)}function Nn(e,r,n,i){for(var f=0,d=0;d<n;d++){var l=U[r>>2],s=U[r+4>>2];r+=8;for(var _=0;_<s;_++)Be(e,E[l+_]);f+=s}return U[i>>2]=f,0}function yr(e){var r=t["_"+e];return r}function Hn(e,r){R.set(e,r)}function gr(e,r,n,i,f){var d={string:A=>{var V=0;if(A!=null&&A!==0){var X=(A.length<<2)+1;V=pe(X),F(A,V,X)}return V},array:A=>{var V=pe(A.length);return Hn(A,V),V}};function l(A){return r==="string"?C(A):r==="boolean"?Boolean(A):A}var s=yr(e),_=[],g=0;if(i)for(var T=0;T<i.length;T++){var b=d[n[T]];b?(g===0&&(g=ze()),_[T]=b(i[T])):_[T]=i[T]}var w=s.apply(null,_);function K(A){return g!==0&&Ze(g),l(A)}return w=K(w),w}function Ln(e,r,n,i){n=n||[];var f=n.every(l=>l==="number"||l==="boolean"),d=r!=="string";return d&&f&&!i?yr(e):function(){return gr(e,r,n,arguments,i)}}Vr(),ur=t.BindingError=Ve(Error,"BindingError"),fr=t.InternalError=Ve(Error,"InternalError"),Zr(),dr=t.UnboundTypeError=Ve(Error,"UnboundTypeError");var ot=!1,hr={_embind_register_bigint:Mr,_embind_register_bool:Br,_embind_register_emval:Kr,_embind_register_float:Yr,_embind_register_function:cn,_embind_register_integer:ln,_embind_register_memory_view:dn,_embind_register_std_string:_n,_embind_register_std_wstring:bn,_embind_register_void:wn,_emval_decref:sr,_emval_incref:Fn,_emval_new_cstring:An,_emval_new_object:Sn,_emval_set_property:Pn,_emval_take_value:Rn,abort:On,emscripten_memcpy_big:xn,emscripten_resize_heap:Dn,exit:Wn,fd_close:Mn,fd_seek:Vn,fd_write:Nn},ut=Dr(),Bn=t.___wasm_call_ctors=function(){return(Bn=t.___wasm_call_ctors=t.asm.__wasm_call_ctors).apply(null,arguments)},Ge=t._malloc=function(){return(Ge=t._malloc=t.asm.malloc).apply(null,arguments)},G=t._free=function(){return(G=t._free=t.asm.free).apply(null,arguments)},mr=t.___getTypeName=function(){return(mr=t.___getTypeName=t.asm.__getTypeName).apply(null,arguments)},Gn=t.__embind_initialize_bindings=function(){return(Gn=t.__embind_initialize_bindings=t.asm._embind_initialize_bindings).apply(null,arguments)},zn=t.___errno_location=function(){return(zn=t.___errno_location=t.asm.__errno_location).apply(null,arguments)},ze=t.stackSave=function(){return(ze=t.stackSave=t.asm.stackSave).apply(null,arguments)},Ze=t.stackRestore=function(){return(Ze=t.stackRestore=t.asm.stackRestore).apply(null,arguments)},pe=t.stackAlloc=function(){return(pe=t.stackAlloc=t.asm.stackAlloc).apply(null,arguments)},br=t.___cxa_demangle=function(){return(br=t.___cxa_demangle=t.asm.__cxa_demangle).apply(null,arguments)},Zn=t.dynCall_jiji=function(){return(Zn=t.dynCall_jiji=t.asm.dynCall_jiji).apply(null,arguments)};t.ccall=gr,t.cwrap=Ln;var Ae;ve=function e(){Ae||wr(),Ae||(ve=e)};function wr(e){if(e=e||ce,Q>0||(Er(),Q>0))return;function r(){Ae||(Ae=!0,t.calledRun=!0,!c&&(Ar(),he(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),Sr()))}t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),r()},1)):r()}if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return wr(),t.ready}})();ye.exports=Pe},5163:(ye,ge,H)=>{"use strict";H.r(ge),H.d(ge,{__assign:()=>k,__asyncDelegator:()=>Oe,__asyncGenerator:()=>ie,__asyncValues:()=>xe,__await:()=>L,__awaiter:()=>be,__classPrivateFieldGet:()=>Ke,__classPrivateFieldIn:()=>Xe,__classPrivateFieldSet:()=>je,__createBinding:()=>$,__decorate:()=>ne,__esDecorate:()=>t,__exportStar:()=>Y,__extends:()=>Se,__generator:()=>se,__importDefault:()=>z,__importStar:()=>ke,__makeTemplateObject:()=>de,__metadata:()=>ce,__param:()=>Fr,__propKey:()=>te,__read:()=>Ce,__rest:()=>Pe,__runInitializers:()=>he,__setFunctionName:()=>me,__spread:()=>x,__spreadArray:()=>le,__spreadArrays:()=>Re,__values:()=>q});var fe=function(a,o){return fe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,c){u.__proto__=c}||function(u,c){for(var p in c)Object.prototype.hasOwnProperty.call(c,p)&&(u[p]=c[p])},fe(a,o)};function Se(a,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");fe(a,o);function u(){this.constructor=a}a.prototype=o===null?Object.create(o):(u.prototype=o.prototype,new u)}var k=function(){return k=Object.assign||function(o){for(var u,c=1,p=arguments.length;c<p;c++){u=arguments[c];for(var v in u)Object.prototype.hasOwnProperty.call(u,v)&&(o[v]=u[v])}return o},k.apply(this,arguments)};function Pe(a,o){var u={};for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&o.indexOf(c)<0&&(u[c]=a[c]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,c=Object.getOwnPropertySymbols(a);p<c.length;p++)o.indexOf(c[p])<0&&Object.prototype.propertyIsEnumerable.call(a,c[p])&&(u[c[p]]=a[c[p]]);return u}function ne(a,o,u,c){var p=arguments.length,v=p<3?o:c===null?c=Object.getOwnPropertyDescriptor(o,u):c,y;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")v=Reflect.decorate(a,o,u,c);else for(var m=a.length-1;m>=0;m--)(y=a[m])&&(v=(p<3?y(v):p>3?y(o,u,v):y(o,u))||v);return p>3&&v&&Object.defineProperty(o,u,v),v}function Fr(a,o){return function(u,c){o(u,c,a)}}function t(a,o,u,c,p,v){function y(B){if(B!==void 0&&typeof B!="function")throw new TypeError("Function expected");return B}for(var m=c.kind,C=m==="getter"?"get":m==="setter"?"set":"value",h=!o&&a?c.static?a:a.prototype:null,F=o||(h?Object.getOwnPropertyDescriptor(h,c.name):{}),P,S=!1,j=u.length-1;j>=0;j--){var R={};for(var E in c)R[E]=E==="access"?{}:c[E];for(var E in c.access)R.access[E]=c.access[E];R.addInitializer=function(B){if(S)throw new TypeError("Cannot add initializers after decoration has completed");v.push(y(B||null))};var O=(0,u[j])(m==="accessor"?{get:F.get,set:F.set}:F[C],R);if(m==="accessor"){if(O===void 0)continue;if(O===null||typeof O!="object")throw new TypeError("Object expected");(P=y(O.get))&&(F.get=P),(P=y(O.set))&&(F.set=P),(P=y(O.init))&&p.push(P)}else(P=y(O))&&(m==="field"?p.push(P):F[C]=P)}h&&Object.defineProperty(h,c.name,F),S=!0}function he(a,o,u){for(var c=arguments.length>2,p=0;p<o.length;p++)u=c?o[p].call(a,u):o[p].call(a);return c?u:void 0}function te(a){return typeof a=="symbol"?a:"".concat(a)}function me(a,o,u){return typeof o=="symbol"&&(o=o.description?"[".concat(o.description,"]"):""),Object.defineProperty(a,"name",{configurable:!0,value:u?"".concat(u," ",o):o})}function ce(a,o){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(a,o)}function be(a,o,u,c){function p(v){return v instanceof u?v:new u(function(y){y(v)})}return new(u||(u=Promise))(function(v,y){function m(F){try{h(c.next(F))}catch(P){y(P)}}function C(F){try{h(c.throw(F))}catch(P){y(P)}}function h(F){F.done?v(F.value):p(F.value).then(m,C)}h((c=c.apply(a,o||[])).next())})}function se(a,o){var u={label:0,sent:function(){if(v[0]&1)throw v[1];return v[1]},trys:[],ops:[]},c,p,v,y;return y={next:m(0),throw:m(1),return:m(2)},typeof Symbol=="function"&&(y[Symbol.iterator]=function(){return this}),y;function m(h){return function(F){return C([h,F])}}function C(h){if(c)throw new TypeError("Generator is already executing.");for(;y&&(y=0,h[0]&&(u=0)),u;)try{if(c=1,p&&(v=h[0]&2?p.return:h[0]?p.throw||((v=p.return)&&v.call(p),0):p.next)&&!(v=v.call(p,h[1])).done)return v;switch(p=0,v&&(h=[h[0]&2,v.value]),h[0]){case 0:case 1:v=h;break;case 4:return u.label++,{value:h[1],done:!1};case 5:u.label++,p=h[1],h=[0];continue;case 7:h=u.ops.pop(),u.trys.pop();continue;default:if(v=u.trys,!(v=v.length>0&&v[v.length-1])&&(h[0]===6||h[0]===2)){u=0;continue}if(h[0]===3&&(!v||h[1]>v[0]&&h[1]<v[3])){u.label=h[1];break}if(h[0]===6&&u.label<v[1]){u.label=v[1],v=h;break}if(v&&u.label<v[2]){u.label=v[2],u.ops.push(h);break}v[2]&&u.ops.pop(),u.trys.pop();continue}h=o.call(a,u)}catch(F){h=[6,F],p=0}finally{c=v=0}if(h[0]&5)throw h[1];return{value:h[0]?h[1]:void 0,done:!0}}}var $=Object.create?function(a,o,u,c){c===void 0&&(c=u);var p=Object.getOwnPropertyDescriptor(o,u);(!p||("get"in p?!o.__esModule:p.writable||p.configurable))&&(p={enumerable:!0,get:function(){return o[u]}}),Object.defineProperty(a,c,p)}:function(a,o,u,c){c===void 0&&(c=u),a[c]=o[u]};function Y(a,o){for(var u in a)u!=="default"&&!Object.prototype.hasOwnProperty.call(o,u)&&$(o,a,u)}function q(a){var o=typeof Symbol=="function"&&Symbol.iterator,u=o&&a[o],c=0;if(u)return u.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&c>=a.length&&(a=void 0),{value:a&&a[c++],done:!a}}};throw new TypeError(o?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ce(a,o){var u=typeof Symbol=="function"&&a[Symbol.iterator];if(!u)return a;var c=u.call(a),p,v=[],y;try{for(;(o===void 0||o-- >0)&&!(p=c.next()).done;)v.push(p.value)}catch(m){y={error:m}}finally{try{p&&!p.done&&(u=c.return)&&u.call(c)}finally{if(y)throw y.error}}return v}function x(){for(var a=[],o=0;o<arguments.length;o++)a=a.concat(Ce(arguments[o]));return a}function Re(){for(var a=0,o=0,u=arguments.length;o<u;o++)a+=arguments[o].length;for(var c=Array(a),p=0,o=0;o<u;o++)for(var v=arguments[o],y=0,m=v.length;y<m;y++,p++)c[p]=v[y];return c}function le(a,o,u){if(u||arguments.length===2)for(var c=0,p=o.length,v;c<p;c++)(v||!(c in o))&&(v||(v=Array.prototype.slice.call(o,0,c)),v[c]=o[c]);return a.concat(v||Array.prototype.slice.call(o))}function L(a){return this instanceof L?(this.v=a,this):new L(a)}function ie(a,o,u){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var c=u.apply(a,o||[]),p,v=[];return p={},y("next"),y("throw"),y("return"),p[Symbol.asyncIterator]=function(){return this},p;function y(S){c[S]&&(p[S]=function(j){return new Promise(function(R,E){v.push([S,j,R,E])>1||m(S,j)})})}function m(S,j){try{C(c[S](j))}catch(R){P(v[0][3],R)}}function C(S){S.value instanceof L?Promise.resolve(S.value.v).then(h,F):P(v[0][2],S)}function h(S){m("next",S)}function F(S){m("throw",S)}function P(S,j){S(j),v.shift(),v.length&&m(v[0][0],v[0][1])}}function Oe(a){var o,u;return o={},c("next"),c("throw",function(p){throw p}),c("return"),o[Symbol.iterator]=function(){return this},o;function c(p,v){o[p]=a[p]?function(y){return(u=!u)?{value:L(a[p](y)),done:!1}:v?v(y):y}:v}}function xe(a){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=a[Symbol.asyncIterator],u;return o?o.call(a):(a=typeof q=="function"?q(a):a[Symbol.iterator](),u={},c("next"),c("throw"),c("return"),u[Symbol.asyncIterator]=function(){return this},u);function c(v){u[v]=a[v]&&function(y){return new Promise(function(m,C){y=a[v](y),p(m,C,y.done,y.value)})}}function p(v,y,m,C){Promise.resolve(C).then(function(h){v({value:h,done:m})},y)}}function de(a,o){return Object.defineProperty?Object.defineProperty(a,"raw",{value:o}):a.raw=o,a}var _e=Object.create?function(a,o){Object.defineProperty(a,"default",{enumerable:!0,value:o})}:function(a,o){a.default=o};function ke(a){if(a&&a.__esModule)return a;var o={};if(a!=null)for(var u in a)u!=="default"&&Object.prototype.hasOwnProperty.call(a,u)&&$(o,a,u);return _e(o,a),o}function z(a){return a&&a.__esModule?a:{default:a}}function Ke(a,o,u,c){if(u==="a"&&!c)throw new TypeError("Private accessor was defined without a getter");if(typeof o=="function"?a!==o||!c:!o.has(a))throw new TypeError("Cannot read private member from an object whose class did not declare it");return u==="m"?c:u==="a"?c.call(a):c?c.value:o.get(a)}function je(a,o,u,c,p){if(c==="m")throw new TypeError("Private method is not writable");if(c==="a"&&!p)throw new TypeError("Private accessor was defined without a setter");if(typeof o=="function"?a!==o||!p:!o.has(a))throw new TypeError("Cannot write private member to an object whose class did not declare it");return c==="a"?p.call(a,u):p?p.value=u:o.set(a,u),u}function Xe(a,o){if(o===null||typeof o!="object"&&typeof o!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof a=="function"?o===a:a.has(o)}},9942:(ye,ge,H)=>{"use strict";ye.exports=H.p+"0c915ff6b53c94fc1dc1.wasm"}}]);

//# sourceMappingURL=363.a69c968f4f37b5b8437f.js.map