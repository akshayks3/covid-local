(this.webpackJsonpcovid19india1=this.webpackJsonpcovid19india1||[]).push([[42],{292:function(t,e,r){"use strict";r.r(e);var n=r(101),i=r(112),a=r.n(i),c=r(149),o=r(47),s=r(10),l=r(24),u=r(213),d=r(295),f=r(145),p=r(276),j=r(259),b=r(280),m=r(253),v=r(143),O=r(212),h=r(70),g=r(255),x=r(103),k=r(2),y=r(288),w=r(116),C=r(19);var E=function(t){t.data;var e=t.statistic,r=t.mapViz,n=t.mapScale,i=Object(y.a)().t,a=Object(k.useRef)(null),c=Object(k.useRef)(null),E=Object(w.a)(),N=Object(o.a)(E,2),T=N[0],R=N[1].width;return Object(k.useEffect)((function(){var t=Object(x.b)().duration(s.d);if(r!==s.s.CHOROPLETH){var e=Object(g.a)(c.current);e.select(".ramp").transition(t).attr("opacity",0).attr("display","none").attr("xlink:href",null),e.select(".bars").selectAll("rect").transition(t).attr("opacity",0).remove(),e.selectAll(".axis > *:not(.axistext)").remove(),e.select(".axistext").text("")}if(r!==s.s.BUBBLE){var n=Object(g.a)(a.current);n.select(".circles").selectAll("circle").transition(t).attr("r",0).attr("cy",0).remove(),n.selectAll(".circle-axis > *").remove()}if(r!==s.s.SPIKES){var i=Object(g.a)(a.current);i.select(".spikes").call((function(e){return e.selectAll("path").transition(t).attr("d",Object(l.m)(0)).remove()})).call((function(t){return t.selectAll("text").remove()})).transition(t).selectAll("g").remove(),i.selectAll(".spike-axis > *").remove()}}),[r]),Object(k.useEffect)((function(){if(R){var t=s.z[e],x=R/s.m[0];if(r===s.s.BUBBLE){var k=Object(g.a)(a.current),y=n.domain(),w=Object(o.a)(y,2)[1],C=k.select(".circles").attr("transform","translate(48,40)").attr("text-anchor","middle"),E=[.1,.4,1].map((function(t){return t*w}));C.selectAll("circle").data(E).join("circle").attr("fill","none").attr("stroke",t.color+"70").transition(i).attr("cy",(function(t){return-n(t)})).attr("r",(function(t){return n(t)}));var N=n.copy().range([0,-2*n(w)]);k.select(".circle-axis").attr("transform","translate(48,50)").transition(i).call(Object(f.b)(N).tickSize(0).tickPadding(0).tickValues(E).tickFormat((function(e){return Object(l.f)(e,"long"===t.format?"short":t.format)}))).selectAll(".tick text").style("text-anchor","middle").attr("font-size",10/x),k.select(".circle-axis").call((function(t){return t.select(".domain").remove()}))}else if(r===s.s.SPIKE){var T=Object(g.a)(a.current),H=n.ticks(3).slice(1).reverse(),S=28/x;T.select(".spikes").attr("transform","translate(32,24)").selectAll("g").data(H).join((function(t){return t.append("g").call((function(t){return t.append("path").attr("fill-opacity",.3).attr("d",(function(t){return Object(l.m)(0)}))}))})).attr("transform",(function(t,e){return"translate(".concat(e*S,",0)")})).call((function(e){return e.select("path").transition(i).attr("d",(function(t){return Object(l.m)(n(t))})).attr("fill",t.color+"70").attr("stroke",t.color+"70")}));var M=n.copy().range([S*H.length,0]);T.select(".spike-axis").attr("transform","translate(32,32)").transition(i).call(Object(f.a)(M).tickSize(0).tickPadding(0).tickValues(H).tickFormat((function(e){return Object(l.f)(e,"long"===t.format?"short":t.format)}))).selectAll(".tick text").style("text-anchor","middle").attr("font-size",10/x),T.select(".spike-axis").call((function(t){return t.select(".domain").remove()}))}else{var P,B=Object(g.a)(c.current);B.call((function(){return function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.svg,n=e.color,i=e.title,a=e.tickSize,c=void 0===a?6:a,o=e.width,l=void 0===o?320:o,g=e.height,x=void 0===g?44+c:g,k=e.marginTop,y=void 0===k?18:k,w=e.marginRight,C=void 0===w?0:w,E=e.marginBottom,N=void 0===E?16+c:E,T=e.marginLeft,R=void 0===T?0:T,H=e.ticks,S=void 0===H?l/64:H,M=e.tickFormat,P=e.tickValues,B=e.ordinalWeights,L=r.transition().duration(s.d),_=function(t){t.selectAll(".tick line").attr("y1",y+N-x)};if(n.interpolate){var z=Math.min(n.domain().length,n.range().length);t=n.copy().rangeRound(Object(j.a)(Object(b.a)(R,l-C),z)),r.select(".ramp").attr("x",R).attr("y",y).attr("width",l-R-C).attr("height",x-y-N).attr("xlink:href",A(n.copy().domain(Object(j.a)(Object(b.a)(0,1),z))).toDataURL())}else if(n.interpolator){if(r.select(".bars").selectAll("rect").transition(L).attr("opacity",0).remove(),t=Object.assign(n.copy().interpolator(Object(m.a)(R,l-C)),{range:function(){return[R,l-C]}}),r.select(".ramp").attr("x",R).attr("y",y).attr("width",l-R-C).attr("height",x-y-N).attr("xlink:href",A(n.interpolator()).toDataURL()).attr("display","visible").transition(L).attr("opacity",1),!t.ticks){if(void 0===P){var q=Math.round(S+1);P=Object(u.a)(q).map((function(t){return Object(d.a)(n.domain(),t/(q-1))}))}"function"!==typeof M&&(M=Object(p.a)(void 0===M?",f":M))}}else if(n.invertExtent){var F=n.thresholds?n.thresholds():n.quantiles?n.quantiles():n.domain(),I=void 0===M?function(t){return t}:"string"===typeof M?Object(p.a)(M):M;t=Object(v.a)().domain([-1,n.range().length-1]).rangeRound([R,l-C]),r.append("g").selectAll("rect").data(n.range()).join("rect").attr("x",(function(e,r){return t(r-1)})).attr("y",y).attr("width",(function(e,r){return t(r)-t(r-1)})).attr("height",x-y-N).attr("fill",(function(t){return t})),P=Object(u.a)(-1,F.length),M=function(t){return-1===t?I(1):t!==F.length-1?t===F.length-2?I(F[t]+"+",t):I(F[t],t):void 0}}else{if(r.select(".ramp").transition(L).attr("opacity",0).attr("xlink:href",null),B){var U=Object(v.a)().domain([0,B.reduce((function(t,e){return t+e}))]).rangeRound([0,l-R-C]),V=B.map((function(t,e){return B.slice(0,e).reduce((function(t,e){return t+U(e)}),R)}));t=Object(h.a)().domain(n.domain()).range(V),r.select(".bars").selectAll("rect").data(n.domain()).join((function(e){return e.append("rect").attr("x",t).attr("width",(function(t,e){return U(B[e])}))})).attr("y",y).attr("height",x-y-N).attr("fill",n).transition(L).attr("x",t).attr("width",(function(t,e){return U(B[e])})).attr("opacity",1)}else t=Object(O.a)().domain(n.domain().filter((function(t){return t}))).rangeRound([R,l-C]),r.select(".bars").selectAll("rect").data(n.domain().filter((function(t){return t}))).join("rect").attr("x",t).attr("y",y).attr("width",Math.max(0,t.bandwidth()-1)).attr("height",x-y-N).attr("fill",n);_=function(){}}return r.select(".axis").attr("transform","translate(0,".concat(x-N,")")).transition(L).attr("class","axis").call(Object(f.a)(t).ticks(S,"string"===typeof M?M:void 0).tickFormat("function"===typeof M?M:void 0).tickSize(c).tickValues(P)).on("start",(function(){r.call(_).call((function(t){return t.select(".domain").remove()}))})).call((function(t){return t.select(".axistext").attr("class","axistext").attr("x",R).attr("y",y+N-x-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").text(i)})),r.node()}({svg:B,color:n,width:R,height:s.n,ticks:5,tickFormat:function(e,n,i){var a;return(null===t||void 0===t||null===(a=t.mapConfig)||void 0===a?void 0:a.colorScale)?e:r!==s.s.CHOROPLETH||Number.isInteger(e)?n===i.length-1?Object(l.f)(e,t.format)+"+":Object(l.f)(e,t.format):""},marginLeft:2,marginRight:0})})),B.attr("class",(null===t||void 0===t||null===(P=t.mapConfig)||void 0===P?void 0:P.colorScale)?"zone":"")}}}),[i,R,e,n,r]),Object(C.jsxs)("div",{className:"svg-parent maplegend",ref:T,style:{height:2*s.n},children:[Object(C.jsxs)("svg",{id:"legend",preserveAspectRatio:"xMinYMid meet",ref:a,viewBox:"0 0 ".concat(s.m[0]," ").concat(s.n),children:[Object(C.jsx)("g",{className:"circles"}),Object(C.jsx)("g",{className:"spikes"}),Object(C.jsx)("g",{className:"circle-axis"}),Object(C.jsx)("g",{className:"spike-axis"}),Object(C.jsx)("g",{className:"axis",children:Object(C.jsx)("text",{className:"axistext"})})]}),Object(C.jsxs)("svg",{id:"legend-choro",preserveAspectRatio:"xMinYMid meet",ref:c,children:[Object(C.jsx)("image",{className:"ramp",preserveAspectRatio:"none"}),Object(C.jsx)("g",{className:"bars"}),Object(C.jsx)("g",{className:"axis",children:Object(C.jsx)("text",{className:"axistext"})})]}),Object(C.jsx)("canvas",{className:"color-scale",style:{position:"absolute",height:0}})]})};function A(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,r=Object(g.a)(".color-scale").node(),n=(r.width=e,r.height=1,r).getContext("2d"),i=0;i<e;++i)n.fillStyle=t(i/(e-1)),n.fillRect(i,0,1,1);return r}var N=r(95),T=r(92),R=r.n(T),H=r(122),S=r(267),M=r(278),P=r(277),B=r(217),L=r(293),_=r(260),z=r(261),q=r(262),F=r(263),I=r(264),U=r(265),V=r(266),D=r(5),K=r(110),Y=r(225);e.default=function(t){var e,r=this,i=t.mapCode,o=t.isDistrictView,u=t.mapViz,d=t.data,f=t.regionHighlighted,p=t.setRegionHighlighted,j=t.statistic,b=t.getMapStatistic,m=t.transformStatistic,O=t.noDistrictData,h=Object(y.a)().t,w=Object(k.useRef)(null),A=s.o[i],T=Object(D.g)(),W=Object(K.a)(A.geoDataFile,function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(S.a)(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{suspense:!1,revalidateOnFocus:!1}).data,J=Object(k.useMemo)((function(){return b(d[i])}),[d,i,b]),G=s.z[j],Q=Object(k.useCallback)((function(t){return((null===G||void 0===G?void 0:G.color)||"#343a40")+t}),[G]),X=Object(k.useMemo)((function(){return W?(o?A.mapType===s.q.COUNTRY&&u!==s.s.CHOROPLETH?[].concat(Object(n.a)(Object(Y.a)(W,W.objects.states).features),Object(n.a)(Object(Y.a)(W,W.objects.districts).features)):Object(Y.a)(W,W.objects.districts).features:Object(Y.a)(W,W.objects.states).features).map((function(t){var e=t.properties.district,r=t.properties.st_nm,n=Object.assign({},t);return n.id="".concat(i,"-").concat(r).concat(e?"-"+e:""),n})):null}),[W,i,o,u,A]),Z=Object(k.useMemo)((function(){return W&&o?Object(Y.a)(W,W.objects.districts).features.reduce((function(t,e){var r=s.w[e.properties.st_nm];return t[r]||(t[r]=new Set),t[r].add(e.properties.district),t}),{}):{}}),[W,o]),$=Object(k.useMemo)((function(){var t=Object.keys(d).filter((function(t){return"TT"!==t&&Object.keys(s.o).includes(t)}));if(o){var e=t.reduce((function(t,e){var r,i=Object.keys((null===(r=d[e])||void 0===r?void 0:r.districts)||[]).filter((function(t){return((null===Z||void 0===Z?void 0:Z[e])||new Set).has(t)||u!==s.s.CHOROPLETH&&t===s.H}));return t.push.apply(t,Object(n.a)(i.map((function(t){return m(b(d[e].districts[t]))})))),t}),[]);return Object(H.a)(e)}return Object(H.a)(t,(function(t){return m(b(d[t]))}))}),[d,o,b,u,Z,m]),tt=Object(k.useMemo)((function(){var t,e;return u===s.s.BUBBLE?Object(B.b)([0,Math.max(1,$||0)],[0,40]).clamp(!0).nice(3):u===s.s.SPIKE?Object(v.a)([0,Math.max(1,$||0)],[0,80]).clamp(!0).nice(3):(null===(t=s.z[j])||void 0===t||null===(e=t.mapConfig)||void 0===e?void 0:e.colorScale)?s.z[j].mapConfig.colorScale:Object(L.a)([0,Math.max(1,$||0)],function(t){var e;return"confirmed"===t?function(t){return Object(_.a)(.85*t)}:"active"===t?function(t){return Object(z.a)(.85*t)}:"recovered"===t?function(t){return Object(q.a)(.85*t)}:"deceased"===t?function(t){return Object(F.a)(.85*t)}:"tested"===t?function(t){return Object(I.a)(.85*t)}:"tpr"===t||"cfr"===t||"other"===t?function(t){return Object(U.a)(.85*t)}:"vaccinated"===(null===(e=s.z[t])||void 0===e?void 0:e.category)?function(t){return Object(V.a)(.15+.35*(1-t))}:function(t){return Object(U.a)(.85*t)}}(j)).clamp(!0)}),[u,j,$]),et=Object(k.useCallback)((function(t){if(u===s.s.CHOROPLETH){var e,r=s.w[t.properties.st_nm],n=t.properties.district,i=d[r],a=null===i||void 0===i||null===(e=i.districts)||void 0===e?void 0:e[n],c=m(b(n?a:i));return c?tt(c):"#ffffff00"}}),[u,d,tt,b,m]),rt=Object(k.useCallback)((function(t){t.select("title").text((function(t){if(u!==s.s.CHOROPLETH&&!(null===G||void 0===G?void 0:G.nonLinear)){var e,r,n=t.properties.st_nm,i=s.w[n],a=t.properties.district,c=d[i],o=null===c||void 0===c||null===(e=c.districts)||void 0===e?void 0:e[a];return r=b(a?o:c),"".concat(Object(l.f)(r/(J||.001)*100,"%")," from ").concat(Object(l.n)(a||n))}}))}),[u,d,b,J,G]),nt=Object(k.useRef)(null);Object(k.useEffect)((function(){Object(g.a)(w.current).attr("pointer-events","auto").on("click",(function(){nt.current=null,p({stateCode:i,districtName:null})}))}),[i,p]);var it=Object(k.useMemo)((function(){return W?Object(M.a)(Object(P.a)()):null}),[W]);Object(k.useEffect)((function(){if(W){var t=Object(g.a)(w.current),e=Object(x.b)().duration(s.d);t.select(".regions").selectAll("path").data(u===s.s.CHOROPLETH?X:[],(function(t){return t.id})).join((function(t){return t.append("path").attr("d",it).attr("stroke-width",1.8).attr("stroke-opacity",0).style("cursor","pointer").on("mouseenter",(function(t,e){nt.current||p({stateCode:s.w[e.properties.st_nm],districtName:e.properties.district})})).on("pointerdown",(function(t,e){nt.current===e?nt.current=null:nt.current=e,p({stateCode:s.w[e.properties.st_nm],districtName:e.properties.district})})).attr("fill","#fff0").attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").attr("fill","#fff0").remove()})).attr("pointer-events","all").on("click",(function(e,r){var n;e.stopPropagation();var i=s.w[r.properties.st_nm];!nt.current&&A.mapType!==s.q.STATE&&(null===(n=d[i])||void 0===n?void 0:n.districts)&&(t.attr("pointer-events","none"),t.select(".regions").selectAll("path").attr("pointer-events","none"),T.push("/state/".concat(i).concat(window.innerWidth<769?"#MapExplorer":"")))})).call((function(t){t.transition(e).attr("fill",et).attr("stroke",Q.bind(r,""))}))}}),[u,d,X,et,W,T,A.mapType,it,p,Q]);var at=Object(k.useMemo)((function(){return u===s.s.CHOROPLETH?[]:(X||[]).map((function(t){var e=s.w[t.properties.st_nm],r=t.properties.district,n=d[e];if(o){var i,a,c=null===n||void 0===n||null===(i=n.districts)||void 0===i?void 0:i[r];t.value=b(r?c:null===n||void 0===n||null===(a=n.districts)||void 0===a?void 0:a[s.H])}else t.value=b(n);return t})).filter((function(t){return t.value>0})).sort((function(t,e){return e.value-e.value}))}),[u,o,b,X,d]);return Object(k.useEffect)((function(){var t=Object(g.a)(w.current),e=Object(x.b)().duration(s.d),r=t.select(".circles").selectAll("circle").data(u===s.s.BUBBLE?at:[],(function(t){return t.id})).join((function(t){return t.append("circle").attr("transform",(function(t){return"translate(".concat(it.centroid(t),")")})).attr("fill-opacity",.25).style("cursor","pointer").attr("pointer-events","all").call((function(t){t.append("title")}))}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(e).attr("r",0).remove()}))})).on("mouseenter",(function(t,e){nt.current||p({stateCode:s.w[e.properties.st_nm],districtName:o?e.properties.district||s.H:null})})).on("pointerdown",(function(t,e){nt.current===e?nt.current=null:nt.current=e,p({stateCode:s.w[e.properties.st_nm],districtName:o?e.properties.district||s.H:null})})).on("click",(function(t,e){t.stopPropagation(),nt.current||A.mapType===s.q.STATE||T.push("/state/".concat(s.w[e.properties.st_nm]).concat(window.innerWidth<769?"#MapExplorer":""))})).call((function(t){t.transition(e).attr("fill",G.color+"70").attr("stroke",G.color+"70").attr("r",(function(t){return tt(t.value)}))}));window.requestIdleCallback((function(){rt(r)}))}),[A.mapType,u,o,at,T,tt,it,p,rt,G,b]),Object(k.useEffect)((function(){var t=Object(g.a)(w.current),e=Object(x.b)().duration(s.d),r=t.select(".spikes").selectAll("path").data(u===s.s.SPIKE?at:[],(function(t){return t.id}),(function(t){return t.id})).join((function(t){return t.append("path").attr("transform",(function(t){return"translate(".concat(it.centroid(t),")")})).attr("opacity",0).attr("fill-opacity",.25).style("cursor","pointer").attr("pointer-events","all").attr("d",Object(l.m)(0)).call((function(t){t.append("title")}))}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(e).attr("opacity",0).attr("d",Object(l.m)(0)).remove()}))})).on("mouseenter",(function(t,e){nt.current||p({stateCode:s.w[e.properties.st_nm],districtName:o?e.properties.district||s.H:null})})).on("pointerdown",(function(t,e){nt.current===e?nt.current=null:nt.current=e,p({stateCode:s.w[e.properties.st_nm],districtName:o?e.properties.district||s.H:null})})).on("click",(function(t,e){t.stopPropagation(),nt.current||A.mapType===s.q.STATE||T.push("/state/".concat(s.w[e.properties.st_nm]).concat(window.innerWidth<769?"#MapExplorer":""))})).call((function(t){t.transition(e).attr("opacity",1).attr("fill",G.color+"70").attr("stroke",G.color+"70").attr("d",(function(t){return Object(l.m)(tt(t.value))}))}));window.requestIdleCallback((function(){rt(r)}))}),[A.mapType,u,o,at,T,tt,it,p,rt,G,b]),Object(k.useEffect)((function(){if(W){var t=Object(g.a)(w.current),e=Object(x.b)().duration(s.d),n=[],a=[];A.mapType===s.q.COUNTRY&&((n=[Object(Y.b)(W,W.objects.states)])[0].id="".concat(i,"-states")),(A.mapType===s.q.STATE||o&&u===s.s.CHOROPLETH)&&((a=[Object(Y.b)(W,W.objects.districts)])[0].id="".concat(i,"-districts")),t.select(".state-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(n,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",it).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",Q.bind(r,"40")),t.select(".district-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(a,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",it).attr("d",it).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",Q.bind(r,"40"))}}),[W,A,i,u,o,j,it,Q]),Object(k.useEffect)((function(){var t=f.stateCode,e=s.y[t],r=f.districtName,n=Object(g.a)(w.current);u===s.s.BUBBLE?n.select(".circles").selectAll("circle").attr("fill-opacity",(function(n){var a;return e===n.properties.st_nm&&(!r&&t!==i||r===(null===(a=n.properties)||void 0===a?void 0:a.district)||!o||r===s.H&&!n.properties.district)?1:.25})):u===s.s.SPIKE?n.select(".spikes").selectAll("path").attr("fill-opacity",(function(n){var a;return e===n.properties.st_nm&&(!r&&t!==i||r===(null===(a=n.properties)||void 0===a?void 0:a.district)||!o||r===s.H&&!n.properties.district)?1:.25})):n.select(".regions").selectAll("path").each((function(n){var a,c=e===n.properties.st_nm&&(!r&&t!==i||r===(null===(a=n.properties)||void 0===a?void 0:a.district)||!o);c&&this.parentNode.appendChild(this),Object(g.a)(this).attr("stroke-opacity",c?1:0)}))}),[W,d,i,o,u,f.stateCode,f.districtName,j]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"svg-parent",children:[Object(C.jsxs)("svg",{id:"chart",className:R()({zone:!!(null===G||void 0===G||null===(e=G.mapConfig)||void 0===e?void 0:e.colorScale)}),viewBox:"0 0 ".concat(s.m[0]," ").concat(s.m[1]),preserveAspectRatio:"xMidYMid meet",ref:w,children:[Object(C.jsx)("g",{className:"regions"}),Object(C.jsx)("g",{className:"state-borders"}),Object(C.jsx)("g",{className:"district-borders"}),Object(C.jsx)("g",{className:"circles"}),Object(C.jsx)("g",{className:"spikes"})]}),O&&(null===G||void 0===G?void 0:G.hasPrimary)&&Object(C.jsxs)("div",{className:R()("disclaimer","is-".concat(j)),children:[Object(C.jsx)(N.a,{}),Object(C.jsx)("span",{children:h("District-wise data not available in state bulletin")})]})]}),tt&&Object(C.jsx)(E,{data:d,statistic:j,mapViz:u,mapScale:tt}),Object(C.jsx)("svg",{style:{position:"absolute",height:0},children:Object(C.jsx)("defs",{children:Object(C.jsx)("filter",{id:"balance-color",colorInterpolationFilters:"sRGB",children:Object(C.jsx)("feColorMatrix",{type:"matrix",values:"0.91372549  0           0            0  0.08627451\r 0           0.91372549  0            0  0.08627451\r 0           0           0.854901961  0  0.145098039\r 0           0           0            1  0"})})})})]})}}}]);
//# sourceMappingURL=42.3984bcaa.chunk.js.map