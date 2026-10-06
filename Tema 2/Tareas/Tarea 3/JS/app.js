        const NOMBRE_ENTRADA = prompt("Introduce tu nombre:");
        const NOMBRE = NOMBRE_ENTRADA === null ? "" : NOMBRE_ENTRADA.trim();
        const EDAD_ENTRADA = prompt("Introduce tu edad:");
        const EDAD = Number(EDAD_ENTRADA);
        const ACEPTA = confirm("¿Aceptas las condiciones?");

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

        alert(mensaje);
        console.log({nombre: NOMBRE, edad: EDAD, acepta: ACEPTA, mensaje: mensaje});