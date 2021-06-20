//editarUsuario.js

let formulario_editar = document.getElementById("formulario-editar");
let boton_editar = document.getElementById("boton-editar");

const recibirNomUsuario = () => {
    fetch("https://calenlab.herokuapp.com/EditarUsuario", {
        method: "GET"
    }).then (response => {
        return response.json();
    }).then (datoUsuario => {
        console.log(datoUsuario);
        
        let nomUsuario = document.getElementById("nomUsuario");
        nomUsuario.innerHTML = datoUsuario.nomUsuario;
    })
}

const enviarEdicion = () => {
    let formulario = new FormData(formulario_editar);
    for(let value of formulario.values()){
        console.log(value);
    }

    fetch("https://calenlab.herokuapp.com/EditarUsuario", {
        method: "PUT",
        body: formulario
    }).then(response => {
        return response.json();
    }).then(datos => {
        console.table(datos);
        if(datos.status == 200){
            window.location.href = "https://calenlab.herokuapp.com/public/views/principal.html";
        }
    })
}

boton_editar.onclick = enviarEdicion;
window.onload = recibirNomUsuario;