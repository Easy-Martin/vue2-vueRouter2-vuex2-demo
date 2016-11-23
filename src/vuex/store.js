import Vue from 'vue'
import Vuex from 'vuex'
import YYGH from './modules/YYGH'
import YYTJ from './modules/YYTJ'
import ZJJS from './modules/ZJJS'
import * as actions from './actions'
import * as getters from './getters'
Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    YYGH,
    YYTJ,
    ZJJS
  }
})
