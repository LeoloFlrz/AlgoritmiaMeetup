function verificarUsuario() {

    const usuarioGuardado = "user"
    const contrasenaGuardada = "admin";

    const usuarioIngresado = document.getElementById("inputUser").value;
    const contrasenaIngresada = document.getElementById("inputPass").value;


    if (contrasenaIngresada === contrasenaGuardada &&
         usuarioGuardado === usuarioIngresado ) {
        return true;
    } else {
        return false;
    }
}

const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function () {
    if (verificarUsuario()) {
        alert("Usuario válido");
        window.location.href="scndView.html"
    } else {
        alert("Usuario inválido");
    }   
});