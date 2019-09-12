var moment = require('moment');
let currentTime = new Date(); //当前日期
let nowDay = currentTime.getDate(); //当前日
let nowMonth = currentTime.getMonth() + 1; //当前月
let nowYear = currentTime.getFullYear(); //当前年
const util = {
    /**
     * 获取当前时间
     */
    getCurrentDay: function() {
        let currentMonth = nowMonth
        let currentDay = nowDay
        if (currentMonth < 10) {
            currentMonth = `0${currentMonth}`
        }
        if (currentDay < 10) {
            currentDay = `0${currentDay}`
        }
        return `${nowYear}/${currentMonth}/${currentDay}`
    },
    /**
     * 获取昨天日期
     */
    getYesterdayDay: function() {
        var preDate = new Date(currentTime.getTime() - 24 * 60 * 60 * 1000); //前一天
        return moment(preDate).format('YYYY/MM/DD');
    },
    /**
     * 获取当前日期的后一天
     */
    getNextDay: function() {
        var nextDate = new Date(curDate.getTime() + 24 * 60 * 60 * 1000); //后一天
        return moment(nextDate).format('YYYY/MM/DD');
    },
    /**
     * 获取某个日期的前一天
     * @param {某个日期} s 
     */
    getPreDay: function(s) {
        let arr = s.split("/");
        var y = parseInt(arr[0]);
        var m = parseInt(arr[1]) - 1;
        var d = parseInt(arr[2]);

        var dt = new Date(y, m, d - 1);
        y = dt.getFullYear();
        m = dt.getMonth() + 1;
        d = dt.getDate();
        m = m < 10 ? "0" + m : m;
        d = d < 10 ? "0" + d : d;
        return `${y}/${m}/${d}`;
    },
    /**
     * 获取某个日期的后一天
     * @param {某个日期} s 
     */
    getNextSomeDay(s) {
        let arr = s.split("/");
        var y = parseInt(arr[0]);
        var m = parseInt(arr[1]) - 1;
        var d = parseInt(arr[2]);

        var dt = new Date(y, m, d + 1);
        y = dt.getFullYear();
        m = dt.getMonth() + 1;
        d = dt.getDate();
        m = m < 10 ? "0" + m : m;
        d = d < 10 ? "0" + d : d;
        return `${y}/${m}/${d}`;
    },
};
export { util };