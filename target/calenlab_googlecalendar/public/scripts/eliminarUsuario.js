//eliminarUsuario.js

let eliminar = document.getElementById("eliminar");

const eliminarUsuario = () => {
    
    fetch("http://localhost:8080/EliminarUsuario", {
        method: "DELETE"
    }).then(response => {
        return response.json();
    }).then(datos => {
        console.table(datos);
        redireccionar(datos.status);
    })
}

const redireccionar = (status) => {
    if(status == 200) {
        window.location.href = "http://localhost:8080/public/views/eliminarRedireccion.html";
    }
}

eliminar.onclick = eliminarUsuario;