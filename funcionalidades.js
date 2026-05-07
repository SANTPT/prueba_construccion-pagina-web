

// Primera funcionalidad: Mostrar la fecha y hora actual en el header

const salidaDatos = document.getElementById("demo");

function mostrarFechaHora() {
    if (!salidaDatos) return;

    const fechaActual = new Date();
    let diaSemana = fechaActual.getDay();
    let diaDelMes = fechaActual.getDate();
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    let nombreMes = meses[fechaActual.getMonth()];
    let hora = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();
    let fechaFormateada = diaDelMes + " de " + nombreMes;
    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    let horaFormateada = hora + ":" + minutos + ":" + segundos;

    const nombresDiaSemana = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
    ];
    
    let nombreDia = nombresDiaSemana[diaSemana];
    
    salidaDatos.innerHTML = nombreDia + " " + fechaFormateada + " " + horaFormateada;
}
mostrarFechaHora();

setInterval(mostrarFechaHora, 1000);

//Segunda funcionalidad Login de acceso a la plataforma Smartboli
const caja1=document.getElementById("inpt1");
const caja2=document.getElementById("inpt2");
const boton1=document.getElementById("btn1");                

const casilla=document.getElementById("check1");

const cajaUno=document.getElementById("uno");
const cajaDos=document.getElementById("dos");
const cajaTres=document.getElementById("tres");




boton1.addEventListener("click", logueo);

function logueo(){

    let userRecogido=caja1.value;
    let claveRecogida=caja2.value;


    let userRegistrado="santi";
    let claveRegistrada=123;

    userRecogido=userRecogido.toLowerCase();
    claveRecogida=parseInt(claveRecogida);

    if(userRecogido==userRegistrado && claveRecogida==claveRegistrada && userRecogido!="" && !isNaN(claveRecogida)){

        cajaUno.classList.add("desaparecer");
        cajaUno.classList.remove("aparecer");
        cajaDos.classList.add("desaparecer");
        cajaDos.classList.remove("aparecer");
        cajaTres.classList.remove("desaparecer");
        cajaTres.classList.add("aparecer");

        const nombreCapitalizado = userRecogido.charAt(0).toUpperCase() + userRecogido.slice(1);
        const btnToggleLogin = document.getElementById("btnToggleLogin");
        if (btnToggleLogin) {
            btnToggleLogin.innerHTML = `<span class="material-symbols-outlined">person</span> ${nombreCapitalizado}`;
        }

        const navLogin = document.querySelector(".nav-login");
        if (navLogin && !document.getElementById("btnLogout")) {
            const logoutLink = document.createElement("a");
            logoutLink.id = "btnLogout";
            logoutLink.className = "btn-logout";
            logoutLink.innerHTML = "Cerrar Sesión";
            logoutLink.href = "#";
            
            logoutLink.addEventListener("click", function(e) {
                e.preventDefault();
                if (btnToggleLogin) {
                    btnToggleLogin.innerHTML = `<span class="material-symbols-outlined">person</span> Iniciar Sesión`;
                }
                logoutLink.remove();
                
                cajaUno.classList.remove("desaparecer");
                cajaUno.classList.add("aparecer");
                cajaTres.classList.add("desaparecer");
                cajaTres.classList.remove("aparecer");
                cajaDos.classList.add("desaparecer");
                cajaDos.classList.remove("aparecer");
                caja1.value = "";
                caja2.value = "";
                
                const loginSection = document.getElementById("login");
                if (loginSection) {
                    loginSection.classList.remove("aparecer");
                    loginSection.classList.add("desaparecer");
                }
            });
            
            navLogin.appendChild(logoutLink);
        }

        
    } else {

 
        cajaUno.classList.add("desaparecer");
        cajaUno.classList.remove("aparecer");
        cajaDos.classList.remove("desaparecer");
        cajaDos.classList.add("aparecer");
    }
}

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("inpt2");

if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", function() {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);

        this.textContent = type === "password" ? "visibility" : "visibility_off";
    });
}

const btnToggleLogin = document.getElementById("btnToggleLogin");
const loginSection = document.getElementById("login");
const closeModal = document.getElementById("close-modal");

if (btnToggleLogin && loginSection) {
    btnToggleLogin.addEventListener("click", function(e) {
        e.preventDefault();
        
        if (!document.getElementById("btnLogout")) { 
            cajaUno.classList.remove("desaparecer");
            cajaUno.classList.add("aparecer"); 
            cajaDos.classList.add("desaparecer");
            cajaDos.classList.remove("aparecer");
            cajaTres.classList.add("desaparecer");
            cajaTres.classList.remove("aparecer");
        }

        loginSection.classList.remove("desaparecer");
        loginSection.classList.add("aparecer");
    });
}

    const btnReintentar = document.getElementById("btnReintentar");
if (btnReintentar) {
    btnReintentar.addEventListener("click", function() {
        cajaDos.classList.add("desaparecer");
        cajaDos.classList.remove("aparecer");
        cajaUno.classList.remove("desaparecer");
        cajaUno.classList.add("aparecer");
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



function vincularPrivacidad(checkboxItem, buttonItem) {
    if (checkboxItem && buttonItem) {
        checkboxItem.addEventListener("change", (e) => {
            buttonItem.disabled = !e.target.checked;
        });
    }
}

vincularPrivacidad(casilla, boton1);


const casillaAsesoria = document.getElementById("privacidad");
const botonAsesoria = document.getElementById("btnAsesoria");
vincularPrivacidad(casillaAsesoria, botonAsesoria);

// cuarta funcionalidad:cambio de imagen mediante hover y click 
const fotoSmartboli = document.getElementById("imagen");
let imagenBase = "/images/450_1000.jpg";
let imagenAlternativa = "/images/450_1001.jpg";

if (fotoSmartboli) {
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