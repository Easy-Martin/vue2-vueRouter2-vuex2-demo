<template>
     <item :order-list="orderList" :cancel="cancel"></item>
</template>
<script>
    import item from './item';
    import { mapGetters, mapActions } from 'vuex';
    import {http} from '../../assets/public';
    export default{
        name:'GH_TKDD',
        components:{
            item:item,
        },
        mounted(){
            this.set_order_zj({type:'Y011',status:'4'});
        },
        computed:{
            ...mapGetters({
                orderList:'getTkdd_zj'
            })
        },
        methods:{
            ...mapActions(['set_order_zj']),
            cancel(){

            }
        }
    }
</script>