<template>
  <div id="home">
    <nav-bar>
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>
    <h2>首页</h2>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navBar/NavBar.vue'
  export default {
    name:'Home',
    components:{
       NavBar
    }
  }
</script>

<style>

</style>
