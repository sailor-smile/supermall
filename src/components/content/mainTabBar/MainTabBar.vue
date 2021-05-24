<template>
		<tab-bar>
			<tab-bar-item path="/home" activeColor="red">
				<img slot="item-icon" src="~assets/img/tabbar/login.svg" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/loginclick.svg" alt="">
				<div slot="item-text">主页</div>
			</tab-bar-item>
			<tab-bar-item path="/category" activeColor="blue">
				<img slot="item-icon" src="~assets/img/tabbar/fenlei.svg" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/fenleiclick.svg" alt="">
				<div slot="item-text">分类</div>
			</tab-bar-item>
			<tab-bar-item path="/cart" activeColor="violet">
				<img slot="item-icon" src="~assets/img/tabbar/shopping.svg" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/shoppingclick.svg" alt="">
				<div slot="item-text">购物车</div>
			</tab-bar-item>
			<tab-bar-item path="/profile" activeColor="green">
				<img slot="item-icon" src="~assets/img/tabbar/me.svg" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/meclick.svg" alt="">
				<div slot="item-text">我的</div>
			</tab-bar-item>
		</tab-bar>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
	export default{
		name:"MainTabBar",
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
