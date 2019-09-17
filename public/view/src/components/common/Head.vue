<template>
    <div class="head display_csb">
        <div class="left display_cfs">
           <img src="../../common/images/index/left_back.png" class="left_back" @click="goBack">返回
        </div>
        <div class="center display_cc">{{title}}</div>
        <div class="right display_cfe"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        },
        props:["title"]
    }
</script>

<style lang="scss" scoped>
@import "../../common/css/mixin.scss";
.head{
    height: pxTorem(45px);
    background-color: #333333;
    position: fixed;
    width: 100%;
    z-index: 999;
    .left{
        width: pxTorem(100px);
        padding-left: pxTorem(20px);
        font-family: PingFang-SC-Bold;
        font-size:pxTorem(18px);
        font-weight: normal;
        font-stretch: normal;
        color: #ffffff;
        .left_back{
            width: pxTorem(10px);
            height: pxTorem(17px);
            padding-right: pxTorem(5px);
        }
    }
    .right{
        width: pxTorem(100px);
        padding-right: pxTorem(20px);
    }
    .center{
        font-size: pxTorem(18px);
        color: #ffffff;
        font-family: PingFang-SC-Heavy;
        font-size:pxTorem(20px);
        font-weight: normal;
       
    }
}
</style>