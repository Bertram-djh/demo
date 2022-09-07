<!--
 * @Author: DJH
 * @Date: 2022-08-25 14:05:47
 * @LastEditors: DJH
 * @LastEditTime: 2022-08-26 11:02:19
 * @Description: file content
 * @FilePath: \testcli\src\views\Login.vue
-->
<template>
    <div>
        login
        <button @click="handleClick">登录</button>
        <button>注册</button>
    </div>
</template>
<script>
    export default {
        methods: {
            handleClick () {
                setTimeout(() => {
                    localStorage.setItem('token','djh')
                    this.$router.push(this.route.query.redirect)
                    // 根据路由元信息跳转到之前想访问的页面
                },100)
            }
        }
    }
</script>