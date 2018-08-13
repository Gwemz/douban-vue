<template>
<el-alert
    title="正在热映电影"
    type="error">
    <span class="select" @click="citychange">{{cityname}}</span>
  </el-alert>
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

<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 1rem 0;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #cf4646;
}
.select {
  margin-left: 3rem;
  font-size:1rem;
  font-weight: bold;
}
</style>

