// Selección de elementos
const nombre = document.getElementById("nombre");
const password = document.getElementById("password");
const mail = document.getElementById("mail");
const formulario = document.getElementById("formulario");

// Función para validar el nombre
function validarNombre() {
    let entrada = nombre.value.trim(); // trim() para eliminar espacios en blanco al inicio y final
    if (entrada.length === 0) {
        document.getElementById("errorNombre").textContent = "El nombre de usuario no puede estar vacío.";
        return false;
    } else {
        document.getElementById("errorNombre").textContent = "";
        return true;
    }
}

// Función para validar la contraseña
function validarPassword() {
    let entrada = password.value;
    if (entrada.length < 8) {
        document.getElementById("errorPassword").textContent = "La contraseña debe tener mínimo 8 caracteres.";
        return false;
    } else {
        document.getElementById("errorPassword").textContent = "";
        return true;
    }
}

// Función para validar el correo electrónico
function validarMail() {
    let entrada = mail.value.trim();
    let expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!expresionRegular.test(entrada)) {
        document.getElementById("errorMail").textContent = "El correo electrónico no es válido.";
        return false;
    } else {
        document.getElementById("errorMail").textContent = "";
        return true;
    }
}

// Función para validar todo el formulario antes de enviarlo
function validarFormulario(event) {
    var nombreValido = validarNombre();
    var passwordValido = validarPassword();
    var mailValido = validarMail();

    if (!nombreValido || !passwordValido || !mailValido) {
        event.preventDefault(); // Evita que el formulario se envíe
    }
}

// Añadir eventos de entrada para validación en tiempo real
nombre.addEventListener("input", validarNombre);
password.addEventListener("input", validarPassword);
mail.addEventListener("input", validarMail);

// Añadir evento de submit para validar antes de enviar
formulario.addEventListener("submit", validarFormulario);