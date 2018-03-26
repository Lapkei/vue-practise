// 1> vuex与全局对象不同的是，vuex的状态存储是响应式的，当store中的数据发生变化时，那么对应的组件也会得到更新
// 2> store中的数据并不可以直接修改，需要通过显式地提交commit
import Vue from 'vue'
import Vuex from 'vuex'

// ***************** vuex在组件的调用详情见 home.vue 或者 book.vue music.vue
Vue.use(Vuex)
// 全局注册 vuex

// 数据存储
const state = {
    count : 0 ,
    explain: "通过mapState辅助函数生成 计算属性(computed)更加方便",
    todos: [
        { id: 1 , text: "hello 1 is true", done: true },
        { id: 2, text: "hello 2 is false", done: false },
        { id: 3, text: "hello 3 is true", done: true },
    ]
}

// 要修改store状态的唯一方法 便是使用mutations
// 修改数据使用mutations *ps：一开始mutations写少了个s,以至于commit的时候找不到该方法*
const mutations = {
    increment(state){
        state.count++
    },
    trickcount(state,obj){    //   可以通过传递第二个参数作为载荷(payload)给mutations，一般载荷使用对象较为妥当
        state.count += obj.nums
    }
  
}

// getters : 有时我们想要在 store 中的 state 派生出一些状态，因而有了getters
// vuex 中的 getters 类似于 vue的computed，作为一个计算属性存在,可直接在 this.$store.getters 中调用它
const getters = {
    dontTodos: state => {
        return state.todos.filter( todo => todo.done ) // getters 会拿 state 作为它的第一个参数
    },
    getTodoById: (state,getters) => id => { return state.todos.find( todo => todo.id === id ) }// 还可以接受其他getters作为第二个参数传进函数中
}

// const actions = {

// }

const store = new Vuex.Store({
    state,
    mutations,
    getters
    // actions
})
// 输出
export default store