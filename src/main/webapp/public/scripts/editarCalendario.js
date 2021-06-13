//editarCalendario.js

let formulario_editar = document.getElementById("formulario-editar");
let boton_editar = document.getElementById("boton-editar");

const mostrarIDCalendario = () => {
    fetch("http://localhost:8080/EditarCalendario", {
        method: "GET"
    }).then(response => {
        return response.json();
    }).then(data => {
        console.table(data);

        boton_editar.onclick = () => {
            let formulario = new FormData(formulario_editar);
            formulario.append("idCalendario", data.idCalendario);
            for(let value of formulario.values()){
                console.log(value);
            }

            fetch("http://localhost:8080/EditarCalendario", {
                method: "PUT",
                body: formulario
            }).then(response => {
                return response.json();
            }).then(repuesta => {
                console.table(repuesta);
            })
        }
    })
}

window.onload = mostrarIDCalendario;

/*const enviarEdicion = () => {
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
}*/