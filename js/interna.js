$(document).ready(function () {
   
    positionUlMenu();
    $(window).load(function(){
        tamanoInteracciones();
		tamanoOvid();
        theRotator();
        tamanoProducto();
    });
    positionInteracciones();
	positionOvid();
    $('#rotatorInteracciones').fadeIn(1000);
    $('#rotatorInteracciones ul li').fadeIn(1000);
	
	$('#rotatorOvid').fadeIn(1000);
    $('#rotatorOvid ul li').fadeIn(1000);
	asignarAlturaTituloDescriptor();
    $(window).resize(function() {       
        positionUlMenu();
        //Interacciones
        tamanoInteracciones();
		tamanoOvid();
		
		positionInteracciones();
		positionOvid();
        asignarAlturaTituloDescriptor();
        tamanoProducto();
    });
	
	if ($("#hfRegisterEvent").val() == "true") {

		$( ".ac-container input" ).addClass(function( index ) {
			if(index>1)
				$(this).prop('checked', true)
		});
        //$(".ac-container input").prop('checked', true);
    }
	
});


function trackEventProduct(cbdescritor) {
    if ($("#hfRegisterEvent").val() == "true") {
        if (!cbdescritor.checked) {
            var category = cbdescritor.getAttribute("productname");
            var action = "Visualizar " + cbdescritor.getAttribute("descriptorname");
            var opt_label = "";
            var opt_value = 1;
            var opt_noninteraction = true;
            _gaq.push(['_trackEvent', category, action, opt_label, opt_value, opt_noninteraction]);
        
        }
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
	$('#rotatorOvid ul li').css({opacity:0.0});
	$('#rotatorOvid ul li:first').css({opacity:1.0});
	setInterval(function(){rotate();},6000);
	setInterval(function(){rotateOvid();},6000);
} 
function rotate(){
	var current=($('#rotatorInteracciones ul li.show')?$('#rotatorInteracciones ul li.show'):$('#rotatorInteracciones ul li:first'));
	if(current.length==0)current=$('#rotatorInteracciones ul li:first');
	var next=((current.next().length)?((current.next().hasClass('show'))?$('#rotatorInteracciones ul li:first'):current.next()):$('#rotatorInteracciones ul li:first'));
	next.css({opacity:0.0}).addClass('show').animate({opacity:1.0},1000);
	current.animate({opacity:0.0},1000).removeClass('show');
};

function rotateOvid(){
	var current=($('#rotatorOvid ul li.show')?$('#rotatorOvid ul li.show'):$('#rotatorOvid ul li:first'));
	if(current.length==0)current=$('#rotatorOvid ul li:first');
	var next=((current.next().length)?((current.next().hasClass('show'))?$('#rotatorOvid ul li:first'):current.next()):$('#rotatorOvid ul li:first'));
	next.css({opacity:0.0}).addClass('show').animate({opacity:1.0},1000);
	current.animate({opacity:0.0},1000).removeClass('show');
};

function tamanoInteracciones(){
    var altura = $("#rotatorInteracciones ul li a img").css("height");;
    $('#rotatorInteracciones').css('height', altura);
}

function tamanoOvid(){
    var altura = $("#rotatorOvid ul li a img").css("height");;
    $('#rotatorOvid').css('height', altura);
}
function positionInteracciones(){
    if(window.innerWidth < 768){
        $("#rotatorInteracciones").appendTo(".tercera-columna");
        $("#pauta").appendTo(".tercera-columna");
    }else if(window.innerWidth >= 768){
        $("#rotatorInteracciones").appendTo(".primera-columna");
        $("#pauta").appendTo(".primera-columna");
    }
}

function positionOvid(){
    if(window.innerWidth < 768){
        $("#rotatorOvid").appendTo(".tercera-columna");        
    }else if(window.innerWidth >= 768){
        $("#rotatorOvid").appendTo(".primera-columna");        
    }
}
function tamanoProducto(){
    if($(".nombre-producto").height() > 49){
        $("#imgTerapia").css("top","-12%");
    }else{
        $("#imgTerapia").css("top","-75%");
    }
}

function asignarAlturaTituloDescriptor()
{
    if($('.ac-container label span:contains(CONTRAINDICACIONES Y ADVERTENCIAS:)').height() > $('.ac-container label').height())
    {
        $('.ac-container label:contains(CONTRAINDICACIONES Y ADVERTENCIAS:)').css('height','65px');
    }
    else
    {
        $('.ac-container label:contains(CONTRAINDICACIONES Y ADVERTENCIAS:)').css('height','30px');
    }
    if($('.ac-container label span:contains(RECOMENDACIONES GENERALES:)').height() > $('.ac-container label').height() )
    {
        $('.ac-container label:contains(RECOMENDACIONES GENERALES:)').css('height','65px');
    }
    else
    {
        $('.ac-container label:contains(RECOMENDACIONES GENERALES:)').css('height','30px');
    }
}