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
        let calendario = document.createElement("div");
        calendario.setAttribute("id", datos.idCalendario);
        document.body.appendChild(calendario);

    })
}

boton_calendario.onclick = crearCalendario;