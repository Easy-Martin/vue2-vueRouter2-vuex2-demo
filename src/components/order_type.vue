<style>
.weui_panel:first-child{
  margin-top:10px;
}
.weui_cells {
    font-size: 16px;
}

.weui_cell img {
    width: 40px;
    vertical-align: middle;
    padding-right: 10px;
}

</style>

<template>

<div class="weui_panel">
    <div class="weui_panel_bd">
        <div class="weui_media_box weui_media_small_appmsg">
            <div class="weui_cells weui_cells_access">
                <router-link v-for="item in orderType" class="weui_cell" :to="{ path:item.path }">
                    <div class="weui_cell_hd"><img :src="item.icon"></div>
                    <div class="weui_cell_bd weui_cell_primary">
                        <p>{{item.name}}</p>
                    </div>
                    <span class="weui_cell_ft"></span>
                </router-link>
            </div>
        </div>
    </div>
</div>

</template>

<script>

export default {
    data() {
        return {
            orderType: [{
                name: '在线预约',
                path: '/yyOrder/qbdd',
                icon: require('../assets/c.png'),
            }, {
                name: '预约挂号',
                path: '/ghOrder/qbdd',
                icon: require('../assets/b.png')
            }, {
                name: '诊间结算',
                path: '/zjOrder/qbdd',
                icon: require('../assets/a.png')
            }]
        }
    },
    mounted(){
        sessionStorage.setItem('index', 0);
        $.hideLoading();
    }
}

</script>
