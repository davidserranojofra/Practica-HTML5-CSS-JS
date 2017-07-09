// Input radio--> al seleccionar "Otro" se añade input

var seleccionarInput = document.getElementById('ckbox');
var otro = document.getElementById("otro");

var creoInput = document.createElement("input");
creoInput.setAttribute("type", "text");
creoInput.setAttribute("name", "inputotro");
creoInput.setAttribute("class", "inputotro");
creoInput.setAttribute("id", "inputotro");
creoInput.setAttribute("placeholder", "De que manera fue...");

seleccionarInput.addEventListener("click", function (event) {
    
    if (seleccionarInput.children[6].checked === true) {
        otro.appendChild(creoInput);

    } else if (otro.children[0]) {
        otro.removeChild(creoInput); 
    }
});


// Textarea --> contador de 150 pabras

var contador = 0;
var textarea = document.getElementById("comentario");
var insertarContador = document.getElementById("contadorPalabras");

textarea.addEventListener("keypress", function(event) {

    contador = textarea.value.split(" ");
    insertarContador.innerHTML = contador.length;

    if (contador.length > 150) {
        textarea.setAttribute("maxlength", textarea.value.length);

    } else {
        textarea.removeAttribute("maxlength");
    }
});


// Smooth Scroll

var elementosMenu = document.getElementsByClassName("item-menu");

for (var i = 0; i < elementosMenu.length; i++) {
    
    elementosMenu[i].addEventListener("click", function(event) {
        
        var seccionAIr = this.getElementsByTagName("a")[0].href.split("#");

        borrarClaseActiva();
        this.classList.add("active");
        

        if (seccionAIr.length === 2) {
            event.preventDefault();
            var irA = seccionAIr[seccionAIr.length - 1];
            cogerIdParaScroll(irA);
        }
    });
}

function cogerIdParaScroll(id) {
    
    var elemento;

    if (id === "") {
        elemento = document.getElementById("portada");
    } else {
        elemento = document.getElementById(id);
    }

    hacerScroll(elemento);
} 

function hacerScroll(elemento) {
    
    var salto = elemento.getBoundingClientRect().top * 0.3;
    document.body.scrollTop += salto;

    if (!elemento.ultimoSalto || elemento.ultimoSalto > Math.abs(salto)) {
        elemento.ultimoSalto = Math.abs(salto);

        setTimeout(function() {
            hacerScroll(elemento);
        }, 30);
    } else {
        elemento.ultimoSalto = null;
    }
}

function borrarClaseActiva() {
    for (var i = 0; i < elementosMenu.length; i++ ) {
        elementosMenu[i].classList.remove("active");
    }
}


//espia posicion para cambiar .active automaticamente

var acumulaDesplazamiento = function(elemento) {
    var top = 0;
    console.log(elemento);
    do {
        top += elemento.offsetTop || 0;
        elemento = elemento.offsetParent;
        console.log(elemento);
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
        document.querySelector("a[href='#']").parentNode.classList.add("active");
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
