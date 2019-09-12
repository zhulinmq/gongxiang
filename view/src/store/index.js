import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
    loginInfo: {}, //用户信息
};
if (window.localStorage.getItem("loginInfo")) {
    state.loginInfo = JSON.parse(window.localStorage.getItem("loginInfo"));
}

const mutations = {


};
export default new Vuex.Store({
    state,
    mutations
});