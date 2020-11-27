var showwarp = document.querySelector('.shopping-warp');
var data;
ajax({
    url: './php/list.php',
    success: function(data) {
        data = JSON.parse(data)
        var str = '';
        data.forEach(item => {
            str += `       
        <div class="shopping">
                    <div class="shopping-top">
                        <a href="#">
                            <img src="${item.tp}" alt="">
                            <span>${item.sold}</span>
                        </a>
                    </div>
                    <div class="shopping-main">
                        <a href="#">
                            <p>${item.bt}</p>
                            <span><i class="price">${item.price}</i></span>
                            <h3>价格:
                                <u> <i>￥${item.origin}</i></u>
                            </h3>
                        </a>
                        <div class="shopping-bottom">
                            <a href="#" class="store">进入店铺></a>
                            <a href="./detail.html?id=${item.id}" class="rush">立即抢购></a>
                        </div>
                    </div>
                </div>                     
        `
        })
        showwarp.innerHTML = str;
    }
});


var personal = document.querySelector('.personal');
var user = getCookie('login');
console.log(user);
personal.innerHTML = user;