//En este apartado, al lanzar un mensaje a la consola no hace falta que se cargue el HTML.
console.log("El fichero externo app.js funciona correctamente");

//Para poder hacer referencia a este elemento, necesitamos que el HTML lo haya cargado previamente.
//Por eso hacemos uso del atributo "defer" o llamamos a este archivo desde el final del body.
const titulo = document.getElementById("mensaje"); 
titulo.textContent = "JavaScript ejecutado correctamente";