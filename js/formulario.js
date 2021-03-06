//// Validaciones formulario ////

var formulario = document.getElementById("formulario");
var emailInput = document.getElementById("email");
var nombreInput = document.getElementById("nombre");
var telefonoInput = document.getElementById("telefono");
var textarea = document.getElementById("comentario");


formulario.addEventListener("submit", function(event) {
    if(!(/[A-z]/).test(nombreInput.value)){
        nombreInput.removeAttribute("class");
        nombreInput.setAttribute("class", "input-error");
        event.preventDefault();
        return false;
    } else {
        nombreInput.removeAttribute("class");
        nombreInput.setAttribute("class", "input-ok");
    }
    
    if (emailInput.value !== "") {
        if (!(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/).test(emailInput.value)) {
            emailInput.removeAttribute("class");
            emailInput.setAttribute("class", "input-error");
            event.preventDefault();
            return false;
        } else {
            emailInput.removeAttribute("class");
            emailInput.setAttribute("class", "input-ok");
        }
    }
  
    if (telefonoInput.value !== "") {
        if ((/[0-9]{9}/).test(telefonoInput.value) === false || telefonoInput.value.length !== 9) {
            telefonoInput.removeAttribute("class");
            telefonoInput.setAttribute("class", "input-error"); 
            event.preventDefault();
            return false;
        } else {
            telefonoInput.removeAttribute("class");
            telefonoInput.setAttribute("class", "input-ok");
        }
    }

    alert("El formulario ha sido enviado");
});


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

var primerEspacio = /^ /;
var ultimoEspacio = / $/;
var variosEspacios = /[ ]+/g;

textarea.addEventListener("keypress", function(event) {

    var remplazarEspacios = textarea.value.replace(/\s\s+/g, ' ').trim();
    var arrayPalabras = remplazarEspacios.split(' ');
    var contador = arrayPalabras.length;
    insertarContador.innerHTML = contador;
    
    if (contador > 149) {
        textarea.setAttribute("maxlength", textarea.value.length);

    } else {
        textarea.removeAttribute("maxlength");
    }
});