"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[151],{151:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),o=n(87),i=n(240),l=n(184);t.default=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],f=(0,s.useState)([]),h=(0,a.Z)(f,2),p=h[0],v=h[1],k=(0,o.lr)(),x=(0,a.Z)(k,2),d=x[0],m=x[1],w=d.get("query"),S=(0,s.useState)(w),b=(0,a.Z)(S,2),j=b[0],y=b[1],C=(0,s.useCallback)(function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=8;break}return e.next=4,(0,i.z1)(t);case 4:n=e.sent,v(n),e.next=9;break;case 8:v([]);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),[]);(0,s.useEffect)((function(){var e=new URLSearchParams(d).get("query");e&&y(e)}),[d]);var Z=function(){var e=new URLSearchParams;e.set("query",n),m(e),y(n)};return(0,s.useEffect)((function(){c(w||"")}),[w]),(0,s.useEffect)((function(){C(j)}),[C,j]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Search Movies"}),(0,l.jsx)("input",{type:"text",placeholder:"Search for movies...",value:n,onChange:function(e){return c(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&Z()}}),(0,l.jsx)("button",{onClick:Z,children:"Search"}),(0,l.jsx)("ul",{children:p.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=151.77921359.chunk.js.map