<template>
    <div>
        <headers :place="where" @sthFromSon="listenMySon" ></headers>        
        <div class="MainPage">
            <router-view></router-view>
            <h1 @click="addCount({nums: 10086})">You have view this {{counts}} times already，you  can touch this line to trick！~</h1>
            <h1>{{demos()}}</h1>
            <!-- 可以在模板{{}}中输入函数，这样的效果跟computed不同的是，function每次渲染组件都会被执行，computed会使用缓存 -->
        </div>
    </div>
</template>
 
<script>
import headers from './header.vue'
import { mapMutations } from 'vuex'
// import mock from 'mock';
export default {
    name: 'home',    
    components: { headers },
    data(){
        return {
            where : "This is my HOUSE!" ,            
        }
    },
    methods : {
        listenMySon(msg){
            console.log(msg);            
        },
        // addCount(){
        //     // this.$store.commit('trickcount',{ nums: 4 }) // 第一个参数 为 mutations的类型名(方法名)，第二个为载荷(payload)用于传参，载荷最好为对象
        //     this.$store.commit({        // 触发mutations还可以使用对象风格的方式提交，这样payload就直接是一个对象
        //         type: 'trickcount',
        //         nums: 5
        //     })
        // },
        // 除了以上方式调用mutations 还可以采用对象展开运算符的形式调用 用法与getters无异
        ...mapMutations({
            addCount: 'trickcount'
        }),
        demos(){
            return this.where + " foo man"
        },

    },
    computed: { // computed : 计算属性,对于任何复杂的逻辑 都应该使用计算属性，而不是在模板{{}}中直接计算 ； 计算属性只有在相关依赖发生改变时才会从新计算，否则会使用缓存，这就很好的配合了vuex的数据状态变更产生地组件更新
        counts(){
                return this.$store.state.count // 返回store中的 count
            }
    },
    //、、、、、、、 请禁止在选项属性或回调函数上用箭头函数！声明周期也不可以用箭头函数！因为箭头函数是和父级上下文绑定的，this不会如预期地指向vue实例！经常会导致 undefined 或者 not a function
    beforeCreate : function(){
         /*  可在此钩子加个 loading 遮罩  */
        console.log("组件创建之前")
    },
    created : function(){
        /*  在此结束  Loading 遮罩 并做一些初始化  */
        console.log("组件已创建完成，属性已绑定，但Dom还未生成，$el属性还不存在")
    },
    beforeMount: function(){
        console.log("模板编译/挂载之前");
        console.log(this.$el)
    },
    mounted: function(){
        /*   组件一切就绪 在此访问后端接口    */
        console.log("模板编译/挂载之后 不保证组件已经在Document中");
        console.log(this.$el)
        console.log(this.$data)
        console.log("<<<<<<<<<<>>>>>>>>>>>");
        console.log(this.$store.state.count);
        this.$http.get('/run/search_index.json')
            .then( data => {
                console.log('hhh23333333333333333333')
                console.log(data)
            } )
        
    },
    beforeUpdate: function(){
        //组件里的DOM有任何变化都会触该钩子
        console.log("组件更新之前");        
    },
    updated: function(){
        console.log("组件更新之后")
    },
    activated: function(){
        console.log("组件被激活时")
    },
    deactivated: function(){
        console.log("组件被移除时调用")
    },
    beforeDestroy: function(){
        console.log("组件被销毁前调用")
    },
    destroyed: function(){
        console.log("组件被销毁后调用")
    }

}
</script>

<style scoped>
.MainPage{
    width: 100%;
    height: 500px;    
}
</style>
