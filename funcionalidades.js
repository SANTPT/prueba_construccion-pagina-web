

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
//Primera funcionalidad Login de acceso a la plataforma Smartboli
const caja1=document.getElementById("inpt1");
const caja2=document.getElementById("inpt2");
const boton1=document.getElementById("btn1");                

const casilla=document.getElementById("check1");

const cajaUno=document.getElementById("uno");
const cajaDos=document.getElementById("dos");
const cajaTres=document.getElementById("tres");

const boton3=document.getElementById("btn3");

//Primera funcionalidad Login de acceso a la plataforma Smartboli

boton1.addEventListener("click", logueo);

function logueo(){

    let userRecogido=caja1.value;
    let claveRecogida=caja2.value;


    let userRegistrado="pedro";
    let claveRegistrada=246;

    userRecogido=userRecogido.toLowerCase();
    claveRecogida=parseInt(claveRecogida);

    if(userRecogido==userRegistrado && claveRecogida==claveRegistrada && userRecogido!="" && claveRecogida!=NaN){

        // alert("logueo exitoso")
        cajaUno.classList.add("desaparecer");
        cajaTres.classList.remove("desaparecer");
        cajaTres.classList.add("aparecer");

        
    } else {

        //alert("logueo rechazado")
        cajaUno.classList.add("desaparecer");
        cajaDos.classList.remove("desaparecer");
        cajaDos.classList.add("aparecer");
    }
}


const btnToggleLogin = document.getElementById("btnToggleLogin");
const loginSection = document.getElementById("login");
const closeModal = document.getElementById("close-modal");

if (btnToggleLogin && loginSection) {
    btnToggleLogin.addEventListener("click", function(e) {
        e.preventDefault();
        loginSection.classList.remove("desaparecer");
        loginSection.classList.add("aparecer");
    });
}

if (closeModal) {
    closeModal.addEventListener("click", function() {
        loginSection.classList.remove("aparecer");
        loginSection.classList.add("desaparecer");
    });
}

window.addEventListener("click", function(e) {
    if (e.target === loginSection) {
        loginSection.classList.remove("aparecer");
        loginSection.classList.add("desaparecer");
    }
});


