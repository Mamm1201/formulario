export default function setupFormHandler() {
  const form = document.getElementById("survey-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("number").value;
    const dropdown = document.getElementById("dropdown").value;
    const radioButtons = document.querySelectorAll(
      'input[name="choice"] : checked'
    );
    const checkboxes = document.querySelectorAll(
      'type[name="checkbox"] : checked'
    );
    const comments = document.getElementById("comments").value;
    if (
      name &&
      email &&
      age &&
      dropdown &&
      radioButtons.length > 0 &&
      checkboxes.length > 0 &&
      comments
    ) {
      alert("Form submitted successfully!");

      form.reset();
    } else {
      alert("Please fill out all required fields.");
    }
  });
}
