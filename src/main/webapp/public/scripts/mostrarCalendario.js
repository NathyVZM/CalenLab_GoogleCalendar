//mostrarCalendario

const mostrarCalendarios = () => {
    fetch("http://localhost:8080/Calendarios", {
        method: "GET"
    }).then(response => {
        return response.json();
    }).then(datos => {
        console.table(datos);

        let div = document.getElementById("contenedor-calendarios");

        for (let i = 0; i < datos.idCalendario.length; i++) {
            let contenedor = document.createElement("div");
            let calendario = document.createElement("input");
            let label = document.createElement("label");
            let boton = document.createElement("span");
            let editar = document.createElement("span");

            let imgBorrar = document.createElement("img");
            let imgEditar = document.createElement("img");

            calendario.type = "radio";
            calendario.name = "calendario";
            calendario.id = datos.idCalendario[i];
            calendario.value = datos.idCalendario[i];
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

                    for(let j = 0; j < lista.idEvento.length; j++){
                        let fechaDate = new Date(`${lista.fecha[j]}T${lista.hora[j]}`);

                        let caja = document.getElementById(`hora-${fechaDate.getHours()}-dia-${fechaDate.getDate()}`);
                        let evento = document.createElement("div");
                        evento.name = "evento";
                        evento.id = lista.idEvento[j];
                        evento.style.backgroundColor = datos.color[i];
                        /*evento.onclick = () => {
                            let evento_div = document.createElement("div");
                            evento_div.id = `evento-${lista.idEvento[j]}`;

                            let titulo_evento = document.createElement("h3");
                            titulo_evento.innerText = lista.titulo[j];

                            let fecha = document.createElement("p");
                            fecha.innerText = lista.fecha[j];

                            let hora = document.createElement("p");
                            hora.innerText = lista.hora[j];

                            let descripcion = document.createElement("p");
                            descripcion.innerText = lista.descripcion[j];

                            evento_div.appendChild(titulo_evento)
                            evento_div.appendChild(fecha);
                            evento_div.appendChild(hora)
                            evento_div.appendChild(descripcion)

                            evento.appendChild(evento_div);
                        }*/

                        let titulo = document.createElement("p");
                        titulo.id = `titulo-${lista.idEvento[j]}`;
                        titulo.innerText = lista.titulo[j];

                        let spanEvento = document.createElement("span");
                        let imgEvento = document.createElement("img");

                        imgEvento.src = "../assets/icons/close2.svg";
                        spanEvento.appendChild(imgEvento);

                        evento.appendChild(spanEvento);
                        evento.appendChild(titulo);
                        caja.appendChild(evento);
                        contenedor_eventos.appendChild(evento);
                    }
                })
            };

            label.innerText = datos.titulo[i];
            label.htmlFor = datos.idCalendario[i];

            imgBorrar.src = "../assets/icons/close2.svg";
            imgEditar.src = "../assets/icons/close2.svg";

            boton.appendChild(imgBorrar);
            boton.id = `eliminar-${datos.idCalendario[i]}`;
            boton.addEventListener("click", (e) => {
                console.log(e.target.id)
                console.log(datos.titulo[i]);

                let form = new FormData();
                form.append("idCalendario", datos.idCalendario[i]);
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
                    document.getElementById(`opcion${datos.idCalendario[i]}`).remove();
                })

            })


            editar.appendChild(imgEditar);
            editar.id = `editar-${datos.idCalendario[i]}`;
            editar.onclick = () => {
                let form = new FormData();
                form.append("idCalendario", datos.idCalendario[i]);

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
        }

        document.body.appendChild(div);

        let select = document.getElementById("seleccion-calendario");

        for (let i = 0; i < datos.idCalendario.length; i++) {
            let opcion = document.createElement("option");
            opcion.value = datos.idCalendario[i];
            opcion.innerText = datos.titulo[i];
            opcion.id = `opcion-${datos.idCalendario[i]}`;

            select.appendChild(opcion);
        }
    })
}

window.onload = mostrarCalendarios;