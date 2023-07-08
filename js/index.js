const inputUser = document.getElementById('inputUser');
const inputPass = document.getElementById('inputPass');
const loginButton = document.getElementById('loginButton');
const userValidationContainer = document.getElementById('passValidation');
const passValidationContainer = document.getElementById('passValidation')
let userValidate = false;
let passValidate = false;

loginButton.disabled = true;

loginButton.addEventListener('click', () => {
    let user = inputUser.textContent
    let pass = inputPass.textContent

    if (user.length > 0) {
        userValidate = true;
    } else {
        userValidationContainer.textContent = "Introduzca un usuario válido"
    }

    if (pass.length > 0) {
        passValidate = true;
    } else {
        passValidationContainer.textContent = "Introduzca una contraseña válida"
    }

    if (userValidate === true && passValidate === true) {
        loginButton.disabled = false;
    } else {
        alert('Rellene los campos correctamente')
    }
})