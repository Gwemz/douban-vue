<template>
  <div class="movie">
      <loading v-show="isOpen" :isOpen="isOpen"></loading>
      <!-- 热映影片 -->
      <div class="movieList">
          <div v-for="m in movieList">
              <a :href="m.alt">
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
              </a>
          </div>
      </div>
      <!-- <header>
          欢迎来到豆瓣
      </header> -->
  </div>
</template>
<script>
import loading from "./Loading";
export default {
  name: "movie",
  components: { loading },
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
    loadCityList() {
      this.$http
        .jsonp("https://api.douban.com/v2/loc/list", { params: { count: 48 } })
        .then(function(res) {
          this.cityList = res.body.locs;
        });
    },
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
        });
    }
  }
};
</script>

<style scoped>
.movieList {
  margin: 3.3rem 0;
  display: flex;
  flex-direction: column;
}
.movieList > div {
  border-bottom: 1px solid #e6e6e6;
}
.movieList div a {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-decoration: none;
  padding: 1rem;
  box-sizing: border-box;
  color: #333333;
}
.movieList div a img {
  width: 30%;
  margin-right: 1.5rem;
}
.movieList div a .right {
  display: flex;
  flex-direction: column;
}
.movieList div a .right h3,
.movieList div a .right > div,
.movieList div a .right > span {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.movieList div a .right h3 {
  margin-top: 0;
}
.movieList div a .right .casts {
  flex-wrap: wrap;
}
</style>
