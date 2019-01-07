import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import blog from './modules/blog'

Vue.use(Vuex)

const vxLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    blog
  },
  plugins: [vxLocalStorage.plugin]
})
