// Declaramos las constantes para almacenar los datos del usuario.
// Con prompt solicitamos una entrada de texto al usuario.
const NOMBRE_ENTRADA = prompt("Introduce tu nombre:");
// Hacemos una comprobación para asegurarnos de que el valor no sea nulo y 
// eliminamos los espacios en blanco al inicio y al final usando la función trim().
const NOMBRE = NOMBRE_ENTRADA === null ? "" : NOMBRE_ENTRADA.trim();
const EDAD_ENTRADA = prompt("Introduce tu edad:");
// Convertimos el texto de prompt a un numero, casteándolo con Number().
const EDAD = Number(EDAD_ENTRADA);
// Con confirm solicitamos una entrada de tipo booleano al usuario.
const ACEPTA = confirm("¿Aceptas las condiciones?");

// Declaramos la variable mensaje para almacenar el mensaje que se mostrará al usuario.
// Según las condiciones que se cumplan, se asignará un mensaje diferente a la variable mensaje.
let mensaje;
    if (NOMBRE === "") {
        mensaje = "Nombre inválido."
    } else if (EDAD_ENTRADA === null || Number.isNaN(EDAD) || EDAD < 0) {
        mensaje = "Edad inválida."
    } else if (EDAD < 18) {
        mensaje = `${NOMBRE}, eres menor de edad. Acceso denegado.`
    } else if (!ACEPTA) {
        mensaje = `${NOMBRE}, no aceptaste las condiciones.`
    } else {
        mensaje = `${NOMBRE}, bienvenido. Acceso autorizado.`
    }

// Mostramos el mensaje al usuario mediante un alert y lo registramos en la consola.
alert(mensaje);
console.log({nombre: NOMBRE, edad: EDAD, acepta: ACEPTA, mensaje: mensaje});