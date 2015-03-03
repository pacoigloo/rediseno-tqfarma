$(document).ready(function () {
    var offsetMenuTop = $(".section_menu").offset().top;
    $('#initSession').unbind().click(function () {
        if ($('#popUpInicio').is(':visible') && $(window).width() >= 768) {
            $('#popUpInicio').fadeOut(500);
        } else if ($(window).width() >= 768){
            $('#popUpInicio').fadeIn(500);
        }
    });
    actualidad();
    $("#flecha_izquierda").unbind().click(function(){
       movimiento_flechas("left");
    });
    $("#flecha_derecha").unbind().click(function(){
        movimiento_flechas("right");
    });
    $("#flecha_izquierda_ovid").unbind().click(function(){
       movimiento_ovid("left");
    });
    $("#flecha_derecha_ovid").unbind().click(function(){
        movimiento_ovid("right");
    });
    $(".section_menu > ul > li:first-child").unbind().click(function(){
        $(".section_menu ul li:not('.section_menu > ul > li:first-child')").slideToggle('1000');
        
    });
    $(window).scroll(function(){
        comprobarDistTop(offsetMenuTop);
    });
    $(window).resize(function() {
        actualidad();
        alturaOvid();
        var offsetMenuTop = $(".section_menu").offset().top;
    });
});
$(window).load(function () {
    alturaOvid();
});

function actualidad(){
    var ancho_actualidad = $("#container_actualidad").width();
    if($(window).width() >= 768){
        $(".noticias_actualidad").css("width",(ancho_actualidad/4)-2);
        $("#tira_actualidad").css("width",ancho_actualidad*$("#tira_actualidad .grupo_noticias").length);
    }else if($(window).width() < 768){
        $(".noticias_actualidad").css("width",ancho_actualidad);
        $("#tira_actualidad").css("width",($(".grupo_noticias").width()*$("#tira_actualidad .grupo_noticias").length)-ancho_actualidad+8);
    }
    
}

function movimiento_flechas(direccion){
    var ancho_actualidad = $("#container_actualidad").width();
    var ancho_tira = $("#tira_actualidad").width();
    var right_actual = $("#tira_actualidad").css("right");
    if($(window).width() >= 768){
        ancho_actualidad += 6;
        if(direccion == "right" && parseInt(right_actual) < ancho_tira*3/4){
            $("#tira_actualidad").animate({right: "+="+ancho_actualidad}, 1000);
        }else if(direccion == "left" && parseInt(right_actual) > 0){
            $("#tira_actualidad").animate({right: "-="+ancho_actualidad}, 1000);
        }
    }else if($(window).width() < 768){
        ancho_actualidad += 3;
        if(direccion == "right" && parseInt(right_actual) < ancho_tira-ancho_actualidad-16){
            $("#tira_actualidad").animate({right: "+="+ancho_actualidad}, 1000);
        }else if(direccion == "left" && parseInt(right_actual) > 0){
            $("#tira_actualidad").animate({right: "-="+ancho_actualidad}, 1000);
        }
    }
}

function movimiento_ovid(direccion){
    var miId = $(".libros_ovid").filter(function(){return $(this).css("display") === "block";});
    miId = $(miId).attr("id");
    miId = parseInt(miId);
    if(direccion == "right" && miId<3){
        $(".libros_ovid:eq("+miId+")").fadeOut(500, function(){
            $(".libros_ovid:eq("+(miId+1)+")").fadeIn(500);    
        });
    }else if(direccion == "left" && miId>0){
         $(".libros_ovid:eq("+miId+")").fadeOut(500, function(){
            $(".libros_ovid:eq("+(miId-1)+")").fadeIn(500);     
        });
    }
}

function comprobarDistTop(offsetMenuTop){
    if($(window).scrollTop() > offsetMenuTop){
        $(".section_menu").addClass("menu_fixed");
    }else if($(window).scrollTop() < offsetMenuTop){
        $(".section_menu").removeClass("menu_fixed");
    }
}

function alturaOvid(){
    if($(window).width() < 768){
        var nuevaAltura = $(".section_ovid > img").outerHeight(true) + $(".section_ovid > .libros_ovid").outerHeight(true) + $(".section_ovid > h3").outerHeight(true);
        $(".section_ovid").css("height",nuevaAltura);
        $(".libros_ovid:first").show();
    }
}