"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7463],{66838:(h,F,t)=>{t.r(F),t.d(F,{default:()=>st});var e=t(52322),U=t(93553),re=t(28504),D=t(65992),le=t(24394),de=t(41939),z=t(68434),H=t(63249),P=t(86232),ce=t(47746),b=t(56961),E=t(66198),ue=t(3104),A=t(2784),pe=t(91004),Me=t(29268),ge=t(14075),je=t(76479),d=t(93812),J=t(5681),X=t(31748),K=t(70943),$=t(45434),Ae=t(21759),Y=t(72283),ye=t(27379),me=t(85321),he=t(16549),xe=t(69208),Ie=t(35296),T=t(15400),L=t(81774),fe=t(83993),w=t(82056),De=t(76635),ve=t(56924);const Ne={Hint:(0,e.jsx)(he.Z,{fontSize:"small"}),Info:(0,e.jsx)(xe.Z,{fontSize:"small",color:"info"}),Warning:(0,e.jsx)(Ie.Z,{fontSize:"small",color:"warning"}),Error:(0,e.jsx)(me.Z,{fontSize:"small",color:"error"})},Ce=(0,D.ZP)(T.ZP)(({theme:n})=>({paddingTop:0,paddingBottom:0,".MuiListItemText-root":{display:"flex",flexDirection:"row",gap:n.spacing(1)},".MuiListItemIcon-root":{minWidth:n.spacing(3)}})),Te=({diagnostics:n})=>n.length===0?(0,e.jsx)(d.Z,{gap:.5,padding:2,children:(0,e.jsx)(z.Z,{variant:"body2",color:"text.secondary",children:"No problems to display."})}):(0,e.jsx)(L.Z,{dense:!0,disablePadding:!0,children:n.map(({severity:i,message:l,source:g,startColumn:s,startLineNumber:o},y)=>{const p=(0,De.invert)(ve.H_)[i]??"Error",f=o!=null&&s!=null?`[${o+1},${s+1}]`:"";return(0,e.jsxs)(Ce,{children:[(0,e.jsx)(fe.Z,{children:Ne[p]}),(0,e.jsx)(w.Z,{primary:l,primaryTypographyProps:{noWrap:!0},secondary:`${g} ${f}`,secondaryTypographyProps:{color:"text.secondary",noWrap:!0}})]},`${l}_${y}`)})});var O=t(14117),we=t(30650),Ze=t(11701);const Se=({logs:n})=>{const i=(0,Ze.lk)(),l={string:i.base0B,number:i.base09,boolean:i.base09,object:i.base08,undefined:i.base08};return n.length===0?(0,e.jsxs)(d.Z,{gap:.5,padding:2,children:[(0,e.jsx)(z.Z,{variant:"body2",color:"text.secondary",children:"No logs to display."}),(0,e.jsxs)(z.Z,{variant:"body2",color:"text.secondary",children:["Invoke ",(0,e.jsx)("code",{children:"log(someValue)"})," in your Foxglove Studio node code to see data printed here."]})]}):(0,e.jsx)(L.Z,{dense:!0,disablePadding:!0,children:n.map(({source:g,value:s},o)=>{const y=s!=null&&typeof s=="object";return(0,e.jsx)(T.ZP,{disablePadding:!0,secondaryAction:(0,e.jsx)(H.Z,{underline:"always",variant:"body2",color:"text.secondary",children:g}),children:(0,e.jsx)(O.Z,{children:y?(0,e.jsx)(we.ZP,{hideRoot:!0,data:s,invertTheme:!1,theme:i}):(0,e.jsx)(w.Z,{primary:s==null||s===!1?String(s):s,primaryTypographyProps:{color:l[typeof s]??"text.primary"}})})},`${o}${g}`)})})},ze=36,q=(0,D.ZP)(K.Z)(({theme:n})=>({minHeight:"auto",minWidth:n.spacing(8),padding:n.spacing(1.5,2),color:n.palette.text.secondary,"&.Mui-selected":{color:n.palette.text.primary}})),be=(0,D.ZP)($.Z)({minHeight:ze,position:"relative",bottom:-1}),_=(0,D.ZP)(Ae.Z)(({theme:n})=>({alignItems:"center",".MuiBadge-badge":{margin:n.spacing(-.25,0,-.25,1),position:"relative",transform:"none","&.MuiBadge-invisible":{display:"none"}}})),Le=({nodeId:n,isSaved:i,save:l,diagnostics:g,logs:s})=>{const[o,y]=(0,A.useState)("closed"),[p,f]=(0,A.useState)(!0),{clearUserNodeLogs:Z}=(0,X.BQ)(),m=(0,A.useRef)(null),S=(I,j)=>{y(j)},v=I=>{o===I&&y("closed")};return(0,A.useEffect)(()=>{p&&m.current&&(m.current.scrollTop=m.current.scrollHeight)},[p,s]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(Y.Z,{elevation:0,children:[(0,e.jsx)(b.Z,{}),(0,e.jsxs)(d.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:1,paddingRight:1,children:[(0,e.jsxs)(be,{textColor:"inherit",value:o!=="closed"?o:!1,onChange:S,children:[(0,e.jsx)(q,{label:(0,e.jsx)(_,{color:"error",badgeContent:g.length,invisible:g.length===0,children:"Problems"}),value:"diagnostics","data-testid":"np-errors",onClick:()=>v("diagnostics")}),(0,e.jsx)(q,{label:(0,e.jsx)(_,{color:"error",badgeContent:s.length,invisible:s.length===0,children:"Logs"}),value:"logs","data-testid":"np-logs",onClick:()=>v("logs")})]}),(0,e.jsxs)(d.Z,{direction:"row",alignItems:"center",gap:.5,children:[o==="logs"&&(0,e.jsx)(P.Z,{size:"small",color:"primary",variant:"contained","data-testid":"np-logs-clear",disabled:s.length===0,onClick:()=>{n!=null&&Z(n)},children:"Clear logs"}),(0,e.jsx)(P.Z,{size:"small",color:"primary",variant:"contained",disabled:i,title:"Ctrl/Cmd + S",onClick:()=>{n!=null&&(l(),Z(n))},children:i?"Saved":"Save"})]})]}),o!=="closed"&&(0,e.jsx)(b.Z,{})]}),(0,e.jsx)(Y.Z,{elevation:0,children:(0,e.jsx)(d.Z,{fullHeight:!0,position:"relative",children:(0,e.jsx)(ye.Z,{onScroll:({currentTarget:I})=>{const j=I.scrollHeight-I.scrollTop>I.clientHeight;j&&p?f(!1):!j&&!p&&f(!0)},ref:m,in:o!=="closed",children:(0,e.jsxs)(d.Z,{overflow:"auto",style:{height:150},children:[o==="diagnostics"&&(0,e.jsx)(Te,{diagnostics:g}),o==="logs"&&(0,e.jsx)(Se,{logs:s})]})})})})]})};var Oe=t(92679),ke=t(28614),Ee=t(50334),Pe=t(63077),Ye=t(44419),Be=t(65154),ee=t(34651),Qe=t(64942);const Re=[{name:"Skeleton",description:"An empty script",template:`import { Input, Message } from "./types";

type Output = {};

export const inputs = ["/topic"];
export const output = "/studio_script/output_topic";

export default function node(event: Input<"/topic">): Output {
  return {};
};
`},{name:"Markers",description:"A script that publishes one or more markers",template:`// This example shows how to publish a Marker message from a User Script.
//
// Publishing Marker messages with a User Script is a good way to visualize non-visual
// data.
//
// For example, if your robot calculates some projected paths and publishes them between two
// subsystems as a message, you can make a node that visualizes the path as a line list marker and view it in the 3D
// panel.

import { Input, Message } from "./types";

// The \`./markers\` utility provides a helper function to build a Marker.
import { buildRosMarker, MarkerTypes } from "./markers";

type GlobalVariables = { id: number };

export const inputs = ["/input/topic"];
export const output = "/studio_script/my_custom_topic";

// Our node will output a Marker message.
type Marker = Message<"visualization_msgs/Marker">;

// If you want to output multiple markers for a single input message, use a MarkerArray.
// The marker array message has one field, \`markers\`, which is an array of Marker messaages.
// type MarkerArray = Message<"visualization_msgs/MarkerArray">;

export default function node(event: Input<"/input/topic">, globalVars: GlobalVariables): Marker {
  return buildRosMarker({
      // Add any fields you want to set in the marker here
      // Any fields you omit will use default values
      // e.g 'type: MarkerTypes.ARROW' */
  });
};
`},{name:"Multiple Inputs",description:"A script that receives inputs on multiple topics",template:`// This example shows how to subscribe to multiple input topics.
//
// NOTE:
// User Scripts can subscribe to multiple input topics, but can only publish on a single topic.

import { Input } from "./types";

type Output = { topic: string };
type GlobalVariables = { id: number };

// List all the input topics in the \`input\` array
export const inputs = ["/input/topic", "/input/another"];
export const output = "/studio_script/output_topic";

// Make an InputEvent type alias. Since our node will get a message from either input topic, we need to enumerate the topics.
type InputEvent = Input<"/input/topic"> | Input<"/input/another">;

export default function node(event: InputEvent, globalVars: GlobalVariables): Output {
  // Remember that your node will get messages on each topic, so you
  // need to check each event's topic to know which fields are available on the message.
  switch (event.topic) {
    case "/input/topic":
      // topic specific input logic
      // Our message fields are specific to our topic message
      break;
    case "/input/another":
      // another specific logic
      break;
  }

  // Nodes can only output one type of message regardless of the inputs
  // Here we echo back the input topic as an example.
  return {
    topic: event.topic,
  };
};
`},{name:"GPS Location",description:"A script that publishes foxglove.LocationFix",template:`// This example shows how to publish a foxglove.LocationFix message
//
// https://foxglove.dev/docs/studio/messages/location-fix
//
// You can visualize this message with the Map panel
// https://foxglove.dev/docs/studio/panels/map

import { Input, Message } from "./types";

export const inputs = ["/input/topic"];
export const output = "/studio_script/my_gps";

// Our node will output a LocationFix message
type LocationFix = Message<"foxglove.LocationFix">;

export default function node(event: Input<"/input/topic">): LocationFix {
  return {
    latitude: 51.477928,
    longitude: -0.001545,
    altitude: 0,
    position_covariance_type: 0,
    position_covariance: new Float64Array(),
  };
};
`}],B=(0,D.ZP)(K.Z)(({theme:n})=>({minWidth:"auto",padding:n.spacing(1,1.125)})),Ve=(0,D.ZP)("div")(({theme:n})=>({backgroundColor:n.palette.grey[200],width:350,overflow:"auto"})),We=({nodes:n,selectNode:i,deleteNode:l,collapse:g,selectedNodeId:s})=>(0,e.jsxs)(d.Z,{flex:"auto",children:[(0,e.jsx)(Q,{title:"Scripts",collapse:g}),(0,e.jsx)(L.Z,{dense:!0,children:Object.keys(n).map(o=>(0,e.jsx)(T.ZP,{disablePadding:!0,selected:s===o,secondaryAction:(0,e.jsx)(E.Z,{size:"small",onClick:()=>l(o),edge:"end","aria-label":"delete",title:"Delete",color:"error",children:(0,e.jsx)(Ee.Z,{fontSize:"small"})}),children:(0,e.jsx)(O.Z,{onClick:()=>i(o),children:(0,e.jsx)(w.Z,{primary:n[o]?.name,primaryTypographyProps:{variant:"body1"}})})},o))})]}),{utilityFiles:Ge}=(0,Qe.v)(),Q=({title:n,subheader:i,collapse:l})=>(0,e.jsx)(Be.Z,{title:n,titleTypographyProps:{variant:"h5",gutterBottom:!0},subheader:i,subheaderTypographyProps:{variant:"body2",color:"text.secondary"},action:(0,e.jsx)(E.Z,{size:"small",onClick:l,title:"Collapse",children:(0,e.jsx)(Oe.Z,{})})}),Fe=({userNodes:n,selectNode:i,deleteNode:l,selectedNodeId:g,explorer:s,updateExplorer:o,setScriptOverride:y,script:p,addNewNode:f})=>{const Z=s==="nodes",m=s==="utils",S=s==="templates",v=(0,A.useCallback)(N=>{const a=ee.Uri.parse(`file://${N}`),c=ee.editor.getModel(a);c&&y({filePath:c.uri.path,code:c.getValue(),readOnly:!0,selection:void 0},2)},[y]),I=(0,A.useMemo)(()=>{switch(s){case void 0:return!1;case"nodes":return"nodes";case"templates":return"templates";case"utils":return"utils"}return!1},[s]),j=(0,A.useMemo)(()=>({nodes:(0,e.jsx)(We,{nodes:n,selectNode:i,deleteNode:l,collapse:()=>o(void 0),selectedNodeId:g}),utils:(0,e.jsxs)(d.Z,{flex:"auto",position:"relative",children:[(0,e.jsx)(Q,{collapse:()=>o(void 0),title:"Utilities",subheader:(0,e.jsxs)(z.Z,{variant:"body2",color:"text.secondary",children:["You can import any of these modules into your script using the following syntax:"," ",(0,e.jsx)("pre",{children:'import { ... } from "./pointClouds.ts".'})]})}),(0,e.jsxs)(L.Z,{dense:!0,children:[Ge.map(({fileName:N,filePath:a})=>(0,e.jsx)(T.ZP,{disablePadding:!0,onClick:v.bind(void 0,a),selected:p?a===p.filePath:!1,children:(0,e.jsx)(O.Z,{children:(0,e.jsx)(w.Z,{primary:N,primaryTypographyProps:{variant:"body1"}})})},a)),(0,e.jsx)(T.ZP,{disablePadding:!0,onClick:v.bind(void 0,"/studio_script/generatedTypes.ts"),selected:p?p.filePath==="/studio_script/generatedTypes.ts":!1,children:(0,e.jsx)(O.Z,{children:(0,e.jsx)(w.Z,{primary:"generatedTypes.ts",primaryTypographyProps:{variant:"body1"}})})})]})]}),templates:(0,e.jsxs)(d.Z,{flex:"auto",children:[(0,e.jsx)(Q,{title:"Templates",subheader:"Create scripts from these templates, click a template to create a new script.",collapse:()=>o(void 0)}),(0,e.jsx)(L.Z,{dense:!0,children:Re.map(({name:N,description:a,template:c})=>(0,e.jsx)(T.ZP,{disablePadding:!0,onClick:()=>f(c),children:(0,e.jsx)(O.Z,{children:(0,e.jsx)(w.Z,{primary:N,primaryTypographyProps:{variant:"body1"},secondary:a})})},N))})]})}),[f,l,v,p,i,g,o,n]);return(0,e.jsx)(Y.Z,{elevation:0,children:(0,e.jsxs)(d.Z,{direction:"row",fullHeight:!0,children:[(0,e.jsxs)($.Z,{orientation:"vertical",value:I,children:[(0,e.jsx)(B,{disableRipple:!0,value:"nodes",title:"Scripts",icon:(0,e.jsx)(Ye.Z,{fontSize:"large"}),"data-testid":"node-explorer",onClick:()=>o(Z?void 0:"nodes")}),(0,e.jsx)(B,{disableRipple:!0,value:"utils",title:"Utilities",icon:(0,e.jsx)(ke.Z,{fontSize:"large"}),"data-testid":"utils-explorer",onClick:()=>o(m?void 0:"utils")}),(0,e.jsx)(B,{disableRipple:!0,value:"templates",title:"Templates",icon:(0,e.jsx)(Pe.Z,{fontSize:"large"}),"data-testid":"templates-explorer",onClick:()=>o(S?void 0:"templates")})]}),s!=null&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(b.Z,{flexItem:!0,orientation:"vertical"}),(0,e.jsx)(Ve,{children:j[s]})]}),(0,e.jsx)(b.Z,{flexItem:!0,orientation:"vertical"})]})})};var Ue=t(39367),x=t(2784);const He=x.lazy(async()=>await t.e(6221).then(t.bind(t,76221))),Je=`// The ./types module provides helper types for your Input events and messages.
import { Input, Message } from "./types";

// Your script can output well-known message types, any of your custom message types, or
// complete custom message types.
//
// Use \`Message\` to access your data source types or well-known types:
// type Twist = Message<"geometry_msgs/Twist">;
//
// Conventionally, it's common to make a _type alias_ for your script's output type
// and use that type name as the return type for your script function.
// Here we've called the type \`Output\` but you can pick any type name.
type Output = {
  hello: string;
};

// These are the topics your script "subscribes" to. Studio will invoke your script function
// when any message is received on one of these topics.
export const inputs = ["/input/topic"];

// Any output your script produces is "published" to this topic. Published messages are only visible within Studio, not to your original data source.
export const output = "/studio_script/output_topic";

// This function is called with messages from your input topics.
// The first argument is an event with the topic, receive time, and message.
// Use the \`Input<...>\` helper to get the correct event type for your input topic messages.
export default function script(event: Input<"/input/topic">): Output {
  return {
    hello: "world!",
  };
};`,Xe=(0,D.ZP)("div",{shouldForwardProp:n=>n!=="isSaved"})(({isSaved:n,theme:i})=>({display:n?"none":"initial",width:6,height:6,borderRadius:"50%",top:"50%",position:"absolute",right:i.spacing(1),transform:"translateY(-50%)",backgroundColor:i.palette.text.secondary})),Ke=(0,D.ZP)(le.Z)(({theme:n})=>({".MuiInput-input":{padding:n.spacing(1)}}));function $e(n){return{general:{fields:{autoFormatOnSave:{input:"boolean",label:"Auto-format on save",value:n.autoFormatOnSave}}}}}const qe=({addNewNode:n})=>(0,e.jsx)(Me.Z,{children:(0,e.jsx)(de.Z,{maxWidth:"xs",children:(0,e.jsxs)(d.Z,{justifyContent:"center",alignItems:"center",gap:1,fullHeight:!0,children:[(0,e.jsxs)(z.Z,{variant:"inherit",gutterBottom:!0,children:["Welcome to User Scripts!",(0,e.jsx)("br",{}),"Get started by reading the"," ",(0,e.jsx)(H.Z,{color:"primary",underline:"hover",href:"https://foxglove.dev/docs/studio/panels/user-scripts",target:"_blank",children:"docs"}),", or just create a new script."]}),(0,e.jsx)(P.Z,{color:"inherit",variant:"contained",onClick:()=>n(),startIcon:(0,e.jsx)(U.Z,{}),children:"New script"})]})})}),_e=Object.freeze({}),et=n=>n.selectedLayout?.data?.userNodes??_e;function tt(n){const{config:i,saveConfig:l}=n,{autoFormatOnSave:g=!1,selectedNodeId:s,editorForStorybook:o}=i,y=(0,Ue.W0)(),p=(0,ce.Z)(),[f,Z]=x.useState(void 0),m=(0,J.NS)(et),{state:{nodeStates:S,rosLib:v,typesLib:I}}=(0,X.BQ)(),{setUserNodes:j}=(0,J._B)(),N=(s!=null?S[s]?.diagnostics:void 0)??[],a=s!=null?m[s]:void 0,[c,k]=x.useState([]),u=c.length>0?c[c.length-1]:void 0,R=!!a&&!!u&&u.filePath===a.name,te=!R||u.code===a.sourceCode,ot=(s!=null?S[s]?.logs:void 0)??[],[ne,se]=(0,A.useState)(()=>u?u.filePath+(u.readOnly?" (READONLY)":""):"script name"),V=p.palette.mode==="dark",it={backgroundColor:p.palette.background[V?"default":"paper"],width:`${Math.max(ne.length+4,10)}ch`},oe=(0,A.useCallback)(r=>{if(r.action!=="update")return;const{input:M,value:C,path:lt}=r.payload;M==="boolean"&&lt[1]==="autoFormatOnSave"&&l({autoFormatOnSave:C})},[l]);(0,A.useEffect)(()=>{y({actionHandler:oe,nodes:$e(i)})},[oe,i,y]),x.useLayoutEffect(()=>{if(a){const r=n.config.additionalBackStackItems??[];k([{filePath:a.name,code:a.sourceCode,readOnly:!1},...r])}},[n.config.additionalBackStackItems,a]),x.useLayoutEffect(()=>{se(()=>u?u.filePath+(u.readOnly?" (READONLY)":""):"script name")},[u]);const W=(0,A.useCallback)(()=>{s!=null&&a&&u&&R&&j({[s]:{...a,sourceCode:u.code}})},[u,R,a,s,j]),G=x.useCallback(r=>{W();const M=(0,pe.Z)(),C=r??Je;j({[M]:{sourceCode:C,name:`${M.split("-")[0]}`}}),l({selectedNodeId:M})},[l,W,j]),ie=x.useCallback(r=>{s==null||r==null||r===""||!a||j({[s]:{...a,sourceCode:r}})},[a,s,j]),ae=x.useCallback((r,M)=>{M!=null&&M>0&&c.length>=M?k([...c.slice(0,M-1),r]):k([...c,r])},[c]),at=x.useCallback(()=>{k(c.slice(0,c.length-1))},[c]),rt=x.useCallback(r=>{const M=[...c];if(M.length>0){const C=M.pop();C&&!C.readOnly&&k([...M,{...C,code:r}])}},[c]);return(0,e.jsxs)(d.Z,{fullHeight:!0,children:[(0,e.jsx)(je.Z,{}),(0,e.jsx)(b.Z,{}),(0,e.jsxs)(d.Z,{direction:"row",fullHeight:!0,overflow:"hidden",children:[(0,e.jsx)(Fe,{explorer:f,updateExplorer:Z,selectNode:r=>{W(),l({selectedNodeId:r})},deleteNode:r=>{j({...m,[r]:void 0}),l({selectedNodeId:void 0})},selectedNodeId:s,userNodes:m,script:u,setScriptOverride:ae,addNewNode:G}),(0,e.jsxs)(d.Z,{flexGrow:1,fullHeight:!0,overflow:"hidden",style:{backgroundColor:p.palette.background[V?"paper":"default"]},children:[(0,e.jsxs)(d.Z,{direction:"row",alignItems:"center",children:[c.length>1&&(0,e.jsx)(E.Z,{title:"Go back","data-testid":"go-back",size:"small",onClick:at,children:(0,e.jsx)(re.Z,{})}),s!=null&&a&&(0,e.jsxs)("div",{style:{position:"relative"},children:[(0,e.jsx)(Ke,{size:"small",disableUnderline:!0,placeholder:"script name",value:ne,disabled:!u||u.readOnly,onChange:r=>{const M=r.target.value;se(M),j({...m,[s]:{...a,name:M}})},inputProps:{spellCheck:!1,style:it}}),(0,e.jsx)(Xe,{isSaved:te})]}),(0,e.jsx)(E.Z,{title:"New node","data-testid":"new-node",size:"small",onClick:()=>G(),children:(0,e.jsx)(U.Z,{})})]}),(0,e.jsxs)(d.Z,{flexGrow:1,overflow:"hidden ",children:[s==null&&(0,e.jsx)(qe,{addNewNode:G}),(0,e.jsx)(d.Z,{flexGrow:1,fullWidth:!0,overflow:"hidden",style:{display:s!=null?"flex":"none"},children:(0,e.jsx)(A.Suspense,{fallback:(0,e.jsx)(d.Z,{direction:"row",flex:"auto",alignItems:"center",justifyContent:"center",fullHeight:!0,fullWidth:!0,style:{backgroundColor:p.palette.background[V?"default":"paper"]},children:(0,e.jsx)(ue.Z,{size:28})}),children:o??(0,e.jsx)(He,{autoFormatOnSave:g,script:u,setScriptCode:rt,setScriptOverride:ae,rosLib:v,typesLib:I,save:ie})})}),(0,e.jsx)(d.Z,{children:(0,e.jsx)(Le,{nodeId:s,isSaved:te,save:()=>ie(u?.code),diagnostics:N,logs:ot})})]})]})]})]})}const nt={selectedNodeId:void 0,autoFormatOnSave:!0},st=(0,ge.Z)(Object.assign(tt,{panelType:"NodePlayground",defaultConfig:nt}))},94748:h=>{h.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAHUlEQVQYV2PYvXu3JAi7uLiAMaYAjAGTQBPYLQkAa/0Zef3qRswAAAAASUVORK5CYII="},4768:h=>{h.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAL0lEQVQoz2NgCD3x//9/BhBYBWdhgFVAiVW4JBFKGIa4AqD0//9D3pt4I4tAdAMAHTQ/j5Zom30AAAAASUVORK5CYII="},64372:h=>{h.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAz0lEQVRIx2NgYGBY/R8I/vx5eelX3n82IJ9FxGf6tksvf/8FiTMQAcAGQMDvSwu09abffY8QYSAScNk45G198eX//yev73/4///701eh//kZSARckrNBRvz//+8+6ZohwCzjGNjdgQxkAg7B9WADeBjIBqtJCbhRA0YNoIkBSNmaPEMoNmA0FkYNoFKhapJ6FGyAH3nauaSmPfwI0v/3OukVi0CIZ+F25KrtYcx/CTIy0e+rC7R1Z4KMICVTQQ14feVXIbR695u14+Ir4gwAAD49E54wc1kWAAAAAElFTkSuQmCC"},6161:h=>{h.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDM2NCA0LjAxMDQySDQuMDA3NzlMNC4wMDc3OSAzMi4wMjg2SDQ4LjAzNjRWNC4wMTA0MlpNNC4wMDc3OSAwLjAwNzgxMjVDMS43OTcyMSAwLjAwNzgxMjUgMC4wMDUxODc5OSAxLjc5OTg0IDAuMDA1MTg3OTkgNC4wMTA0MlYzMi4wMjg2QzAuMDA1MTg3OTkgMzQuMjM5MiAxLjc5NzIxIDM2LjAzMTIgNC4wMDc3OSAzNi4wMzEySDQ4LjAzNjRDNTAuMjQ3IDM2LjAzMTIgNTIuMDM5IDM0LjIzOTIgNTIuMDM5IDMyLjAyODZWNC4wMTA0MkM1Mi4wMzkgMS43OTk4NCA1MC4yNDcgMC4wMDc4MTI1IDQ4LjAzNjQgMC4wMDc4MTI1SDQuMDA3NzlaTTguMDEwNDIgOC4wMTMwMkgxMi4wMTNWMTIuMDE1Nkg4LjAxMDQyVjguMDEzMDJaTTIwLjAxODIgOC4wMTMwMkgxNi4wMTU2VjEyLjAxNTZIMjAuMDE4MlY4LjAxMzAyWk0yNC4wMjA4IDguMDEzMDJIMjguMDIzNFYxMi4wMTU2SDI0LjAyMDhWOC4wMTMwMlpNMzYuMDI4NiA4LjAxMzAySDMyLjAyNlYxMi4wMTU2SDM2LjAyODZWOC4wMTMwMlpNNDAuMDMxMiA4LjAxMzAySDQ0LjAzMzlWMTIuMDE1Nkg0MC4wMzEyVjguMDEzMDJaTTE2LjAxNTYgMTYuMDE4Mkg4LjAxMDQyVjIwLjAyMDhIMTYuMDE1NlYxNi4wMTgyWk0yMC4wMTgyIDE2LjAxODJIMjQuMDIwOFYyMC4wMjA4SDIwLjAxODJWMTYuMDE4MlpNMzIuMDI2IDE2LjAxODJIMjguMDIzNFYyMC4wMjA4SDMyLjAyNlYxNi4wMTgyWk00NC4wMzM5IDE2LjAxODJWMjAuMDIwOEgzNi4wMjg2VjE2LjAxODJINDQuMDMzOVpNMTIuMDEzIDI0LjAyMzRIOC4wMTA0MlYyOC4wMjZIMTIuMDEzVjI0LjAyMzRaTTE2LjAxNTYgMjQuMDIzNEgzNi4wMjg2VjI4LjAyNkgxNi4wMTU2VjI0LjAyMzRaTTQ0LjAzMzkgMjQuMDIzNEg0MC4wMzEyVjI4LjAyNkg0NC4wMzM5VjI0LjAyMzRaIiBmaWxsPSIjNDI0MjQyIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},51096:h=>{h.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDM2NCA0LjAxMDQySDQuMDA3NzlMNC4wMDc3OSAzMi4wMjg2SDQ4LjAzNjRWNC4wMTA0MlpNNC4wMDc3OSAwLjAwNzgxMjVDMS43OTcyMSAwLjAwNzgxMjUgMC4wMDUxODc5OSAxLjc5OTg0IDAuMDA1MTg3OTkgNC4wMTA0MlYzMi4wMjg2QzAuMDA1MTg3OTkgMzQuMjM5MiAxLjc5NzIxIDM2LjAzMTIgNC4wMDc3OSAzNi4wMzEySDQ4LjAzNjRDNTAuMjQ3IDM2LjAzMTIgNTIuMDM5IDM0LjIzOTIgNTIuMDM5IDMyLjAyODZWNC4wMTA0MkM1Mi4wMzkgMS43OTk4NCA1MC4yNDcgMC4wMDc4MTI1IDQ4LjAzNjQgMC4wMDc4MTI1SDQuMDA3NzlaTTguMDEwNDIgOC4wMTMwMkgxMi4wMTNWMTIuMDE1Nkg4LjAxMDQyVjguMDEzMDJaTTIwLjAxODIgOC4wMTMwMkgxNi4wMTU2VjEyLjAxNTZIMjAuMDE4MlY4LjAxMzAyWk0yNC4wMjA4IDguMDEzMDJIMjguMDIzNFYxMi4wMTU2SDI0LjAyMDhWOC4wMTMwMlpNMzYuMDI4NiA4LjAxMzAySDMyLjAyNlYxMi4wMTU2SDM2LjAyODZWOC4wMTMwMlpNNDAuMDMxMiA4LjAxMzAySDQ0LjAzMzlWMTIuMDE1Nkg0MC4wMzEyVjguMDEzMDJaTTE2LjAxNTYgMTYuMDE4Mkg4LjAxMDQyVjIwLjAyMDhIMTYuMDE1NlYxNi4wMTgyWk0yMC4wMTgyIDE2LjAxODJIMjQuMDIwOFYyMC4wMjA4SDIwLjAxODJWMTYuMDE4MlpNMzIuMDI2IDE2LjAxODJIMjguMDIzNFYyMC4wMjA4SDMyLjAyNlYxNi4wMTgyWk00NC4wMzM5IDE2LjAxODJWMjAuMDIwOEgzNi4wMjg2VjE2LjAxODJINDQuMDMzOVpNMTIuMDEzIDI0LjAyMzRIOC4wMTA0MlYyOC4wMjZIMTIuMDEzVjI0LjAyMzRaTTE2LjAxNTYgMjQuMDIzNEgzNi4wMjg2VjI4LjAyNkgxNi4wMTU2VjI0LjAyMzRaTTQ0LjAzMzkgMjQuMDIzNEg0MC4wMzEyVjI4LjAyNkg0NC4wMzM5VjI0LjAyMzRaIiBmaWxsPSIjQzVDNUM1Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);

//# sourceMappingURL=7463.668dd2283a71939ad0c6.js.map