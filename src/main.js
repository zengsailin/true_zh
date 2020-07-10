import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/styles/index.less'
Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://dev.17uk.cn/api/'
Vue.use(ElementUI)
new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
