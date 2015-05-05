$(document).ready(function () {
    var offsetMenuTop = $(".section_menu").offset().top;
    positionLogin();
    $('#initSession').unbind().click(function () {
        if ($('#popUpInicio').is(':visible') && window.innerWidth >= 768) {
            $('#popUpInicio').fadeOut(500);
        } else if (window.innerWidth >= 768){
            $('#popUpInicio').fadeIn(500);
        } else if (window.innerWidth < 768){
            $('#popUpInicio').animate({height: "toggle"}, 500);
        }
    });

    $(".section_menu > ul > li:first-child").unbind().click(function () {
        if(window.innerWidth < 768){
            $(".section_menu > ul > li:not('.section_menu > ul > li:first-child')").slideToggle('1000');
        }
    });

    $(window).scroll(function () {
        comprobarDistTop(offsetMenuTop);
    });
    $(window).resize(function () {
        var offsetMenuTop = $(".section_menu").offset().top;
        positionLogin();
        topMenuChilds();
    });
    
    $(window).load(function(){
        topMenuChilds();
    });
});

function comprobarDistTop(offsetMenuTop) {
    if ($(window).scrollTop() > offsetMenuTop) {
        $(".section_menu").addClass("menu_fixed");
    } else if ($(window).scrollTop() < offsetMenuTop) {
        $(".section_menu").removeClass("menu_fixed");
    }
}

function topMenuChilds(){
    $(".thirdLevel").each(function(){
        $(this).css("left",$(this).closest('ul[class^="secondLevel"]').width()-1)
    });
}

function positionLogin(){
    if(window.innerWidth >= 768){
        //Posicion Login
        $("header").append($("#popUpInicio"))
        //Menú superior
        $(".section_menu > ul > li:not('.section_menu > ul > li:first-child')").css("display","inline-block");
        
    }else if(window.innerWidth < 768){
        //Posicion login
        $(".section_menu").append($("#popUpInicio"));
        //Menú superior
        $(".section_menu > ul > li:not('.section_menu > ul > li:first-child')").css("display","none");
    }
}
$("#firstLevel > li::after").click(function(){
    console.log("click");
});