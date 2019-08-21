import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入elemenmt
import 'element-ui/lib/theme-chalk/index.css' // 引入ele样式
import './styles/index.less'
import axios from 'axios' // 引入axios

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 将后台接口给axios的baseURL
Vue.prototype.$axios = axios // 把axios插件给了vue对象的原型属性
Vue.use(ElementUI) // 注册插件
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
