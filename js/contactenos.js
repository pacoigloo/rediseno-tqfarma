$(document).ready(function () {
    /*$(document).on('focus', '#campoTexto', function(e){
        alert("asdfasdf");
        e.preventDefault();
    });*/
    
    var margin = ($(".contact").width()-$("input[value='Enviar']").outerWidth())/2;
    $("input[value='Enviar']").css("margin-left",margin);
    
   if(/Android/.test(navigator.appVersion)){
       window.addEventListener("resize", function(){
           //alert(document.activeElement.tagName);
          if(document.activeElement.tagName=="input"){
              alert("3");
             window.setTimeout(function(){
                 alert("4");
                document.activeElement.scrollIntoViewIfNeeded();
             },0);
          }
       })
    } 
});