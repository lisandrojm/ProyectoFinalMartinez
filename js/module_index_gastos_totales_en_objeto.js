/////////////////////////////////////////////////////////////////////////////////////////
/* MODULO / EXPORT de main.js /*/ /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
/* OBJETOS / CLASS  */
//Calculo de gastos fijos totales en un objeto.

/* recibe como parámetro el ingreso del usuario en el formulario con los id:oficinaInput y id:gastosInput*/
export const gastosTotalesEnObjeto = (oficinaInput, softwareInput) => {
  class GastosFijos {
    constructor(oficina, software) {
      this.oficina = oficina;
      this.software = software;
    }
  }
  const persona1 = new GastosFijos(oficinaInput, softwareInput);
  // DESESTRUCTURACIÓN del objeto creado con el constructor class: persona1
  const { oficina, software } = persona1;
  let gastosFijosTotales = oficina + software;

  return gastosFijosTotales;
};
