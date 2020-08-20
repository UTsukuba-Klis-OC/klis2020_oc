<template>
  <div id="app">
    <!-- HEADER -->
    <toptitle></toptitle>
    <submit></submit>
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
import submit from './components/Submit.vue'


export default {
  name: 'App',
  components: {
    toptitle,
    submit,
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

.modal-backdrop{
   visibility:hidden!important;
}


</style>
