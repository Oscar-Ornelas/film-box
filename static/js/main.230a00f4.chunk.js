(this.webpackJsonpfilmbox=this.webpackJsonpfilmbox||[]).push([[0],{113:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(29),r=t.n(l),i=t(1),s=t(13),o=(t(44),t(9));var m=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&page=1",t="5b076c9b61e53ea3c493e7d25440c109",c=Object(n.useState)([]),l=Object(i.a)(c,2),r=l[0],s=l[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(t,"&language=en-US").concat(a)).then((function(e){return e.json()})).then((function(e){e.results.forEach((function(e){fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"?api_key=").concat(t,"&language=en-US")).then((function(e){return e.json()})).then((function(e){return s((function(a){return[].concat(Object(o.a)(a),[e])}))}))}))}))}),[]),r},u=t(12),f=t(5),d=t(15),v=t.n(d);var E=function(e){var a=[],t=Object(n.useState)(0),l=Object(i.a)(t,2),r=(l[0],l[1],Object(n.useState)({0:{items:1}})),s=Object(i.a)(r,2),o=s[0],u=(s[1],Object(n.useState)([])),d=Object(i.a)(u,2),E=d[0],p=d[1],b=m("now_playing");return Object(n.useEffect)((function(){a=b.map((function(a){return c.a.createElement(f.b,{to:"/detail/".concat(e.type,"/").concat(a.id),className:"link"},c.a.createElement("div",{className:"image-carousel-item"},c.a.createElement("div",{className:"inner-carousel",style:{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.73)),\n                                                                        url(https://image.tmdb.org/t/p/w1280".concat(a.backdrop_path,")")}},c.a.createElement("h3",{className:"image-carousel-category"},"Latest"),c.a.createElement("h2",{className:"image-carousel-title"},a.title),c.a.createElement("p",{className:"image-carousel-info"},a.genres[0].name," | ",a.vote_average," Rating"))))})),p(a)}),[b]),c.a.createElement("div",{className:"image-carousel"},c.a.createElement(v.a,{items:E,responsive:o,swipeDisabled:!0,dotsDisabled:!0,buttonsDisabled:!0,autoPlayInterval:5e3,autoPlayDirection:"rtl",autoPlay:!0,fadeOutAnimation:!0,playButtonEnabled:!1,stopAutoPlayOnHover:!1}))},p=t(17),b=t.n(p);var g=function(e){return c.a.createElement("div",{className:"review"},c.a.createElement("h3",{className:"review-reviewer"},e.reviewer),c.a.createElement("p",{className:"review-content"},e.content.length>300?"".concat(e.content.slice(0,300),"..."):e.content),c.a.createElement("p",null,c.a.createElement("a",{className:"review-link link",href:e.fullReviewSrc},""!==e.content?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"Read full review"),c.a.createElement("i",{className:"fas fa-chevron-right"})):"")))},h=t(34),A=t.n(h);var N=function(){var e="5b076c9b61e53ea3c493e7d25440c109",a=Object(n.useState)({}),t=Object(i.a)(a,2),l=t[0],r=t[1],m=Object(n.useState)([]),f=Object(i.a)(m,2),d=f[0],E=f[1],p=Object(n.useState)([]),h=Object(i.a)(p,2),N=h[0],j=h[1],B=Object(n.useState)([]),S=Object(i.a)(B,2),w=S[0],k=S[1],C=Object(n.useState)([]),X=Object(i.a)(C,2),Y=X[0],y=X[1],H=Object(s.h)().filmID,P=Object(s.f)(),x=Object(n.useState)(!0),L=Object(i.a)(x,2),T=L[0],D=L[1],U=[],z=Object(n.useState)(0),R=Object(i.a)(z,2),Z=R[0],q=R[1],V=Object(n.useState)({0:{items:2},450:{items:3},650:{items:4},900:{items:6},1200:{items:7}}),F=Object(i.a)(V,2),I=F[0],J=(F[1],Object(n.useState)([])),W=Object(i.a)(J,2),G=W[0],M=W[1];Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(H,"/credits?api_key=").concat(e)).then((function(e){return e.json()})).then((function(e){for(var a=function(a){j((function(t){return[].concat(Object(o.a)(t),[e.cast[a]])}))},t=0;t<7;t++)a(t)}))}),[]),Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(H,"?api_key=").concat(e,"&language=en-US")).then((function(e){return e.json()})).then((function(e){r(e),E((function(a){return e.genres.map((function(e){return e.name}))}))}))}),[]),Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(H,"/reviews?api_key=").concat(e,"&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){for(var a=function(a){void 0!==e.results[a]&&k((function(t){return[].concat(Object(o.a)(t),[e.results[a]])}))},t=0;t<4;t++)a(t)}))}),[]),Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(H,"/similar?api_key=").concat(e,"&language=en-US&page=1")).then((function(e){return e.json()})).then((function(a){a.results.forEach((function(a){return fetch("https://api.themoviedb.org/3/movie/".concat(a.id,"?api_key=").concat(e,"&language=en-US")).then((function(e){return e.json()})).then((function(e){return y((function(a){return[].concat(Object(o.a)(a),[e])}))}))}))}))}),[]),Object(n.useEffect)((function(){setTimeout((function(){D(!1)}),1500)}),[]),Object(n.useEffect)((function(){U=N.map((function(e){if(void 0!==e)return null===e.profile_path?c.a.createElement("div",{className:"film-detail-cast-item"},c.a.createElement("p",{className:"film-detail-cast-name"},e.name),c.a.createElement("img",{className:"film-detail-cast-img",src:A.a})):c.a.createElement("div",{className:"film-detail-cast-item"},c.a.createElement("p",{className:"film-detail-cast-name"},e.name),c.a.createElement("img",{className:"film-detail-cast-img",src:"https://image.tmdb.org/t/p/w185".concat(e.profile_path)}))})),M(U)}),[N]);var Q,_=w.map((function(e){return c.a.createElement(g,{reviewer:e.author,content:e.content,fullReviewSrc:e.url})}));return c.a.createElement("main",null,c.a.createElement("div",{className:"loading-icon ".concat(T?"visible":"hidden")},c.a.createElement(u.SemipolarLoading,null)),c.a.createElement("div",{className:"film-detail main-content ".concat(T?"hidden":"visible")},c.a.createElement("div",{className:"film-detail-img",style:{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.93)), url(https://image.tmdb.org/t/p/w1280".concat(l.backdrop_path,")")}},c.a.createElement("p",{className:"film-detail-back",onClick:function(){P.goBack(),setTimeout((function(){window.location.reload()}),10)}},c.a.createElement("i",{className:"fas fa-chevron-left"})),c.a.createElement("div",{className:"film-detail-card"},c.a.createElement("div",{className:"film-detail-card-info"},c.a.createElement("h2",{className:"film-detail-title"},l.title),c.a.createElement("p",{className:"film-detail-rating"},l.vote_average," ",0<(Q=l.vote_average)&&Q<2?c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-star"}),c.a.createElement("i",{className:"far fa-star"}),c.a.createElement("i",{className:"far fa-star"}),c.a.createElement("i",{className:"far fa-star"}),c.a.createElement("i",{className:"far fa-star"})):2<=Q&&Q<4?c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-star"}),c.a.createElement("i",{className:"fas fa-star"}),c.a.createElement("i",{className:"far fa-star"}),c.a.createElement("i",{className:"far fa-star"}),c.a.createElement("i",{className:"far fa-star"})):4<=Q&&Q<6?c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-star"}),c.a.createElement("i",{className:"fas fa-star"}),c.a.createElement("i",{className:"fas fa-star"}),c.a.createElement("i",{className:"far fa-star"}),c.a.createElement("i",{className:"far fa-star"})):6<=Q&&Q<8?c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-star"}),c.a.createElement("i",{className:"fas fa-star"}),c.a.createElement("i",{className:"fas fa-star"}),c.a.createElement("i",{className:"fas fa-star"}),c.a.createElement("i",{className:"far fa-star"})):Q>=8?c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-star"}),c.a.createElement("i",{className:"fas fa-star"}),c.a.createElement("i",{className:"fas fa-star"}),c.a.createElement("i",{className:"fas fa-star"}),c.a.createElement("i",{className:"fas fa-star"})):void 0),c.a.createElement("p",{className:"film-detail-genres"},d[0]," ",d.length>1?" | ".concat(d[1]):""),c.a.createElement("p",{className:"film-detail-status"},l.status)),c.a.createElement("img",{className:"film-detail-poster",src:"https://image.tmdb.org/t/p/w154".concat(l.poster_path)}))),c.a.createElement("div",{className:"main-content container"},c.a.createElement("section",{className:"overview"},c.a.createElement(b.a,{animateIn:"slideInLeft",animateOnce:!0,offSet:"300",duration:.5},c.a.createElement("h2",{className:"detail-header"},"Overview")),c.a.createElement("p",null,l.overview)),c.a.createElement("section",{className:"cast"},c.a.createElement(b.a,{animateIn:"slideInLeft",animateOnce:!0,offSet:"300",animatePreScroll:!1},c.a.createElement("h2",{className:"detail-header"},"Cast")),c.a.createElement("div",{className:"carousel-inner"},c.a.createElement(v.a,{dotsDisabled:!0,buttonsDisabled:!0,items:G,responsive:I,slideToIndex:Z,onSlideChanged:function(e){return q(e.item)},swipeDisabled:!0})),c.a.createElement("div",{className:"carousel-btns"},c.a.createElement("button",{className:"carousel-btn prev-btn cast-btn",onClick:function(){return q((function(e){return e-1}))}},c.a.createElement("i",{className:"fas fa-chevron-left"})),c.a.createElement("button",{className:"carousel-btn next-btn cast-btn",onClick:function(){return q((function(e){return e+1}))}},c.a.createElement("i",{className:"fas fa-chevron-right"})))),c.a.createElement("section",null,c.a.createElement(b.a,{animateIn:"slideInLeft",animateOnce:!0,animatePreScroll:!1,offSet:"300"},c.a.createElement("h2",{className:"detail-header"},"Popular Reviews")),w.length>0?_:c.a.createElement(g,{reviewer:"No Reviews Yet!",content:"",fullReviewSrc:""})),c.a.createElement("section",null,c.a.createElement(O,{header:"Similar Movies",filmList:Y})))))};var j=function(e){var a=Object(s.f)();return c.a.createElement("div",{onClick:function(){a.push("/detail/movie/".concat(e.id)),window.location.reload()},className:"film-card"},c.a.createElement("p",{className:"film-card-title"},e.title),c.a.createElement("img",{className:"film-card-poster",src:e.posterUrl}),c.a.createElement("p",{className:"film-card-genre"},e.genres[0]," ",e.genres.length>1?" / ".concat(e.genres[1]):""),c.a.createElement("p",{className:"film-card-rating"},c.a.createElement("i",{class:"fas fa-star"})," ",e.rating))};t(112);var O=function(e){var a=Object(n.useState)(0),t=Object(i.a)(a,2),l=t[0],r=t[1],s=Object(n.useState)({0:{items:2},495:{items:3},700:{items:4},1e3:{items:5},1200:{items:6},1500:{items:8},1600:{items:9},1800:{items:10}}),o=Object(i.a)(s,2),m=o[0],u=(o[1],Object(n.useState)([])),f=Object(i.a)(u,2),d=f[0],E=f[1],p=Object(n.useState)([]),b=Object(i.a)(p,2),g=b[0],h=b[1];return Object(n.useEffect)((function(){E(e.filmList.map((function(e){return h((function(a){return e.genres.map((function(e){return e.name}))})),c.a.createElement(j,{key:e.id,title:e.title,id:e.id,genres:g,rating:e.vote_average,posterUrl:"https://image.tmdb.org/t/p/w185".concat(e.poster_path)})})))}),[e.filmList]),c.a.createElement("div",{className:"film-card-container"},c.a.createElement("h2",{className:"carousel-header"},e.header),c.a.createElement("div",{className:"carousel-inner"},c.a.createElement(v.a,{dotsDisabled:!0,buttonsDisabled:!0,items:d,responsive:m,slideToIndex:l,onSlideChanged:function(e){return r(e.item)},swipeDisabled:!0})),c.a.createElement("div",{className:"carousel-btns"},c.a.createElement("button",{className:"carousel-btn prev-btn",onClick:function(){return r((function(e){return e-1}))}},c.a.createElement("i",{className:"fas fa-chevron-left"})),c.a.createElement("button",{className:"carousel-btn next-btn",onClick:function(){return r((function(e){return e+1}))}},c.a.createElement("i",{className:"fas fa-chevron-right"}))))},B=t(35),S=t.n(B);var w=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"footer-main"},c.a.createElement("div",{className:"footer-nav"},c.a.createElement("h1",{className:"logo footer-logo"},"Filmbox"),c.a.createElement("div",{className:"footer-nav-content"},c.a.createElement("ul",{className:"footer-nav-list"},c.a.createElement("li",{className:"footer-nav-item",onClick:function(){return window.scrollTo(0,0)}},"Home"),c.a.createElement(f.b,{className:"link",to:"/"},c.a.createElement("li",{className:"footer-nav-item"},"Discover"))))),c.a.createElement("div",{className:"footer-info"},c.a.createElement("p",{className:"footer-info-item"},"Portfolio: ",c.a.createElement("a",{className:"footer-info-link",target:"_blank",rel:"noopener noreferrer",href:"https://oscar-ornelas.github.io/portfolio-app"},"oscar-ornelas.github.io/portfolio-app")),c.a.createElement("p",{className:"footer-info-item"},"Phone: ",c.a.createElement("span",null,"512-831-8142")))),c.a.createElement("div",{className:"api-info"},c.a.createElement("img",{className:"api-logo",src:S.a}),c.a.createElement("div",{className:"api-contact"},c.a.createElement("ul",{className:"api-contact-list"},c.a.createElement("li",{className:"api-contact-item"},c.a.createElement("a",{className:"api-contact-link",href:"https://www.facebook.com/themoviedb"},c.a.createElement("i",{className:"fab fa-facebook-square"}))),c.a.createElement("li",{className:"api-contact-item"},c.a.createElement("a",{className:"api-contact-link",href:"https://twitter.com/themoviedb"},c.a.createElement("i",{className:"fab fa-twitter"}))),c.a.createElement("li",{className:"api-contact-item"},c.a.createElement("a",{className:"api-contact-link",href:"https://www.themoviedb.org/documentation/api"},c.a.createElement("i",{className:"fas fa-code"})))))))};var k=function(){var e=m("popular"),a=m("upcoming"),t=m("now_playing"),l=m("top_rated"),r=Object(n.useState)(!0),s=Object(i.a)(r,2),o=s[0],f=s[1];return Object(n.useEffect)((function(){setTimeout((function(){f(!1)}),1500)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("main",null,c.a.createElement("div",{className:"loading-icon ".concat(o?"visible":"hidden")},c.a.createElement(u.SemipolarLoading,null)),c.a.createElement("div",{className:"main-content ".concat(o?"hidden":"visible")},c.a.createElement(E,{type:"movie"}),c.a.createElement("div",{className:"container"},c.a.createElement(O,{header:"Now Playing",filmList:t}),c.a.createElement("div",null,c.a.createElement("hr",null)),c.a.createElement(O,{header:"Popular",filmList:e}),c.a.createElement("div",null,c.a.createElement("hr",null)),c.a.createElement(O,{header:"Upcoming",filmList:a}),c.a.createElement("div",null,c.a.createElement("hr",null)),c.a.createElement(O,{header:"Top Rated",filmList:l})),c.a.createElement(w,null))))};var C=function(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),l=t[0],r=t[1],o=Object(n.useState)(!0),m=Object(i.a)(o,2),u=m[0],d=m[1],v=Object(s.f)();return Object(n.useEffect)((function(){setTimeout((function(){d(!1)}),1500)}),[]),c.a.createElement("header",{style:{zIndex:e.navSlide?"101":"99"},className:"header ".concat(u?"hidden":"visible")},c.a.createElement("div",{className:"nav-toggler-container"},c.a.createElement("button",{onClick:function(){e.setNavSlide((function(e){return!e}))},className:"nav-toggler"},c.a.createElement("i",{class:"fas fa-bars"}))),c.a.createElement("div",{className:"header-content ".concat(e.navSlide?"navigation-open":"navigation-close")},c.a.createElement("div",{className:"logo-container"},c.a.createElement(f.b,{to:"/",className:"link"},c.a.createElement("h1",{className:"logo"},"Filmbox"))),c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav-list"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("form",{className:"form"},c.a.createElement("input",{name:"searchValue",placeholder:"Search",value:l,onChange:function(e){var a=e.target.value;r(a)},className:"search-input",type:"text"}),c.a.createElement("button",{onClick:function(){v.push("/search/".concat(l)),window.location.reload()},className:"search-btn"},c.a.createElement("i",{className:"fas fa-search"})))))),c.a.createElement("div",{className:"header-discover"},c.a.createElement(f.b,{to:"/discover",className:"link"},c.a.createElement("a",{className:"discover-link"},c.a.createElement("i",{className:"fas fa-map-marker-alt"}))))))};var X=function(e){return c.a.createElement("div",{className:"header-lower"},c.a.createElement("div",{className:"header-content-lower ".concat(e.navSlide?"navigation-open-lower":"navigation-close-lower")},c.a.createElement(f.b,{to:"/discover",className:"link"},c.a.createElement("a",{className:"discover-link"},c.a.createElement("i",{className:"fas fa-map-marker-alt"})))))};var Y=function(){var e="5b076c9b61e53ea3c493e7d25440c109",a=Object(n.useState)([]),t=Object(i.a)(a,2),l=t[0],r=t[1],m=Object(n.useState)(1),f=Object(i.a)(m,2),d=f[0],v=f[1],E=Object(n.useState)(!0),p=Object(i.a)(E,2),b=p[0],g=p[1],h=Object(s.h)().search,A=Object(s.f)();Object(n.useEffect)((function(){setTimeout((function(){g(!1)}),1500)}),[]),Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(e,"&language=en-US&query=").concat(h,"&page=").concat(d,"&include_adult=false")).then((function(e){return e.json()})).then((function(a){r([]),a.results.forEach((function(a){fetch("https://api.themoviedb.org/3/movie/".concat(a.id,"?api_key=").concat(e,"&language=en-US")).then((function(e){return e.json()})).then((function(e){null!==a.poster_path&&r((function(e){return[].concat(Object(o.a)(e),[a])}))}))}))}))}),[d]);var N=l.map((function(e){return c.a.createElement("div",{key:e.id,onClick:function(){return a=e.id,A.push("/detail/movie/".concat(a)),void window.location.reload();var a},className:"search-item"},c.a.createElement("div",{className:"search-item-content"},c.a.createElement("p",{className:"search-item-title"},e.title)),c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),className:"search-item-poster"}))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"loading-icon ".concat(b?"visible":"hidden")},c.a.createElement(u.SemipolarLoading,null)),c.a.createElement("main",{className:"container ".concat(b?"hidden":"visible")},c.a.createElement("h1",{className:"search-header"},"Search results for ",h),c.a.createElement("div",{className:"search-grid"},N),c.a.createElement("div",{className:"switch-page-btns"},1!==d?c.a.createElement("button",{onClick:function(){v((function(e){return e-1}))},className:"switch-page-btn prev-page-btn"},"Previous Page"):"",c.a.createElement("button",{onClick:function(){v((function(e){return e+1}))},className:"switch-page-btn next-page-btn"},"Next Page"))))},y=t(18),H=t(36);var P=function(){var e="5b076c9b61e53ea3c493e7d25440c109",a=Object(n.useState)(!0),t=Object(i.a)(a,2),l=t[0],r=t[1],m=Object(n.useState)([]),f=Object(i.a)(m,2),d=f[0],v=f[1],E=Object(n.useState)(1),p=Object(i.a)(E,2),b=p[0],g=p[1],h=Object(n.useState)({year:"",voteAverage:"",sortBy:"popularity.desc"}),A=Object(i.a)(h,2),N=A[0],j=A[1],O=Object(s.f)();function B(){fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(e,"&language=en-US&sort_by=").concat(N.sortBy,"&include_adult=false&include_video=false&page=").concat(b,"&primary_release_year=").concat(N.year,"&vote_average.gte=").concat(N.voteAverage)).then((function(e){return e.json()})).then((function(a){v([]),a.results.forEach((function(a){fetch("https://api.themoviedb.org/3/movie/".concat(a.id,"?api_key=").concat(e,"&language=en-US")).then((function(e){return e.json()})).then((function(e){null!==a.poster_path&&v((function(e){return[].concat(Object(o.a)(e),[a])}))}))}))}))}function S(e){var a=e.target,t=a.name,n=a.value;j((function(e){return Object(H.a)({},e,Object(y.a)({},t,n))}))}Object(n.useEffect)((function(){setTimeout((function(){r(!1)}),1500)}),[]),Object(n.useEffect)((function(){B()}),[b]);var w=d.map((function(e){return c.a.createElement("div",{key:e.id,onClick:function(){return a=e.id,O.push("/detail/movie/".concat(a)),void window.location.reload();var a},className:"search-item"},c.a.createElement("div",{className:"search-item-content"},c.a.createElement("p",{className:"search-item-title"},e.title)),c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),className:"search-item-poster"}))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"loading-icon ".concat(l?"visible":"hidden")},c.a.createElement(u.SemipolarLoading,null)),c.a.createElement("div",{className:"discover container ".concat(l?"hidden":"visible")},c.a.createElement("div",{className:"discover-form-container"},c.a.createElement("h1",{className:"search-header"},"Discover"),c.a.createElement("form",{className:"discover-form"},c.a.createElement("div",{className:"discover-inputs"},c.a.createElement("input",{name:"year",type:"number",placeholder:"Year",value:N.year,onChange:S,min:"1900",max:"2050",className:"discover-input"}),c.a.createElement("input",{name:"voteAverage",type:"number",placeholder:"Vote Average",value:N.voteAverage,onChange:S,min:"1",max:"10",className:"discover-input"}),c.a.createElement("select",{value:N.sortBy,onChange:S,name:"sortBy",className:"discover-input"},c.a.createElement("option",{value:"popularity.asc"},"Popularity Ascending"),c.a.createElement("option",{value:"popularity.desc"},"Popularity Descending"),c.a.createElement("option",{value:"release_date.asc"},"Release Date Ascending"),c.a.createElement("option",{value:"release_data.desc"},"Release Date Descending"),c.a.createElement("option",{value:"revenue.asc"},"Revenue Ascending"),c.a.createElement("option",{value:"revenue.desc"},"Revenue Descending"),c.a.createElement("option",{value:"vote_average.asc"},"Vote Average Ascending"),c.a.createElement("option",{value:"vote_average.desc"},"Vote Average Descending"))),c.a.createElement("button",{className:"discover-btn",onClick:function(e){e.preventDefault(),B()}},"Search"))),c.a.createElement("main",{className:"container"},c.a.createElement("div",{className:"search-grid"},w),c.a.createElement("div",{className:"switch-page-btns"},1!==b?c.a.createElement("button",{onClick:function(){g((function(e){return e-1}))},className:"switch-page-btn prev-page-btn"},"Previous Page"):"",c.a.createElement("button",{onClick:function(){g((function(e){return e+1}))},className:"switch-page-btn next-page-btn"},"Next Page")))))};var x=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(C,{navSlide:t,setNavSlide:l}),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/"},c.a.createElement(k,null)),c.a.createElement(s.a,{path:"/detail/movie/:filmID"},c.a.createElement(N,null)),c.a.createElement(s.a,{path:"/search/:search"},c.a.createElement(Y,null)),c.a.createElement(s.a,{path:"/discover"},c.a.createElement(P,null))),c.a.createElement(X,{navSlide:t}))};r.a.render(c.a.createElement(f.a,{basename:"/film-box"},c.a.createElement((function(){var e=Object(s.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}),null),c.a.createElement(x,null)),document.getElementById("root"))},34:function(e,a,t){e.exports=t.p+"static/media/portraitPlaceholder.4788048f.png"},35:function(e,a){e.exports="data:image/png;base64,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"},39:function(e,a,t){e.exports=t(113)},44:function(e,a,t){}},[[39,1,2]]]);
//# sourceMappingURL=main.230a00f4.chunk.js.map