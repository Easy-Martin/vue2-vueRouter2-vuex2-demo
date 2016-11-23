<template>
  <item :order-list.sync="orderList"></item>
</template>

<script>
import item from './item';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'YTJDD',
    created(){
        this.set_order_tj({type:'1',status:'2'});
    },
    components:{
      item:item
    },
    computed:{
        ...mapGetters({
            orderList: 'getYtjdd_tj'
        })
    },
    methods:{
        ...mapActions(['set_order_tj'])
    }
}

</script>
