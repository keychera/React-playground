(this.webpackJsonpreactplayground=this.webpackJsonpreactplayground||[]).push([[0],{10:function(e,a,t){},4:function(e,a,t){e.exports=t(5)},5:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(0),c=t.n(r),l=t(3),u=t.n(l),o=(t(10),function(e){var a=e.value,t=e.onClick;return c.a.createElement("button",{className:"square",onClick:t},a)}),s=function(e){var a=e.squares,t=e.handleClick,n=function(e){return c.a.createElement(o,{value:a[e],onClick:function(){return t(e)}})};return c.a.createElement("div",null,c.a.createElement("div",{className:"board-row"},n(0),n(1),n(2)),c.a.createElement("div",{className:"board-row"},n(3),n(4),n(5)),c.a.createElement("div",{className:"board-row"},n(6),n(7),n(8)))},i=function(){var e,a=Object(r.useState)([{squares:Array(9).fill(null)}]),t=Object(n.a)(a,2),l=t[0],u=t[1],o=Object(r.useState)(!0),i=Object(n.a)(o,2),m=i[0],v=i[1],d=Object(r.useState)(!1),b=Object(n.a)(d,2),f=b[0],E=b[1],O=Object(r.useState)(0),p=Object(n.a)(O,2),g=p[0],j=p[1],k=l.slice(0,g+1),q=k[g],N=function(e){for(var a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<a.length;t++){var r=Object(n.a)(a[t],3),c=r[0],l=r[1],u=r[2];if(e[c]&&e[c]===e[l]&&e[c]===e[u])return e[c]}return null}(q.squares);N?(f||E(!0),e="Winner: ".concat(N)):(f&&E(!1),e="Next player: ".concat(m?"X":"O"));var h=k.map((function(e,a){var t=a?"Go to move #"+a:"Go to game start";return c.a.createElement("li",{key:a},c.a.createElement("button",{onClick:function(){return function(e){j(e),v(e%2===0)}(a)}},t))}));return c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(s,{squares:q.squares,handleClick:function(e){var a=q.squares.slice();f||a[e]||(a[e]=m?"X":"O",u(k.concat([{squares:a}])),v(!m),j(k.length))}})),c.a.createElement("div",{className:"game-info"},c.a.createElement("div",null,e),c.a.createElement("ol",null,h)))};u.a.render(c.a.createElement(i,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.b2bb60f6.chunk.js.map