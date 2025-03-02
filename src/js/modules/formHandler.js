export default function setupFormHandler() {
  const form = document.getElementById("survey-form"); // Corregí el ID para que sea consistente
  const messageContainer = document.getElementById("message-container");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Corregí "Value" a "value" y los selectores incorrectos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("number").value;
    const dropdown = document.getElementById("dropdown").value;
    const radioButtons = document.querySelector("input[name=choice]:checked"); // Un solo botón seleccionado
    const checkboxes = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );
    const comments = document.getElementById("comments").value;

    if (
      name &&
      email && // Agregué email ya que debería ser obligatorio
      age &&
      dropdown &&
      radioButtons && // No es una lista, sino un solo elemento seleccionado
      checkboxes.length > 0 &&
      comments
    ) {
      messageContainer.textContent = "Formulario enviado con éxito.";
      messageContainer.style.color = "green";
      form.reset(); // Limpiar el formulario
    } else {
      messageContainer.textContent =
        "Por favor, complete todos los campos requeridos.";
      messageContainer.style.color = "red";
    }
  });
}
