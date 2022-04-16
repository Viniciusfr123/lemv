(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17e39024"],{"1b16":function(t,e,a){"use strict";var r=a("7a23"),n={class:"bg-white w-80 max-w-3xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none p-1"},i={class:"flex sm:flex-1 flex-col gap-2 p-1"},c={class:"text-lg sm:text-xl font-semibold  text-gray-600"},o={class:"text-gray-500 text-sm sm:text-base line-clamp-3"},l={class:"flex gap-4 mt-auto"},s={class:"mr-auto text-brand-main flex items-center gap-1 sm:text-lg "},d=Object(r["j"])("span",null,"mais",-1);function u(t,e,a,u,b,j){return Object(r["A"])(),Object(r["f"])("div",n,[Object(r["j"])("div",{style:{backgroundImage:"url('"+a.img+"')"},class:"h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover hidden lg:block"},null,4),Object(r["j"])("div",i,[Object(r["j"])("h1",c,Object(r["L"])(a.title),1),Object(r["j"])("p",o,Object(r["L"])(a.resume),1),Object(r["j"])("div",l,[Object(r["j"])("span",s,Object(r["L"])(a.details),1),Object(r["j"])("button",{onClick:e[1]||(e[1]=function(t){return u.pushPage()}),class:"ml-auto text-brand-main flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500"},[d])])])])}var b=a("6c02"),j={props:["title","img","resume","details","redirect","id"],setup:function(t){var e=Object(b["d"])();function a(){e.push({name:t.redirect,params:{id:t.id}})}return{pushPage:a}}},f=a("d959"),g=a.n(f);const m=g()(j,[["render",u]]);e["a"]=m},d101:function(t,e,a){"use strict";var r=a("7a23"),n={class:"grid grid-col-2 items-center md:grid-col-2"},i=Object(r["j"])("option",{disabled:"",value:""},"Categoria",-1),c=Object(r["j"])("option",{value:""},"Nenhuma",-1),o=Object(r["j"])("label",{type:"text"},"Data Inicio: ",-1),l=Object(r["j"])("label",{type:"text"},"Data Fim: ",-1);function s(t,e,a,s,d,u){return Object(r["A"])(),Object(r["f"])("div",n,[Object(r["j"])("form",null,[Object(r["V"])(Object(r["j"])("select",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return d.categoria=t})},[i,(Object(r["A"])(!0),Object(r["f"])(r["a"],null,Object(r["G"])(a.dropBox,(function(t){return Object(r["A"])(),Object(r["f"])("option",{key:t},Object(r["L"])(t),1)})),128)),c],512),[[r["Q"],d.categoria]]),Object(r["j"])("div",null,[o,Object(r["V"])(Object(r["j"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return d.dataInicio=t}),type:"date"},null,512),[[r["R"],d.dataInicio]]),l,Object(r["V"])(Object(r["j"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return d.dataFim=t}),type:"date"},null,512),[[r["R"],d.dataFim]])])]),Object(r["j"])("button",{class:"bg-gray-300 rounded-md px-3",onClick:e[4]||(e[4]=function(){return t.$emit("filtrar",{categoria:d.categoria,dataInicio:d.dataInicio,dataFim:d.dataFim})})},"Filtrar ")])}var d={props:{dropBox:Array,test:String},emits:["filtrar"],data:function(){var t=String,e="",a="";return{categoria:t,dataInicio:e,dataFim:a}}},u=a("d959"),b=a.n(u);const j=b()(d,[["render",s]]);e["a"]=j},d9ad:function(t,e,a){"use strict";a.r(e);a("a4d3"),a("e01a");var r=a("7a23"),n={class:""},i={class:"flex flex-col items-center w-full mx-auto px-6 py-8 gap-1"},c=Object(r["j"])("h1",{class:"text-4xl font-black text-black"},"Projetos",-1),o=Object(r["j"])("span",{class:"inline"},"Filtrar: ",-1),l=Object(r["j"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:" inline h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(r["j"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})],-1);function s(t,e,a,s,d,u){var b=Object(r["I"])("filter-data"),j=Object(r["I"])("card");return Object(r["A"])(),Object(r["f"])("main",n,[Object(r["j"])("div",i,[c,Object(r["j"])("button",{onClick:e[1]||(e[1]=function(t){return d.flagFilter=!d.flagFilter}),class:"focus:outline-none"},[o,l]),d.flagFilter?(Object(r["A"])(),Object(r["f"])(b,{key:0,dropBox:["Ensino Infantil","Ensino Médio","Graduação"],onFiltrar:u.filtrar},null,8,["onFiltrar"])):Object(r["g"])("",!0),(Object(r["A"])(!0),Object(r["f"])(r["a"],null,Object(r["G"])(d.state.cards,(function(t){return Object(r["A"])(),Object(r["f"])(j,{key:t.id,title:t.title,img:t.urlImage,resume:t.description,details:t.authorName,id:t.id,redirect:d.redirect},null,8,["title","img","resume","details","id","redirect"])})),128))])])}a("96cf");var d=a("1da1"),u=a("1b16"),b=a("dde5"),j=a("d101"),f={components:{FilterData:j["a"],card:u["a"]},data:function(){var t="ProjetoSinglePage",e=[],a=!1,r={cards:e};return{state:r,redirect:t,flagFilter:a,categoria:"",dataInicio:"",dataFim:""}},methods:{getNews:function(t,e,a){var r=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b["a"].proj.getProjects();case 2:e=t.sent,a=e.data,n=e.errors,n?console.log(n):r.state.cards=a;case 6:case"end":return t.stop()}}),t)})))()},filtrar:function(t){t&&console.log(t.categoria,t.dataInicio,t.dataFim)}},mounted:function(){this.getNews()}},g=a("d959"),m=a.n(g);const p=m()(f,[["render",s]]);e["default"]=p},e01a:function(t,e,a){"use strict";var r=a("23e7"),n=a("83ab"),i=a("da84"),c=a("5135"),o=a("861d"),l=a("9bf2").f,s=a("e893"),d=i.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new d(t):void 0===t?d():d(t);return""===t&&(u[e]=!0),e};s(b,d);var j=b.prototype=d.prototype;j.constructor=b;var f=j.toString,g="Symbol(test)"==String(d("test")),m=/^Symbol\((.*)\)[^)]+$/;l(j,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=f.call(t);if(c(u,t))return"";var a=g?e.slice(7,-1):e.replace(m,"$1");return""===a?void 0:a}}),r({global:!0,forced:!0},{Symbol:b})}}}]);
//# sourceMappingURL=chunk-17e39024.557ada08.js.map