// si el usuario es admin, se aplican los colores correspondientes
window.addEventListener("DOMContentLoaded", () => {
    const botonSesion = document.querySelector("#boton-sesion");
    const tema = localStorage.getItem("tema");
    const sesionIniciada = localStorage.getItem("sesionIniciada");

    // se verifica si el tema guardado es "admin"
    if (tema === "admin") {
        document.body.classList.add("tema-admin");
    }

    // se actualiza el texto y la funcionalidad del botón de sesión
    if (botonSesion) {
        // se verifica si la sesión está iniciada
        if (sesionIniciada === "true") {
            botonSesion.textContent = "Cerrar Sesión";
            botonSesion.href = "login.html";
        } else {
            botonSesion.textContent = "Iniciar Sesión";
            botonSesion.href = "login.html";
        }

        // al hacer clic en el botón de sesión
        botonSesion.addEventListener("click", () => {
            if (sesionIniciada === "true") {
                // Cerrar sesión
                localStorage.removeItem("tema");
                localStorage.removeItem("sesionIniciada");
            }
        });
    }  
});