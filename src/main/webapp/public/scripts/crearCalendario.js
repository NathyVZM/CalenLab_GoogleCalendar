//crearCalendario.js

let formulario_calendario = document.getElementById("formulario-calendario");
let boton_calendario = document.getElementById("boton-calendario");

const crearCalendario = () => {
    let formulario = new FormData(formulario_calendario);
    
    for(let value of formulario.values()){
        console.log(value);
    }

    fetch("http://localhost:8080/CrearCalendario", {
        method: "POST",
        body: formulario
    }).then(response => {
        return response.json();
    }).then(datos => {
        console.table(datos);

        let div = document.getElementById("contenedor-calendarios");
        let calendario = document.createElement("input");
        let label = document.createElement("label");
        let boton = document.createElement(`eliminar-${datos.idCalendario}`);

        calendario.type = "radio";
        calendario.name = "calendario";
        calendario.id = datos.titulo;
        calendario.value = datos.idCalendario;

        label.innerText = datos.titulo;
        label.htmlFor = datos.titulo;

        div.appendChild(calendario);
        div.appendChild(label);
        div.appendChild(boton);
        document.body.appendChild(div);
    })
}

boton_calendario.onclick = crearCalendario;