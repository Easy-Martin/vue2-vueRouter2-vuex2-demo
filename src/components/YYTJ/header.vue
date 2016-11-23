<style>
.weui-row {
    font-size: 14px;
    text-align: center;
    position: relative;
    border-bottom: 1px solid #ddd;
    background: #fff;
}

a,
a:visited {
    color: #333;
}

.weui-row .weui-col-25 {
    padding: 10px 0;
}

.weui-row .active {
    color: #36a7ff;
}

.moveYY {
    position: absolute;
    width: 25%;
    height: 2px;
    background: #36a7ff;
    bottom: 0;
    left: 0;
    transition: left 0.5s ease;
}

</style>

<template>

<div class="weui-row weui-no-gutter">
    <a v-for="(item, index) in menulist" @click="targerMove($event,index,item.path)" class="weui-col-25" :class="{active:(index==0 )}">
        {{item.name}}
    </a>
    <span class="moveYY"></span>
</div>

</template>

<script>
export default {
    data() {
            return {
                menulist: [{
                    name: '全部订单',
                    path: '/yyOrder/qbdd'
                }, {
                    name: '已预约',
                    path: '/yyOrder/yyy'
                }, {
                    name: '已撤销',
                    path: '/yyOrder/ycx'
                }, {
                    name: '已体检',
                    path: '/yyOrder/ytj'
                }]
            }
        },
        mounted(){
            let eles = document.querySelectorAll('.weui-col-25');
            let index = sessionStorage.getItem('index');
            let _left = eles[index].offsetLeft;
            let moveEle = document.querySelector('.moveYY');
            Array.prototype.forEach.call(eles, (el) => {
                el.className = el.className.replace(/active/g, '');
            });
            eles[index].className += ' active';
            moveEle.style.left = _left + 'px';
        },
        methods: {
            targerMove(e, index, path){
                let _this = e.target;
                let _left = _this.offsetLeft;
                let eles = document.querySelectorAll('.weui-col-25');
                let moveEle = document.querySelector('.moveYY');
                sessionStorage.setItem('index', index);
                Array.prototype.forEach.call(eles, (el) => {
                    el.className = el.className.replace(/active/g, '');
                });
                eles[index].className += ' active';
                moveEle.style.left = _left + 'px';
                this.$router.replace(path);
            }
        }
}

</script>
