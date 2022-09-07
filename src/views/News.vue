<!--
 * @Author: Bertram
 * @LastEditors: Bertram
-->
<template>
    <div ref="news">
    </div>
</template>
<script>
import http from '@/util/http'
export default {
  mounted () {
    http({
      url: 'gateway?actId=ElzMZU125260',
      headers: {
        'X-Host': 'mall.act.static-page.info'
      }
    }).then(res => {
      this.$refs.news.innerHTML = res.data.data.data.content
    })
  }
}
</script>
