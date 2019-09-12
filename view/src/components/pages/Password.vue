<template>
    <div class="password" id="password">
        <Head :title="title"></Head>
        <div class="editPaawordView">
            <div class="view">
                <div class="codeView">
                    <div class="inputMobile display_csb mt20">
                        <div class="display_cfs">
                            <!-- <div class="name">手机号</div> -->
                            <input type="text" v-model="newPassword" placeholder="新密码" class="inpuClass">
                        </div>
                    </div>
                    <div class="inputMobile display_csb">
                        <div class="display_cfs">
                            <!-- <div class="name">验证码</div> -->
                            <input type="text" v-model="repassword" placeholder="确认密码" class="inpuClass">
                        </div>
                    </div>
                </div>
            </div>
            <div class="btnLogin display_cc" @click="editSave">确认修改</div>
        </div>
    </div>
</template>

<script>
import {apiAddress} from "@/utils/apiAddress"
    import commmon from "@/common/js/common"
    export default {
        data() {
            return {
                title: "修改密码",
                newPassword:"",
                repassword:"",
                captcha:"",
                mobile:""
            }
        },
        methods:{
            editSave(){
                //保存修改
                let data={
                    mobile:this.mobile,
                    newpassword:this.newpassword,
                    captcha:this.captcha
                }
                apiAddress.resetpwd(data).then((result)=>{
                    if(result.code==200){
                        this.$toast({
                            message:"修改成功",
                            position:"bottom"
                        })
                    }
                })
            },
            resizepage() {
                document.getElementsByTagName("html")[0].style.height =
                    window.innerHeight + "px";
                
                if (document.getElementById("password")) {
                    document.getElementById("password").style.height =
                    window.innerHeight+"px";
                }
            },
            init(){
                var self = this; //因为箭头函数会改变this指向，指向windows。所以先把this保存
                window.addEventListener("load", function() {
                    //执行
                    self.resizepage();
                });
                window.addEventListener("resize", function() {
                    //执行
                    self.resizepage();
                });
                setTimeout(() => {
                    window.addEventListener("load", function() {
                    //执行
                    self.resizepage();
                    });
                    window.addEventListener("resize", function() {
                    //执行
                    self.resizepage();
                    });
                }, 200);
            },
        },
        mounted() {
            this.init();
            document.getElementsByTagName("html")[0].style.height =
            window.innerHeight + "px";
            
            if (document.getElementById("password")) {
                document.getElementById("password").style.height =window.innerHeight+"px";
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../common/css/mixin.scss";
.password{
    background-color: #f5f5f5;
    .editPaawordView{
        padding-top: pxTorem(63px);
        .view{
            background-color: #ffffff;
            .codeView{
                margin: 0 pxTorem(40px);
                padding-bottom: pxTorem(35px);

                .inputMobile{
                    padding: pxTorem(14px) 0;
                    border-bottom: solid 1px #e6e6e6;
                    .code{
                        font-size:pxTorem(13px);
                        font-weight: normal;
                        font-stretch: normal;
                    
                        color: #ff0000;
                    }
                    .inpuClass{
                        border: 0;
                        outline: 0;
                        width: pxTorem(144px);
                        color: #333333;
                        font-size:  pxTorem(16px);
                        // padding-top: pxTorem(2px);
                    }
                    .name{
                        // font-family: PingFang-SC-Medium;
                        font-size:pxTorem(16px) ;
                        font-weight: normal;
                        font-stretch: normal; 
                        color: #333333;
                        width: pxTorem(61px);
                        padding-left: pxTorem(5px);
                    }
                    .delete{
                        width: pxTorem(18px);
                        height: pxTorem(18px);
                        // padding-right: pxTorem(10px);
                    }
                    input::input-placeholder {
                        color: #cccccc;
                        font-size:  pxTorem(16px);
                    }
                
                    input::-webkit-input-placeholder {
                        color: #cccccc;
                        font-size:  pxTorem(16px);
                    }
                
                    input:-ms-input-placeholder {
                        color: #cccccc;
                        font-size:  pxTorem(16px);
                    }
                
                    input:-moz-placeholder {
                        color: #cccccc;
                        font-size:  pxTorem(16px);
                    }
                    
                    input::-moz-placeholder {
                        color: #cccccc;
                        font-size:  pxTorem(16px);
                    }
                }
                .mt20{
                    padding-top: pxTorem(16px)
                }
            }  
        }
        .btnLogin{
            margin-top: pxTorem(60px);
            background-color: #2ca7fa;
            border-radius: pxTorem(2px);
            font-size: pxTorem(16px);
            color: #fff;
            padding: pxTorem(10px) 0;
            // padding-bottom: pxTorem(11px);
            margin-left: pxTorem(35px);
            margin-right: pxTorem(35px);
        }
    }
}
</style>