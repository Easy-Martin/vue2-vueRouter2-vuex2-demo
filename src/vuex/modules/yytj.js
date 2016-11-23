import { SET_QBDD_TJ, SET_YYYDD_TJ , SET_YCXDD_TJ, SET_YTJDD_TJ, SET_DDXQ_TJ } from '../types';
const state = {
  qbdd:[],
  ycxdd:[],
  ytjdd:[],
  yyydd:[],
  ddxq:{}
};
//0已付款，1未付款，2已退款，3已完成
const mutations = {
  [SET_QBDD_TJ](state,data){
    state.qbdd = data;
  },
  [SET_YYYDD_TJ](state,data){
    state.yyydd = data;
  },
  [SET_YCXDD_TJ](state,data){
    state.ycxdd = data;
  },
  [SET_YTJDD_TJ](state,data){
    state.ytjdd = data;
  },
  [SET_DDXQ_TJ](state,data){
    state.ddxq = data;
  }
};
export default {
  state,
  mutations,
}
