const boton=document.getElementById('btn-sobre-mi');
const textoSecreto = document.getElementById('info-sobre-mi');
boton.addEventListener('click', () => {
    // Esta línea es la que cambia el CSS de "oculto" a "visible"
    textoSecreto.style.display = 'block';
});
// Escucha cuando el mouse se mueve en toda la página
document.addEventListener("mousemove", (e) => {

    // Seleccionamos el div que contiene la sombra
    const shadow = document.getElementById("cursor-shadow");

    // Guardamos la posición del mouse
    const x = e.clientX;   // posición horizontal
    const y = e.clientY;   // posición vertical

    // Cambiamos el gradiente para que el centro esté donde está el mouse
    shadow.style.background = `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(255, 255, 255, 0.10),
            rgba(0, 0, 0, 0.80) 5%
        )
    `;
});

//logica de mostrar boton o no segun lo clickeado 


const btnSobreMi = document.getElementById("btn-sobre-mi");
const btnProyectos = document.getElementById("btn-proyectos");
const btnContacto = document.getElementById("btn-contacto");
const btnExperiencia = document.getElementById("btn-experiencia");


const sectionSobreMi = document.getElementById("sobre-mi");
const sectionProyectos = document.getElementById("proyectos");
const sectionContacto = document.getElementById("contacto");
const sectionExperiencia = document.getElementById("experiencia");

function ocultarTodo() {
    sectionSobreMi.style.display = "none";
    sectionProyectos.style.display = "none";
    sectionContacto.style.display = "none";
    sectionExperiencia.style.display = "none";
}

// Mostrar solo la sección indicada
function mostrar(seccion) {
    ocultarTodo();
    seccion.style.display = "block";
}

// Eventos
btnSobreMi.addEventListener("click", () => {
    mostrar(sectionSobreMi);
    activarBoton(btnSobreMi);
});

btnProyectos.addEventListener("click", () => {
    mostrar(sectionProyectos);
    activarBoton(btnProyectos);
});

btnContacto.addEventListener("click", () => {
    mostrar(sectionContacto);
    activarBoton(btnContacto);
});

btnExperiencia.addEventListener("click", () => {
    mostrar(sectionExperiencia);
    activarBoton(btnExperiencia);
});


const botonesMenu = document.querySelectorAll(".menu-item");

function activarBoton(botonActivo) {
    botonesMenu.forEach(boton => {
        boton.classList.remove("active");
    });

    botonActivo.classList.add("active");
}
// Inicializar mostrando "Sobre mí"
activarBoton(btnSobreMi);
mostrar(sectionSobreMi);
