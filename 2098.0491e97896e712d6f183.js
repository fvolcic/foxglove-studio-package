"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2098],{72368:(B,a,l)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.CdrReader=void 0;const c=l(74786),A=l(77523);class y{constructor(t){if(this.textDecoder=new TextDecoder("utf8"),this.hostLittleEndian=!(0,A.isBigEndian)(),t.byteLength<4)throw new Error(`Invalid CDR data size ${t.byteLength}, must contain at least a 4-byte header`);this.view=new DataView(t.buffer,t.byteOffset,t.byteLength);const n=this.kind;this.littleEndian=n===c.EncapsulationKind.CDR_LE||n===c.EncapsulationKind.PL_CDR_LE,this.offset=4}get kind(){return this.view.getUint8(1)}get decodedBytes(){return this.offset}get byteLength(){return this.view.byteLength}int8(){const t=this.view.getInt8(this.offset);return this.offset+=1,t}uint8(){const t=this.view.getUint8(this.offset);return this.offset+=1,t}int16(){this.align(2);const t=this.view.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}uint16(){this.align(2);const t=this.view.getUint16(this.offset,this.littleEndian);return this.offset+=2,t}int32(){this.align(4);const t=this.view.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}uint32(){this.align(4);const t=this.view.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}int64(){this.align(8);const t=this.view.getBigInt64(this.offset,this.littleEndian);return this.offset+=8,t}uint64(){this.align(8);const t=this.view.getBigUint64(this.offset,this.littleEndian);return this.offset+=8,t}uint16BE(){this.align(2);const t=this.view.getUint16(this.offset,!1);return this.offset+=2,t}uint32BE(){this.align(4);const t=this.view.getUint32(this.offset,!1);return this.offset+=4,t}uint64BE(){this.align(8);const t=this.view.getBigUint64(this.offset,!1);return this.offset+=8,t}float32(){this.align(4);const t=this.view.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}float64(){this.align(8);const t=this.view.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}string(){const t=this.uint32();if(t<=1)return this.offset+=t,"";const n=new Uint8Array(this.view.buffer,this.view.byteOffset+this.offset,t-1),f=this.textDecoder.decode(n);return this.offset+=t,f}sequenceLength(){return this.uint32()}int8Array(t=this.sequenceLength()){const n=new Int8Array(this.view.buffer,this.view.byteOffset+this.offset,t);return this.offset+=t,n}uint8Array(t=this.sequenceLength()){const n=new Uint8Array(this.view.buffer,this.view.byteOffset+this.offset,t);return this.offset+=t,n}int16Array(t=this.sequenceLength()){return this.typedArray(Int16Array,"getInt16",t)}uint16Array(t=this.sequenceLength()){return this.typedArray(Uint16Array,"getUint16",t)}int32Array(t=this.sequenceLength()){return this.typedArray(Int32Array,"getInt32",t)}uint32Array(t=this.sequenceLength()){return this.typedArray(Uint32Array,"getUint32",t)}int64Array(t=this.sequenceLength()){return this.typedArray(BigInt64Array,"getBigInt64",t)}uint64Array(t=this.sequenceLength()){return this.typedArray(BigUint64Array,"getBigUint64",t)}float32Array(t=this.sequenceLength()){return this.typedArray(Float32Array,"getFloat32",t)}float64Array(t=this.sequenceLength()){return this.typedArray(Float64Array,"getFloat64",t)}stringArray(t=this.sequenceLength()){const n=[];for(let f=0;f<t;f++)n.push(this.string());return n}seek(t){const n=this.offset+t;if(n<4||n>=this.view.byteLength)throw new Error(`seek(${t}) failed, ${n} is outside the data range`);this.offset=n}seekTo(t){if(t<4||t>=this.view.byteLength)throw new Error(`seekTo(${t}) failed, value is outside the data range`);this.offset=t}align(t){const n=(this.offset-4)%t;n>0&&(this.offset+=t-n)}typedArray(t,n,f){if(f===0)return new t;this.align(t.BYTES_PER_ELEMENT);const r=this.view.byteOffset+this.offset;if(this.littleEndian!==this.hostLittleEndian)return this.typedArraySlow(t,n,f);if(r%t.BYTES_PER_ELEMENT===0){const h=new t(this.view.buffer,r,f);return this.offset+=t.BYTES_PER_ELEMENT*f,h}else return this.typedArrayUnaligned(t,n,f)}typedArrayUnaligned(t,n,f){if(f<10)return this.typedArraySlow(t,n,f);const r=t.BYTES_PER_ELEMENT*f,h=new Uint8Array(r);return h.set(new Uint8Array(this.view.buffer,this.view.byteOffset+this.offset,r)),this.offset+=r,new t(h.buffer,h.byteOffset,f)}typedArraySlow(t,n,f){const r=new t(f);let h=this.offset;for(let g=0;g<f;g++)r[g]=this.view[n](h,this.littleEndian),h+=t.BYTES_PER_ELEMENT;return this.offset=h,r}}a.CdrReader=y},58575:(B,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.CdrSizeCalculator=void 0;class l{constructor(){this.offset=4}get size(){return this.offset}int8(){return this.incrementAndReturn(1)}uint8(){return this.incrementAndReturn(1)}int16(){return this.incrementAndReturn(2)}uint16(){return this.incrementAndReturn(2)}int32(){return this.incrementAndReturn(4)}uint32(){return this.incrementAndReturn(4)}int64(){return this.incrementAndReturn(8)}uint64(){return this.incrementAndReturn(8)}float32(){return this.incrementAndReturn(4)}float64(){return this.incrementAndReturn(8)}string(A){return this.uint32(),this.offset+=A+1,this.offset}sequenceLength(){return this.uint32()}incrementAndReturn(A){const y=(this.offset-4)%A;return y>0&&(this.offset+=A-y),this.offset+=A,this.offset}}a.CdrSizeCalculator=l},66997:(B,a,l)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.CdrWriter=void 0;const c=l(74786),A=l(77523);class y{constructor(t={}){this.textEncoder=new TextEncoder,t.buffer!=null?this.buffer=t.buffer:t.size!=null?this.buffer=new ArrayBuffer(t.size):this.buffer=new ArrayBuffer(y.DEFAULT_CAPACITY);const n=t.kind??c.EncapsulationKind.CDR_LE;this.littleEndian=n===c.EncapsulationKind.CDR_LE||n===c.EncapsulationKind.PL_CDR_LE,this.hostLittleEndian=!(0,A.isBigEndian)(),this.array=new Uint8Array(this.buffer),this.view=new DataView(this.buffer),this.resizeIfNeeded(4),this.view.setUint8(0,0),this.view.setUint8(1,n),this.view.setUint16(2,0,!1),this.offset=4}get data(){return new Uint8Array(this.buffer,0,this.offset)}get size(){return this.offset}int8(t){return this.resizeIfNeeded(1),this.view.setInt8(this.offset,t),this.offset+=1,this}uint8(t){return this.resizeIfNeeded(1),this.view.setUint8(this.offset,t),this.offset+=1,this}int16(t){return this.align(2),this.view.setInt16(this.offset,t,this.littleEndian),this.offset+=2,this}uint16(t){return this.align(2),this.view.setUint16(this.offset,t,this.littleEndian),this.offset+=2,this}int32(t){return this.align(4),this.view.setInt32(this.offset,t,this.littleEndian),this.offset+=4,this}uint32(t){return this.align(4),this.view.setUint32(this.offset,t,this.littleEndian),this.offset+=4,this}int64(t){return this.align(8),this.view.setBigInt64(this.offset,t,this.littleEndian),this.offset+=8,this}uint64(t){return this.align(8),this.view.setBigUint64(this.offset,t,this.littleEndian),this.offset+=8,this}uint16BE(t){return this.align(2),this.view.setUint16(this.offset,t,!1),this.offset+=2,this}uint32BE(t){return this.align(4),this.view.setUint32(this.offset,t,!1),this.offset+=4,this}uint64BE(t){return this.align(8),this.view.setBigUint64(this.offset,t,!1),this.offset+=8,this}float32(t){return this.align(4),this.view.setFloat32(this.offset,t,this.littleEndian),this.offset+=4,this}float64(t){return this.align(8),this.view.setFloat64(this.offset,t,this.littleEndian),this.offset+=8,this}string(t){const n=t.length;return this.uint32(n+1),this.resizeIfNeeded(n+1),this.textEncoder.encodeInto(t,new Uint8Array(this.buffer,this.offset,n)),this.view.setUint8(this.offset+n,0),this.offset+=n+1,this}sequenceLength(t){return this.uint32(t)}int8Array(t,n){return n===!0&&this.sequenceLength(t.length),this.resizeIfNeeded(t.length),this.array.set(t,this.offset),this.offset+=t.length,this}uint8Array(t,n){return n===!0&&this.sequenceLength(t.length),this.resizeIfNeeded(t.length),this.array.set(t,this.offset),this.offset+=t.length,this}int16Array(t,n){if(n===!0&&this.sequenceLength(t.length),t instanceof Int16Array&&this.littleEndian===this.hostLittleEndian&&t.length>=y.BUFFER_COPY_THRESHOLD)this.align(t.BYTES_PER_ELEMENT,t.byteLength),this.array.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),this.offset),this.offset+=t.byteLength;else for(const f of t)this.int16(f);return this}uint16Array(t,n){if(n===!0&&this.sequenceLength(t.length),t instanceof Uint16Array&&this.littleEndian===this.hostLittleEndian&&t.length>=y.BUFFER_COPY_THRESHOLD)this.align(t.BYTES_PER_ELEMENT,t.byteLength),this.array.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),this.offset),this.offset+=t.byteLength;else for(const f of t)this.uint16(f);return this}int32Array(t,n){if(n===!0&&this.sequenceLength(t.length),t instanceof Int32Array&&this.littleEndian===this.hostLittleEndian&&t.length>=y.BUFFER_COPY_THRESHOLD)this.align(t.BYTES_PER_ELEMENT,t.byteLength),this.array.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),this.offset),this.offset+=t.byteLength;else for(const f of t)this.int32(f);return this}uint32Array(t,n){if(n===!0&&this.sequenceLength(t.length),t instanceof Uint32Array&&this.littleEndian===this.hostLittleEndian&&t.length>=y.BUFFER_COPY_THRESHOLD)this.align(t.BYTES_PER_ELEMENT,t.byteLength),this.array.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),this.offset),this.offset+=t.byteLength;else for(const f of t)this.uint32(f);return this}int64Array(t,n){if(n===!0&&this.sequenceLength(t.length),t instanceof BigInt64Array&&this.littleEndian===this.hostLittleEndian&&t.length>=y.BUFFER_COPY_THRESHOLD)this.align(t.BYTES_PER_ELEMENT,t.byteLength),this.array.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),this.offset),this.offset+=t.byteLength;else for(const f of t)this.int64(BigInt(f));return this}uint64Array(t,n){if(n===!0&&this.sequenceLength(t.length),t instanceof BigUint64Array&&this.littleEndian===this.hostLittleEndian&&t.length>=y.BUFFER_COPY_THRESHOLD)this.align(t.BYTES_PER_ELEMENT,t.byteLength),this.array.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),this.offset),this.offset+=t.byteLength;else for(const f of t)this.uint64(BigInt(f));return this}float32Array(t,n){if(n===!0&&this.sequenceLength(t.length),t instanceof Float32Array&&this.littleEndian===this.hostLittleEndian&&t.length>=y.BUFFER_COPY_THRESHOLD)this.align(t.BYTES_PER_ELEMENT,t.byteLength),this.array.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),this.offset),this.offset+=t.byteLength;else for(const f of t)this.float32(f);return this}float64Array(t,n){if(n===!0&&this.sequenceLength(t.length),t instanceof Float64Array&&this.littleEndian===this.hostLittleEndian&&t.length>=y.BUFFER_COPY_THRESHOLD)this.align(t.BYTES_PER_ELEMENT,t.byteLength),this.array.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),this.offset),this.offset+=t.byteLength;else for(const f of t)this.float64(f);return this}align(t,n=t){const f=(this.offset-4)%t,r=f>0?t-f:0;this.resizeIfNeeded(r+n),this.array.fill(0,this.offset,this.offset+r),this.offset+=r}resizeIfNeeded(t){const n=this.offset+t;if(this.buffer.byteLength<n){const f=this.buffer.byteLength*2,r=f>n?f:n;this.resize(r)}}resize(t){if(this.buffer.byteLength>=t)return;const n=new ArrayBuffer(t),f=new Uint8Array(n);f.set(this.array),this.buffer=n,this.array=f,this.view=new DataView(n)}}a.CdrWriter=y,y.DEFAULT_CAPACITY=16,y.BUFFER_COPY_THRESHOLD=10},74786:(B,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.EncapsulationKind=void 0;var l;(function(c){c[c.CDR_BE=0]="CDR_BE",c[c.CDR_LE=1]="CDR_LE",c[c.PL_CDR_BE=2]="PL_CDR_BE",c[c.PL_CDR_LE=3]="PL_CDR_LE"})(l=a.EncapsulationKind||(a.EncapsulationKind={}))},49851:function(B,a,l){var c=this&&this.__createBinding||(Object.create?function(y,b,t,n){n===void 0&&(n=t),Object.defineProperty(y,n,{enumerable:!0,get:function(){return b[t]}})}:function(y,b,t,n){n===void 0&&(n=t),y[n]=b[t]}),A=this&&this.__exportStar||function(y,b){for(var t in y)t!=="default"&&!Object.prototype.hasOwnProperty.call(b,t)&&c(b,y,t)};Object.defineProperty(a,"__esModule",{value:!0}),A(l(72368),a),A(l(58575),a),A(l(66997),a),A(l(74786),a)},77523:(B,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.isBigEndian=void 0;const l=new Uint8Array(4),c=new Uint32Array(l.buffer);c[0]=1;function A(){return l[3]===1}a.isBigEndian=A},38367:(B,a,l)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.MessageReader=void 0;const c=l(49851);class A{constructor(h){const g=h[0];if(g==null)throw new Error("MessageReader initialized with no root MessageDefinition");this.rootDefinition=g.definitions,this.definitions=new Map(h.map(E=>[E.name??"",E.definitions]))}readMessage(h){const g=new c.CdrReader(h);return this.readComplexType(this.rootDefinition,g)}readComplexType(h,g){const E={};for(const w of h)if(w.isConstant!==!0)if(w.isComplex===!0){const L=this.definitions.get(w.type);if(L==null)throw new Error(`Unrecognized complex type ${w.type}`);if(w.isArray===!0){const I=w.arrayLength??g.sequenceLength(),S=[];for(let M=0;M<I;M++)S.push(this.readComplexType(L,g));E[w.name]=S}else E[w.name]=this.readComplexType(L,g)}else if(w.isArray===!0){const L=b.get(w.type);if(L==null)throw new Error(`Unrecognized primitive array type ${w.type}[]`);const I=w.arrayLength??g.sequenceLength();E[w.name]=L(g,I)}else{const L=y.get(w.type);if(L==null)throw new Error(`Unrecognized primitive type ${w.type}`);E[w.name]=L(g)}return E}}a.MessageReader=A;const y=new Map([["bool",r=>Boolean(r.int8())],["int8",r=>r.int8()],["uint8",r=>r.uint8()],["int16",r=>r.int16()],["uint16",r=>r.uint16()],["int32",r=>r.int32()],["uint32",r=>r.uint32()],["int64",r=>r.int64()],["uint64",r=>r.uint64()],["float32",r=>r.float32()],["float64",r=>r.float64()],["string",r=>r.string()],["time",r=>({sec:r.int32(),nsec:r.uint32()})],["duration",r=>({sec:r.int32(),nsec:r.uint32()})]]),b=new Map([["bool",t],["int8",(r,h)=>r.int8Array(h)],["uint8",(r,h)=>r.uint8Array(h)],["int16",(r,h)=>r.int16Array(h)],["uint16",(r,h)=>r.uint16Array(h)],["int32",(r,h)=>r.int32Array(h)],["uint32",(r,h)=>r.uint32Array(h)],["int64",(r,h)=>r.int64Array(h)],["uint64",(r,h)=>r.uint64Array(h)],["float32",(r,h)=>r.float32Array(h)],["float64",(r,h)=>r.float64Array(h)],["string",n],["time",f],["duration",f]]);function t(r,h){const g=new Array(h);for(let E=0;E<h;E++)g[E]=Boolean(r.int8());return g}function n(r,h){const g=new Array(h);for(let E=0;E<h;E++)g[E]=r.string();return g}function f(r,h){const g=new Array(h);for(let E=0;E<h;E++){const w=r.int32(),L=r.uint32();g[E]={sec:w,nsec:L}}return g}},35135:(B,a,l)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.MessageWriter=void 0;const c=l(49851),A=new Map([["bool",1],["int8",1],["uint8",1],["int16",2],["uint16",2],["int32",4],["uint32",4],["int64",8],["uint64",8],["float32",4],["float64",8],["time",8],["duration",8]]),y=new Map([["bool",f],["int8",r],["uint8",h],["int16",g],["uint16",E],["int32",w],["uint32",L],["int64",I],["uint64",S],["float32",M],["float64",C],["string",F],["time",T],["duration",T]]),b=new Map([["bool",Y],["int8",q],["uint8",N],["int16",j],["uint16",H],["int32",V],["uint32",$],["int64",W],["uint64",K],["float32",k],["float64",Z],["string",G],["time",z],["duration",z]]);class t{constructor(s){const i=s[0];if(i==null)throw new Error("MessageReader initialized with no root MessageDefinition");this.rootDefinition=i.definitions,this.definitions=new Map(s.map(o=>[o.name??"",o.definitions]))}calculateByteSize(s){return this.byteSize(this.rootDefinition,s,4)}writeMessage(s,i){const o=new c.CdrWriter({buffer:i,size:i?void 0:this.calculateByteSize(s)});return this.write(this.rootDefinition,s,o),o.data}byteSize(s,i,o){const P=i;let u=o;for(const d of s){if(d.isConstant===!0)continue;const _=P?.[d.name];if(d.isArray===!0){const m=d.arrayLength??n(_),D=Array.isArray(_)||ArrayBuffer.isView(_)?_:[];if(d.arrayLength==null&&(u+=O(u,4),u+=4),d.isComplex===!0){const p=this.getDefinition(d.type);for(let U=0;U<m;U++){const J=D[U]??{};u=this.byteSize(p,J,u)}}else if(d.type==="string")for(let p=0;p<m;p++){const U=D[p]??"";u+=O(u,4),u+=4+U.length+1}else{const p=this.getPrimitiveSize(d.type),U=d.type==="time"||d.type==="duration"?4:p;u+=O(u,U),u+=p*m}}else if(d.isComplex===!0){const m=this.getDefinition(d.type),R=_??{};u=this.byteSize(m,R,u)}else if(d.type==="string"){const m=typeof _=="string"?_:"";u+=O(u,4),u+=4+m.length+1}else{const m=this.getPrimitiveSize(d.type),R=d.type==="time"||d.type==="duration"?4:m;u+=O(u,R),u+=m}}return u}write(s,i,o){const P=i;for(const u of s){if(u.isConstant===!0)continue;const d=P?.[u.name];if(u.isArray===!0){const _=u.arrayLength??n(d),R=Array.isArray(d)||ArrayBuffer.isView(d)?d:[];if(u.arrayLength==null&&o.sequenceLength(_),u.isComplex===!0){const D=this.getDefinition(u.type);for(let p=0;p<_;p++){const U=R[p]??{};this.write(D,U,o)}}else this.getPrimitiveArrayWriter(u.type)(d,u.defaultValue,o)}else if(u.isComplex===!0){const _=this.getDefinition(u.type),m=d??{};this.write(_,m,o)}else this.getPrimitiveWriter(u.type)(d,u.defaultValue,o)}}getDefinition(s){const i=this.definitions.get(s);if(i==null)throw new Error(`Unrecognized complex type ${s}`);return i}getPrimitiveSize(s){const i=A.get(s);if(i==null)throw new Error(`Unrecognized primitive type ${s}`);return i}getPrimitiveWriter(s){const i=y.get(s);if(i==null)throw new Error(`Unrecognized primitive type ${s}`);return i}getPrimitiveArrayWriter(s){const i=b.get(s);if(i==null)throw new Error(`Unrecognized primitive type ${s}[]`);return i}}a.MessageWriter=t;function n(e){const s=e?.length;return typeof s=="number"?s:0}function f(e,s,i){const o=typeof e=="boolean"?e:s??!1;i.int8(o?1:0)}function r(e,s,i){i.int8(typeof e=="number"?e:s??0)}function h(e,s,i){i.uint8(typeof e=="number"?e:s??0)}function g(e,s,i){i.int16(typeof e=="number"?e:s??0)}function E(e,s,i){i.uint16(typeof e=="number"?e:s??0)}function w(e,s,i){i.int32(typeof e=="number"?e:s??0)}function L(e,s,i){i.uint32(typeof e=="number"?e:s??0)}function I(e,s,i){typeof e=="bigint"?i.int64(e):typeof e=="number"?i.int64(BigInt(e)):i.int64(s??0n)}function S(e,s,i){typeof e=="bigint"?i.uint64(e):typeof e=="number"?i.uint64(BigInt(e)):i.uint64(s??0n)}function M(e,s,i){i.float32(typeof e=="number"?e:s??0)}function C(e,s,i){i.float64(typeof e=="number"?e:s??0)}function F(e,s,i){i.string(typeof e=="string"?e:s??"")}function T(e,s,i){if(e==null){i.int32(0),i.uint32(0);return}const o=e;i.int32(o.sec??0),i.uint32(o.nsec??o.nanosec??0)}function Y(e,s,i){if(Array.isArray(e)){const o=new Int8Array(e);i.int8Array(o)}else i.int8Array(s??[])}function q(e,s,i){if(e instanceof Int8Array)i.int8Array(e);else if(Array.isArray(e)){const o=new Int8Array(e);i.int8Array(o)}else i.int8Array(s??[])}function N(e,s,i){if(e instanceof Uint8Array)i.uint8Array(e);else if(e instanceof Uint8ClampedArray)i.uint8Array(new Uint8Array(e));else if(Array.isArray(e)){const o=new Uint8Array(e);i.uint8Array(o)}else i.uint8Array(s??[])}function j(e,s,i){if(e instanceof Int16Array)i.int16Array(e);else if(Array.isArray(e)){const o=new Int16Array(e);i.int16Array(o)}else i.int16Array(s??[])}function H(e,s,i){if(e instanceof Uint16Array)i.uint16Array(e);else if(Array.isArray(e)){const o=new Uint16Array(e);i.uint16Array(o)}else i.uint16Array(s??[])}function V(e,s,i){if(e instanceof Int32Array)i.int32Array(e);else if(Array.isArray(e)){const o=new Int32Array(e);i.int32Array(o)}else i.int32Array(s??[])}function $(e,s,i){if(e instanceof Uint32Array)i.uint32Array(e);else if(Array.isArray(e)){const o=new Uint32Array(e);i.uint32Array(o)}else i.uint32Array(s??[])}function W(e,s,i){if(e instanceof BigInt64Array)i.int64Array(e);else if(Array.isArray(e)){const o=new BigInt64Array(e);i.int64Array(o)}else i.int64Array(s??[])}function K(e,s,i){if(e instanceof BigUint64Array)i.uint64Array(e);else if(Array.isArray(e)){const o=new BigUint64Array(e);i.uint64Array(o)}else i.uint64Array(s??[])}function k(e,s,i){if(e instanceof Float32Array)i.float32Array(e);else if(Array.isArray(e)){const o=new Float32Array(e);i.float32Array(o)}else i.float32Array(s??[])}function Z(e,s,i){if(e instanceof Float64Array)i.float64Array(e);else if(Array.isArray(e)){const o=new Float64Array(e);i.float64Array(o)}else i.float64Array(s??[])}function G(e,s,i){if(Array.isArray(e))for(const o of e)i.string(typeof o=="string"?o:"");else{const o=s??[];for(const P of o)i.string(P)}}function z(e,s,i){if(Array.isArray(e))for(const o of e)T(o,void 0,i)}function O(e,s){const i=(e-4)%s;return i>0?s-i:0}},62098:function(B,a,l){var c=this&&this.__createBinding||(Object.create?function(y,b,t,n){n===void 0&&(n=t);var f=Object.getOwnPropertyDescriptor(b,t);(!f||("get"in f?!b.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return b[t]}}),Object.defineProperty(y,n,f)}:function(y,b,t,n){n===void 0&&(n=t),y[n]=b[t]}),A=this&&this.__exportStar||function(y,b){for(var t in y)t!=="default"&&!Object.prototype.hasOwnProperty.call(b,t)&&c(b,y,t)};Object.defineProperty(a,"__esModule",{value:!0}),A(l(38367),a),A(l(35135),a)}}]);

//# sourceMappingURL=2098.0491e97896e712d6f183.js.map