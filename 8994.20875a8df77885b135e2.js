"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8994],{14571:(H,N,c)=>{c.d(N,{o:()=>S});var p=c(52322),a=c(2784);class S extends a.Component{constructor(){super(...arguments),this.state={hadError:!1}}componentDidCatch(b){this.setState({hadError:!0}),this.props.onError(b)}render(){return this.state.hadError?(0,p.jsx)(p.Fragment,{}):this.props.children}}},88994:(H,N,c)=>{c.r(N),c.d(N,{default:()=>xe});var p=c(52322),a=c(2784),S=c(57051),y=c(14075),b=c(591),E=c(85062),V=c.n(E),j=c(41501),J=c(61232),_=c(2071),T=c(28316),I=c(14571),$=c(76665),A=c(76635),ve=c(5817),Ee=c.n(ve),Ce=c(62515),he=c(94225),se=c(667),W=c(44668),Q=c(93812),Te=c(59055),U;(function(e){e[e.COVARIANCE_TYPE_UNKNOWN=0]="COVARIANCE_TYPE_UNKNOWN",e[e.COVARIANCE_TYPE_APPROXIMATED=1]="COVARIANCE_TYPE_APPROXIMATED",e[e.COVARIANCE_TYPE_DIAGONAL_KNOWN=2]="COVARIANCE_TYPE_DIAGONAL_KNOWN",e[e.COVARIANCE_TYPE_KNOWN=3]="COVARIANCE_TYPE_KNOWN"})(U||(U={}));var P;(function(e){e[e.STATUS_NO_FIX=-1]="STATUS_NO_FIX",e[e.STATUS_FIX=0]="STATUS_FIX",e[e.STATUS_SBAS_FIX=1]="STATUS_SBAS_FIX",e[e.STATUS_GBAS_FIX=2]="STATUS_GBAS_FIX"})(P||(P={}));var ne;(function(e){e[e.SERVICE_GPS=1]="SERVICE_GPS",e[e.SERVICE_GLONASS=2]="SERVICE_GLONASS",e[e.SERVICE_COMPASS=4]="SERVICE_COMPASS",e[e.SERVICE_GALILEO=8]="SERVICE_GALILEO"})(ne||(ne={}));const re=3;class ye extends E.CircleMarker{}function Ae(e){const{navSatMessageEvents:s,bounds:d,map:n}=e,h={stroke:!1,color:e.color,fillOpacity:1},C=new E.FeatureGroup,x=d,m=[];for(const f of s){const g=f.message.latitude,G=f.message.longitude;if(!x.contains([g,G]))continue;const Y=n.latLngToContainerPoint([g,G]),R=Math.trunc(Y.x),O=Math.trunc(Y.y);if(m[R]?.[O]===!0)continue;(m[R]=m[R]??[])[O]=!0;const D=new ye([g,G],{...h,radius:re});if(D.messageEvent=f,D.addTo(C),e.showAccuracy===!0){const F=Se(f.message);F!=null&&new E.Circle([g,G],{stroke:!1,color:e.color,fillOpacity:.2,radius:F}).addTo(C)}}return e.onHover&&(C.on("mouseover",f=>{const g=f.sourceTarget;g.setStyle({color:e.hoverColor}),g.bringToFront(),e.onHover?.(g.messageEvent)}),C.on("mouseout",f=>{f.sourceTarget.setStyle(h),e.onHover?.(void 0)})),e.onClick&&C.on("click",f=>{const g=f.sourceTarget;g.messageEvent&&e.onClick?.(g.messageEvent)}),C}function Se(e){const s=e.position_covariance;if(s)switch(e.position_covariance_type){case void 0:return;case U.COVARIANCE_TYPE_UNKNOWN:return;case U.COVARIANCE_TYPE_DIAGONAL_KNOWN:{const d=s[0],n=s[4];return Math.sqrt(Math.max(d,n))}case U.COVARIANCE_TYPE_APPROXIMATED:case U.COVARIANCE_TYPE_KNOWN:{const d=s,n=[[d[0],d[1],d[2]],[d[3],d[4],d[5]],[0,0,0]];try{const h=(0,Te.Gq_)(n).values;return Math.sqrt(h[2])}catch{return}}}}const q=Ae;var M=c(68071);function ae(e){const s=e.match(/\{.+?\}/g)??[],d=["{x}","{y}","{z}"];for(const n of s)if(!d.includes(n))return new Error(`Invalid placeholder ${n}`)}function Me(e){switch(e){case"foxglove_msgs/GeoJSON":case"foxglove_msgs/msg/GeoJSON":case"foxglove.GeoJSON":return!0;default:return!1}}function Oe(e,s){const d=(0,A.transform)(s,(m,f)=>{const g=e.topicColors[f.name];m[f.name]={label:f.name,fields:{enabled:{label:"Enabled",input:"boolean",value:!e.disabledTopics.includes(f.name)},coloring:{label:"Coloring",input:"select",value:g?"Custom":"Automatic",options:[{label:"Automatic",value:"Automatic"},{label:"Custom",value:"Custom"}]},color:g?{label:"Color",input:"rgb",value:g}:void 0}}},{}),n=(0,se.DZ)(s,m=>e.disabledTopics.includes(m.name)||Me(m.schemaName)?void 0:{label:m.name,value:m.name}),h=[{label:"Off",value:""},...n],C={layer:{label:"Tile layer",input:"select",value:e.layer,options:[{label:"Map",value:"map"},{label:"Satellite",value:"satellite"},{label:"Custom",value:"custom"}]}};if(e.layer==="custom"){let m;e.customTileUrl.length>0&&(m=ae(e.customTileUrl)?.message),C.customTileUrl={label:"Custom map tile URL",input:"string",value:e.customTileUrl,error:m},C.maxNativeZoom={label:"Max tile level",input:"select",value:e.maxNativeZoom,options:[18,19,20,21,22,23,24].map(f=>({label:String(f),value:f})),help:"Highest zoom supported by the custom map source. See https://leafletjs.com/examples/zoom-levels/ for more information."}}return C.followTopic={label:"Follow topic",input:"select",value:e.followTopic,options:h},{general:{label:"General",fields:C},topics:{label:"Topics",children:d}}}function Le(e){switch(e.message.status?.status){case P.STATUS_GBAS_FIX:case P.STATUS_SBAS_FIX:case P.STATUS_FIX:return!0;case P.STATUS_NO_FIX:case void 0:default:return!1}}function ee(e){const s=e.schemaName;return s==="foxglove_msgs/GeoJSON"||s==="foxglove_msgs/msg/GeoJSON"||s==="foxglove.GeoJSON"}function le(e){if(ee(e))return!0;const s=e.message;return s.latitude!=null&&isFinite(s.latitude)&&s.longitude!=null&&isFinite(s.longitude)&&s.status?.status!==P.STATUS_NO_FIX}function ie(e){switch(e){case"sensor_msgs/NavSatFix":case"sensor_msgs/msg/NavSatFix":case"ros.sensor_msgs.NavSatFix":case"foxglove_msgs/LocationFix":case"foxglove_msgs/msg/LocationFix":case"foxglove.LocationFix":case"foxglove_msgs/GeoJSON":case"foxglove_msgs/msg/GeoJSON":case"foxglove.GeoJSON":return!0;default:return!1}}const Ne=Ee()(e=>e.filter(le));function be(e){const{context:s}=e,d=(0,a.useRef)(null),[n,h]=(0,a.useState)(()=>{const o=e.context.initialState;return{center:o.center,customTileUrl:o.customTileUrl??"",disabledTopics:o.disabledTopics??[],followTopic:o.followTopic??"",layer:o.layer??"map",topicColors:o.topicColors??{},zoomLevel:o.zoomLevel,maxNativeZoom:o.maxNativeZoom??18}}),[C]=(0,a.useState)(new E.TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',maxNativeZoom:18,maxZoom:24})),[x]=(0,a.useState)(new E.TileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",maxNativeZoom:18,maxZoom:24})),[m]=(0,a.useState)(new E.TileLayer("https://example.com/{z}/{y}/{x}",{attribution:"",maxNativeZoom:18,maxZoom:24})),[f,g]=(0,a.useState)([]),[G,Y]=(0,a.useState)([]),[R,O]=(0,a.useMemo)(()=>(0,A.partition)(f,ee),[f]),[D,F]=(0,a.useMemo)(()=>(0,A.partition)(G,ee),[G]),[te,Ge]=(0,a.useState)([]),[k,Fe]=(0,a.useState)(),[l,Ue]=(0,a.useState)(void 0),{width:ce,height:ue,ref:Re}=(0,Ce.NB)({refreshRate:0,refreshMode:"debounce"});(0,a.useEffect)(()=>{l?.invalidateSize()},[ce,ue,l]);const[me,Be]=(0,a.useState)(()=>()=>{}),Z=(0,a.useMemo)(()=>(0,se.DZ)(te,o=>{if(ie(o.schemaName))return o;if(o.convertibleTo){for(const t of o.convertibleTo)if(ie(t))return{name:o.name,schemaName:t}}}),[te]),fe=(0,a.useCallback)(o=>{if(o.action!=="update")return;const{path:t,input:i,value:u}=o.payload;if(t[0]==="topics"&&i==="boolean"){const r=t[1];r&&h((0,$.ZP)(v=>{v.disabledTopics=u===!0?(0,A.difference)(v.disabledTopics,[r]):(0,A.union)(v.disabledTopics,[r])}))}if(t[0]==="topics"&&t[2]==="coloring"){const r=t[1];r&&h((0,$.ZP)(v=>{u==="Custom"?v.topicColors[r]=M.Hm[0]:delete v.topicColors[r]}))}if(t[0]==="topics"&&t[2]==="color"&&i==="rgb"&&u!=null){const r=t[1];r&&h((0,$.ZP)(v=>{v.topicColors[r]=u}))}t[1]==="layer"&&i==="select"&&h(r=>({...r,layer:String(u)})),t[1]==="customTileUrl"&&i==="string"&&h(r=>({...r,customTileUrl:String(u)})),t[1]==="maxNativeZoom"&&i==="select"&&h(r=>{const v=parseInt(String(u));return{...r,maxNativeZoom:isFinite(v)?v:r.maxNativeZoom}}),t[1]==="followTopic"&&i==="select"&&h(r=>({...r,followTopic:String(u)}))},[]);(0,a.useEffect)(()=>{n.layer==="map"?(l?.addLayer(C),l?.removeLayer(x),l?.removeLayer(m)):n.layer==="satellite"?(l?.addLayer(x),l?.removeLayer(C),l?.removeLayer(m)):n.layer==="custom"&&(l?.addLayer(m),l?.removeLayer(C),l?.removeLayer(x))},[n.layer,l,m,x,C]),(0,a.useEffect)(()=>{if(n.layer==="custom"){if(ae(n.customTileUrl))return;m.setUrl(n.customTileUrl)}},[n.layer,n.customTileUrl,m]),(0,a.useEffect)(()=>{n.layer==="custom"&&(m.options.maxNativeZoom=n.maxNativeZoom)},[n.layer,n.maxNativeZoom,m]),(0,a.useEffect)(()=>{const o=[];for(const i of Z)n.disabledTopics.includes(i.name)||o.push({topic:i.name,convertTo:i.schemaName,preload:!0});s.subscribe(o);const t=Oe(n,Z);return s.updatePanelSettingsEditor({actionHandler:fe,nodes:t}),()=>{s.unsubscribeAll()}},[n,s,Z,fe]);const L=(0,a.useMemo)(()=>{const o=new Map;let t=0;for(const i of Z){const u=new E.FeatureGroup,r=new E.FeatureGroup,v=new E.LayerGroup([u,r]);o.set(i.name,{topicGroup:v,allFrames:u,currentFrame:r,baseColor:n.topicColors[i.name]??M.Hm[t]}),t=(t+1)%M.Hm.length}return o},[n.topicColors,Z]);(0,a.useLayoutEffect)(()=>{if(!l)return;const o=[...L.entries()];for(const[t,i]of o)n.disabledTopics.includes(t)||l.addLayer(i.topicGroup);return()=>{for(const[t,i]of o)l.removeLayer(i.topicGroup)}},[n.disabledTopics,l,L]),(0,a.useLayoutEffect)(()=>{if(!d.current)return;const o=new E.Map(d.current);return o.attributionControl.setPrefix(!1),o.setView(n.center?[n.center.lat,n.center.lon]:[0,0],n.zoomLevel??10),Ue(o),s.watch("topics"),s.watch("currentFrame"),s.watch("allFrames"),s.watch("previewTime"),s.onRender=(t,i)=>{Be(()=>i),Fe(t.previewTime),t.topics&&Ge(u=>(0,A.isEqual)(u,t.topics)?u:t.topics??[]),t.allFrames&&g(Ne(t.allFrames)),t.currentFrame&&t.currentFrame.length>0&&Y(t.currentFrame.filter(le))},()=>{o.remove(),s.onRender=void 0}},[n.center,n.zoomLevel,s]);const z=(0,a.useCallback)(o=>{s.setPreviewTime(o==null?void 0:(0,W.toSec)(o.receiveTime))},[s]),K=(0,a.useCallback)(o=>{s.seekPlayback?.((0,W.toSec)(o.receiveTime))},[s]),[B,De]=(0,a.useState)(n.center),[w,Ze]=(0,a.useState)(),de=(0,a.useCallback)((o,t,i)=>{const u=o.properties?.name;typeof u=="string"&&u.length>0&&i.bindTooltip(u),i.on("mouseover",()=>{z(t),i.openTooltip()}),i.on("mouseout",()=>{z(void 0),i.closeTooltip()}),i.on("click",()=>{K(t)})},[K,z]),X=(0,a.useCallback)((o,t)=>{const i=JSON.parse(o.message.geojson);(0,E.geoJSON)(i,{onEachFeature:(u,r)=>de(u,o,r),style:n.topicColors[o.topic]?{color:n.topicColors[o.topic]}:{}}).addTo(t)},[de,n.topicColors]);(0,a.useEffect)(()=>{De(o=>{if(!n.followTopic&&o)return o;for(const t of[F,O])for(const i of t)if(!(n.followTopic&&o&&i.topic!==n.followTopic))return{lat:i.message.latitude,lon:i.message.longitude};return o})},[O,F,n]),(0,a.useEffect)(()=>{if(l)for(const[o,t]of L){t.allFrames.clearLayers();const i=O.filter(r=>r.topic===o),u=q({map:l,navSatMessageEvents:i,bounds:w??l.getBounds(),color:(0,M.UX)(t.baseColor),hoverColor:(0,M.eE)(t.baseColor),onHover:z,onClick:K});t.allFrames.addLayer(u),u.bringToBack(),R.filter(r=>r.topic===o).forEach(r=>X(r,t.allFrames))}},[X,R,O,l,w,K,z,L]),(0,a.useEffect)(()=>{if(!l)return;const o=(0,A.groupBy)(F,i=>i.topic);for(const[i,u]of Object.entries(o)){const r=L.get(i);if(!r)continue;r.currentFrame.clearLayers();const[v,ze]=(0,A.partition)(u,Le),we=q({map:l,navSatMessageEvents:ze,bounds:w??l.getBounds(),color:(0,M.eE)(r.baseColor),hoverColor:(0,M.eE)(r.baseColor),showAccuracy:!0}),Ve=q({map:l,navSatMessageEvents:v,bounds:w??l.getBounds(),color:r.baseColor,hoverColor:(0,M.eE)(r.baseColor),showAccuracy:!0});r.currentFrame.addLayer(we),r.currentFrame.addLayer(Ve)}const t=(0,A.groupBy)(D,i=>i.topic);for(const[i,u]of Object.entries(t)){const r=L.get(i);if(r){r.currentFrame.clearLayers();for(const v of u)X(v,r.currentFrame)}}},[X,D,l,F,w,L]),(0,a.useEffect)(()=>{if(!l||k==null)return;const o=O.filter(r=>(0,W.toSec)(r.receiveTime)<k),t=(0,A.minBy)(o,r=>k-(0,W.toSec)(r.receiveTime));if(!t)return;const i=L.get(t.topic),u=new E.CircleMarker([t.message.latitude,t.message.longitude],{radius:re,color:i?(0,M.eE)(i.baseColor):void 0,stroke:!1,fillOpacity:1,interactive:!1});return u.addTo(l),()=>{u.remove()}},[O,l,k,L]),(0,a.useEffect)(()=>{if(!l)return;const o=()=>{s.saveState({center:{lat:l.getCenter().lat,lon:l.getCenter().lng}})},t=()=>{s.saveState({zoomLevel:l.getZoom()})};return l.on("move",o),l.on("zoom",t),()=>{l.off("move",o),l.off("zoom",t)}},[s,l]),(0,a.useEffect)(()=>{s.saveState(n)},[s,n]);const pe=(0,he.y1)(o=>{Ze(o.getBounds())},100,{leading:!1,maxWait:100});(0,a.useEffect)(()=>{if(!l)return;const o=()=>pe(l);return l.on("move",o),()=>{l.off("move",o)}},[l,pe]);const ge=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{if(!B)return;const o=ge.current?l?.getZoom():n.zoomLevel??10;l?.setView([B.lat,B.lon],o),ge.current=!0},[B,n.zoomLevel,l]),(0,a.useEffect)(()=>{me()},[me]),(0,p.jsxs)(Q.Z,{ref:Re,fullHeight:!0,fullWidth:!0,position:"relative",children:[!B&&(0,p.jsx)(Q.Z,{alignItems:"center",justifyContent:"center",position:"absolute",style:{top:0,right:0,bottom:0,left:0},children:"Waiting for first GPS point..."}),(0,p.jsx)(Q.Z,{position:"absolute",ref:d,style:{inset:0,cursor:"auto",visibility:B?"visible":"hidden"}})]})}const Ie=be;var We=c(92037);V().Marker.prototype.options.icon=V().icon({iconUrl:J,iconRetinaUrl:j,shadowUrl:_,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]});function Pe(e,s){return T.render((0,p.jsx)(a.StrictMode,{children:(0,p.jsx)(I.o,{onError:e,children:(0,p.jsx)(Ie,{context:s})})}),s.panelElement),()=>{T.unmountComponentAtNode(s.panelElement)}}function oe(e){const s=(0,S.iY)(),d=(0,a.useMemo)(()=>Pe.bind(void 0,s),[s]);return(0,p.jsx)(b._,{config:e.config,saveConfig:e.saveConfig,initPanel:d})}oe.panelType="map",oe.defaultConfig={};const xe=(0,y.Z)(oe)},68071:(H,N,c)=>{c.d(N,{A2:()=>V,Hm:()=>b,UX:()=>j,eE:()=>J,wi:()=>_});var p=c(76635),a=c.n(p),S=c(1547),y=c(25302);const b=[y.Y.blue.medium,y.Y.orange.medium,y.Y.yellow.medium,y.Y.green.medium,y.Y.cyan.medium,y.Y.purple.medium,y.Y.paleGreen.medium],E=b.map(T=>[T,...(0,S.Z)(T).tetrad().map(I=>I.toHexString())]),V=(0,p.uniq)((0,p.range)(0,E[0].length).map(T=>E.map(I=>I[T])).flat()),j=(0,p.memoize)(T=>(0,S.Z)(T).brighten(15).toString()),J=(0,p.memoize)(T=>(0,S.Z)(T).darken(30).toString());function _(T,I){return T??b[I%b.length]}},25302:(H,N,c)=>{c.d(N,{B:()=>S,Y:()=>a});var p=c(1547);const a={base:{dark:"#1F1E27",medium:"#8B8B8D",light:"#F7F7F3"},red:{dark:"#F24366",medium:"#ff7c96",light:"#FFAABB"},blue:{dark:"#1b83ec",medium:"#4e98e2",light:"#77AADD"},paleGreen:{dark:"#B4CC00",medium:"#cad660",light:"#CDD67E"},orange:{dark:"#ea531f",medium:"#f5774d",light:"#faa487"},cyan:{dark:"#22b5ff",medium:"#61cbff",light:"#99DDFF"},green:{dark:"#05d27d",medium:"#5cd6a9",light:"#8de0c9"},purple:{dark:"#6E51EE",medium:"#a395e2",light:"#c7c0e7"},yellow:{dark:"#EDCC28",medium:"#f7df71",light:"#f1e4aa"}},S=(0,p.Z)("hsv(0, 0%, 75%)").toHexString()}}]);

//# sourceMappingURL=8994.20875a8df77885b135e2.js.map