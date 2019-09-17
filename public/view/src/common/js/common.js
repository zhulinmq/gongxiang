/**
 * Created by pzs on 2017/9/14.
 */

export default {
    pxToRem(px) {
        let html = document.querySelector('html');
        const fontSize = window.getComputedStyle(html).fontSize;
        return parseInt(px) / parseFloat(fontSize) + 'rem';
    },
    // Returns a function, that, when invoked, will only be triggered at most once
    // during a given window of time. Normally, the throttled function will run
    // as much as it can, without ever going more than once per `wait` duration;
    // but if you'd like to disable the execution on the leading edge, pass
    // `{leading: false}`. To disable execution on the trailing edge, ditto.
    // 函数节流（如果有连续事件响应，则每间隔一定时间段触发）
    // 每间隔 wait(Number) milliseconds 触发一次 func 方法
    // 如果 options 参数传入 {leading: false}
    // 那么不会马上触发（等待 wait milliseconds 后第一次触发 func）
    // 如果 options 参数传入 {trailing: false}
    // 那么最后一次回调不会被触发
    // **Notice: options 不能同时设置 leading 和 trailing 为 false**
    // 示例：
    // var throttled = _.throttle(updatePosition, 100);
    // $(window).scroll(throttled);
    // 调用方式（注意看 A 和 B console.log 打印的位置）：
    // _.throttle(function, wait, [options])
    // sample 1: _.throttle(function(){}, 1000)
    // print: A, B, B, B ...
    // sample 2: _.throttle(function(){}, 1000, {leading: false})
    // print: B, B, B, B ...
    // sample 3: _.throttle(function(){}, 1000, {trailing: false})
    // print: A, A, A, A ...
    // ----------------------------------------- //
    throttle(func, wait, options) {
        var context, args, result;
        // setTimeout 的 handler
        var timeout = null;
        // 标记时间戳
        // 上一次执行回调的时间戳
        var previous = 0;
        // 如果没有传入 options 参数
        // 则将 options 参数置为空对象
        if (!options)
            options = {};
        var later = function() {
            // 如果 options.leading === false
            // 则每次触发回调后将 previous 置为 0
            // 否则置为当前时间戳
            previous = options.leading === false ? 0 : new Date().getTime();
            timeout = null;
            // console.log('B')
            result = func.apply(context, args);
            // 这里的 timeout 变量一定是 null 了吧
            // 是否没有必要进行判断？
            if (!timeout)
                context = args = null;
        };
        // 以滚轮事件为例（scroll）
        // 每次触发滚轮事件即执行这个返回的方法
        // _.throttle 方法返回的函数
        return function() {
            // 记录当前时间戳
            var now = new Date().getTime();
            // 第一次执行回调（此时 previous 为 0，之后 previous 值为上一次时间戳）
            // 并且如果程序设定第一个回调不是立即执行的（options.leading === false）
            // 则将 previous 值（表示上次执行的时间戳）设为 now 的时间戳（第一次触发时）
            // 表示刚执行过，这次就不用执行了
            if (!previous && options.leading === false)
                previous = now;
            // 距离下次触发 func 还需要等待的时间
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            // 要么是到了间隔时间了，随即触发方法（remaining <= 0）
            // 要么是没有传入 {leading: false}，且第一次触发回调，即立即触发
            // 此时 previous 为 0，wait - (now - previous) 也满足 <= 0
            // 之后便会把 previous 值迅速置为 now
            // ========= //
            // remaining > wait，表示客户端系统时间被调整过
            // 则马上执行 func 函数
            // @see https://blog.coding.net/blog/the-difference-between-throttle-and-debounce-in-underscorejs
            // ========= //
            // console.log(remaining) 可以打印出来看看
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    // 解除引用，防止内存泄露
                    timeout = null;
                }
                // 重置前一次触发的时间戳
                previous = now;
                // 触发方法
                // result 为该方法返回值
                // console.log('A')
                result = func.apply(context, args);
                // 引用置为空，防止内存泄露
                // 感觉这里的 timeout 肯定是 null 啊？这个 if 判断没必要吧？
                if (!timeout)
                    context = args = null;
            } else if (!timeout && options.trailing !== false) { // 最后一次需要触发的情况
                // 如果已经存在一个定时器，则不会进入该 if 分支
                // 如果 {trailing: false}，即最后一次不需要触发了，也不会进入这个分支
                // 间隔 remaining milliseconds 后触发 later 方法
                timeout = setTimeout(later, remaining);
            }
            // 回调返回值
            return result;
        };
    },
    //防抖动函数
    debounce(method, context) {
        let timer = null;
        return function() {
            clearTimeout(timer);
            timer = setTimeout(function() {
                method.call(context);
            }, 100);
        }
    },

    //设置cookie
    getCookie(c_name) {
        if (document.cookie.length > 0) {
            let c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1
                let c_end = document.cookie.indexOf(";", c_start)
                if (c_end == -1) c_end = document.cookie.length
                return decodeURI(document.cookie.substring(c_start, c_end))
            }
        }
        return "";
    },
    setCookies(name, value, time) {
        var cookieString = name + "=" + encodeURI(value) + ";";
        if (time != 0) {
            var Times = new Date();
            Times.setTime(Times.getTime() + time);
            cookieString += "expires=" + Times.toGMTString() + ";"
        }
        document.cookie = cookieString;
    },
    /**
     * 验证手机号码
     */
    checkMobile(phone) {
        let reg = /(^1[3|4|5|7|8][0-9]{9}$)/;
        return reg.test(phone)
    },
    /**
     * 验证用户名,4到8位，只含有汉字、数字、字母、下划线不能以下划线开头和结尾
     */
    checkUsername(name) {
        let reg = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]{4,8}$/;
        return reg.test(name)
    },
    /**
     * 密码判断,6到20位，包含数字字母下划线至少2种
     */
    checkPassword(psw) {
        let reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,20}$/;
        return reg.test(psw)
    },
    /**
     * 上传图片
     */
    upload(e) {
        let file = e.target.files[0];
        if (file) {
            let formData = new FormData(); //创建form对象
            formData.append('file0', file); //通过append向form对象添加数据
            let config = {
                headers: { 'Content-Type': 'multipart/form-data' },
                transformRequest: [function(data) {
                    return data
                }]
            }; //添加请求头
            return $http.post('/Pic/uploadPic', formData, config)
        }
    },
    /**
     * 倒计时
     */
    countDown(time, diff) {
        //time php返回的时间戳
        let t = Number(time * 1000) - Number(diff);
        if (t < 0) {
            return false;
        }
        let d = Math.floor(t / 1000 / 60 / 60 / 24);
        let h = Math.floor(t / 1000 / 60 / 60 % 24);
        let m = Math.floor(t / 1000 / 60 % 60);
        let s = Math.floor(t / 1000 % 60);
        if (d < 10) {
            d = '0' + d;
        }
        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
        return d + '天:' + h + '时:' + m + '分:' + s + '秒'
    },
    isLogin() {
        return api.checkLogin().then(res => {
            if (res.data.code === 201) {
                location.href = '/#/login';
                return false;
            }
            return true;
        })

    },
    //保留两位小数
    toDecimal2(x) {
        let n = parseFloat(x);
        if (isNaN(n)) {
            return false;
        }
        let f = Math.round(x * 100) / 100;
        let s = f.toString();
        let rs = s.indexOf('.');
        if (rs < 0) {
            rs = s.length;
            s += '.';
        }
        while (s.length <= rs + 2) {
            s += '0';
        }
        return s;
    },
    //提示弹出框
    tips(data, msg) {
        data.status = true;
        data.message = msg;
        return setTimeout(() => {
            data.status = false
        }, 1500)
    },
    //判断是否微信浏览器
    isWX() {
        let ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    },
    //验证身份证号码
    isCardNo(card) {
        // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (reg.test(card) === false) {
            return false;
        } else {
            return true
        }
    },
    //验证银行卡号
    bankCardValidate(bankno) {
        const lastNum = +bankno.substr(bankno.length - 1, 1);
        const first15Num = bankno.substr(0, bankno.length - 1);
        const newArr = [];
        for (let i = first15Num.length - 1; i > -1; i -= 1) {
            newArr.push(first15Num.substr(i, 1));
        }
        const arrJiShu = [];
        const arrJiShu2 = [];
        const arrOuShu = [];
        for (let j = 0; j < newArr.length; j += 1) {
            if ((j + 1) % 2 === 1) {
                if (parseInt(newArr[j], 10) * 2 < 9) {
                    arrJiShu.push(parseInt(newArr[j], 10) * 2);
                } else {
                    arrJiShu2.push(parseInt(newArr[j], 10) * 2);
                }
            } else {
                arrOuShu.push(newArr[j]);
            }
        }
        let sumJiShu = 0;
        let sumOuShu = 0;
        let sumJiShuChild1 = 0;
        let sumJiShuChild2 = 0;
        let sumTotal = 0;
        for (let m = 0; m < arrJiShu.length; m += 1) {
            sumJiShu += parseInt(arrJiShu[m], 10);
        }

        for (let n = 0; n < arrOuShu.length; n += 1) {
            sumOuShu += parseInt(arrOuShu[n], 10);
        }

        for (let p = 0; p < jishuChild1.length; p += 1) {
            sumJiShuChild1 += parseInt(jishuChild1[p], 10);
            sumJiShuChild2 += parseInt(jishuChild2[p], 10);
        }
        sumTotal = parseInt(sumJiShu, 10) + parseInt(sumOuShu, 10) +
            parseInt(sumJiShuChild1, 10) + parseInt(sumJiShuChild2, 10);
        const k = parseInt(sumTotal, 10) % 10 === 0 ? 10 : parseInt(sumTotal, 10) % 10;
        const luhn = 10 - k;
        if (lastNum === luhn) {
            return true;
        } else {
            return false;
        }
    }
}