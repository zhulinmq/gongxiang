<template>
    <div class="personalCenter">
        <div class="top">
            <img src="../common/images/index/set.png" alt="" class="set">
            <div class="avtorDiv display_cfs">
                <div>
                    <img :src="userInfo.avatar" class="avtor">
                </div>
                <div class="name_id">
                    <div class="name">{{userInfo.username}}</div>
                    <div class="id"><span>ID:</span> <span class="num">{{userInfo.id}}</span> </div>
                </div>
            </div>
        </div>
        <div class="viewPrice">
            <div class="display_cc">
                <div class="item display_cc one">
                    <div class="num">99</div>
                    <div class="name">设备总数</div>
                </div>
                <div class="item display_cc two">
                    <div class="num">99</div>
                    <div class="name">今日收益</div>
                </div>
            </div>
            <div class="display_cc">
                <div class="item display_cc three">
                    <div class="num">99</div>
                    <div class="name">可提现</div>
                </div>
                <div class="item display_cc four">
                    <div class="num">99</div>
                    <div class="name">提现记录</div>
                </div>
            </div>
            <div class="line"></div> 
        </div>
        <div class="bar">
            <img src="../common/images/index/bar.png" class="barPng">
        </div>
        <div class="introduction">
            <div class="title">
                公司简介
            </div>
            <div class="content">
                共享陪护床的简介，为不同类型和级别的用户提供相应数据，详细了解床位收益，床位租赁借率等各类指标......
                <div class="details" @click="goDetails">【详情】</div> 
            </div>
        </div>
        <div class="bottomNavgation display_csa">
            <div class="item_list display_ccfc" @click="goEditData">
                <img src="../common/images/index/edit.png" alt="" srcset="">
                <div>修改资料</div>
            </div>
            <div class="item_list display_ccfc" @click="goAccountSecurity">
                <img src="../common/images/index/account.png" alt="" srcset="">
                <div>账户安全</div>
            </div>
            <div class="item_list display_ccfc" @click="goMyBenefits">
                <img src="../common/images/index/money.png" alt="" srcset="">
                <div>我的收益</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {apiAddress} from "@/utils/apiAddress"
    import commmon from "@/common/js/common"
    export default {
        data() {
            return {
                userInfo:{}
            }
        },
        created(){
            this.getUserInfo()
        },
        methods: {
            getUserInfo(){
                //获取会员中心
                apiAddress.getUserIndex({}).then((result)=>{
                    if(result.code==1){
                        this.userInfo=result.data
                    }
                })
            },
            goEditData() {
                this.$router.push({name:'editProfile',query:{userInfo:JSON.stringify(this.userInfo) }})
            },
            goAccountSecurity(){
                this.$router.push({name:'accountSecurity'})
            },
            goMyBenefits(){
                this.$router.push({name:'myBenefits'})
            },
            goDetails(){
                this.$router.push({name:'companyProfile'})
            },
       },
    }
</script>

<style lang="scss" scoped>
@import "../common/css/mixin.scss";
.personalCenter{
    .top{
        height: pxTorem(158px);
        background-color: #2ca7fa;
        position: relative;
        .set{
            position: absolute;
            top: pxTorem(12px);
            right: pxTorem(40px);
            width: pxTorem(21px);
            height: pxTorem(22px);
        }
        .avtorDiv{
            padding-left: pxTorem(41px);
            padding-top: pxTorem(26px);
            .avtor{
                width: pxTorem(61px);
                height: pxTorem(61px);
                border-radius: 50%;
                border:0;
            }
            .name_id{
                color: #ffffff;
                font-size: pxTorem(16px);
                padding-left: pxTorem(6px);
                .id{
                    padding-top: pxTorem(5px);
                    .num{
                        padding-left: pxTorem(3px);
                    }
                }
            }
        }
    }
    .viewPrice{
            background-color: #ffffff;
            position: relative;
            top: pxTorem(-60px);
            margin: 0 pxTorem(21px);
            border-radius: pxTorem(5px);
            padding-top: pxTorem(6px);
            display: flex;
            display: -webkit-flex;
            flex-direction: column;
            padding-bottom: pxTorem(14px);
            align-items: center;
            justify-content: center;
            .item{
              flex: 1  ;
              width: pxTorem(121px);
              height: pxTorem(65px);
              flex-direction: column;
              .num{
                  font-size: pxTorem(16px);
                  color:  #2ca7fa;
              }
              .name{
                  font-size: pxTorem(16px);
                  color:  #999;
              }
            }
            .one{
                border-right: dashed 1px #999;
                border-bottom: dashed 1px #999;
            }
            .two{
                 border-bottom: dashed 1px #999;
            }
            .three{
                border-right: dashed 1px #999;
            }
            .line{
                height: 1px;
                border-bottom: dashed 1px #999;
                width: pxTorem(242px);
                margin-top: pxTorem(12px)
            }
    }
    .bar{
        position: relative;
        top: pxTorem(-60px);
        .barPng{
            width: 100%;
        }
    }
    .introduction{
        position: relative;
        top: pxTorem(-60px);
        margin: 0 pxTorem(20px);
        .title{
            padding: pxTorem(11px) 0;
            font-size: pxTorem(14px);
            color: #2ca7fa;
            font-weight: bold;
        }
        .content{
            font-size: pxTorem(12px);
            font-weight: normal;
            font-stretch: normal;
            color: #999999;
            text-indent: pxTorem(10px);
            position: relative;
            padding-bottom: pxTorem(20px);
            .details{
                position: absolute;
                color: #2ca7fa;
                right: 0;
                bottom:pxTorem(20px);
            }
            border-bottom: dashed 1px #999;
        }
    }
    .bottomNavgation{
        .item_list{
            font-size: pxTorem(14px);
            color: #999;
            img{
                width: pxTorem(30px);
                height: pxTorem(30px);
                padding-bottom: pxTorem(11px);
            }
        }
    }
}
</style>