var imgs = document.querySelector('.imgs');
var hover = document.querySelector('.hover1');
hover.onmouseover = function() {
    imgs.style.display = 'block';
}
hover.onmouseout = function() {
    imgs.style.display = 'none';
}