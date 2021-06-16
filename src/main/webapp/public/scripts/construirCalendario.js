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




//LLAMANDO FUNCION
escribirNumeros(diaActual)
llenarCalendario();



function siguiente(e) {
    console.log(e.target.id);
    cambiarNum();
    escribirNumeros(diaActual);

    for(let i = 0; i < 24; i++){
        let filas = document.getElementById(`hora-${i}`);
        let datos = filas.getElementsByTagName("td");

        for(let j = 1; j < 8; j++){
            datos[j].innerHTML = "";
        }
    }

}

function anterior(e) {
    console.log(e.target.id);
    cambiarNumAtras();
    escribirNumerosAtras(diaActual);

    for(let i = 0; i < 24; i++){
        let filas = document.getElementById(`hora-${i}`);
        let datos = filas.getElementsByTagName("td");

        for(let j = 1; j < 8; j++){
            datos[j].innerHTML = "";
        }
    }
}

function escribirNumeros(currentDate) {
    mes_anio.innerHTML = `${meses[currentDate.getMonth()]}, ${currentDate.getFullYear()}`;

    if (currentDate.getDay() == 0) {
        for (let i = 1; i < 8; i++) {
            contenido_dias[i].innerHTML = currentDate.getDate();
            contenido_dias[i].id = currentDate.getDate();
            currentDate.setDate(currentDate.getDate() + 1);
        }
    }
    else {
        currentDate.setDate(currentDate.getDate() - currentDate.getDay())
        for (let i = 1; i < 8; i++) {
            contenido_dias[i].innerHTML = currentDate.getDate();
            contenido_dias[i].id = currentDate.getDate();
            currentDate.setDate(currentDate.getDate() + 1);
        }
    }
}

function escribirNumerosAtras(currentDate) {
    mes_anio.innerHTML = `${meses[currentDate.getMonth()]}, ${currentDate.getFullYear()}`;
    for (let i = 7; i >= 1; i--) {
        currentDate.setDate(currentDate.getDate() - 1);
        contenido_dias[i].innerHTML = currentDate.getDate();
        contenido_dias[i].id = currentDate.getDate();
    }
}

//CREANDO CONTENIDO
function llenarCalendario() {
    let tbody = document.getElementById("cuerpo-calendario");

    for (let i = 0; i < 24; i++) {
        let tr = document.createElement("tr");
        tr.id = `hora-${i}`;

        for (let j = 0; j < 8; j++) {
            let td = document.createElement("td");
            if (j == 0) {
                td.innerHTML = i;
                td.id = i;
            }
            else {
                td.innerHTML = "";
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

function cambiarNum() {
    for (let i = 0; i < 24; i++) {
        let date = diaActual.getDate();
        let fila = document.getElementById(`hora-${i}`);
        let datos = fila.getElementsByTagName("td");
        for (let j = 1; j < 8; j++) {
            datos[j].id = `hora-${i}-dia-${date}`;
            date++;
        }
    }
}

function cambiarNumAtras() {
    //let date;
    for (let i = 0; i < 24; i++) {
        date = diaActual.getDate() - 1;
        let fila = document.getElementById(`hora-${i}`);
        let datos = fila.getElementsByTagName("td");
        for (let j = 7; j > 0; j--) {
            datos[j].id = `hora-${i}-dia-${date}`;
            if (date <= 0) {
                date = diaActual.getDate();
            }
            else {
                date--;
            }
        }
    }
}