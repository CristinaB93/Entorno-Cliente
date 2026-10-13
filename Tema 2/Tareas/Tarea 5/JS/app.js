// Declaramos una constante, con prompt recogemos una cadena de texto.
// Se utiliza ? para comprobar si el valor es nulo o indefinido, y de esa manera no llamar a la función trim(),
// la cual daría un error ante esos dos valores.
// En caso de que el valor sea nulo o indefinido, se asigna una cadena vacía con ??, que asignará un valor por defecto.
// Si el valor no es nulo ni indefinido, se llama a la función trim() para eliminar los espacios en blanco al principio y al final de la cadena.
const nombre = prompt("Nombre:")?.trim() ?? "";
// Como prompt es una cadena de texto, hacemos el casteo con Number().
const edad = Number(prompt("Edad:"));

// Definimos la variable vacía, para asignarle valor según el if.
let etapa;
// Comprobamos si la edad es un número entero y mayor o igual a 0, para asignarle un valor a la variable etapa.
if (!Number.isInteger(edad) || edad < 0) {
    etapa = "Edad no válida";
} else if (edad <= 12) {
    etapa = "Menor";
} else if (edad <= 17) {
    etapa = "Adolescente";
} else if (edad <= 64) {
    etapa = "Adulto";
} else {
    etapa = "Jubilado";
}

// Pedimos al usuario que introduzca su situación, y la convertimos a minúsculas para evitar errores de comparación,
// porque el lenguaje es sensible a mayúsculas y minúsculas.
// Se utiliza ?? para comprobar si el valor es nulo o indefinido, y de esa manera no llamar a la función toLowerCase().
const situacion = (prompt("Situación: estudiante, parado, jubilado u otra") ?? "").toLowerCase();
// Definimos la variable vacía, para asignarle valor según el switch.
let descuento;
switch (situacion) {
    // Se utiliza break para salir del switch.
    case "estudiante": descuento = 0.20; break;
    case "parado": descuento = 0.30; break;
    // Ampliamos el ejercicio de tal forma que, si la persona es jubiladad,
    // pero además es mayor o igual a 65 años, se le aplicará un descuento del 25 %.
    // En caso contrario no se le aplicará ningún descuento aunque sea jubilado.
    case "jubilado": 
        if (edad >= 65) {
            descuento = 0.25; break;
        } else {
            descuento = 0; break;
        }
    // Se utiliza default para asignarle un valor defecto.
    default: descuento = 0;
}

// Pedimos un prompt, y, como queremos un número, casteamos el valor a Number().
const precio = Number(prompt("Precio original:"));
// Calculamos aplicando el descuento correspondiente.
const total = precio * (1 - descuento);
// Mostramos el resultado en la consola, con toFixed(2) para mostrar dos decimales, porque,
// como vimos en una tarea anterior, la suma de decimales puede dar errores de redondeo, 
// y toFixed() nos permite mostrar el número con el número de decimales que queramos.
console.log(`${nombre}: ${etapa}. Descuento: ${descuento * 100} %. Total: ${total.toFixed(2)} €`);