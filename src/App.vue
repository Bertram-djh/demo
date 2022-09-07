<!--
 * @Author: Bertram
 * @LastEditors: Bertram
-->
<template>
  <div>
    <router-view></router-view>
    <tab-bar v-show="$store.state.isShow"></tab-bar>
    <buy-bar v-if="$route.name"></buy-bar>
  </div>
</template>
<script>
// @别名 ===>  src的绝对路径
// import navbar from '@/components/Navbar.vue'  webpack配置的别名
import Vue from 'vue'
import tabBar from '@/components/TabBar'
import buyBar from '@/components/detail/BuyBar'

// Vue.component('navbar', navbar) 全局注册
export default {
  components: {
    tabBar,
    buyBar
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}
// body {
//   font: 12px/1.5 Tahoma,Helvetica,Arial,sans-serif;
//     font-family: Microsoft YaHei,Tahoma,Helvetica,Arial,sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     margin: 0;
//     padding: 0;
//     color: #2c3e50;
// }

ul {
  list-style: none;
}
</style>
