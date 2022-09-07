<!--
 * @Author: Bertram
 * @LastEditors: Bertram
-->
<template>
    <div>
        <van-list v-model="loading" :finished="finished" finished-text="到底了" @load="onLoad" :immediate-check="false">

            <van-cell v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
                <div class="lazy-img-wrap">
                    <img :src="data.poster" />
                </div>
                <div class="content">
                    <div class="nowPlayingFilm-name info-col">
                        <div class="filmsName">{{ data.name }}</div>
                        <span class="filmTypeName">{{ data.filmType.name }}</span>
                    </div>
                    <div class="nowPlayingFilm-grade info-col">
                        <span class="lable">观众评分&nbsp</span>
                        <span class="grade">{{ data.grade }}</span>
                    </div>
                    <div class="nowPlayingFilm-actors info-col">
                        <span class="lable">主演：{{ getFilmActors(data) }}</span>
                    </div>
                    <div class="nowPlayingFilm-detail info-col">
                        <span>{{ data.nation }}&nbsp|&nbsp{{ data.runtime }}分钟</span>
                    </div>
                </div>
                <buy-tickets></buy-tickets>
            </van-cell>
        </van-list>
    </div>
</template>
<script>
import http from '@/util/http'
import buyTickets from '@/components/BuyTickets.vue'
import Vue from 'vue'
import { List } from 'vant'

Vue.use(List)

export default {
  components: {
    buyTickets
  },
  data () {
    return {
      datalist: [],
      listNum: 1,
      total: 0,
      loading: false,
      finished: false
    }
  },
  methods: {
    handleClick (id) {
      // 通过路径跳转
      // this.$router.push(`/detail/${id}`)
      // 通过命名路由跳转
      this.$router.push({
        name: 'nameDetail',
        params: {
          myid: id
        }
      })
    },
    getFilmActors (data) { // 获取演员表，返回字符串
      if (!data.actors) {
        return '暂无主演'
      } else {
        return data.actors.map(res => res.name).join(' ')
      }
    },
    onLoad () {
      // 判断列表长度和数据长度
      if ((this.datalist.length == this.total) && !this.total == 0) {
        this.finished = true
        return
      }
      this.listNum++
      http({
        url: `gateway?cityId=${this.$store.state.cityId}&pageNum=${this.listNum}&pageSize=10&type=1&k=105672`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
      })
    }
  },
  mounted () {
    http({
      url: `gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=105672`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.datalist = res.data.data.films
      this.total = res.data.data.total
      // console.log(this.total)
    })
  }
}
</script>
<style lang="scss" scoped>
.van-list {
    padding-bottom: 51px;
    .van-cell {
        padding: 0;
    }
    .van-cell__value {
        height: 93px;
        padding: 15px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ededed;

        .lazy-img-wrap {
            width: 66px;
            height: 94px;
            overflow: hidden;

            img {
                width: 100%;
            }
        }

        .content {
            box-sizing: border-box;
            width: calc(100% - 116px);
            height: 82px;
            padding: 0px 10px;

            .info-col {
                overflow: hidden;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 13px;
                color: #797d82;
            }

            .nowPlayingFilm-name {
                display: flex;
                align-items: center;
                height: 22px;
                margin: 0;

                .filmTypeName {
                    font-size: 9px;
                    color: #fff;
                    background-color: #d2d6dc;
                    height: 14px;
                    line-height: 14px;
                    text-align: center;
                    margin-left: 2px;
                    border-radius: 2px;
                }

                .filmsName {
                    max-width: calc(100% - 21px);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 16px;
                    color: black;
                }

            }

            .nowPlayingFilm-grade {
                .grade {
                    color: #ffb232;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>
