//初始化,由于html中1和13固定两个包含点点点的span也默认生成,因此生成11个元素
//全局变量curIndex控制元素的变化
var curIndex = 3;
for (let i = 2; i < 13; i++) {
$('<div class="num">' + i + '</div>')
    .addClass(i + '').insertBefore($('span').eq(1));
}
change();

$('.page.r').on('click', () => {
    $('.page.l').removeClass('last');
    curIndex ++;
    curIndex<14 && change();
})

$('.page.l').on('click', () => {
    $('.page.r').removeClass('last');
    curIndex--;
    curIndex>0 && change();
})

$('.num').on('click', (e) => {
    $('.last').removeClass('last');
    curIndex = +$(e.target).text();
    change();
})

function change (){
    $('.active') && $('.active').removeClass('active');
    $('.' + curIndex).addClass('active');
    //控制点点点的展示与隐藏
    curIndex < 10 ? $('span').eq(1).fadeIn() : $('span').eq(1).fadeOut();
    curIndex > 4 ? $('span').eq(0).fadeIn() : $('span').eq(0).fadeOut();
    //如果是4和12之间,curIndex前后各有两个,中间始终显示5个.
    if (curIndex < 12 && curIndex > 4) {
        for (let i = 2; i < 13; i++) {
            $('.' + i).fadeOut();
        }
        for (i = curIndex - 2; i < curIndex + 3; i++) {
            $('.' + i).fadeIn();
        }
    } else {
        //大于等于11的时候,curIndex之前保持2个元素显示
        if (curIndex >= 11) {
            for (let i = 2; i < curIndex - 2; i++) {
                $('.' + i).fadeOut();
            }
            $('.' + (curIndex - 1)).fadeIn()
            $('.' + (curIndex - 2)).fadeIn()
        }
        //小于等于4的时候,只有1-curIndex的部分显示
        if (curIndex <= 4) {
            for (let i = curIndex; i < 13; i++) {
                $('.' + i).fadeOut();
            }
            for (let i = 1; i < curIndex + 3; i++) {
                $('.' + i).fadeIn();
            }
        }
    }
    //通过添加类名添加开头末尾样式
    curIndex == 13 && $('.page.r').addClass('last');
    curIndex == 1 && $('.page.l').addClass('last');
}
