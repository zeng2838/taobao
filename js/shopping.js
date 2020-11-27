var login = getCookie('login');
var user = document.querySelector('.li1 a');
var href = location.href;
var shopping;
var contentmain = document.querySelector('.shopping-main');
var cont = document.querySelector('.content');
var adds;
if (login) {
    user.innerHTML = login
};

function showdiv() {
    var divs = `
    <div class="air">
    <div class="ps">
        <p>购物车帮您一次性完成批量购买与付款，下单更便捷，付款更简单！</p>
    </div>
    <p>您的位置：首页我的淘宝我的购物车</p>
    <p>您的购物车还是空的，赶紧行动吧！您可以：</p>
    <p class="kooe">看看：<i>我的收藏夹  </i></p>
    <p class="kooe1">看看: <i>已买到的宝贝</i> </p>
</div>
    `
    cont.innerHTML = divs

};
showCart();

function showCart() {
    if (login) {
        shopping = localStorage.getItem('shopping');
        if (shopping) {
            shopping = JSON.parse(shopping);
            var lengths = shopping.length;
            var quanxuan = shopping.every(item => {
                return item.is_select == 1
            })
            var str1 = '';
            str1 = `
            <div class="shopping-top">
            <ul>
                <li class="li1">
                    <a href="#" class="a1">全部商品 <i class='ili'></i></a>
                </li>
                <li>
                    <a href="#">降价商品 <i>0</i></a>
                </li>
                <li class="li3">
                    <a href="#">库存紧张  <i>0</i></a>
                </li>
                <div class="sum">
                    <span>已选商品(不含运费) <i>0.00</i></span>
                    <a href="#">结算</a>
                </div>
            </ul>
            <div class="list-top">
                <ul>
                    <li class="i1"><input type="checkbox"> &nbsp;全选</li>
                    <li class="i2">商品信息</li>

                    <div class="ul-r">
                        <ul>
                            <li>单价</li>
                            <li>数量</li>
                            <li>金额</li>
                            <li>操作</li>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>
          
            `
            shopping.forEach(item => {
                str1 += `
                <div class="listbox">
            <div class="list">
                <div class="cart">
                    <div class="cartlist">
                        <ul>
                            <li class="checkbox">
                                <input type="checkbox" name='radio'${item.is_select===1?'checked':''} data-id=${item.id}>
                            </li>
                            <li class="imgli">
                                <a href="#">
                                    <img src="${item.tp}" alt="">
                                </a>
                            </li>
                            <li class="title">
                                <a href="#" title="${item.bt}">
                                    ${item.bt}
                                </a>
                                <div class="promo">
                                    <p> <img src="http://img.alicdn.com/tfs/TB1559E3oY1gK0jSZFCXXcwqXXa-25-16.png" alt=""></p>
                                    <div class="logo">
                                        <img src="http://assets.alicdn.com/sys/common/icon/trade/xcard.png" alt="">
                                        <img src="http://img.alicdn.com/tps/i3/T1Vyl6FCBlXXaSQP_X-16-16.png" alt="">
                                        <img src="http://img.alicdn.com/tps/i4/T1BCidFrNlXXaSQP_X-16-16.png" alt="">
                                    </div>
                                </div>
                            </li>
                            <li class="licolor">
                                <p>颜色分类:黑色</p>
                                <p>尺码:26/s[一尺9]</p>
                            </li>
    
                            <li class="unit">
                                <p class="origin">￥<i>${item.origin}</i></p>
                                <p><i >${item.price}</i></p>
                            </li>
                            <li>
                                <div class="number">
                                    <a href="#" class='plus' data-id=${item.id}>-</a>
                                    <input type="text" value="${item.number}"${item.number}>
                                    <a href="#" class='lose' da-id=${item.id}>+</a>
                                </div>
                            </li>
                            <li class="money">
                                <p><i>${item.price}</i></p>
    
                            </li>
                            <li class="operat">
                                <p>移入收藏夹</p>
                                <p class="delete"data-id=${item.id}>删除</p>
                                <p class="baby">相识宝贝</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                </div>
                
               `
            })

            adds = tatoll()
            str1 += `
               
            <div class="final">
            <div class="final-left">
                <div class="cat1">
                    <input type="checkbox" class="all"${quanxuan?'checked':''}> 全选
                </div>
                <div class="box">
                    <a href="#" class="del">删除</a>
                    <a href="#">移入删除夹</a>
                    <a href="#">分享</a>
                </div>
            </div>
            <div class="final-right">
                <div class="sele">
                    <a href="#">已选商品<i class="select">${adds[0]}</i>件</a>
                </div>
                <div class="tet">
                    <a href="#">合计(不含运费): <span class="plice">${adds[1]}</span></a>
                </div>
                <button class="button">结算</button>
            </div>
        </div>
            
            `
            contentmain.innerHTML = str1

            var li1 = document.querySelector('.ili');
            li1.innerHTML = shopping.length
        } else {
            showdiv()
        }

    } else {
        alert('您还未登录')
        location.href = './login.html?Url=' + href
    }
};
contentmain.onclick = function(e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    var list1 = document.querySelectorAll('.checkbox input')

    if (target.className === 'all') {
        shopping.forEach(item => {
            if (target.checked) {
                item.is_select = 1;
            } else {
                item.is_select = 0;
            }
        })
        localStorage.setItem('shopping', JSON.stringify(shopping));
        showCart()
    }

    if (target.name === 'radio') {
        var data1 = target.getAttribute('data-id');
        shopping.forEach(item => {
            if (item.id === data1) {
                if (item.is_select == 1) {
                    item.is_select = 0
                } else {
                    item.is_select = 1
                }
            }
        })
        localStorage.setItem('shopping', JSON.stringify(shopping));
        showCart()
    }


    if (target.className === 'delete') {
        var data2 = target.getAttribute('data-id');
        shopping = shopping.filter(item => {
            return item.id != data2;
        })
        localStorage.setItem('shopping', JSON.stringify(shopping));
        showCart()
        if (shopping.length < 1) {
            showdiv()
        }
    }
    if (target.className === 'del') {
        shopping = shopping.filter(item => {
            return item.is_select != 1;
        })
        localStorage.setItem('shopping', JSON.stringify(shopping));
        showCart()
        if (shopping.length < 1) {
            showdiv()
        }
    }


    if (target.className === 'plus') {
        var data3 = target.getAttribute('data-id');
        shopping.forEach(item => {
            if (item.id === data3 && item.number > 1) {
                item.number--
            }
        })
        localStorage.setItem('shopping', JSON.stringify(shopping));
        showCart()
        abc()
    }

    if (target.className === 'lose') {
        var data4 = target.getAttribute('da-id');
        shopping.forEach(item => {
            if (item.id === data4) {
                item.number++
            }
        })
        localStorage.setItem('shopping', JSON.stringify(shopping));
        showCart()
        abc()
    }


    if (target.className === 'button') {
        if (adds[0] > 0) {
            if (confirm('您确定要购买吗')) {
                alert('您已成功支付' + adds[1])

                shopping = shopping.filter(item => {
                    return item.is_select != 1
                });
            }
        } else {
            alert('您还未选中商品')
        }
        localStorage.setItem('shopping', JSON.stringify(shopping));
        showCart();
        if (shopping.length < 1) {
            showdiv()
        }

    }








};

if (shopping.length === 0) {
    showdiv()
};

function tatoll() {
    //所选商品总数量
    var num = 0
        //所选商品价格
    var numP = 0
        //遍历所有商品
    shopping.forEach(function(item) {
        //判断当前商品是否被选中
        if (item.is_select == 1) {
            //累加计算被选中商品的所有数量
            num += parseInt(item.number)
                //累加计算被选中商品的价格,数量乘以价格
            numP += parseInt(item.number) * parseFloat(item.origin)

        }
    })
    return [num, numP.toFixed(2)]
};

function abc() {
    var lists = document.querySelectorAll('.list')
    lists.forEach(function(item) {
        var jiage = $(item).find('.origin').children().html()
        var num = $(item).find('.number').children().eq(1).val()
        var xiaoji = parseFloat(jiage) * parseInt(num)
        $(item).find('.money').children().children().html(xiaoji.toFixed(2))
    })

};
abc();