import { SET_QBDD_ZJ,SET_YZFDD_ZJ,SET_TKDD_ZJ,SET_DZFDD_ZJ,SET_YQXDD_ZJ} from '../types';
const state = {
  qbdd:[],
  yzfdd:[],
  dzfdd:[],
  yqxdd:[],
  tkdd:[]
};
//0已付款，1未付款，2已退款，3已完成
const mutations = {
  [SET_QBDD_ZJ](state,data){
    state.qbdd = data;
  },
  [SET_YZFDD_ZJ](state,data){
    state.yzfdd = data;
  },
  [SET_DZFDD_ZJ](state,data){
    state.dzfdd = data;
  },
  [SET_YQXDD_ZJ](state,data){
    state.yqxdd = data;
  },
  [SET_TKDD_ZJ](state,data){
    state.tkdd = data;
  }
};
export default {
  state,
  mutations,
}
