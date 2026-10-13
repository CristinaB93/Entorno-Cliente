// Creamos un string.
const letras = "abcdefghij";
// Guardamos la letra secreta en una constante. La letra se elige de maner aleatoria con math.random() * longitud del string.
// Como esta función devuelve un número decimal, se utiliza math.floor() para redondear al número base.
const secreta = letras[Math.floor(Math.random() * letras.length)];
// Definimos la variable de intentos.
let intentos = 0;
// Definimos la variable de entrada.
let entrada;
// Utilizamos el bucle do-while para siempre ejecutar al menos una vez las sentencias que contiene.
do {
    // Pedimos por prompt la letra que hay que adivinar. Además, dejamos ver el contenido de la variable intentos.
    entrada = prompt(`Adivina una letra entre a y j. Intentos: ${intentos}`);
    // Si no hay entrada en el prompt, o se cancela, sería nulo, por lo que cancelamos el juego.
    if (entrada === null) {
        // El mensaje aparecería tan solo en la consola de F12.
        console.log("Juego cancelado");
        // Con break salimos del bucle y continuamos con el programa.
        break;
    }
    // A la variable entrada, le recortamos los espacios que pueda haber antes o después de la letra con trim()
    // y la pasamos a minúscula con toLowerCase() para evitar fallos por usar mayúsculas.
    entrada = entrada.trim().toLowerCase();
    // Si la longitud del prompt introducido es mayor que 1 o la letra de la variable entrada no está incluida en el array,
    // el programa saca un aviso con alert.
    if (entrada.length !== 1 || !letras.includes(entrada)) {
        alert("Introduce una sola letra entre a y j");
        // Tras ejecutar lo anterior, el programa continúa.
        continue;
    }
    // Incrementamos la variable intentos con cada vuelta del bucle.
    intentos++;
    // Si la letra del prompt es diferente a la letra secreta que se había seleccionado de manera aletaoria,
    // saldrá el mensaje de alert.
    if (entrada !== secreta) {
        alert("No ha habido suerte. Inténtalo de nuevo.");
    }
// El bucle sigue mientras la letra de entrada sea diferente a la letra secreta.
} while (entrada !== secreta);
// Si la letra de entrada es igual en contenido y tipo a la letra secreta, entonces lanzamos el mensaje con alert.
if (entrada === secreta) {
    alert(`Correcto. La letra era ${secreta}. Intentos: ${intentos}`);
}