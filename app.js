// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let entrada = document.querySelector("#amigo");

    // interrumpir ejecucion si no hay texto
    if (entrada.value == "") {
        alert("Por favor, inserte un entrada.value.");
        return;
    }

    amigos.push(entrada.value);
    entrada.value = "";

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

function sortearAmigo() {
    // interrumpir ejecucion si el arreglo esta vacio
    if (amigos.length == 0) {
        alert("La lista esta vacia");
        return;
    }

    let resultado = document.querySelector("#resultado");
    let index = Math.floor(Math.random() * amigos.length);
    let sorteo = amigos[index];
    
    resultado.innerHTML = sorteo;
}