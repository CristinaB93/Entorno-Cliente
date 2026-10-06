// Declaramos un bucle do while para que el usuario pueda realizar varias operaciones sin tener que recargar la página.
// El bucle se ejecutará al menos una vez y seguirá ejecutándose mientras el usuario confirme que desea realizar otra operación.
do {
    // Declaramos una constante para almacenar el resultado de la operación.
    // Declaramos una constante para almacenar el resultado de la operación.
    // Como prompt devuelve un string, convertimos el valor a número usando Number().
    const numero1 = Number(prompt("Primer número:"));
    const operador = prompt("Operador (+, -, *, /, %, **):");
    // Hacemos lo mismo con el segundo número, casteando el String a un número con Number().
    const numero2 = Number(prompt("Segundo número:"));

    // Definimos una variable vacía, que usaremos para almacenar el resultado según el case.
    let resultado;
    // Comprobamos que ambas variables contienen números. Si es falso, mostramos un mensaje de error. 
    // Si es verdadero, hacemos un switch para comprobar el operador y realizar la operación correspondiente.
    if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
        resultado = "Los operandos deben ser numéricos";
    } else {
        switch (operador) {
            // Comprobamos el operador y realizamos la operación.
            // Usamos break para salir del switch una vez que se ha ejecutado la operación correspondiente.
            // De no usar break, el switch seguiría ejecutando los siguientes case hasta encontrar un break o llegar al final del switch.
            case "+": resultado = numero1 + numero2; break;
            case "-": resultado = numero1 - numero2; break;
            case "*": resultado = numero1 * numero2; break;
            // Se utiliza un operador ternario para comprobar si el segundo número es distinto de cero antes de realizar la división o el módulo.
            // Porque si el segundo número es cero, se mostraría un mensaje de error.
            case "/": resultado = numero2 !== 0 ? numero1 / numero2 : "No se puede dividir entre cero"; break;
            case "%": resultado = numero2 !== 0 ? numero1 % numero2 : "No se puede calcular módulo entre cero"; break;
            case "**": resultado = numero1 ** numero2; break;
            // En caso de que el operador no sea ninguno de los anteriores, mostramos un mensaje de error.
            default: resultado = "Operador no válido";
        }
    }
    // Con alert, sacamos un popup con el resultado.
    alert("Resultado: " + resultado);
// Confirm devuelve un booleano, true si el usuario pulsa Aceptar y false si pulsa Cancelar.
// Si el usuario pulsa Aceptar, el bucle se ejecutará de nuevo, si pulsa Cancelar, el bucle terminará.
} while (confirm("¿Deseas realizar otra operación?"));
