<script setup>
import NavBar from "./components/NavBar.vue";
import letTalk from "./components/LetTalk.vue";
import FooTer from "./components/FooTer.vue";
import ScrollToTop from "./components/ScrollToTop.vue";


</script>

<template>
  <div class="app">
    <NavBar />
    <router-view></router-view>
    <letTalk />
    <FooTer />
    <ScrollToTop />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  color: #edd6b6;
}

body {
  background-color: #0E0E0E;
  color: #edd6b6;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
