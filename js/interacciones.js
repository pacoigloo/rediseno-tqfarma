$(document).ready(function () {
    $(window).resize(function() {
        iframeSize();
    });
});

$(window).load(function(){
    iframeSize(); 
});

function iframeSize(){
    $(".contenido_interna > iframe").css("height",50+($(".contenido_interna").width()*666/970))
}