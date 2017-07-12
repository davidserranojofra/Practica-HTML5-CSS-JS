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
            escribirTarea();
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
    mostrarTarea.innerHTML = null;

	if (tareas.length == 0) {
		mostrarTarea.innerHTML = "<li class='separacion-tareas'>No hay tareas pendientes</li>";
	} else {
		var etiquetaLi = document.createElement("li");
        etiquetaLi.setAttribute("class", "tarea-item");

		for (var i = 0; i < tareas.length; i++) {
            mostrarTarea.innerHTML += "<li class='separacion-tareas'>" + tareas[i].nombre + "<button class='boton-borrar' data-task-id='" + tareas[i].id + "'>Eliminar</button></li>";
        }
	}

}

// borrar tareas

var borrarTarea = function (id) {
    var XHR = new XMLHttpRequest();
    XHR.open("DELETE", "http://localhost:8000/api/tasks/" + id, true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4) {
            console.log("tarea borrada");
            leerTareas();
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            alert("Esta página no existe");
        }
    }

    XHR.send();
}


// eventos 

botonCrearNota.addEventListener("click", function(event) {
    crearNota(insertaNota.value);
    
});

leerTareas();

// $(document).on('click', '.deleteTask', function(){
// 	var id = $(this).data('taskId');
// 	deleteTask(id);
// });

var botonBorrar = document.getElementsByClassName("boton-borrar");
console.log(botonBorrar);
// botonBorrar.addEventListener("click", function(event) {
//     var id = this.data("taskId");
//     console.log(id);
//     console.log(botonBorrar);
// });






