(this.webpackJsonpapiconnection=this.webpackJsonpapiconnection||[]).push([[0],[,,,,,function(e,t,n){e.exports={bus:"BusItem_bus__20ujH",hour:"BusItem_hour__3desg",remaining:"BusItem_remaining__3UTKM"}},,,function(e,t,n){e.exports={content:"BusContent_content__3JHnj",c1:"BusContent_c1__3UTmU",Select:"BusContent_Select__2OYzI"}},function(e,t,n){e.exports={NavB:"NavBar_NavB__2LOmq",List:"NavBar_List__3SHpe"}},,,,function(e,t,n){e.exports={card:"Card_card__2nKG4"}},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(11),r=n.n(a),u=(n(18),n(19),n(7)),o=n.n(u),i=n(10),j=n(12),l=n(2),b=n(8),h=n.n(b),A=n(13),d=n.n(A),O=n(0),x=function(e){return Object(O.jsx)("div",{className:d.a.card,children:e.children})},f=n(5),m=n.n(f),g=function(e){var t=Math.floor(e.remaining/1e3),n=Math.floor(t/60),c=Object(O.jsxs)("div",{children:["\u5269\u4e0b:",n,"\u5206\u9418"]});0===n?c=Object(O.jsx)("div",{children:"\u5373\u5c07\u5230\u9054"}):n<0&&(c=Object(O.jsx)("div",{children:"NA"}));var s=e.minutes;return e.minutes<10&&(s="0".concat(e.minutes)),Object(O.jsxs)("li",{className:m.a.bus,children:[Object(O.jsx)("h3",{children:e.busroute}),Object(O.jsxs)("div",{className:m.a.hour,children:["\u62b5\u9054\u6642\u9593: ",e.hours," : ",s]}),Object(O.jsx)("div",{className:m.a.remaining,children:c})]})},p=function(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(),u=Object(l.a)(r,2),b=u[0],A=u[1],d=Object(c.useState)([]),f=Object(l.a)(d,2),m=f[0],p=f[1],v=Object(c.useState)(!1),B=Object(l.a)(v,2),C=B[0],E=B[1],S=Object(c.useState)(null),N=Object(l.a)(S,2),k=N[0],D=N[1],U=Object(c.useState)(""),_=Object(l.a)(U,2),Q=_[0],I=_[1];function M(){return T.apply(this,arguments)}function T(){return(T=Object(j.a)(o.a.mark((function t(){var n,c,s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Date,I(n),p([]),t.prev=3,t.next=6,fetch(e.url);case 6:return c=t.sent,t.next=9,c.json();case 9:if(s=t.sent,c.ok){t.next=12;break}throw new Error("No");case 12:r=s.data.map((function(e){return{key:Math.random(),BusEta:new Date(e.eta),busRoute:e.route}})),console.log(s),E(!0),console.log(r),a(r),p((function(e){return[].concat(Object(i.a)(e),[r[0].busRoute])})),console.log(b),A(void 0===b?r[0].busRoute:b),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(3),D(t.t0.message);case 25:case"end":return t.stop()}}),t,null,[[3,22]])})))).apply(this,arguments)}var R=m.map((function(e){return Object(O.jsx)("option",{value:e,children:e})}));Object(c.useEffect)((function(){M()}),[]),Object(c.useEffect)((function(){!function(){for(var e=function(e){s[e].busRoute!==s[e-1].busRoute&&p((function(t){return[].concat(Object(i.a)(t),[s[e].busRoute])}))},t=1;t<s.length;t++)e(t)}()}),[s]);var w=Object(O.jsx)("p",{children:"no Found"});return C&&s.length>0&&(console.log(s),w=s.filter((function(e){return e.busRoute===b})).map((function(e){return Object(O.jsx)(g,{busroute:e.busRoute,hours:e.BusEta.getHours(),minutes:e.BusEta.getMinutes(),remaining:e.BusEta.getTime()-Q.getTime()})}))),k&&(w=Object(O.jsx)("p",{children:k})),Object(O.jsxs)("div",{className:h.a.content,children:[Object(O.jsx)("h1",{children:"\u5929\u8000\u5df4\u58eb\u7ad9\u8def\u7dda"}),Object(O.jsx)("button",{onClick:M,children:"\u66f4\u65b0"}),Object(O.jsx)("h1",{children:"\u8acb\u9078\u53d6\u4f60\u8981\u67e5\u8a62\u7684\u8def\u7dda"}),Object(O.jsx)("select",{className:h.a.Select,onChange:function(e){A(e.target.value),console.log(b)},value:b,children:R}),Object(O.jsx)(x,{children:Object(O.jsx)("ul",{children:w})})]})},v=n(9),B=n.n(v),C=function(){return Object(O.jsxs)("nav",{className:B.a.NavB,children:[Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAeCAYAAAC7Q5mxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAD2EAAA9hAag/p2kAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTnU1rJkAAACkklEQVRoQ+1ZwVHDMBBMCTSQiFfs8IESKIESKCElpARKSAmUQAl0ADOxhy8dGK0uIopyOesUM4kcdmYHiFfSaVlLsjMBvkx125pqxbEx1bMTRWjM3QOnB30b/OSua4hxUvvias2pAW02pnrcdnEUXdfRLxC3pu44NrP5G6n2gc85PbFa9WvS2Zj6JbWvzXT+6U0HTqphWn+3s/kaAdt2t4dsAyU9Bv0w9zfQDWUgCGO4zzlC6wq1GKQGOycu3dkGykVR+oAhDdTy99YfsIbYxCwDW7N44nSOQfqAcxqIOf1FDb5fIMtA+VbapQ8YpYHB8qA2kHY0XhenD7h4A6f1O66HxDxYbUC/PKgNlNLHLbKuIEYL+gmGoGMEr4/TDaT0r60BEINCXEKnMlDqNIx1iFINBJBOrg2RalEZqE0fULKBUjtLXQJz0geUaiDWcmktVK+BOekDSjCQ5o5xdxTna/tzg1skGShRSh9QgoHymBGjk8bJBnKTCjEqA+2mEh/T/hOYaCD6cANGSDMQ27mwoHJGeIzFQBD9ZCXQFTCbr7lrjvYa9XKIMRnoaIMUvipLNhCNuGuex96XlWAgasdPT3dkkx7ngo0k2UBo3K3MXCceTg4owUDXUYS+wPi7TmXg1T3KScuWJZKrMhCQos0dqIs20D6uxfqIS7WB+G6C04ChzqNsA4UXx5bwQm0gfXvH68B4M9EWjxSjDUsu4dsvm1hud8sUDQcpLCDaqw0E8Denc4yONJJW+u+fG30vE4jVKs9AYTOhQXEbEqWHclqkd9qLYq954OIpy0AgbYAR084fPmQb2Lc+XAH1r/RD9G0mo2awzmcbCGxm9SunHzPhhfp94DED+85JYyI2Q+4Y1XXd5Ac9C1Jx8i7MFQAAAABJRU5ErkJggg==",alt:"KMB Logo"}),Object(O.jsxs)("ul",{className:B.a.List,children:[Object(O.jsx)("li",{children:"\u4e3b\u9801"}),Object(O.jsx)("li",{children:"\u4e5d\u5df4\u7db2\u9801\u9023\u7d50"}),Object(O.jsx)("li",{children:"\u4e3b\u9801"})]})]})},E="https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/".concat("7898B605E39613A8");var S=function(){return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)(C,{}),Object(O.jsx)(p,{url:E}),Object(O.jsx)("footer",{children:"This is devloped by me"})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),N()}],[[22,1,2]]]);
//# sourceMappingURL=main.86a86f7c.chunk.js.map