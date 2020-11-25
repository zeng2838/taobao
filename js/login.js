var code = document.querySelector('.qrcode img');
var warp = document.querySelector('.login-warp');
var ewm = document.querySelector('.ewm');
var close1 = document.querySelector(' .ewm a');

code.onclick = function() {
    ewm.style.display = "block";
    warp.style.display = "none";
}
close1.onclick = function() {
    ewm.style.display = "none";
    warp.style.display = "block";
}
var meduie1 = document.querySelectorAll('.method a')[0];
var meduie2 = document.querySelectorAll('.method a')[1];
var show2 = document.querySelector('.show2');
var show1 = document.querySelector('.show1');

meduie1.onclick = function() {
    show2.style.display = 'none'
    meduie1.className = 'user'
    meduie2.className = ''
}
meduie2.onclick = function() {
    show2.style.display = 'block'
    meduie2.className = 'user'
    meduie1.className = ''
}


var but = document.querySelector('.butt button');
but.onclick = function() {
    var user1 = document.querySelector('.username').value;
    var pass1 = document.querySelector('.password').value;

    if (!user1 || !pass1) {
        alert('账号或密码不能为空')
        return;
    }
    ajax({
        url: './php/login.php',
        type: 'get',
        data: `user=${user1}&pass=${pass1}`,
        success: function(data) {
            if (data === '1') {
                alert('登录成功');
                //登入成功之后把账号保存到cookie中
                setCookie('login', user1, 3000)
                    //获取地址栏的参数
                var sech1 = location.search
                if (sech1) {
                    var site = sech1.split('=')[1];
                    location.href = site;
                } else {
                    location.href = './list.html';
                }

            } else {
                alert("账号或密码错误");
            }
        }
    })
}