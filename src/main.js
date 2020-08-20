import Vue from 'vue'
import App from './App.vue'

// BootStrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap-vue/dist/bootstrap-vue.css'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe, faBlog, faBirthdayCake, faImage } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faHtml5, faCss3Alt, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// VueTyper
import VueTyperPlugin from 'vue-typer'

// UseDeligate
Vue.use(VueTyperPlugin)
Vue.use(BootstrapVue)

library.add(faGlobe, faBlog, faBirthdayCake, faImage, faTwitter, faGithub, faHtml5, faCss3Alt, faJsSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),



}).$mount('#app')
