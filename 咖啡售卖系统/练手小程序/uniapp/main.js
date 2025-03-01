import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'


Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import '@/static/css/global.css'
import uView from './uni_modules/vk-uview-ui';
export function createApp() {
  const app = createSSRApp(App)
  //使用 uViews
  app.use(uView)
  return {
    app
  }
}
// #endif