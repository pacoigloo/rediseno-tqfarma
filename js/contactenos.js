$(document).ready(function () {
    var offsetMenuTop = $(".section_menu").offset().top;
    $(window).scroll(function(){
        comprobarDistTop(offsetMenuTop);
    });
    $(window).resize(function() {
        var offsetMenuTop = $(".section_menu").offset().top;
    });
});

function comprobarDistTop(offsetMenuTop){
    if($(window).scrollTop() > offsetMenuTop){
        $(".section_menu").addClass("menu_fixed");
    }else if($(window).scrollTop() < offsetMenuTop){
        $(".section_menu").removeClass("menu_fixed");
    }
}