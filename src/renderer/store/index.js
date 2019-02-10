import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState } from 'vuex-electron'
// import { createSharedMutations } from 'vuex-electron' // 使用该插件导致mutation调用失败，具体原因未知

import modules from './modules'

Vue.use(Vuex)
console.log(modules)
export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState()
    // createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
