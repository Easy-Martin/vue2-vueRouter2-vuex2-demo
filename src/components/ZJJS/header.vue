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

.weui-row .weui-col-20 {
    padding: 10px 0;
}

.weui-row .active {
    color: #36a7ff;
}

.moveGH {
    position: absolute;
    width: 20%;
    height: 2px;
    background: #36a7ff;
    bottom: 0;
    left: 0;
    transition: left 0.5s ease;
}

</style>

<template>

<div class="weui-row weui-no-gutter">
    <a v-for="(item, index) in menulist" @click="targerMove($event,index,item.path)" class="weui-col-20" :class="{active:(index==0 )}">
        {{item.name}}
    </a>
    <span class="moveGH"></span>
</div>

</template>

<script>
export default {
    data() {
            return {
                menulist: [{
                    name: '全部',
                    path: '/zjOrder/qbdd'
                }, {
                    name: '已支付',
                    path: '/zjOrder/yzfdd'
                }, {
                    name: '待支付',
                    path: '/zjOrder/dzfdd'
                }, {
                    name: '已取消',
                    path: '/zjOrder/yqxdd'
                }, {
                    name: '退款',
                    path: '/zjOrder/tkdd'
                }]
            }
        },
        mounted(){
            let eles = document.querySelectorAll('.weui-col-20');
            let index = sessionStorage.getItem('index');
            let _left = eles[index].offsetLeft;
            let moveEle = document.querySelector('.moveGH');
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
                let eles = document.querySelectorAll('.weui-col-20');
                let moveEle = document.querySelector('.moveGH');
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
