(this.webpackJsonpapiconnection=this.webpackJsonpapiconnection||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={bus:"BusItem_bus__20ujH",hour:"BusItem_hour__3desg",remaining:"BusItem_remaining__3UTKM"}},,,,function(e,t,n){e.exports={content:"BusContent_content__3JHnj",c1:"BusContent_c1__3UTmU",Select:"BusContent_Select__2OYzI"}},function(e,t,n){e.exports={NavB:"NavBar_NavB__2LOmq",List:"NavBar_List__3SHpe"}},,,function(e,t,n){e.exports={card:"Card_card__2nKG4"}},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(4),o=n.n(a),r=(n(20),n(21),n(10)),u=n.n(r),i=n(13),j=n(14),l=n(3),b=n(11),d=n.n(b),h=n(15),A=n.n(h),O=n(1),x=function(e){return Object(O.jsx)("div",{className:A.a.card,children:e.children})},m=n(7),g=n.n(m),f=function(e){var t=Math.floor(e.remaining/1e3),n=Math.floor(t/60),c=Object(O.jsxs)("div",{children:["\u5269\u4e0b:",n,"\u5206\u9418"]});0===n?c=Object(O.jsx)("div",{children:"\u5373\u5c07\u5230\u9054"}):n<0&&(c=Object(O.jsx)("div",{children:"NA"}));var s=e.minutes;return e.minutes<10&&(s="0".concat(e.minutes)),Object(O.jsxs)("li",{className:g.a.bus,children:[Object(O.jsx)("h3",{children:e.busroute}),Object(O.jsxs)("div",{className:g.a.hour,children:["\u62b5\u9054\u6642\u9593: ",e.hours," : ",s]}),Object(O.jsx)("div",{className:g.a.remaining,children:c})]})},p=n(8),v=(n.p,{width:"400px",height:"400px"}),B={lat:22.452235,lng:114.0020089};function C(){var e=Object(p.c)({id:"google-map-script",googleMapsApiKey:"AIzaSyBLrU_zN23HcZsijnL6KJOP5myQ89JSomU"}).isLoaded,t=s.a.useState(null),n=Object(l.a)(t,2),c=(n[0],n[1]),a=s.a.useCallback((function(e){var t=new window.google.maps.LatLngBounds;e.fitBounds(t),c(e)}),[]),o=s.a.useCallback((function(e){c(null)}),[]);return e?Object(O.jsxs)(p.a,{mapContainerStyle:v,center:B,zoom:15,onLoad:a,onUnmount:o,children:[Object(O.jsx)(p.b,{position:B}),Object(O.jsx)(O.Fragment,{})]}):Object(O.jsx)(O.Fragment,{})}var S=s.a.memo(C),E=function(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(),r=Object(l.a)(o,2),b=r[0],h=r[1],A=Object(c.useState)([]),m=Object(l.a)(A,2),g=m[0],p=m[1],v=Object(c.useState)(!1),B=Object(l.a)(v,2),C=B[0],E=B[1],k=Object(c.useState)(null),N=Object(l.a)(k,2),U=N[0],D=N[1],_=Object(c.useState)(""),Q=Object(l.a)(_,2),L=Q[0],w=Q[1];function I(){return M.apply(this,arguments)}function M(){return(M=Object(j.a)(u.a.mark((function t(){var n,c,s,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Date,w(n),p([]),t.prev=3,t.next=6,fetch(e.url);case 6:return c=t.sent,t.next=9,c.json();case 9:if(s=t.sent,c.ok){t.next=12;break}throw new Error("No");case 12:o=s.data.map((function(e){return{key:Math.random(),BusEta:new Date(e.eta),busRoute:e.route}})),console.log(s),E(!0),console.log(o),a(o),p((function(e){return[].concat(Object(i.a)(e),[o[0].busRoute])})),console.log(b),h(void 0===b?o[0].busRoute:b),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(3),D(t.t0.message);case 25:case"end":return t.stop()}}),t,null,[[3,22]])})))).apply(this,arguments)}var T=g.map((function(e){return Object(O.jsx)("option",{value:e,children:e})}));Object(c.useEffect)((function(){I()}),[]),Object(c.useEffect)((function(){!function(){for(var e=function(e){s[e].busRoute!==s[e-1].busRoute&&p((function(t){return[].concat(Object(i.a)(t),[s[e].busRoute])}))},t=1;t<s.length;t++)e(t)}()}),[s]);var R=Object(O.jsx)("p",{children:"no Found"});return C&&s.length>0&&(console.log(s),R=s.filter((function(e){return e.busRoute===b})).map((function(e){return Object(O.jsx)(f,{busroute:e.busRoute,hours:e.BusEta.getHours(),minutes:e.BusEta.getMinutes(),remaining:e.BusEta.getTime()-L.getTime()})}))),U&&(R=Object(O.jsx)("p",{children:U})),Object(O.jsxs)("div",{className:d.a.content,children:[Object(O.jsx)("h1",{children:"\u5929\u8000\u5df4\u58eb\u7ad9\u8def\u7dda"}),Object(O.jsx)(S,{}),Object(O.jsx)("button",{onClick:I,children:"\u66f4\u65b0"}),Object(O.jsx)("h1",{children:"\u8acb\u9078\u53d6\u4f60\u8981\u67e5\u8a62\u7684\u8def\u7dda"}),Object(O.jsx)("select",{className:d.a.Select,onChange:function(e){h(e.target.value),console.log(b)},value:b,children:T}),Object(O.jsx)(x,{children:Object(O.jsx)("ul",{children:R})})]})},k=n(12),N=n.n(k),U=function(){return Object(O.jsxs)("nav",{className:N.a.NavB,children:[Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAeCAYAAAC7Q5mxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAD2EAAA9hAag/p2kAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTnU1rJkAAACkklEQVRoQ+1ZwVHDMBBMCTSQiFfs8IESKIESKCElpARKSAmUQAl0ADOxhy8dGK0uIopyOesUM4kcdmYHiFfSaVlLsjMBvkx125pqxbEx1bMTRWjM3QOnB30b/OSua4hxUvvias2pAW02pnrcdnEUXdfRLxC3pu44NrP5G6n2gc85PbFa9WvS2Zj6JbWvzXT+6U0HTqphWn+3s/kaAdt2t4dsAyU9Bv0w9zfQDWUgCGO4zzlC6wq1GKQGOycu3dkGykVR+oAhDdTy99YfsIbYxCwDW7N44nSOQfqAcxqIOf1FDb5fIMtA+VbapQ8YpYHB8qA2kHY0XhenD7h4A6f1O66HxDxYbUC/PKgNlNLHLbKuIEYL+gmGoGMEr4/TDaT0r60BEINCXEKnMlDqNIx1iFINBJBOrg2RalEZqE0fULKBUjtLXQJz0geUaiDWcmktVK+BOekDSjCQ5o5xdxTna/tzg1skGShRSh9QgoHymBGjk8bJBnKTCjEqA+2mEh/T/hOYaCD6cANGSDMQ27mwoHJGeIzFQBD9ZCXQFTCbr7lrjvYa9XKIMRnoaIMUvipLNhCNuGuex96XlWAgasdPT3dkkx7ngo0k2UBo3K3MXCceTg4owUDXUYS+wPi7TmXg1T3KScuWJZKrMhCQos0dqIs20D6uxfqIS7WB+G6C04ChzqNsA4UXx5bwQm0gfXvH68B4M9EWjxSjDUsu4dsvm1hud8sUDQcpLCDaqw0E8Denc4yONJJW+u+fG30vE4jVKs9AYTOhQXEbEqWHclqkd9qLYq954OIpy0AgbYAR084fPmQb2Lc+XAH1r/RD9G0mo2awzmcbCGxm9SunHzPhhfp94DED+85JYyI2Q+4Y1XXd5Ac9C1Jx8i7MFQAAAABJRU5ErkJggg==",alt:"KMB Logo"}),Object(O.jsxs)("ul",{className:N.a.List,children:[Object(O.jsx)("li",{children:"\u4e3b\u9801"}),Object(O.jsx)("li",{children:"\u4e5d\u5df4\u7db2\u9801\u9023\u7d50"}),Object(O.jsx)("li",{children:"\u4e3b\u9801"})]})]})},D="https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/".concat("7898B605E39613A8");var _=function(){return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)(U,{}),Object(O.jsx)(E,{url:D}),Object(O.jsx)("footer",{children:"This is devloped by me"})]})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))};o.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(_,{})}),document.getElementById("root")),Q()}],[[24,1,2]]]);
//# sourceMappingURL=main.09ad284e.chunk.js.map