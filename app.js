// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Código para que se pueda añadir amigos secretos con la tecla Enter
// Agregar event listener cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el campo de entrada
    const inputAmigo = document.getElementById('amigo');
    
    // Agregar event listener para detectar la tecla Enter
    inputAmigo.addEventListener('keypress', function(event) {
        // Comprobar si la tecla presionada es Enter (código 13)
        if (event.key === 'Enter') {
            // Prevenir el comportamiento por defecto (evita que el formulario se envíe)
            event.preventDefault();
            // Llamar a la función agregarAmigo
            agregarAmigo();
        }
    });
});
//Fin del código para añadir amigos secretos con la tecla Enter

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la visualización de la lista
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    // Usar bucle for para recorrer el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    // Validar que hay amigos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Agrega al menos un nombre antes de sortear.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en el elemento HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}
