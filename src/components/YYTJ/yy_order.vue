
<template>
  <div>
      <nav-menu></nav-menu>
      <router-view></router-view>
  </div>
</template>

<script>
import navMenu from './header';
import {refresh} from '../../assets/public';
export default {
    name: 'yy_order',
    components:{
      navMenu:navMenu
    },
    created(){
      refresh('预约体检订单');
    }
}

</script>
