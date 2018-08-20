<template>
<div>
  <!-- <Header></Header> -->
  <div class="event">
      这是一个关于同城活动的页面
  </div>
  <Navbar></Navbar>
</div>
  
</template>
<script>
// import Header from "./Header";
import Navbar from "../components/Navbar";
import loading from "../components/Loading";
export default {
  name: "event",
  components: { loading, Navbar }
};
</script>
<style scoped>
.event {
  line-height: 40px;
  font-size: 14px;
  text-indent: 2em;
  color: #cf4646;
}
</style>

