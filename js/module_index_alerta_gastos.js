/////////////////////////////////////////////////////////////////////////////////////////
/* MODULO / EXPORT de main.js /*/ /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Cálculo y Alerta en un OBJETO */
/* funcion para enviarle una alerta al usuario por DOM según los datos que ingrese */

export const alertaGastos = (oficinaInput, softwareInput, ingresos, moneda) => {
  class GastosFijos {
    constructor(oficina, software) {
      this.oficina = oficina;
      this.software = software;
    }
    /* METODO PERSONALIZADO en objeto */
    resumen(gastosFijosTotales) {
      let container = document.getElementById("alertasGastos");

      /*  ASINCRONÍA con setTimeout para que las alertas tarden 2 segundos en aparecer */
      setTimeout(() => {
        container.innerHTML = `
    <div class="border border-danger p-2 rounded-3 mt-4">
      <h6 class="alertaGastos"><b>Alerta Gastos</b></h6>
      <p class="alertaGastos">Tus pretensiones de ingreso: ${moneda} ${ingresos} son mas bajas que tus gastos: ${moneda} ${gastosFijosTotales}. Esperemos que no trabajes como programador.</p>
    </div>
  `;
      }, 2000);
      setTimeout(() => {
        container.innerHTML = `
  `;
      }, 20000);
    }
  }
  const persona1 = new GastosFijos(oficinaInput, softwareInput);
  // DESESTRUCTURACIÓN del objeto creado con el constructor class: persona1
  const { oficina, software } = persona1;
  let gastosFijosTotales = oficina + software;

  if (gastosFijosTotales > ingresos) {
    persona1.resumen(gastosFijosTotales);
  }
};
