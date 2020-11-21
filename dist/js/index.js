"use strict";

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
automove();

function automove() {
  timer = setInterval(function () {
    movenext();
  }, 3000);
}

function movenext() {
  imgindex++;

  if (imgindex >= imglength) {
    imgindex = 1;
    showbox.scrollLeft = 0;
  }

  ;
  animate(showbox, {
    "scrollLeft": imgindex * imgwidth
  });
  lis[lisindex].className = '';
  lisindex++;

  if (lisindex >= lis.length) {
    lisindex = 0;
  }

  lis[lisindex].className = 'li1';
}

function moveprev() {
  imgindex--;

  if (imgindex < 0) {
    imgindex = imglength - 2;
    showbox.scrollLeft = imgindex * (imglength - 1);
  }

  animate(showbox, {
    "scrollLeft": imgindex * imgwidth
  });
  lis[lisindex].className = '';
  lisindex--;

  if (lisindex < 0) {
    lisindex = lis.length - 1;
  }

  lis[lisindex].className = 'li1';
}

next.onclick = function () {
  clearInterval(timer);
  movenext();
  automove();
};

prev.onclick = function () {
  clearInterval(timer);
  moveprev();
  automove();
};

for (var i = 0; i < lis.length; i++) {
  lis[i].index = i;

  lis[i].onclick = function () {
    clearInterval(timer);
    imgindex = this.index;
    lis[lisindex].className = '';
    lisindex = this.index;
    lis[lisindex].className = 'li1';
    automove();
    animate(showbox, {
      "scrollLeft": imgindex * imgwidth
    });
  };
} //轮播图


var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 3000 //3秒切换一次

  },
  //分页器
  pagination: {
    el: '.swiper-pagination',
    //点击分页器可以切换图片
    clickable: true
  },
  //左右切换按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  //一直循环切换
  loop: true,
  loopAdditionalSlides: 3
}); // //如果你开启了clickable， 还可以鼠标划过按钮切换到指定的图片
// for (i = 0; i < mySwiper.pagination.bullets.length; i++) {
//     mySwiper.pagination.bullets[i].onmouseover = function() {
//         this.click();
//     };
// }
// //鼠标移入停止播放
// mySwiper.el.onmouseover = function() {
//     mySwiper.autoplay.stop();
// }
// //鼠标离开开始自动切换
// mySwiper.el.onmouseout = function() {
//     mySwiper.autoplay.start();
// }