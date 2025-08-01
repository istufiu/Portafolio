s
function mostrarMensaje() {
  // Seleccionamos el elemento por su ID
  let parrafo = document.getElementById("saludo");

  // Cambiamos el texto que muestra
  parrafo.textContent = "¡Muchas gracias por pasarte, si gustas puedes enviarme tus recomendaciones en el siguiente apartado!😄";
}

function saludar() {
  // Obtenemos el valor del input
  let nombre = document.getElementById("nombreUsuario").value;

  // Obtenemos el párrafo donde mostraremos el saludo
  let mensaje = document.getElementById("mensajeSaludo");

  // Verificamos si se escribió algo
  if (nombre.trim() !== "") {
    // Si hay texto, mostramos el saludo
    mensaje.textContent = "¡Hola, " + nombre + "! Bienvenid@ a mi portafolio 😄";
  } else {
    // Si no se escribió nada, limpiamos el mensaje o mostramos una alerta
    mensaje.textContent = ""; // o podrías usar: "Por favor, escribe tu nombre"
  }
}

// Captura el formulario por su ID
const formulario = document.getElementById("formContacto");

// Le agregamos un evento para cuando se envíe
formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se recargue la página

  // Captura los valores ingresados
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("email").value.trim();
  const mensajeTexto = document.getElementById("mensaje").value.trim();

  const mensajeFinal = document.getElementById("mensajeFinal");

  // Verifica que no haya campos vacíos
  if (nombre === "" || correo === "" || mensajeTexto === "") {
    mensajeFinal.textContent = "⚠️ Por favor completa todos los campos.";
    mensajeFinal.style.color = "red";
  } else {
    mensajeFinal.textContent = `✅ Gracias por tu mensaje, ${nombre}! Te responderé pronto.`;
    mensajeFinal.style.color = "green";

    // (Opcional) Limpiar campos después de enviar
    formulario.reset();
  }
});
