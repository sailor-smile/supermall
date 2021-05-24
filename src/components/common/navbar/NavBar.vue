<template>
	<div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		name:"Home"
	}
</script>

<style>
.nav-bar{
  display: flex; /* flex布局*/
  line-height: 44px;
  height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100,100,100,.1); /* 阴影*/
}
.left,.right{
  width: 60px;
}
.center{
  flex: 1; /* 剩余一个自动填充宽度*/
}
</style>
