function verificarContrasena() {

    var contrasenaGuardada = "admin";
    var contrasenaIngresada = document.getElementById("inputPass").value;

    if (contrasenaIngresada === contrasenaGuardada) {
        return true;
    } else {
        return false;
    }
}

var loginButton = document.getElementById("loginButton");

var loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function () {
    if (verificarContrasena()) {
        alert("Contraseña válida");
    } else {
        alert("Contraseña inválida");
    }   
});