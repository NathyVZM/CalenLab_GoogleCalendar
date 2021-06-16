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

    fetch("http://localhost:8080/CrearCalendario", {
        method: "POST",
        body: formulario
    }).then(response => {
        return response.json();
    }).then(datos => {
        console.table(datos);

        let div = document.getElementById("contenedor-calendarios");
        let contenedor = document.createElement("div");
        let calendario = document.createElement("input");
        let label = document.createElement("label");
        let boton = document.createElement("span");
        let editar = document.createElement("span");

        let imgBorrar = document.createElement("img");
        imgBorrar.src = "../assets/icons/deleteIcon.svg";
        let imgEditar = document.createElement("img");
        imgEditar.src = "../assets/icons/editIcon.svg";

        calendario.type = "radio";
        calendario.name = "calendario";
        calendario.id = datos.idCalendario;
        calendario.value = datos.idCalendario;
        calendario.onchange = (e) => {
            let form = new FormData()
            form.append("idCalendario", e.target.id);
            for (let value of form.values()) {
                console.log(value);
            }

            fetch("http://localhost:8080/Eventos", {
                method: "POST",
                body: form
            }).then(response => {
                return response.json();
            }).then(lista => {
                console.table(lista);

                let contenedor_eventos = document.getElementById("eventos");
                contenedor_eventos.innerHTML = "";

                for (let j = 0; j < lista.idEvento.length; j++) {
                    let fechaDate = new Date(`${lista.fecha[j]}T${lista.hora[j]}`);

                    let caja = document.getElementById(`hora-${fechaDate.getHours()}-dia-${fechaDate.getDate()}`);
                    let evento = document.createElement("div");
                    evento.name = "evento";
                    evento.id = lista.idEvento[j];
                    evento.style.backgroundColor = datos.color[i];

                    let titulo = document.createElement("p");
                    titulo.id = `titulo-${lista.idEvento[j]}`;
                    titulo.innerText = lista.titulo[j];

                    let spanEvento = document.createElement("span");
                    let imgEvento = document.createElement("img");

                    imgEvento.src = "../assets/icons/eventIcon.svg";
                    imgEvento.width = "20";
                    spanEvento.appendChild(imgEvento);

                    evento.appendChild(spanEvento);
                    evento.appendChild(titulo);
                    caja.appendChild(evento);
                    contenedor_eventos.appendChild(evento);
                }
            })
        };

        label.innerText = datos.titulo;
        label.htmlFor = datos.idCalendario;

        boton.appendChild(imgBorrar);
        boton.id = `eliminar-${datos.idCalendario}`;
        boton.addEventListener("click", (e) => {
            console.log(e.target.id)
            console.log(datos.titulo);

            let form = new FormData();
            form.append("idCalendario", datos.idCalendario);
            for (let value of form.values()) {
                console.log(value);
            }

            fetch("http://localhost:8080/EliminarCalendario", {
                method: "DELETE",
                body: form
            }).then(response => {
                return response.json();
            }).then(data => {
                console.table(data);
                editar.remove();
                boton.remove();
                label.remove();
                calendario.remove();
            })

        })

        editar.appendChild(imgEditar);
        editar.id = `editar-${datos.idCalendario}`;
        editar.onclick = () => {
            let form = new FormData();
            form.append("idCalendario", datos.idCalendario);

            fetch("http://localhost:8080/EditarCalendario", {
                method: "POST",
                body: form
            }).then(response => {
                return response.json();
            }).then(respuesta => {
                console.table(respuesta);

                if (respuesta.status == 200) {
                    window.location.href = "http://localhost:8080/public/views/editarCalendario.html";
                }
            });
        }

        contenedor.appendChild(calendario);
        contenedor.appendChild(label);
        contenedor.appendChild(boton);
        contenedor.appendChild(editar);
        div.appendChild(contenedor);

        let select = document.getElementById("seleccion-calendario");
        let opcion = document.createElement("option");
        opcion.value = datos.idCalendario;
        opcion.innerText = datos.titulo;
        opcion.id = datos.idCalendario;

        select.appendChild(opcion);
    })
}

boton_calendario.onclick = crearCalendario;