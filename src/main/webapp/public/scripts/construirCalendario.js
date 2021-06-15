let diaActual = new Date();
//let mesActual = diaActual.getMonth();
//let anioActual = diaActual.getFullYear();
//let fechaDiaActual = diaActual.getDate();
//let diaSemana = diaActual.getDay();

let dias = document.getElementById("dias");
let contenido_dias = document.querySelectorAll("#dias th");
let mes_anio = document.getElementById("mes-anio");

let boton_siguiente = document.getElementById("siguiente");
boton_siguiente.onclick = siguiente;

let boton_anterior = document.getElementById("anterior");
boton_anterior.onclick = anterior;

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];


//LLAMANDO FUNCiON
escribirNumeros(diaActual);

function siguiente(e) {
    console.log(e.target.id);
    escribirNumeros(diaActual);
}

function anterior(e) {
    console.log(e.target.id);
    escribirNumerosAAtras(diaActual);
}

function escribirNumeros(currentDate) {
    mes_anio.innerHTML = `${meses[currentDate.getMonth()]}, ${currentDate.getFullYear()}`;

    if(currentDate.getDay() == 0){
        for (let i = 0; i < 7; i++) {
            contenido_dias[i].innerHTML = currentDate.getDate();
            currentDate.setDate(currentDate.getDate() + 1);
        }
    }
    else {
        currentDate.setDate(currentDate.getDate() - currentDate.getDay())
        for (let i = 0; i < 7; i++) {
            contenido_dias[i].innerHTML = currentDate.getDate();
            currentDate.setDate(currentDate.getDate() + 1);
        }
    }
}

function escribirNumerosAAtras(currentDate, currentMonth, currentYear) {
    mes_anio.innerHTML = `${meses[currentDate.getMonth()]}, ${currentDate.getFullYear()}`;
    for (let i = 6; i >= 0; i--) {
        currentDate.setDate(currentDate.getDate() - 1);
        contenido_dias[i].innerHTML = currentDate.getDate();
    }
}
