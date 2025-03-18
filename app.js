let nombres = []; // Lista para almacenar los nombres ingresados

// Referencias a elementos del contenido de la página
const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const botonSortear = document.querySelector(".button-draw");

botonSortear.disabled = true; // Deshabilitar el botón de sorteo al inicio

// Función para agregar un nombre a la lista
function agregarNombre() {
  const nombre = inputNombre.value.trim(); // Eliminar espacios antes y después del nombre

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
  botonSortear.disabled = nombres.length <= 1; // Habilitar solo si hay más de un nombre
}

// Función para realizar el sorteo de un amigo de forma aleatoria
function sortearAmigo() {
  if (nombres.length === 0) return; // Salir si no hay nombres en la lista

  // Seleccionar un nombre aleatorio
  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const nombreSeleccionado = nombres[indiceAleatorio];

  // Crear un elemento <li> para mostrar el nombre sorteado
  const li = document.createElement("li");
  li.textContent = nombreSeleccionado;
  li.style.textDecoration = "line-through"; // Tacharlo para indicar que ya fue seleccionado
  resultado.appendChild(li);

  // Eliminar el nombre sorteado de la lista original
  nombres.splice(indiceAleatorio, 1);

  actualizarLista(); // Actualizar la lista de nombres restantes

  // Si ya no quedan nombres, deshabilitar el botón y mostrar el mensaje final
  if (nombres.length === 0) {
    botonSortear.disabled = true;

    // Mostrar mensaje de finalización 
    setTimeout(mostrarMensajeFinal, 300); // Pequeño retraso para que se vea el último nombre sorteado
  }
}
// Mensaje al finalizar el sorteo 
function mostrarMensajeFinal() {
  alert("¡FELICIDADES! Se ha culminado el sorteo 🎉");
}
