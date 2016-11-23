
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
    name: 'yy_order',
    components:{
      navMenu:navMenu
    },
    created(){
      refresh('在线挂号订单');
    }
}

</script>
