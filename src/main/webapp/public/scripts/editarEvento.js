//editarEvento.js

const mostrarIDEvento = () => {
    fetch("https://calenlab.herokuapp.com/EditarEvento", {
        method:"GET"
    }).then(response => {
        return response.json();
    }).then(data => {
        console.table(data);
    })
}

window.onload = mostrarIDEvento;