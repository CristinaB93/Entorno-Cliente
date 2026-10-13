// Creamos una constante en la cual casteamos el string que nos devuelve el prompt a un número con Number().
// Además, el valor "10" tras la coma hace que salga en el prompt ese valor por defecto.
const entrada = Number(prompt("¿Hasta qué tabla quieres generar?", "10"));
// Definimos la constante por la cual vamos a comprobar que es un entero y además si es mayor que 0 el valor
// que toma es el de la constante entrada, en caso de no serlo, el valor por defecto será 10. De esta manera nos ahorramos
// tener que lanzar mensajes de validación, pues si no es válido el valor introducido, directamente es 10.
const maximo = Number.isInteger(entrada) && entrada > 0 ? entrada : 10;
// Definimos la variable salida, vacía.
let salida = "";
// Hacemos un bucle, comenzamos con la tabla del 1, por eso la variable tabla es igual a 1. Hacemos el bucle tantas veces
// como se haya definido el número máximo anteriormente, y, en cada vuelta, incrementamos la tabla en 1.
for (let tabla = 1; tabla <= maximo; tabla++) {
    // A la variable salida le sumamos y asignamos el texto, que va cambiando la variable "tabla".
    salida += `<h3>TABLA DEL ${tabla}</h3>`;
    // Añadimos a la salida la etiqueta de apertura de lista desorganizada para mostrar la tabla en una lista.
    salida += `<ul>`
    // Hacemos el bucle interno donde multiplicaremos el número de la tabla por el multiplicador, de 1 a 10 incluidos.
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        // Sumamos al string salida los resultados del bucle con las etiquetas de la lista.
        salida += `<li>${tabla} x ${multiplicador} = ${tabla * multiplicador}</li> <br>`;
    }
    // Y al terminar el bucle cerramos la lista.
    salida += `</ul>`
}
// Mostramos los resultados por consola.
console.log(salida);
// Escribimos el HTML.
document.body.innerHTML = salida