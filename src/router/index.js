import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import indexPage from '@/components/index'
import Book from '@/components/book'
// import Music from '@/components/music'
Vue.use(Router)

// Router.beforeEach((to, from, next) => {
//   // do something
//   console.log(to)
// })
// Router.afterEach((to, from, next) => {
//   console.log(to.path)
// })

// 命名视图: 可以在单个组件中创建多个 <router-view>然后给标签赋予 name 属性。路由渲染的时候，传入一个{ default(router-view名称): com1(组件) , name1 : a , name2: b }(如果未给routerview命名默认为default)对象给component属性
const r = [
  {
    path: '/',
    redirect: '/home' // 重定向到 /home 路径    
  },
  {
    path: '/home',
    component: Home,
    alias: '/myHome',
    children: [
      {
        path: 'index',
        name: 'index', // 页面路径的名称 必须是唯一的 跳转时可通过名称进行跳转
        component: indexPage
      },
      {
        path: 'book/:bookname',
        component: Book
      },
      {
        path: 'music',
        component: resolve => require(['../components/music.vue'], resolve)// 懒加载 当需要时才去加载
      }
    ]
  }
]

let rrr = new Router({
  mode: 'history', // String : 'hash' || 'history' ; 'hash'模式会让URL有个#，使用'history'的话可以像正常URL一样
  base: __dirname, // 基路径 一般在webpack会配置
  routes: r
})

export default rrr
