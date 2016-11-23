import { SET_QBDD_GH,SET_YZFDD_GH,SET_TKDD_GH,SET_DZFDD_GH,SET_YQXDD_GH} from '../types';
const state = {
  qbdd:[],
  yzfdd:[],
  dzfdd:[],
  yqxdd:[],
  tkdd:[]
};
//0已付款，1未付款，2已退款，3已完成
const mutations = {
  [SET_QBDD_GH](state,data){
    state.qbdd = data;
  },
  [SET_YZFDD_GH](state,data){
    state.yzfdd = data;
  },
  [SET_DZFDD_GH](state,data){
    state.dzfdd = data;
  },
  [SET_YQXDD_GH](state,data){
    state.yqxdd = data;
  },
  [SET_TKDD_GH](state,data){
    state.tkdd = data;
  }
};
export default {
  state,
  mutations,
}
