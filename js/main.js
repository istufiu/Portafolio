function mostrarMensaje() {
  const parrafo = document.getElementById("saludo");
  if (parrafo) {
    parrafo.textContent =
      "¡Muchas gracias por pasarte, si gustas puedes enviarme tus recomendaciones en el siguiente apartado!😄";
  }
}

function saludar() {
  const nombre = document.getElementById("nombreUsuario")?.value.trim();
  const mensaje = document.getElementById("mensajeSaludo");

  if (mensaje && nombre) {
    mensaje.textContent = `¡Hola, ${nombre}! Bienvenid@ a mi portafolio 😄`;
  } else if (mensaje) {
    mensaje.textContent = "";
  }
}

const formulario = document.getElementById("formContacto");

if (formulario) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre")?.value.trim();
    const correo = document.getElementById("email")?.value.trim();
    const mensajeTexto = document.getElementById("mensaje")?.value.trim();
    const mensajeFinal = document.getElementById("mensajeFinal");

    if (!nombre || !correo || !mensajeTexto) {
      if (mensajeFinal) {
        mensajeFinal.textContent = "⚠️ Por favor completa todos los campos.";
        mensajeFinal.style.color = "red";
      }
    } else {
      if (mensajeFinal) {
        mensajeFinal.textContent = `✅ Gracias por tu mensaje, ${nombre}! Te responderé pronto.`;
        mensajeFinal.style.color = "green";
      }
      formulario.reset();
    }
  });
}
