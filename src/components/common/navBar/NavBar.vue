<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style>
  .nav-bar{
    /* 布局 */
    display: flex;
    height: 44px;
    /* 撑起高度 */
    line-height: 44px;
    text-align: center;
    /* background-color: #ff5777; */
    box-shadow: 0 3px 3px rgb(100, 100, 100,0.1);
  }
  .left, .right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>
