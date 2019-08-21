import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入elemenmt
import 'element-ui/lib/theme-chalk/index.css' // 引入ele样式
import './styles/index.less'

Vue.use(ElementUI) // 调用插件
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
