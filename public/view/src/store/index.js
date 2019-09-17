import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
    loginInfo: {}, //用户信息
    userInfo: {}, //用户
};
if (window.localStorage.getItem("loginInfo")) {
    state.loginInfo = JSON.parse(window.localStorage.getItem("loginInfo"));
}
if (window.localStorage.getItem("userInfo")) {
    state.userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
}
const mutations = {


};
export default new Vuex.Store({
    state,
    mutations
});