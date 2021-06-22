//mostrarCalendario

const mostrarCalendarios = () => {
    fetch("https://calenlab.herokuapp.com/Calendarios", {
        method: "GET"
    }).then(response => {
        return response.json();
    }).then(datos => {
        console.table(datos);
        let nomUsuario = document.getElementById("nomUsuario");
        nomUsuario.innerHTML = datos.nomUsuario;

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
            calendario.onclick = (e) => {
                let form = new FormData()
                form.append("idCalendario", e.target.id);
                for (let value of form.values()) {
                    console.log(value);
                }

                let tbody = document.getElementsByTagName("tbody")[0];
                //let tr = tbody.getElementsByTagName("tr");

                for(let j = 0; j < 24; j++){
                    let tr = document.getElementById(`hora-${i}`);
                    let td = tr.getElementsByTagName("td");

                    for(let x = 1; x < 8; x++){
                        td[x].innerHTML = "";
                    }
                }

                /*for(let i = 0; i < td.length; i++){
                    if(td[i].innerHTML != i){
                        td[i].innerHTML = "";
                    }                
                }*/

                fetch("https://calenlab.herokuapp.com/Eventos", {
                    method: "POST",
                    body: form
                }).then(response => {
                    return response.json();
                }).then(lista => {
                    console.table(lista);

                    for (let j = 0; j < lista.idEvento.length; j++) {
                        console.log(lista.titulo[j]);
                        let fechaDate = new Date(`${lista.fecha[j]}T${lista.hora[j]}`);

                        let caja = document.getElementById(`hora-${fechaDate.getHours()}-dia-${fechaDate.getDate()}`);

                        if (caja != null) {
                            console.log(fechaDate.getHours());
                            console.log(fechaDate.getDate());
                            console.log(caja.id);

                            let titulo = document.createElement("p");
                            titulo.id = lista.idEvento[j];
                            titulo.innerText = lista.titulo[j];
                            titulo.style.color = datos.color[i];
                            console.log(titulo.id);
                            console.log(titulo.innerText);

                            let imgEventoEditar = document.createElement("img");
                            //imgEventoEditar.style.width = "15px";
                            //imgEventoEditar.style.float = "right";
                            imgEventoEditar.src = "../assets/icons/editIcon.svg";
                            imgEventoEditar.title = "Editar Evento";

                            let imgEventoBorrar = document.createElement("img");
                            //imgEventoBorrar.style.width = " 15px";
                            //imgEventoBorrar.style.float = "right";
                            imgEventoBorrar.src = "../assets/icons/deleteIcon.svg";
                            imgEventoBorrar.title = "Borrar Evento";

                            caja.appendChild(titulo);
                            caja.appendChild(imgEventoEditar);
                            caja.appendChild(imgEventoBorrar);

                            imgEventoBorrar.onclick = () => {
                                let formEvento = new FormData();
                                formEvento.append("idEvento", lista.idEvento[j]);

                                fetch("https://calenlab.herokuapp.com/EliminarEvento", {
                                    method: "DELETE",
                                    body: formEvento
                                }).then(response => {
                                    return response.json();
                                }).then(respuesta => {
                                    console.table(respuesta);

                                    if(respuesta.status == 200){
                                        titulo.remove();
                                        imgEventoEditar.remove();
                                        imgEventoBorrar.remove();
                                        alert(respuesta.message);
                                    }
                                })
                            }

                            imgEventoEditar.onclick = () => {
                                let formIdEvento = new FormData();
                                formIdEvento.append("idEvento", lista.idEvento[j]);

                                fetch("https://calenlab.herokuapp.com/EditarEvento",  {
                                    method: "POST",
                                    body: formIdEvento
                                }).then(response => {
                                    return response.json();
                                }).then (datoIdEvento => {
                                    console.table(datoIdEvento);

                                    if(datoIdEvento.status == 200){
                                        window.location.href = "https://calenlab.herokuapp.com/public/views/editarEvento.html"
                                    }
                                })
                            }
                        }
                    }
                })
            };

            label.innerText = datos.titulo[i];
            label.htmlFor = datos.idCalendario[i];
            label.style.color = datos.color[i];

            imgBorrar.src = "../assets/icons/deleteIcon.svg";
            imgBorrar.title = "Borrar Calendario";
            imgEditar.src = "../assets/icons/editIcon.svg";
            imgEditar.title = "Editar Calendario";

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

                fetch("https://calenlab.herokuapp.com/EliminarCalendario", {
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
                    alert(data.message);
                })

            })


            editar.appendChild(imgEditar);
            editar.id = `editar-${datos.idCalendario[i]}`;
            editar.onclick = () => {
                let form = new FormData();
                form.append("idCalendario", datos.idCalendario[i]);

                fetch("https://calenlab.herokuapp.com/EditarCalendario", {
                    method: "POST",
                    body: form
                }).then(response => {
                    return response.json();
                }).then(respuesta => {
                    console.table(respuesta);

                    if (respuesta.status == 200) {
                        window.location.href = "https://calenlab.herokuapp.com/public/views/editarCalendario.html";
                    }
                });
            }

            contenedor.appendChild(calendario);
            contenedor.appendChild(label);
            contenedor.appendChild(boton);
            contenedor.appendChild(editar);
            div.appendChild(contenedor);
        }

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