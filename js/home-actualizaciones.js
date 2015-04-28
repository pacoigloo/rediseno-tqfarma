$(document).ready(function () {
    var offsetMenuTop = $(".section_menu").offset().top;
    $('.slideshow').cycle({
		fx: 'curtainX'
	});
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
   
    $(window).resize(function() {       
        posicionTabs();
    });
});
window.onload = function(){
    posicionTabs();
}

function posicionTabs(){
    $('#dl-menu > button').css('height',parseInt($('#dl-menu > #cajon').css('height')));
    $(".columna-central > h2").css("padding-top",$(window).width()*402/701);
}
$(function() {
	$( '#dl-menu' ).dlmenu({
		animationClasses : { classin : 'dl-animate-in-5', classout : 'dl-animate-out-5' }
	});
});