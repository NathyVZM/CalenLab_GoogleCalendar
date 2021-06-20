//cerrarSesion.js

let cerrarSesion = document.getElementById("cerrarSesion");

const logOut = () => {
    fetch("https://calenlab.herokuapp.com/LoginUsuario", {
        method: "GET"
    }).then(response => {
        return response.json();
    }).then(dato => {
        console.log(dato);
        if(dato.status == 200) {
            window.location.href = "https://calenlab.herokuapp.com";
        }
    })
}

cerrarSesion.onclick = logOut;