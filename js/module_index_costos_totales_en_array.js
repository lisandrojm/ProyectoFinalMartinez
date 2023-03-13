/////////////////////////////////////////////////////////////////////////////////////////
/* MODULO / EXPORT de main.js /*/ /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
//ARRAYS
//Calcular la costosFijosTotales de Costos de Vida en un array

export function costosTotalesEnArray(impuestosInput, otrosCostosInput) {
  /*   guardar inputs en un array vacío */
  let costosInputs = [];
  /*   bucle WHILE para hacer un pushear los argumentos recibidos en el array vacío */
  let i = 0;
  while (i < 2) {
    costosInputs.push(arguments[i]);
    i++;
  }

  /*   bucle FOR para sumar todos los elementos del array */
  let suma = 0;
  for (let n of costosInputs) {
    suma += n;
  }

  return suma;
}
