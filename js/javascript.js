var mySwiper = new Swiper('.swiper-container', {
    autoplay:true,
    autoplay:{
        disableOnInteraction: false
    },
    loop:true,
    loopAdditionalSlides : 1,
    pagination: {
        el: '.swiper-pagination',
    },
    // pagination:{
    //     el: '.swiper-pagination',
    //     type : 'custom',
    //     renderCustom: function (swiper, current, total) {
    //         var _html = "";
    //         // console.log(total);
    //         // console.log(current);
    //         for(var i = 1; i <= total; i++) {
    //             // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
    //                   if(current == i){
    //                       _html = '<span class="swiper-pagination-customs swiper-pagination-customs-active">'+i+'</span>';
    //                   }
    //                   else{
    //                       _html = '<span class="swiper-pagination-customs">'+i+'</span>';
    //                   }
    //         }
    //         return _html;
    //     },
    // }
});


// 导航条选项卡

var nav = $('.mi_nav');
var navs = $('.nav_items');
var sp = $('.mi_nav span');


for(var i = 0;i < navs.length;i++){
    navs[i].index = i;
    navs[i].addEventListener("touchend",function () {
        for(var j = 0;j < navs.length;j++){
            sp.eq(j).removeClass('active');
        }
        sp.eq(this.index).addClass('active');
    })
}
// for(var i = 0;i < $('.nav_items').length;i++){
//     $('.nav_items')[i].addEventListener("touchend",function () {
//         $.each($('.nav_items'),function () {
//           $('.nav_items').addClass('');
//         })
//         $(this).addClass('active');
//     })
// }

//底部选项卡

var ftlinks = $('footer');
var links = $('footer a');
var ico = $('footer i');


for(var i = 0;i < links.length;i++){
    links[i].index = i;
    links[i].addEventListener("touchend",function () {
        for(var j = 0;j < links.length;j++){
            ico.eq(j).removeClass('correct');
        }
        ico.eq(this.index).addClass('correct');
    })
}

//商城早报，新闻变化
var timer = null;
var newList = $('.mi_msg p');
var newArr = ["米家定制TS近视镜新品开售 仅299元起","小米8 SE限时特惠 6GB+128GB赠","小米8首降100元，限时特惠仅一天！"];

function autoPlay() {
    var num = 0;
    timer = setInterval(function () {
        if(num > 2){
            num = 0;
        }
      newList.text(newArr[num]);
      num++;
    },2000)
}
autoPlay();
