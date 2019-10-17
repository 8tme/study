let arr = ['img0', 'img1', 'img2', 'img3', 'img4'];
let timer = null;
function move() {
    clearTimeout(timer);
    timer = setInterval(() => {
        arr.push(arr.shift());
        $('img').each((index, ele) => {
            $(ele).attr('class', arr[index])
                .on('click', (e) => {
                    //计算当前点击的图片的类名在arr中的位置 和'img2'的位置 差值
                    var times = arr.indexOf($(e.target).attr('class')) - arr.indexOf('img2');
                    if (times !== 0) {
                        clearInterval(timer);
                        //根据在左边还是在右边 确定重排arr的方式
                        for (var i = 0; i < Math.abs(times); i++) {
                            times > 0 ? arr.unshift(arr.pop()) : arr.push(arr.shift());
                        }
                        // 重排以后,重新根据数组给元素加类名渲染页面
                        $('img').each((index, ele) => {
                            $(ele).attr('class', arr[index])
                        })
                        timer = setTimeout(() => {
                            move();
                        }, 1000);
                    }
                })
        })
    }, 1000);
}
move()