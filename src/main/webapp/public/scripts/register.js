//register.js

let formulario_registro = document.getElementById("formulario-registro");
let boton_registro = document.getElementById("boton-registro");

const enviarRegistro = () => {
    let formulario = new FormData(formulario_registro);
    for(let value of formulario.values()){
        console.log(value);
    }

    fetch("http://localhost:8080/RegistroUsuario", {
        method: "POST",
        body: formulario
    }).then(response => {
        return response.json();
    }).then(datos => {
        console.table(datos.status);
        //redireccionar(datos.status);
    })
}

const redireccionar = (status) => {
    if(status = 200) {
        window.location.href = "http://localhost:8080";
    }
}

boton_registro.onclick = enviarRegistro;