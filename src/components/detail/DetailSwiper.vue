<!--
 * @Author: Bertram
 * @LastEditors: Bertram
-->
<template>
    <div class="swiper-container" :class="name">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper/swiper-bundle'
import 'swiper/swiper-bundle.css'
export default {
  props: {
    name: {
      type: String,
      default: 'swipertest'
    },
    views: {
      type: Number,
      default: 1
    }
  },
  mounted () {
    new Swiper('.' + this.name, { // 节点加载完毕后，初始化swiper
      slidesPerView: this.views
      // spaceBetween: 30,
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
