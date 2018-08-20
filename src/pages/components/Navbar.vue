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
// import router from "../router";
export default {};
</script>
<style lang="stylus" scoped>
  .navbar
    position: fixed
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    width: 100%
    display: flex
    justify-content: space-around
    flex-wrap: nowrap
    background: #f56c6c
    a
      width: 34%
      padding: 0.5rem 0
      text-decoration: none
      color: #fff
      background: #f56c6c
      border-right: 1px solid #ffffff
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      font-size: 1rem
      &:last-of-type
        border-right: 0px;
      i
        font-size: 1.5rem
        margin-bottom: .3rem
</style>
