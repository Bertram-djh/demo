<!--
 * @Author: Bertram
 * @LastEditors: Bertram
-->
<template>
    <div>
        <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
        <div v-if="value">
            <cinemas-List :dataList="searchCinemas"></cinemas-List>
        </div>
    </div>

</template>
<script>
import cinemasList from '@/components/cinemas/CinemasList'
import '@vant/touch-emulator'
export default {
  components: { cinemasList },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch () {

    },
    onCancel () {
      this.$router.back()
    }
  },
  mounted () {
    if (this.$store.state.cityCinemas.length === 0) {
      this.$store.dispatch('getCityCinemas', this.$store.state.cityId)
    }
  },
  computed: {
    searchCinemas () {
      return this.$store.state.cityCinemas.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase()) ||
            item.address.toUpperCase().includes(this.value.toUpperCase()))
    }
  }
}
</script>
