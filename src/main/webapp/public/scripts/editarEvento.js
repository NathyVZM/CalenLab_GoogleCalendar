//editarEvento.js

let formulario_editar = document.getElementById("formulario-editar");
let boton_editar = document.getElementById("boton-editar");

const mostrarIDEvento = () => {
    fetch("https://calenlab.herokuapp.com/EditarEvento", {
        method: "GET"
    }).then(response => {
        return response.json();
    }).then(data => {
        console.table(data);

        boton_editar.onclick = () => {
            let form = new FormData(formulario_editar);
            form.append("idEvento", data.idEvento);

            fetch("https://calenlab.herokuapp.com/EditarEvento", {
                method: "PUT",
                body: form
            }).then(response => {
                return response.json();
            }).then(respuesta => {
                console.table(respuesta);

                if (respuesta.status == 200) {
                    window.location.href = "https://calenlab.herokuapp.com/public/views/principal.html";
                }
            })
        }
    })
}

window.onload = mostrarIDEvento;