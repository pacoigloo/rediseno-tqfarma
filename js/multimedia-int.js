$(document).ready(function() {

    $("#tira_videos_movil a:first-child .playV").show();
    $("#flecha_izquierda_related").unbind().click(function() {
        movimiento_related("left");
    });
    $("#flecha_derecha_related").unbind().click(function() {
        movimiento_related("right");
    });
    $("#flecha_izquierda_videos").unbind().click(function() {
        movimiento_flechas("left");
    });
    $("#flecha_derecha_videos").unbind().click(function() {
        movimiento_flechas("right");
    });
});

function movimiento_related(direccion) {
    var ancho_actualidad = $("#related").width();
    var ancho_tira = $("#tira_literaturas").width();
    var right_actual = $("#tira_literaturas").css("right");
    if (window.innerWidth >= 768 || window.innerWidth <= 500) {
        ancho_actualidad += 6;
        if (direccion == "right" && parseInt(right_actual) < ancho_tira / 3) {
            $("#tira_literaturas").animate({
                right: "+=" + ancho_actualidad
            }, 1000);
        }
        else if (direccion == "left" && parseInt(right_actual) > 0) {
            $("#tira_literaturas").animate({
                right: "-=" + ancho_actualidad
            }, 1000);
        }
    }
}

function movimiento_flechas(direccion) {
    var ancho_actualidad = $(".relacionados").width();
    var ancho_tira = $("#tira_videos").width();
    var right_actual = $("#tira_videos").css("right");
    var anchoPlay = $(".playV").width();
    if (window.innerWidth >= 500) {

        if (direccion == "right" && parseInt(right_actual) < ancho_tira / 2) {
            $("#tira_videos").animate({
                right: "+=" + ancho_actualidad
            }, 1000);
        }
        else if (direccion == "left" && parseInt(right_actual) > 0) {
            $("#tira_videos").animate({
                right: "-=" + ancho_actualidad
            }, 1000);
        }
    }
    else if (window.innerWidth < 500) {
        var miId = $("#tira_videos_movil a .playV").filter(function() {
            return $(this).css("display") === "block";
        });
        miId = $(miId).attr("id");

        miId = parseInt(miId);
        if (direccion == "right" && miId < 5) {
            $("#tira_videos_movil a .playV:eq(" + miId + ")").fadeOut(500, function() {
                $("#tira_videos_movil .playV:eq(" + (miId + 1) + ")").fadeIn(500);
            });
        }
        else if (direccion == "left" && miId > 0) {
            $("#tira_videos_movil a .playV:eq(" + miId + ")").fadeOut(500, function() {
                $("#tira_videos_movil a .playV:eq(" + (miId - 1) + ")").fadeIn(500);
            });
        }
    }
}
