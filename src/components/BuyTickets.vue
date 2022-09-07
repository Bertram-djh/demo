<!--
 * @Author: Bertram
 * @LastEditors: Bertram
-->
<!-- 购票组件 -->
<template>
    <div>
        <span>{{data}}</span>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: String,
            default: '购票'
        }
    }
}
</script>
<style lang="scss" scoped>
    div {
        width: 48px;
        height: 23px;
        border-radius: 4px;
        border: 1px solid #ff5f16;
        color: #ff5f16;
        background: white;
        display: flex;
        // margin: auto;
        justify-content: center;
        // align-items: center;
        span {
            font-size: 16px;
            line-height: 23px;
        }

    }
</style>