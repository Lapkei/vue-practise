<template>
  <div id="indexPage">
    <!-- 页面入口 -->
    <!-- router-view 与 router-link 的匹配规则 : 譬如当前app.vue 是在 url “/”中出现的，当出现 “/home”“/book”对应的页面都会在该router-view中被渲染。如果出现“/home/book”，那么book页面将会在“home”页面中的router-view被渲染 -->
    <router-view></router-view>
    <Loading v-show="isLoading" ></Loading>
  </div>
</template>

<script>
export default {
  name: 'indexPages',
  data(){
    return {
      isLoading: true
    }
  },
  beforeCreate : function(){
        console.log("组件创建之前")
    },
    created : function(){
        console.log("组件已创建完成，属性已绑定，但Dom还未生成，$el属性还不存在")
    },
    beforeMount: function(){
        console.log("模板编译/挂载之前");
        console.log(this.$el)
    },
    mounted: function(){
        console.log("模板编译/挂载之后 不保证组件已经在Document中");
        console.log(this.$data);
        setTimeout(() => {
          this.isLoading = false;
          console.log("x")
        }, 2000);
    },
}
</script>

<style>
*,html,body{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;   
}
#indexPage {
  font-family: 'Avenir', Helvetica, Arial, sans-serif,'微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
</style>
