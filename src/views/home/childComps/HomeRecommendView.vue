<template>
	<div class="recommend">
	<div v-for="item in recommends" class="recommend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
	</div>
</template>

<script>
	export default{
		name:"HomeRecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{

      }
    },
    components:{

    }
	}
</script>

<style>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px; /* 自身元素与内部元素的距离 顶部15px 底部30px*/
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    height:70px;
    whdth:25%;
    margin-bottom:10px;
  }
</style>
