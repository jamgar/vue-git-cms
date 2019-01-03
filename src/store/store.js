import Vue from 'vue'
import Vuex from 'vuex'

import blog from './modules/blog'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    blog
  }
})
