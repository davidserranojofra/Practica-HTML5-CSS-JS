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
    console.log(salto);

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