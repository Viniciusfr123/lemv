(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5866f545"],{"1b16":function(e,t,a){"use strict";var r=a("7a23"),c={class:"bg-white w-80 max-w-3xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none p-1"},n={class:"flex sm:flex-1 flex-col gap-2 p-1"},i={class:"text-lg sm:text-xl font-semibold  text-gray-600"},s={key:0,class:"text-gray-500 text-sm sm:text-base line-clamp-3"},l={class:"flex gap-4 mt-auto"},o={class:"mr-auto text-brand-main flex items-center gap-1 sm:text-lg "},u=Object(r["j"])("span",null,"mais",-1);function d(e,t,a,d,b,f){return Object(r["A"])(),Object(r["f"])("div",c,[Object(r["j"])("div",{style:{backgroundImage:"url('"+a.img+"')"},class:"h-52 sm:h-full sm:w-52 rounded-xl bg-gray-100 bg-center bg-cover hidden lg:block"},null,4),Object(r["j"])("div",n,[Object(r["j"])("h1",i,Object(r["L"])(a.title),1),a.resumeON?(Object(r["A"])(),Object(r["f"])("p",s,Object(r["L"])(a.resume),1)):Object(r["g"])("",!0),Object(r["j"])("div",l,[Object(r["j"])("span",o,Object(r["L"])(a.details),1),Object(r["j"])("button",{onClick:t[1]||(t[1]=function(e){return d.pushPage()}),class:"ml-auto text-brand-main flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500"},[u])])])])}var b=a("6c02"),f={props:["title","img","resume","details","redirect","id","resumeON"],setup:function(e){var t=Object(b["d"])();function a(){t.push({name:e.redirect,params:{id:e.id}})}return{pushPage:a}}},m=a("d959"),p=a.n(m);const j=p()(f,[["render",d]]);t["a"]=j},"5a44":function(e,t,a){"use strict";a("fe73")},"9bf7":function(e,t,a){"use strict";a("f5a8")},be13:function(e,t,a){"use strict";a.r(t);var r=a("7a23"),c={class:"flex items-center justify-center"},n={class:"w-5/6 space-y-20"},i=Object(r["j"])("div",null,[Object(r["j"])("h2",{class:"flex text-4xl font-black justify-center text-black space-y-20"},"Últimas notícias")],-1);function s(e,t,a,s,l,o){var u=Object(r["I"])("lem-principal"),d=Object(r["I"])("carousel"),b=Object(r["I"])("lem-footer");return Object(r["A"])(),Object(r["f"])(r["a"],null,[Object(r["j"])(u),Object(r["j"])("div",c,[Object(r["j"])("div",n,[i,Object(r["j"])(d,{noticias:l.state.cards},null,8,["noticias"])])]),Object(r["j"])(b)],64)}a("96cf");var l=a("1da1"),o=Object(r["X"])("data-v-356be64f");Object(r["D"])("data-v-356be64f");var u={class:"flex items-center justify-center"},d=Object(r["h"])('<div class="flex space-x-10" data-v-356be64f><div class="img-principal hidden md:block" data-v-356be64f></div><div class="flex flex-col mt-20" data-v-356be64f><h1 class="flex text-4xl font-black justify-center text-black" data-v-356be64f>Bem vindo ao LEM-V!</h1><p class="text-lg font-medium mt-10 text-gray" data-v-356be64f> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla<br data-v-356be64f> Nulla malesuada arcu at erat porttitor porttitor. Vestibulum<br data-v-356be64f> vel sodales diam sed vehicula. Aliquam malesuada quam placerat<br data-v-356be64f> ipsum non urna fermentum, id pharetra mauris porttitor.<br data-v-356be64f><br data-v-356be64f> Integer tincidunt nibh lectus, eget ullamcorper est ullamcorper sed.<br data-v-356be64f> convallis tincidunt pulvinar diam dictum dignissim. Suspendisse<br data-v-356be64f> sit amet ornare lectus consequat. Donec placerat arcu ut tincidunt blandit. </p></div></div>',1);Object(r["B"])();var b=o((function(e,t,a,c,n,i){return Object(r["A"])(),Object(r["f"])("div",u,[d])})),f={},m=(a("5a44"),a("d959")),p=a.n(m);const j=p()(f,[["render",b],["__scopeId","data-v-356be64f"]]);var v=j,g={class:"flex justify-center py-10 bg-brand-gray"},O=Object(r["j"])("footer",{class:"text-center lg:text-left bg-gray-100 text-gray-600"},[Object(r["j"])("p",{class:"font-medium text-center text-gray-800"},"LEM IFES © 2022")],-1);function x(e,t,a,c,n,i){return Object(r["A"])(),Object(r["f"])("div",g,[O])}var y={};const h=p()(y,[["render",x]]);var w=h,k=(a("a4d3"),a("e01a"),Object(r["X"])("data-v-79353e62")),S=k((function(e,t,a,c,n,i){var s=Object(r["I"])("card"),l=Object(r["I"])("swiper-slide"),o=Object(r["I"])("swiper");return Object(r["A"])(),Object(r["f"])(o,{navigation:!0,slidesPerView:4,spaceBetween:30,pagination:{clickable:!0},class:"mySwiper"},{default:k((function(){return[(Object(r["A"])(!0),Object(r["f"])(r["a"],null,Object(r["G"])(a.noticias,(function(e){return Object(r["A"])(),Object(r["f"])(l,{key:e.index},{default:k((function(){return[Object(r["j"])(s,{title:e.title,img:e.urlImage,details:e.date,resume:e.description,id:e.id,redirect:"NoticiaSinglePage"},null,8,["title","img","details","resume","id"])]})),_:2},1024)})),128))]})),_:1})})),I=a("90ea"),A=a("a16a"),L=a("1b16"),N=(a("5f67"),a("6d3b")),_=a("5dc8"),P=a("8343");N["a"].use([_["a"],P["a"]]);var E={props:{noticias:{}},components:{Swiper:I["a"],SwiperSlide:A["a"],Card:L["a"]},mounted:function(){}};a("9bf7");const q=p()(E,[["render",S],["__scopeId","data-v-79353e62"]]);var B=q,V=a("dde5"),C={components:{LemPrincipal:v,LemFooter:w,carousel:B},data:function(){var e=[],t=Object(r["E"])({cards:e});return{state:t}},methods:{getNews:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,V["a"].news.getNews();case 2:a=t.sent,r=a.data,c=a.errors,c?console.log(c):e.state.cards=r;case 6:case"end":return t.stop()}}),t)})))()},filtrar:function(e){console.log(e)}},mounted:function(){this.getNews()}};const D=p()(C,[["render",s]]);t["default"]=D},e01a:function(e,t,a){"use strict";var r=a("23e7"),c=a("83ab"),n=a("da84"),i=a("5135"),s=a("861d"),l=a("9bf2").f,o=a("e893"),u=n.Symbol;if(c&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},b=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof b?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};o(b,u);var f=b.prototype=u.prototype;f.constructor=b;var m=f.toString,p="Symbol(test)"==String(u("test")),j=/^Symbol\((.*)\)[^)]+$/;l(f,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=m.call(e);if(i(d,e))return"";var a=p?t.slice(7,-1):t.replace(j,"$1");return""===a?void 0:a}}),r({global:!0,forced:!0},{Symbol:b})}},f5a8:function(e,t,a){},fe73:function(e,t,a){}}]);
//# sourceMappingURL=chunk-5866f545.759a0761.js.map