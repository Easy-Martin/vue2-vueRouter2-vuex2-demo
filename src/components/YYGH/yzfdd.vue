<template>
     <item :order-list="orderList" :cancel="cancel"></item>
</template>
<script>
    import item from './item';
    import { mapGetters, mapActions } from 'vuex';
    import {http} from '../../assets/public';
    export default{
        name:'GH_QBDD',
        components:{
            item:item,
        },
        mounted(){
            this.set_order_gh({type:'Y011',status:'1'});
        },
        computed:{
            ...mapGetters({
                orderList:'getYzfdd_gh'
            })
        },
        methods:{
            ...mapActions(['set_order_gh']),
            cancel(){

            }
        }
    }
</script>