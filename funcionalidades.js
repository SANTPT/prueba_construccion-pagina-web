

// Mostras la fecha y hora actual en el header

const salidaDatos = document.getElementById("demo");

function mostrarFechaHora() {
    if (!salidaDatos) return;

    const fechaActual = new Date();
    let diaSemana = fechaActual.getDay();
    let hora = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    let horaFormateada = hora + ":" + minutos;

    const castellano = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
    ];

    let nombreDia = castellano[diaSemana];

    salidaDatos.innerHTML = nombreDia + " " + horaFormateada;
}
mostrarFechaHora();

setInterval(mostrarFechaHora, 60000);