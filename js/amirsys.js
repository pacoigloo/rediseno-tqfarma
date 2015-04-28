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
    var pantalla = document.getElementById("contenidoPrinci");
    if( pantalla.offsetWidth < 677)
    {
        //var pantalla = $(contenidoPrinci).getDimensions();
        console.log(pantalla.offsetWidth + "hola");
        var columna = document.getElementById('columnaPrinci');
        var botones = document.getElementById('btnsLaterales');
        columna.removeChild(botones);
        
        var movil = document.getElementById('movilTemp');
        movil.innerHTML='<div id="btnsLaterales" class = "tercera-columna">'+
        '<div class="btnImagenes"> <img class="icon" src="images/radiology-icon.png"></img>'+
        '<div class="textBtn"> Imágenes Populares </div></div><div class="btnImagenes">'+
        '<img class="icon" src="images/commentadd-icon.png"></img> <div class="textBtn">'+
        'Temas Populares </div></div></div>';
        
    }
//}
