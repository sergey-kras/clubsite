$(document).ready(function(){
    var $menuToggle = $("#menuToggle");
    var $menuBox = $("#menuBox");
    var $menuHeader = $("#header");
    var $mobileLogo = $("#mobileLogo");

    $menuToggle.click(function(event){
        $menuToggle.toggleClass("_menu_open");
        $menuHeader.toggleClass("_menu_open");
        $menuBox.toggleClass("_menu_open");
        $mobileLogo.toggleClass("_menu_open");
        $(".iconText._menuLink").toggleClass("_menu_open");
    });
});
