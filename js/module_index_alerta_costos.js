/////////////////////////////////////////////////////////////////////////////////////////
/* MODULO / EXPORT de main.js /*/ /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ALERTA en array con While */
/* funcion para enviarle una alerta al usuario por DOM según los datos que ingrese */

export function alertaCostos(impuestosInput, otrosCostosInput, moneda) {
  /*   guardar inputs en un array vacío */
  let costosInputs = [];
  /*   bucle WHILE para hacer un pushear los argumentos recibidos en el array vacío */
  let i = 0;
  while (i < 2) {
    costosInputs.push(arguments[i]);
    i++;
  }

  //Utilización del Operador SPREAD para detectar el costo de vida mas alto y en el caso
  //que ese sea Otros Costos decirle al usuario que lo revise para intentar bajarlo.

  /*   Condicional if.. else */
  if (costosInputs[1] > costosInputs[0]) {
    let container = document.getElementById("alertasCostos");

    /*  ASINCRONÍA con setTimeout para que las alertas tarden 2 segundos en aparecer */
    setTimeout(() => {
      container.innerHTML = `
    <div class="border border-info p-2 rounded-3 mt-4">
      <h6 class="alertaCostos"><b>Alerta Costos</b></h6>
      <!--Utilización del OPERADOR AVANZADO SPREAD para concatenar el valor ingresado más alto -->
      <p class="alertaCostos">El valor mayor de tus Costos de vida es de ${moneda} ${Math.max(
        ...costosInputs
      )} que corresponde al ingreso de Otros Costos. Este valor supera el costo de tus Impuestos: ${moneda} ${
        /* Utilización del index del array para obtener el valor */
        costosInputs[0]
      }.Es un mal indicador. Tenlo en cuenta e intenta resolverlo a futuro. </p>
    </div>
    `;
    }, 2000);
    setTimeout(() => {
      container.innerHTML = `
  `;
    }, 20000);
  } else {
  }
}
