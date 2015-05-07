var activeMenu = false;
var urls = [];

$(document).ready(function () {
    var offsetMenuTop = $(".section_menu").offset().top;
    positionLogin();
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

    $(".section_menu > ul > li:first-child").unbind().click(function () {
        if(window.innerWidth < 768){
            activeMenu = !activeMenu;
            $(".section_menu > ul > li:not('.section_menu > ul > li:first-child')").slideToggle('1000');
        }
    });

    $(window).scroll(function () {
        comprobarDistTop(offsetMenuTop);
    });
    $(window).resize(function () {
        var offsetMenuTop = $(".section_menu").offset().top;
        positionLogin();
        topMenuChilds();
        linksMobile();
    });
    
    $(window).load(function(){
        topMenuChilds();
    });
});

function comprobarDistTop(offsetMenuTop) {
    if ($(window).scrollTop() > offsetMenuTop) {
        $(".section_menu").addClass("menu_fixed");
    } else if ($(window).scrollTop() < offsetMenuTop) {
        $(".section_menu").removeClass("menu_fixed");
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
        $(".section_menu > ul > li:not('.section_menu > ul > li:first-child')").css("display","inline-block");
        
    }else if(window.innerWidth < 768){
        //Posicion login
        $(".section_menu").append($("#popUpInicio"));
        //Menú superior
        if(activeMenu == true){
            $(".section_menu > ul > li:not('.section_menu > ul > li:first-child')").css("display","block");
        }else{
            $(".section_menu > ul > li:not('.section_menu > ul > li:first-child')").css("display","none");   
        }
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