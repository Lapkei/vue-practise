<template>
  <div class="">
    <h1>Error Man 404!</h1>
      <div class="detail">
        Please check the router again.
      </div>
      <div class="detail">
        {{ msg }}
      </div>
      <router-link to="/hello">go back hello</router-link> 
  </div>
</template>

<script type="text/javascript">
export default{
  name : "error",
  data(){
    return {
      msg : "check it man!"
    }
  }
}
</script>

<style scoped>
h1{
  text-align: center;
}
.detail{
  color:coral;
  font-size: 20px;
  text-align: center;
}
</style>
