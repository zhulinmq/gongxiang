<template>
    <div class="myBenefits">
        <Head :title="title"></Head>
        <div class="myBenefitsView">
            <div class="fram display_ccfc">
                <div class="title">你已经累计赚得</div>
                <div class="num">¥11111</div>
            </div>
        </div>
        <div class="line"></div>
        <div class="details display_csb">
            <div>2019-08-09</div>
            <div>200</div>
        </div>
        <div class="line"></div>
        <div class="details display_csb">
            <div>2019-08-09</div>
            <div>200</div>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title:"我的收益"
            }
        },
    }
</script>

<style lang="scss" scoped>
@import "../../common/css/mixin.scss";
.myBenefits{
    .myBenefitsView{
        padding-top: pxTorem(45px);
        background-color: #ffffff;
        .fram{
            margin: pxTorem(20px) pxTorem(40px);
            height:pxTorem(140px);
            background-image: linear-gradient(90deg, 
                #c99f54 0%, 
                #f4da8e 100%);
            border-radius:pxTorem(6px);
            .title{
                font-size:pxTorem(14px);
                font-weight: normal;
                font-stretch: normal;
                
                color: #ffffff;
            }
            .num{
                font-size:pxTorem(20px);
                font-weight: normal;
                font-stretch: normal;
                color: #ffffff;
                padding-top: pxTorem(35px);
            }
        }
    }
    .line{
        height: pxTorem(10px);
        background-color: #f5f5f5;
    }
    .details{
        height: pxTorem(30px);
        font-size: pxTorem(14px);
        color: #333333;
        padding: 0 pxTorem(15px)
    }
}
</style>