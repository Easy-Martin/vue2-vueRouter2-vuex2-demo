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
.weui_panel_yy{
    box-shadow:1px 6px 10px rgba(0,0,0,0.2)
}
</style>

<template>
<div>
<div v-for="item in orderList" class="weui_panel weui_panel_access weui_panel_yy">
    <router-link :to="{ name:'yymsg', params: { orederId: item.orderNum }}" class="weui_panel_ft">订单号：{{item.orderNum}}</router-link>
    <div class="weui_panel_bd">
        <a href="javascript:" class="weui_media_box weui_media_appmsg">
            <div class="weui_media_bd">
                <h4 class="weui_media_title">{{item.shopName}}</h4>
                <p class="weui_media_desc">{{item.hospital}}</p>
            </div>
        </a>
    </div>
    <div class="weui_panel_hd" style="overflow:hidden;zoom:1">
        <span style="float:left;">自付：<span style="color:#ff4830">{{item.price}}元</span></span>
        <div style="float:right">
            <a v-if="item.status==1" href="javascript:;" style="margin-top:0;font-size:12px;border-color:#36a7ff;color:#36a7ff" @click="cancel(item.orderNum)" class="weui_btn weui_btn_mini weui_btn_plain_primary">取消预约</a>
            <a v-if="item.status==4" href="javascript:;" style="margin-top:0;font-size:12px;color:#ff4830;border:none;" class="weui_btn weui_btn_mini weui_btn_plain_primary">预约已取消</a>
            <a v-if="item.status==2" href="javascript:;" style="margin-top:0;font-size:12px;color:#36a7ff;border:none" class="weui_btn weui_btn_mini weui_btn_plain_primary">体检已完成</a>
            <a v-if="item.status==3" href="javascript:;" style="margin-top:0;font-size:12px;color:#36a7ff;border:none" class="weui_btn weui_btn_mini weui_btn_plain_primary">体检已完成</a>
        </div>

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
