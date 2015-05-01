$(document).ready(function () {
    var offsetMenuTop = $(".section_menu").offset().top;
    $('#initSession').unbind().click(function () {
        if ($('#popUpInicio').is(':visible') && $(window).width() >= 768) {
            $('#popUpInicio').fadeOut(500);
        } else if ($(window).width() >= 768){
            $('#popUpInicio').fadeIn(500);
        }
    });
    $(".section_menu > ul > li:first-child").unbind().click(function(){
        $(".section_menu ul li:not('.section_menu > ul > li:first-child')").slideToggle('1000');
        
    });
    $(window).scroll(function(){
        comprobarDistTop(offsetMenuTop);
    });
    $(window).resize(function() {
        var offsetMenuTop = $(".section_menu").offset().top;
    });
    
    if( window.innerWidth >= 767)
    {
        $('#movilTemp').html('');
        $('#webTemp').html('<div id="btnsLateralesWeb" class = "tercera-columna">'+
        '<div class="btnImagenes"> <img class="icon" src="images/journals.png"></img>'+
        '<div class="textBtn"> Ver todas las <br> revistas de <br> ElSevier </div></div></div>');
    }
    else
    {
        if( window.innerWidth < 767)
        {
            $('#webTemp').html('');
            $('#movilTemp').html('<div id="btnsLateralesWeb" class = "tercera-columna">'+
            '<div class="btnImagenes"> <img class="icon" src="images/journals.png"></img>'+
            '<div class="textBtn"> Ver todas las <br> revistas de <br> ElSevier </div></div></div>');
        }
    }
});

function comprobarDistTop(offsetMenuTop){
    if($(window).scrollTop() > offsetMenuTop){
        $(".section_menu").addClass("menu_fixed");
    }else if($(window).scrollTop() < offsetMenuTop){
        $(".section_menu").removeClass("menu_fixed");
    }
}

$(function() {
	$( '#dl-menu' ).dlmenu({
		animationClasses : { classin : 'dl-animate-in-5', classout : 'dl-animate-out-5' }
	});
});

//function acomodarBotones(){
$( window ).resize(function() {
 
    if( window.innerWidth >= 767)
    {
        $('#movilTemp').html('');
        $('#webTemp').html('<div id="btnsLateralesWeb" class = "tercera-columna">'+
        '<div class="btnImagenes"> <img class="icon" src="images/journals.png"></img>'+
        '<div class="textBtn"> Ver todas las <br> revistas de <br> ElSevier </div></div></div>');
    }
    else
    {
        if( window.innerWidth < 767)
        {
            $('#webTemp').html('');
            $('#movilTemp').html('<div id="btnsLateralesWeb" class = "tercera-columna">'+
            '<div class="btnImagenes"> <img class="icon" src="images/journals.png"></img>'+
            '<div class="textBtn"> Ver todas las <br> revistas de <br> ElSevier </div></div></div>');
         }
    }
});
//}
