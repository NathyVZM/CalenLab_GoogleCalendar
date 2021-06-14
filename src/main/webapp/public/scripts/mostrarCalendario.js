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
            let calendario = document.createElement("input");
            let label = document.createElement("label");
            let boton = document.createElement("button");
            let editar = document.createElement("button");

            calendario.type = "radio";
            calendario.name = "calendario";
            calendario.id = datos.idCalendario[i];
            calendario.value = datos.idCalendario[i];

            label.innerText = datos.titulo[i];
            label.htmlFor = datos.idCalendario[i];

            boton.type = "button";
            boton.innerText = "Eliminar"
            boton.id = `eliminar-${datos.idCalendario[i]}`;
            boton.addEventListener("click", (e) => {
                console.log(e.target.id)
                console.log(datos.titulo[i]);
    
                let form = new FormData();
                form.append("idCalendario", datos.idCalendario[i]);
                for(let value of form.values()){
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

            editar.type = "button";
            editar.innerText = "Editar Calendario";
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
    
                    if(respuesta.status == 200) {
                        window.location.href = "http://localhost:8080/public/views/editarCalendario.html";
                    }
                });
            }

            div.appendChild(calendario);
            div.appendChild(label);
            div.appendChild(boton);
            div.appendChild(editar);
        }

        document.body.appendChild(div);

        let select = document.getElementById("seleccion-calendario");

        for(let i = 0; i < datos.idCalendario.length; i++){
            let opcion = document.createElement("option");
            opcion.value = datos.idCalendario[i];
            opcion.innerText = datos.titulo[i];
            opcion.id = `opcion-${datos.idCalendario[i]}`;

            select.appendChild(opcion);
        }
    })
}

window.onload = mostrarCalendarios;