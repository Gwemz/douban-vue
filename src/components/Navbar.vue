<template>
  <div class="navbar">
    <router-link to="/movie">
        <i class="el-icon-service"></i>
        热映影片
    </router-link>
    <router-link to="/event">
        <i class="el-icon-star-off"></i>
        同城活动
    </router-link>
    <router-link to="/about">
        <i class="el-icon-share"></i>
        关于豆瓣
    </router-link>
  </div>
</template>
<script>
import router from "../router";
export default {};
</script>
<style scoped>
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  background: #f56c6c;
}
.navbar a {
  width: 34%;
  padding: 0.5rem 0;
  text-decoration: none;
  color: #fff;
  background: #f56c6c;
  border-right: 1px solid #ffffff;
}
.navbar a:last-of-type {
  border-right: 0px;
}
.navbar a i {
  display: block;
  font-size: 1.5rem;
}
</style>

