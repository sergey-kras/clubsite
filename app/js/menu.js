$(document).ready(function(){
    var $menuToggle = $("#menuToggle");
    var $menuBox = $("#menuBox");

    $menuToggle.click(function(event){
        $menuToggle.toggleClass("_menu_open");
    });
});
