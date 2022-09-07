<!--
 * @Author: Bertram
 * @LastEditors: Bertram
-->
<template>
    <div>
        <van-index-bar :index-list="getIndexList" @select="listTip">
            <div v-for="data in cityList" :key="data.type" >
                <div class="type">
                    <van-index-anchor :index="data.type" />
                </div>
                <div class="city">
                    <van-cell v-for="item in data.city" :key="item.cityId" :title="item.name" @click="handleCity(item)"/>
                </div>
                
            </div>
        </van-index-bar>
    </div>
</template>
<script>
import http from '@/util/http'
import obj from '@/util/amixin'
import { Toast } from 'vant'

export default {
    mixins:[obj],
    data() {
        return {
            cityList: [],
            cityNum: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        }
    },
    mounted() {
        http({
            url: 'gateway?k=1650410',
            headers: {
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res => {
            this.cityList = this.processing(res.data.data.cities)
        })
        // 设置toast提示显示时间
        Toast.setDefaultOptions({ duration: 200 })
    },
    computed: {
        getIndexList () {
            return this.cityList.map(res => res.type)
        }
    },
    methods: {
        // 将城市按照首字母分类在一起
        processing(data) {
            var indexCity = []
            this.cityNum.forEach(res1 => {
                var index = data.filter(res => res.pinyin.substring(0, 1).toUpperCase() == res1)
                if (index.length !== 0) {
                    indexCity.push({
                        type: res1,
                        city: index
                    })
                }

            })
            return indexCity
        },
        listTip (data) {
            // console.log(data);
            Toast(data)
        },
        handleCity (item) {
            // console.log(item);
            this.$store.commit('changeCity',item.name)
            this.$store.commit('changeCityId',item.cityId)
            this.$store.commit('clearCityCinemas')
            this.$router.back()
        }
    }
}
</script>
<style lang="scss" scoped>
.type {
    background-color: #f4f4f4;
    color: #797d82;
}
.city {
    padding-left: 10px;
}
.van-toast--html, .van-toast--text {
    min-width: 16px;
}
</style>