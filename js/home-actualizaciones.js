$(document).ready(function () {
    $('.slideshow').cycle({
		fx: 'curtainX'
	});
   
    $(window).resize(function() {       
        posicionTabs();
        $('.slideshow').cycle({
    		fx: 'curtainX'
    	});
    });
});

window.onload = function(){
    posicionTabs();
}

function posicionTabs(){
    $('#dl-menu > button').css('height',parseInt($('#dl-menu > #cajon').css('height')));
    //$(".columna-central > h2").css("padding-top",$(".columna-central").width()*402/701);
    
}
$(function() {
	$( '#dl-menu' ).dlmenu({
		animationClasses : { classin : 'dl-animate-in-5', classout : 'dl-animate-out-5' }
	});
});