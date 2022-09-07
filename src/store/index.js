/*
 * @Author: Bertram
 * @LastEditors: Bertram
 */
import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    reducer: (state) => {
      return {
        cityId: state.cityId,
        cityName: state.cityName
      }
    }
  })],
  // 公共状态
  state: {
    cityId: '310100',
    cityName: '上海',
    cityCinemas: [],
    isShow: true
  },
  getters: {
  },
  mutations: {
    changeCity(state, cityName) {
      state.cityName = cityName
    },
    changeCityId(state, cityId) {
      state.cityId = cityId
    },
    changeCityCinemas(state, cinemasList) {
      state.cityCinemas = cinemasList
    },
    clearCityCinemas(state) {
      state.cityCinemas = []
    },
    show(state) {
      state.isShow = true
    },
    hide(state) {
      state.isShow = false
    }
  },
  // 异步请求后端数据
  actions: {
    getCityCinemas(store, id) {
      return http({
        url: `gateway?cityId=${id}&ticketFlag=1&k=1846820`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        // 将获取到的数据通过commit mutations存储在state中
        store.commit('changeCityCinemas', res.data.data.cinemas)
      })
    }
  },
  modules: {
  }
})
