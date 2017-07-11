// $.ajax({
//     // la URL para la petición
//     url : 'post.php',
 
//     // la información a enviar
//     // (también es posible utilizar una cadena de datos)
//     data : { id : 123 },
 
//     // especifica si será una petición POST o GET
//     type : 'GET',
 
//     // el tipo de información que se espera de respuesta
//     dataType : 'json',
 
//     // código a ejecutar si la petición es satisfactoria;
//     // la respuesta es pasada como argumento a la función
//     success : function(json) {
//         $('<h1/>').text(json.title).appendTo('body');
//         $('<div class="content"/>')
//             .html(json.html).appendTo('body');
//     },
 
//     // código a ejecutar si la petición falla;
//     // son pasados como argumentos a la función
//     // el objeto de la petición en crudo y código de estatus de la petición
//     error : function(xhr, status) {
//         alert('Disculpe, existió un problema');
//     },
 
//     // código a ejecutar sin importar si la petición falló o no
//     complete : function(xhr, status) {
//         alert('Petición realizada');
//     }
// });


///////// Ajax ------
var tareas = [];
var insertaNota = document.getElementById("insertaNota");
var botonCrearNota = document.getElementById("crearNota");
var mostrarTarea = document.getElementById("mostrar-tarea");


// crear tarea

var crearNota = function (nombre) {
    var XHR = new XMLHttpRequest();
    XHR.open("POST", "http://localhost:8000/api/tasks", true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4) {
            tareas.push(JSON.parse(XHR.responseText));
            // escribirTarea();
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            alert("Esta página no existe");
        }
    }

    XHR.send(JSON.stringify({"nombre": nombre}));
}


// leer tareas

var leerTareas = function () {
    var XHR = new XMLHttpRequest();
    XHR.open("GET", "http://localhost:8000/api/tasks", true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4) {
            tareas = JSON.parse(XHR.responseText);
            escribirTarea();
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            alert("Esta página no existe");
        }
    }

    XHR.send();

}

// mostrar tareas

var escribirTarea = function() {
	//  mostrarTarea.empty();

	if (tareas.length == 0) {
		mostrarTarea.innerHTML = "<li class='separacion-ul'>No hay tareas pendientes</li>";
	} else {
		var etiquetaLi = document.createElement("li");
        etiquetaLi.setAttribute("class", "tarea-item");


		for (var i = 0; i < tareas.length; i++) {
            mostrarTarea.innerHTML += "<li class='separacion-ul'>" + tareas[i].nombre + "</li>";
        }
	}
}


// eventos 

botonCrearNota.addEventListener("click", function(event) {
    crearNota(insertaNota.value);
});

leerTareas();
