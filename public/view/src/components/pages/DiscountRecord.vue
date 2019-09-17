<template>
    <div class="discountRecord">
        <Head :title="title"></Head>
        <div class="discountRecordView">
            <div class="line"></div>
            <div class="view">
                <div class="list">
                    <div class="item display_csb" v-for="(item,index) in data" :key="index">
                        <div class="left display_cfs">
                            <div class="text">{{item.title}}</div>
                            <div class="price">{{item.money}}</div>
                        </div>
                        <div class="time">
                            {{item.createtime}}
                        </div>
                    </div>
                    <!-- <div class="item display_csb">
                        <div class="left display_cfs">
                            <div class="text">提现</div>
                            <div class="price">200</div>
                        </div>
                        <div class="time">
                            2018-10-10 21:10:10
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {apiAddress} from "@/utils/apiAddress"
    export default {
        data() {
            return {
                title: "提现记录",
                data:[]
            }
        },
        created(){
            this.withdraw_log()
        },
        methods: {
            withdraw_log() {
                apiAddress.withdraw_log({}).then((result)=>{
                    if(result.code==1){
                        this.data=result.data
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
@import "../../common/css/mixin.scss";
.discountRecord{
    .discountRecordView{
        padding-top: pxTorem(45px);
        .line{
            height: pxTorem(20px);
            background-color: #f5f5f5;
        }
        .view{
            background-color: #ffffff;
            .list{
                margin-left: pxTorem(20px);
                margin-right: pxTorem(40px);
                .item{
                    border-bottom: dashed 1px #333333;
                    padding: pxTorem(24px) 0 pxTorem(10px) 0;
                    .left{
                        .text{
                            font-size: pxTorem(16px);
                            color: #333333;
                        }
                        .price{
                            font-size: pxTorem(14px);
                            font-weight: normal;
                            font-stretch: normal;
                            color: #ff0000;
                            padding-left: pxTorem(7px);
                        }
                    }
                    .time{
                        font-size: pxTorem(14px);
                        color: #333333;
                    }
                }
            }
        }
    }
}
</style>