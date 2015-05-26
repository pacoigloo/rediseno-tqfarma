$(document).ready(function () {
    
    $("#flecha_izquierda_related").unbind().click(function(){
       movimiento_related("left");
    });
    $("#flecha_derecha_related").unbind().click(function(){
        movimiento_related("right");
    });
    
    
    $(window).resize(function() {
        
        tamanoRelated();
        posicionTabs();
    });
});

window.onload = function(){
    tamanoRelated();
    posicionTabs();
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
    if(window.innerWidth < 768){
        $('#tabs-laterales').appendTo('#menuEspecialidad');
        $('#dl-menu > button').css('height',parseInt($('#dl-menu > #cajon').css('height')));
    }else if(window.innerWidth >= 768){
        $('#tabs-laterales').prependTo('.menu-lateral');
        $('#dl-menu > button').css('height',"50px");
    }
}