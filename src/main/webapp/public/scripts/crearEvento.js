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

        if(data.status == 200) {
            window.location.href = "https://calenlab.herokuapp.com/public/views/principal.html";
        }

        /*let fecha = new Date(`${data.fecha}T${data.hora}`);
        console.log(data.fecha);
        console.log(data.hora);
        console.log(fecha.getDate());
        console.log(fecha.getHours());
        
        let caja = document.getElementById(`hora-${fecha.getHours()}-dia-${fecha.getDate()}`);

        let titulo = document.createElement("p");
        titulo.id = data.idEvento;
        titulo.innerText = data.titulo;

        let imgEventoEditar = document.createElement("img");
        imgEventoEditar.src = "../assets/icons/editIcon.svg";
        imgEventoEditar.style.width = "8%";
        imgEventoEditar.style.float = "right";

        let imgEventoBorrar = document.createElement("img");
        imgEventoBorrar.src = "../assets/icons/deleteIcon.svg";
        imgEventoBorrar.style.width = "8%";
        imgEventoBorrar.style.float = "right";

        caja.appendChild(titulo);
        caja.appendChild(imgEventoEditar);
        caja.appendChild(imgEventoBorrar);

        imgEventoBorrar.onclick = () => {
            let formEvento = new FormData();
            formEvento.append("idEvento", data.idEvento);

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
        }*/
    })
}

boton_evento.onclick = crearEvento;