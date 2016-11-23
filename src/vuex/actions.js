'use strict';

//获取体检订单方法
import TJ from '../api/tj';

//获取挂号订单方法
import GH from '../api/gh';

//获取诊间订单方法
import ZJ from '../api/zj';

//加载mutations
import * as types from './types';


/**
 * 预约体检
 * @param commit
 * Object
 * 
 * @param payload
 * Object
 * 调用体检订单加载方法
 * 通过commit调用types mutations 改变state状态
 */
export const set_order_tj = ({commit},payload) =>{
    TJ.setDd(payload, res =>{
    if(res.code==200){
      switch (payload.status) {
        case '1':
          commit(types.SET_YYYDD_TJ,res.data);
          break;
        case '2':
          commit(types.SET_YTJDD_TJ,res.data);
          break;
        case '3':
          commit(types.SET_YQXDD_TJ,res.data);
          break;
        case '4':
          commit(types.SET_YCXDD_TJ,res.data);
          break;
        default:
          commit(types.SET_QBDD_TJ,res.data);
          break;
      }
    }else{
      switch (payload.status) {
        case '1':
          commit(types.SET_YZFDD_TJ,[]);
          break;
        case '2':
          commit(types.SET_DZFDD_TJ,[]);
          break;
        case '3':
          commit(types.SET_YQXDD_TJ,[]);
          break;
        case '4':
          commit(types.SET_TKDD_TJ,[]);
          break;
        default:
          commit(types.SET_QBDD_TJ,[]);
          break;
      }
    }
  })
};

export const setDdxq_tj = ({commit},payload)=>{
  TJ.setDdxq(payload,res => {
    if(res.code==200){
      commit(types.SET_DDXQ_TJ,res.data);
    }else{
      commit(types.SET_DDXQ_TJ,{});
    }
  })
};


export const orderCancel_tj = ({commit},payload)=>{
  TJ.orderCancel(payload,res =>{
    payload.callback(res);
  })
};
export const isCreate_tj = ({commit},payload)=>{
  TJ.isCreate(res => {
    payload.callback(res);
  })
};


/**
 * 预约挂号
 * @param commit
 * Object
 * 
 * @param payload
 * Object
 * 调用体检订单加载方法
 * 通过commit调用types mutations 改变state状态
 */

export const set_order_gh = ({commit},payload) => {
  GH.setDd(payload, res =>{
    if(res.code==200){
      switch (payload.status) {
        case '1':
          commit(types.SET_YZFDD_GH,res.data);
          break;
        case '2':
          commit(types.SET_DZFDD_GH,res.data);
          break;
        case '3':
          commit(types.SET_YQXDD_GH,res.data);
          break;
        case '4':
          commit(types.SET_TKDD_GH,res.data);
          break;
        default:
          commit(types.SET_QBDD_GH,res.data);
          break;
      }
    }else{
      switch (payload.status) {
        case '1':
          commit(types.SET_YZFDD_GH,[]);
          break;
        case '2':
          commit(types.SET_DZFDD_GH,[]);
          break;
        case '3':
          commit(types.SET_YQXDD_GH,[]);
          break;
        case '4':
          commit(types.SET_TKDD_GH,[]);
          break;
        default:
          commit(types.SET_QBDD_GH,[]);
          break;
      }
    }
  })
};



/**
 * 诊间结算
 * @param commit
 * Object
 * 
 * @param payload
 * Object
 * 调用体检订单加载方法
 * 通过commit调用types mutations 改变state状态
 */

export const set_order_zj = ({commit},payload) => {
  ZJ.setDd(payload, res =>{
    if(res.code==200){
      switch (payload.status) {
        case '1':
          commit(types.SET_YZFDD_ZJ,res.data);
          break;
        case '2':
          commit(types.SET_DZFDD_ZJ,res.data);
          break;
        case '3':
          commit(types.SET_YQXDD_ZJ,res.data);
          break;
        case '4':
          commit(types.SET_TKDD_ZJ,res.data);
          break;
        default:
          commit(types.SET_QBDD_ZJ,res.data);
          break;
      }
    }else{
      switch (payload.status) {
        case '1':
          commit(types.SET_YZFDD_ZJ,[]);
          break;
        case '2':
          commit(types.SET_DZFDD_ZJ,[]);
          break;
        case '3':
          commit(types.SET_YQXDD_ZJ,[]);
          break;
        case '4':
          commit(types.SET_TKDD_ZJ,[]);
          break;
        default:
          commit(types.SET_QBDD_ZJ,[]);
          break;
      }
    }
  })
}

export const setDdxq_zj = ({commit},payload)=>{
  ZJ.setDdxq(payload,res => {
    if(res.code==200){
      commit(types.SET_DDXQ_ZJ,res.data);
    }else{
      commit(types.SET_DDXQ_ZJ,{});
    }
  })
};