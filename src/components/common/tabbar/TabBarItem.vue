<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
		</div>
</template>

<script>
	export default{
		name:"TabBarItem",
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'red'
			}
		},
		data(){
			return{
				//isActive:true
			}
		},
		computed:{
			isActive(){
				/* return this.$route.path.indexOf(this.path) !== -1 */
				return this.$route.path === this.path
			},
			activeStyle(){
				return this.isActive ? {color: this.activeColor}:{}
			}
		},
		methods:{
			itemClick(){
			
				this.$router.replace(this.path).catch(error=>{})
			}
		}
	}
</script>

<style>
	/* 步骤二：调整元素均等分 居中和高度 */
		.tab-bar-item{
			flex: 1;
			text-align: center;
			height: 49px;
			font-size: 13px;
		}
		
		.tab-bar-item img{
			width: 24px;
			height: 24px;
			margin-top: 3px;
			vertical-align: middle;/* 去除图片底部空间默认3px */
			margin-bottom: 2px;
		}
		
</style>
