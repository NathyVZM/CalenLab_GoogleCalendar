//login.js

let formulario_login = document.getElementById("formulario-login");
let boton_login = document.getElementById("boton-login");


const enviarLogin = () => {
    let formulario = new FormData(formulario_login);
    for(let value of formulario.values()){
        console.log(value);
    }

    fetch("https://calenlab.herokuapp.com/LoginUsuario", {
        method: "POST",
        body: formulario
    }).then(response => {
        return response.json();
    }).then(datos => {
        console.table(datos);
        redireccionar(datos.status, datos.message);
    })
}

const redireccionar = (status, message) => {
    if(status == 200) {
        window.location.href = "https://calenlab.herokuapp.com/public/views/principal.html";
    }
    else {
        alert(message);
    }
}

boton_login.onclick = enviarLogin;