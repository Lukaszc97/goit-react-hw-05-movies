"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{115:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),s=r.n(c),o=r(791),u=r(87),i=r(184);t.default=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),r=t[0],c=t[1],l=(0,o.useState)([]),h=(0,a.Z)(l,2),p=h[0],f=h[1],d=(0,o.useCallback)((0,n.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=6259da9bc5df5d51756d5e5542429946&query=".concat(r));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Network response was not ok");case 6:return e.next=8,t.json();case 8:n=e.sent,f(n.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),[r]);return(0,o.useEffect)((function(){""!==r?d():f([])}),[r,d]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"Search Movies"}),(0,i.jsx)("input",{type:"text",placeholder:"Search for movies...",value:r,onChange:function(e){return c(e.target.value)}}),(0,i.jsx)("ul",{children:p.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(u.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=115.b6207bc6.chunk.js.map