# Challenge "Amigo Secreto" – Desarrollo Web con Alura Latam (G8) y Oracle Next Education.

## Objetivo General

- Permitir el ingreso de varios nombres (participantes) sin repetir ni dejar en blanco.
- Mostrar todos los nombres ingresados en una lista.
- Seleccionar aleatoriamente los nombres hasta agotar la lista, moviéndolos a una lista separada.
- Al finalizar el sorteo, mostrar un mensaje emergente indicando que el sorteo ha concluido.

## Características

- Se pueden ingresar nombres completos o solo el primer nombre.
- El programa no distingue mayúsculas de minúsculas o caracteres especiales.
- Se requiere al menos dos nombres para iniciar el sorteo.
- Al sortear un nombre, se elimina de la lista original y pasa a la lista de seleccionados.
- Cuando se sortean todos los nombres, aparece un mensaje emergente de finalización.

## Desglose de funciones principales

### **`agregarNombre()`**
- **Propósito**: Agrega un nuevo nombre a la lista de nombres.
- **Cómo funciona**:
  - Toma el valor del campo de entrada, eliminando espacios extra.
  - Verifica que el nombre no esté vacío ni repetido.
  - Lo agrega al array `nombres` y actualiza la lista en pantalla.
  - Vacía el campo de entrada.
  - Habilita el botón de sorteo si hay al menos dos nombres en la lista.

### **`actualizarLista()`**
- **Propósito**: Refresca la lista de nombres mostrados en pantalla.
- **Cómo funciona**:
  - Limpia la lista actual.
  - Crea y añade un elemento `<li>` para cada nombre en el array `nombres`.

### **`actualizarBotonSortear()`**
- **Propósito**: Habilita o deshabilita el botón de sorteo.
- **Cómo funciona**:
  - Si hay más de un nombre en la lista, el botón de sorteo se habilita.
  - Si hay uno o menos, el botón permanece deshabilitado.

### **`sortearAmigo()`**
- **Propósito**: Selecciona un nombre aleatoriamente de la lista y lo muestra como sorteado.
- **Cómo funciona**:
  - Si la lista de nombres está vacía, la función no hace nada.
  - Selecciona un nombre al azar y lo muestra tachado en la lista de resultados.
  - Lo elimina de la lista original.
  - Actualiza la lista en pantalla.
  - Si ya no quedan nombres, deshabilita el botón de sorteo.
  - Y si ya no quedan nombres se deshabilita el botón de sorteo y muestra un mensaje emergente.
 
### **`mostrarMensajeFinal()`**
- **Propósito**: Muestra un mensaje emergente al finalizar el sorteo.
- **Cómo funciona**:
  - Se ejecuta cuando ya no quedan nombres en la lista.
  - Muestra un `alert("¡FELICIDADES! Se ha culminado el sorteo 🎉");` para indicar el fin del juego.

## Variables y constantes clave

- **`amigos[]`**: Lista de nombres ingresados.
- **`seleccionados[]`**: Nombres ya sorteados.
- **`registrarAmigo`**: Controla si se pueden agregar nombres (1 = sí, 0 = no).
- **`elementoAleatorio`**: Guarda el índice del nombre sorteado.

## IMÁGENES
<img width="1498" alt="Pantalla Principal" src="https://github.com/user-attachments/assets/4d824653-1d0e-4f25-82cf-ff63239aa18a" />
- ** Añadir nombres:
<img width="1498" alt="Añadir nombres_1" src="https://github.com/user-attachments/assets/3a68d663-9690-4fcc-8e8a-d300b08d9572" />
- ** Sorteo:
<img width="1498" alt="Sorteo" src="https://github.com/user-attachments/assets/16217975-f09d-4713-8cb6-6630c7c7997e" />
- ** Juego Finalizado:
<img width="1552" alt="Final" src="https://github.com/user-attachments/assets/147d6837-9a1d-493c-9ea7-be4614afd1f3" />

