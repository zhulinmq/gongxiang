import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/style.css';
import './common/js/rem';
import store from "./store";
import "babel-polyfill";
import Axios from "axios";
import { NavBar, Grid, GridItem, Popup, Toast, Uploader } from 'vant';
import Head from "@/components/common/Head";
Vue.component("Head", Head);
import Qs from 'qs'
Vue.use(NavBar).use(Grid).use(GridItem).use(Popup).use(Toast).use(Uploader);
Vue.config.productionTip = false
Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Axios.interceptors.request.use(
    config => {
        config.withCredentials = false; // 允许携带token ,这个是解决跨域产生的相关问题
        // if (config.method === 'post') {
        //     config.data = Qs.stringify(config.data);
        // }
        let userInfo = store.state.loginInfo

        if (userInfo.token) {
            config.headers["token"] = userInfo.token;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    response => {
        let info = response.data;
        // console.log(info)

        return Promise.resolve(response);
    },
    error => {

        let errorInfo = error.response;
        console.log(errorInfo)
        Toast({
            message: errorInfo.msg,
            position: 'bottom'
        })
        return Promise.reject(error);
    }
);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})