import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex) // 使用vuex

export default new Vuex.Store({ // 新建仓库
  state,
  actions,
  mutations
})
