var id1 = location.search;

var ids = id1.split('=')[1];
var glass = document.querySelector('.glass');
var signif = document.querySelector('.signif');

var content = document.querySelector('.content');
var data;
if (ids) {
    ajax({
        url: './php/detail.php',
        data: `id=${ids}`,
        success: function(data) {
            data = JSON.parse(data)
            console.log(data);
            var str = `

            <div class="glass">
            <div class="glass-top">
                <div class="bootn">
                    <div class="toimg">
                        <img src="${data.tp}" alt="">
                        <div class="mask"></div>
                    </div>
                </div>
                <div class="glass-bottom">
                    <ul>
                        <li><img src="./img/list1.png" alt=""></li>
                        <li><img src="./img/list2.png" alt=""></li>
                        <li><img src="./img/list3.png" alt=""></li>
                        <li><img src="./img/list4.png" alt=""></li>
                        <li><img src="./img/list5.png" alt=""></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="signif">
            <h2> ${data.bt}</h2>


            <div class="fcs">
                <span>价格</span>
                <i>${data.price}</i>
                <h3>促销价</h3>
                <h4>￥${data.origin}</h4>
            </div>
            <div class="freight">
                <span>运费</span>
                <p>福建泉州至深圳 快递:0.00</p>
            </div>
            <div class="seles">
                <ul>
                    <li>月销量 <span>${data.sold}</span></li>
                    <li>累计评价 <span>227</span></li>
                    <li class="lilast">送天猫积分<span>74</span>起</li>
                </ul>
            </div>
            <div class="size">
                <div class="size-left">
                    <span>尺码</span>
                </div>
                <div class="size-right">
                    <a href="#">39</a>
                    <a href="#">40</a>
                    <a href="#">41</a>
                    <a href="#">42</a>
                    <a href="#">43</a>
                    <a href="#">44</a>
                </div>
            </div>
            <div class="sort">
                <h3>颜色分类</h3>
                <span>
                <img src="http://img.alicdn.com/imgextra/i3/2159486323/O1CN01u2uqWo1wZywsOsDy1_!!2159486323.jpg_40x40q90.jpg" alt="">
            <img src="http://img.alicdn.com/imgextra/i3/2159486323/O1CN01iPfZEn1wZyws2Aww7_!!2159486323.jpg_40x40q90.jpg" alt="">
            </span>
            </div>
            <div class="nums">
                <h3>数量</h3>
                <div class="add">
                    <input type="text" value="1">
                    <div class="add-mi">
                        <span>+</span>
                        <span>-</span>

                    </div>

                </div>
                <div class="sotck">
                    <i>库存 <u>11716</u>件</i>
                </div>
            </div>

            <div class="pabayle">
                <div class="p-top">
                    <span>花呗分期</span>
                    <p>登录后确定是否享有该服务 <i>什么是花呗分期</i></p>
                </div>
                <div class="p-bottom">
                    <ul>
                        <li>
                            <span>￥50.46起x3期</span></br>
                            <span>(含手续费)</span>
                        </li>
                        <li>
                            <span>￥25.57起x6期</span></br>
                            <span>(含手续费)</span>
                        </li>
                        <li>
                            <span>￥13.25起x12期</span></br>
                            <span>(含手续费)</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="join">
                <a href="#" class="purch">立即购买</a>
                <a href="#" class="cat">加入购物车</a>
            </div>
        </div>
        <div class="showimg">
            <img src="https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2159486323/O1CN01qzFILi1wZyx7fWCPz_!!2159486323.jpg_430x430q90.jpg" alt="">
        </div>
`
            content.innerHTML = str

            var imgs = document.querySelector('.imgs');
            var hover = document.querySelector('.hover1');
            hover.onmouseover = function() {
                imgs.style.display = 'block';
            }
            hover.onmouseout = function() {
                imgs.style.display = 'none';
            }
            var minBox = document.querySelector('.toimg')
            var mask = document.querySelector('.mask')
            var maxBox = document.querySelector('.showimg')
            var maxImg = document.querySelector('.showimg img')
            console.log(minBox, maxImg);
            // 鼠标移动，mask跟随移动
            minBox.onmousemove = function(e) {
                var e = e || event;
                // 计算msk的定位坐标
                var maskLeft = e.clientX - offset(minBox).left - mask.clientWidth / 2
                var maskTop = e.pageY - offset(minBox).top - mask.clientHeight / 2

                // 限制mask移动范围
                if (maskLeft < 0) {
                    maskLeft = 0
                }
                if (maskLeft >= (minBox.clientWidth - mask.clientWidth)) {
                    maskLeft = minBox.clientWidth - mask.clientWidth
                }
                if (maskTop < 0) {
                    maskTop = 0
                }
                if (maskTop >= (minBox.clientHeight - mask.clientHeight)) {
                    maskTop = minBox.clientHeight - mask.clientHeight
                }

                mask.style.left = maskLeft + 'px'
                mask.style.top = maskTop + 'px'

                var scaleX = maskLeft / (minBox.clientWidth - mask.clientWidth)
                var scaleY = maskTop / (minBox.clientHeight - mask.clientHeight)

                // 大图也跟随移动
                maxImg.style.left = -scaleX * (maxImg.clientWidth - maxBox.clientWidth) + 'px'
                maxImg.style.top = -scaleY * (maxImg.clientHeight - maxBox.clientHeight) + 'px'
            }

            minBox.onmouseenter = function() {
                mask.style.display = 'block'
                maxBox.style.display = 'block'
            }
            minBox.onmouseleave = function() {
                mask.style.display = 'none'
                maxBox.style.display = 'none'
            }



            var imgs = document.querySelectorAll('.glass-bottom img');

            for (let i = 0; i < imgs.length; i++) {
                imgs[i].onclick = function() {
                    for (var j = 0; j < imgs.length; j++) {
                        imgs[j].className = "";
                    }
                    imgs[i].className = "img1";

                    var leftimg = document.querySelector('.toimg img');
                    var rightimg = document.querySelector('.showimg img')
                    leftimg.setAttribute("src", "./img/" + (i + 1) + ".png")
                    rightimg.setAttribute("src", "../img/" + (i + 1) + ".png")
                }


            }




        }
    })

} else {
    alert('非法进入')
}