// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    //Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombreAgregado = input.value;

    //Validar la entrada
    if(nombreAgregado === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Actualizar el array de amigos
    amigos.push(nombreAgregado);
    console.log(nombreAgregado);
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = ""; 
}

function actualizarLista() {
    // Seleccionar lista donde se mostrarán los amigos
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Limpiar lista

    // Recorro el array amigos
    for (let i=0; i<amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li); //Agrego el nombre en la lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo para sortear.");
        return;
    }

    //Sortear amigo
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceSorteado];

    //Mostrar resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}