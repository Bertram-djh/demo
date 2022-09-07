<!--
 * @Author: Bertram
 * @LastEditors: Bertram
-->
<!-- 电影分类导航栏组件 -->
<template>
    <ul>
        <!-- 声明式导航 -->
        <router-link to="/films/nowplaying" custom v-slot="{ navigate, isActive }">
            <li @click="navigate">
                <span :class="isActive ? 'topnav' : ''">正在热映</span>
            </li>
        </router-link>
        <router-link to="/films/comingsoon" custom v-slot="{ navigate, isActive }">
            <li @click="navigate">
                <span :class="isActive ? 'topnav' : ''">即将上映</span>
            </li>
        </router-link>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    display: flex;
    height: 49px;
    border-bottom: 1px solid #ededed;
    z-index: 100;

    li {
        flex: 1;
        display: flex;
        justify-content: center;
        span {
            line-height: 49px;
            font-size: 13.5px;
            height: 49px;
        }

    }
}
.topnav {
    color: #ff5f16;
    border-bottom: .0625rem solid #ff5f16;
}
</style>
