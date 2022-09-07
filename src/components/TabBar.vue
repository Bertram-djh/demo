<!--
 * @Author: Bertram
 * @LastEditors: Bertram
-->
<!-- 底部选项卡组件 -->
<template>
    <footer>
        <ul class="tabbar">
            <router-link to="/films" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'daohang' : ''">
                    <i class="iconfont icon-dianyingpiaoiocn"></i><span>电影</span>
                </li>
            </router-link>
            <router-link to="/cinemas" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'daohang' : ''">
                    <i class="iconfont icon-yingyuan"></i><span>影院</span>
                </li>
            </router-link>
            <router-link to="/news" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'daohang' : ''">
                    <i class="iconfont icon-zixun"></i><span>资讯</span>
                </li>
            </router-link>
            <router-link to="/center" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'daohang' : ''">
                    <i class="iconfont icon-wode1"></i><span>个人</span>
                </li>
            </router-link>
        </ul>
    </footer>
</template>

<script>
import '@/assets/iconfont/iconfont.css'
export default {

}
</script>
<style lang="scss" scoped>
footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 49px;
    border: 1px solid #ededed;
    background: white;
    z-index: 100;

    ul {
        display: flex;

        li {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 49px;
            color: #797d82;

            span {
                font-size: 10px;
            }

            i {
                font-size: 23px;
            }
        }
    }
}

.daohang {
    color: #ff5f16;
}
</style>
