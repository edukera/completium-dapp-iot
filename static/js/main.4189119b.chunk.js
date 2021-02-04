(this["webpackJsonpcompletium-dapp-iot"]=this["webpackJsonpcompletium-dapp-iot"]||[]).push([[0],{152:function(e,t,n){},158:function(e,t){},160:function(e,t){},228:function(e,t){},230:function(e,t){},243:function(e,t){},245:function(e,t){},267:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),i=n.n(a),r=n(16),o=n.n(r),s=(n(67),n(23)),l=n.n(s),j=n(34),d=n(15),h=(n(152),"KT1CxHBiCSvmXn9kXCbhPfdGDAggGG9ktQEX"),u="IotCorp.",b=n(305),x=n(306),p=n(136),f=n(304),m=n(307),O=n(123),g=n(81),y=Object(O.a)((function(e){var t=e.appName,n=i.a.useState((function(){return{wallet:null,tezos:null,accountPkh:null}})),c=Object(d.a)(n,2),a=c[0],r=a.wallet,o=a.tezos,s=a.accountPkh,h=c[1],u=Boolean(o);i.a.useEffect((function(){return g.a.onAvailabilityChange((function(e){h({wallet:e?new g.a(t):null,tezos:null,accountPkh:null})}))}),[h,t]);var b=i.a.useCallback(function(){var e=Object(j.a)(l.a.mark((function e(t,n){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r){e.next=3;break}throw new Error("Thanos Wallet not available");case 3:return e.next=5,r.connect(t,n);case 5:return c=r.toTezos(),e.next=8,c.wallet.pkh();case 8:a=e.sent,h({wallet:r,tezos:c,accountPkh:a}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert("Failed to connect ThanosWallet: ".concat(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),[h,r]);return{wallet:r,tezos:o,accountPkh:s,ready:u,connect:b}}),(function(e){return e.wallet}),(function(e){return e.tezos}),(function(e){return e.accountPkh}),(function(e){return e.ready}),(function(e){return e.connect})),w=Object(d.a)(y,6),v=w[0],k=w[1],S=w[2],C=w[3],T=w[4],B=w[5];var D=n(301),I=n(303),A=function(e){var t=T(),n=k();return t?Object(c.jsx)("div",{}):n?Object(c.jsx)(D.a,{variant:"contained",color:"secondary",disableElevation:!0,size:"small",style:{position:"absolute",right:"90px"},onClick:e.handleConnect,children:"connect to wallet"}):Object(c.jsx)(I.a,{href:"https://thanoswallet.com/",rel:"noopener",underline:"none",style:{position:"absolute",right:"1%"},children:Object(c.jsx)(D.a,{variant:"contained",size:"small",disableElevation:!0,style:{backgroundColor:"#ed8936",color:"white",fontWeight:"bold"},children:"Install Thanos"})})},z=n(126),P=n.n(z),E=function(e){var t=Object(f.a)("(min-width:600px)")?"visible":"hidden",n="dark"===e.theme.palette.type;return Object(c.jsx)(b.a,{position:"static",color:n?"default":"secondary",style:{boxShadow:"none",opacity:1},children:Object(c.jsxs)(x.a,{children:[Object(c.jsx)("a",{href:"https://edukera.github.io/completium-landing/index.html",target:"_blank",style:{color:"white",height:"32px"},children:Object(c.jsx)(p.a,{variant:"h6",style:{position:"absolute",fontFamily:"Alegreya Sans SC, sans-serif"},children:"Completium"})}),Object(c.jsx)(m.a,{container:!0,justify:"center",alignItems:"center",children:Object(c.jsx)(m.a,{item:!0,children:Object(c.jsx)(p.a,{variant:"h6",style:{visibility:t,textAlign:"center"},children:e.appTitle})})}),e.istouch?Object(c.jsx)("div",{}):Object(c.jsx)(A,{handleConnect:e.handleConnect}),Object(c.jsx)("a",{href:"https://edukera.github.io/completium-landing/docs/dapp-miles/presentation",target:"_blank",children:Object(c.jsx)(D.a,{style:{color:"white"},component:"span",children:Object(c.jsx)(P.a,{})})})]})})},F=n(134),M=n(315),L=n(316),W=n(308),X=n(321),R=n(128),G=n.n(R),H=function(e){var t=e.switch.dateofstop>Date.now()?"on":"off";return i.a.useEffect((function(){var t=setTimeout((function(){e.loadSwitchContent()}),500);return function(){clearTimeout(t)}})),Object(c.jsx)(W.a,{maxWidth:"md",style:{marginTop:50,backgroundImage:"url(/completium-dapp-iot/bulb"+t+".svg)",backgroundRepeat:"no-repeat",backgroundPosition:"right 50% top 10%",height:410},children:Object(c.jsx)(m.a,{container:!0,direction:"column",justify:"center",alignItems:"center",style:{},children:Object(c.jsx)(m.a,{children:Object(c.jsx)(X.a,{label:h,color:"secondary",onDelete:function(){},deleteIcon:Object(c.jsx)(G.a,{}),variant:"outlined",style:{marginTop:350}})})})})},N=n(9),Z=function(e){var t;return Object(c.jsx)(b.a,{position:"static",color:"default",style:{boxShadow:"none",opacity:1,heigh:300},children:Object(c.jsx)(x.a,{style:{minHeight:256},children:Object(c.jsx)(m.a,{container:!0,justify:"center",alignItems:"center",children:Object(c.jsx)(m.a,{item:!0,children:Object(c.jsxs)(p.a,(t={variant:"body2",color:"textSecondary",style:{flexGrow:1}},Object(N.a)(t,"style",{textAlign:"center"}),Object(N.a)(t,"children",["@copyright ",e.appName," 2021"]),t))})})})})},J=n(269),Q=n(312),_=n(313),q=n(314),K=n(131),V=n.n(K),U=n(132),Y=n.n(U),$=n(130),ee=n.n($),te=n(320),ne=n(317),ce=n(309),ae=n(310),ie=n(129),re=n.n(ie),oe=function(e){return Object(c.jsxs)(ne.a,{open:e.open,onClick:e.close,children:[Object(c.jsx)(ce.a,{children:"Scan Object's QR code"}),Object(c.jsx)(ae.a,{style:{paddingBottom:20},children:Object(c.jsx)(re.a,{value:e.url,size:300,includeMargin:!1,bgColor:e.theme.palette.background.paper,fgColor:"light"===e.theme.palette.type?e.theme.palette.common.black:e.theme.palette.common.white})})]})},se=n(311),le=function(e){var t=C(),n=S(),a=i.a.useCallback(Object(j.a)(l.a.mark((function c(){var a;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,n.tz.getBalance(t);case 2:a=c.sent,e.setBalance(n.format("mutez","tz",a).toString());case 4:case"end":return c.stop()}}),c)}))),[n,t,e.setBalance]);return null===e.balance&&a(),Object(c.jsxs)(W.a,{style:{height:"300px"},children:[Object(c.jsx)(W.a,{style:{height:"40px"}}),Object(c.jsx)(J.a,{style:{opacity:.8,paddingLeft:18,paddingRight:28},children:Object(c.jsxs)(m.a,{container:!0,direction:"row",alignItems:"center",spacing:2,children:[Object(c.jsx)(m.a,{item:!0,xs:2,direction:"row",children:Object(c.jsx)(p.a,{color:"textSecondary",style:{textAlign:"right"},children:"Account :"})}),Object(c.jsx)(m.a,{item:!0,xs:4,children:Object(c.jsx)(p.a,{style:{fontFamily:"Courier Prime, monospace"},children:t})}),Object(c.jsx)(m.a,{item:!0,xs:6,children:Object(c.jsxs)(m.a,{container:!0,direction:"row",justify:"flex-end",spacing:2,children:[Object(c.jsx)(m.a,{item:!0,children:Object(c.jsx)(p.a,{color:"textSecondary",children:"Balance:"})}),null===e.balance?Object(c.jsx)(se.a,{color:"secondary"}):Object(c.jsx)(m.a,{item:!0,children:Object(c.jsxs)(p.a,{children:[e.balance," XTZ"]})})]})})]})})]})},je=n(26),de=function(e,t){var n=2*e%2;return Math.floor(e).toString()+(0===n?"":"\xbd")},he=function(e){var t=S(),n=Object(a.useState)(0),i=Object(d.a)(n,2),r=i[0],o=i[1],s=Object(a.useState)(!1),l=Object(d.a)(s,2),j=l[0],u=l[1];return Object(c.jsxs)(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,style:{padding:12,paddingLeft:20,marginTop:40},children:[Object(c.jsx)(m.a,{item:!0,xs:1,children:Object(c.jsx)(ee.a,{})}),Object(c.jsx)(m.a,{item:!0,xs:11,style:{paddingRight:30},children:Object(c.jsx)(te.a,{defaultValue:0,"aria-labelledby":"discrete-slider-small-steps",step:.5,marks:!0,min:0,max:15,valueLabelDisplay:"on",color:"secondary",onChangeCommitted:function(e){o(e.target.innerText)},disabled:j})}),Object(c.jsx)(m.a,{item:!0,xs:12,style:{textAlign:"center",marginTop:0},children:Object(c.jsxs)(p.a,{color:"textSecondary",children:["Price for ",de(r)," minute(s):"]})}),Object(c.jsx)(m.a,{item:!0,xs:12,style:{textAlign:"center"},children:Object(c.jsxs)(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(c.jsx)(m.a,{item:!0,children:Object(c.jsx)(p.a,{variant:"h6",children:(e.switch.rate*r).toFixed(2)})}),Object(c.jsx)(m.a,{item:!0,children:Object(c.jsx)(p.a,{color:"textSecondary",style:{marginLeft:10},children:"XTZ"})})]})}),Object(c.jsx)(m.a,{item:!0,style:{marginBottom:20,marginTop:36},children:Object(c.jsx)(D.a,{variant:"contained",color:"secondary",disableElevation:!0,onClick:function(n){t.wallet.at(h).then((function(t){var n=(e.switch.rate*r).toFixed(6);console.log("calling start with ".concat(n," XTZ")),t.methods.start(je.b).send({amount:n,fee:"0.1"}).then((function(t){Date.now();console.log("waiting for ".concat(t.opHash," to be confirmed")),u(!0),e.openSnack(),t.receipt().then((function(){u(!1),e.closeSnack(),e.resetBalance(),e.loadSwitchContent()}))}))}))},disabled:j,children:"switch on"})})]})},ue=function(e){var t={};return e>0&&(t={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),t},be=function(e){var t=S(),n=Object(a.useState)(ue(e.dateofstop-Date.now())),i=Object(d.a)(n,2),r=i[0],o=i[1],s=Object(a.useState)(!1),l=Object(d.a)(s,2),j=l[0],u=l[1];Object(a.useEffect)((function(){var t=setTimeout((function(){o(ue(e.dateofstop-Date.now()))}),1e3);return function(){clearTimeout(t)}}));var b=Math.floor(100*(Date.now()-e.dateofstart)/(e.dateofstop-e.dateofstart)),x=[];Object.keys(r).forEach((function(e){r[e]&&x.push(Object(c.jsxs)("span",{children:[r[e]," ",e," "]}))}));if(0===x.length){var f=Date.now();e.setBCSwitch({dateofstart:f,dateofstop:f,rate:e.switch.rate,user:e.switch.user})}return Object(c.jsxs)(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,style:{padding:12,paddingLeft:20,marginTop:0},children:[Object(c.jsxs)(m.a,{item:!0,xs:12,style:{textAlign:"center"},children:[Object(c.jsx)(Q.a,{style:{position:"relative",left:"50px"},variant:"static",value:"100",size:100,thickness:5,color:"primary"}),Object(c.jsx)(Q.a,{style:{position:"relative",left:"-50px"},variant:"static",value:b,size:100,thickness:5,color:"secondary"}),Object(c.jsxs)(p.a,{variant:"h6",color:"secondary",style:{position:"relative",top:"-70px",left:"5px"},children:[b,"%"]})]}),Object(c.jsx)(m.a,{item:!0,xs:12,style:{textAlign:"center"},children:Object(c.jsxs)(p.a,{children:["Time remaining: ",x.length?x:Object(c.jsx)("span",{children:"Time's up!"})]})}),Object(c.jsx)(m.a,{item:!0,children:Object(c.jsx)(D.a,{style:{margin:20},variant:"outlined",color:"inherit",disableElevation:!0,onClick:function(){t.wallet.at(h).then((function(t){t.methods.interrupt(je.b).send().then((function(t){var n=Date.now();console.log("waiting for ".concat(t.opHash," to be confirmed")),u(!0),e.openSnack(),t.receipt().then((function(){u(!1),e.closeSnack(),e.resetBalance(),e.setBCSwitch({dateofstart:n,dateofstop:n,rate:e.switch.rate,user:e.switch.user})}))}))}))},disabled:j,children:"interrupt"})})]})},xe=function(e){var t=Object(a.useState)(ue(e.dateofstop-Date.now())),n=Object(d.a)(t,2),i=n[0],r=n[1];Object(a.useEffect)((function(){var t=setTimeout((function(){r(ue(e.dateofstop-Date.now()))}),1e3);return function(){clearTimeout(t)}}));var o=[];Object.keys(i).forEach((function(e){i[e]&&o.push(Object(c.jsxs)("span",{children:[i[e]," ",e," "]}))}));return 0===o.length&&function(){var t=Date.now();e.setBCSwitch({dateofstart:t,dateofstop:t,rate:e.switch.rate,user:e.switch.user})}(),Object(c.jsx)(W.a,{style:{height:301},children:Object(c.jsxs)(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,style:{padding:12,paddingLeft:20,marginTop:0},children:[Object(c.jsx)(m.a,{item:!0,xs:12,style:{textAlign:"center"},children:Object(c.jsx)(p.a,{color:"textSecondary",children:"Object has been switched on by:"})}),Object(c.jsx)(m.a,{item:!0,xs:12,style:{textAlign:"center"},children:Object(c.jsx)(p.a,{style:{fontFamily:"Courier Prime, monospace"},children:e.user})}),Object(c.jsx)(m.a,{item:!0,xs:12,style:{textAlign:"center"},children:Object(c.jsxs)(p.a,{color:"textSecondary",children:["Time remaining: ",o.length?o:Object(c.jsx)("span",{children:"Time's up!"})]})}),Object(c.jsx)(m.a,{item:!0})]})})},pe=function(e){return Object(c.jsx)(W.a,{style:{height:301,backgroundImage:"url(/completium-dapp-iot/wifiplug.svg)",backgroundRepeat:"no-repeat",backgroundPosition:"right 50% top 50%"},children:Object(c.jsx)(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{height:301},children:Object(c.jsx)(p.a,{color:"textSecondary",children:"Connect to Wallet to interact with object."})})})},fe=function(e){var t=T(),n=C(),a=i.a.useState(!1),r=Object(d.a)(a,2),o=r[0],s=r[1],l=i.a.useState(null),j=Object(d.a)(l,2),b=j[0],x=j[1],f=function(){x(null)},O=e.switch.dateofstop-e.switch.dateofstart,g=e.switch.dateofstop>Date.now()&&O>0;return Object(c.jsxs)("div",{children:[Object(c.jsx)(W.a,{maxWidth:"md",style:{height:120},children:t?Object(c.jsx)(le,{balance:b,setBalance:x}):Object(c.jsx)("div",{})}),Object(c.jsx)(W.a,{maxWidth:"sm",style:{marginBottom:150},children:Object(c.jsxs)(J.a,{children:[Object(c.jsxs)(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,style:{padding:12,paddingLeft:20},children:[Object(c.jsx)(m.a,{item:!0,xs:1,children:Object(c.jsx)(V.a,{})}),Object(c.jsx)(m.a,{item:!0,xs:11,children:Object(c.jsx)(p.a,{style:{fontFamily:"Courier Prime, monospace"},children:h})}),Object(c.jsx)(m.a,{item:!0,xs:1,children:Object(c.jsx)(Y.a,{})}),Object(c.jsx)(m.a,{item:!0,xs:11,children:Object(c.jsxs)(m.a,{container:!0,direction:"row",spacing:1,children:[Object(c.jsx)(m.a,{item:!0,children:Object(c.jsx)(p.a,{children:e.switch.rate.toFixed(2)})}),Object(c.jsx)(m.a,{item:!0,children:Object(c.jsx)(p.a,{color:"textSecondary",children:" XTZ / minute"})})]})})]}),Object(c.jsx)(_.a,{}),t?g?n===e.switch.user?Object(c.jsx)(be,{dateofstart:e.switch.dateofstart,dateofstop:e.switch.dateofstop,switch:e.switch,setBCSwitch:e.setBCSwitch,openSnack:e.openSnack,closeSnack:e.closeSnack,resetBalance:f}):Object(c.jsx)(xe,{user:e.switch.user,dateofstop:e.switch.dateofstop,switch:e.switch,setBCSwitch:e.setBCSwitch}):Object(c.jsx)(he,{duration:O,switch:e.switch,loadSwitchContent:e.loadSwitchContent,openSnack:e.openSnack,closeSnack:e.closeSnack,resetBalance:f}):Object(c.jsx)(pe,{}),Object(c.jsx)(_.a,{}),Object(c.jsx)(q.a,{onClick:function(e){s(!0)},children:Object(c.jsxs)(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,style:{padding:22},children:[Object(c.jsx)(m.a,{item:!0,xs:2,children:Object(c.jsx)(W.a,{style:{height:50,backgroundImage:"url(/completium-dapp-iot/qr"+("dark"===e.theme.palette.type?"white":"black")+".svg)",backgroundRepeat:"no-repeat"}})}),Object(c.jsx)(m.a,{item:!0,xs:10,children:Object(c.jsx)(p.a,{children:"Click here to get the Object on your Mobile Device."})})]})})]})}),Object(c.jsx)(oe,{url:"http://edukera.github.io/completium-dapp-iot",open:o,close:function(e){s(!1)},theme:e.theme}),Object(c.jsx)(Z,{appName:u})]})},me=n(133),Oe=n(319),ge=n(318);function ye(e){return Object(c.jsx)(ge.a,Object(me.a)({elevation:6,variant:"filled"},e))}var we=function(e){return Object(c.jsx)(Oe.a,{open:e.open,children:Object(c.jsx)(ye,{severity:"info",style:{backgroundColor:e.theme.palette.secondary.main},children:"Waiting for operation confirmation ..."})})};function ve(){return navigator.maxTouchPoints||"ontouchstart"in document.documentElement}function ke(){var e=T(),t=B(),n=i.a.useState(null),a=Object(d.a)(n,2),r=a[0],o=a[1],s=i.a.useState(!1),u=Object(d.a)(s,2),b=u[0],x=u[1],p=i.a.useMemo((function(){return Object(F.a)({palette:{type:"light",primary:{light:"#F5F5F5",main:"#D3D3D3",dark:"#A9A9A9"},secondary:{light:"#81c784",main:"#4caf50",dark:"#388e3c",contrastText:"#fff"}}})}),[false]),f=i.a.useCallback(Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("delphinet");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0.message);case 8:case 9:case"end":return e.stop()}}),e,null,[[0,5]])}))),[t]);function m(){return O.apply(this,arguments)}function O(){return(O=Object(j.a)(l.a.mark((function e(){var t,n,c,a,i,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new je.a("https://delphinet-tezos.giganode.io"),e.next=4,t.contract.at(h);case 4:return n=e.sent,e.next=7,n.storage();case 7:c=e.sent,a=new Date(c.dateofstart),i=new Date(c.dateofstop),r=parseInt(0+c.rate[4])/parseInt(0+c.rate[3]),s=c.user,o({dateofstart:a,dateofstop:i,rate:r,user:s}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log("Error: ".concat(e.t0));case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}null===r&&m();return Object(c.jsxs)(M.a,{theme:p,children:[Object(c.jsx)(L.a,{}),Object(c.jsx)(E,{theme:p,appTitle:"Switch on a Connected Object!",handleConnect:f,istouch:ve()}),null===r?Object(c.jsx)(se.a,{color:"secondary"}):ve()?Object(c.jsx)(H,{loadSwitchContent:m,switch:r}):Object(c.jsx)(fe,{ready:e,theme:p,switch:r,loadSwitchContent:m,setBCSwitch:o,openSnack:function(){x(!0)},closeSnack:function(){x(!1)}}),Object(c.jsx)(we,{open:b,theme:p})]})}var Se=function(){return Object(c.jsx)(v,{appName:u,children:Object(c.jsx)(i.a.Suspense,{fallback:null,children:Object(c.jsx)(ke,{})})})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,323)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(Se,{})}),document.getElementById("root")),Ce()},67:function(e,t,n){}},[[267,1,2]]]);
//# sourceMappingURL=main.4189119b.chunk.js.map