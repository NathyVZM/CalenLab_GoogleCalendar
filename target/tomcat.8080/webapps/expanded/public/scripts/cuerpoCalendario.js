let hoy = new Date();
let mesActual = hoy.getMonth();
let anioActual = hoy.getFullYear();
let h3 = document.getElementById("mes-anio");

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
    "Octubre", "Noviembre", "Diciembre"];

//calendario(mesActual, anioActual);
mesCalendario();

function siguiente() {
    anioActual = (mesActual === 11) ? anioActual + 1 : anioActual;
    mesActual = (mesActual + 1) % 12;
    calendario(mesActual, anioActual);
}

function anterior() {
    anioActual = (mesActual === 0) ? anioActual - 1 : anioActual;
    mesActual = (mesActual === 0) ? 11 : mesActual - 1;
    calendario(mesActual, anioActual);

}

function calendario(mes, anio) {
    let primerDia = (new Date(anio, mes)).getDay();
    let diasMes = 32 - new Date(anio, mes, 32).getDate();

    let tbody = document.getElementById("cuerpo-calendario");
    tbody.innerHTML = "";

    h3.innerHTML = `${meses[mes]}, ${anio}`;

    let dia = 1;
    for (let i = 0; i < 6; i++) {
        let fila = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < primerDia) {
                let celda = document.createElement("td");
                let celdaTexto = document.createTextNode("");
                celda.appendChild(celdaTexto);
                fila.appendChild(celda);
            }
            else if (dia > diasMes) {
                break;
            }
            else {
                let celda = document.createElement("td")
                let celdaTexto = document.createTextNode(dia);
                celda.appendChild(celdaTexto);
                fila.appendChild(celda);
                dia++;
            }
        }
        tbody.appendChild(fila);
    }
}

function mesCalendario(){
    let diaActual = (new Date(anioActual, mesActual, hoy.getDate())).getDay();
    console.log(diaActual);
    console.log(hoy);

    for(let i = 0; i < 7; i++){
        
    }

}