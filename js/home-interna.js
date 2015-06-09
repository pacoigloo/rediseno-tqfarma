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
    
    mostrarLineas();
    
    $(window).scroll(function(){
        comprobarDistTop(offsetMenuTop);
    });
    $(window).resize(function() {
        var offsetMenuTop = $(".section_menu").offset().top;
        console.log($('#slider').width());
        var widtImg = $('#slider').width();
        $('#slider img').css('width',widtImg);
        mostrarLineas();
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


function mostrarLineas(){
    if(window.innerWidth >= 910)
    {
        $('.columna-central #webTemp').css('display','block');
        $('.columna-central #movilTemp').css('display','none');
    }
    else
    {
        if(window.innerWidth < 910)
        {
            $('.columna-central #movilTemp').css('display','block');
            $('.columna-central #webTemp').css('display','none');
            
        }
    }
    
}
