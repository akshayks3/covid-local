(this.webpackJsonpcovid19india1=this.webpackJsonpcovid19india1||[]).push([[18],{116:function(t,n,e){"use strict";var r=e(2),i=e(93),a=i.a?r.useLayoutEffect:r.useEffect,c={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};n.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(r.useState)(null),n=t[0],e=t[1],i=Object(r.useState)(c),o=i[0],u=i[1],l=Object(r.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var n=t[0].contentRect,e=n.x,r=n.y,i=n.width,a=n.height,c=n.top,o=n.left,l=n.bottom,s=n.right;u({x:e,y:r,width:i,height:a,top:c,left:o,bottom:l,right:s})}}))}),[]);return a((function(){if(n)return l.observe(n),function(){l.disconnect()}}),[n]),[e,o]}:function(){return[i.b,c]}},127:function(t,n,e){"use strict";n.a=function(t){for(var n;n=t.sourceEvent;)t=n;return t}},145:function(t,n,e){"use strict";e.d(n,"b",(function(){return f})),e.d(n,"a",(function(){return d}));var r=function(t){return t},i=1e-6;function a(t){return"translate("+t+",0)"}function c(t){return"translate(0,"+t+")"}function o(t){return function(n){return+t(n)}}function u(t,n){return n=Math.max(0,t.bandwidth()-2*n)/2,t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}function l(){return!this.__axis}function s(t,n){var e=[],s=null,f=null,d=6,h=6,b=3,v="undefined"!==typeof window&&window.devicePixelRatio>1?0:.5,j=1===t||4===t?-1:1,m=4===t||2===t?"x":"y",g=1===t||3===t?a:c;function p(a){var c=null==s?n.ticks?n.ticks.apply(n,e):n.domain():s,p=null==f?n.tickFormat?n.tickFormat.apply(n,e):r:f,O=Math.max(d,0)+b,x=n.range(),y=+x[0]+v,k=+x[x.length-1]+v,M=(n.bandwidth?u:o)(n.copy(),v),_=a.selection?a.selection():a,w=_.selectAll(".domain").data([null]),A=_.selectAll(".tick").data(c,n).order(),N=A.exit(),T=A.enter().append("g").attr("class","tick"),E=A.select("line"),S=A.select("text");w=w.merge(w.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),A=A.merge(T),E=E.merge(T.append("line").attr("stroke","currentColor").attr(m+"2",j*d)),S=S.merge(T.append("text").attr("fill","currentColor").attr(m,j*O).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),a!==_&&(w=w.transition(a),A=A.transition(a),E=E.transition(a),S=S.transition(a),N=N.transition(a).attr("opacity",i).attr("transform",(function(t){return isFinite(t=M(t))?g(t+v):this.getAttribute("transform")})),T.attr("opacity",i).attr("transform",(function(t){var n=this.parentNode.__axis;return g((n&&isFinite(n=n(t))?n:M(t))+v)}))),N.remove(),w.attr("d",4===t||2===t?h?"M"+j*h+","+y+"H"+v+"V"+k+"H"+j*h:"M"+v+","+y+"V"+k:h?"M"+y+","+j*h+"V"+v+"H"+k+"V"+j*h:"M"+y+","+v+"H"+k),A.attr("opacity",1).attr("transform",(function(t){return g(M(t)+v)})),E.attr(m+"2",j*d),S.attr(m,j*O).text(p),_.filter(l).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),_.each((function(){this.__axis=M}))}return p.scale=function(t){return arguments.length?(n=t,p):n},p.ticks=function(){return e=Array.from(arguments),p},p.tickArguments=function(t){return arguments.length?(e=null==t?[]:Array.from(t),p):e.slice()},p.tickValues=function(t){return arguments.length?(s=null==t?null:Array.from(t),p):s&&s.slice()},p.tickFormat=function(t){return arguments.length?(f=t,p):f},p.tickSize=function(t){return arguments.length?(d=h=+t,p):d},p.tickSizeInner=function(t){return arguments.length?(d=+t,p):d},p.tickSizeOuter=function(t){return arguments.length?(h=+t,p):h},p.tickPadding=function(t){return arguments.length?(b=+t,p):b},p.offset=function(t){return arguments.length?(v=+t,p):v},p}function f(t){return s(2,t)}function d(t){return s(3,t)}},170:function(t,n,e){"use strict";e.d(n,"b",(function(){return b})),e.d(n,"a",(function(){return v}));var r=e(254),i=e(276),a=e(121),c=e(109),o=e(49);function u(t){return Math.log(t)}function l(t){return Math.exp(t)}function s(t){return-Math.log(-t)}function f(t){return-Math.exp(-t)}function d(t){return isFinite(t)?+("1e"+t):t<0?0:t}function h(t){return function(n){return-t(-n)}}function b(t){var n,e,c=t(u,l),o=c.domain,b=10;function v(){return n=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}(b),e=function(t){return 10===t?d:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}(b),o()[0]<0?(n=h(n),e=h(e),t(s,f)):t(u,l),c}return c.base=function(t){return arguments.length?(b=+t,v()):b},c.domain=function(t){return arguments.length?(o(t),v()):o()},c.ticks=function(t){var i,a=o(),c=a[0],u=a[a.length-1];(i=u<c)&&(d=c,c=u,u=d);var l,s,f,d=n(c),h=n(u),v=null==t?10:+t,j=[];if(!(b%1)&&h-d<v){if(d=Math.floor(d),h=Math.ceil(h),c>0){for(;d<=h;++d)for(s=1,l=e(d);s<b;++s)if(!((f=l*s)<c)){if(f>u)break;j.push(f)}}else for(;d<=h;++d)for(s=b-1,l=e(d);s>=1;--s)if(!((f=l*s)<c)){if(f>u)break;j.push(f)}2*j.length<v&&(j=Object(r.a)(c,u,v))}else j=Object(r.a)(d,h,Math.min(h-d,v)).map(e);return i?j.reverse():j},c.tickFormat=function(t,r){if(null==r&&(r=10===b?".0e":","),"function"!==typeof r&&(r=Object(i.a)(r)),t===1/0)return r;null==t&&(t=10);var a=Math.max(1,b*t/c.ticks().length);return function(t){var i=t/e(Math.round(n(t)));return i*b<b-.5&&(i*=b),i<=a?r(t):""}},c.nice=function(){return o(Object(a.a)(o(),{floor:function(t){return e(Math.floor(n(t)))},ceil:function(t){return e(Math.ceil(n(t)))}}))},c}function v(){var t=b(Object(c.d)()).domain([1,10]);return t.copy=function(){return Object(c.a)(t,v()).base(t.base())},o.b.apply(t,arguments),t}},175:function(t,n,e){"use strict";var r=e(127);n.a=function(t,n){if(t=Object(r.a)(t),void 0===n&&(n=t.currentTarget),n){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var i=e.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,[(i=i.matrixTransform(n.getScreenCTM().inverse())).x,i.y]}if(n.getBoundingClientRect){var a=n.getBoundingClientRect();return[t.clientX-a.left-n.clientLeft,t.clientY-a.top-n.clientTop]}}return[t.pageX,t.pageY]}},214:function(t,n,e){"use strict";var r=e(25);n.a=function(t,n){var e,i;if(void 0===n){var a,c=Object(r.a)(t);try{for(c.s();!(a=c.n()).done;){var o=a.value;null!=o&&(void 0===e?o>=o&&(e=i=o):(e>o&&(e=o),i<o&&(i=o)))}}catch(d){c.e(d)}finally{c.f()}}else{var u,l=-1,s=Object(r.a)(t);try{for(s.s();!(u=s.n()).done;){var f=u.value;null!=(f=n(f,++l,t))&&(void 0===e?f>=f&&(e=i=f):(e>f&&(e=f),i<f&&(i=f)))}}catch(d){s.e(d)}finally{s.f()}}return[e,i]}},221:function(t,n,e){"use strict";var r=e(256),i=e(126),a=e(125),c=e(140),o=e(169),u=e(141);n.a=function(t,n,e){var l=null,s=Object(a.a)(!0),f=null,d=c.a,h=null;function b(a){var c,o,u,b,v,j=(a=Object(i.a)(a)).length,m=!1,g=new Array(j),p=new Array(j);for(null==f&&(h=d(v=Object(r.a)())),c=0;c<=j;++c){if(!(c<j&&s(b=a[c],c,a))===m)if(m=!m)o=c,h.areaStart(),h.lineStart();else{for(h.lineEnd(),h.lineStart(),u=c-1;u>=o;--u)h.point(g[u],p[u]);h.lineEnd(),h.areaEnd()}m&&(g[c]=+t(b,c,a),p[c]=+n(b,c,a),h.point(l?+l(b,c,a):g[c],e?+e(b,c,a):p[c]))}if(v)return h=null,v+""||null}function v(){return Object(o.a)().defined(s).curve(d).context(f)}return t="function"===typeof t?t:void 0===t?u.a:Object(a.a)(+t),n="function"===typeof n?n:void 0===n?Object(a.a)(0):Object(a.a)(+n),e="function"===typeof e?e:void 0===e?u.b:Object(a.a)(+e),b.x=function(n){return arguments.length?(t="function"===typeof n?n:Object(a.a)(+n),l=null,b):t},b.x0=function(n){return arguments.length?(t="function"===typeof n?n:Object(a.a)(+n),b):t},b.x1=function(t){return arguments.length?(l=null==t?null:"function"===typeof t?t:Object(a.a)(+t),b):l},b.y=function(t){return arguments.length?(n="function"===typeof t?t:Object(a.a)(+t),e=null,b):n},b.y0=function(t){return arguments.length?(n="function"===typeof t?t:Object(a.a)(+t),b):n},b.y1=function(t){return arguments.length?(e=null==t?null:"function"===typeof t?t:Object(a.a)(+t),b):e},b.lineX0=b.lineY0=function(){return v().x(t).y(n)},b.lineY1=function(){return v().x(t).y(e)},b.lineX1=function(){return v().x(l).y(n)},b.defined=function(t){return arguments.length?(s="function"===typeof t?t:Object(a.a)(!!t),b):s},b.curve=function(t){return arguments.length?(d=t,null!=f&&(h=d(f)),b):d},b.context=function(t){return arguments.length?(null==t?f=h=null:h=d(f=t),b):f},b}},294:function(t,n,e){"use strict";e.r(n);var r=e(101),i=e(47),a=e(10),c=e(24),o=e(92),u=e.n(o),l=e(214),s=e(203),f=e(145),d=e(120),h=e(275),b=e(143),v=e(170),j=e(175),m=e(255),g=e(221);function p(t,n){this._context=t,this._t=n}p.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}};var O=function(t){return new p(t,.5)};var x=e(257),y=e(169),k=e(140),M=(e(103),e(83)),_=e(91),w=e.n(_),A=e(2),N=e(288),T=e(116),E=e(19),S=15,z=35,H=25,R=25,C=.7;function D(t){var n=t.statistics,e=t.timeseries,o=t.dates,p=t.endDate,_=t.chartType,w=t.isUniform,D=t.isLog,V=t.isMovingAverage,F=t.noRegionHighlightedDistrictData,P=Object(N.a)().t,L=Object(A.useRef)([]),Y=Object(T.a)(),X=Object(i.a)(Y,2),U=X[0],G=X[1],I=G.width,B=G.height,J=Object(A.useState)(o[o.length-1]),Z=Object(i.a)(J,2),q=Z[0],K=Z[1];Object(A.useEffect)((function(){K(o[o.length-1])}),[o]);var Q=Object(A.useCallback)((function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:V;return Object(c.i)(null===e||void 0===e?void 0:e[t],_,n,{movingAverage:r})}),[_,V,e]),W=Object(A.useMemo)((function(){var t=o.length,n=Object(M.a)(Object(c.k)(o[t-1]),Object(c.k)(o[0])),e=I-z;return Math.max(0,e-R)/(1.25*n)<4}),[I,o]),$=Object(A.useMemo)((function(){var t=o.length,n=I-z;return Object(h.a)().clamp(!0).domain([Object(c.k)(o[0]||p),Object(c.k)(o[t-1]||p)]).range([R,n])}),[I,p,o]),tt=Object(A.useMemo)((function(){var t=B-H,e=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=t.domain();return n?t.domain([e[0],e[0]*Math.pow(e[1]/e[0],1.4285714285714286)]):t.domain([e[0],e[0]+(e[1]-e[0])/C]),t},c=Object(l.a)(o.reduce((function(t,n){return t.push.apply(t,Object(r.a)(a.u.map((function(t){return Q(n,t)})))),t}),[])),u=Object(i.a)(c,2),s=u[0],f=u[1],d=e(Object(b.a)().clamp(!0).domain([Math.min(0,s),Math.max(1,f)]).range([t,S]).nice(4)),h=e(Object(v.a)().clamp(!0).domain([1,Math.max(10,f)]).range([t,S]).nice(4),!0);return n.map((function(n){if(w){if("total"===_&&D&&a.u.includes(n))return h;if(a.u.includes(n))return d}var r=Object(l.a)(o,(function(t){return Q(t,n)})),c=Object(i.a)(r,2),u=c[0],s=c[1];return"total"===_&&D?e(Object(v.a)().clamp(!0).domain([1,Math.max(10,s)]).range([t,S]).nice(4),!0):e(Object(b.a)().clamp(!0).domain([Math.min(0,u),"%"===a.z[n].format?Math.min(100,Math.max(1,s)):Math.max(1,s)]).range([t,S]).nice(4))}))}),[B,_,w,D,n,o,Q]);Object(A.useEffect)((function(){if(I&&B){var t=o.length,e=I-z,r=B-H,i="delta"===_&&!V,u=function(t){return t.attr("class","x-axis").call(Object(f.a)($).ticks(function(t){return t<480?4:6}(I)))},l=function(t,n){t.attr("class","x-axis2").call(Object(f.a)($).tickValues([]).tickSize(0)).select(".domain").style("transform","translate3d(0, ".concat(n(0),"px, 0)")),n(0)!==r?t.select(".domain").attr("opacity",.4):t.select(".domain").attr("opacity",0)},h=function(t,n,e){return t.attr("class","y-axis").call(Object(f.b)(n).ticks(4).tickFormat((function(t){return Object(c.f)(t,e)})).tickPadding(4))};n.forEach((function(n,s){var f,j=L.current[s],p=Object(m.a)(j),M=p.transition().duration(a.d),w=tt[s],A=a.z[n],N="%"===a.z[n].format?"%":"short",T=!!(null===(f=a.z[n])||void 0===f?void 0:f.nonLinear);p.select(".x-axis").style("transform","translate3d(0, ".concat(r,"px, 0)")).transition(M).call(u),p.select(".x-axis2").transition(M).call(l,w),p.select(".y-axis").style("transform","translate3d(".concat(e,"px, 0, 0)")).transition(M).call(h,w,N),p.selectAll("circle.normal").data(W?[]:o,(function(t){return t})).join((function(t){return t.append("circle").attr("class","normal").attr("fill",null===A||void 0===A?void 0:A.color).attr("stroke",null===A||void 0===A?void 0:A.color).attr("cx",(function(t){return $(Object(c.k)(t))})).attr("cy",(function(t){return w(i?0:Q(t,n))})).attr("r",2)})).transition(M).attr("cx",(function(t){return $(Object(c.k)(t))})).attr("cy",(function(t){return w(Q(t,n))}));var E=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(g.a)().curve(O).x((function(t){return $(Object(c.k)(t))})).y0(w(0)).y1(e?w(0):function(t){return w(Q(t,n,!1))})(t)};p.selectAll(".trend-area").data(t&&"delta"===_&&!T&&W?[o]:[]).join((function(t){return t.append("path").attr("class","trend-area").call((function(t){return t.attr("d",(function(t){return E(t,!0)})).transition(M).attr("d",E)}))}),(function(t){return t.call((function(t){return t.transition(M).attrTween("d",(function(t){var n=Object(m.a)(this).attr("d"),e=E(t);return Object(d.a)(n,e)}))}))}),(function(t){return t.call((function(t){return t.transition(M).attr("d",(function(t){return E(t,!0)})).remove()}))})).transition(M).attr("opacity",V?.3:1),p.selectAll(".stem").data(!t||"delta"!==_||T||W?[]:o,(function(t){return t})).join((function(t){return t.append("line").attr("class","stem").attr("stroke-width",4).attr("x1",(function(t){return $(Object(c.k)(t))})).attr("y1",w(0)).attr("x2",(function(t){return $(Object(c.k)(t))})).attr("y2",w(0))}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(M).attr("x1",(function(t){return $(Object(c.k)(t))})).attr("x2",(function(t){return $(Object(c.k)(t))})).attr("y1",w(0)).attr("y2",w(0)).remove()}))})).transition(M).attr("x1",(function(t){return $(Object(c.k)(t))})).attr("y1",w(0)).attr("x2",(function(t){return $(Object(c.k)(t))})).attr("y2",(function(t){return w(Q(t,n,!1))})).attr("opacity",V?.2:1);var S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x.a;return Object(y.a)().curve(e).x((function(t){return $(Object(c.k)(t))})).y((function(e){return w(Q(e,n,t))}))};p.select(".trend").selectAll("path").data(t&&("total"===_||T||V)?[o]:[]).join((function(t){return t.append("path").attr("class","trend").attr("fill","none").attr("stroke-width",4).attr("d",S()).call((function(t){return t.transition(M).attr("opacity",1)}))}),(function(t){return t.call((function(t){return t.transition(M).attrTween("d",(function(t){var n=Object(m.a)(this).attr("d"),e=S()(t);return Object(d.a)(n,e)})).attr("opacity",1)}))}),(function(t){return t.call((function(t){return t.transition(M).attr("opacity",0).remove()}))})).attr("stroke",(null===A||void 0===A?void 0:A.color)+(W?"99":"50")),p.select(".trend-background").selectAll("path").data(t&&"delta"===_&&T&&V?[o]:[]).join((function(t){return t.append("path").attr("class","trend-background").attr("fill","none").attr("stroke-width",4).attr("d",S(!1,k.a)).call((function(t){return t.transition(M).attr("opacity",.2)}))}),(function(t){return t.call((function(t){return t.transition(M).attrTween("d",(function(t){var n=Object(m.a)(this).attr("d"),e=S(!1,k.a)(t);return Object(d.a)(n,e)})).attr("opacity",.2)}))}),(function(t){return t.call((function(t){return t.transition(M).attr("opacity",0).remove()}))})).attr("stroke",(null===A||void 0===A?void 0:A.color)+(W?"99":"50")),p.selectAll("*").attr("pointer-events","none"),p.on("mousemove",b).on("touchmove",(function(t){return b(t.touches[0])})).on("mouseout touchend",v)}))}function b(t){var n=Object(j.a)(t)[0],e=$.invert(n);if(!isNaN(e)){var r=(0,Object(s.a)((function(t){return Object(c.k)(t)})).left)(o,e,1),i=o[r-1],a=o[r];K(e-Object(c.k)(i)<Object(c.k)(a)-e?i:a)}}function v(n){K(o[t-1])}}),[I,B,_,V,W,$,tt,n,Q,o]),Object(A.useEffect)((function(){n.forEach((function(t,n){var e=L.current[n],r=Object(m.a)(e),i=a.z[t],o=tt[n],u=r.transition().duration(a.d);r.selectAll("circle.condensed").data(W&&q?[q]:[],(function(t){return t})).join((function(n){return n.append("circle").attr("class","condensed").attr("fill",null===i||void 0===i?void 0:i.color).attr("stroke",null===i||void 0===i?void 0:i.color).attr("pointer-events","none").attr("cx",(function(t){return $(Object(c.k)(t))})).attr("cy",(function(n){return o(Q(n,t))})).attr("r",4)})).transition(u).attr("cx",(function(t){return $(Object(c.k)(t))})).attr("cy",(function(n){return o(Q(n,t))})),W||r.selectAll("circle").attr("r",(function(t){return t===q?4:2}))}))}),[W,q,$,tt,n,Q]);var nt=Object(A.useCallback)((function(t){var n;if(q){var e=Q(q,t);if(!(null===(n=a.z[t])||void 0===n?void 0:n.hideZero)||0!==e){var r=o[o.findIndex((function(t){return t===q}))-1];return e-Q(r,t)}}}),[o,q,Q]),et=Object(A.useMemo)((function(){return n.map((function(t,n){return{animationDelay:"".concat(250*n,"ms")}}))}),[n]);return Object(E.jsx)("div",{className:"Timeseries",children:n.map((function(t,n){var e=Q(q,t),r=nt(t,n),i=a.z[t];return Object(E.jsxs)("div",{className:u()("svg-parent fadeInUp","is-".concat(t)),style:et[n],ref:0===n?U:null,children:[q&&Object(E.jsxs)("div",{className:u()("stats","is-".concat(t)),children:[Object(E.jsx)("h5",{className:"title",children:P(Object(c.a)(i.displayName))}),Object(E.jsx)("h5",{children:Object(c.c)(q,"dd MMMM")}),Object(E.jsxs)("div",{className:"stats-bottom",children:[Object(E.jsx)("h2",{children:F&&(null===i||void 0===i?void 0:i.hasPrimary)?"-":Object(c.f)(e,"short"!==i.format?i.format:"long",t)}),Object(E.jsx)("h6",{children:F&&(null===i||void 0===i?void 0:i.hasPrimary)?"":"".concat(r>0?"+":"").concat(Object(c.f)(r,"short"!==i.format?i.format:"long",t))})]})]}),Object(E.jsxs)("svg",{ref:function(t){L.current[n]=t},preserveAspectRatio:"xMidYMid meet",children:[Object(E.jsx)("g",{className:"x-axis"}),Object(E.jsx)("g",{className:"x-axis2"}),Object(E.jsx)("g",{className:"y-axis"}),Object(E.jsx)("g",{className:"trend-background"}),Object(E.jsx)("g",{className:"trend"})]})]},t)}))})}var V=function(t,n){return!!w()(n.chartType,t.chartType)&&(!!w()(n.isUniform,t.isUniform)&&(!!w()(n.isLog,t.isLog)&&(!!w()(n.isMovingAverage,t.isMovingAverage)&&(!!w()(n.regionHighlighted.stateCode,t.regionHighlighted.stateCode)&&(!!w()(n.regionHighlighted.districtName,t.regionHighlighted.districtName)&&(!!w()(n.noRegionHighlightedDistrictData,t.noRegionHighlightedDistrictData)&&(!!w()(n.endDate,t.endDate)&&(!!w()(n.statistics,t.statistics)&&!!w()(n.dates,t.dates)))))))))};n.default=Object(A.memo)(D,V)}}]);
//# sourceMappingURL=18.6464130a.chunk.js.map