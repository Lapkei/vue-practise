<template>
  <div class="music">
      <h1>Music</h1>
      <h2>{{myExplain}}</h2>
      <h2 v-for="todo in doneTodos" >{{todo.text}}</h2>
      <h2>aaaa the todo's test is "{{getTodoById2s(2)}}"!! that id is 2</h2>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
    computed: {
       ...mapState({ // 使用 对象展开运算符(...) 方式 将state混入computed中
            myExplain: state => state.explain,
        }),
        ...mapGetters({ // 使用 对象展开运算符(...) 方式 将mapGetters混入computed中
            doneTodos: 'dontTodos',//getters => getters.dontTodos,
            getTodoById2s: 'getTodoById'
            // getTodoById2:'getTodoById(2)'//getters => getters.getTodoById(2)
        }),
        // doneTodos(){
        //     return this.$store.getters.dontTodos // 使用this.$store.getters 可直接调用 vuex 在getters中定义的“计算属性”
        // },
        // getTodoById2(){
        //     return this.$store.getters.getTodoById(2)
        // }
    }
// 当映射的计算属性名称与 $store.state 对应的属性名称相同时，可给mapState传递一个字符串 【数组】
//   computed: mapState([
//       'explain'
//   ])
}
</script>

<style scoped>
.music{
    width: 100%;
    height: 100%;
    background-color: midnightblue;
}
h1,h2{
    color: #fff;
}
</style>


