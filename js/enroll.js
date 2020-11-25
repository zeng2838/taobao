var proto = document.querySelector('.proto');
var close = document.querySelector('.close');
var btn = document.querySelector('.btn');
close.onclick = function() {
    location.href = './index.html'
}

btn.onclick = function() {
    proto.style.display = 'none'
}

var user = document.querySelector('.user');
var pass = document.querySelector('.pass');
var form = document.querySelector('form');
var span1 = document.querySelectorAll("span")[0];
var span2 = document.querySelectorAll("span")[1];

var usr1 = false;
var psr1 = false;
user.onblur = function() {
    //获取输入框的值
    var usr = user.value;

    var reg = /^([a-zA-Z0-9_\u4e00-\u9fa5]{4,16})$/;
    if (reg.test(usr)) {
        usr1 = true;
        btn.disabled = false
    } else {
        usr1 = false;
        btn.disabled = true;

        user.focus()
    }
}
pass.onblur = function() {
    var psr = pass.value;
    var psr1 = false;
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
    if (reg.test(psr)) {
        psr1 = true;
        btn.disabled = false;
    } else {
        psr1 = false;
        btn.disabled = true;

        pass.focus()
    }
}

form.onsubmit = function() {
    if (usr1 && psr1) {
        return true
    } else {
        pass.onblur();
        user.onblur();
        return false

    }
}



var button = document.querySelector('button');
button.onclick = function() {
    var user1 = document.querySelector('.user').value;
    var pass1 = document.querySelector('.pass').value;
    if (!user1 || !pass1) {
        alert('账号或密码不能为空')
        return;
    }

    ajax({
        url: './php/register.php',
        data: `nn=${user1}&pp=${pass1}`,
        success: function(data) {
            console.log(data);
            if (data === '1') {
                alert('账户已注册');
            } else {
                alert('注册成功');
                location.href = '../dist/login.html'

            }
        }
    })
}