webpackJsonp([0],{0:function(t,n){},"6QDn":function(t,n){},"8HZn":function(t,n){},F0d3:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("7+uW"),i={render:function(){var t=this.$createElement;return(this._self._c||t)("header",{staticClass:"header"},[this._v("\n    豆瓣\n")])},staticRenderFns:[]};var a=e("VU/8")(null,i,!1,function(t){e("QLZd")},"data-v-57d1d68a",null).exports,r=e("/ocq"),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"loading"},[n("div",{staticClass:"spinner"})])}]};var c={name:"movie",components:{loading:e("VU/8")(null,o,!1,function(t){e("F0d3")},"data-v-407419fc",null).exports},data:function(){return{isOpen:!0,mType:"in_theaters",cityList:[],movieList:[]}},mounted:function(){this.loadCityList(),this.loadData(this.mType)},methods:{loadCityList:function(){this.$http.jsonp("https://api.douban.com/v2/loc/list",{params:{count:48}}).then(function(t){this.cityList=t.body.locs})},loadData:function(t){this.$http.jsonp("https://api.douban.com/v2/movie/"+t,{params:{city:"108288",count:100}}).then(function(t){this.movieList=t.body.subjects,this.isOpen=!1})}}},l={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"movie"},[e("loading",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],attrs:{isOpen:t.isOpen}}),t._v(" "),e("div",{staticClass:"movieList"},t._l(t.movieList,function(n){return e("div",[e("a",{attrs:{href:n.alt}},[e("img",{attrs:{src:n.images.medium,alt:"加载失败"}}),t._v(" "),e("div",{staticClass:"right"},[e("h3",{staticClass:"m-title"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"directors"},[t._v("导演："+t._s(n.directors[0].name))]),t._v(" "),e("div",{staticClass:"casts"},[t._v("\n                        主演："),t._l(n.casts,function(n){return e("span",[t._v(t._s(n.name)+"、")])})],2),t._v(" "),e("div",{staticClass:"genres"},[t._v("\n                        类型：\n                        "),t._l(n.genres,function(n){return e("span",[t._v("\n                            "+t._s(n)+"/\n                        ")])})],2),t._v(" "),e("span",[t._v("豆瓣评分："+t._s(n.rating.average))])])])])}))],1)},staticRenderFns:[]};var u=e("VU/8")(c,l,!1,function(t){e("8HZn")},"data-v-72de4c89",null).exports,v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"event"},[this._v("\n    同城活动\n")])},staticRenderFns:[]},d=e("VU/8")(null,v,!1,null,null,null).exports,p={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"about"},[this._v("\n    关于豆瓣\n")])},staticRenderFns:[]},h=e("VU/8")(null,p,!1,null,null,null).exports;s.a.use(r.a);var _=new r.a({routes:[{path:"/",redirect:"/movie"},{path:"/movie",name:"Movie",component:u},{path:"/event",name:"Event",component:d},{path:"/about",name:"About",component:h}]}),m={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"navbar"},[n("router-link",{attrs:{to:"/movie"}},[this._v("热映影片")]),this._v(" "),n("router-link",{attrs:{to:"/event"}},[this._v("同城活动")]),this._v(" "),n("router-link",{attrs:{to:"/about"}},[this._v("关于豆瓣")])],1)},staticRenderFns:[]};var f={name:"App",components:{Header:a,Navbar:e("VU/8")({},m,!1,function(t){e("6QDn")},"data-v-5274bc20",null).exports}},b={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),this._v(" "),n("router-view"),this._v(" "),n("Navbar")],1)},staticRenderFns:[]};var C=e("VU/8")(f,b,!1,function(t){e("bJO2")},null,null).exports,g=e("LyPZ");s.a.use(g.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:_,components:{App:C},template:"<App/>"})},QLZd:function(t,n){},bJO2:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.2c8cddd4ba5f53a7324a.js.map