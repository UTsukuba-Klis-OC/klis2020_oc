<template>
  <div id="app">
    <!-- HEADER -->
    <toptitle id="top"></toptitle>
    <button class="sbutton" type="button" @click="showModal = true"><img class="sbimg" src="./assets/submitbutton.png"></button>
    <submit v-if="showModal" @close="showModal = false"></submit>
    <primaryheader></primaryheader>
    <test id="about"></test>
    <movie id="movie"></movie>
    <inf id="inf"></inf>

    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import toptitle from './components/Title.vue'
import primaryheader from './components/Header.vue'
import test from './components/Topic.vue'
// import submit from './components/Submit.vue'
import submit from './components/Submit_s.vue'
import movie from './components/Movie.vue'
import inf from './components/Information.vue'


export default {
  name: 'App',
  data() {
        return {
            showModal: false
        }
  },
  components: {
    toptitle,
    submit,
    primaryheader,
    test,
    movie,
    inf
  },
  mounted() {
    this.$ga.page('/pagename');
  },
  
}


</script>

<style lang="scss">
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
 .vue-typer {
            display: inline-block;
            z-index: 10;
            .custom.char {
                 color:rgba(255, 1, 158, 0.623);
                 font-family: serif;
                 font-weight: 600;
                 filter: drop-shadow(0 0 0.2rem white);
                 font-size: 100%;
                 
             }      
            .custom.caret{
              &.selecting{
               color: whitesmoke;
            }
            }   
    }

// butto
.button{
    z-index: 9999;
    position: fixed;
    top:2vh;
    right: 30px;
}

.sbutton{
    position: fixed;
    bottom: 90px; 
    right: 5px;  
    border-style: none;
    background:rgba(0,0,0,0);
    z-index: 10;
    outline:0;
    z-index: 9999;
}

.sbutton:hover{
  filter: contrast(200%);
  transition: 80ms;
}

.sbimg{
  height: 130px;
  min-height: 10vh!important;
}




</style>
