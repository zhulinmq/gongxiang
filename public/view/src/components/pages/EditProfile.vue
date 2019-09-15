<template>
    <div class="editProfile" id="editProfile">
        <Head :title="title"></Head>
        <div class="accountSecurityView">
            <div class="line"></div>
            <div class="list">
                <div class="list_item pato10">
                    <van-uploader :after-read="afterRead" >
                        <div class="item display_csb">
                            <div class="name">会员头像</div>
                            <div class="right display_ce">
                                <img :src="avatar" class="avtor">
                                <img src="../../common/images/index/back.png" class="back">
                            </div>
                        </div>
                    </van-uploader>
                </div>
                <div class="list_item">
                    <div class="item display_csb" @click="editVip">
                        <div class="name">会员昵称</div>
                        <div class="right display_ce" >
                            <div class="grey">{{username}}</div>
                            <img src="../../common/images/index/back.png" class="back">
                        </div>
                    </div>
                </div>
                <div class="list_item noBorder">
                    <div class="item display_csb">
                        <div class="name">会员ID</div>
                        <div class="right display_ce">
                            <div class="grey">{{userInfo.id}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="display_cc">
                <div class="btn display_cc" @click="profile">保存</div>
            </div>
        </div>
        <div class="confirm-container" v-if="showEdit">
            <div class="confirm">
                <div class="title">修改会员名称</div>
                <div class="handle display_cc">
                    <input type="text" class="editVip">
                </div>
                <div class="display_csb bottom">
                    <div class="cancelBtn display_cc borderRight" @click="cancel">取消</div>
                    <div class="cancelBtn display_cc" @click="saveConform">确认</div>
                </div>
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
                title: "修改资料",
                showEdit:false,
                userInfo:{},
                avatar:"",
                username:""
            }
        },
        created(){
            let userInfo=JSON.parse(this.$route.query.userInfo)
            this.userInfo=userInfo
            this.avatar=userInfo.avatar
            this.username=userInfo.username
        },
        methods:{
            profile(){
                //保存
                let data={
                    avatar:this.avatar,
                    username:this.username
                }
                apiAddress.profile(data).then((result)=>{
                    if(result.code==200){
                        this.$toast({
                            message: "修改成功",
                            position:"bottom"
                        })
                    }
                })
            },
            afterRead(file){
                console.log(file)
            },
            saveConform(){
                this.showEdit=false
            },
            editVip(){
                this.showEdit=true
            },
            cancel(){
                this.showEdit=false
            },
            resizepage() {
                document.getElementsByTagName("html")[0].style.height =
                    window.innerHeight + "px";
                
                if (document.getElementById("editProfile")) {
                    document.getElementById("editProfile").style.height =
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
            
            if (document.getElementById("editProfile")) {
                document.getElementById("editProfile").style.height =window.innerHeight+"px";
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../common/css/mixin.scss";

.editProfile{
    background-color: #f5f5f5;
    .accountSecurityView{
        padding-top: pxTorem(45px);
        .line{
            height: pxTorem(20px);
        }
        .list{
            background-color: #fff;
            .list_item{
                margin: 0 pxTorem(37px);
                padding: pxTorem(17px) 0;
                border-bottom: solid 1px #e6e6e6;
                .name{
                    font-size: pxTorem(16px);
                    color: #666666;
                }
                .right{
                    .red{
                        font-size: pxTorem(13px);
                        color: #ff0000;
                    }
                    .avtor{
                        width: pxTorem(40px);
                        height: pxTorem(40px);
                        border-radius: 50%;
                    }
                    .grey{
                         font-size: pxTorem(13px);
                        color: #999999;
                    }
                    .back{
                        width: pxTorem(10px);
                        height: pxTorem(20px);
                        padding-left: pxTorem(7px);
                    }
                }
            }
            .pato10{
                padding: pxTorem(5px) 0;
            }
            .noBorder{
                border:0
            }
        }
        .btn{
            margin-top: pxTorem(55px);
            width:pxTorem(295px) ;
            
            background-color: #2ca7fa;
            border-radius:pxTorem(4px);
            font-size: pxTorem(16px);
            font-weight: normal;
            font-stretch: normal;
            padding: pxTorem(11px) 0;
            color: #ffffff;
        }
    }
    .editVip{
        outline: 0;
        border: 0;
        background-color: #f5f5f5;
        height: pxTorem(35px);
        margin-top: pxTorem(20px)
    }
    .confirm-container .confirm .title{
        padding: pxTorem(10px);
    }
    .confirm-container .confirm .handle{
        position: relative;
        
    }
    .bottom{
        margin-top: pxTorem(20px);
        .borderRight{
            border-right:solid 1px #eee;
        }
    }
    .cancelBtn{
        flex: 1;
       height: pxTorem(40px);
        font-size: pxTorem(16px);
        color:#666666;
        font-weight: bold;
    }
}
</style>