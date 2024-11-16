function primeraTarea () {
    return new Promise ((resolve) => {resolve(10);});
}

function segundaTarea (valor){
    return new Promise ((resolve) => {resolve(valor * 2);});
}

function terceraTarea (valor){
    return new Promise ((resolve) => {resolve(valor + 5);});
}

primeraTarea()
    .then((res1) => {
        console.log(res1);
        return segundaTarea(res1);
    })
    .then((res2) => {
        console.log(res2);
        return terceraTarea(res2);
    })
    .then((res3) => {
        console.log(res3);
    })
    .catch((error) => {
        console.log(error);
    });