<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>


<script>
	export default{
		name:"TabBar"
	}
</script>

<style scoped>
/* 水平分布 */
	#tab-bar{
		display: flex;
		background-color: #f6f6f6;
		
		/*步骤三： 绝对定位! 根据坐标 */
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		/* 增加顶部阴影 */
		box-shadow: 0 -1px 1px rgba(100,100,100,.2);
	}
	
	
	
</style>
