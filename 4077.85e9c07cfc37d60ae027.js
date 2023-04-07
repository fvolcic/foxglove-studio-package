"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4077],{31953:(K,v,C)=>{C.d(v,{HL:()=>V,km:()=>D,Rh:()=>A,TD:()=>W,eQ:()=>M,cS:()=>F,wk:()=>U,CA:()=>k,v$:()=>E,GT:()=>p,$C:()=>G,X:()=>R,ai:()=>z,gl:()=>P});function _(a,l,d,e,t,s){s[t]=a+1.402*e,s[t+1]=a-.34414*l-.71414*e,s[t+2]=a+1.772*l,s[t+3]=255,s[t+4]=d+1.402*e,s[t+5]=d-.34414*l-.71414*e,s[t+6]=d+1.772*l,s[t+7]=255}function z(a,l,d,e){let t=0,s=0;const n=d*l;for(let i=0;i<=n;i+=2){const o=a[s]-128,r=a[s+1],c=a[s+2]-128,h=a[s+3];_(r,o,h,c,t,e),t+=8,s+=4}}function P(a,l,d,e){let t=0,s=0;const n=d*l;for(let i=0;i<=n;i+=2){const o=a[s],r=a[s+1]-128,c=a[s+2],h=a[s+3]-128;_(o,r,c,h,t,e),t+=8,s+=4}}function G(a,l,d,e){let t=0,s=0;for(let n=0;n<l*d;n++){const i=a[t++],o=a[t++],r=a[t++];e[s++]=i,e[s++]=o,e[s++]=r,e[s++]=255}}function R(a,l,d,e){let t=0,s=0;for(let n=0;n<l*d;n++){const i=a[t++],o=a[t++],r=a[t++],c=a[t++];e[s++]=i,e[s++]=o,e[s++]=r,e[s++]=c}}function A(a,l,d,e){let t=0,s=0;for(let n=0;n<l*d;n++){const i=a[t++],o=a[t++],r=a[t++],c=a[t++];e[s++]=r,e[s++]=o,e[s++]=i,e[s++]=c}}function D(a,l,d,e){let t=0,s=0;for(let n=0;n<l*d;n++){const i=a[t++],o=a[t++],r=a[t++];e[s++]=r,e[s++]=o,e[s++]=i,e[s++]=255}}function k(a,l,d,e,t){const s=new DataView(a.buffer,a.byteOffset);let n=0;for(let i=0;i<l*d*4;i+=4){const o=s.getFloat32(i,!e)*255;t[n++]=o,t[n++]=o,t[n++]=o,t[n++]=255}}function p(a,l,d,e){let t=0,s=0;for(let n=0;n<l*d;n++){const i=a[t++];e[s++]=i,e[s++]=i,e[s++]=i,e[s++]=255}}function E(a,l,d,e,t,s){const n=new DataView(a.buffer,a.byteOffset),i=s?.minValue??0;let o=s?.maxValue??1e4;o===i&&(o=i+1);let r=0;for(let c=0;c<l*d*2;c+=2){let h=n.getUint16(c,!e);h=(h-i)/(o-i)*255,t[r++]=h,t[r++]=h,t[r++]=h,t[r++]=255}}function B(a,l,d,e){return new Function("data","width","height","output",`
  for (let i = 0; i < height / 2; i++) {
    let inIdx = i * 2 * width;
    let outTopIdx = i * 2 * width * 4; // Addresses top row
    let outBottomIdx = (i * 2 + 1) * width * 4; // Addresses bottom row
    for (let j = 0; j < width / 2; j++) {
      const tl = data[inIdx++];
      const tr = data[inIdx++];
      const bl = data[inIdx + width - 2];
      const br = data[inIdx + width - 1];

      const ${a} = tl;
      const ${l} = tr;
      const ${d} = bl;
      const ${e} = br;

      // Top row
      output[outTopIdx++] = r;
      output[outTopIdx++] = g0;
      output[outTopIdx++] = b;
      output[outTopIdx++] = 255;

      output[outTopIdx++] = r;
      output[outTopIdx++] = g0;
      output[outTopIdx++] = b;
      output[outTopIdx++] = 255;

      // Bottom row
      output[outBottomIdx++] = r;
      output[outBottomIdx++] = g1;
      output[outBottomIdx++] = b;
      output[outBottomIdx++] = 255;

      output[outBottomIdx++] = r;
      output[outBottomIdx++] = g1;
      output[outBottomIdx++] = b;
      output[outBottomIdx++] = 255;
    }
  }`)}const U=B("r","g0","g1","b"),W=B("b","g0","g1","r"),M=B("g0","b","r","g1"),F=B("g0","r","b","g1");class V{constructor(l){const{binning_x:d,binning_y:e,roi:t,distortion_model:s,D:n,K:i,P:o,R:r,width:c,height:h}=l,x=o[0],y=o[5];if(c<=0||h<=0)throw new Error(`Invalid image size ${c}x${h}`);if(s.length>0&&s!=="plumb_bob"&&s!=="rational_polynomial")throw new Error(`Unrecognized distortion_model "${s}"`);if(i.length!==0&&i.length!==9)throw new Error(`K.length=${i.length}, expected 9`);if(o.length!==0&&o.length!==12)throw new Error(`P.length=${i.length}, expected 12`);if(r.length!==0&&r.length!==9)throw new Error(`R.length=${r.length}, expected 9`);if(x===0||y===0)throw new Error(`Invalid focal length (fx=${x}, fy=${y})`);const g=[...n];for(;g.length<8;)g.push(0);this.D=g,this.K=i.length===9?i:[1,0,0,0,1,0,0,0,1],this.P=o.length===12?o:void 0,this.R=r.length===9?r:[1,0,0,0,1,0,0,0,1],this.width=c,this.height=h;const u=d!==0?d:1,f=e!==0?e:1,T=u>1||f>1,w=t.x_offset!==0||t.y_offset!==0;if(T||w)throw new Error("Failed to initialize camera model: unable to handle adjusted binning and adjusted roi camera models.")}projectPixelTo3dPlane(l,d){const e=this.P;if(!e)return!1;const t=e[0],s=e[5],n=e[2],i=e[6],o=e[3],r=e[7];return l.x=(d.x-n-o)/t,l.y=(d.y-i-r)/s,l.z=1,!0}projectPixelTo3dRay(l,d){if(!this.projectPixelTo3dPlane(l,d))return!1;const e=1/Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z);return l.x*=e,l.y*=e,l.z*=e,!0}rectifyPixel(l,d,e=5){if(!this.P)return l.x=d.x,l.y=d.y,l;const{P:t,D:s}=this,[n,i,o,r,c]=s,h=t[0],x=t[5],y=t[2],g=t[6];let u=(d.x-y)/h,f=(d.y-g)/x;const T=u,w=f,I=n!==0||i!==0||o!==0||r!==0||c!==0?e:1;for(let m=0;m<I;m++){const b=u*u+f*f,S=1/(1+n*b+i*b*b+c*b*b*b),$=2*o*u*f+r*(b+2*u*u),j=o*(b+2*f*f)+2*r*u*f;u=(T-$)*S,f=(w-j)*S}return l.x=u*h+y,l.y=f*x+g,l}unrectifyPixel(l,d){if(!this.P)return l.x=d.x,l.y=d.y,l;const{P:e,R:t,D:s,K:n}=this,i=e[0],o=e[5],r=e[2],c=e[6],h=e[3],x=e[7],y=(d.x-r-h)/i,g=(d.y-c-x)/o,u=t[0]*y+t[1]*g+t[2],f=t[3]*y+t[4]*g+t[5],T=t[6]*y+t[7]*g+t[8],w=u/T,I=f/T,m=w*w+I*I,b=m*m,S=b*m,$=2*w*I,j=s[0],O=s[1],Z=s[2],Y=s[3],X=s[4];let H=1+j*m+O*b+X*S;H/=1+s[5]*m+s[6]*b+s[7]*S;const L=w*H+Z*$+Y*(m+2*(w*w)),N=I*H+Z*(m+2*(I*I))+Y*$;return l.x=L*n[0]+n[2],l.y=N*n[4]+n[5],l}}},14077:(K,v,C)=>{C.d(v,{c:()=>D});var _=C(31953),z=C(42146),P=C(9459);class G{constructor(t,s){this._ctx=t,this._hitmapCanvas=s,this._currentMarkerIndex=0,this._hctx=this._hitmapCanvas?.getContext("2d")??void 0,this._hctx&&(this._hctx.imageSmoothingEnabled=!1,this._hctx.clearRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height))}startMarker(){if(this._hctx){const t=(0,P.A0)(this._currentMarkerIndex);this._hctx.fillStyle=`#${t}ff`,this._hctx.strokeStyle=`#${t}ff`}this._currentMarkerIndex++}get lineWidth(){return this._ctx.lineWidth}set lineWidth(t){this._ctx.lineWidth=t,this._hctx&&(this._hctx.lineWidth=t)}get fillStyle(){return this._ctx.fillStyle}set fillStyle(t){this._ctx.fillStyle=t}get font(){return this._ctx.font}set font(t){this._ctx.font=t,this._hctx&&(this._hctx.font=t)}get strokeStyle(){return this._ctx.strokeStyle}set strokeStyle(t){this._ctx.strokeStyle=t}get textBaseline(){return this._ctx.textBaseline}set textBaseline(t){this._ctx.textBaseline=t,this._hctx&&(this._hctx.textBaseline=t)}arc(t,s,n,i,o,r){this._ctx.arc(t,s,n,i,o,r),this._hctx?.arc(t,s,n,i,o,r)}beginPath(){this._ctx.beginPath(),this._hctx?.beginPath()}clearRect(t,s,n,i){this._ctx.clearRect(t,s,n,i),this._hctx?.clearRect(t,s,n,i)}closePath(){this._ctx.closePath(),this._hctx?.closePath()}drawImage(t,s,n){this._ctx.drawImage(t,s,n)}fill(){this._ctx.fill(),this._hctx?.fill()}fillRect(t,s,n,i){this._ctx.fillRect(t,s,n,i),this._hctx?.fillRect(t,s,n,i)}fillText(t,s,n){this._ctx.fillText(t,s,n),this._hctx?.fillText(t,s,n)}getTransform(){return this._ctx.getTransform()}lineTo(t,s){this._ctx.lineTo(t,s),this._hctx?.lineTo(t,s)}measureText(t){return this._ctx.measureText(t)}moveTo(t,s){this._ctx.moveTo(t,s),this._hctx?.moveTo(t,s)}restore(){this._ctx.restore(),this._hctx?.restore()}rotate(t){const s=t*Math.PI/180;this._ctx.rotate(s),this._hctx?.rotate(s)}save(){this._ctx.save(),this._hctx?.save()}scale(t,s){this._ctx.scale(t,s),this._hctx?.scale(t,s)}stroke(){this._ctx.stroke(),this._hctx?.stroke()}strokeRect(t,s,n,i){this._ctx.strokeRect(t,s,n,i),this._hctx?.strokeRect(t,s,n,i)}translate(t,s){this._ctx.translate(t,s),this._hctx?.translate(t,s)}}let R=!1;const A=3;async function D({canvas:e,hitmapCanvas:t,geometry:s,imageMessage:n,rawMarkerData:i,options:o}){if(!n){B(e);return}const{imageSmoothing:r=!1}=o??{};let c;try{c=(0,P.KS)(i)}catch(h){R||((0,z.ZP)("Failed to initialize camera model from CameraInfo",h,"user","warn"),R=!0)}try{const h=await E(n,o);o?.resizeCanvas===!0&&(e.width=h.width,e.height=h.height);const x=U({canvas:e,geometry:s,hitmapCanvas:t,bitmap:h,imageSmoothing:r,markerData:c});return h.close(),x}catch(h){throw B(e),h}}function k(e){return`rgba(${e.r*255}, ${e.g*255}, ${e.b*255}, ${e.a})`}function p(e,t){return e?.unrectifyPixel({x:0,y:0},t)??t}function E(e,t={}){const{data:s}=e;if(!(s instanceof Uint8Array))throw new Error("Message must have data of type Uint8Array");switch(e.type){case"compressed":{const n=new Blob([s],{type:`image/${e.format}`});return self.createImageBitmap(n)}case"raw":{const{is_bigendian:n,width:i,height:o,encoding:r}=e,c=new ImageData(i,o);switch(r){case"yuv422":(0,_.ai)(s,i,o,c.data);break;case"uyuv":(0,_.ai)(s,i,o,c.data);break;case"yuyv":(0,_.gl)(s,i,o,c.data);break;case"rgb8":(0,_.$C)(s,i,o,c.data);break;case"rgba8":(0,_.X)(s,i,o,c.data);break;case"bgra8":(0,_.Rh)(s,i,o,c.data);break;case"bgr8":case"8UC3":(0,_.km)(s,i,o,c.data);break;case"32FC1":(0,_.CA)(s,i,o,n,c.data);break;case"bayer_rggb8":(0,_.wk)(s,i,o,c.data);break;case"bayer_bggr8":(0,_.TD)(s,i,o,c.data);break;case"bayer_gbrg8":(0,_.eQ)(s,i,o,c.data);break;case"bayer_grbg8":(0,_.cS)(s,i,o,c.data);break;case"mono8":case"8UC1":(0,_.GT)(s,i,o,c.data);break;case"mono16":case"16UC1":(0,_.v$)(s,i,o,n,c.data,t);break;default:throw new Error(`Unsupported encoding ${r}`)}return self.createImageBitmap(c)}}}function B(e){e&&e.getContext("2d")?.clearRect(0,0,e.width,e.height)}function U({bitmap:e,canvas:t,geometry:s,hitmapCanvas:n,imageSmoothing:i,markerData:o}){const r=s.rotation%180===0?{width:e.width,height:e.height}:{width:e.height,height:e.width},c=t.getContext("2d");if(!c)return;c.imageSmoothingEnabled=i;const{markers:h=[],cameraModel:x}=o??{},y=t.width,g=t.height,u=(0,P.Y5)(r,t,s.zoomMode),f=new G(c,n);f.clearRect(0,0,t.width,t.height),f.save(),f.translate(y/2,g/2),f.translate(s.panZoom.x,s.panZoom.y),f.scale(s.panZoom.scale,s.panZoom.scale),f.scale(u,u),s.flipHorizontal&&f.scale(-1,1),s.flipVertical&&f.scale(1,-1),f.rotate(s.rotation),f.translate(-e.width/2,-e.height/2),f.drawImage(e,0,0);const{originalWidth:T=e.width,originalHeight:w=e.height}=o??{};f.scale(e.width/T,e.height/w);const I=f.getTransform();try{W(f,h,x,s.panZoom)}catch(m){console.warn("error painting markers:",m)}finally{f.restore()}return{...r,transform:I}}function W(e,t,s,n){for(const i of t){e.save();try{switch(e.startMarker(),i.type){case"circle":V(e,i,s);break;case"points":a(e,i,s,n);break;case"text":F(e,i,s);break}}catch(o){console.error("Unable to paint annotation to ImageView",o,i)}finally{e.restore()}}}function M(e,t,s,n,i,o){if(n<=0||i.a<=0)return;const{x:r,y:c}=p(o,t),{x:h,y:x}=p(o,s);e.beginPath(),e.moveTo(r,c),e.lineTo(h,x),e.lineWidth=n,e.strokeStyle=k(i),e.stroke()}function F(e,t,s){const{x:n,y:i}=p(s,t.position),o=t.text;if(!o)return;const r=t.fontSize,c=t.padding;if(e.font=`${r}px sans-serif`,e.textBaseline="bottom",t.backgroundColor){const h=e.measureText(o),x="fontBoundingBoxAscent"in h?h.fontBoundingBoxAscent+h.fontBoundingBoxDescent:r*1.2;e.fillStyle=k(t.backgroundColor),e.fillRect(n,i-x,Math.ceil(h.width+2*c),Math.ceil(x))}e.fillStyle=k(t.textColor),e.fillText(o,n+c,i)}function V(e,t,s){const{fillColor:n,outlineColor:i,radius:o,thickness:r,position:c}=t,h=n!=null&&n.a>0,x=i!=null&&i.a>0&&r>0;if(o<=0||!h&&!x)return;const{x:y,y:g}=p(s,c);e.beginPath(),e.arc(y,g,o,0,2*Math.PI),h&&(e.fillStyle=k(n),e.fill()),x&&(e.lineWidth=r,e.strokeStyle=k(i),e.stroke())}function a(e,t,s,n){switch(t.style){case"points":{for(let i=0;i<t.points.length;i++){const o=t.points[i],r=t.outlineColors[i],c=r||(t.outlineColor&&t.outlineColor.a>0?t.outlineColor:t.fillColor);t.thickness*n.scale<=A?d(e,o,t.thickness,t.thickness,void 0,c,s):l(e,o,t.thickness,t.thickness,void 0,c,s)}break}case"polygon":case"line_strip":{if(t.points.length===0)break;e.beginPath();const{x:i,y:o}=p(s,t.points[0]);e.moveTo(i,o);for(let r=1;r<t.points.length;r++){const c=p(s,t.points[r]);e.lineTo(c.x,c.y)}t.style==="polygon"&&(e.closePath(),t.fillColor&&t.fillColor.a>0&&(e.fillStyle=k(t.fillColor),e.fill())),t.outlineColor&&t.outlineColor.a>0&&t.thickness>0&&(e.strokeStyle=k(t.outlineColor),e.lineWidth=t.thickness,e.stroke());break}case"line_list":{const i=t.outlineColors.length===t.points.length/2;for(let o=0;o<t.points.length;o+=2){const r=i?t.outlineColors[o/2]:t.outlineColors.length>o?t.outlineColors[o]:t.outlineColor;M(e,t.points[o],t.points[o+1],t.thickness,r??{r:0,g:0,b:0,a:1},s)}break}}}function l(e,t,s,n,i,o,r){const c=o!=null&&o.a>0,h=i!=null&&i.a>0&&n>0;if(s<=0||!c&&!h)return;const{x,y}=p(r,t);e.beginPath(),e.arc(x,y,s,0,2*Math.PI),c&&(e.fillStyle=k(o),e.fill()),h&&(e.lineWidth=n,e.strokeStyle=k(i),e.stroke())}function d(e,t,s,n,i,o,r){const c=o!=null&&o.a>0,h=i!=null&&i.a>0&&n>0;if(s<=0||!c&&!h)return;const{x,y}=p(r,t),g=Math.round(s*2),u=Math.round(x-g/2),f=Math.round(y-g/2);c&&(e.fillStyle=k(o),e.fillRect(u,f,g,g)),h&&(e.lineWidth=n,e.strokeStyle=k(i),e.strokeRect(u,f,g,g))}}}]);

//# sourceMappingURL=4077.85e9c07cfc37d60ae027.js.map