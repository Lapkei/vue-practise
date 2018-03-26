<template>
  <div class="clear-fix">
        <div class="leftBlock">
            <ul>
                <li v-for="item in leftMainData" v-on:click="check(item.id)" :class="{ liSelect : isShowFlag == item.id  }" >{{ item.text }}</li>
            </ul>
        </div>      
        <div class="rightBlock">
            <div v-show="isShowFlag == 1" >111</div>
            <!-- v-bind:class="{ isShow : isShowFlag == 1 }" -->
            <div v-show="isShowFlag == 2" >222</div>
            <div v-show="isShowFlag == 3" >333</div>
            <div v-show="isShowFlag == 4" >444</div>
        </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
            leftMainData : [{text:'你要',id:1},{text:'体乜',id:2},{text:'嗨卵',id:3},{text:'柒嘢',id:4}],
            isShowFlag : 1,
      }
  },
  methods : {
      check(flag){              
          this.isShowFlag = flag;             
          console.log(this.isShowFlag)
      }
  }
}
</script>

<style scoped>
.rightBlock .isShow{
    display: block;
}
.clear-fix{
    width: 800px;
    margin:0 auto;
}
.clear-fix:after{
    content:"";
    display: block;
    clear: both;
    vertical-align: hide;
    line-height: 0;
}
.leftBlock{
    width: 300px;
    max-width: 300px;
    height: 500px;
    background-color: coral;
    float:left;    
}
.rightBlock{
    width:700px;
    max-width: 500px;
    height: 500px;
    background-color:bisque;
    float:left;
    overflow: hidden;
}
.rightBlock div{
    width: 100%;   
    height: 100%;
    /* display: none; */
}
ul li{
    display: block;
    color:#fff;
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    text-align: left;
    font-size: 18px;
    text-indent: 10px;
}
ul li:hover,.liSelect{
    background-color: gainsboro;
}
</style>
