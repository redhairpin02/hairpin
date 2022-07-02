// 获取元素节点
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// 计算时间

function countdown() {
    // TODO： Date()函数相关知识
    // TODO： const和let相关知识
    // TODO： Math()函数相关知识

    // 获取当前时间
    // 当前日期
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    // 下一个月
    const nextMonth = currentDate.getMonth() + 1
    const nextDate = new Date(new Date(new Date().toLocaleDateString()).setMonth(nextMonth, 16))

    // 计算差值 
    const testTime = (nextDate - currentDate) / 1000;

    /*
     * 一分钟：60秒
     * 一小时：60分钟
     * 一天：24小时
     * 发工资的日期是：每个月的15号
     * 如果日期大于15号，月份在当前月份的基础上加一
     * 如果日期小于15号，月份为当前月份
     */
    let days;
    if (currentDay > 15) {
        days = Math.floor(testTime / 60 / 60 / 24)
    } else {
        days = 15 - currentDay
    }
    const hours = Math.floor(testTime / 60 / 60) % 24;
    const mins = Math.floor(testTime / 60) % 60;
    const seconds = Math.floor(testTime) % 60;

    // console.log('下个工资日：' + nextDate)
    // console.log(daysEl)
    // console.log(hours)
    // console.log(mins)
    // console.log(seconds)

    // 更新数值到对应节点
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds)

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

// 设置自动刷新
setInterval(countdown, 1000)