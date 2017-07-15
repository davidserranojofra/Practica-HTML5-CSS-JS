// Animación en Javascript

var portada = document.getElementById("portada");
var h1 = document.getElementsByClassName("titulo-inicial")[0];

portada.addEventListener('mousemove', function (event) {
    h1.style.top =  ((window.innerHeight/2)* -1) + (event.clientY --) + "px";
    h1.style.left = ((window.innerWidth/2)* -1) + (event.clientX ++) + "px";  
});


portada.addEventListener('mouseleave', function(event) {
    console.log("fuera");
    h1.style.top = "0px";
    h1.style.left = "0px";
});