$(document).ready(function () {
   
    positionUlMenu();
   
    $(window).load(function(){
        tamanoInteracciones();
        theRotator();
    });
    positionInteracciones();
    $('#rotatorInteracciones').fadeIn(1000);
    $('#rotatorInteracciones ul li').fadeIn(1000);
    $(window).resize(function() {       
        positionUlMenu();
        //Interacciones
        tamanoInteracciones();
    });
});

function positionUlMenu(){
    var anchoLi = $("#cssmenu > ul > li > a").outerWidth();
    $("#cssmenu > ul > li > ul").css("left",anchoLi);
    $("#cssmenu > ul > li > ul > li > a").css("width",anchoLi);
}

function theRotator(){
	$('#rotatorInteracciones ul li').css({opacity:0.0});
	$('#rotatorInteracciones ul li:first').css({opacity:1.0});
	setInterval(function(){rotate();},6000);
} 
function rotate(){
	var current=($('#rotatorInteracciones ul li.show')?$('#rotatorInteracciones ul li.show'):$('#rotatorInteracciones ul li:first'));
	if(current.length==0)current=$('#rotatorInteracciones ul li:first');
	var next=((current.next().length)?((current.next().hasClass('show'))?$('#rotatorInteracciones ul li:first'):current.next()):$('#rotatorInteracciones ul li:first'));
	next.css({opacity:0.0}).addClass('show').animate({opacity:1.0},1000);
	current.animate({opacity:0.0},1000).removeClass('show');
};

function tamanoInteracciones(){
    var altura = $("#rotatorInteracciones ul li a img").css("height");;
    $('#rotatorInteracciones').css('height', altura);
}
function positionInteracciones(){
    if($(window).width() < 768){
        $("#rotatorInteracciones").appendTo(".tercera-columna");
        $("#pauta").appendTo(".tercera-columna");
    }else if($(window).width() >= 768){
        $("#rotatorInteracciones").appendTo(".primera-columna");
        $("#pauta").appendTo(".primera-columna");
    }
}