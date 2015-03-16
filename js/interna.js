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
    positionUlMenu();
    $(window).scroll(function(){
        comprobarDistTop(offsetMenuTop);
    });
    $(window).load(function(){
        tamanoInteracciones();
        theRotator();
    });
    positionInteracciones();
    $('#rotatorInteracciones').fadeIn(1000);
    $('#rotatorInteracciones ul li').fadeIn(1000);
    $(window).resize(function() {
        var offsetMenuTop = $(".section_menu").offset().top;
        positionUlMenu();
        //Interacciones
        tamanoInteracciones();
    });
});

function comprobarDistTop(offsetMenuTop){
    if($(window).scrollTop() > offsetMenuTop){
        $(".section_menu").addClass("menu_fixed");
    }else if($(window).scrollTop() < offsetMenuTop){
        $(".section_menu").removeClass("menu_fixed");
    }
}

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
    }else{
        $("#rotatorInteracciones").appendTo(".tercera-columna");
        $("#pauta").appendTo(".tercera-columna");
    }
}

/*$(".has-sub").each(function(index){
    console.log(index+": "+$(this).css("height"));
    var altura = $(this).css("height");
    altura = altura/2;
    //document.styleSheets[0].addRule($(this)+'>a::after','top: '+altura+';');
    document.styleSheets[0].addRule($('a::after',this),'top: '+altura+';');
});
document.styleSheets[0].addRule('#cssmenu > ul .has-sub>a::after','top: 21px;');*/