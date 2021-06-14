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

            editar.type = "button";
            editar.innerText = "Editar Calendario";
            editar.id = `editar-${datos.idCalendario[i]}`;

            div.appendChild(calendario);
            div.appendChild(label);
            div.appendChild(boton);
            div.appendChild(editar);
        }
        document.body.appendChild(div);
    })
}

window.onload = mostrarCalendarios;