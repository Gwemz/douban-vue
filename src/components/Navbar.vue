<template>
  <div class="navbar">
    <router-link to="/movie">热映影片</router-link>
    <router-link to="/event">同城活动</router-link>
    <router-link to="/about">关于豆瓣</router-link>
  </div>
</template>
<script>
import router from "../router";
export default {};
</script>
<style scoped>
.navbar{
    position: fixed;
    left:0;
    right: 0;
    bottom:0;
    z-index: 1;
    width:100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    background:#cf4646;
}
.navbar a{
    width:34%;
    padding:1rem 0;
    text-decoration: none;
    color:#fff;
    background: #cf4646;
    border-right: 1px solid #ffffff;
}
.navbar a:last-of-type{
    border-right: 0px;
}
</style>

