<template>
  <div>
    <header>
      <span class="select" @click="citychange">{{cityname}}</span>
      正在热映电影
      <span class="search">
        搜索
        <i class="el-icon-search"></i>
        </span>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
  props:{
    cityname: String
  },
  methods:{
    citychange(){
      this.$emit('showcitylist',true)
    }
  }
};
</script>

<style lang="stylus" scoped>
  header
    position: fixed
    width: 100%
    top: 0
    left: 0
    right: 0
    z-index: 1
    padding: 1rem 0
    color: #ffffff
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    background: #f56c6c
    font-size: 1rem
    position: relative
    .select
      position: absolute
      left: 3rem
      font-size:1rem
      font-weight: bold
    .search
      position: absolute
      right: 3rem
      font-size: 1rem
</style>