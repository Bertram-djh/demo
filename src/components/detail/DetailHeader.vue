<!--
 * @Author: Bertram
 * @LastEditors: Bertram
-->
<template>
    <div>
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
div {
    font-size: 17px;
    line-height: 44px;
    width: 100vw;
    height: 44px;
    text-align: center;
    background: white;
    position: fixed;
    top: 0px;
    z-index: 100;
}
</style>