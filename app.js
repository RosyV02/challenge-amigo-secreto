// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// --- Challenge Amigo Secreto ---

// Variable lista de amigos
let amigos = [];

// Función para añadir amigos a la lista
function añadirAmigos() {
    const nombreAmigo = document.getElementById('nombreAmigo').value.trim();
    if (nombreAmigo && !amigos.includes(nombreAmigo)) {
        amigos.push(nombreAmigo);
        document.getElementById('nombreAmigo').value = ''; // Limpiar el campo de texto
        updateListaAmigos();
    } else {
        alert("Por favor, ingresa un nombre válido");
    }
}

// Actualiza la lista de amigos en el HTML
function updateListaAmigos() {
    const list = document.getElementById('ListaAmigos');
    list.innerHTML = ''; // Limpiar la lista actual
    amigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        list.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function drawAmigoSorteado() {
    if (amigos.length < 2) {
        alert("¡Necesitas mínimo dos amigos para jugar!");
        return;
    }

    // Sorteo de un amigo secreto
    const randomIndex = Math.floor(Math.random() * amigos.length);
    const AmigoSorteado = amigos[randomIndex];

    // Mostrar solo el mensaje en la parte superior, en color verde
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = `El amigo secreto es: ${AmigoSorteado}`;
    mensaje.style.color = 'green';

    // Vaciar la lista de amigos después de sortear
    amigos = [];
    updateListaAmigos(); // Limpiar la lista en el HTML
    return;
}



