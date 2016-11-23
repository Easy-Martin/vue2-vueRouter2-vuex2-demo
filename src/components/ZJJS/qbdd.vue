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
            this.set_order_zj({type:'Y011'});
        },
        computed:{
            ...mapGetters({
                orderList:'getQbdd_zj'
            })
        },
        methods:{
            ...mapActions(['set_order_zj']),
            cancel(){

            }
        }
    }
</script>