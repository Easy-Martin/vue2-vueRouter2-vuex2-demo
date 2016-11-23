<style>

.weui_media_box.weui_media_appmsg .weui_media_hd {
    width: 80px;
}

.weui_media_desc {
    padding-top: 4px;
}

.notice {
    text-align: center;
    color: #999;
    font-size: 14px;
    padding: 15px;
}
.weui_media_appmsg{
    border-top:1px solid #f0f0f0;
    border-bottom:1px solid #f0f0f0;
}
.weui_panel:first-child{
    margin-top:10px;
}
.weui_panel_footer{
    padding: 10px 15px 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align:center;
    -ms-flex-align:center;
        align-items:center;
}
.footFlex{
    -webkit-box-flex:1;
      -ms-flex:1;
          flex:1
}
.footr{
    display: -webkit-box;
    display: flex;
    position:relative;
}
.footr a{
    float:right;
    right:0;
    top:-1px;
}
.weui_panel_footer:after{
    color:#fff;
    border:none;
}
.weui_panel_gh{
    box-shadow:1px 6px 10px rgba(0,0,0,0.2)
}
</style>

<template>
<div>
    <div v-for="item in orderList" class="weui_panel weui_panel_access weui_panel_gh">
        <router-link :to="{ name:'ghmsg', params: { orederId: item.orderNum }}" class="weui_panel_ft">订单号：{{item.orderNum}}</router-link>
        <div class="weui_panel_bd">
            <a href="javascript:" class="weui_media_box weui_media_appmsg">
                <div class="weui_media_bd">
                    <h4 class="weui_media_title">{{item.shopName}}</h4>
                    <p class="weui_media_desc">{{item.hospital}}</p>
                </div>
            </a>
        </div>
        <div class="weui_panel_hd weui_panel_footer">
            <span class="footFlex footl">金额：<span style="color:#ff4830">{{item.price}}元</span></span>
            <span v-if="item.status==1" class="footFlex footr">&nbsp;
                <a href="javascript:;" style="margin-top:0;font-size:12px;color:#36a7ff;border:none;" class="weui_btn weui_btn_mini weui_btn_plain_primary">已支付</a>
                <a href="javascript:;" @click="cancel" style="margin-top:0;font-size:12px;border-color:#f61659;color:#f61659"  class="weui_btn weui_btn_mini weui_btn_plain_primary">&nbsp;&nbsp;&nbsp;&nbsp;退款&nbsp;&nbsp;&nbsp;&nbsp;</a>
            </span>
            <span v-if="item.status==2" class="footFlex footr">&nbsp;
                <a href="javascript:;" style="margin-top:0;font-size:12px;color:#f67b16;border:none;" class="weui_btn weui_btn_mini weui_btn_plain_primary">待支付</a>
                <a href="javascript:;" @click="cancel" style="margin-top:0;font-size:12px;border-color:#36a7ff;color:#36a7ff"  class="weui_btn weui_btn_mini weui_btn_plain_primary">立即支付</a>
            </span>
            <span v-if="item.status==3" class="footFlex footr">&nbsp;
                <a href="javascript:;" style="margin-top:0;font-size:12px;color:#f67b16;border:none;position:absolute;right:0" class="weui_btn weui_btn_mini weui_btn_plain_primary">已取消</a>
            </span>
            <span v-if="item.status==4" class="footFlex footr">&nbsp;
                <a href="javascript:;" style="margin-top:0;font-size:12px;color:#f61659;border:none;position:absolute;right:0" class="weui_btn weui_btn_mini weui_btn_plain_primary">退款完成</a>
            </span>
        </div>
    </div>
    <div v-if="orderList.length==0" class="notice">暂无订单</div>
</div>
</template>

<script>

export default {
    name: 'ITEM',
    props:{
      orderList:{
        type:Array,
        require:true
      },
      cancel:{
        type:Function,
        require:false
      }
    }
}

</script>
