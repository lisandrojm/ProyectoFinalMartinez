/* Desabilitar el botón del formulario hasta que no se completen todos los campos */
//Seleccionamos todos los inputs del formulario
const inputs = document.querySelectorAll("input");

//Agregamos un listener de eventos a cada input para detectar cambios
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    //Verificamos si todos los inputs tienen un valor válido
    const allInputsAreValid = [...inputs].every((input) => input.value !== "");

    //Habilitamos o deshabilitamos el botón de envío según corresponda
    const submitBtn = document.querySelector("#btn");
    submitBtn.disabled = !allInputsAreValid;
  });
});
