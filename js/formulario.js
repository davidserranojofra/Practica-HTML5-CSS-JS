//// Validaciones formulario ////

var formulario = document.getElementById("formulario");
var emailInput = document.getElementById("email");
var nombreInput = document.getElementById("nombre");
var telefonoInput = document.getElementById("telefono");


nombreInput.addEventListener("blur", comprovarNombre);
emailInput.addEventListener("blur", comprovarMail);
telefonoInput.addEventListener("blur", comprovarTelefono);



function comprovarNombre() {
    if(!(/[A-z]/).test(nombreInput.value)){
        nombreInput.removeAttribute("class");
        nombreInput.setAttribute("class", "input-error");
    } else {
        nombreInput.removeAttribute("class");
        nombreInput.setAttribute("class", "input-ok");
    }
}

    
function comprovarMail() {
    if (emailInput.value !== "") {
        if (!(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/).test(emailInput.value)) {
            alert("Introduzca un email valido");
            emailInput.removeAttribute("class");
            emailInput.setAttribute("class", "input-error");
        } else {
            emailInput.removeAttribute("class");
            emailInput.setAttribute("class", "input-ok");
        }
    }
}

function comprovarTelefono() {
    if (telefonoInput.value !== "") {
        
        //Añado este if por que no me funciona bien el patron y si paso de 9 cifras lo da por bueno igual.
        if (telefonoInput.value.length === 9) { 
            if ((/[0-9]{9}/).test(telefonoInput.value)) {
                telefonoInput.removeAttribute("class");
                telefonoInput.setAttribute("class", "input-ok"); 
            }
        } else {
            telefonoInput.removeAttribute("class");
            telefonoInput.setAttribute("class", "input-error");
        }
    }
}


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