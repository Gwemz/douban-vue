<template>
<div>
  <!-- <Header></Header> -->
  <div class="about">
      查询影院热映电影，免费在观看的新片。更有丰富电影专题，电影分类，提供最全面影片信息，权威电影评分，忠实影迷的电影评论。
  </div>
  <Navbar></Navbar>
</div>
  
</template>
<script>
import Navbar from "../components/Navbar";
import loading from "../components/Loading";
export default {
  name: "movie",
  components: { loading, Navbar }
};
</script>
<style scoped>
.about {
  width: 80%;
  margin: 0 auto;
  line-height: 40px;
  font-size: 14px;
  text-indent: 2em;
  color: #cf4646;
}
</style>

