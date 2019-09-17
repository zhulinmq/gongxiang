import axios from "axios";
import Qs from 'qs'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
const http = {
    /**
     * get方法，对应get请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    get: function(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .get(url, {
                    params: params
                })
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data);
                });
        });
    },
    /**
     * delete方法，对应delete请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    delete: function(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .delete(url, {
                    params: params
                })
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data);
                });
        });
    },
    /**
     * post方法，对应post请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    post: function(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .post(url + "?" + Qs.stringify(params))
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data);
                });
        });
    },
    postJson: function(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, params)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data);
                });
        });
    },
    postNone: function(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, params)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data);
                });
        });
    },
    /**
     * put方法，对应put请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    put: function(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .put(url, params)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data);
                });
        });
    }
};
export { http };