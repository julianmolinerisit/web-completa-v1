const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const usernameError = document.querySelector("#usernameError");
const passwordError = document.querySelector("#passwordError");
const emailError = document.querySelector("#emailError");

form.addEventListener("submit", function(event) {
event.preventDefault();
let hasErrors = false;

if (!username.value) {
usernameError.innerHTML = "El nombre de usuario es requerido";
hasErrors = true;
} else {
usernameError.innerHTML = "";
}

if (!password.value) {
passwordError.innerHTML = "La contraseña es requerida";
hasErrors = true;
} else {
passwordError.innerHTML = "";
}

if (!email.value) {
emailError.innerHTML = "El correo electrónico es requerido";
hasErrors = true;
} else {
emailError.innerHTML = "";
}

if (!hasErrors) {
// Aquí puedes almacenar la información del formulario
localStorage.setItem("user", JSON.stringify({
username: username.value,
password: password.value,
email: email.value
}));
window.location.href = "cv-ediy.html";
}
});