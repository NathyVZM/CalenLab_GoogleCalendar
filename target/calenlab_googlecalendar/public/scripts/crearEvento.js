//crearEvento.js

let formulario_evento = document.getElementById("formulario-evento");
let boton_evento = document.getElementById("boton-evento");

const crearEvento = () => {
    let form = new FormData(formulario_evento);
    for(let value of form.values()){
        console.log(value);
    }

    let fecha = document.getElementsByName("fecha")[0].value;
    let hora = document.getElementsByName("hora")[0].value;

    let evento = new Date(`${fecha}T${hora}`);
    console.log(typeof fecha);
}

boton_evento.onclick = crearEvento;