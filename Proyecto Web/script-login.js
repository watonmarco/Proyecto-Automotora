// selección del formulario de inicio de sesión
const formLogin = document.querySelector("#formulario-login");

// al enviar el formulario de inicio de sesión
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    // se obtienen los datos del formulario
    const datos = Object.fromEntries(new FormData(event.target).entries());
    const { usuario, contrasena } = datos;

    // si el usuario y la contraseña son "admin"
    if (usuario === "admin" && contrasena === "admin") {
        // se guarda en localStorage que lo es
        localStorage.setItem("tema", "admin");
        localStorage.setItem("sesionIniciada", "true");

        // se aplican los colores correspondientes
        document.body.classList.add("tema-admin");

        // se redirige al dashboard
        window.location.href = "dashboard.html";
    }
});