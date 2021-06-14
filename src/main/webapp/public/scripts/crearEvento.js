//crearEvento.js

let formulario_evento = document.getElementById("formulario-evento");
let boton_evento = document.getElementById("boton-evento");

const crearEvento = () => {
    let form = new FormData(formulario_evento);
    for(let value of form.values()){
        console.log(value);
    }

    fetch("http://localhost:8080/CrearEvento", {
        method: "POST",
        body: form
    }).then(response => {
        return response.json();
    }).then(data => {
        console.table(data);
    })
}

boton_evento.onclick = crearEvento;