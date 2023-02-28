const mainText = document.getElementById("main-text");
const secondaryText = document.getElementById("secondary-text");
const thirdText = document.getElementById("third-text");
const editMainTextButton = document.getElementById("edit-main-text-button");
const editSecondaryTextButton = document.getElementById("edit-secondary-text-button");
const editThirdTextButton = document.getElementById("edit-third-text-button");
const textInput = document.getElementById("text-input");
const saveTextButton = document.getElementById("save-text-button");
const modal = document.getElementById("myModal");
const close = document.getElementsByClassName("close")[0];

let currentTextElement;

function updateText(textElement) {
  textInput.value = textElement.innerHTML;
  modal.style.display = "block";
  currentTextElement = textElement;
}

// Añadimos un evento click al botón para editar el texto principal
editMainTextButton.addEventListener("click", function () {
  updateText(mainText);
});

// Añadimos un evento click al botón para editar el texto secundario
editSecondaryTextButton.addEventListener("click", function () {
  updateText(secondaryText);
});

// Añadimos un evento click al botón para editar el texto terciario
editThirdTextButton.addEventListener("click", function () {
  updateText(thirdText);
});

saveTextButton.addEventListener("click", function () {
  currentTextElement.innerHTML = textInput.value;
  modal.style.display = "none";
});

// Añadimos un evento click al botón para cerrar el modal
close.addEventListener("click", function () {
  modal.style.display = "none";
});

// Añadimos un evento click fuera del modal para cerrarlo
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});



