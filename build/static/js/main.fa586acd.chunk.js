(this["webpackJsonpcovid-tracker-app"]=this["webpackJsonpcovid-tracker-app"]||[]).push([[0],{104:function(e,t,a){},108:function(e,t,a){},112:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(17),r=a.n(c),s=(a(103),a(104),a(13)),l=a(227),i=a(31),d=(a(108),a(20)),u=function(e,t){try{t=Math.pow(10,t);for(var a=["K","M","B","T"],n=a.length-1;n>=0;n--){var o=Math.pow(10,3*(n+1));if(o<=e){1e3===(e=Math.round(e*t/o)/t)&&n<a.length-1&&(e=1,n++),e+=a[n];break}}return e}catch(c){return e}},v=function(e){try{var t=e?new Date(e):new Date;return new Intl.DateTimeFormat("en",{day:"numeric",month:"short",year:"2-digit"}).format(t)}catch(a){return new Date}},y=a(8),j=a(10),h=function(e){try{var t={countryData:[],covidDataByCountry:{}};if(e&&Array.isArray(e)&&e.length>0){var a,n=Object(y.a)(e);try{for(n.s();!(a=n.n()).done;){var o=a.value,c=o.country,r=o.countryInfo,s=o.cases,l=void 0===s?0:s;if(c&&(null===r||void 0===r?void 0:r.iso2)){var i={name:c,code:r.iso2,iso3:null===r||void 0===r?void 0:r.iso3,flag:null===r||void 0===r?void 0:r.flag,lat:null===r||void 0===r?void 0:r.lat,long:null===r||void 0===r?void 0:r.long,_id:null===r||void 0===r?void 0:r._id,totalCases:l};t.countryData.push(i),t.covidDataByCountry[r.iso2]=o}}}catch(d){n.e(d)}finally{n.f()}}return t}catch(u){throw u}},b=a(225),f=a(226),p=a(96),g=function(e){return function(t){try{t({type:"covid-set-data-by-country",payload:e})}catch(a){t({type:"covid-set-data-by-country-error",payload:a})}}},O=a(28),x=a.n(O),m=a(44),C="https://disease.sh/v3/covid-19/",w="AIzaSyAIgW1Wb_j4lBrYhNwFG9Whgwz7am4oqm0",D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var t=Object(m.a)(x.a.mark((function t(a){var n,o,c,r,s,l;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"counties-set-loading",payload:!0}),n="".concat(C,"countries"),t.next=6,fetch(n);case 6:return o=t.sent,t.next=9,o.json();case 9:c=t.sent,r=h(c),s=r.countryData,l=r.covidDataByCountry,a({type:"counties-fetch",payload:s}),e&&e(l),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),a({type:"counties-set-error",payload:t.t0});case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(t){try{t({type:"counties-set-selected-country",payload:e})}catch(a){throw a}}},k=a(2);var B=function(e){var t=e.lastUpdated,a=Object(n.useState)(""),o=Object(i.a)(a,2),c=o[0],r=o[1],l=Object(s.c)((function(e){return e.countries})),u=l.selectedCountry,j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];try{var a=[];if(e.length<=0)return t;var n,o=Object(y.a)(t);try{for(o.s();!(n=o.n()).done;){var c=n.value;c.name.toLowerCase().indexOf(e.toLowerCase())>=0&&a.push(c)}}catch(r){o.e(r)}finally{o.f()}return a}catch(s){throw s}}(c,l.allCountries),h=Object(s.b)(),O=Object(d.b)({countriesFetch:D,countriesSelectCountry:N,covidSetDataByCountry:g},h);return Object(n.useEffect)((function(){O.countriesFetch(O.covidSetDataByCountry)}),[]),console.log("Header loaded"),Object(k.jsxs)("div",{className:"header-container d-flex flex-row justify-content-between align-items-center ",children:[Object(k.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center",children:[Object(k.jsxs)(b.a,{as:f.a,variant:"info",title:(null===u||void 0===u?void 0:u.name)?u.name:"Select a Country!",children:[Object(k.jsx)("div",{className:"input-group",children:Object(k.jsx)("input",{type:"text",className:"form-control country-search",placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",value:c,onChange:function(e){r(e.target.value)}})}),j&&j.map((function(e){return Object(k.jsx)(p.a.Item,{className:"fs-6",eventKey:e.code,onSelect:function(t){O.countriesSelectCountry(e)},children:e.name},e._id)}))]}),Object(k.jsxs)("span",{className:"fs-7 ml-1",children:["Last Updated - ",v(t)]})]}),Object(k.jsx)("h2",{className:"heading",children:"Covid-19 Tracker"})]})},S=a(33),T=function(){var e,t,a,o,c=Object(n.useState)(null),r=Object(i.a)(c,2),l=r[0],d=r[1],v=Object(n.useState)(null),y=Object(i.a)(v,2),j=y[0],h=y[1],b=Object(s.c)((function(e){return e.countries})).selectedCountry,f=Object(s.c)((function(e){return e.covid})).dataByCountry,p=(null===b||void 0===b?void 0:b.code)&&f[null===b||void 0===b?void 0:b.code]?{searched:f[b.code]}:f,g={lat:(null===p||void 0===p||null===(e=p.searched)||void 0===e||null===(t=e.countryInfo)||void 0===t?void 0:t.lat)||20,lng:(null===p||void 0===p||null===(a=p.searched)||void 0===a||null===(o=a.countryInfo)||void 0===o?void 0:o.long)||77};return Object.values(p).length>0?Object(k.jsx)(S.c,{googleMapsApiKey:w,children:Object(k.jsxs)(S.a,{mapContainerStyle:{width:"100%",height:"400px"},center:g,zoom:3,onLoad:function(e){h(e)},children:[Object(k.jsx)(S.b,{position:g,onLoad:function(e){d(e),e.close()},children:Object(k.jsx)("div",{children:"loading..."})}),Object.values(p).length>0&&Object.values(p).map((function(e){var t=e.countryInfo,a=e.todayCases,n=e.active,o=e.recovered,c=e.todayRecovered,r=e.deaths,s=e.todayDeaths;return(null===t||void 0===t?void 0:t.lat)&&(null===t||void 0===t?void 0:t.long)?Object(k.jsx)(S.d,{position:{lat:t.lat,lng:t.long},animation:"DROP",visible:!0,onClick:function(e){!function(e,t){t.countryInfo;var a=t.todayCases,n=t.active,o=t.recovered,c=t.todayRecovered,r=t.deaths,s=t.todayDeaths;try{l.setOptions({content:'<div class="d-flex flex-column">\n                <span>Today Cases Added - '.concat(u(a,2),"</span>\n                <span>Total Active Cases - ").concat(u(n,2),"</span>\n                <span>Today Recovered - ").concat(u(c,2),"</span>\n                <span>Total Recovered - ").concat(u(o,2),"</span>\n                <span>Today Deaths - ").concat(u(s,2),"</span>\n                <span>Total Deaths - ").concat(u(r,2),"</span>\n                </div>"),position:{lat:e.latLng.lat(),lng:e.latLng.lng()}}),l.open(j)}catch(i){console.log(i)}}(e,{countryInfo:t,todayCases:a,active:n,recovered:o,todayRecovered:c,deaths:r,todayDeaths:s})}},t._id):null}))]})}):Object(k.jsx)("h3",{children:"loading..."})},M=(a(112),a(97)),F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";return function(){var a=Object(m.a)(x.a.mark((function a(n){var o,c,r;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:"country-set-loading",payload:!0}),o="".concat(C,"historical/").concat(t,"?lastdays=").concat(e),a.next=5,fetch(o);case 5:return c=a.sent,a.next=8,c.json();case 8:r=a.sent,n({type:"country-set-historical-data",payload:"timeline"in r?r.timeline:r}),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),n({type:"country-set-error",payload:a.t0});case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}()},I=function(){var e=Object(s.c)((function(e){return e.countries})).selectedCountry,t=Object(s.c)((function(e){return e.country})),a=t.countryHistoricalData,o=t.days,c=Object(s.b)(),r=Object(d.b)({countriesFetchHistoricalData:F},c);Object(n.useEffect)((function(){var t=(null===e||void 0===e?void 0:e.code)?e.code:"all";r.countriesFetchHistoricalData(o,t)}),[e]);var l=a.cases,i=void 0===l?{}:l,v=a.deaths,y=void 0===v?{}:v,j=a.recovered,h=void 0===j?{}:j,b={labels:Object.keys(i),datasets:[{label:"Deaths",data:Object.values(y),fill:!0,backgroundColor:"#dc3545",borderColor:"red"},{label:"Recovered",data:Object.values(h),fill:!0,backgroundColor:"#28a745",borderColor:"green"},{label:"Cases",data:Object.values(i),fill:!0,backgroundColor:"#FF9900",borderColor:"#e08e12"}]},f={responsive:!0,plugins:{title:{display:!1,text:function(e){return""}},tooltip:{mode:"index"}},interaction:{mode:"nearest",axis:"x",intersect:!1},scales:{x:{stacked:!0,title:{display:!0,text:"Dates"}},y:{stacked:!0,title:{display:!1,text:"Total Cases"},ticks:{callback:function(e,t,a){return u(e,2)}}}}};return console.log("CovidHistoricalChart loaded"),Object(k.jsxs)("div",{className:"d-flex flex-column w-100 mt-4",children:[Object(k.jsx)("h5",{children:"Historical Data"}),Object.keys(i).length>0&&Object(k.jsx)(M.a,{data:b,options:f})]})},L=(a(219),function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"totalCases";try{var a=Object(j.a)(e);return Array.isArray(a)&&a.length>0&&a.sort((function(e,a){return a[t]-e[t]})),a}catch(n){throw n}}(Object(s.c)((function(e){return e.countries})).allCountries);return Object(k.jsxs)("div",{className:"countries-container bg-white px-3 py-4",children:[Object(k.jsx)("h5",{children:"Live Cases by Country"}),Object(k.jsx)("div",{className:"mt-4 all-country-wrapper",children:e&&e.map((function(e){return Object(k.jsxs)("div",{className:"d-flex flex-row align-items-center justify-content-between country-wrapper px-2",children:[Object(k.jsxs)("div",{className:"d-flex flex-row",children:[Object(k.jsx)("span",{className:"country fs-7 text-black-50",children:e.iso3}),Object(k.jsx)("div",{className:"image-container d-flex justify-content-center align-items-center",children:Object(k.jsx)("img",{src:e.flag,alt:"flag","data-bs-toggle":"tooltip","data-bs-placement":"right",title:e.name})})]}),Object(k.jsx)("div",{className:"text-right text-black-50",children:u(e.totalCases,2)})]},e._id)}))})]})});a(220);var _=function(e){var t=e.heading,a=e.dataToShow,n=e.colorClass,o=void 0===n?"danger":n,c=a.today,r=void 0===c?0:c,s=a.total,l=void 0===s?0:s;return Object(k.jsx)("div",{className:"card custom-card bg-white col-lg-3 col-md-3 col-sm-6",children:Object(k.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center my-2",children:[Object(k.jsx)("p",{className:"text-black-50 m-0",children:t}),Object(k.jsxs)("h1",{className:"text-".concat(o),"data-bs-toggle":"tooltip","data-bs-placement":"right",title:"added today",children:["+",u(r,1)]}),Object(k.jsxs)("p",{className:"text-black-50 fs-7 fw-bolder",children:["+",u(l,2)," Total"]})]})})};var A=function(){var e=Object(s.c)((function(e){return e.covid})).dataByCountry,t=Object(s.c)((function(e){return e.countries})).selectedCountry,a=(null===t||void 0===t?void 0:t.code)&&e&&e[t.code]?e[t.code]:{};return Object(k.jsxs)(l.a,{fluid:!0,className:"d-flex flex-row mt-4",children:[Object(k.jsxs)("div",{className:"app__left col-lg-8 col-md-8 col-sm-12 px-4",children:[Object(k.jsx)(B,{lastUpdated:null===a||void 0===a?void 0:a.updated}),Object(k.jsxs)("div",{className:"d-flex flex-row justify-content-between mt-4",children:[Object(k.jsx)(_,{heading:"Coronavirus Cases",dataToShow:{total:null===a||void 0===a?void 0:a.cases,today:null===a||void 0===a?void 0:a.todayCases,active:null===a||void 0===a?void 0:a.active}}),Object(k.jsx)(_,{heading:"Recovered",colorClass:"success",dataToShow:{total:null===a||void 0===a?void 0:a.recovered,today:null===a||void 0===a?void 0:a.todayRecovered}}),Object(k.jsx)(_,{heading:"Deaths",dataToShow:{total:null===a||void 0===a?void 0:a.deaths,today:null===a||void 0===a?void 0:a.todayDeaths}})]}),Object(k.jsx)("div",{className:"d-flex",children:Object(k.jsx)(I,{})}),Object(k.jsx)("div",{className:"d-flex mb-4",children:Object(k.jsx)(T,{})})]}),Object(k.jsx)("div",{className:"app__right col-lg-4 col-md-4 col-sm-12",children:Object(k.jsx)(L,{})})]})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,228)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),c(e),r(e)}))},R=a(95),H=a(7),U={dataByCountry:{},dataByCountryError:!1,dataByCountryErrorMessage:"",loading:!1,error:!1,errorMessage:""},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;try{switch(t.type){case"covid-set-data-by-country":return Object(H.a)(Object(H.a)({},e),{},{dataByCountry:t.payload,dataByCountryError:!1,dataByCountryErrorMessage:""});case"covid-set-data-by-country-error":return Object(H.a)(Object(H.a)({},e),{},{dataByCountryError:!0,dataByCountryErrorMessage:t.payload});default:return e}}catch(a){throw a}},K={selectedCountry:{name:"",code:""},allCountries:[],loading:!1,error:!1,errorMessage:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;try{switch(t.type){case"counties-set-loading":return Object(H.a)(Object(H.a)({},e),{},{loading:t.payload});case"counties-fetch":return Object(H.a)(Object(H.a)({},e),{},{allCountries:t.payload,loading:!1,error:!1,errorMessage:""});case"counties-set-error":return Object(H.a)(Object(H.a)({},e),{},{loading:!1,error:!0,errorMessage:t.payload});case"counties-set-selected-country":return Object(H.a)(Object(H.a)({},e),{},{selectedCountry:Object(H.a)(Object(H.a)({},e.selectedCountry),{},{name:t.payload.name,code:t.payload.code})});default:return e}}catch(a){throw a}},W={countryHistoricalData:{},loading:!1,error:!1,errorMessage:"",days:90},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;try{switch(t.type){case"country-set-error":return Object(H.a)(Object(H.a)({},e),{},{loading:!1,error:!0,errorMessage:t.payload});case"country-set-loading":return Object(H.a)(Object(H.a)({},e),{},{loading:t.payload});case"country-set-historical-data":return Object(H.a)(Object(H.a)({},e),{},{loading:!1,error:!1,errorMessage:"",countryHistoricalData:t.payload});default:return e}}catch(a){throw a}},q=Object(d.c)({countries:P,country:J,covid:z}),G=Object(d.d)(q,{},Object(d.a)(R.a));r.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(s.a,{store:G,children:Object(k.jsx)(A,{})})}),document.getElementById("root")),E()}},[[221,1,2]]]);
//# sourceMappingURL=main.fa586acd.chunk.js.map