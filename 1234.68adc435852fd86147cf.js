"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1234],{11234:(Xt,Y,e)=>{e.r(Y),e.d(Y,{default:()=>Ft,openSiblingStateTransitionsPanel:()=>Zt,transitionableRosTypes:()=>jt});var v=e(52322),nt=e(72994),at=e(86232),ot=e(68434),W=e(76635),c=e(2784),it=e(62515),lt=e(1547),rt=e(8740),G=e(57051),y=e(44668),z=e(59506),V=e(1012),X=e(81187);function ct(t,s=1/0){const i=(0,G.O4)(t),h=(0,c.useMemo)(()=>(0,V.UU)(i),[i]),a=z.V7({topics:h,historySize:s}),d=(0,X.wm)(i);return(0,c.useMemo)(()=>d(a),[d,a])}var J=e(61187),dt=e(14075),ut=e(82044),pt=e(76479),R=e(93812),ht=e(43809),mt=e(5681),ft=e(55601),vt=e(77075),gt=e(9839),yt=e.n(gt),K=e(68071),St=e(27999),Tt=e(25302);function bt(t,s){return(t%s+s)%s}const Q=[Tt.B,...K.A2];function k(t){const{path:s,pathIndex:i,startTime:h,y:a,blocks:d}=t,l={datasets:[],tooltips:[]};let m,u=[];const M=new Map;let b;for(const I of d){if(!I){u.push({x:NaN,y:NaN}),b=void 0,m=void 0;continue}for(const N of I){const p=(0,St.w0)(N.messageEvent,s.timestampMethod);if(!p)continue;const P=N.queriedData[0];if(N.queriedData.length!==1||!P)continue;const{constantName:B,value:r}=P,g=M.get(r);if(m&&(0,y.toSec)((0,y.subtract)(m,p))===0&&g===b||(m=p,Number.isNaN(r)&&typeof r!="string")||typeof r!="number"&&typeof r!="bigint"&&typeof r!="boolean"&&typeof r!="string")continue;const j=typeof r=="string"?yt()(r):Math.round(Number(r)),S=Q[bt(j,Object.values(Q).length)]??"grey",T=(0,y.toSec)((0,y.subtract)(p,h)),L={datasetIndex:g,x:T,y:a,path:s.value,value:r,constantName:B};l.tooltips.unshift(L);const A=g!==b;A&&(u.push({x:T,y:a}),u.push({x:NaN,y:NaN}));const D=B!=null?`${B} (${String(r)})`:String(r);if(g==null){M.set(r,l.datasets.length),u=[{x:T,y:a,label:D,labelColor:S}];const $={borderWidth:10,borderColor:S,data:u,label:i.toString(),pointBackgroundColor:(0,K.eE)(S),pointBorderColor:"transparent",pointHoverRadius:3,pointRadius:1.25,pointStyle:"circle",showLine:!0,datalabels:{color:S}};b=l.datasets.length,l.datasets.push($)}else u=l.datasets[g]?.data??[],A?u.push({x:T,y:a,label:D,labelColor:S}):u.push({x:T,y:a}),b=g}}return l}var Z=e(76665),xt=e(5817),w=e.n(xt),Mt=e(36721),Pt=e(39367);function q(t){if(t!=="")return t??void 0}function _(t,s){return q(t.label)??q(t.value)??`Series ${s+1}`}const Ct=w()((t,s)=>({actions:[{type:"action",id:"delete-series",label:"Delete series",display:"inline",icon:"Clear"}],label:_(t,s),fields:{value:{label:"Message path",input:"messagepath",value:t.value,validTypes:Mt.plotableRosTypes},label:{input:"string",label:"Label",value:t.label},timestampMethod:{input:"select",label:"Timestamp",value:t.timestampMethod,options:[{label:"Receive Time",value:"receiveTime"},{label:"Header Stamp",value:"headerStamp"}]}}})),Nt=w()(t=>({label:"Series",children:Object.fromEntries(t.map((i,h)=>[`${h}`,Ct(i,h)])),actions:[{type:"action",id:"add-series",label:"Add series",display:"inline",icon:"Addchart"}]}));function Bt(t){return{general:{label:"General",fields:{isSynced:{label:"Sync with other plots",input:"boolean",value:t.isSynced}}},paths:Nt(t.paths)}}function Dt(t,s,i){const h=(0,Pt.W0)(),a=(0,c.useCallback)(d=>{if(d.action==="update"){const{input:l,path:m,value:u}=d.payload;l==="boolean"&&(0,W.isEqual)(m,["general","isSynced"])?s({isSynced:u}):s((0,Z.ZP)(M=>{(0,W.set)(M,m,u)}))}if(d.action==="perform-node-action"){if(d.payload.id==="add-series")s((0,Z.ZP)(l=>{l.paths.push({timestampMethod:"receiveTime",value:"",enabled:!0})}));else if(d.payload.id==="delete-series"){const l=d.payload.path[1];s((0,Z.ZP)(m=>{m.paths.splice(Number(l),1)}))}}},[s]);(0,c.useEffect)(()=>{h({actionHandler:a,focusedPath:i,nodes:Bt(t)})},[a,t,i,h])}var It=e(2784);const jt=["bool","int8","uint8","int16","uint16","int32","uint32","int64","uint64","string","json"],At=vt.R.MONOSPACE,Et=10,Wt="bold",zt=(0,rt.ZL)()(t=>({chartWrapper:{position:"relative",marginTop:t.spacing(.5)},chartOverlay:{top:0,left:0,right:0,pointerEvents:"none"},row:{paddingInline:t.spacing(.5),pointerEvents:"none"},button:{minWidth:"auto",textAlign:"left",pointerEvents:"auto",fontWeight:"normal",padding:t.spacing(0,1),maxWidth:"100%","&:hover":{backgroundColor:(0,lt.Z)(t.palette.background.paper).setAlpha(.67).toString(),backgroundImage:`linear-gradient(to right, ${t.palette.action.focus}, ${t.palette.action.focus})`},".MuiButton-endIcon":{opacity:.8,fontSize:14,marginLeft:t.spacing(.5),svg:{fontSize:"1em",height:"1em",width:"1em"}},":not(:hover) .MuiButton-endIcon":{display:"none"}}})),Rt={datalabels:{display:"auto",anchor:"center",align:-45,offset:0,clip:!0,font:{family:At,size:Et,weight:Wt}},zoom:{zoom:{enabled:!0,mode:"x",sensitivity:3,speed:.1},pan:{mode:"x",enabled:!0,speed:20,threshold:10}}};function Zt(t,s){t({panelType:"StateTransitions",updateIfExists:!0,siblingConfigCreator:i=>({...i,paths:(0,W.uniq)(i.paths.concat([{value:s,timestampMethod:"receiveTime"}]))})})}function Lt(t){return t.playerState.activeData?.currentTime}const Ot=It.memo(function(s){const{config:i,saveConfig:h}=s,{paths:a}=i,{classes:d}=zt(),l=(0,c.useMemo)(()=>a.map(({value:o})=>o),[a]),m=(0,c.useMemo)(()=>(0,V.UU)(l),[l]),{openPanelSettings:u}=(0,ft.WV)(),{id:M}=(0,ut.R)(),{setSelectedPanelIds:b}=(0,mt.iy)(),[I,N]=(0,c.useState)(void 0),{startTime:p}=z.Ui(),P=(0,J.An)(Lt),B=(0,c.useMemo)(()=>!P||!p?void 0:(0,y.toSec)((0,y.subtract)(P,p)),[P,p]),r=ct(l),g=(0,X.wm)(l),j=(0,z.Bv)(m),S=(0,c.useMemo)(()=>j.map(g),[j,g]),{height:T,heightPerTopic:L}=(0,c.useMemo)(()=>{const o=a.length*64;return{height:Math.max(80,o+30),heightPerTopic:o/a.length}},[a.length]),{datasets:A,tooltips:D,minY:O}=(0,c.useMemo)(()=>{let o,n=[],f=[];return p?(a.forEach((C,H)=>{const E=(H+1)*6*-1;o=Math.min(o??E,E-3);const et=S.map(x=>x[C.value]);{const{datasets:x,tooltips:U}=k({path:C,startTime:p,y:E,pathIndex:H,blocks:et});f=f.concat(x),n=n.concat(U)}if(et.some(x=>x!=null))return;const st=r[C.value];if(st){const{datasets:x,tooltips:U}=k({path:C,startTime:p,y:E,pathIndex:H,blocks:[st]});f=f.concat(x),n=n.concat(U)}}),{datasets:f,tooltips:n,minY:o}):{datasets:f,tooltips:n,minY:o}},[r,S,a,p]),$=(0,c.useMemo)(()=>({ticks:{display:!1},grid:{display:!1},type:"linear",min:O,max:-3}),[O]),Ht=(0,c.useMemo)(()=>({type:"linear",border:{display:!1}}),[]),{width:Ut,ref:F}=(0,it.NB)({handleHeight:!1,refreshRate:0,refreshMode:"debounce"});(0,c.useEffect)(()=>{const o=F.current,n=f=>{f.preventDefault()};return o?.addEventListener("wheel",n),()=>{o?.removeEventListener("wheel",n)}},[F]);const tt=(0,J.m7)(),Yt=(0,c.useCallback)(({x:o})=>{const{seekPlayback:n,playerState:{activeData:{startTime:f}={}}}=tt();if(!n||o==null||f==null)return;const C=(0,y.add)(f,(0,y.fromSec)(o));n(C)},[tt]),Gt=(0,G.O4)({datasets:A});Dt(i,h,I);const Vt=(0,c.useMemo)(()=>{const o=new Map;for(const n of D)o.set(`${n.x}:${n.y}:${n.datasetIndex}`,n);return o},[D]);return(0,v.jsxs)(R.Z,{flexGrow:1,overflow:"hidden",style:{zIndex:0},children:[(0,v.jsx)(pt.Z,{}),(0,v.jsx)(R.Z,{fullWidth:!0,flex:"auto",overflowX:"hidden",overflowY:"auto",children:(0,v.jsxs)("div",{className:d.chartWrapper,style:{height:T},ref:F,children:[(0,v.jsx)(ht.Z,{zoom:!0,isSynced:i.isSynced,showXAxisLabels:!0,width:Ut??0,height:T,data:Gt,type:"scatter",xAxes:Ht,xAxisIsPlaybackTime:!0,yAxes:$,plugins:Rt,tooltips:Vt,onClick:Yt,currentTime:B}),(0,v.jsx)(R.Z,{className:d.chartOverlay,position:"absolute",paddingTop:.5,children:a.map((o,n)=>(0,v.jsx)("div",{className:d.row,style:{height:L},children:(0,v.jsx)(at.Z,{size:"small",color:"inherit",className:d.button,endIcon:(0,v.jsx)(nt.An,{}),onClick:()=>{b([M]),u(),N(["paths",String(n)])},children:(0,v.jsx)(ot.Z,{variant:"inherit",noWrap:!0,children:_(o,n)})})},n))})]})})]})}),$t={paths:[{value:"",timestampMethod:"receiveTime"}],isSynced:!0},Ft=(0,dt.Z)(Object.assign(Ot,{panelType:"StateTransitions",defaultConfig:$t}))}}]);

//# sourceMappingURL=1234.68adc435852fd86147cf.js.map