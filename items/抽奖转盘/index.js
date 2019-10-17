var btn = document.getElementsByClassName('btn')[0];
var w = document.getElementsByClassName('wrapper')[0];  
var parm = {
        rotateNum: 8,   //区域数,转盘分成多少部分
        body: w,   //包含转盘和开始按钮的元素
        clickCb: btnclick,   //按钮click后回调函数
        renderCb: render
}
var lottery = new Lottery(parm);
function btnclick() { 
    var deg = Math.floor(Math.random() * 360);
    lottery.goRotate(deg);
 }
function render(deg) { 
    alert('中奖了!');
 }
// var timer = null, key = true, deg = 0;
// btn.onclick = function () {    
//     deg = 0;
//     timer = setInterval(() => {
//         if(deg < 720){
//             deg += 30;
//         }else if(deg >= 720 && deg < 1080){
//             deg += 10;
//         }else if(deg >= 1080 && deg < 1160){
//             deg += 5;
//         }else if(deg >= 1160 && deg < 1200){
//             deg += 1;
//         }else{
//             clearInterval(timer);
//         }
//         w.style.transform = 'rotate(' + deg +'deg)';
//     }, 50);
//  }