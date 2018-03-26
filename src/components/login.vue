<template>
  <div class="">
    <h1>{{ dynamicSegment }}</h1>
    acount : <input type="text" name="" value="">
    password : <input type="password" name="" value="">
    <router-link to='/hello' >hello w</router-link>
    <li><router-link to='/login/313773' >login3</router-link></li>
    <li><router-link to='/login/137094' >login3</router-link></li>
  </div>
</template>

<script type="text/javascript">
export default{
  name : "login",
  computed: {
    dynamicSegment(){
      return this.$route.params.ggid
    },
    watch:{
      $route (to,from){
        console.log(to);
        console.log(from);

      }
    }
  }
}
</script>

<style scoped>

</style>
