/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-02-24 22:15:18
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-05-23 12:32:35
 */
// no js
// let me = document.getElementsByClassName('mine');
// let ai = document.getElementsByClassName('ai');
// let your = document.getElementsByClassName('your');
// setTimeout(function(){
//     document.getElementsByClassName('mine')[0].className = 'show';
//     setTimeout(function(){
//         document.getElementsByClassName('ai')[0].className = 'show';
//         setTimeout(function(){
//             document.getElementsByClassName('your')[0].className = 'show';
//         },2000)
//     },2000)
// },2000)
function openApp(openUrl, callback) {
    //区分是否android和ios方法
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
    var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        openUrl = 'youku://play?vid=XMzc5OTMxNDE5Ng==&source=wangmeng&refer=tiankeng831_market.huanyu.ghy_wangmeng_002000_jaAjEn_18082807'
    } else if (isIos) {
        window.location.href = '调起ios端的链接?拼接参数（scheme链接找ios端的同事要）';
    }
    //检查app是否打开
    function checkOpen(cb) {
        var _clickTime = +(new Date());
        function check(elsTime) {
            if (elsTime > 3000 || document.hidden || document.webkitHidden) {
                cb(1);
            } else {
                cb(0);
            }
        }
        //启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
        var _count = 0, intHandle;
        intHandle = setInterval(function () {
            _count++;
            var elsTime = +(new Date()) - _clickTime;
            if (_count >= 100 || elsTime > 3000) {
                clearInterval(intHandle);
                check(elsTime);
            }
        }, 20);
    }
    //在iframe 中打开APP
    var ifr = document.createElement('iframe');
    ifr.src = openUrl;
    ifr.style.display = 'none';
    if (callback) {
        checkOpen(function (opened) {//checkOpen中的cbk参数 = function (opened)
            if (opened == 0) {
                //用户没有安装app 可以请求下载地址并跳转 跳转方法：window.location.href 即可
                window.location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.mm&g_f=1000047'
            } else if (opened == 1) {
                //用户打开了app  用户有安装app 
                window.location.href = 'youku://play?vid=XMzc5OTMxNDE5Ng==&source=wangmeng&refer=tiankeng831_market.huanyu.ghy_wangmeng_002000_jaAjEn_18082807'
            }
        });
    }
    document.body.appendChild(ifr);
    setTimeout(function () {
        document.body.removeChild(ifr);
    }, 3000);
}