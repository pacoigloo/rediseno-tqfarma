
$(document).ready(function(){
    console.log("Hola");
    $('#tidNumHijos').change(function(){
        var valorCambiado =$('#tidNumHijos').val();
        if(valorCambiado == '0')
        {
            $('#primerHijo').css('display','none');
            $('#segundoHijo').css('display','none');
            $('#tercerHijo').css('display','none');
            $('#cuartoHijo').css('display','none');
            $('#quintoHijo').css('display','none');
            $('#sextoHijo').css('display','none');
        }
        else
        {
            if(valorCambiado == '1'){
                $('#primerHijo').css('display','inline-block');
                $('#segundoHijo').css('display','none');
                $('#tercerHijo').css('display','none');
                $('#cuartoHijo').css('display','none');
                $('#quintoHijo').css('display','none');
                $('#sextoHijo').css('display','none');
            }
            else
            {
                if(valorCambiado == '2')
                {
                    $('#primerHijo').css('display','inline-block');
                    $('#segundoHijo').css('display','inline-block');
                    $('#tercerHijo').css('display','none');
                    $('#cuartoHijo').css('display','none');
                    $('#quintoHijo').css('display','none');
                    $('#sextoHijo').css('display','none');
                }
                else
                {
                    if(valorCambiado == '3')
                    {
                        $('#primerHijo').css('display','inline-block');
                        $('#segundoHijo').css('display','inline-block');
                        $('#tercerHijo').css('display','inline-block');
                        $('#cuartoHijo').css('display','none');
                        $('#quintoHijo').css('display','none');
                        $('#sextoHijo').css('display','none');
                    }
                    else
                    {
                        if(valorCambiado == '4')
                        {
                            $('#primerHijo').css('display','inline-block');
                            $('#segundoHijo').css('display','inline-block');
                            $('#tercerHijo').css('display','inline-block');
                            $('#cuartoHijo').css('display','inline-block');
                            $('#quintoHijo').css('display','none');
                            $('#sextoHijo').css('display','none');
                        }
                        else
                        {
                            if(valorCambiado == '5')
                            {
                                $('#primerHijo').css('display','inline-block');
                                $('#segundoHijo').css('display','inline-block');
                                $('#tercerHijo').css('display','inline-block');
                                $('#cuartoHijo').css('display','inline-block');
                                $('#quintoHijo').css('display','inline-block');
                                $('#sextoHijo').css('display','none');
    
                            }
                            else
                            {
                                if(valorCambiado == '6')
                                {
                                    $('#primerHijo').css('display','inline-block');
                                    $('#segundoHijo').css('display','inline-block');
                                    $('#tercerHijo').css('display','inline-block');
                                    $('#cuartoHijo').css('display','inline-block');
                                    $('#quintoHijo').css('display','inline-block');
                                    $('#sextoHijo').css('display','inline-block');
                                }
                                 
                            }
                        }
                         
                    }
                     
                }
                 
            }
        }
    });
});