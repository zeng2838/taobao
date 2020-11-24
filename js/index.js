var showbox = document.querySelector('.show-box');
var showmain = document.querySelector('.show-main');
var imgs = document.querySelectorAll(' .show-main img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var lis = document.querySelectorAll('.list li');
var imgindex = 0;
var lisindex = 0;
var firstimg = showmain.children[0].cloneNode(true);
showmain.appendChild(firstimg);
var imglength = showmain.children.length;
var imgwidth = showmain.children[0].clientWidth;
var timer;
automove()

function automove() {
    timer = setInterval(() => {
        movenext()
    }, 3000);
};

function movenext() {
    imgindex++;
    if (imgindex >= imglength) {
        imgindex = 1;
        showbox.scrollLeft = 0;
    };
    animate(showbox, {
        "scrollLeft": imgindex * imgwidth
    });
    lis[lisindex].className = '';
    lisindex++;
    if (lisindex >= lis.length) {
        lisindex = 0;
    }
    lis[lisindex].className = 'li1';
};

function moveprev() {
    imgindex--;
    if (imgindex < 0) {
        imgindex = imglength - 2;
        showbox.scrollLeft = imgindex * (imglength - 1)
    }
    animate(showbox, {
        "scrollLeft": imgindex * imgwidth
    });
    lis[lisindex].className = '';
    lisindex--;
    if (lisindex < 0) {
        lisindex = lis.length - 1
    }
    lis[lisindex].className = 'li1';

};

next.onclick = function() {
    clearInterval(timer);
    movenext()
    automove()
};
prev.onclick = function() {
    clearInterval(timer);
    moveprev()
    automove()
};

for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onclick = function() {
        clearInterval(timer);
        imgindex = this.index;
        lis[lisindex].className = '';
        lisindex = this.index;
        lis[lisindex].className = 'li1';
        automove();
        animate(showbox, {
            "scrollLeft": imgindex * imgwidth
        });
    }
};

//轮播图
var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 3000, //3秒切换一次
    },
    //分页器
    pagination: {
        el: '.swiper-pagination',
        //点击分页器可以切换图片
        clickable: true,

    },
    //左右切换按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //一直循环切换
    loop: true,
    loopAdditionalSlides: 3,
});


//Tab 选项卡1
var Tab1 = document.querySelector('.Tap1');
var ullist = Tab1.querySelectorAll('  ul li');
var ollist = Tab1.querySelectorAll(' ol li');
for (let i = 0; i < ullist.length; i++) {
    ullist[i].onmouseover = function() {
        for (var j = 0; j < ullist.length; j++) {
            ullist[j].className = '';
            ollist[j].className = '';
        }
        ullist[i].className = 'li1';
        ollist[i].className = 'show1';
    }
};

//Tab2
var Tab2 = document.querySelector('.Tab2');
var list1 = Tab2.querySelectorAll('ul li ');
var divs = document.querySelectorAll('.showtimr');
var banner = document.querySelector('.banner-warp');
var top1;
var timer;
var retrun1 = document.querySelector('.top-su')

window.onscroll = function() {
    //获取当前的滚动距离
    top1 = document.documentElement.scrollTop
        //判断多少显示
    if (top1 > 50) {
        banner.style.display = "block";
    } else {
        banner.style.display = "none"
    }
};
//给点击对象绑定
retrun1.onclick = function() {
    //设置定时器让他帮我们一点点移动
    var dsq = setInterval(function() {
        //，每0.2秒钟走总滚动距离的10分之一
        var span = Math.ceil(top1 / 10)
            //获取剩下需要走的总滚动距离
        document.documentElement.scrollTop = (top1 - span)
            //如果滚动距离小于0时，关闭定时器
        if (top1 <= 0) {
            clearTimeout(dsq)
        }
    }, 20)
};