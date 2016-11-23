import Vue from 'vue'
import VueRouter from 'vue-router'
import { YYTJ, YYTJ_MSG } from './YYTJ'
import { YYGH } from './YYGH'
import { ZJJS } from './ZJJS'
Vue.use(VueRouter)
const BASE = {
  path: '/',
  component: resolve => {
    require(['../components/order_type'], resolve)
  }
}

const routes = [BASE, YYTJ, YYTJ_MSG, YYGH, ZJJS]
export default new VueRouter({
    routes
})
