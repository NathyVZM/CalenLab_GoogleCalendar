//crearEvento.js

let formulario_evento = document.getElementById("formulario-evento");
let boton_evento = document.getElementById("boton-evento");

const crearEvento = () => {
    let form = new FormData(formulario_evento);
    for(let value of form.values()){
        console.log(value);
    }

    let color = document.getElementsByName("color2")[0].value;
    console.log(typeof color);
}

boton_evento.onclick = crearEvento;