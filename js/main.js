var imgItems = $('.slider li').length;//Num de slides

var imgPos = 1;

//Agregando paginacion
for(i = 1; i <= imgItems; i++){
    $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
}
//Fin de paginacion



$('.slider li').hide(); //Ocultamos los slides
$('.slider li:first').show(); //Mostramos el primer slide
$('.pagination li:first').css({'color': '#789600'}); //Damos estilos al primer item de la paginacion modificar con css

//Ejecutamos todas las funciones

$('.pagination li').click(paginacion);
$('.right span').click(nextSlider);
$('.left span').click(prevSlider);

setInterval(function(){
    nextSlider();
}, 4300);

//Funciones===========================================================

function paginacion(){
    var paginacionPos = $(this).index() + 1; //Posicion de la paginacion seleccionada
    $('.slider li').hide(); //Ocultar todos los slides
    $('.slider li:nth-child('+ paginacionPos +')').fadeIn();//Mostramos el sldie seleccionado
    
    //Damos estilos a la pagina seleccionada
    $('.pagination li ').css({'color': '#fff'});
    $(this).css({'color': '#789600'});
    
    imgPos = paginacionPos;
}



function nextSlider(){
    if(imgPos >= imgItems){imgPos = 1;}
    else{imgPos++;}
    
    $('.pagination li ').css({'color': '#fff'});
     $('.pagination li:nth-child(' + imgPos + ')').css({'color': '#789600'});
    
    $('.slider li').hide(); //Ocultar todos los slides
    $('.slider li:nth-child(' + imgPos + ')').fadeIn();//Mostramos el sldie seleccionado
}



function prevSlider(){
    if(imgPos <= 1){imgPos = imgItems;}
    else{imgPos--;}
    
    $('.pagination li ').css({'color': '#fff'});
     $('.pagination li:nth-child(' + imgPos + ')').css({'color': '#789600'});
    
    $('.slider li').hide(); //Ocultar todos los slides
    $('.slider li:nth-child(' + imgPos + ')').fadeIn();//Mostramos el sldie seleccionado
}
    
    
    
    
    
    
    
   