import { api } from "@/utils/api";
import { http } from "@/utils/http";
let url = api.API_BASE;
console.log(url)
const apiAddress = {
    /**
     *  account:账号
        password:密码
     * @param {*} data 
     */
    login(data) { //会员登录登录
        return http.post(url + "/user/login", data)
    },
    /**
     * 无参数
     * @param {*} data 
     */
    getUserIndex(data) {
        //会员中心
        return http.postNone(url + "/user/index", data)
    },
    /**
     *  mobile:手机号
        newpassword:新密码
        captcha:验证码
     * @param {*} data 
     */
    resetpwd(data) {
        //修改密码
        return http.post(url + "/user/resetpwd", data)
    },
    /**
     *  mobile:手机号
        use:应用场景
        code:验证码
     * @param {*} data 
     */
    checksms(data) {
        //验证短信验证码
        return http.post(url + "/sms/check", data)
    },
    /**
     *  openid:微信唯一OPENID
        nickname:微信名称
        headerpic:微信头像
     * @param {*} data 
     */
    bindWechat(data) {
        //绑定微信号
        return http.post(url + "/user/bindWechat", data)
    },
    /**
     * mobile:
        use:register(注册) changepwd(修改密码)
     * @param {*} data 
     */
    sendsms(data) {
        //发送短信验证码
        return http.post(url + "/sms/send", data)
    },
    /**
     * mobile:手机号
        password:密码
        code:手机验证码
     * 
     * @param {*} data 
     */
    register(data) {
        //会员手机号注册
        return http.post(url + "/user/register", data)
    },
    /**
     * code:微信code
     * @param {*} data 
     */
    thirdLogin(data) {
        //会员第三方登录
        return http.post(url + "/user/third", data)
    },
    /**
     * avatar:头像地址
        username:昵称
     * @param {*} data 
     */
    profile(data) {
        //修改会员信息
        return http.post(url + "/user/profile", data)
    }
}
export { apiAddress }