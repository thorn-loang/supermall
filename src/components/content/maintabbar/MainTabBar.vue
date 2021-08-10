<template>
  <tab-bar>
    <tab-bar-item path="/Home">
      <template #item-icon>
        <img src="~assets/img/tabBar/home.png">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabBar/home_active.png">
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/Category">
      <template #item-icon>
        <img src="~assets/img/tabBar/category.png">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabBar/category_active.png">
      </template>
      <template #item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/Cart">
      <template #item-icon>
        <img src="~assets/img/tabBar/cart.png">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabBar/cart_active.png">
      </template>
      <template #item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/Profile">
      <template #item-icon>
        <img src="~assets/img/tabBar/profile.png">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabBar/profile_active.png">
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '../../common/tabBar/TabBar.vue'
import TabBarItem from '../../common/tabBar/TabBarItem.vue'
export default {
  name:'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  /* @import "../assets/css/bass.css"; */
</style>