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
            url:BASE_URL+'/order/ghlist',
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
    }
}