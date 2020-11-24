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
console.log(meduie1, meduie2);
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