(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var a=i(9),c=i.n(a),l=(i(15),i(8)),s=i(4),n=i(2),r=(i(16),i(10)),m=i(1),d=(i(17),i(18),i(0)),o=function(e){var t=e.title,i=e.description,a=e.imgUrl,c=e.imdbUrl;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{src:a,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8",children:t})})]}),Object(d.jsxs)("div",{className:"content",children:[i,Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:c,children:"IMDB"})]})]})]})},b=function(e){var t=e.movies;return Object(d.jsx)("div",{className:"movies",children:t.map((function(e){return Object(d.jsx)(o,Object(m.a)({},e),e.imdbId)}))})},j=i(5),h=i.n(j),g=function(e){var t=Object(n.useState)({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),i=Object(s.a)(t,2),a=i[0],c=i[1],l=Object(n.useState)({title:!1,imgUrl:!1,imdbUrl:!1,imdbId:!1}),r=Object(s.a)(l,2),o=r[0],b=r[1];var j=function(){b({title:!a.title,imdbId:!a.imdbId,imdbUrl:!a.imdbUrl,imgUrl:!a.imgUrl})};return Object(d.jsxs)("form",{className:"form",onSubmit:function(t){j(),o.title||o.imdbId||o.imdbUrl||o.imgUrl||(e.addNew(a),c({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})),t.preventDefault()},children:[Object(d.jsx)("input",{className:h()({error:o.title}),type:"text",placeholder:"title",value:a.title,onChange:function(e){c(Object(m.a)(Object(m.a)({},a),{},{title:e.target.value})),b(Object(m.a)(Object(m.a)({},o),{},{title:!1})),j()}}),Object(d.jsx)("input",{type:"text",placeholder:"description",value:a.description,onChange:function(e){c(Object(m.a)(Object(m.a)({},a),{},{description:e.target.value}))}}),Object(d.jsx)("input",{className:h()({error:o.imgUrl}),type:"text",placeholder:"imgUrl",value:a.imgUrl,onChange:function(e){c(Object(m.a)(Object(m.a)({},a),{},{imgUrl:e.target.value})),b(Object(m.a)(Object(m.a)({},o),{},{imgUrl:!1}))}}),Object(d.jsx)("input",{className:h()({error:o.imdbUrl}),type:"text",placeholder:"imdbUrl",value:a.imdbUrl,onChange:function(e){c(Object(m.a)(Object(m.a)({},a),{},{imdbUrl:e.target.value})),b(Object(m.a)(Object(m.a)({},o),{},{imdbUrl:!1}))}}),Object(d.jsx)("input",{className:h()({error:o.imdbId}),type:"text",placeholder:"imdbId",value:a.imdbId,onChange:function(e){c(Object(m.a)(Object(m.a)({},a),{},{imdbId:e.target.value})),b(Object(m.a)(Object(m.a)({},o),{},{imdbId:!1}))}}),Object(d.jsx)("button",{type:"submit",children:"Add"})]})},p=function(){var e=Object(n.useState)(Object(l.a)(r)),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)(b,{movies:i})}),Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsx)(g,{addNew:function(e){a([].concat(Object(l.a)(i),[e]))}})})]})};c.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.0f8d6caa.chunk.js.map