import Vue from 'vue'
import Vuex from 'vuex'
import exhibit from './exhibit/index.js'
import user from './user/index.js'
import shared from './shared/index.js'
Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    exhibit: exhibit,
    user: user,
    shared: shared
  }
})
