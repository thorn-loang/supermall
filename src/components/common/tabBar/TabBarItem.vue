<template>
  <div class="tab-bar-item" @click="itemClick()">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
      <!-- <img src="../../assets/img/tabBar/custom.png" alt="">
        <div>
          首页
        </div> -->
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props: {
    path:String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      console.log('click');
      this.$router.push(this.path).catch(() => {})
    }
  }
}
</script>

<style>
 
  .tab-bar-item{
    /* 均等分 */
    flex: 1;
    /* 居中 */
    text-align: center;
    /* 高度 */
    height: 49px;
    /* 文字大小 */
    font-size: 14px;
  }

  .tab-bar-item img{
    /* 图片大小 */
    width: 24px;
    height: 24px;
    /* 图片距上方距离 */
    margin-top: 3px;
    /* 图片下方文字距离 */
    vertical-align: middle;
    /* 距离底部 */
    margin-bottom: 2px;
  }
/* 
  .active {
    color: red;
  } */
</style>