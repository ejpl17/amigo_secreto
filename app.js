let nombres = []; // Lista para almacenar los nombres ingresados

// Referencias a elementos del contenido de la página
const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const botonSortear = document.querySelector(".button-draw");

botonSortear.disabled = true; // Deshabilitar el botón de sorteo al inicio

// Función para agregar un nombre a la lista
function agregarNombre() {
  const nombre = inputNombre.value.trim(); // Eliminar cualquier espacio adicional antes o después del nombre ingresado por el usuario

  // Verificar que el campo no esté vacío y que el nombre no esté duplicado
  if (nombre !== "" && !nombres.includes(nombre)) {
    nombres.push(nombre); 
    actualizarLista(); 
    inputNombre.value = ""; 
  }

  // Habilitar el botón de sorteo si hay más de un nombre en la lista
  actualizarBotonSortear();
}

// Función para actualizar la lista de nombres en la interfaz
function actualizarLista() {
  listaAmigos.innerHTML = ""; 

  // Crear un elemento <li> por cada nombre en la lista
  nombres.forEach(nombre => {
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
  });
}

// Función para actualizar el estado del botón de sorteo
function actualizarBotonSortear() {
  botonSortear.disabled = nombres.length <= 1; // Habilitar solo si hay más de un nombre en el juego
}

// Función para realizar el sorteo de un amigo de forma aleatoria
function sortearAmigo() {
  if (nombres.length === 0) return; // Salir si no hay nombres en la lista

  // Seleccionar un nombre de cada nueva <li> de forma aleatoria
  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const nombreSeleccionado = nombres[indiceAleatorio];

  // Crear un elemento <li> para mostrar el nombre sorteado
  const li = document.createElement("li");
  li.textContent = nombreSeleccionado;
  li.style.textDecoration = "line-through"; // Tacharlo para indicar que ya fue seleccionado
  resultado.appendChild(li);

  // Eliminar el nombre sorteado de la primera lista
  nombres.splice(indiceAleatorio, 1);

  actualizarLista(); // Actualizar la lista de nombres restantes

  // Deshabilitar el botón de sorteo si ya no quedan nombres
  if (nombres.length === 0) {
    botonSortear.disabled = true;
  }
}
