// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

import axios from 'axios'


Vue.use(ElementUI)
Vue.config.productionTip = false
axios.defaults.withCredentials =true //跨域保存session有用
// axios.defaults.baseURL =  "/api"
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
