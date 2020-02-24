/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-02-24 22:15:18
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-02-24 22:38:26
 */
// no js
let me = document.getElementsByClassName('mine');
let ai = document.getElementsByClassName('ai');
let your = document.getElementsByClassName('your');
setTimeout(function(){
    document.getElementsByClassName('mine')[0].className = 'show';
    setTimeout(function(){
        document.getElementsByClassName('ai')[0].className = 'show';
        setTimeout(function(){
            document.getElementsByClassName('your')[0].className = 'show';
        },2000)
    },2000)
},2000)