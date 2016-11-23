
<template>

  <item :order-list.sync="orderList" :cancel="cancel"></item>

</template>

<script>
import item from './item';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'QBDD',
    created(){
        let _self = this;
        this.isCreate_tj({callback(res){
            _self.set_order_tj({type:'1'});
        }})
    },
    components:{
      item:item
    },
    computed:{
        ...mapGetters({
        orderList: 'getQbdd_tj'
      })
    },
    methods: {
        ...mapActions(['set_order_tj','isCreate_tj','orderCancel_tj']),
        cancel(orderNo) {
            let _self = this;
            this.orderCancel_tj({orderNo:orderNo,callback(res){
                if (res.code == 200 && res.data == true) {
                    $.toast("操作成功");
                    _self.set_order_tj({type:'1'});
                } else {
                    $.alert(res.message)
                }
            }});
        }
    }
}

</script>
