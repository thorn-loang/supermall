<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style>
 #tab-bar{
    /* 水平分布 */
    display: flex;

    background-color: #f6f6f6;

    /* 位置位于底部 */
    position: fixed;
    left: 0%;
    right: 0%;
    bottom: 0%;

    /* 阴影 */
    box-shadow: 0 -3px 3px rgb(100, 100, 100,0.1);
  }
</style>