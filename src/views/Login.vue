<!--
 * @Author: Bertram
 * @LastEditors: Bertram
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
        localStorage.setItem('token', 'djh')
        this.$router.push(this.route.query.redirect)
        // 根据路由元信息跳转到之前想访问的页面
      }, 100)
    }
  }
}
</script>
