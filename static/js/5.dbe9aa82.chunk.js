(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[5],{135:function(t,e,i){"use strict";i.d(e,"a",(function(){return c})),i.d(e,"c",(function(){return o})),i.d(e,"b",(function(){return r}));var n=i(95),a=i(19),c=function(){return Object(a.jsxs)("div",{className:"Icons",children:[Object(a.jsx)(n.t,{size:16}),Object(a.jsx)("span",{children:"7D"})]})},o=function(){return Object(a.jsxs)("div",{className:"Icons",children:[Object(a.jsx)(n.r,{size:16}),Object(a.jsx)("span",{children:"1L"})]})},r=function(){return Object(a.jsx)("div",{className:"Icons",children:Object(a.jsx)(n.q,{size:16})})}},136:function(t,e,i){!function(t,e){function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}var n="Left",a="Right",c="Up",o="Down",r={delta:10,preventDefaultTouchmoveEvent:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0},s={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},l="mousemove",d="mouseup",u="touchend",v="touchmove",h="touchstart";function p(t,e,i,r){return t>e?i>0?a:n:r>0?o:c}function f(t,e){if(0===e)return t;var i=Math.PI/180*e;return[t[0]*Math.cos(i)+t[1]*Math.sin(i),t[1]*Math.cos(i)-t[0]*Math.sin(i)]}function j(t,e){var n=function(e){e&&"touches"in e&&e.touches.length>1||t((function(t,n){n.trackMouse&&(document.addEventListener(l,a),document.addEventListener(d,r));var c="touches"in e?e.touches[0]:e,o=f([c.clientX,c.clientY],n.rotationAngle);return i({},t,s,{initial:[].concat(o),xy:o,start:e.timeStamp||0})}))},a=function(e){t((function(t,n){if("touches"in e&&e.touches.length>1)return t;var a="touches"in e?e.touches[0]:e,c=f([a.clientX,a.clientY],n.rotationAngle),o=c[0],r=c[1],s=o-t.xy[0],l=r-t.xy[1],d=Math.abs(s),u=Math.abs(l),v=(e.timeStamp||0)-t.start,h=Math.sqrt(d*d+u*u)/(v||1),j=[s/(v||1),l/(v||1)];if(d<n.delta&&u<n.delta&&!t.swiping)return t;var b=p(d,u,s,l),m={absX:d,absY:u,deltaX:s,deltaY:l,dir:b,event:e,first:t.first,initial:t.initial,velocity:h,vxvy:j};m.first&&n.onSwipeStart&&n.onSwipeStart(m),n.onSwiping&&n.onSwiping(m);var O=!1;return(n.onSwiping||n.onSwiped||"onSwiped"+b in n)&&(O=!0),O&&n.preventDefaultTouchmoveEvent&&n.trackTouch&&e.cancelable&&e.preventDefault(),i({},t,{first:!1,eventData:m,swiping:!0})}))},c=function(e){t((function(t,n){var a;if(t.swiping&&t.eventData){a=i({},t.eventData,{event:e}),n.onSwiped&&n.onSwiped(a);var c="onSwiped"+a.dir;c in n&&n[c](a)}else n.onTap&&n.onTap({event:e});return i({},t,s,{eventData:a})}))},o=function(){document.removeEventListener(l,a),document.removeEventListener(d,r)},r=function(t){o(),c(t)},j=function(t,e){var i=function(){};if(t&&t.addEventListener){var o=[[h,n],[v,a],[u,c]];o.forEach((function(i){var n=i[0],a=i[1];return t.addEventListener(n,a,{passive:e})})),i=function(){return o.forEach((function(e){var i=e[0],n=e[1];return t.removeEventListener(i,n)}))}}return i},b={ref:function(e){null!==e&&t((function(t,n){if(t.el===e)return t;var a={};return t.el&&t.el!==e&&t.cleanUpTouch&&(t.cleanUpTouch(),a.cleanUpTouch=void 0),n.trackTouch&&e&&(a.cleanUpTouch=j(e,!n.preventDefaultTouchmoveEvent)),i({},t,{el:e},a)}))}};return e.trackMouse&&(b.onMouseDown=n),[b,j]}function b(t,e,n){var a={};return!e.trackTouch&&t.cleanUpTouch?(t.cleanUpTouch(),a.cleanUpTouch=void 0):e.trackTouch&&!t.cleanUpTouch&&t.el&&(a.cleanUpTouch=n(t.el,!e.preventDefaultTouchmoveEvent)),i({},t,a)}function m(t){var n=t.trackMouse,a=e.useRef(i({},s)),c=e.useRef(i({},r));c.current=i({},r,t);var o=e.useMemo((function(){return j((function(t){return a.current=t(a.current,c.current)}),{trackMouse:n})}),[n]),l=o[0],d=o[1];return a.current=b(a.current,c.current,d),l}t.DOWN=o,t.LEFT=n,t.RIGHT=a,t.UP=c,t.useSwipeable=m}(e,i(2))},228:function(t,e,i){"use strict";i.r(e);var n=i(98),a=i(50),c=i(47),o=i(10),r=i(105),s=i(19),l=function(t){var e=t.width,i=t.statistic,n=window.innerWidth;e||(e=n>=769?480:n);var a=(n>=769?.9:1)*e/.885,c=42+o.n+a;return Object(s.jsxs)(r.a,{viewBox:"0 0 ".concat(e," ").concat(c),height:c,width:e,speed:2,backgroundColor:o.z[i].color,children:[Object(s.jsx)("circle",{cx:.4*e,cy:c/2,r:"5"}),Object(s.jsx)("circle",{cx:.5*e,cy:c/2,r:"5"}),Object(s.jsx)("circle",{cx:.6*e,cy:c/2,r:"5"})]})},d=i(135),u=i(101),v=i(24),h=i(95),p=i(92),f=i.n(p),j=i(91),b=i.n(j),m=i(2),O=i(288),g=i(116),x=function(t){var e=t.currentStatistic,i=t.isPerLakh,n=t.delta7Mode,a=t.mapStatistic,r=t.setMapStatistic,l=t.mapType,d=t.hideDistrictTestData,p=t.hideVaccinated,j=t.zoneColor,b=Object(O.a)().t,x=Object(g.a)(),T=Object(c.a)(x,2),y=T[0],D=T[1].width,S=Object(m.useRef)(),C=o.z[e],w=Object(m.useMemo)((function(){var t=o.B.filter((function(t){var e,i;return(l===o.q.COUNTRY||"tested"!==(null===(e=o.z[t])||void 0===e?void 0:e.category)||!d)&&("vaccinated"!==(null===(i=o.z[t])||void 0===i?void 0:i.category)||!p)}));return t.includes(e)?t:[e].concat(Object(u.a)(t))}),[e,l,d,p]),k=Object(m.useCallback)((function(t){r(t.target.value)}),[r]);return Object(m.useEffect)((function(){var t,e=document.createElement("select"),i=document.createElement("option");i.textContent=null===(t=o.z[a])||void 0===t?void 0:t.displayName,e.style.cssText+="\n      visibility: hidden;\n      position: fixed;\n      ",e.appendChild(i),S.current.after(e);var n=e.getBoundingClientRect().width;n>0&&(S.current.style.width="".concat(n+2,"px")),e.remove()}),[D,a]),Object(s.jsxs)("div",{className:"StatisticDropdown",ref:y,children:[Object(s.jsx)("div",{className:f()("triangle-icon"),children:Object(s.jsx)(h.A,{size:20})}),Object(s.jsx)("select",{ref:S,value:e,className:f()(e,j),style:j&&{color:j,backgroundColor:j+"20",outlineColor:j+"40"}||{},onChange:k,children:w.map((function(t){var e=o.z[t];return Object(s.jsx)("option",{value:t,children:b(Object(v.a)(null===e||void 0===e?void 0:e.displayName))},t)}))}),Object(s.jsx)("span",{children:"".concat(i&&!(null===C||void 0===C?void 0:C.nonLinear)&&"population"!==a?" ".concat(b("per lakh")):"").concat(n&&(null===C||void 0===C?void 0:C.showDelta)||(null===C||void 0===C?void 0:C.onlyDelta7)?" ".concat(b("in last 7 days")):"")})]})},T=function(t,e){return!!b()(t.currentStatistic,e.currentStatistic)&&(!!b()(t.isPerLakh,e.isPerLakh)&&(!!b()(t.delta7Mode,e.delta7Mode)&&(!!b()(t.mapStatistic,e.mapStatistic)&&(!!b()(t.mapType,e.mapType)&&(!!b()(t.hideDistrictTestData,e.hideDistrictTestData)&&(!!b()(t.hideVaccinated,e.hideVaccinated)&&!!b()(t.zoneColor,e.zoneColor)))))))},y=Object(m.memo)(x,T),D=i(99),S=i(106),C=i(5),w=i(97),k=i(136),N=i(282),M=i(198),E=Object(m.lazy)((function(){return Object(v.l)((function(){return Promise.all([i.e(1),i.e(13),i.e(42)]).then(i.bind(null,292))}))}));function L(t){var e,i,r,u,p=this,j=t.stateCode,b=void 0===j?"TT":j,g=t.data,x=t.mapView,T=void 0===x?o.r.DISTRICTS:x,L=t.setMapView,I=t.mapStatistic,R=t.setMapStatistic,U=t.regionHighlighted,z=t.setRegionHighlighted,P=t.noRegionHighlightedDistrictData,H=t.anchor,V=t.setAnchor,A=t.expandTable,q=void 0!==A&&A,B=t.lastDataDate,Y=t.hideDistrictData,F=void 0!==Y&&Y,X=t.hideDistrictTestData,_=void 0===X||X,W=t.hideVaccinated,J=void 0!==W&&W,G=t.noDistrictData,K=void 0!==G&&G,Q=Object(O.a)().t,Z=Object(m.useRef)(),$=Object(N.a)().width,tt=Object(M.a)("isPerLakhMap",!1),et=Object(c.a)(tt,2),it=et[0],nt=et[1],at=Object(M.a)("delta7ModeMap",!1),ct=Object(c.a)(at,2),ot=ct[0],rt=ct[1],st=o.o[b],lt=st.mapType===o.q.COUNTRY?g:Object(a.a)({},b,g[b]),dt=o.z[I],ut=T===o.r.DISTRICTS&&(st.mapType===o.q.STATE||!F&&!(_&&"tested"===(null===dt||void 0===dt?void 0:dt.category))),vt=Object(m.useMemo)((function(){var t,e,i=(U.districtName?null===(t=g[U.stateCode])||void 0===t||null===(e=t.districts)||void 0===e?void 0:e[U.districtName]:g[U.stateCode])||{};return Object(S.a)(i,(function(t){t.name=U.districtName||o.y[U.stateCode]}))}),[g,U.stateCode,U.districtName]),ht=Object(m.useCallback)((function(){var t=o.z[I];(null===t||void 0===t?void 0:t.nonLinear)||"population"===I||nt((function(t){return!t}))}),[I,nt]),pt=Object(m.useCallback)((function(){var t=T===o.r.DISTRICTS?o.r.STATES:o.r.DISTRICTS;t===o.r.STATES&&z({stateCode:U.stateCode,districtName:null}),L(t)}),[T,U.stateCode,L,z]),ft=Object(C.g)(),jt=Object(m.useRef)();Object(m.useEffect)((function(){"#MapExplorer"===ft.location.hash&&jt.current.scrollIntoView()}),[ft]);var bt=Object(m.useMemo)((function(){var t=[];return[0,0,0,0,0,0,0].map((function(e,i){return t.push({animationDelay:"".concat(250*i,"ms")}),null})),t}),[]),mt=Object(m.useCallback)((function(t){var e=o.z[I],i=(null===e||void 0===e?void 0:e.showDelta)&&ot||(null===e||void 0===e?void 0:e.onlyDelta7)?"delta7":"total";return Object(v.i)(t,i,I,{expiredDate:B,normalizedByPopulationPer:it&&"population"!=I?"lakh":null,canBeNaN:!0})}),[I,it,B,ot]),Ot=mt(vt);isNaN(Ot)&&(Ot="-");var gt=Object(w.useSpring)({total:Ot,config:Object(n.a)({tension:250},o.v)}),xt=Object(m.useMemo)((function(){return o.p.filter((function(t){var e;return!("vaccinated"===(null===(e=o.z[t])||void 0===e?void 0:e.category))||!J}))}),[J]),Tt=Object(m.useCallback)((function(t){var e=xt.indexOf(I),i=(xt.length+e+t)%xt.length;R(xt[i])}),[I,xt,R]),yt=Object(k.useSwipeable)({onSwipedLeft:Tt.bind(this,1),onSwipedRight:Tt.bind(this,-1)}),Dt=(null===dt||void 0===dt||null===(e=dt.mapConfig)||void 0===e?void 0:e.spike)?o.s.SPIKE:it||(null===dt||void 0===dt||null===(i=dt.mapConfig)||void 0===i?void 0:i.colorScale)||(null===dt||void 0===dt?void 0:dt.nonLinear)?o.s.CHOROPLETH:o.s.BUBBLE,St=Object(m.useCallback)((function(){(null===dt||void 0===dt?void 0:dt.showDelta)&&rt((function(t){return!t}))}),[dt,rt]),Ct="mapexplorer"===H||q&&$>=769,wt=Object(m.useCallback)((function(t){var e;return(null===dt||void 0===dt||null===(e=dt.mapConfig)||void 0===e?void 0:e.transformFn)?dt.mapConfig.transformFn(t):t}),[dt]),kt=(null===dt||void 0===dt||null===(r=dt.mapConfig)||void 0===r?void 0:r.colorScale)?dt.mapConfig.colorScale(wt(Ot)):"";return Object(s.jsxs)("div",{className:f()("MapExplorer",{stickied:Ct},{hidden:H&&"mapexplorer"!==H&&(!q||$<769)}),children:[Object(s.jsx)("div",{className:f()("anchor","fadeInUp",{stickied:Ct}),style:{display:$<769||$>=769&&q?"none":""},onClick:V&&V.bind(this,"mapexplorer"===H?null:"mapexplorer"),children:Object(s.jsx)(h.s,{})}),Object(s.jsxs)("div",{className:"panel",ref:jt,children:[Object(s.jsxs)("div",{className:"panel-left fadeInUp",style:bt[0],children:[Object(s.jsxs)("h2",{className:f()(I),style:{color:kt||(null===dt||void 0===dt?void 0:dt.color)},children:[Q(vt.name),vt.name===o.H&&" [".concat(Q(o.y[U.stateCode]),"]")]}),U.stateCode&&Object(s.jsxs)("h1",{className:f()("district",I),style:{color:kt||(null===dt||void 0===dt?void 0:dt.color)},children:[Object(s.jsx)(w.animated.div,{children:gt.total.to((function(t){return P&&(null===dt||void 0===dt?void 0:dt.hasPrimary)?"-":Object(v.f)(t,dt.format,I)}))}),Object(s.jsx)(y,{currentStatistic:I,statistics:xt,mapType:st.mapType,isPerLakh:it,delta7Mode:ot,mapStatistic:I,setMapStatistic:R,hideDistrictTestData:_,hideVaccinated:J,zoneColor:kt})]})]}),Object(s.jsxs)("div",{className:f()("panel-right","is-".concat(I)),children:[Object(s.jsxs)("div",{className:"switch-type",children:[Object(s.jsx)(D.a,{message:"Last 7 day values",hold:!0,children:Object(s.jsx)("div",{className:f()("toggle","fadeInUp",{"is-highlighted":ot&&(null===dt||void 0===dt?void 0:dt.showDelta)||(null===dt||void 0===dt?void 0:dt.onlyDelta7),disabled:!(null===dt||void 0===dt?void 0:dt.showDelta)}),onClick:St,style:bt[1],children:Object(s.jsx)(d.a,{})})}),Object(s.jsx)(D.a,{message:"Per lakh people",hold:!0,children:Object(s.jsx)("div",{className:f()("toggle","fadeInUp",{"is-highlighted":!(null===dt||void 0===dt?void 0:dt.nonLinear)&&Dt===o.s.CHOROPLETH,disabled:(null===dt||void 0===dt?void 0:dt.nonLinear)||"population"===I}),onClick:ht,style:bt[2],children:Object(s.jsx)(d.c,{})})}),st.mapType===o.q.COUNTRY&&Object(s.jsx)(D.a,{message:"Toggle between states/districts",hold:!0,children:Object(s.jsx)("div",{className:f()("toggle","boundary fadeInUp",{"is-highlighted":ut,disabled:F||"tested"===(null===dt||void 0===dt?void 0:dt.category)&&_}),onClick:pt,style:bt[3],children:Object(s.jsx)(h.q,{})})}),st.mapType===o.q.STATE&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"divider"}),Object(s.jsx)("div",{className:"toggle back fadeInUp",onClick:function(){ft.push("/#MapExplorer")},style:bt[4],children:Object(s.jsx)(h.b,{})})]})]}),Object(s.jsx)("div",{className:"switch-statistic fadeInUp",style:bt[5],children:xt.map((function(t){return Object(s.jsx)("div",{className:f()("toggle","statistic-option","is-".concat(t),{"is-highlighted":I===t}),onClick:R.bind(p,t),children:Object(s.jsx)(h.j,{})},t)}))})]})]}),Object(s.jsx)("div",Object(n.a)(Object(n.a)({ref:Z,className:"fadeInUp",style:bt[3]},yt),{},{children:I&&Object(s.jsx)(m.Suspense,{fallback:Object(s.jsx)(l,{className:"map-loader",width:null===(u=Z.current)||void 0===u?void 0:u.clientWidth,statistic:I}),children:Object(s.jsx)(E,{data:lt,statistic:I,mapCode:b,isDistrictView:ut,mapViz:Dt,regionHighlighted:U,setRegionHighlighted:z,getMapStatistic:mt,transformStatistic:wt,noDistrictData:K})})}))]})}var I=function(t,e){var i,n,a,c,o,r,s,l,d,u;return!!b()(t.stateCode,e.stateCode)&&(!!b()(t.regionHighlighted,e.regionHighlighted)&&(!!b()(t.mapView,e.mapView)&&(!!b()(t.mapStatistic,e.mapStatistic)&&(!!b()(t.anchor,e.anchor)&&(!!b()(t.expandTable,e.expandTable)&&(!!b()(t.hideDistrictData,e.hideDistrictData)&&(!!b()(t.hideDistrictTestData,e.hideDistrictTestData)&&(!!b()(t.hideVaccinated,e.hideVaccinated)&&(!!b()(t.lastDataDate,e.lastDataDate)&&(!!b()(null===(i=t.data)||void 0===i||null===(n=i.TT)||void 0===n||null===(a=n.meta)||void 0===a?void 0:a.last_updated,null===(c=e.data)||void 0===c||null===(o=c.TT)||void 0===o||null===(r=o.meta)||void 0===r?void 0:r.last_updated)&&(!!b()(null===(s=t.data)||void 0===s||null===(l=s.TT)||void 0===l?void 0:l.total,null===(d=e.data)||void 0===d||null===(u=d.TT)||void 0===u?void 0:u.total)&&(!!b()(t.noRegionHighlightedDistrictData,e.noRegionHighlightedDistrictData)&&!!b()(t.noDistrictData,e.noDistrictData)))))))))))))};e.default=Object(m.memo)(L,I)},91:function(t,e,i){"use strict";t.exports=function t(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var n,a,c;if(Array.isArray(e)){if((n=e.length)!=i.length)return!1;for(a=n;0!==a--;)if(!t(e[a],i[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((n=(c=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(a=n;0!==a--;)if(!Object.prototype.hasOwnProperty.call(i,c[a]))return!1;for(a=n;0!==a--;){var o=c[a];if(!t(e[o],i[o]))return!1}return!0}return e!==e&&i!==i}},99:function(t,e,i){"use strict";var n=i(98),a=i(128),c=i(2),o=(i(118),i(119),i(19));e.a=function(t){var e=t.children,i=t.message,r=t.hold,s=void 0!==r&&r,l=t.childProps,d=void 0===l?{}:l,u=Object(c.useCallback)((function(t){return t.stopPropagation()}),[]);return Object(o.jsx)(a.a,{className:"Tooltip",content:"string"===typeof i?Object(o.jsx)("p",{className:"message",dangerouslySetInnerHTML:{__html:i.trim().split("\n").map((function(t){return"<div>".concat(t,"</div>")})).join("")}}):i,arrow:!1,animation:"shift-away",touch:!s||["hold",300],children:Object(o.jsx)("div",Object(n.a)(Object(n.a)({onClick:u},d),{},{children:e}))})}}}]);
//# sourceMappingURL=5.dbe9aa82.chunk.js.map