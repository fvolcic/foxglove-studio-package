"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1913],{41913:(ae,x,t)=>{t.r(x),t.d(x,{default:()=>q});var a=t(52322),j=t(65992),E=t(86232),J=t(53984),b=t(68434),R=t(76665),z=t(76635),i=t(2784),D=t(57051),F=t(59506),P=t(66541),H=t(14075),V=t(76479),p=t(93812),L=t(91004),v=t(61187),S=t(24304);function U({topic:e,schemaName:r,datatypes:n,name:l}){const[u]=(0,i.useState)(()=>(0,L.Z)()),o=(0,v.An)(c=>c.playerState.capabilities.includes(S.C.advertise)),h=(0,v.An)(c=>c.publish),g=(0,v.An)(c=>c.setPublishers);return(0,i.useEffect)(()=>{if(o)return g(u,[{topic:e,schemaName:r,options:{datatypes:n}}]),()=>g(u,[])},[u,e,r,n,l,g,o]),(0,i.useCallback)(c=>{o&&h({topic:e,msg:c})},[h,e,o])}var W=t(39367),$=t(77075);const k={bool:!1,int8:0,uint8:0,int16:0,uint16:0,int32:0,uint32:0,int64:0,uint64:0,float32:0,float64:0,string:"",time:{sec:0,nsec:0},duration:{sec:0,nsec:0}};function T(e,r){const n=k[r];if(n!=null)return n;const l=e.get(r)?.definitions;if(!l)return;const u={};for(const o of l){if(o.isConstant??!1)continue;const h=T(e,o.type);o.isArray??!1?o.arrayLength!=null?u[o.name]=new Array(o.arrayLength).fill(h):u[o.name]=[h]:u[o.name]=h}return u}var G=t(2784);function K(e){return{general:{fields:{advancedView:{label:"Editing mode",input:"boolean",value:e.advancedView},buttonText:{label:"Button title",input:"string",value:e.buttonText},buttonTooltip:{label:"Button tooltip",input:"string",value:e.buttonTooltip},buttonColor:{label:"Button color",input:"rgb",value:e.buttonColor}}}}}const Q=(0,j.ZP)(E.Z,{shouldForwardProp:e=>e!=="buttonColor"})(({theme:e,buttonColor:r})=>{if(r==null)return{};const n=e.palette.augmentColor({color:{main:r}});return{backgroundColor:n.main,color:n.contrastText,"&:hover":{backgroundColor:n.dark}}}),X=(0,j.ZP)(J.Z)(({theme:e})=>({width:"100%",height:"100%",textAlign:"left",backgroundColor:e.palette.background.paper,overflow:"hidden",padding:e.spacing(1,.5),".MuiInputBase-input":{height:"100% !important",font:"inherit",lineHeight:1.4,fontFamily:$.R.MONOSPACE,fontSize:"100%",overflow:"auto !important",resize:"none"}}));function Z(e){return e.name}function Y(e){let r,n;try{const l=JSON.parse(e);Array.isArray(l)?n="Message content must be an object, not an array":l==null?n="Message content must be an object, not null":typeof l!="object"?n=`Message content must be an object, not \u2018${typeof l}\u2019`:r=l}catch(l){n=e.length!==0?l.message:""}return{error:n,parsedObject:r}}function w(e){const{topics:r,datatypes:n,capabilities:l}=(0,F.Ui)(),{config:{topicName:u="",datatype:o="",buttonText:h="Publish",buttonTooltip:g="",buttonColor:c="#00A871",advancedView:A=!0,value:y=""},saveConfig:d}=e,N=U({name:"Publish",topic:u,schemaName:o,datatypes:n}),_=(0,i.useMemo)(()=>Array.from(n.keys()).sort(),[n]),{error:I,parsedObject:m}=(0,i.useMemo)(()=>Y(y),[y]),M=(0,W.W0)(),C=(0,i.useRef)();(0,i.useEffect)(()=>{if(o.length>0&&C.current!=null&&o!==C.current&&n.get(o)!=null){const s=T(n,o);if(s!=null){const f=JSON.stringify(s,void 0,2);d({value:f})}}C.current=o},[d,o,n]);const O=(0,i.useCallback)(s=>{s.action==="update"&&d((0,R.ZP)(f=>{(0,z.set)(f,s.payload.path.slice(1),s.payload.value)}))},[d]);(0,i.useEffect)(()=>{M({actionHandler:O,nodes:K(e.config)})},[O,e.config,M]);const ee=(0,i.useCallback)((s,f)=>{d({topicName:f})},[d]),te=(0,i.useCallback)((s,f)=>{d(typeof s=="string"?{topicName:s}:{topicName:s.name,datatype:s.schemaName}),f.blur()},[d]),ne=(0,i.useCallback)((s,f)=>{d({datatype:s}),f.blur()},[d]),oe=(0,D.Jg)((0,i.useCallback)(()=>{if(u.length!==0&&m!=null)N(m);else throw new Error("called _publish() when input was invalid")},[N,m,u])),B=l.includes(S.C.advertise);return(0,a.jsxs)(p.Z,{fullHeight:!0,children:[(0,a.jsx)(V.Z,{}),A&&(0,a.jsxs)(p.Z,{flex:"auto",padding:2,gap:1,paddingBottom:0,children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)(p.Z,{alignItems:"center",gap:1,padding:.5,direction:"row",flexShrink:0,children:[(0,a.jsx)(b.Z,{color:"text.secondary",variant:"body2",component:"label",children:"Topic:"}),(0,a.jsx)(P.Z,{placeholder:"Choose a topic",items:[...r],hasError:!1,onChange:ee,onSelect:te,selectedItem:{name:u,schemaName:""},getItemText:Z,getItemValue:Z})]}),(0,a.jsxs)(p.Z,{alignItems:"center",gap:1,padding:.5,direction:"row",flexShrink:0,children:[(0,a.jsx)(b.Z,{color:"text.secondary",variant:"body2",component:"label",children:"Datatype:"}),(0,a.jsx)(P.Z,{placeholder:"Choose a datatype",items:_,onSelect:ne,selectedItem:o,selectOnFocus:!0})]})]}),(0,a.jsx)(p.Z,{flex:"auto",children:(0,a.jsx)(X,{multiline:!0,placeholder:"Enter message content as JSON",value:y,onChange:s=>d({value:s.target.value})})})]}),(0,a.jsxs)(p.Z,{direction:"row",flex:"0 0 auto",alignItems:"flex-start",justifyContent:A?"flex-end":"center",padding:2,children:[I&&(0,a.jsx)(p.Z,{flex:"auto",padding:.5,justifyContent:"center",children:(0,a.jsx)(b.Z,{variant:"body2",color:"error.main",children:I})}),(0,a.jsx)(Q,{variant:"contained",size:"large",buttonColor:c||void 0,title:B?g:"Connect to ROS to publish data",disabled:!B||m==null,onClick:oe,children:h})]})]})}const q=(0,H.Z)(Object.assign(G.memo(w),{panelType:"Publish",defaultConfig:{topicName:"",datatype:"",buttonText:"Publish",buttonTooltip:"",buttonColor:"#00A871",advancedView:!0,value:""}}))}}]);

//# sourceMappingURL=1913.b28f6ba1506207a4235e.js.map