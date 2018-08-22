<template>
<div>
  <Header @showcitylist="showCitySelect" :cityname="cityName"></Header>
  <div class="movie">
      <div class="wrapper" ref="wrapper">
        <ul class="content movieList"> 
            <li v-for="m of movieList" :key="m.id">
              <!-- <a :href="m.alt"> -->
              <router-link :to="{path:'/detail/'+ m.id +''}" class="item">
                  <img :src="m.images" alt="加载失败">
                  <div class="right">
                      <h3 class="m-title">{{m.title}}</h3>
                      <div class="directors">导演：{{m.directors}}</div>
                      <div class="casts">主演：{{m.casts}}</div>  
                      <div class="genres">类型：{{m.genres}}</div>
                      <span>豆瓣评分：{{m.rating.average}}</span>
                  </div>
              </router-link>
            </li>
        </ul>
      </div>
      <loading v-show="isOpen" :isOpen="isOpen"></loading>
  </div>
  <Navbar></Navbar>
  <area-select :list="cityList" :show="showcity" @cityarea="citySelect"></area-select>
</div>
</template>
<script>
import Header from "./components/header";
import Navbar from "../components/Navbar";
import loading from "../components/Loading";
import AreaSelect from "./components/AreaSelect";
import axios from "axios";
import Bscroll from "better-scroll";
export default {
  name: "movie",
  components: { 
    loading: loading, 
    Header: Header, 
    Navbar: Navbar,
    AreaSelect: AreaSelect
  },
  data() {
    return {
      isOpen: true,
      mType: "in_theaters",
      cityList: [],
      movieList: [],
      showcity: false,
      cityarea:'108288',
      cityName: '北京'
    };
  },
  mounted() {
    this.loadCityList();
    this.loadData(this.cityarea,this.mType);
  },
  methods: {
    // 城市加载
    loadCityList() {
      // axios.get('/api/loc/list',{
      //   params: {
      //     count: 48
      //   }
      // }).then((data) => {
      //   console.log(data)
      // })
      this.$http
        .jsonp("https://api.douban.com/v2/loc/list", { params: { count: 48 } })
        .then(function(res) {
          this.cityList = res.body.locs;
        });
    },
    // 电影数据加载
    loadData(cityarea,type) {
      axios.get('/api/movie/'+ type +'',{
        params: {
          apikey: "0b2bdeda43b5688921839c8ecb20399b",
          city: cityarea, //北京地区编码
          start: 0,
          count: 100
        }
      }).then(this.handleMovieInfoSucc)
    },
    handleMovieInfoSucc(res){
      let data = res.data.subjects;
      let movieList = [];
      for(let i in data){
        // 导演
        let directors = '';
        let casts = '';
        let genres = '';
        data[i].directors.forEach(function(i){
          directors += i.name + '、'
        })
        directors = directors.slice(0,-1)

        data[i].casts.forEach(function(i){
          casts += i.name + '、'
        })
        casts = casts.slice(0,-1)

        data[i].genres.forEach(function(i){
          genres += i + ' / '
        })
        genres = genres.slice(0,-2)
        let obj = {
          id: data[i].id,
          images: data[i].images.medium,
          title: data[i].title,
          directors: directors,
          casts: casts,
          genres: genres,
          rating: data[i].rating
        }
        movieList.push(obj)
      }
      // this.movieList = res.body.subjects;
      this.movieList = movieList;
      this.isOpen = false;
      let that = this;
      setTimeout(function() {
        that.scroll = new Bscroll(that.$refs.wrapper)
        const options = {
          click: true,
          taps: true
        };
      }, 1000);
    },
    showCitySelect(msg){
      if(msg){
        this.showcity = msg;
      }
    },
    citySelect(msg){
      if(msg.id){
        this.cityarea = msg.id
        this.showcity = msg.show
        this.cityName = msg.name
        this.isOpen = true;
        this.movieList = [];
        this.loadData(this.cityarea,this.mType);
      }else{
        this.showcity = msg.show
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
  .movie
    position: absolute
    top: 2.5rem
    left: 0
    right: 0
    bottom: 2rem
    background: #ffffff
    overflow: hidden
    .wrapper
      height: 100%
      overflow-y: scroll
      .movieList
        display: block
        padding: 0
        margin: 0
        li
          display: block
          border-bottom: 1px solid #e6e6e6
          .item
            display: flex
            flex-direction: row
            align-items: flex-start
            text-decoration: none
            padding: 1rem
            box-sizing: border-box
            color: #606266
            img
              width: 30%
              margin-right: 1.5rem
            .right
              display: flex
              flex-direction: column
              font-size: 1.2rem
              line-height: 2rem
              h3
                margin-top: 0
                color: #303133
                font-size: 1.5rem
                flex-direction: row
                justify-content: flex-start
              h3
              div
              span
                display: flex
                flex-direction: row
                justify-content: flex-start
              .casts
                flex-wrap: wrap;  
</style>
