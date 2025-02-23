// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.querySelector("#amigo").value;

    // interrumpir ejecucion si no hay nada
    if (nombre == "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    nombre = "";

    actualizarLista();
}

// vacia la lista del html y la actualiza con el contenido del arreglo
function actualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        let text = document.createTextNode(nombre);
        let item = document.createElement("li");
        item.appendChild(text);
        lista.appendChild(item);
    });
}