<template>
  <div id="app">
    <!-- HEADER -->
    <toptitle></toptitle>
    <primaryheader></primaryheader>
    <test></test>

    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import toptitle from './components/Title.vue'
import primaryheader from './components/Header.vue'
import test from './components/Topic.vue'


export default {
  name: 'App',
  components: {
    toptitle,
    primaryheader,
    test
  },
}




</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

.kotei {
  z-index: 1000;
  position: sticky;
}


</style>
