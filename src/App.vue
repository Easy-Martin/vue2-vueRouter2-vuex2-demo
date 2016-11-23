<style>
  @import './assets/weui/lib/weui.css';
  @import './assets/weui/css/jquery-weui.css';
  body{
    background:#f0f0f0;
  }
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import FastClick from 'fastclick';
import 'weui';
export default {
  name: 'App',
  created(){
    FastClick.attach(document.body);
  }
}
</script>

