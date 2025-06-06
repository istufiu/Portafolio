// Declaramos una función que dice hola
function saludar() {
  console.log("¡Hola,Bienvenidos a mi portafolio 😊");
}

// Llamamos a la función para que se ejecute
saludar();


// Declaramos una variable con el nombre "nombre"
let nombre = "Tufiu"; // guarda tu nombre

// Otra variable con un número
let edad = 25; // puedes cambiar este número

// Mostramos el contenido de las variables en consola
console.log("Tu nombre es: " + nombre); // concatena texto + variable
console.log("Tienes " + edad + " años");

// Esta función recibe un nombre y una edad como parámetros
function presentacion(nombre, edad) {
  // Muestra un mensaje usando los datos recibidos
  console.log("Hola, soy " + nombre + " y tengo " + edad + " años.");
}

// Llamamos a la función pasando valores reales
presentacion("Tufiu", 24);
presentacion("Ana", 30);

// Esta función cambia el contenido del párrafo con id="saludo"
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
