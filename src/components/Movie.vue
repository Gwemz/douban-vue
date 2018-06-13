<template>
<div>
  <Header></Header>
  <div class="movie">
      <div class="wrapper" ref="wrapper">
        <ul class="content movieList"> 
            <li v-for="m in movieList">
              <!-- <a :href="m.alt"> -->
              <router-link :to="{path:'/detail/'+ m.id +''}" class="item">
                  <img :src="m.images.medium" alt="加载失败">
                  <div class="right">
                      <h3 class="m-title">{{m.title}}</h3>
                      <div class="directors">导演：{{m.directors[0].name}}</div>
                      <div class="casts">
                          主演：<span v-for="l in m.casts">{{l.name}}、</span>
                      </div>  
                      <div class="genres">
                          类型：
                          <span v-for="g in m.genres">
                              {{g}}/
                          </span>
                      </div>
                      <span>豆瓣评分：{{m.rating.average}}</span>
                  </div>
              </router-link>
            </li>
            <!-- <li>gfegeg</li> 
            <li>gegeg</li>
            <li>gegege</li>  -->
        </ul>
      </div>
      <loading v-show="isOpen" :isOpen="isOpen"></loading>
      <!-- <header>
          欢迎来到豆瓣
      </header> -->
  </div>
  <Navbar></Navbar>
</div>
  
</template>
<script>
import Header from "./Header";
import Navbar from "./Navbar";
import loading from "./Loading";
import BScroll from "better-scroll";
export default {
  name: "movie",
  components: { loading, Header, Navbar },
  data() {
    return {
      isOpen: true,
      mType: "in_theaters",
      cityList: [],
      movieList: []
    };
  },
  mounted() {
    this.loadCityList();
    this.loadData(this.mType);
  },
  methods: {
    // 城市加载
    loadCityList() {
      this.$http
        .jsonp("https://api.douban.com/v2/loc/list", { params: { count: 48 } })
        .then(function(res) {
          this.cityList = res.body.locs;
        });
    },
    // 电影数据加载
    loadData(type) {
      this.$http
        .jsonp("https://api.douban.com/v2/movie/" + type + "", {
          params: {
            city: "108288", //北京地区编码
            count: 100
          }
        })
        .then(function(res) {
          this.movieList = res.body.subjects;
          this.isOpen = false;
          setTimeout(function() {
            const options = {
              click: true,
              taps: true
            };
            let wrapper = document.querySelector(".wrapper");
            this.scroll = new BScroll(wrapper, options);
          }, 1000);
          // this.$nextTick(() => {
          //   this.scroll = new BScroll(this.$refs.wrapper, {});
          // });
        });
    }
  }
};
</script>

<style scoped>
.movie {
  height: 90vh;
}
.wrapper {
  height: 100%;
  overflow: hidden;
}
ul.movieList {
  /* margin: 3.3rem 0; */
  display: block;
  padding: 0;
  margin: 0;
  /* padding-top: 3rem; */
}
.movieList > li {
  display: block;
  border-bottom: 1px solid #e6e6e6;
}
.movieList li .item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-decoration: none;
  padding: 1rem;
  box-sizing: border-box;
  color: #606266;
}
.movieList li .item img {
  width: 30%;
  margin-right: 1.5rem;
}
.movieList li .item .right {
  display: flex;
  flex-direction: column;
  font-size: 1rem;
}
.movieList li .item .right h3,
.movieList li .item .right > div,
.movieList li .item .right > span {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.movieList li .item .right h3 {
  margin-top: 0;
  /* color: #cf4646; */
  color: #303133;
  font-size: 1.3rem;
}
.movieList li .item .right .casts {
  flex-wrap: wrap;
}
</style>
