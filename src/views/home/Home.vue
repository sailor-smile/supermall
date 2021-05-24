<template>
	<div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"/>
	</div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import HomeRecommendView from './childComps/HomeRecommendView.vue'
  import {getHomeMultidata} from 'network/home.js'
	export default{
		name:"Home",
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommendView
    },
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    //生命周期组件创建完成后
    created(){
      //1.请求多个数据 由于拦截器 这里的res = res.data
      getHomeMultidata().then(res => {
        console.log(res);
        //请求到的数据保存到data里
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
	}
</script>

<style>
  .home-nav{
    background-color: var(--color-tint);
    color: #FFFFFF;
  }
</style>
