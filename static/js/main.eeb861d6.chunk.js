(this["webpackJsonpproject-2021-10-clone-popcorntime"]=this["webpackJsonpproject-2021-10-clone-popcorntime"]||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/noPosterSmall.ea2ad102.png"},79:function(e,n,t){"use strict";t.r(n);var r,a,i,c,o=t(1),s=t.n(o),l=t(39),d=t.n(l),p=t(12),u=t(13),h=t(15),g=t(14),b=t(19),j=t(5),x=t(3),m=t(2),v=t(0),f=m.c.nav(r||(r=Object(x.a)(["\n    position: fixed;\n    top:0;\n    left:0;\n\n    width: 100%;\n    height: 56px;\n    padding: 16px;\n    \n    display: flex;\n    justify-content: space-between;\n\n    background-color: rgba(25,25,25,1);\n    box-shadow: 0 2px 10px 2px rgba(45,45,45,0.5);\n    div {\n        height: 24px;\n        display: flex;\n        align-items: center;\n    }\n"]))),O=Object(m.c)(b.b)(a||(a=Object(x.a)(["\n    height: 56px;\n    font-size:16px;\n    font-weight:400;\n    \n    margin-left: 10px;\n    text-transform: uppercase;\n\n    display: flex;\n    align-items: center;\n    border-bottom: 2px solid ",";\n    &:nth-child(1){\n        margin-left:15px;\n    }\n\n    transition: all 0.2s ease-in;\n    &:hover{\n        color: whitesmoke;\n        opacity: 0.5;\n    }\n"])),(function(e){return e.current?"#778beb":"transparent"})),w=(m.c.input(i||(i=Object(x.a)(["\n    margin-left: 20px;\n    width: 60vw;\n    height: 25px;\n    text-align: center;\n    transition: all 0.2s ease-in;\n    background-color: rgba(25,25,25,1);\n    box-shadow: 0 2px 2px 2px rgba(45,45,45,0.5);\n    @media screen and (max-width: 1000px) {\n        width: 50vw;\n    }\n    @media screen and (max-width: 500px){\n        width: 40vw;\n    }\n"]))),m.c.button(c||(c=Object(x.a)(["\n    height: 30px;\n    display: flex;\n    align-items: center;\n\n    transition: all 0.2s ease-in;\n    &:hover {\n        color: whitesmoke;\n        opacity: 0.5;\n    }\n"])))),y=Object(j.g)((function(e){var n=e.location.pathname;return Object(v.jsxs)(f,{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(w,{className:"menu",children:Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),Object(v.jsx)(O,{current:"/"===n?"/":null,to:"/",children:"Home"}),Object(v.jsx)(O,{current:"/tv"===n?"/tv":null,to:"/tv",children:"Tv"}),Object(v.jsx)(O,{current:"/search"===n?"/search":null,to:"/search",children:"Search"})]}),Object(v.jsx)("div",{children:Object(v.jsx)(O,{to:"https://github.com/unchaptered?tab=repositories",children:Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})})})})]})})),_=t(11),k=t.n(_),S=t(17),T=t(44),z=t.n(T).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"48f951326052d890db04d50dddf71161",language:"en-US"}});z.get("tv/popular");var M,R,U,C,F,N,P,I,B,H,A,D,L,q,E,J,V,G,K,Q,W,X,Y,Z,$,ee,ne,te,re,ae,ie=function(){return z.get("tv/popular")},ce=function(){return z.get("tv/top_rated")},oe=function(){return z.get("tv/airing_today")},se=function(e){return z.get("tv/".concat(e),{params:{append_to_response:"videos"}})},le=function(e){return z.get("search/tv",{params:{query:e}})},de=function(){return z.get("movie/popular")},pe=function(){return z.get("movie/upcoming")},ue=function(){return z.get("movie/now_playing")},he=function(e){return z.get("movie/".concat(e),{params:{append_to_response:"videos"}})},ge=function(e){return z.get("search/movie",{params:{query:e}})},be=t(16),je=m.c.div(M||(M=Object(x.a)(["\n    :not(:last-child) {\n        margin-bottom: 50px;\n    }\n"]))),xe=m.c.span(R||(R=Object(x.a)(["\n    font-size: 20px;\n    font-weight: 400;\n    padding-left: 20px;\n"]))),me=m.c.div(U||(U=Object(x.a)(["\n    margin-top: 10px;\n    background-color: rgba(50,50,50,0.2);\n    padding: 20px 20px;\n\n    gap: 10px;\n    display: grid;\n    /* grid-template-columns: repeat(auto-fill, 250px); */\n    grid-template-columns: repeat(6,1fr);\n    justify-content: space-between;\n    @media screen and (max-width:1500px){\n        grid-template-columns: repeat(5,1fr);\n    }\n    @media screen and (max-width:1200px){\n        grid-template-columns: repeat(4,1fr);\n    }\n    @media screen and (max-width:900px) {\n        grid-template-columns: repeat(3,1fr);\n    }\n    @media screen and (max-width: 600px){\n        grid-template-columns: repeat(2, 1fr);\n    }\n    justify-content: space-space-around;\n"]))),ve=function(e){var n=e.title,t=e.children;return Object(v.jsxs)(je,{children:[Object(v.jsx)(xe,{children:n}),Object(v.jsx)(me,{children:t})]})},fe=m.c.div(C||(C=Object(x.a)(["\n    font-size:  12px;\n"]))),Oe=m.c.div(F||(F=Object(x.a)(["\n    background-image: url(",");\n    height: 350px;\n    background-size: cover;\n    border-radius: 4px;\n    background-position: center center;\n    transition: opacity 0.1s linear;\n"])),(function(e){return e.bgUrl})),we=m.c.span(N||(N=Object(x.a)(["\n    position: absolute;\n    bottom: 31px;\n    right: 5px;\n    opacity: 0;\n    transition: opacity 0.1s linear;\n"]))),ye=m.c.div(P||(P=Object(x.a)(["\n        margin-bottom:5px;\n        &:hover{\n            "," {\n                opacity: 0.3;\n            }\n            "," {\n                opacity: 1;\n            }\n        }\n    \n        position: relative;\n    "])),Oe,we),_e=m.c.span(I||(I=Object(x.a)(["\n    display: block;\n    margin-bottom: 3px;\n"]))),ke=m.c.span(B||(B=Object(x.a)(["\n    font-size: 10px;\n    color: rgba(255,255,255,0.5);\n"]))),Se=function(e){var n=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,o=e.isMovie,s=void 0!==o&&o;return Object(v.jsx)(b.b,{to:s?"/movie/".concat(n):"/show/".concat(n),children:Object(v.jsx)(fe,{children:Object(v.jsxs)(ye,{children:[Object(v.jsx)(Oe,{bgUrl:r?"https://image.tmdb.org/t/p/w300".concat(r):t(38)}),Object(v.jsxs)(we,{children:[Object(v.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50"})," ",i,"/10"]}),Object(v.jsx)(ke,{children:c}),Object(v.jsx)(_e,{children:a.length>18?"".concat(a.substring(0,18),"..."):a})]})})})},Te=m.c.div(H||(H=Object(x.a)(["\n    position: fixed;\n    padding: 0 10px;\n\n    height: 100vh;\n    width:  100vw;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    font-size: 32px;\n"]))),ze=function(){return Object(v.jsx)(Te,{children:Object(v.jsx)("span",{role:"img","aria-label":"Loading",children:"\u26a1\u26a1\u26a1"})})},Me=m.c.div(A||(A=Object(x.a)(["\nwidth: 100%;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n"]))),Re=m.c.div(D||(D=Object(x.a)(["\nwidth: 100%;\nmax-width: 500px;\nmargin-top: 15px;\npadding: 15px;\n\ntext-align:center;\nfont-weight: 600;\ncolor: ",";\nbackground-color: ",";\n"])),(function(e){return e.color}),(function(e){return e.background})),Ue=m.c.span(L||(L=Object(x.a)(["\n"]))),Ce=function(e){var n=e.color,t=e.background,r=e.type,a=e.text;return Object(v.jsx)(Me,{children:Object(v.jsx)(Re,{color:n,background:t,children:Object(v.jsxs)(Ue,{children:[r," : ",a]})})})},Fe=m.c.div(q||(q=Object(x.a)(["\n    padding: 0 10px;\n"]))),Ne=function(e){var n=e.popular,t=e.upComing,r=e.nowPlaying,a=e.error,i=e.loading;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(be.a,{children:Object(v.jsx)("title",{children:"Movies | Unchaptered"})}),i?Object(v.jsx)(ze,{}):Object(v.jsxs)(Fe,{children:[r&&r.length>0&&Object(v.jsx)(ve,{title:"Now Playing",children:r.map((function(e){return Object(v.jsx)(Se,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(v.jsx)(ve,{title:"Popular Movie",children:n.map((function(e){return Object(v.jsx)(Se,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))}),t&&t.length>0&&Object(v.jsx)(ve,{title:"UpComing Movie",children:t.map((function(e){return Object(v.jsx)(Se,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))}),a&&Object(v.jsx)(Ce,{type:"error",text:a,color:"rgba(255, 255,190,1)",background:"rgba(200, 90, 60,1.0)"})]})]})},Pe=function(e){Object(h.a)(t,e);var n=Object(g.a)(t);function t(){var e;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state={popular:null,upComing:null,nowPlaying:null,error:null,loading:!0},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(S.a)(k.a.mark((function e(){var n,t,r,a,i,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,de();case 3:return n=e.sent,t=n.data.results,e.next=7,pe();case 7:return r=e.sent,a=r.data.results,e.next=11,ue();case 11:i=e.sent,c=i.data.results,this.setState({popular:t,upComing:a,nowPlaying:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.popular,t=e.upComing,r=e.nowPlaying,a=e.error,i=e.loading;return Object(v.jsx)(Ne,{popular:n,upComing:t,nowPlaying:r,error:a,loading:i})}}]),t}(s.a.Component),Ie=Pe,Be=m.c.div(E||(E=Object(x.a)(["\n    padding: 0 10px;\n"]))),He=function(e){var n=e.popular,t=e.topRated,r=e.airingToday,a=e.error,i=e.loading;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(be.a,{children:Object(v.jsx)("title",{children:"Tv Shows | Unchaptered"})}),i?Object(v.jsx)(ze,{}):Object(v.jsxs)(Be,{children:[n&&n.length>0&&Object(v.jsx)(ve,{title:"Popular Tv Shows",children:n.map((function(e){return Object(v.jsx)(Se,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4),isMovie:!1},e.id)}))}),t&&t.length>0&&Object(v.jsx)(ve,{title:"Top Rated Tv Shows",children:t.map((function(e){return Object(v.jsx)(Se,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4),isMovie:!1},e.id)}))}),r&&r.length>0&&Object(v.jsx)(ve,{title:"Airing Today Tv Shows",children:r.map((function(e){return Object(v.jsx)(Se,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4),isMovie:!1},e.id)}))}),a&&Object(v.jsx)(Ce,{type:"error",text:a,color:"rgba(255, 255,190,1)",background:"rgba(200, 90, 60,1.0)"})]})]})},Ae=function(e){Object(h.a)(t,e);var n=Object(g.a)(t);function t(){var e;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state={popular:null,topRated:null,airingToday:null,error:null,loading:!0},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(S.a)(k.a.mark((function e(){var n,t,r,a,i,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie();case 3:return n=e.sent,t=n.data.results,e.next=7,ce();case 7:return r=e.sent,a=r.data.results,e.next=11,oe();case 11:i=e.sent,c=i.data.results,this.setState({popular:t,topRated:a,airingToday:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find Tv information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.popular,t=e.topRated,r=e.airingToday,a=e.error,i=e.loading;return Object(v.jsx)(He,{popular:n,topRated:t,airingToday:r,error:a,loading:i})}}]),t}(s.a.Component),De=Ae,Le=m.c.div(J||(J=Object(x.a)(["\n    /* navTop 56px main padding-top 15px*3  */\n    width: 100%;\n    height: calc(100vh - 56px);\n    position: relative;\n    display: grid;\n    padding: 50px;\n    gap: 20px;\n    grid-template-columns: 1fr 3fr;\n    @media screen and (max-width:1500px){\n        grid-template-columns: 1fr 2fr;\n    }\n    @media screen and (max-width:1200px){\n        grid-template-columns: 1fr 1.5fr;\n    }\n    @media screen and (max-width:900px) {\n        grid-template-columns: 1fr 1fr;\n    }\n    @media screen and (max-width: 600px){\n        grid-template-rows: 4fr 1fr;\n        grid-template-columns: 1fr;\n    }\n"]))),qe=m.c.div(V||(V=Object(x.a)(["\n    position: absolute;\n    z-index:0;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n    filter: blur(3px);\n    opacity: 0.3;\n"])),(function(e){return e.bgImage})),Ee=m.c.div(G||(G=Object(x.a)(["\n    position: relative;\n    z-index: 1;\n    display: flex;\n    height: 100%;\n\n"]))),Je=m.c.div(K||(K=Object(x.a)(["\n    z-index:2;\n    width: 100%;\n    height: 100%;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n    /* @media screen and (max-width: 600px){\n        width:80%;\n        background-size: scale-down;\n    } */\n"])),(function(e){return e.bgImage})),Ve=m.c.div(Q||(Q=Object(x.a)(["\ndisplay: flex;\nflex-direction: column;\n"]))),Ge=m.c.span(W||(W=Object(x.a)(["\nmargin: 0 3px;\n"]))),Ke=m.c.span(X||(X=Object(x.a)(["\n    font-size: 26px;\n    margin-bottom: 10px;\n    @media screen and (max-width:1500px){\n        font-weight: 24px;\n    }\n    @media screen and (max-width:1200px){\n        font-size: 22px;\n    }\n    @media screen and (max-width:900px) {\n        font-size: 20px;\n    }\n    @media screen and (max-width: 600px){\n        font-size: 18px;\n    }\n"]))),Qe=m.c.div(Y||(Y=Object(x.a)(["\n"]))),We=m.c.span(Z||(Z=Object(x.a)(["\n    opacity: 0.5;\n    margin-bottom: 10px;\n    @media screen and (max-width: 600px){\n        font-size: 14px;\n    }\n"]))),Xe=(m.c.span($||($=Object(x.a)(["\n    opacity: 0.5;\n"]))),m.c.p(ee||(ee=Object(x.a)(["\n    opacity: 0.5;\n    @media screen and (max-width: 600px){\n        font-size: 14px;\n    }\n"])))),Ye=function(e){var n=e.result;e.error;return e.loading?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(be.a,{children:Object(v.jsx)("title",{children:"Loading... | Unchaptered"})}),Object(v.jsx)(ze,{})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(be.a,{children:Object(v.jsxs)("title",{children:[n.original_title?n.original_title:n.original_name," | Unchaptered"]})}),Object(v.jsxs)(Le,{children:[Object(v.jsx)(qe,{bgImage:"https://image.tmdb.org/t/p/original".concat(n.backdrop_path)}),Object(v.jsx)(Ee,{children:Object(v.jsx)(Je,{bgImage:n.poster_path?"https://image.tmdb.org/t/p/original".concat(n.poster_path):t(38)})}),Object(v.jsxs)(Ve,{children:[Object(v.jsx)(Ke,{children:n.original_title?n.original_title:n.original_name}),Object(v.jsxs)(Qe,{children:[Object(v.jsx)(We,{children:n.release_date?n.release_date.substring(0,4):n.first_air_date.substring(0,4)}),Object(v.jsx)(Ge,{children:" \u25fd "}),Object(v.jsxs)(We,{children:[n.runtime?n.runtime:n.episode_run_time[0]," MIN "]}),Object(v.jsx)(Ge,{children:" \u25fd "}),Object(v.jsx)(We,{children:n.genres&&n.genres.map((function(e,t){return t===n.genres.length+1?"".concat(e.name):"".concat(e.name," / ")}))})]}),Object(v.jsx)(Xe,{children:n.overview})]})]})]})},Ze=function(e){Object(h.a)(t,e);var n=Object(g.a)(t);function t(e){var r;Object(p.a)(this,t),r=n.call(this,e);var a=e.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(S.a)(k.a.mark((function e(){var n,t,r,a,i,c,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,t=n.match.params.id,r=n.history.push,a=this.state.isMovie,i=parseInt(t),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(c=null,e.prev=6,!a){e.next=13;break}return e.next=10,he(i);case 10:e.t0=e.sent,e.next=16;break;case 13:return e.next=15,se(i);case 15:e.t0=e.sent;case 16:o=e.t0,c=o.data,e.next=23;break;case 20:e.prev=20,e.t1=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:c}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.result,t=e.error,r=e.loading;return Object(v.jsx)(Ye,{result:n,error:t,loading:r})}}]),t}(s.a.Component),$e=Ze,en=m.c.div(ne||(ne=Object(x.a)(["\nwidth: 100%;\ndisplay: flex;\nflex-direction: column;\n"]))),nn=m.c.form(te||(te=Object(x.a)(["\nwidth: 100%;\ndisplay: flex;\njustify-content: center;\n"]))),tn=m.c.input(re||(re=Object(x.a)(["\nwidth: 100%;\nmax-width: 500px;\nheight: 28px;\nfont-size: 18px;\npadding-left: 15px;\nbackground-color: rgba(255,255,255,0.1);\n    &::placeholder{\n        font-size: 14px;\n    }\n"]))),rn=function(e){var n=e.movieResults,t=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading,c=e.handleSubmit,o=e.updateTerm;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(be.a,{children:Object(v.jsx)("title",{children:"Search | Unchaptered"})}),Object(v.jsxs)(en,{children:[Object(v.jsx)(nn,{onSubmit:c,children:Object(v.jsx)(tn,{placeholder:"Search Movies or Tv Shows...",defaultValue:r,onChange:o})}),i?Object(v.jsx)(ze,{}):Object(v.jsxs)(v.Fragment,{children:[n&&n.length>0&&Object(v.jsx)(ve,{title:"Movie Results",children:n.map((function(e){return Object(v.jsx)(Se,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))}),t&&t.length>0&&Object(v.jsx)(ve,{title:"Tv Shows Results",children:t.map((function(e){return Object(v.jsx)(Se,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4),isMovie:!1},e.id)}))}),a&&Object(v.jsx)(Ce,{type:"Error",text:a,color:"rgba(255, 255,190,1)",background:"rgba(200, 90, 60,1.0)"}),n&&t&&n.length<1&&t.length<1&&Object(v.jsx)(Ce,{type:"404",text:"Nothing Found",color:"rgba(180, 200, 255,1)",background:"rgba(60, 90, 200,1.0)"})]})]})]})},an=function(e){Object(h.a)(t,e);var n=Object(g.a)(t);function t(){var e;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},e.handleSubmit=function(n){n.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(n){var t=n.target.value;e.setState({searchTerm:t})},e.searchByTerm=Object(S.a)(k.a.mark((function n(){var t,r,a,i,c;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.state.searchTerm,e.setState({loading:!0}),n.prev=2,n.next=5,ge(t);case 5:return r=n.sent,a=r.data.results,n.next=9,le(t);case 9:i=n.sent,c=i.data.results,e.setState({movieResults:a,tvResults:c}),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(2),e.setState({error:"Can't find results"});case 17:return n.prev=17,e.setState({loading:!1}),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[2,14,17,20]])}))),e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state,n=e.movieResults,t=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading;return Object(v.jsx)(rn,{movieResults:n,tvResults:t,searchTerm:r,error:a,loading:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),t}(s.a.Component),cn=an,on=function(){return Object(v.jsx)(b.a,{children:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(y,{}),Object(v.jsxs)(j.d,{children:[Object(v.jsx)(j.b,{path:"/",exact:!0,component:Ie}),Object(v.jsx)(j.b,{path:"/tv",exact:!0,component:De}),Object(v.jsx)(j.b,{path:"/search",component:cn}),Object(v.jsx)(j.b,{path:"/movie/:id",component:$e}),Object(v.jsx)(j.b,{path:"/tv/:id",component:$e}),Object(v.jsx)(j.a,{from:"*",to:"/"})]})]})})},sn=t(47),ln=Object(m.a)(ae||(ae=Object(x.a)(["\n    ",";\n    a {\n        color:inherit;\n        text-decoration:initial;\n    }\n    button {\n        color:inherit;\n        border: initial;\n        background-color: initial;\n        padding:0;\n        margin:0;\n    }\n    input {\n        opacity: 0.5;\n        color:inherit;\n        border: initial;\n        background-color: inherit;\n        &:focus {\n            outline: none;\n        }\n    }\n    * {\n        box-sizing: border-box;\n    }\n    body {\n        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size: 15px;\n\n        color: rgba(255,255,255,1);\n        background-color: rgba(25,25,25,1);\n\n        /* 56px + 25px */\n        padding-top: 56px;\n\n        min-height: 100vh;\n        height: auto;\n    }\n    svg {\n        width: 20px;\n        padding: 0;\n        margin: 0;\n    }\n"])),sn.a),dn=function(e){Object(h.a)(t,e);var n=Object(g.a)(t);function t(){return Object(p.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(on,{}),Object(v.jsx)(ln,{})]})}}]),t}(s.a.Component),pn=dn;d.a.render(Object(v.jsx)(pn,{}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.eeb861d6.chunk.js.map