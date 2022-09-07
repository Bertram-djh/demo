import Vue from 'vue'// ES6导入方式
import App from './App.vue'// 导入根组件App
import router from './router'
import store from './store'

Vue.config.productionTip = false// 生产环境不打印log

new Vue({
  router,
  store,
  render: h => h(App)// vue支持的新写法
}).$mount('#app')// 挂载组件
