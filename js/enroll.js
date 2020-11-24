var proto = document.querySelector('.proto');
var close = document.querySelector('.close');
var btn = document.querySelector('.btn');
close.onclick = function() {
    location.href = './index.html'
}

btn.onclick = function() {
    proto.style.display = 'none'
}