$(document).ready(function () {
    $(".topSlider").owlCarousel({
        items: 1,
        navContainer: '#customNav',
        dots: false,
        navText: ['<img src="./img/whiteArrow.svg" alt="">', '<img src="./img/whiteArrow.svg" alt="">'],
        navClass: ["arrowBlock__toLeft", "arrowBlock__toRight"]
    });
});

$(document).ready(function () {
    $(".contentSlider").owlCarousel({
        items: 1,
        dots: false,
        navContainer: '#customNav2',
        navText: ['<img src="./img/whiteArrow.svg" alt="">', '<img src="./img/whiteArrow.svg" alt="">'],
        navClass: ["arrowBlock__toLeft", "arrowBlock__toRight"]
    });
});