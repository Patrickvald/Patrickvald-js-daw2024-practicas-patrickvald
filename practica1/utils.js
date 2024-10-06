//Actividad 1
window.onload = function() {
    const page = document.body.getAttribute("activity");
    if (page === "1") {
        activity1();
    }
    if (page === "2") {
        activity2();
    }
    if (page === "3") {
        activity3();
    }
    if (page === "4") {
        activity4();
    }
    if (page === "6y7") {
        activity6y7();
    }
    if (page === "8") {
        const form = document.getElementById("numbersForm");
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const num1 = document.getElementById("num1").value;
            const num2 = document.getElementById("num2").value;
            const num3 = document.getElementById("num3").value;
            //Las validaciones están en el HTML, no puede ser un valor no númerico o vacio.
            const mayor = Math.max(parseFloat(num1), parseFloat(num2), parseFloat(num3)); 
            alert(`El mayor número es ${mayor}`);
        });
    }
};

function activity1() {
    const name = prompt("¿Cuál es tu nombre?");
    alert(`Bienvenido de nuevo ${name}`);
}
function activity2() {
    const myString = prompt("Introduzca una cadena de texto");
    const myArray = Array.from(myString)
    const result = myArray.filter((elem) => elem === "a")
        .length;
    alert(`El carácter "a" aparece ${result} veces en la cadena`);       
}
function activity3() {
    const cadena = prompt("Introduzca una cadena de texto");
    const array = Array.from(cadena);
    const result = array
        .filter((elem) => elem.toLowerCase() === "a")
        .length;
     alert(`El carácter "a" aparece ${result} veces en la cadena`);       
}
function activity4() {
    const colorSelect = prompt("¿Qué color prefieres? Responda 'R', 'V' o 'A'");
        if (colorSelect === "R") {
            document.bgColor="red";
            return;
        }
        if (colorSelect === "V") {
            document.bgColor="green"
            return;
        }        
        if (colorSelect === "A") {
            document.bgColor="blue"
            return;
        }
        alert("Opción no válida");        
}
function activity6y7() {
    const myDiv = document.getElementById("ejercicio6y7");
    const colorOriginal = myDiv.style.backgroundColor;

    myDiv.addEventListener("mouseenter", function() {
        myDiv.style.backgroundColor = "skyblue";
    });
    myDiv.addEventListener("mouseleave", function() {
        myDiv.style.backgroundColor = colorOriginal;
    });
};

function changeColor(color) {
    document.body.style.backgroundColor = color;
}

