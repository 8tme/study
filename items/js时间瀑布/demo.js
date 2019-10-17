function init() {
    $('.ten').each((index, ele) => {
        for (var i = 0; i < 10; i++) {
            let o = $('<div>' + i + '</div>');
            $(ele).append(o);
        }
    })
    $('.six').each((index, ele) => {
        for (var i = 0; i < 6; i++) {
            let o = $('<div>' + i + '</div>');
            $(ele).append(o);
        }
    })
    getTimeStr();

}

function getTimeStr() {
    setInterval(() => {
        let t = new Date();
        let h = t.getHours();
        let m = t.getMinutes();
        let s = t.getSeconds();
        let str = [h, m, s].reduce((prev, cur) => {
            return prev + ('0' + cur).slice(-2);
        })

        let columns = $('.column');
        columns.each((index, ele) => {
            let n = +str[index];
            $(ele).css({
                transform: 'translateY(-' + n * 50 + 'px)',
            }).children().each((index2, ele) => {
                $(ele).css({
                    opacity: setOpacity(n, index2)
                })
            })
            // console.log(setOpacity(n, index))
        })
    }, 1000);
}
init()
let list = [1, 0.8, 0.5, 0.3, 0.3, 0.1];

function setOpacity(curNum, curIndex) {
    let c = Math.abs(curIndex - curNum);
    return c > 3 ? list[5] : list[c];
}


