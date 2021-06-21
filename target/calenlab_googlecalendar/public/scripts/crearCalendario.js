//crearCalendario.js

let botoncrearCalendario = document.getElementById("crearCalendario");
botoncrearCalendario.onclick = () => {
    let cajaFormularioCalendario = document.getElementById("cajaFormularioCalendario");
    cajaFormularioCalendario.style.display = "flex";
    cajaFormularioCalendario.style.width = "30%";
    cajaFormularioCalendario.style.height = "70%"
}

let cerrar = document.getElementsByClassName("cerrar");
for (let i = 0; i < cerrar.length; i++) {
    cerrar[i].onclick = () => {
        let cajaFormularioCalendario = document.getElementById("cajaFormularioCalendario");
        cajaFormularioCalendario.style.display = "none";

        let cajaFormularioEvento = document.getElementById("cajaFormularioEvento");
        cajaFormularioEvento.style.display = "none";
    }
}

let botoncrearevento = document.getElementById("crearEvento");
botoncrearevento.onclick = () => {
    let cajaFormularioEvento = document.getElementById("cajaFormularioEvento");
    cajaFormularioEvento.style.display = "flex";
    cajaFormularioEvento.style.width = "30%";
    cajaFormularioEvento.style.height = "95%"
}


let formulario_calendario = document.getElementById("formulario-calendario");
let boton_calendario = document.getElementById("boton-calendario");

const crearCalendario = () => {
    let formulario = new FormData(formulario_calendario);

    for (let value of formulario.values()) {
        console.log(value);
    }

    fetch("https://calenlab.herokuapp.com/CrearCalendario", {
        method: "POST",
        body: formulario
    }).then(response => {
        return response.json();
    }).then(datos => {
        console.table(datos);

        if(datos.status == 200){
            window.location.href = "https://calenlab.herokuapp.com/public/views/principal.html";
        }
    })
}

boton_calendario.onclick = crearCalendario;