<template>
  <div id="app">
    <!-- <Header></Header> -->
    <router-view/>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Header from "./components/Header";
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: { Header, Navbar }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
* {
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  /* margin-top: 60px; */
}
</style>
