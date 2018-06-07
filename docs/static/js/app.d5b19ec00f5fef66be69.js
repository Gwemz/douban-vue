webpackJsonp([0],{"/pun":function(t,s){},0:function(t,s){},"1i5o":function(t,s){},"9GJS":function(t,s){},KwDK:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("MVMM"),i={render:function(){var t=this.$createElement;return(this._self._c||t)("header",{staticClass:"header"},[this._v("\n    豆瓣\n")])},staticRenderFns:[]};var a=e("vSla")(null,i,!1,function(t){e("1i5o")},"data-v-0a6c5f33",null).exports,r=e("zO6J"),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"loading"},[s("div",{staticClass:"spinner"})])}]};var c={name:"movie",components:{loading:e("vSla")(null,o,!1,function(t){e("/pun")},"data-v-407419fc",null).exports},data:function(){return{isOpen:!0,mType:"in_theaters",cityList:[],movieList:[]}},mounted:function(){this.loadCityList(),this.loadData(this.mType)},methods:{loadCityList:function(){this.$http.jsonp("https://api.douban.com/v2/loc/list",{params:{count:48}}).then(function(t){this.cityList=t.body.locs})},loadData:function(t){this.$http.jsonp("https://api.douban.com/v2/movie/"+t,{params:{city:"108288",count:100}}).then(function(t){this.movieList=t.body.subjects,this.isOpen=!1})}}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"movie"},[e("loading",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],attrs:{isOpen:t.isOpen}}),t._v(" "),e("div",{staticClass:"movieList"},t._l(t.movieList,function(s){return e("div",[e("router-link",{staticClass:"item",attrs:{to:{path:"/detail/"+s.id}}},[e("img",{attrs:{src:s.images.medium,alt:"加载失败"}}),t._v(" "),e("div",{staticClass:"right"},[e("h3",{staticClass:"m-title"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"directors"},[t._v("导演："+t._s(s.directors[0].name))]),t._v(" "),e("div",{staticClass:"casts"},[t._v("\n                        主演："),t._l(s.casts,function(s){return e("span",[t._v(t._s(s.name)+"、")])})],2),t._v(" "),e("div",{staticClass:"genres"},[t._v("\n                        类型：\n                        "),t._l(s.genres,function(s){return e("span",[t._v("\n                            "+t._s(s)+"/\n                        ")])})],2),t._v(" "),e("span",[t._v("豆瓣评分："+t._s(s.rating.average))])])])],1)}))],1)},staticRenderFns:[]};var v=e("vSla")(c,l,!1,function(t){e("9GJS")},"data-v-26d7b274",null).exports,u={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"event"},[this._v("\n    这是一个关于同城活动的页面\n")])},staticRenderFns:[]},m=e("vSla")(null,u,!1,null,null,null).exports,d={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"about"},[this._v("\n    查询影院热映电影，免费在观看的新片。更有丰富电影专题，电影分类，提供最全面影片信息，权威电影评分，忠实影迷的电影评论。\n")])},staticRenderFns:[]};var _=e("vSla")(null,d,!1,function(t){e("VkEy")},"data-v-3b792710",null).exports,p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"session-poster session-poster-spacing"},[e("img",{staticClass:"poster",attrs:{src:t.movie.images.large,alt:""}})]),t._v(" "),e("div",{staticClass:"summary-session"},[e("div",{staticClass:"movie-summary"},[e("span",{staticClass:"name"},[t._v(t._s(t.movie.title))]),t._v(" "),e("span",{staticClass:"subtype"},[t._v(t._s(t.movie.year)+"/"+t._s(t.movie.genres))]),t._v(" "),e("span",{staticClass:"origin-name"},[t._v(t._s(t.movie.originalTitle))]),t._v(" "),e("span",{staticClass:"countries"},[t._v(t._s(t.movie.countries))])]),t._v(" "),e("div",{staticClass:"movie-rating"},[e("span",{staticClass:"average"},[t._v(t._s(t.movie.rating.average))]),t._v(" "),e("span",{staticClass:"rating"}),t._v(" "),e("span",{staticClass:"ratings_count"},[t._v(t._s(t.movie.ratingsCount))])])]),t._v(" "),e("div",{staticClass:"desc-session"},[e("span",{staticClass:"title"},[t._v("简介")]),t._v(" "),e("span",{staticClass:"desc-wrapper"},[t._v(t._s(t.movie.summary))])]),t._v(" "),e("div",{staticClass:"director-casts-session"},[e("span",{staticClass:"title"},[t._v("影人")]),t._v(" "),t._l(t.movie.directorsAndCasts,function(s){return e("div",[e("div",{staticClass:"star"},[e("img",{attrs:{src:s.avatars.small,alt:""}}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(s.name))])])])})],2)])},staticRenderFns:[]};var h=e("vSla")({name:"detail",data:function(){return{id:"",movie:{}}},mounted:function(){this.id=this.$route.params.id,this.getDetail(this.id)},methods:{getDetail:function(t){this.$http.jsonp("https://douban.uieee.com/v2/movie/subject/"+t).then(function(t){var s=t.data,e="";for(var n in s.genres)e+=s.genres[n]+"/";e=e.substring(0,e.length-1);var i="国家：";for(var a in s.countries)i+=s.countries[a]+"/";i=i.substring(0,i.length-"/".length);var r={id:s.id,title:s.title,images:s.images,collectCount:s.collect_count,commentsCount:s.comments_count,wishCount:s.wish_count,reviewsCount:s.reviews_count,popularReviews:s.popular_reviews,popularComments:s.popular_comments,countries:i,doCount:s.do_count,genres:e,originalTitle:"原名："+s.original_title,rating:s.rating,ratingsCount:s.ratings_count+"人",subtype:s.subtype,summary:s.summary,shareUrl:s.share_url,year:s.year,tags:s.tags};this.movie=r})}}},p,!1,function(t){e("yacO")},"data-v-b88df92a",null).exports;n.a.use(r.a);var f=new r.a({routes:[{path:"/",redirect:"/movie"},{path:"/movie",name:"Movie",component:v},{path:"/event",name:"Event",component:m},{path:"/about",name:"About",component:_},{path:"/detail/:id",name:"Detail",component:h}]}),g={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"navbar"},[s("router-link",{attrs:{to:"/movie"}},[this._v("热映影片")]),this._v(" "),s("router-link",{attrs:{to:"/event"}},[this._v("同城活动")]),this._v(" "),s("router-link",{attrs:{to:"/about"}},[this._v("关于豆瓣")])],1)},staticRenderFns:[]};var C={name:"App",components:{Header:a,Navbar:e("vSla")({},g,!1,function(t){e("TZMl")},"data-v-5274bc20",null).exports}},b={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("Header"),this._v(" "),s("router-view"),this._v(" "),s("Navbar")],1)},staticRenderFns:[]};var y=e("vSla")(C,b,!1,function(t){e("KwDK")},null,null).exports,w=e("OolZ");n.a.use(w.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:f,components:{App:y},template:"<App/>"})},TZMl:function(t,s){},VkEy:function(t,s){},yacO:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.d5b19ec00f5fef66be69.js.map