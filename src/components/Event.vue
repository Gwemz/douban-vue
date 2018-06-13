<template>
<div>
  <Header></Header>
  <div class="event">
      这是一个关于同城活动的页面
  </div>
  <Navbar></Navbar>
</div>
  
</template>
<script>
import Header from "./Header";
import Navbar from "./Navbar";
import loading from "./Loading";
export default {
  name: "movie",
  components: { loading, Header, Navbar }
}
</script>

