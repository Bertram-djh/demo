<!--
 * @Author: Bertram
 * @LastEditors: Bertram
-->

<template>
    <main v-if="filmInfo">
        <div class="back" @click="handleBack()"></div>
        <detail-header v-title="40">
            {{  filmInfo.name  }}
        </detail-header>
        <div class="imgDiv" v-if="filmInfo">
            <img :src="filmInfo.poster">
        </div>
        <div class="filmDetail">
            <div class="col">
                <div class="filmName">
                    <span class="grey-name">{{  filmInfo.name  }}</span>
                    <span class="grey-type">{{  filmInfo.item.name  }}</span>
                </div>
                <div class="film-grade">
                    <span class="grade">{{  filmInfo.grade  }}</span>
                    <span class="text">分</span>
                </div>
            </div>
            <div class="grey-text">{{  filmInfo.category  }}</div>
            <div class="grey-text">{{  filmTime(filmInfo.premiereAt * 1000)  }}上映</div>
            <div class="grey-text">{{  filmInfo.nation  }} | {{  filmInfo.runtime  }}分钟</div>
            <div class="text-detail grey-text" :class="isShow ? '' : 'hidden'">
                {{  filmInfo.synopsis  }}
            </div>
            <div class="toggle">
                <i class="iconfont " :class="isShow ? 'icon-xiangshangjiantou' : 'icon-xiangxiajiantou'"
                    @click="handleChange()"></i>
            </div>
        </div>
        <div class="swiperArea">
            <!-- 演员轮播 -->
            <div class="actors">
                <div class="actor-title">演职人员</div>

                <detail-swiper class="actor-body" name="actorswiper" :views="4">
                    <detail-item v-for="(data, index) in filmInfo.actors" :key="index">
                        <div class="personal-info" >
                            <div class="img-box" :style="{ backgroundImage: 'url(' + data.avatarAddress + ')' }">
                                <!-- <img :src="data.avatarAddress"> -->
                            </div>
                            <span class="act-name">{{  data.name  }}</span>
                            <span class="act-role">{{  data.role  }}</span>
                        </div>
                    </detail-item>
                </detail-swiper>

            </div>
            <!-- 剧照轮播 -->
            <div class="photos">
                <div class="photo-title">
                    <span>剧照</span>
                    <span class="photos-to-all" v-if="filmInfo.photos">全部({{  filmInfo.photos.length  }})
                        <i class="iconfont icon-xiangyoujiantou"></i>
                    </span>
                </div>
                <div v-if="filmInfo.photos">
                    <detail-swiper class="photo-body" name="photoswiper" :views="2.3">
                        <detail-item v-for="(data, index) in filmInfo.photos" :key="index">
                            <div class="box" :style="{ backgroundImage: 'url(' + data + ')' }" @click="handlePreview(index)">
                                <!-- <img :src="data"> -->
                            </div>
                        </detail-item>
                    </detail-swiper>
                </div>
                <div v-else class="photo-body empty">
                    暂无电影剧照
                </div>


            </div>
        </div>
    </main>
</template>
<script>
import http from '@/util/http'
import obj from '@/util/amixin'
import moment from 'moment'
import '@/assets/iconfont/iconfont.css'
import detailSwiper from '@/components/detail/DetailSwiper'
import detailItem from '@/components/detail/DetailItem'
import detailHeader from '@/components/detail/DetailHeader'
import Vue from 'vue'
import { ImagePreview } from 'vant'


Vue.directive('title', { //注册指令，封装dom操作
    inserted(el, binding) {
        el.style.display = 'none'
        window.onscroll = () => {
            if ((document.documentElement.scrollTop || document.body.scrollTop) > binding.value) {
                el.style.display = 'block'
            } else {
                el.style.display = 'none'
            }
        }
    },
    unbind() {
        window.onscroll = null
    }
})

export default {
    components: {
        detailSwiper,
        detailItem,
        detailHeader
    },
    mixins: [obj],
    data() {
        return {
            filmInfo: null,
            isShow: false
        }
    },
    methods: {
        filmTime(time) { // 转换时间戳
            return moment(time).format('YYYY-MM-DD')
        },
        handleChange() { // 剧情下面的箭头切换
            this.isShow = !this.isShow
        },
        handleBack() { // 返回上一个页面
            this.$router.back()
        },
        handlePreview (index) {
            if (!this.filmInfo.photos) return
            // console.log(this.filmInfo.photos)
            ImagePreview ({
                images:this.filmInfo.photos,
                // ['https://img01.yzcdn.cn/vant/apple-1.jpg'],
                startPosition: index,
                closeable: true,
                closeIconPosition: 'top-left'
            })
        }
    },
    mounted() {
        // console.log('created', this.$route.params.myid)
        // this.$route 当前匹配的路由
        //axios 利用id 发送到详情接口，获取详情数据，布局页面
        http({
            url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=2035484`,
            headers: {
                "X-Host": "mall.film-ticket.film.info"
            }
        }).then(res => {
            this.filmInfo = res.data.data.film
        })
    }
}
</script>
<style lang="scss" scoped>
.imgDiv {
    height: 13.125rem;
    width: 100%;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        position: absolute;
        top: -70%;
    }
}

.back {
    background-image: url('@/assets/back.png');
    background-position: center;
    background-size: cover;
    width: 30px;
    height: 30px;
    // background: white;
    border-radius: 15px;
    position: fixed;
    top: 8px;
    left: 8px;
    z-index: 101;
    font-size: 30px;
}

.filmDetail {
    width: calc(100% - 30px);
    // height: 10.2188rem;
    transition: all .5s ease;
    padding: 12px 15px 15px 15px;

    .col {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .filmName {
            width: 256px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            .grey-name {
                color: #191a1b;
                font-size: 18px;
                height: 24px;
                line-height: 24px;
                margin-right: 7px;
            }

            .grey-type {
                font-size: 9px;
                color: #fff;
                background-color: #d2d6dc;
                height: 14px;
                line-height: 14px;
                padding: 0 2px;
                border-radius: 2px;
                // display: inline-block;
            }
        }


        .film-grade {
            width: calc(100% - 250px);
            text-align: right;
            color: #ffb232;

            .grade {
                font-size: 18px;
                font-style: italic;
            }

            .text {
                font-size: 10px;
            }
        }
    }

    .grey-text {
        font-size: 13px;
        color: #797d82;
        margin-top: 4px;
    }

    .text-detail {
        margin-top: 12px;
        overflow: hidden;

    }

    .hidden {
        height: 35px;

    }

    .toggle {
        height: 16px;
        text-align: center
    }
}

.swiperArea {
    background-color: #F4F4F4;
    padding-top: 10px;
    padding-bottom: 10px;
}

.actors {
    background: white;

    .actor-title {
        font-size: 16px;
        padding: 15px;
        height: 22.5px;
        width: calc(100% - 30px);
    }

    .actor-body {
        .personal-info {
            display: flex;
            width: 85px;
            height: 131px;
            justify-content: flex-start;
            flex-direction: column;
            text-align: center;

            .img-box {
                height: 85px;
                width: 85px;
                background-position: center;
                background-size: cover;
            }

            .act-name {

                font-size: 12px;
                margin-top: 10px;
            }

            .act-role {
                font-size: 10px;
                color: #797d82;
            }
        }
    }
}

.photos {
    margin-top: 10px;
    margin-bottom: 50px;
    // padding-bottom: 60px;
    background: white;

    .photo-title {
        font-size: 16px;
        height: 32px;
        width: calc(100% - 30px);
        padding: 15px;

        .photos-to-all {
            float: right;
            font-size: 13px;
            color: #797d82;

            i {
                font-size: 10px;
            }
        }
    }

    .photo-body {
        height: 115px;

        .box {
            width: 150px;
            height: 100px;
            background-position: center;
            background-size: cover;
            // position: relative;
            // overflow: hidden;
            // img {
            //     width: 100%;
            //     position: absolute;
            // top: -50%;
            // }
        }

    }

    .empty {
        font-size: 14px;
        color: #bdc0c5;
        margin: auto;
        text-align: center;
        line-height: 115px;
    }
}
</style>