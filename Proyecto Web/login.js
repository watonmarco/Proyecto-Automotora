document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const errorMsg = document.getElementById("error");

    // Si ya hay sesión, redirige al inicio
    if (sessionStorage.getItem("usuario")) {
        window.location.href = "index.html";
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const usuario = document.getElementById("usuario").value.trim();
        const password = document.getElementById("password").value.trim();

        // Credenciales de prueba
        if (usuario === "admin" && password === "1234") {
            sessionStorage.setItem("usuario", usuario);
            window.location.href = "index.html";
        } else {
            errorMsg.textContent = "Usuario o contraseña incorrectos";
        }
    });
});

