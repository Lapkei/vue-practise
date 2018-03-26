<template>
    <div>
        <ul class="clear-fix">
            <li @click="sayToMyFath"><router-link to="/home/index" :place="homes" >Home</router-link></li>
            <li><router-link to="/home/book/bookname=helloworld" :place="books" >Book</router-link></li>
            <li><router-link to="/home/music">Music</router-link></li>
            <li>Movie</li>
        </ul>        
    </div>
</template>

<script>
export default {
  name: 'header',
  props : {
      place : String
  },
  data() {
      return {
          homes : "Here is Home!",
          books : "Here is Books!",
          where : this.place || "UNKNOW",
          sth : "love u dad"
      } 
  },
    methods: {
        sayToMyFath() {            
            this.$emit("sthFromSon",this.sth);
        },
    }

}
</script>

<style scoped>
.clear-fix:after{
    content:"";
    display: block;
    line-height: 0;
    clear: both;
    visibility: hidden;
}
ul{
    background-color: cadetblue
}
ul li{
    list-style-type: none;
    float: left;
    width: 100px;
    height: 50px;    
    background-color: cadetblue;
    color:#fff;    
    line-height: 60px;
}
ul li:hover{
    cursor: pointer;
    font-weight: bold;
}

</style>


