<template>
  <item :order-list.sync="orderList" :cancel="cancel"></item>
</template>

<script>
import item from './item';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'YYYDD',
    created(){
        this.set_order_tj({type:'1',status:'1'});
    },
    components:{
      item:item,
    },
    computed:{
        ...mapGetters({
            orderList:'getYyydd_tj'
        })
    },
    methods: {
        ...mapActions(['set_order_tj','orderCancel_tj']),
        cancel(orderNo) {
            this.orderCancel_tj({orderNo:orderNo,callback(res){
                if (res.code == 200 && res.data == true) {
                    $.toast("操作成功");
                    this.set_order_tj({type:'1',status:'1'});
                } else {
                    $.alert(res.message)
                }
            }});
        }
    }
}

</script>
