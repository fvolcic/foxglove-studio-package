"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4812],{33880:(B,w,i)=>{i.d(w,{A:()=>f});const f={canHandle:l=>l instanceof AbortSignal,deserialize:([l,k])=>{const b=new AbortController;return l?b.abort():k.onmessage=()=>{b.abort()},b.signal},serialize:l=>{const{port1:k,port2:b}=new MessageChannel;return l.addEventListener("abort",()=>{k.postMessage("aborted")}),[[l.aborted,b],[b]]}}},44587:(B,w,i)=>{i.d(w,{A:()=>h.A});var h=i(33880)},23503:(B,w,i)=>{i.d(w,{ZP:()=>b});const h=new Map,f=()=>{};class l{constructor(r){this._name=r,this.setLevel("debug"),h.set(r,this)}name(){return this._name}isLevelOn(r){switch(r){case"debug":return this.debug!==f;case"info":return this.info!==f;case"warn":return this.warn!==f;case"error":return this.error!==f}return!1}getLevel(){return this.debug!==f?"debug":this.info!==f?"info":this.warn!==f?"warn":"error"}setLevel(r){switch(this.debug=f,this.info=f,this.warn=f,this.error=f,r){case"debug":this.debug=console.debug.bind(i.g.console),this.info=console.info.bind(i.g.console),this.warn=console.warn.bind(i.g.console),this.error=console.error.bind(i.g.console);break;case"info":this.info=console.info.bind(i.g.console),this.warn=console.warn.bind(i.g.console),this.error=console.error.bind(i.g.console);break;case"warn":this.warn=console.warn.bind(i.g.console),this.error=console.error.bind(i.g.console);break;case"error":this.error=console.error.bind(i.g.console);break}}debug(...r){}info(...r){}warn(...r){}error(...r){}getLogger(r){const c=r.replace(/^.+\.(asar|webpack)[\\/\\]/,"").replace(/^(\.\.\/)+/,""),d=this._name.length>0?`${this._name}.${c}`:c,g=h.get(d);if(g)return g;const C=new l(d);return h.set(d,C),C}channels(){return Array.from(h.values())}}l.default=new l("");function k(t){switch(t){case"debug":return"debug";case"info":return"info";case"warn":return"warn";case"error":return"error";default:return"warn"}}const b=l.default},12511:(B,w,i)=>{i.d(w,{C:()=>k});var h=i(44668),f=i.n(h);const l=Object.freeze({sec:0,nsec:0});class k{constructor(t,r){this._iter=t,this._abort=r}async next(){return this._abort?.aborted===!0?void 0:(await this._iter.next()).value}async nextBatch(t){const r=await this.next();if(!r)return;if(r.type==="problem")return[r];const c=[r];let d=l;switch(r.type){case"stamp":d=(0,h.add)(r.stamp,{sec:0,nsec:t*1e6});break;case"message-event":d=(0,h.add)(r.msgEvent.receiveTime,{sec:0,nsec:t*1e6});break}for(;;){const g=await this.next();if(!g)return c;if(c.push(g),g.type==="problem"||g.type==="stamp"&&(0,h.compare)(g.stamp,d)>0||g.type==="message-event"&&(0,h.compare)(g.msgEvent.receiveTime,d)>0)break}return c}async readUntil(t){if(this._abort?.aborted===!0)return;const c=[];if(this._lastIteratorResult?.type==="stamp"&&(0,h.compare)(this._lastIteratorResult.stamp,t)>=0||this._lastIteratorResult?.type==="message-event"&&(0,h.compare)(this._lastIteratorResult.msgEvent.receiveTime,t)>0)return c;for(this._lastIteratorResult&&(c.push(this._lastIteratorResult),this._lastIteratorResult=void 0);;){const d=await this._iter.next();if(this._abort?.aborted===!0)return;if(d.done===!0)break;const g=d.value;if(g.type==="stamp"&&(0,h.compare)(g.stamp,t)>=0){this._lastIteratorResult=g;break}if(g.type==="message-event"&&(0,h.compare)(g.msgEvent.receiveTime,t)>0){this._lastIteratorResult=g;break}c.push(g)}return c}async end(){await this._iter.return?.()}}},41253:(B,w,i)=>{i.d(w,{a:()=>k});var h=i(90758),f=i(44587),l=i(12511);class k{constructor(t){this._source=t}async initialize(){return await this._source.initialize()}messageIterator(t){return h.sj(this._source.messageIterator(t))}async getBackfillMessages(t,r){return await this._source.getBackfillMessages({...t,abortSignal:r})}getMessageCursor(t,r){const c=this._source.messageIterator(t),d=new l.C(c,r);return h.sj(d)}}h.Y6.set("abortsignal",f.A)},20865:(B,w,i)=>{i.d(w,{Z:()=>k});var h=i(30686);class f extends h.v{constructor(t,r){super(),this._aborted=!1,this._url=t,this._controller=new AbortController,this._response=fetch(t,{...r,signal:this._controller.signal})}async _getReader(){if(this._reader)return this._reader;let t;try{t=await this._response}catch(r){this.emit("error",new Error(`GET <${this._url}> failed: ${r}`));return}if(!t.ok){const r=t.statusText;this.emit("error",new Error(`GET <$${this._url}> failed with status ${t.status}${r?` (${r})`:""}`));return}if(!t.body){this.emit("error",new Error(`GET <${this._url}> succeeded, but returned no data`));return}try{this._reader=t.body.getReader()}catch{this.emit("error",new Error(`GET <${this._url}> succeeded, but failed to stream`));return}return this._reader}read(){this._getReader().then(t=>{t&&t.read().then(({done:r,value:c})=>{if(r){this.emit("end");return}this.emit("data",c),this.read()}).catch(r=>{if(this._aborted){this.emit("end");return}const c=r instanceof Error?r:new Error(r);this.emit("error",c)})}).catch(t=>{const r=t instanceof Error?t:new Error(t);this.emit("error",r)})}destroy(){this._aborted=!0,this._controller.abort()}}function l(){return Boolean(i.g.desktopBridge)}class k{constructor(t){this._url=t}async open(){let t;try{const c=new AbortController;t=await fetch(this._url,{signal:c.signal,cache:"no-store"}),c.abort()}catch(c){let d=`Fetching remote file failed. ${c}`;throw l()||(d+=`

Sometimes this is due to a CORS configuration error on the server. Make sure CORS is enabled.`),new Error(d)}if(!t.ok)throw new Error(`Fetching remote file failed. <${this._url}> Status code: ${t.status}.`);if(t.headers.get("accept-ranges")!=="bytes"){let c=`Support for HTTP Range requests was not detected on the remote file.

Confirm the resource has an 'Accept-Ranges: bytes' header.`;throw l()||(c+=`

Sometimes this is due to a CORS configuration error on the server. Make sure CORS is enabled with Access-Control-Allow-Origin, and that Access-Control-Expose-Headers includes Accept-Ranges.`),new Error(c)}const r=t.headers.get("content-length");if(r==null)throw new Error(`Remote file is missing file size. <${this._url}>`);return{size:parseInt(r),identifier:t.headers.get("etag")??t.headers.get("last-modified")??void 0}}fetch(t,r){const c=new Headers({range:`bytes=${t}-${t+(r-1)}`}),d=new f(this._url,{headers:c});return d.read(),d}}},88499:(B,w,i)=>{i.d(w,{Z:()=>S});var h=i(76635),f=i(23503),l=i(53526);function k(u,e){for(const s of e){if((0,l.RR)(u,s))return!1;if((0,l.VG)(u,s))return!0}return!1}function b(u,e){return(0,l.Cy)(u,(0,l.wf)([u],e))}const t=Math.pow(2,32);class r{constructor(e){this._blocks=[],this._blockSize=Math.trunc(t/2),this._numberOfBlocks=1/0,this._lastAccessedBlockIndices=[],this._rangesWithData=[],this.byteLength=e.size,this._blockSize=e.blockSize??this._blockSize,this._numberOfBlocks=e.numberOfBlocks??this._numberOfBlocks}hasData(e,s){return k({start:e,end:s},this._rangesWithData)}getRangesWithData(){return this._rangesWithData}copyFrom(e,s){if(s<0||s>=this.byteLength)throw new Error("VirtualLRUBuffer#copyFrom invalid input");const n={start:s,end:s+e.byteLength};let a=n.start;for(;a<n.end;){const{blockIndex:_,positionInBlock:o,remainingBytesInBlock:m}=this._calculatePosition(a);c(e,this._getBlock(_),o,a-s),a+=m}this._rangesWithData=(0,l.og)((0,l.LU)([n],this._rangesWithData))}slice(e,s){const n=s-e;if(e<0||s>this.byteLength||n<=0||n>t)throw new Error("VirtualLRUBuffer#slice invalid input");if(!this.hasData(e,s))throw new Error("VirtualLRUBuffer#slice range has no data set");const a=this._calculatePosition(e);if(n<=a.remainingBytesInBlock){const{blockIndex:m,positionInBlock:E}=a;return this._getBlock(m).slice(E,E+n)}const _=new Uint8Array(n);let o=e;for(;o<s;){const{blockIndex:m,positionInBlock:E,remainingBytesInBlock:y}=this._calculatePosition(o);c(this._getBlock(m),_,o-e,E),o+=y}return _}_getBlock(e){if(!this._blocks[e]){let n=this._blockSize;(e+1)*this._blockSize>this.byteLength&&(n=this.byteLength%this._blockSize),this._blocks[e]=new Uint8Array(n)}if(this._lastAccessedBlockIndices=[...this._lastAccessedBlockIndices.filter(n=>n!==e),e],this._lastAccessedBlockIndices.length>this._numberOfBlocks){const n=this._lastAccessedBlockIndices.shift();n!=null&&(delete this._blocks[n],this._rangesWithData=(0,l.og)((0,l.cb)(this._rangesWithData,[{start:n*this._blockSize,end:(n+1)*this._blockSize}])))}const s=this._blocks[e];if(!s)throw new Error("invariant violation - no block at index");return s}_calculatePosition(e){if(e<0||e>=this.byteLength)throw new Error("VirtualLRUBuffer#_calculatePosition invalid input");const s=Math.floor(e/this._blockSize),n=e-s*this._blockSize,a=this._getBlock(s).byteLength-n;return{blockIndex:s,positionInBlock:n,remainingBytesInBlock:a}}}function c(u,e,s,n,a){const _=(a??u.byteLength)-n;for(let o=0;o<_;o++)e[s+o]=u[n+o]}function d(u){const{readRequestRange:e,currentRemainingRange:s,...n}=u;if(e)return g({readRequestRange:e,currentRemainingRange:s,...n});if(!s)return C(n)}function g({currentRemainingRange:u,readRequestRange:e,downloadedRanges:s,maxRequestSize:n,fileSize:a,continueDownloadingThreshold:_}){if(e.end-e.start>n)throw new Error(`Range ${e.start}-${e.end} exceeds max request size ${n} (file size ${a})`);const o=b(e,s);if(!o[0])throw new Error("Range for the first read request is fully downloaded, so it should have been deleted");if(!u||!(0,l.dI)(o,[u])||u.start+_<o[0].start){if(n>=a){const E={start:o[0].start,end:a};return b(E,s)[0]}return o[0].end===e.end?{...o[0],end:Math.min(e.start+n,a)}:o[0]}}function C({downloadedRanges:u,lastResolvedCallbackEnd:e,maxRequestSize:s,fileSize:n}){let a;if(s>=n){const _={start:e??0,end:n};k(_,u)?a={start:0,end:n}:a=_}else e!=null&&(a={start:e,end:Math.min(e+s,n)});if(a)return b(a,u)[0]}var v="../../packages/studio-base/src/util/CachedFilelike.ts";const T=1024*1024*100,I=1024*1024*10,z=1024*1024*5,A=f.ZP.getLogger(v);class S{constructor(e){this._cacheSizeInBytes=1/0,this._closed=!1,this._readRequests=[],this._fileReader=e.fileReader,this._cacheSizeInBytes=e.cacheSizeInBytes??this._cacheSizeInBytes,this._keepReconnectingCallback=e.keepReconnectingCallback,this._log=e.log??A,this._virtualBuffer=new r({size:0})}async open(){if(this._fileSize!=null)return;const{size:e}=await this._fileReader.open();this._fileSize=e,this._cacheSizeInBytes>=e?this._virtualBuffer=new r({size:e}):this._virtualBuffer=new r({size:e,blockSize:I,numberOfBlocks:Math.ceil(this._cacheSizeInBytes/I)+2}),this._log.info(`Opening file with size ${R(this._fileSize)}MiB`)}size(){if(this._fileSize==null)throw new Error("CachedFilelike has not been opened");return this._fileSize}read(e,s){if(s===0)return Promise.resolve(new Uint8Array);const n={start:e,end:e+s};if(e<0||s<0)throw new Error("CachedFilelike#read invalid input");if(s>this._cacheSizeInBytes)throw new Error(`Requested more data than cache size: ${s} > ${this._cacheSizeInBytes}`);return new Promise((a,_)=>{this.open().then(()=>{const o=this.size();if(n.end>o){_(new Error("CachedFilelike#read past size"));return}this._readRequests.push({range:n,resolve:a,reject:_,requestTime:Date.now()}),this._updateState()}).catch(o=>{_(o)})})}_updateState(){if(this._closed)return;this._readRequests=this._readRequests.filter(({range:n,resolve:a})=>{if(!this._virtualBuffer.hasData(n.start,n.end))return!0;this._lastResolvedCallbackEnd=n.end;const _=this._virtualBuffer.slice(n.start,n.end);return a(_),!1});const e=this.size(),s=d({currentRemainingRange:this._currentConnection?this._currentConnection.remainingRange:void 0,readRequestRange:this._readRequests[0]?this._readRequests[0].range:void 0,downloadedRanges:this._virtualBuffer.getRangesWithData(),lastResolvedCallbackEnd:this._lastResolvedCallbackEnd,maxRequestSize:this._cacheSizeInBytes,fileSize:e,continueDownloadingThreshold:z});s&&this._setConnection(s)}_setConnection(e){if(this._log.debug(`Setting new connection @ ${p(e)}`),this._currentConnection){const o=this._currentConnection;o.stream.destroy(),this._log.debug(`Destroyed current connection @ ${p(o.remainingRange)}`)}const s=this._fileReader.fetch(e.start,e.end-e.start);this._currentConnection={stream:s,remainingRange:e},s.on("error",o=>{const m=this._currentConnection;if(!(!m||s!==m.stream)){if(this._keepReconnectingCallback)this._lastErrorTime==null&&this._keepReconnectingCallback(!0);else{const E=this._lastErrorTime;if(E!=null&&Date.now()-E<100){this._log.error(`Connection @ ${p(e)} threw another error; closing: ${o.toString()}`),this._closed=!0;for(const y of this._readRequests)y.reject(o);return}}this._log.info(`Connection @ ${p(e)} threw error; trying to continue: ${o.toString()}`),this._lastErrorTime=Date.now(),m.stream.destroy(),delete this._currentConnection,this._updateState()}});const n=Date.now();let a=0,_=0;s.on("data",o=>{const m=this._currentConnection;if(!(!m||s!==m.stream)){if(this._lastErrorTime!=null&&(this._lastErrorTime=void 0,this._keepReconnectingCallback&&this._keepReconnectingCallback(!1)),this._virtualBuffer.copyFrom(o,m.remainingRange.start),a+=o.byteLength,a-_>T){_=a;const E=(Date.now()-n)/1e3,y=R(a),L=(0,h.round)(y/E,2);this._log.debug(`Connection @ ${p(m.remainingRange)} downloading at ${L} MiB/s`)}this._virtualBuffer.hasData(e.start,e.end)?(this._log.info(`Connection @ ${p(m.remainingRange)} finished!`),s.destroy(),delete this._currentConnection):this._currentConnection={stream:s,remainingRange:{start:e.start+a,end:e.end}},this._updateState()}})}}function R(u){return(0,h.round)(u/1024/1024,3)}function p(u){return`${R(u.start)}-${R(u.end)}MiB`}}}]);

//# sourceMappingURL=4812.1dafbaa2f668973cd9d7.js.map