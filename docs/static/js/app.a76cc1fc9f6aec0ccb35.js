webpackJsonp([1],{0:function(t,s){},"3jSC":function(t,s){},"6rm0":function(t,s){},Ap5o:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("MVMM"),a=e("xB4m"),n=e.n(a),r=(e("l4ih"),{render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]});var o=e("vSla")({name:"App"},r,!1,function(t){e("6rm0")},null,null).exports,c=e("zO6J"),l={render:function(){var t=this.$createElement;return(this._self._c||t)("el-alert",{attrs:{title:"豆瓣",type:"error"}})},staticRenderFns:[]};var v=e("vSla")(null,l,!1,function(t){e("bHTU")},"data-v-8a449eb0",null).exports,u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"navbar"},[s("router-link",{attrs:{to:"/movie"}},[s("i",{staticClass:"el-icon-service"}),this._v("\n      热映影片\n  ")]),this._v(" "),s("router-link",{attrs:{to:"/event"}},[s("i",{staticClass:"el-icon-star-off"}),this._v("\n      同城活动\n  ")]),this._v(" "),s("router-link",{attrs:{to:"/about"}},[s("i",{staticClass:"el-icon-share"}),this._v("\n      关于豆瓣\n  ")])],1)},staticRenderFns:[]};var m=e("vSla")({},u,!1,function(t){e("3jSC")},"data-v-1f01fed1",null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"loading"},[s("i",{staticClass:"el-icon-loading"}),this._v(" "),s("div",[this._v("拼命加载中...")])])}]};var p=e("vSla")(null,d,!1,function(t){e("wLQm")},"data-v-8d2324bc",null).exports,_=e("IG6K"),h={name:"movie",components:{loading:p,Header:v,Navbar:m},data:function(){return{isOpen:!0,mType:"in_theaters",cityList:[],movieList:[]}},mounted:function(){this.loadCityList(),this.loadData(this.mType)},methods:{loadCityList:function(){this.$http.jsonp("https://api.douban.com/v2/loc/list",{params:{count:48}}).then(function(t){this.cityList=t.body.locs})},loadData:function(t){this.$http.jsonp("https://api.douban.com/v2/movie/"+t,{params:{city:"108288",count:100}}).then(function(t){this.movieList=t.body.subjects,this.isOpen=!1,setTimeout(function(){var t=document.querySelector(".wrapper");this.scroll=new _.a(t,{click:!0,taps:!0})},1e3)})}}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Header"),t._v(" "),e("div",{staticClass:"movie"},[e("div",{ref:"wrapper",staticClass:"wrapper"},[e("ul",{staticClass:"content movieList"},t._l(t.movieList,function(s){return e("li",[e("router-link",{staticClass:"item",attrs:{to:{path:"/detail/"+s.id}}},[e("img",{attrs:{src:s.images.medium,alt:"加载失败"}}),t._v(" "),e("div",{staticClass:"right"},[e("h3",{staticClass:"m-title"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"directors"},[t._v("导演："+t._s(s.directors[0].name))]),t._v(" "),e("div",{staticClass:"casts"},[t._v("\r\n                          主演："),t._l(s.casts,function(s){return e("span",[t._v(t._s(s.name)+"、")])})],2),t._v(" "),e("div",{staticClass:"genres"},[t._v("\r\n                          类型：\r\n                          "),t._l(s.genres,function(s){return e("span",[t._v("\r\n                              "+t._s(s)+"/\r\n                          ")])})],2),t._v(" "),e("span",[t._v("豆瓣评分："+t._s(s.rating.average))])])])],1)}))]),t._v(" "),e("loading",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],attrs:{isOpen:t.isOpen}})],1),t._v(" "),e("Navbar")],1)},staticRenderFns:[]};var g=e("vSla")(h,f,!1,function(t){e("Ap5o")},"data-v-7d3a5846",null).exports,C={name:"movie",components:{loading:p,Header:v,Navbar:m}},b={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("Header"),this._v(" "),s("div",{staticClass:"event"},[this._v("\r\n      这是一个关于同城活动的页面\r\n  ")]),this._v(" "),s("Navbar")],1)},staticRenderFns:[]},y=e("vSla")(C,b,!1,null,null,null).exports,w={name:"movie",components:{loading:p,Header:v,Navbar:m}},O={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("Header"),this._v(" "),s("div",{staticClass:"about"},[this._v("\r\n      查询影院热映电影，免费在观看的新片。更有丰富电影专题，电影分类，提供最全面影片信息，权威电影评分，忠实影迷的电影评论。\r\n  ")]),this._v(" "),s("Navbar")],1)},staticRenderFns:[]};var N=e("vSla")(w,O,!1,function(t){e("TX23")},"data-v-45060c64",null).exports,$={name:"detail",components:{loading:p},data:function(){return{id:"",isOpen:!0,movie:{images:{large:"",medium:"",small:""}}}},mounted:function(){this.id=this.$route.params.id,this.getDetail(this.id)},methods:{getDetail:function(t){this.$http.jsonp("https://douban.uieee.com/v2/movie/subject/"+t).then(function(t){var s=t.data,e="";for(var i in s.genres)e+=s.genres[i]+"/";e=e.substring(0,e.length-1);var a="国家：";for(var n in s.countries)a+=s.countries[n]+"/";a=a.substring(0,a.length-"/".length);var r={id:s.id,title:s.title,images:s.images,collectCount:s.collect_count,commentsCount:s.comments_count,wishCount:s.wish_count,reviewsCount:s.reviews_count,popularReviews:s.popular_reviews,popularComments:s.popular_comments,countries:a,doCount:s.do_count,genres:e,originalTitle:"原名："+s.original_title,rating:s.rating,ratingsCount:s.ratings_count+"人",subtype:s.subtype,summary:s.summary,shareUrl:s.share_url,year:s.year,tags:s.tags};this.movie=r,this.isOpen=!1})}}},x={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"top"},[e("i",{staticClass:"el-icon-arrow-left",on:{click:function(s){t.$router.back(-1)}}}),t._v("\r\n        "+t._s(t.movie.title)+"\r\n        ")]),t._v(" "),e("div",{staticClass:"session-poster session-poster-spacing"},[e("img",{staticClass:"poster",attrs:{src:t.movie.images.large,alt:""}})]),t._v(" "),e("div",{staticClass:"summary-session"},[e("div",{staticClass:"movie-summary"},[e("span",{staticClass:"name"},[t._v(t._s(t.movie.title))]),t._v(" "),e("span",{staticClass:"subtype"},[t._v(t._s(t.movie.year)+"/"+t._s(t.movie.genres))]),t._v(" "),e("span",{staticClass:"origin-name"},[t._v(t._s(t.movie.originalTitle))]),t._v(" "),e("span",{staticClass:"countries"},[t._v(t._s(t.movie.countries))])]),t._v(" "),e("div",{staticClass:"movie-rating"},[e("span",{staticClass:"average"},[t._v(t._s(t.movie.rating.average))]),t._v(" "),e("span",{staticClass:"rating"}),t._v(" "),e("span",{staticClass:"ratings_count"},[t._v(t._s(t.movie.ratingsCount))])])]),t._v(" "),e("div",{staticClass:"desc-session"},[e("span",{staticClass:"title"},[t._v("简介")]),t._v(" "),e("span",{staticClass:"desc-wrapper"},[t._v(t._s(t.movie.summary))])]),t._v(" "),e("div",{staticClass:"director-casts-session"},[e("span",{staticClass:"title"},[t._v("影人")]),t._v(" "),t._l(t.movie.directorsAndCasts,function(s){return e("div",[e("div",{staticClass:"star"},[e("img",{attrs:{src:s.avatars.small,alt:""}}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(s.name))])])])})],2)]),t._v(" "),e("loading",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],attrs:{isOpen:t.isOpen}})],1)},staticRenderFns:[]};var S=e("vSla")($,x,!1,function(t){e("yNXN")},"data-v-93f3aede",null).exports;i.default.use(c.a);var E=new c.a({routes:[{path:"/",redirect:"/movie"},{path:"/movie",name:"Movie",component:g},{path:"/event",name:"Event",component:y},{path:"/about",name:"About",component:N},{path:"/detail/:id",name:"Detail",component:S}]}),H=e("OolZ");i.default.use(H.a),i.default.use(n.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:E,components:{App:o},template:"<App/>"})},TX23:function(t,s){},bHTU:function(t,s){},l4ih:function(t,s){},wLQm:function(t,s){},yNXN:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.a76cc1fc9f6aec0ccb35.js.map