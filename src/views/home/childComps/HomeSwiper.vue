<template>
   <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
	export default{
		name:"HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){ //默认值
          return []
        }
      },
    },
    components:{
      Swiper,
      SwiperItem
    },
    data(){
      return{

      }
    }
	}
</script>

<style>
</style>
