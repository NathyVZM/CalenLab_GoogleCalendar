//mostrarEvento.js

let radioForm = document.getElementsByName("calendario");



const mostrarEvento = (e) => {
    let form = new FormData()
    form.append("idCalendario", e.target.id);
    for(let value of form.values()){
        console.log(value);
    }
}

