"use strict";

var showwarp = document.querySelector('.shopping-warp');
console.log(showwarp);
var data;
ajax({
  url: './php/list.php',
  success: function success(data) {
    data = JSON.parse(data);
    var str = '';
    data.forEach(function (item) {
      str += "       \n        <div class=\"shopping\">\n                    <div class=\"shopping-top\">\n                        <a href=\"#\">\n                            <img src=\"".concat(item.tp, "\" alt=\"\">\n                            <span>").concat(item.sold, "</span>\n                        </a>\n                    </div>\n                    <div class=\"shopping-main\">\n                        <a href=\"#\">\n                            <p>").concat(item.bt, "</p>\n                            <span><i class=\"price\">").concat(item.price, "</i></span>\n                            <h3>\u4EF7\u683C:\n                                <u> <i>\uFFE5").concat(item.origin, "</i></u>\n                            </h3>\n                        </a>\n                        <div class=\"shopping-bottom\">\n                            <a href=\"#\" class=\"store\">\u8FDB\u5165\u5E97\u94FA></a>\n                            <a href=\"./detali.html\" class=\"rush\">\u7ACB\u5373\u62A2\u8D2D></a>\n                        </div>\n                    </div>\n                </div>                     \n        ");
    });
    showwarp.innerHTML = str;
  }
});