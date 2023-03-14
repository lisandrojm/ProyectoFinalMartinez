/////////////////////////////////////////////////////////////////////////////////////////
/* STORAGE */ /////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
/* funcion que guarda todos los inputs en localStorage y los muestra al recargar la página */

/* Se utiliza el evento click en el botón de enviar (submit) del formulario. */
const form = document.getElementById("formulario");

form.addEventListener("click", function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input, select");
  /*   e crea un objeto vacío llamado "data" que almacenará 
  los valores de los inputs y selects del formulario */
  let data = {};
  /*   Se recorren todos los inputs y selects y se agrega cada
  uno de sus valores con su id como clave, luego se guarda todo
  el objeto "data" en una entrada de localStorage con la llave "formData"
  utilizando JSON.stringify(). */
  inputs.forEach(function (input, select) {
    data[input.id] = input.value;
    select[input.id] = select.valueOf;
  });

  localStorage.setItem("formData", JSON.stringify(data));
});
/*  función utiliza el evento load para ejecutarse cuando la página ha terminado de cargar. */
window.addEventListener("load", function () {
  /* Se obtiene un objeto guardado en localStorage con la llave "formData".  */
  const data = JSON.parse(localStorage.getItem("formData"));

  /* Si se encuentra el objeto, se recorren todos los inputs y selects del formulario */
  /* y se les asigna el valor correspondiente guardado en "formData".  */
  if (data !== null) {
    const inputs = form.querySelectorAll("input, select");

    /*Método foEach */
    inputs.forEach(function (input, select) {
      input.value = data[input.id];
      select.valueOf = data[select.id];
    });
  }
});
