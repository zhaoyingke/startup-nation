import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/typeit'
import VueShareSocial from 'vue-share-social'

Vue.config.productionTip = false

Vue.use(VueShareSocial)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
