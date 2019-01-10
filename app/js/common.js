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

$(document).ready(function () {
    $(".chSlider1").owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        navContainer: '#customNav3',
        navText: ['<img src="./img/whiteArrow.svg" alt="">', '<img src="./img/whiteArrow.svg" alt="">'],
        navClass: ["arrowBlock__toLeft", "arrowBlock__toRight"]
    });
});

$(document).ready(function () {
    $(".chSlider2").owlCarousel({
        items: 1,
        dots: false, 
        loop: true,
        navContainer: '#customNav4',
        navText: ['<img src="./img/whiteArrow.svg" alt="">', '<img src="./img/whiteArrow.svg" alt="">'],
        navClass: ["arrowBlock__toLeft", "arrowBlock__toRight"]
    });
});

$(document).ready(function () {
    $(".chSlider3").owlCarousel({
        items: 1,
        dots: false, 
        loop: true,
        navContainer: '#customNav5',
        navText: ['<img src="./img/whiteArrow.svg" alt="">', '<img src="./img/whiteArrow.svg" alt="">'],
        navClass: ["arrowBlock__toLeft", "arrowBlock__toRight"]
    });
});


$(document).ready(function(){
    var $ticketsCollection = $(".seasonTicket");

    $ticketsCollection.map(function(index,element){
        var rows = $(element).find(".seasonTicket__row");
        var params = getParams(rows);
        if(!params) return;
        renderParams(rows, params);
    });

    function renderParams(element, params) {
        // console.log(params);
        params.map(function(elem){
            element.find("select[name='tarif']").append(makeForm(elem));
        });
        
    }

    function getParams(arrayWithParams){
        var params = [];
        arrayWithParams.map(function(index,elem){
            var $elem = $(elem);
            var count = $elem.data('count');
            var time = $elem.data('time');
            var price = $elem.data('price');
            if(!count) return;
            params.push({
                count, time, price
            });
        });
        return params;
    }

    function makeForm(params) {
       return `<option value="${params.count} раз / ${params.time} / ${params.price} р">
        ${params.count} раз / ${params.time} / ${params.price} р
       </option>`;
    }
    
});

