window.onload = function() {
    const page = document.body.getAttribute("activity");
    console.log('hago cosas')
    if (page === "6") {
        const fecha = new Date();
        const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
        alert(`Hoy es el ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`);
    }
    if (page === "7") {
        const fechaNacimiento = prompt("¿Qué día naciste? YYYY-MM-DD");
        const regex = /^(\d{4})-(\d{2})-(\d{2})$/;
        if(!fechaNacimiento || !regex.test(fechaNacimiento)) {
            alert("Por favor, introduce una fecha válida");
            return
        }
        const nacimiento = new Date(fechaNacimiento);
        const hoy = new Date();
        const diferencia = hoy - nacimiento;
        const diferenciaEnDias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        alert(`Hasta ahora has vivido ${diferenciaEnDias} días`);
    }
}
function Conversor() {
    const cadena = document.getElementById("cadena").value;
    const inversa = cadena.split("").reverse().join("");
    const mayusculas = cadena.toUpperCase();
    const repetida = cadena.repeat(3);
    const invertida = cadena.split("").reverse().join("").toUpperCase();
    document.getElementById("inversa").value = inversa;
    documents.getElementById("mayusculas").value = mayusculas;
    document.getElementById("repetida").value = repetida;
    document.getElementById("invertida").value = invertida;
}

function generaTabla() {
    const palabra = document.getElementById("palabra").value;
    const tabla = document.getElementById("tabla");
    //Tabla vacia
    tabla.innerHTML = "";
    //Rellenamos la tabla con las celdas
    const fila = document.createElement("tr");
    [...palabra].forEach(letra => {
        const celda = document.createElement("td");
        celda.textContent = letra;
        fila.appendChild(celda);
    });
    tabla.appendChild(fila);
}

function convertir() {
    const numero = Number(document.getElementById("numero").value);
    const binario = numero.toString(2);
    const octal = numero.toString(8);
    const hexadecimal = numero.toString(16);
    console.log(binario, octal, hexadecimal);
    document.getElementById("binario").textContent = binario;
    document.getElementById("octal").textContent = octal;
    document.getElementById("hexadecimal").textContent = hexadecimal;
}

function calcularEdad() {
    const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);

    //Verificar si se seleccionó una fecha válida
    if (!fechaNacimiento || isNaN(fechaNacimiento)) {
        alert("Por favor, selecciona una fecha válida.");
        return;
    }
    const hoy = new Date();
    //Calcular la diferencia
    const edadAnios = hoy.getFullYear() - fechaNacimiento.getFullYear();

    //Debemos saber si la persona ya cumplió ese año
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    const mesNacimiento = fechaNacimiento.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();

    //Si el mes actual es menor al mes de nacimiento, o si es el mismo mes pero el día actual es menor al día de nacimiento, significa que aún no ha cumplido años este año
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edadAnios--;
    }

    //Calcular meses y días restantes
    const edadMeses = mesActual - mesNacimiento;
    if (edadMeses < 0) {
        edadMeses += 12;
    }

    const edadDias = diaActual - diaNacimiento;
    if (edadDias < 0) {
        const diasEnMesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
        edadDias += diasEnMesAnterior;
    }

    //Mostrar el resultado en una alerta
    alert(`Han transcurrido ${edadAnios} años, ${edadMeses} meses y ${edadDias} días desde que naciste.`);
}

function validarFecha() {
    const fecha = document.getElementById("fecha").value;
    
    //Expresión regular para validar el formato DD/MM/YYYY o DD/MM/YY
    const regex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(\d{2}|\d{4})$/;

    if (regex.test(fecha)) {
        alert("La fecha es válida.");
    } else {
        alert("La fecha no es válida. Por favor, usa el formato DD/MM/YYYY.");
    }
}