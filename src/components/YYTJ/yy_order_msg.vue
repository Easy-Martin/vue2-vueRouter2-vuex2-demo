<style media="screen">
	.weui_btn_blue {
		background-color: #36a7ff;
	}
	
	.weui_btn_blue:not(.weui_btn_disabled):visited {
		color: #FFFFFF;
	}
	
	.weui_btn_blue:not(.weui_btn_disabled):active {
		color: rgba(255, 255, 255, 0.4);
		background-color: #2a8ad5;
	}
	
	.footbuy {
		padding: 15px;
	}
	
	.notice3 {
		padding: 10px 15px;
		font-size: 14px;
		color: #30d4ff;
	}
	
	.weui_cell,
	.weui_panel {
		font-size: 14px;
	}
</style>

<template>
	<div>
		<p class="notice3">{{orderInfo.shopName}}</p>
		<div class="weui_cells" style="margin-top:0">
			<div class="weui_cell">
				<div class="weui_cell_bd weui_cell_primary">
					<p>订单号</p>
				</div>
				<div class="weui_cell_ft">
					{{orderInfo.orderNum}}
				</div>
			</div>
			<div class="weui_cell">
				<div class="weui_cell_bd weui_cell_primary">
					<p>订单状态</p>
				</div>
				<div class="weui_cell_ft">
					<span v-if="orderInfo.status==1" style="color:#30d4ff">已预约</span>
					<span v-if="orderInfo.status==2" style="color:#30d4ff">已完成体检</span>
					<span v-if="orderInfo.status==3" style="color:#30d4ff">已出体检报告</span>
					<span v-if="orderInfo.status==4" style="color:#ff4830">已取消预约</span>
				</div>
			</div>
			<div class="weui_cell">
				<div class="weui_cell_bd weui_cell_primary">
					<p>婚姻状况</p>
				</div>
				<div v-if="orderInfo.hyzk==0" class="weui_cell_ft">
					未婚
				</div>
				<div v-if="orderInfo.hyzk==1" class="weui_cell_ft">
					已婚
				</div>
			</div>
			<div class="weui_cell">
				<div class="weui_cell_bd weui_cell_primary">
					<p>预约日期</p>
				</div>
				<div class="weui_cell_ft">
					{{orderInfo.tjDate}}
				</div>
			</div>
			<div class="weui_cell">
				<div class="weui_cell_bd weui_cell_primary">
					<p>体检医院</p>
				</div>
				<div class="weui_cell_ft">
					{{orderInfo.hospital}}
				</div>
			</div>
		</div>
       
		<div v-if="orderInfo.priceList!='null' || orderInfo.priceList.length!=0">
			<p class="notice3">自选项目</p>
			<div class="weui_cells" style="margin-top:0">
				<div v-for="item in orderInfo.priceList" class="weui_cell">
					<div class="weui_cell_bd weui_cell_primary">
						<p>{{item.xmmc}}</p>
					</div>
					<div class="weui_cell_ft">
						￥{{item.subJg}}
					</div>
				</div>
			</div>
		</div>
		<div class="weui_cells">
			<div class="weui_cell">
				<div class="weui_cell_bd weui_cell_primary">
					<p>自付</p>
				</div>
				<div class="weui_cell_ft" style="color:#ff4830">
					￥<span style="font-size:20px;">{{orderInfo.totalPrice}}</span>
				</div>
			</div>
		</div>
		<div class="weui_panel weui_panel_access">
			<div class="weui_panel_hd">备注</div>
			<div class="weui_panel_bd">
				<div class="weui_media_box weui_media_text">
					{{orderInfo.remark}}
				</div>

			</div>
		</div>
		<div class="footbuy" v-if="orderInfo.status==1">
			<a style="font-size:14px;" href="javascript:;" @click="cancel(orderInfo.orderNum)" class="weui_btn weui_btn_blue">取消预约</a>
		</div>
	</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'DDXQ',
	created(){
 		this.setDdxq_tj({orderNo:this.$route.params.orederId});
	},
    computed:{
        ...mapGetters({
            orderInfo: 'getDdxq_tj'
        })
    },
    methods: {
        ...mapActions(['setDdxq_tj']),
        cancel(orderNo) {
            this.orderCancel_tj({orderNo:orderNo,callback(res){
                if (res.code == 200 && res.data == true) {
                    $.toast("操作成功");
                    this.setDdxq_tj({orderNo:this.$route.params.orederId});
                } else {
                    $.alert(res.message)
                }
            }});
        }
    }
}

</script>