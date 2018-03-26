<template>
    <div>
        <h1 @click="demo()" >{{whereAmI}}</h1>
        <h2>{{this.$route.params.bookname}}</h2>
        <h3 :class=" { Hide : isHide } ">v-show test</h3>
    </div>
</template>
<script>
export default {
  data(){
      return {
          whereAmI : 'this.place',
          isHide: false
      }
  },
  methods: {
      demo(){
          console.log(this.$route.params.bookname)
          this.$router.push({ path: '/home' })
          if( this.whereAmI == "hello world" ){
              this.whereAmI = "hello ES6";
          }else{
              this.whereAmI = "hello world";
          }
          
      }
  },
  watch: {
      whereAmI(news,old){
          console.log(news)
          console.log(old)
      },
      '$route'(news,old){
          console.log(news)
          console.log(old)
      }
  },
    created: function(){
        console.log(this.$store)
        this.$store.commit('increment') // 每访问一次book 便触发一次increment 对count进行自加
    },    
    mounted: function() {
        console.log('this is mounted from book')         
        setTimeout(() => {
            this.isHide = true;
            console.log(this.$el)                
            console.log(">>>>>>>>>>>>>>>>>>>>>")            
        }, 2000);
    },
}
</script>
<style scoped>
div{
    width: 100%;
    height: 100%;
    background-color: indianred;
}
.Hide{
    display: none;
}
</style>
      

