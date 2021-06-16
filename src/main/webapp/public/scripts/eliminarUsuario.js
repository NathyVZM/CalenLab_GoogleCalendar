//eliminarUsuario.js

let eliminar = document.getElementById("eliminar");

const eliminarUsuario = () => {
    
    fetch("https://calenlab.herokuapp.com/EliminarUsuario", {
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
        window.location.href = "https://calenlab.herokuapp.com/public/views/eliminarRedireccion.html";
    }
}

eliminar.onclick = eliminarUsuario;