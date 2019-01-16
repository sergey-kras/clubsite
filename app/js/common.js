$(document).ready(function () {
    $(".topSlider").owlCarousel({
        items: 1,
        loop: true,
        navContainer: '#customNav',
        dots: false,
        navText: ['<img src="./img/whiteArrow.svg" alt="">', '<img src="./img/whiteArrow.svg" alt="">'],
        navClass: ["arrowBlock__toLeft", "arrowBlock__toRight"],
        onInitialized: function (event) {
            $('#topSlider__count').html('1/' + this.items().length);
        },
        onChange: function (event) {
            var allItems = this.items();
            var activeIndex = 1;
            for (var item of allItems) {
                item = item[0].className;
                activeIndex++;
                if (item.search('active') > 0) break;
            }
            activeIndex = activeIndex > this.items().length ? 1 : activeIndex;
            $('#topSlider__count').html(activeIndex + '/' + event.item.count);
        }
    });
});

$(document).ready(function () {
    $(".contentSlider").owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        navContainer: '#customNav2',
        navText: ['<img src="./img/whiteArrow.svg" alt="">', '<img src="./img/whiteArrow.svg" alt="">'],
        navClass: ["arrowBlock__toLeft", "arrowBlock__toRight"],

        onChange: function (e) {
            $('#contentSlider__count').html('1/' + this.items().length);
            var allItems = this.items();
            for (var index = 0; index < this.items().length; index++) {
                if ($(allItems[index][0]).hasClass("active")) break;
            }
            console.log(index);
            $('#contentSlider__count').html(index  + '/' + e.item.count);
        }
    });
});
$(document).ready(function () {
    $(".chSlider1").owlCarousel({
        slideBy: 4,
        items: 4,
        dots: false,
        loop: true,
        navContainer: '#customNav3',
        navText: ['<img src="./img/whiteArrow.svg" alt="">', '<img src="./img/whiteArrow.svg" alt="">'],
        navClass: ["arrowBlock__toLeft", "arrowBlock__toRight"]
    });
});

$(document).ready(function () {
    $(".chSlider2").owlCarousel({
        slideBy: 4,
        items: 4,
        dots: false,
        loop: true,
        navContainer: '#customNav4',
        navText: ['<img src="./img/whiteArrow.svg" alt="">', '<img src="./img/whiteArrow.svg" alt="">'],
        navClass: ["arrowBlock__toLeft", "arrowBlock__toRight"]
    });
});

$(document).ready(function () {
    $(".chSlider3").owlCarousel({
        slideBy: 4,
        items: 4,
        dots: false,
        loop: true,
        navContainer: '#customNav5',
        navText: ['<img src="./img/whiteArrow.svg" alt="">', '<img src="./img/whiteArrow.svg" alt="">'],
        navClass: ["arrowBlock__toLeft", "arrowBlock__toRight"]
    });
});


$(document).ready(function () {
    var $ticketsCollection = $(".seasonTicket");

    $ticketsCollection.map(function (index, element) {
        var rows = $(element).find(".seasonTicket__row");
        var params = getParams(rows);
        if (!params) return;
        renderParams(rows, params);
    });

    function renderParams(element, params) {
        // console.log(params);
        params.map(function (elem) {
            element.find("select[name='tarif']").append(makeForm(elem));
        });

    }

    function getParams(arrayWithParams) {
        var params = [];
        arrayWithParams.map(function (index, elem) {
            var $elem = $(elem);
            var count = $elem.data('count');
            var time = $elem.data('time');
            var price = $elem.data('price');
            if (!count) return;
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

