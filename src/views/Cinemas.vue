<!--
 * @Author: Bertram
 * @LastEditors: Bertram
-->

<template>
    <div class="container">
        <van-nav-bar title="影院" ref="vanbar" @click-left="changeCity" @click-right="searchCinemas">
            <template #left>
                {{ $store.state.cityName }}
                <van-icon name="arrow-down" color="black" />
            </template>
            <template #right>
                <van-icon name="search" size="20" color="black" />
            </template>
        </van-nav-bar>
        <div class="box" :style="{
            height: height
        }">
            <cinemas-list :dataList="$store.state.cityCinemas"></cinemas-list>
        </div>
    </div>
</template>
<script>

import BetterScroll from 'better-scroll'
import Vue from 'vue'
import Vant from 'vant'
import cinemasList from '@/components/cinemas/CinemasList'
import 'vant/lib/index.css'

Vue.use(Vant)
export default {
  components: {
    cinemasList
  },
  data () {
    return {
      // cinemasList: [],
      height: '0px'
    }
  },
  methods: {
    changeCity () {
      this.$router.push('/city')
    },
    searchCinemas () {
      this.$router.push('/cinemas/search')
    }
  },

  mounted () {
    // console.log(this.$refs)
    this.height = document.documentElement.clientHeight - this.$refs.vanbar.$el.offsetHeight - document.querySelector('footer').offsetHeight + 'px' // 动态计算影院区域高度，匹配better-scroll

    if (this.$store.state.cityCinemas.length === 0) {
      this.$store.dispatch('getCityCinemas', this.$store.state.cityId)
        .then(() => {
          this.$nextTick(() => {
            // 节点上树后初始化better scroll
            new BetterScroll('.box', {
              scrollbar: {
                fade: true
              }
            })
          })
        })
    } else {
      this.$nextTick(() => {
        new BetterScroll('.box', {
          scrollbar: {
            fade: true
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
    .box {
        // height: 600px;
        overflow: hidden;
        position: relative;
    }
}
</style>
