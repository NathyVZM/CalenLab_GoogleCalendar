let eliminar = document.getElementById("eliminar");

const eliminarCalendario = () => {

    let formulario = new FormData();
    formulario.append("idCalendario", data.idCalendario);
    for (let value of formulario.values()) {
        console.log(value);
    }

    fetch("http://localhost:8080/EditarCalendario", {
        method: "PUT",
        body: formulario
    }).then(response => {
        return response.json();
    }).then(repuesta => {
        console.table(repuesta);
        if (repuesta.status == 200) {
            window.location.href = "http://localhost:8080/public/views/principal.html";
        }
    })
}

const redireccionar = (status) => {
    if (status == 200) {
        window.location.href = "http://localhost:8080";
    }
}

eliminar.onclick = eliminarCalendario;