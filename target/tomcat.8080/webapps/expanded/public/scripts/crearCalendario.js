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
        /*let calendario = document.createElement("div");
        calendario.setAttribute("id", datos.idCalendario);
        document.body.appendChild(calendario);*/

        let div = document.createElement("div");
        let calendario = document.createElement("input");
        let label = document.createElement("label");
        calendario.type = "radio";
        calendario.name = "calendario";
        calendario.id = datos.titulo;
        calendario.value = datos.idCalendario;

        label.innerText = datos.titulo;
        label.htmlFor = datos.titulo;

        div.appendChild(calendario);
        div.appendChild(label);
        document.body.appendChild(div);

    })
}

boton_calendario.onclick = crearCalendario;