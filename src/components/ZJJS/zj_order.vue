
<template>
  <div>
      <nav-menu></nav-menu>
      <router-view></router-view>
  </div>
</template>

<script>
import navMenu from './header'
import {refresh} from '../../assets/public';
export default {
    name: 'zj_order',
    components:{
      navMenu:navMenu
    },
    created(){
      refresh('诊间结算订单');
    }
}

</script>
