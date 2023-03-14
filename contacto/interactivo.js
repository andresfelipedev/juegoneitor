'use strict'

var formulario = document.getElementById("formulario");
var mensaje = document.getElementById("mensaje");
var boton = document.getElementById("boton");

function mostrar(){
        alert('Tu mensaje ha sido enviado.')

}

boton.addEventListener("click", mostrar);

