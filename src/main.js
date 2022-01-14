import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.config.productionTip = false
Vue.use(VueSmoothScroll)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
