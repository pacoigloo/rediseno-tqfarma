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
    $("#flecha_izquierda_related").unbind().click(function(){
       movimiento_related("left");
    });
    $("#flecha_derecha_related").unbind().click(function(){
        movimiento_related("right");
    });
    $(window).scroll(function(){
        comprobarDistTop(offsetMenuTop);
    });
    
    $(window).resize(function() {
        var offsetMenuTop = $(".section_menu").offset().top;
        tamanoRelated();
        posicionTabs();
    });
});

window.onload = function(){
    tamanoRelated();
    posicionTabs();
}

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

var misTabs = $("#tabs-laterales > ul > li");
var misTabsDiv = $("#tabs-laterales > #container > div");

misTabs.click( function(){
    misTabs.toggleClass("activo");
    misTabsDiv.toggleClass("activo");
});


function tamanoRelated(){
    $(".related_products:first").show();
    var altura1 = $('.related_products').height();
    var altura2 = $('#related > h3').height();
    $("#related").css('height',altura1+altura2+15);
}

function movimiento_related(direccion){
    var miId = $(".related_products").filter(function(){return $(this).css("display") === "block";});
    miId = $(miId).attr("id");
    miId = parseInt(miId);
    if(direccion == "right" && miId<3){
        $(".related_products:eq("+miId+")").fadeOut(500, function(){
            $(".related_products:eq("+(miId+1)+")").fadeIn(500);    
        });
    }else if(direccion == "left" && miId>0){
         $(".related_products:eq("+miId+")").fadeOut(500, function(){
            $(".related_products:eq("+(miId-1)+")").fadeIn(500);     
        });
    }
}

function posicionTabs(){
    if($(window).width() < 768){
        $('#tabs-laterales').appendTo('#menuEspecialidad');
        $('#dl-menu > button').css('height',parseInt($('#dl-menu > #cajon').css('height')));
    }else if($(window).width() >= 768){
        $('#tabs-laterales').prependTo('#menu-lateral');
        $('#dl-menu > button').css('height',"50px");
    }
}