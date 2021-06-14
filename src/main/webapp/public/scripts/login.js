//login.js

let formulario_login = document.getElementById("formulario-login");
let boton_login = document.getElementById("boton-login");


const enviarLogin = () => {
    let formulario = new FormData(formulario_login);
    for(let value of formulario.values()){
        console.log(value);
    }

    fetch("http://localhost:8080/LoginUsuario", {
        method: "POST",
        body: formulario
    }).then(response => {
        return response.json();
    }).then(datos => {
        console.table(datos);
        redireccionar(datos.status);
    })
}

const redireccionar = (status) => {
    if(status == 200) {
        window.location.href = "http://localhost:8080/public/views/principal.html";
    }
}

boton_login.onclick = enviarLogin;