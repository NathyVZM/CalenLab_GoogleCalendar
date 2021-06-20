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

        let fecha = new Date(`${data.fecha}T${data.hora}`);
        console.log(data.fecha);
        console.log(data.hora);
        console.log(fecha.getDate());
        console.log(fecha.getHours());
        
        let caja = document.getElementById(`hora-${fecha.getHours()}-dia-${fecha.getDate()}`);

        let div = document.getElementById("eventos");

        let evento = document.createElement("div");
        evento.name = "evento";
        evento.id = data.idEvento;

        let titulo = document.createElement("p");
        titulo.id = `titulo-${data.idEvento}`;
        titulo.innerText = data.titulo;

        let imgEvento = document.createElement("img");
        imgEvento.src = "../assets/icons/eventIcon.svg";

        evento.appendChild(imgEvento);
        evento.appendChild(titulo);
        
        div.appendChild(evento);
        caja.appendChild(titulo);
    })
}

boton_evento.onclick = crearEvento;