function cambiarMensaje() {
    document.getElementById("titulo").textContent =
        "¡¡¡OFERTA POR TIEMPO LIMITADO!!!"
    document.getElementById("texto").textContent =
        "El hotel Playa Marina ha bajado sus precios un 50% para la semana del 28/09 al 04/10. Aprovecha esta increíble oferta para hacer una pequeña escapada a la playa antes de que llegue el invierno."
}

function cambiarAlojamiento() {
    const foto = document.getElementById("imagen");
    const habitacion1 = "https://images.pexels.com/photos/37658584/pexels-photo-37658584.jpeg";
    const habitacion2 = "https://images.pexels.com/photos/34909685/pexels-photo-34909685.jpeg";
    const habitacionInicial = foto.getAttribute("src") === habitacion1;
    if (habitacionInicial) {
        foto.setAttribute("src", habitacion2);
        foto.setAttribute("alt", "Habitación doble de una cama hotel urbano");
        document.getElementById("descripcion").textContent =
            "Habitación deoble de una sola cama en Hotel Urban BCN.";
            document.getElementById("descripcion2").textContent =
            "Situado en el corazón de la capital catalana, el Hotel Urban Barcelona destaca por su diseño vanguardista de estética industrial, combinando estructuras metálicas, acabados en hormigón visto y detalles de iluminación cálida. Su concepto moderno e innovador lo convierte en el refugio perfecto para viajeros cosmopolitas y nómadas digitales que buscan una estancia sofisticada con personalidad propia, ofreciendo habitaciones completamente equipadas, espacios de trabajo tipo coworking y un ambiente dinámico a un paso de los principales ejes culturales y de ocio de la ciudad."
            document.getElementById("precio").textContent =
            "Desde 97€/noche."
    } else {
        foto.setAttribute("src", habitacion1);
        foto.setAttribute("alt", "Habitación doble azul");
        document.getElementById("descripcion").textContent =
            "Habitación doble, camas twins, en Hotel Playa Marina.";
        document.getElementById("descripcion2").textContent =
            "Ubicado a pocos pasos del litoral barcelonés, el Hotel Playa Marina es un acogedor alojamiento de estilo mediterráneo y fresco que combina el ambiente relajado de la costa con la comodidad de estar perfectamente conectado con el centro de la ciudad. Sus estancias luminosas y de tonos marinos ofrecen el espacio ideal para descansar, contando con habitaciones confortables, equipadas con Wi-Fi y aire acondicionado, pensadas tanto para escapadas en pareja como para viajes de negocios que buscan disfrutar del mar sin renunciar a la oferta cultural de Barcelona."
            document.getElementById("precio").textContent =
            "Desde 51€/noche."
    }
}

function cambiarEstilo() {
    const cancelacion = document.getElementById("cancelacion");
    if (cancelacion.classList.contains("estilo-alternativo")) {
        cancelacion.classList.remove("estilo-alternativo");
    } else {
        cancelacion.classList.add("estilo-alternativo");
    }
}

function mensajeConsola() {
    console.log("La consulta del usuario ha sido registrada correctamente.");
}

function mensajeUsuario() {
    document.getElementById("estado-consulta").textContent =
    "La consulta realizada se encuentra en revisión."
}

function mensajePreparar() {
    document.getElementById("alojamiento").textContent =
    "Ha elegido el Hotel Playa Marina."
    document.getElementById("estado").textContent =
    "Estado de la reserva: Pendiente."
}

function mensajeConfirmar() {
    boton = document.getElementById("b4");
    alert("Reserva realizada con éxito.");
    document.getElementById("estado").textContent = 
    "Estado de la reserva: Confirmada."
    boton.disabled = true;
}