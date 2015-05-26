var activeMenu = false;
var urls = [];

$(document).ready(function () {
    var offsetMenuTop = $(".section_menu").offset().top;
    //positionLogin();
    acomodarListaPaises();
    positionPaises();
    linksMobile();
    $('#initSession').unbind().click(function () {
        if ($('#popUpInicio').is(':visible') && window.innerWidth >= 768) {
            $('#popUpInicio').fadeOut(500);
        } else if (window.innerWidth >= 768){
            $('#popUpInicio').fadeIn(500);
        } else if (window.innerWidth < 768){
            $('#popUpInicio').animate({height: "toggle"}, 500);
        }
    });
    
    $('#close-popup img').unbind().click(function () {
        if ($('#popUpInicio').is(':visible') && window.innerWidth >= 768) {
            $('#popUpInicio').fadeOut(500);
        } else if (window.innerWidth >= 768){
            $('#popUpInicio').fadeIn(500);
        } else if (window.innerWidth < 768){
            $('#popUpInicio').animate({height: "toggle"}, 500);
        }
    });

    $("#ulPaises > li").unbind().click(function () {
        if ($('.subPaises').is(':visible') && window.innerWidth >= 768) {
            $('.subPaises').fadeOut(500);
        } else if (window.innerWidth >= 768){
            $('.subPaises').fadeIn(500);
        } else if (window.innerWidth < 768){
            $('.subPaises').animate({height: "toggle"}, 500);
        }
    });

    $(".section_menu > ul > li:first-child").unbind().click(function () {
        if(window.innerWidth < 768){
            activeMenu = !activeMenu;
            $(".section_menu > ul:not('.subPaises') > li:not('.section_menu > ul > li:first-child')").slideToggle('1000');
        }
        return false;
    });
    
    $(window).scroll(function () {
        comprobarDistTop(offsetMenuTop);
    });
    $(window).resize(function () {
        var offsetMenuTop = $(".section_menu").offset().top;
        positionLogin();
        acomodarListaPaises();
        positionPaises();
        topMenuChilds();
        linksMobile();
    });
    
    $(window).load(function(){
        topMenuChilds();
        positionLogin();
    });
    
    if(window.innerWidth < 768){
      
    }
});

function comprobarDistTop(offsetMenuTop) {
    if(window.innerWidth < 768){
        if ($(window).scrollTop() > offsetMenuTop ) {
            $(".section_menu").addClass("menu_fixed");
            //$("header").addClass("menu_fixed");
        } else{
            $(".section_menu").removeClass("menu_fixed");
            //$("header").removeClass("menu_fixed");
        }
    }
}

function topMenuChilds(){
    $(".thirdLevel").each(function(){
        $(this).css("left",$(this).closest('ul[class^="secondLevel"]').width()-1)
    });
}

function positionLogin(){
    if(window.innerWidth >= 768){
        //Posicion Login
        $("header").append($("#popUpInicio"))
        //Menú superior
        $(".section_menu > ul:not('.subPaises') > li:not('.section_menu > ul > li:first-child')").css("display","inline-block");
        //Fixed
        $('header').css('left',($(window).width()-$('header').width())/2)
        $('.section_menu').css('top',$('header').outerHeight(true));
        $($('body').children()[2]).css('margin-top',parseInt($('.section_menu').css('top'))+$('.section_menu').outerHeight(true));
    }else if(window.innerWidth < 768){
        //Posicion login
        $(".section_menu").append($("#popUpInicio"));
        //Menú superior
        if(activeMenu == true){
            $(".section_menu > ul:not('.subPaises') > li:not('.section_menu > ul > li:first-child')").css("display","block");
        }else{
            $(".section_menu > ul:not('.subPaises') > li:not('.section_menu > ul > li:first-child')").css("display","none");   
        }
        //Fixed
        $('header').css('left',0);
        $('.section_menu').css('top',0);
        $($('body').children()[2]).css('margin-top',0);
    }
}
$(".firstLevel > li > a").click(function(){
    var active = false;
    //Verifica si el menu del click esta activo
    if($(this).parent().children("ul.secondLevel").css("display") == "block"){
        active = true;   
    }
    //Los esconde todos
    if($("ul.secondLevel").is(":visible")){
        $("ul.secondLevel").slideUp(500);
    }
    //Si no estaba activo antes entonces lo baja
    if(active != true){
        $(this).parent().children("ul.secondLevel").slideDown(500);
    }
});

function acomodarListaPaises(){
    
    if(window.innerWidth >= 768){
    //var margin = parseInt($('header').css("margin-bottom"));
    
    $('.subPaises').css("padding-top", '25px');
    //$('#defaultPais').css("height",'30px')
    }else if(window.innerWidth < 768){
        $('.subPaises').css("top",  "0px");
        //$('#defaultPais').css("height", "0px")
    }
    
    
}

$('#ulPaises').hover(
    function()
    {
        if(window.innerWidth >= 768){
             $('.subPaises').stop(true,true).slideDown('fast');
        }
    },
    function()
    {
        if(window.innerWidth >= 768){
            $('.subPaises').slideUp('fast');
        }
    }
);
   
function clickear(){
     $('#ulPaises > li').click(function(){
        if(window.innerWidth < 768){
            var active = false; 
            if($('.subPaises > li').css("display") == "block")
            {
                active = true;   
            }
            if($(".subPaises > li").is(":visible")){
                $(".subPaises > li").slideUp(500);
            }
            if(active != true){
             $(".subPaises > li").slideDown(500);
            }
        }
     }
            
    ); 
}   
      
function linksMobile(){
    //Verifica tamaño de window
    if(window.innerWidth >= 768){
        //Si es mayor que 768 y el array de urls no esta vacio devuelve el valor de los atributos href a cada elemento
        if(urls.length != 0){
            $.each(urls, function( i, v ) {
              if(i != "undefined"){
                  $(".firstLevel > li:nth-of-type("+i+") > a").attr("href",v);
              }
            });
            urls = [];
        }
    }else if(window.innerWidth < 768){
        //Si es mayor que 768 y el array de urls esta vacio elimina el atributo href de cada elemento y lo guarda en urls
        if(urls.length == 0){
            //Cuenta desde el inicio hasta la cantidad de li's
            for(var i = 1;i < $(".firstLevel > li").size()+1;i++){
                //Comprueba si li tiene ul
                if($(".firstLevel > li:nth-of-type("+i+")").has("ul").size() != 0){
                    //Si tiene ul entonces le saca el href y lo quita
                    urls[ i] = $(".firstLevel > li:nth-of-type("+i+") > a").attr("href");
                    $(".firstLevel > li:nth-of-type("+i+") > a").removeAttr("href");
                }
            }
        }
    }
}

function positionPaises(){
    if(window.innerWidth >= 768){
       
        $("#ulPaises").append($(".subPaises"));
        
    }else if(window.innerWidth < 768){
        
        $(".section_menu").append($(".subPaises"));
        
        if(activeMenu == true){
            
             $(".section_menu > ul:not('.firstLevel') > li:not('.section_menu > ul > li')").css("display","block");
        }else{
             $(".section_menu > ul:not('.firstLevel') > li:not('.section_menu > ul > li')").css("display","none");   
        }
    }
}