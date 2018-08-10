<template>
<div>
  <loading v-show="isOpen" :isOpen="isOpen"></loading>
  <div class="container">
      <div class="top">
        <i class="el-icon-arrow-left" @click="$router.back(-1)"></i>
        {{movie.title}}
        </div>
        <div class="session-poster session-poster-spacing">
            <img class="poster" :src="movie.images.large" alt="">
        </div>
        <div class="summary-session">
            <div class="movie-summary">
                <span class="name">{{movie.title}}</span>
                <span class="subtype">{{movie.year}}/{{movie.genres}}</span>
                <span class="origin-name">{{movie.originalTitle}}</span>
                <span class="countries">{{movie.countries}}</span>
            </div>
            <div class="movie-rating">
                <span class="average">{{movie.rating.average}}</span>
                <span class="rating"></span>
                <span class="ratings_count">{{movie.ratingsCount}}</span>
            </div>
        </div>
        <div class="desc-session">
            <span class="title">简介</span>
            <span class="desc-wrapper">{{movie.summary}}</span>
        </div>
        <div class="director-casts-session">
            <span class="title">影人</span>
            <!-- <div v-for="(m,index) of movie.writers">
                <div class="star">
                    <img :src="m.avatars.small" alt="">
                    <span class="name">{{m.name}}</span>
                </div>
            </div> -->
            <div v-for="(item,index) of movie.writers">
              <div class="star">
                <img :src="item.avatars.medium">
                <span class="name">{{item.name}}</span>
              </div>
            </div>
            <!-- <div v-for="(item,index) of movie.writers" :key="index">
              <img :src="item.avatars[small]">
            </div> -->
        </div>
    </div>
</div>
</template>
<script>
import loading from "./Loading";
export default {
  name: "detail",
  components: { loading },
  data() {
    return {
      isOpen: true,
      id: "",
      movie: {
        images: {
          large: "",
          medium: "",
          small: ""
        },
        rating: {
          average: ""
        }
      }
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getDetail(this.id);
  },
  methods: {
    getDetail(id) {
      this.$http
        .jsonp("https://douban.uieee.com/v2/movie/subject/" + id + "")
        .then(function(res) {
          let data = res.data;
          let genres = "";
          let separate = "/";
          for (let k in data.genres) {
            genres += data.genres[k] + separate;
          }
          genres = genres.substring(0, genres.length - 1);
          let countries = "国家：";
          for (let g in data.countries) {
            countries += data.countries[g] + separate;
          }
          countries = countries.substring(
            0,
            countries.length - separate.length
          );
          let movie = {
            id: data.id,
            title: data.title,
            images: data.images,
            collectCount: data.collect_count,
            commentsCount: data.comments_count,
            wishCount: data.wish_count,
            reviewsCount: data.reviews_count,
            popularReviews: data.popular_reviews,
            popularComments: data.popular_comments,
            countries: countries,
            doCount: data.do_count,
            genres: genres,
            originalTitle: "原名：" + data.original_title,
            rating: data.rating,
            ratingsCount: data.ratings_count + "人",
            subtype: data.subtype,
            summary: data.summary,
            shareUrl: data.share_url,
            year: data.year,
            tags: data.tags,
            writers: data.writers
          };
          this.movie = movie;
          this.isOpen = false;
        });
    }
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 60px;
}
.top {
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top i {
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 1.75rem;
}
.session-poster {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #e9e9e9;
}
.session-poster-poster {
  padding-top: 30px;
  padding-bottom: 40px;
}
.session-poster .poster {
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  width: 40%;
  /* height: 440px; */
}
.summary-session {
  display: flex;
  flex-direction: row;
  /* height: 260px; */
  align-items: center;
  justify-content: space-between;
}
.movie-summary {
  display: flex;
  flex-direction: column;
  /* width: 520px; */
  margin: 30px 30px;
}
.movie-summary span {
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
}
.movie-summary .name {
  width: 100%;
  color: #4a4a4a;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.6;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.movie-summary .subtype,
.origin-name,
.countries {
  /* font-size: 24px; */
  color: #9e9e9e;
}
.movie-rating {
  /* width: 120px;
  height: 120px; */
  padding: 10px;
  border: 1px solid #9e9e9e;
  box-shadow: 4px 4px 2px #e6e6e6;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-right: 30px;
}
.movie-rating .average {
  font-size: 1.5rem;
  font-weight: 700;
}
.movie-rating .rating {
  display: flex;
  flex-direction: row;
  align-self: center;
}
.movie-rating .ratings_count {
  font-size: 1rem;
}
.wish-do-session {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 30px;
}
.wish-do-session .wish-btn,
.wish-do-session .do-btn {
  font-size: 28px;
  color: #de9703;
  padding: 10px 70px;
  margin-right: 80px;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #de9703;
  box-sizing: border-box;
}
.wish-do-session .do-btn {
  margin-right: 0px;
  margin-left: 80px;
}
.desc-session,
.director-casts-session {
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  margin: 20px 0px;
}
.desc-session > span,
.director-casts-session > span {
  display: flex;
  flex-direction: row;
}
.desc-session .title,
.director-casts-session .title {
  color: #9e9e9e;
  font-size: 1.5rem;
  line-height: 42px;
  font-weight: bold;
}
.desc-session .desc-wrapper {
  font-size: 1.2rem;
  text-indent: 2em;
  text-align: left;
}
.desc-session .desc-content {
  font-size: 24px;
  color: #4a4a4a;
  line-height: 38px;
  text-indent: 2em;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
}
.desc-session .extension {
  background: #ffffff;
  height: 38px;
  font-size: 24px;
  line-height: 38px;
  color: #91d5ff;
}
.desc-session .desc-content-auto {
  height: auto;
}
.desc-session .desc-content-3line {
  height: 114px;
}
.directors-casts-scroll {
  width: 100%;
  white-space: nowrap;
}
.directors-casts-wrapper {
  display: inline-block;
}
.directors-casts-wrapper .image {
  width: 140px;
  height: 200px;
  margin-right: 12px;
}
.directors-casts-wrapper .name {
  width: 140px;
  color: #4a4a4a;
  font-size: 22px;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.directors-casts-content {
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
