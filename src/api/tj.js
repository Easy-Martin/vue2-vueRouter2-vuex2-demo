'use strict';

import {Ajax} from '../assets/public';
const BASE_URL = 'http://127.0.0.1:8360';

export default {
    setDd(payload,callback){
        let params = null;
        $.showLoading();
        if(payload && payload.status){
            params = {
                type:payload.type,
                status:payload.status,
                userInfo:AES
            }
        }else {
            params = {
                type:payload.type,
                userInfo:AES
            }
        }
        let options = {
            type:'post',
            data:params,
            url:BASE_URL+'/publicquery/bookOrder/orderList',
        }
        Ajax(options).done(res =>{
            callback(res);
        }).fail(function() {
            console.log("error");
        }).always(function(){
            $.hideLoading();
            setTimeout(function(){
                $('.weui_loading_toast').remove();
            },500)
        })
    },
    setDdxq(payload,callback){
        $.showLoading();
        let options = {
            type:'post',
            data:{
                orderNo:payload.orderNo,
                userInfo:AES
            },
            url:BASE_URL+'/publicquery/bookOrder/orderDetails',
        }
        Ajax(options).done(res =>{
            callback(res);
        }).fail(function() {
            console.log("error");
        }).always(function(){
            $.hideLoading();
            setTimeout(function(){
                $('.weui_loading_toast').remove();
            },500)
        })
    },
    orderCancel(payload,callback){
        $.showLoading();
        let options = {
            type:'post',
            data:{
                orderNo:payload.orderNo,
                userInfo:AES
            },
            url:BASE_URL+'/publicquery/bookOrder/orderCancel',
        }
        Ajax(options).done(res =>{
            callback(res);
        }).fail(function() {
            $.alert('取消失败');
            console.log("error");
        }).always(function(){
            $.hideLoading();
            setTimeout(function(){
                $('.weui_loading_toast').remove();
            },500)
        })
    },
    isCreate(callback){
        let options = {
            type:'post',
            data:{
                userInfo:AES
            },
            url:BASE_URL+'/publicquery/onlinemedicalapp/accountGrant',
        }
        Ajax(options).fail(function() {
            console.log("error");
        }).always(res =>{
            callback(res);
            setTimeout(function(){
                $('.weui_loading_toast').remove();
            },500)
        })
    }
}
