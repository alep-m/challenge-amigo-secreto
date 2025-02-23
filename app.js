// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arregloNombres = [];

function agregarAmigo() {
    let nombre = document.querySelector("#amigo").value;

    // parar de ejecutar si no hay nada
    if (nombre == "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // agregar nombre al arreglo
    arregloNombres.push(nombre);
    nombre = "";
}