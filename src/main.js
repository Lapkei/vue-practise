// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import indexPages from './App'
import router from './router'

// 引入store
import store from './vuex/vuex'

import axios from 'axios'

Vue.prototype.$http = axios

//  Loading 自定义全局组件，详情请看 components/loading/
import Loading from './components/loading'
// vue全局注册
Vue.use(Loading)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#indexPage',
  router,
  template: '<indexPages/>',
  store, // 将store从根组件注入所有子组件
  components: { indexPages }
})
