// Smooth Scroll

$('.contenedor-menu li a').click(function(){
   
    if (!elementosMenu.length - 1){
        var jumpId = $(this).attr('href');
        $('body, html').animate({scrollTop: $(jumpId).offset().top - 52}, 450);
    }
});

var elementosMenu = document.getElementsByClassName("item-menu");

function borrarClaseActiva() {
    for (var i = 0; i < elementosMenu.length; i++ ) {
        elementosMenu[i].classList.remove("active");
    }
}


// cambiar .active automatico

var acumulaDesplazamiento = function(elemento) {
    var top = 0;
    do {
        top += elemento.offsetTop || 0;
        elemento = elemento.offsetParent;
    } while (elemento);

    return top;
}

var dondeEstaQuiensoy = acumulaDesplazamiento(document.getElementById("quiensoy")) - 50;
var dondeEstaEstudios = acumulaDesplazamiento(document.getElementById("estudios")) - 50;
var dondeEstaExperiencia = acumulaDesplazamiento(document.getElementById("experiencia")) - 50;
var dondeEstaSobreMi = acumulaDesplazamiento(document.getElementById("sobre-mi")) - 50;
var dondeEstaContacto = acumulaDesplazamiento(document.getElementById("contacto")) - 50;
var menuNavegacion = document.getElementsByClassName("menu")[0];

window.addEventListener("scroll", cambiarMenu);

var previo;

function cambiarMenu(event) {

    var desplazamientoPagina = window.pageYOffset;

    if (desplazamientoPagina >= 0 && desplazamientoPagina < dondeEstaQuiensoy) {
        if (!previo || previo !== 1) {
            previo = 1;
        } else if (previo === 1){
            return false;
        }

        borrarClaseActiva();
        document.querySelector("a[href$='portada']").parentNode.classList.add("active");
    } else if (desplazamientoPagina >= dondeEstaQuiensoy && desplazamientoPagina < dondeEstaEstudios) {
        if (!previo || previo !== 2) {
            previo = 2;
        } else if (previo === 2){
            return false;
        }

        borrarClaseActiva();
        document.querySelector("a[href$='quiensoy']").parentNode.classList.add("active");
    } else if (desplazamientoPagina >= dondeEstaEstudios && desplazamientoPagina < dondeEstaExperiencia) {
        if (!previo || previo !== 3) {
            previo = 3;
        } else if (previo === 3){
            return false;
        }

        borrarClaseActiva();
        document.querySelector("a[href$='estudios']").parentNode.classList.add("active");  
    } else if (desplazamientoPagina >= dondeEstaExperiencia && desplazamientoPagina < dondeEstaSobreMi) {
        if (!previo || previo !== 4) {
            previo = 4;
        } else if (previo === 4){
            return false;
        }

        borrarClaseActiva();
        document.querySelector("a[href$='experiencia']").parentNode.classList.add("active");
    } else if (desplazamientoPagina >= dondeEstaSobreMi && desplazamientoPagina < dondeEstaContacto) {
        if (!previo || previo !== 5) {
            previo = 5;
        } else if (previo === 5){
            return false;
        }

        borrarClaseActiva();
        document.querySelector("a[href$='sobre-mi']").parentNode.classList.add("active");
    } else {
        if (!previo || previo !== 6) {
            previo = 6;
        } else if (previo === 6){
            return false;
        }

        borrarClaseActiva();
        document.querySelector("a[href$='contacto']").parentNode.classList.add("active");
    } 
}