<!--
 * @Author: Bertram
 * @LastEditors: Bertram
-->
<template>
    <div>
        <film-swiper :key="datalist.length">
            <swiper-item v-for="data in datalist" :key="data">
                <img :src="data">
            </swiper-item>
        </film-swiper>
        <film-header class="sticky"></film-header>
        <router-view></router-view>
    </div>
</template>
<script>
    import filmSwiper from '@/components/films/FilmSwiper'
    import swiperItem from '@/components/films/SwiperItem'
    import filmHeader from '@/views/films/FilmHeader'
    import axios from 'axios';
    
    export default {
        components: {
            filmSwiper,
            swiperItem,
            filmHeader
        },
        data () {
            return {
                datalist: []
            }
        },
        mounted () {
            this.datalist = ['/imgs/2.jpg','/imgs/3.jpg','/imgs/4.jpg']
        }
    }
</script>
<style lang="scss" scoped>
    img {
        width: 100%;
    }
    .sticky {
        position: sticky;
        top: 0px;
        background: white;
    }
</style>