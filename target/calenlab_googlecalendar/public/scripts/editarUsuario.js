//editarUsuario.js

let formulario_editar = document.getElementById("formulario-editar");
let boton_editar = document.getElementById("boton-editar");

const enviarEdicion = () => {
    let formulario = new FormData(formulario_editar);
    for(let value of formulario.values()){
        console.log(value);
    }

    fetch("http://localhost:8080/EditarUsuario", {
        method: "PUT",
        body: formulario
    }).then(response => {
        return response.json();
    }).then(datos => {
        console.table(datos);
    })
}

boton_editar.onclick = enviarEdicion;