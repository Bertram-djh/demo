<!--
 * @Author: Bertram
 * @LastEditors: Bertram
-->
<template>
    <div class="swiper-container swipertest">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper/swiper-bundle'
import 'swiper/swiper-bundle.css'
export default {
    props: {
        loop: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        new Swiper(".swipertest", {  //节点加载完毕后，初始化swiper
            loop: this.loop,
            pagination: {
                el: '.swiper-pagination',
            },
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false
            // }
        })
    }
}
</script>
<style lang="scss" scoped>
.swipertest {
    width: 23.4375rem;
    height: 12.0625rem;
    overflow: hidden;
}

</style>