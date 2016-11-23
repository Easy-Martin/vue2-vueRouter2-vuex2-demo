<template>
  <item :order-list.sync="orderList"></item>
</template>
<script>
import item from './item';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'YCXDD',
    mounted() {
        this.set_order_tj({type:'1',status:'4'});
    },
    components:{
      item:item
    },
    computed:{
        ...mapGetters({
            orderList: 'getYcxdd_tj'
        })
    },
    methods:{
        ...mapActions(['set_order_tj'])
    }
}

</script>
