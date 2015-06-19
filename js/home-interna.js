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
    
    //mostrarLineas();
    
    $(window).scroll(function(){
        comprobarDistTop(offsetMenuTop);
    });
    $(window).resize(function() {
        var offsetMenuTop = $(".section_menu").offset().top;
        var widtImg = $('#slider').width();
        $('#slider img').css('width',widtImg);
        //mostrarLineas();
        cantCols();
    });
    $(window).load(function(){
        cantCols();
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


/*function mostrarLineas(){
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
    
}*/

function cantCols(){
    if(window.innerWidth >= 768){
        if($(".columna-central").width()/$(".lineaVadem").width() > 3){
            $("#webTemp").append("<ul class='lineaVadem'></ul>");
            $("#webTemp").append("<ul class='lineaVadem'></ul>");
            var count = 0;
            $(".lineaVadem li").each(function(index){
                $(".lineaVadem").eq(count).append($(this));
                if(count==2){
                    count=0;
                }else{
                    count++;
                }
            });
        }else{
            $("#webTemp").append("<ul class='lineaVadem'></ul>");
            $(".lineaVadem").eq(1).append($(".lineaVadem li:odd"));
        }
    }
}