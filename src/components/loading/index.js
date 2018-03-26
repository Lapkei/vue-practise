import myLoading from './loading.vue'
// 引入myloading组件
const Loading = {
    install: (Vue) => { //核心方法 install
        Vue.component('Loading', myLoading)
    }
}

export default Loading // 导出