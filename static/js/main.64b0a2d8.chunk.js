(this["webpackJsonpmovie-cards-library-crud"]=this["webpackJsonpmovie-cards-library-crud"]||[]).push([[0],{27:function(e,t,n){e.exports=n(48)},32:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(23),o=n.n(r),l=(n(32),n(13)),c=n(1),u=n(3),s=n.n(u),m=n(12),d=n(4),v=n(5),h=n(8),p=n(7),f=n(6),b=(n(34),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){var e=this.props.movie,t=e.id,n=e.title,a=e.subtitle,r=e.imagePath;return i.a.createElement("div",{"data-testid":"movie-card",className:"movie-card"},i.a.createElement("img",{src:r,alt:n}),i.a.createElement("div",{className:"card-info"},i.a.createElement("h2",null,n),i.a.createElement("h1",null,a),i.a.createElement("div",{className:"link-container"},i.a.createElement(l.b,{to:"/movies/".concat(t)},"VER DETALHES"))))}}]),n}(i.a.Component)),g=n(25),E=n.n(g),y=(n(40),function(){return i.a.createElement("div",{className:"loading-container"},i.a.createElement(E.a,{type:"spin",color:"white",height:60,width:60}))}),k=n(17),O=n(15),j=(n(41),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state=Object(O.a)({},e.movie),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(v.a)(n,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(k.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("div",{className:"form-field"},i.a.createElement("label",{htmlFor:"movie_title"},"T\xedtulo",i.a.createElement("br",null),i.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}})))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("div",{className:"form-field"},i.a.createElement("label",{htmlFor:"movie_subtitle"},"Subt\xedtulo",i.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}})))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",{className:"row form-field"},i.a.createElement("label",{htmlFor:"movie_image"},"Imagem",i.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}})))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("div",{className:"form-field"},i.a.createElement("label",{htmlFor:"movie_storyline"},"Sinopse",i.a.createElement("br",null),i.a.createElement("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}})))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("div",{className:"form-field"},i.a.createElement("label",{htmlFor:"movie_genre"},"G\xeanero",i.a.createElement("br",null),i.a.createElement("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)}},i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense"),i.a.createElement("option",{value:"fantasy"},"Fantasia"))))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("div",{className:"form-field"},i.a.createElement("label",{htmlFor:"movie_rating"},"Avalia\xe7\xe3o",i.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",Number(t.target.value))}})))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("div",{id:"button-container"},i.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",null,this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()))}}]),n}(i.a.Component)),S=n(26),w=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"},{id:6,title:"Guerra de naves",subtitle:"Velozes e Furiosos 9",storyline:"O longa vem dando continuidade \xe0s corridas eletrizantes da equipe de amigos liderada por Dominic Toretto.",rating:5,imagePath:"https://www.universalpics.com.br/tl_files/content/movies/fast9/posters/03.jpg",bookmarked:!0,genre:"action"}];localStorage.setItem("movies",JSON.stringify(w));var I=function(){return JSON.parse(localStorage.getItem("movies"))},M=function(e){return localStorage.setItem("movies",JSON.stringify(e))},_=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},N=function(e){var t=I().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){_(t)(e)}))},C=function(e){return new Promise((function(t){var n=I().map((function(t){return t.id===parseInt(e.id,10)?Object(O.a)(Object(O.a)({},t),e):t}));M(n),_("OK")(t)}))},R=function(e){return new Promise((function(t){var n=I(),a=n[n.length-1].id+1,i=Object(O.a)(Object(O.a)({},e),{},{id:a});n=[].concat(Object(S.a)(n),[i]),M(n),_("OK")(t)}))},x=function(e){var t=I();return t=t.filter((function(t){return t.id!==parseInt(e,10)})),M(t),new Promise((function(e){_({status:"OK"})(e)}))},P=(n(42),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).getMovies=e.getMovies.bind(Object(h.a)(e)),e.state={movies:[]},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"getMovies",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=I();_(t)(e)}));case 2:t=e.sent,this.setState({movies:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderMovies",value:function(e,t){return i.a.createElement("div",{id:"movies"},e.map((function(e,n){return n>=5*(t-1)&&n<=5*t-1?i.a.createElement(b,{key:e.title,movie:e}):null})))}},{key:"render",value:function(){var e=this.state.movies;return 0===e.length?i.a.createElement(y,null):i.a.createElement("div",{"data-testid":"movie-list",id:"movie-list"},i.a.createElement("header",null,i.a.createElement("h1",null,"My Movie Library"),e.length>1&&i.a.createElement(l.b,{to:"/movies/new",id:"add-button"},"ADICIONAR FILME")),i.a.createElement("main",null,i.a.createElement("h3",null,"Destaques"),e.length>1&&this.renderMovies(e,1),i.a.createElement("h3",null,"Recem adicionados"),e.length>1&&this.renderMovies(e,2)))}}]),n}(a.Component)),A=(n(43),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).getMovie=a.getMovie.bind(Object(h.a)(a)),a.state={movie:[],loading:!0},a}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"handleDelete",value:function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovie",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match,n=t.params,e.next=4,N(n.id);case 4:a=e.sent,this.setState({movie:a,loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.movie;if(t.loading)return i.a.createElement(y,null);var a=n.id,r=n.title,o=n.storyline,c=n.imagePath,u=n.genre,s=n.rating,m=n.subtitle;return i.a.createElement("div",{"data-testid":"movie-details",id:"movie-container"},i.a.createElement("div",{id:"movie"},i.a.createElement("img",{alt:"Movie Cover",src:"".concat(c)}),i.a.createElement("div",{className:"movie-info"},i.a.createElement("h1",null,"Title: ".concat(r)),i.a.createElement("p",null,"Subtitle: ".concat(m)),i.a.createElement("p",null,"Storyline: ".concat(o)),i.a.createElement("p",null,"Genre: ".concat(u)),i.a.createElement("p",null,"Rating: ".concat(s))),i.a.createElement("div",{id:"movie-buttons"},i.a.createElement(l.b,{to:"/"},"VOLTAR"),i.a.createElement(l.b,{to:"/movies/".concat(a,"/edit")},"EDITAR"),i.a.createElement(l.b,{to:"/",onClick:function(){return e.handleDelete(a)}},"DELETAR"))))}}]),n}(a.Component)),F=(n(44),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={shouldRedirect:!1},a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(v.a)(n,[{key:"handleSubmit",value:function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t);case 2:this.setState({shouldRedirect:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.shouldRedirect?i.a.createElement(c.a,{to:"/"}):i.a.createElement("div",{"data-testid":"new-movie",id:"new-movie"},i.a.createElement("div",{id:"new-movie-content"},i.a.createElement("h1",null,"Adicionar filme"),i.a.createElement(j,{onSubmit:this.handleSubmit})))}}]),n}(a.Component)),T=(n(45),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={movie:"",shouldRedirect:!1,status:"loading"},a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.getMovie=a.getMovie.bind(Object(h.a)(a)),a}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"handleSubmit",value:function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:this.setState({shouldRedirect:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovie",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match,n=t.params,e.next=4,N(n.id);case 4:a=e.sent,this.setState({movie:a,status:""});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.status,n=e.shouldRedirect,a=e.movie;return n?i.a.createElement(c.a,{to:"/"}):"loading"===t?i.a.createElement(y,null):i.a.createElement("div",{"data-testid":"edit-movie",id:"edit-movie-container"},i.a.createElement("div",{id:"edit-movie-content"},i.a.createElement("h1",null,"Editar filme"),i.a.createElement(j,{movie:a,onSubmit:this.handleSubmit})))}}]),n}(a.Component)),D=(n(46),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{"data-testid":"404-error",id:"not-found"},i.a.createElement("h3",null,"Not Found - 404"),i.a.createElement("br",null),i.a.createElement("strong",null,"P\xe1gina n\xe3o foi encotrada :/"))}}]),n}(a.Component));n(47);var G=function(){return i.a.createElement(l.a,null,i.a.createElement(c.d,null,i.a.createElement(c.b,{exact:!0,path:"/",component:P}),i.a.createElement(c.b,{path:"/movies/new",component:F}),i.a.createElement(c.b,{path:"/movies/:id",render:function(e){return i.a.createElement(A,e)}}),i.a.createElement(c.b,{path:"/movies/:id/edit",render:function(e){return i.a.createElement(T,e)}}),i.a.createElement(c.b,{component:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.64b0a2d8.chunk.js.map