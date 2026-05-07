

// Mostras la fecha y hora actual en el header

const salidaDatos = document.getElementById("demo");

function mostrarFechaHora() {
    if (!salidaDatos) return;

    const fechaActual = new Date();
    let diaSemana = fechaActual.getDay();
    let hora = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();
    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    let horaFormateada = hora + ":" + minutos + ":" + segundos;

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

setInterval(mostrarFechaHora, 1000);
//Primera funcionalidad Login de acceso a la plataforma Smartboli
const caja1=document.getElementById("inpt1");
const caja2=document.getElementById("inpt2");
const boton1=document.getElementById("btn1");                

const casilla=document.getElementById("check1");

const cajaUno=document.getElementById("uno");
const cajaDos=document.getElementById("dos");
const cajaTres=document.getElementById("tres");



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


// Deshabilitar el boton de inicio de sesion hasta que se acepte la politica de privacidad

function vincularPrivacidad(checkboxItem, buttonItem) {
    if (checkboxItem && buttonItem) {
        checkboxItem.addEventListener("change", (e) => {
            buttonItem.disabled = !e.target.checked;
        });
    }
}

// Uso 1: Inicio de sesión (asumiendo que 'casilla' y 'boton1' ya están definidos)
vincularPrivacidad(casilla, boton1);

// Uso 2: Asesoría
const casillaAsesoria = document.getElementById("privacidad");
const botonAsesoria = document.getElementById("btnAsesoria");
vincularPrivacidad(casillaAsesoria, botonAsesoria);

// Funcionalidad de intercambio de imagen (Hover continuo + Click para fijar)
const fotoSmartboli = document.getElementById("imagen");
let imagenBase = "/images/450_1000.jpg";
let imagenAlternativa = "/images/450_1001.jpg";

if (fotoSmartboli) {
    // Siempre cambia al entrar
    fotoSmartboli.addEventListener("mouseover", () => {
        fotoSmartboli.setAttribute("src", imagenAlternativa);
    });

    fotoSmartboli.addEventListener("mouseout", () => {
        fotoSmartboli.setAttribute("src", imagenBase);
    });

    fotoSmartboli.addEventListener("click", () => {
        let temporal = imagenBase;
        imagenBase = imagenAlternativa;
        imagenAlternativa = temporal;
    });
}