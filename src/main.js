import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueSmoothScroll from 'v-smooth-scroll'
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

loadFonts()

createApp(App)
  .use(vuetify)
  .use(VueSmoothScroll)
  .use(router)
  .mount('#app')
