(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{84:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(0),r=a.n(c),l=a(10),i=a.n(l),s=a(129),j=a(128),u=a(62),o=a(45),d=a(113),b=a(117),h=a(118),O=a(130),p=a(120),f=a(121),x=a(123),v=a(125),m=a(133),k=a(126),y=a(132),R=a(127),S=a(122),C=a(124),W=a(56),w=a.n(W);function T(){var e=r.a.useState([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=r.a.useState(null),i=Object(o.a)(l,2),s=i[0],j=i[1],W=r.a.useState(null),T=Object(o.a)(W,2),J=T[0],L=T[1],g=r.a.useRef(null),A=r.a.useRef(null),D=r.a.useRef(null);return Object(n.jsxs)(d.a,{maxWidth:"sm",children:[Object(n.jsxs)(b.a,{children:[Object(n.jsx)(h.a,{children:Object(n.jsx)(O.a,{inputRef:A,label:"Adres URL",fullWidth:!0})}),Object(n.jsxs)(h.a,{children:[Object(n.jsx)(O.a,{inputRef:g,label:"selektor CSS",fullWidth:!0}),Object(n.jsx)(p.a,{children:Object(n.jsx)(f.a,{onClick:function(){c(g.current?[{k:1*new Date,val:g.current.value}].concat(Object(u.a)(a)):a),g.current.value=""},children:Object(n.jsx)(S.a,{})})})]}),a.map((function(e){return Object(n.jsxs)(h.a,{children:[Object(n.jsx)(x.a,{primary:e.val}),Object(n.jsx)(p.a,{children:Object(n.jsx)(f.a,{onClick:(t=e.k,function(){return c(a.filter((function(e){return e.k!==t})))}),children:Object(n.jsx)(C.a,{})})})]},e.k);var t}))]}),Object(n.jsx)(v.a,{label:"Zwr\xf3\u0107 jako HTML",control:Object(n.jsx)(m.a,{inputRef:D})}),Object(n.jsx)(k.a,{fullWidth:!0,color:"primary",variant:"contained",onClick:function(){var e,t;fetch("/scrap",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({url:(null===(e=A.current)||void 0===e?void 0:e.value)||"",patterns:a.map((function(e){return e.val})),returnHTML:null===(t=D.current)||void 0===t?void 0:t.checked})}).then((function(e){return e.json()})).then(j).catch(console.error)},children:"Wy\u015blij zapytanie"}),Object(n.jsx)(y.a,{maxWidth:"md",onClose:function(){L(s),j(null)},fullWidth:!0,open:Boolean(s),children:Object(n.jsx)(R.a,{children:Object(n.jsx)(w.a,{enableClipboard:!1,displayDataTypes:!1,src:s||J||{notYetRendered:!0}})})})]})}var J=a(44),L=a(61),g=Object(L.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:J.a.A400},background:{default:"#fff"}}});i.a.render(Object(n.jsxs)(j.a,{theme:g,children:[Object(n.jsx)(s.a,{}),Object(n.jsx)(T,{})]}),document.querySelector("#root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.ddf9b2c4.chunk.js.map