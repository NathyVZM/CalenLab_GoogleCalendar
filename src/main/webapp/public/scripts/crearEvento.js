//crearEvento.js

let formulario_evento = document.getElementById("formulario-evento");
let boton_evento = document.getElementById("boton-evento");

const crearEvento = () => {
    let form = new FormData(formulario_evento);
    for(let value of form.values()){
        console.log(value);
    }

    fetch("https://calenlab.herokuapp.com/CrearEvento", {
        method: "POST",
        body: form
    }).then(response => {
        return response.json();
    }).then(data => {
        console.table(data);

        if(data.status == 200) {
            window.location.href = "https://calenlab.herokuapp.com/public/views/principal.html";
        }
    })
}

boton_evento.onclick = crearEvento;