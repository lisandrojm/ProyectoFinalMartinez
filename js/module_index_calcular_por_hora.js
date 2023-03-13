/////////////////////////////////////////////////////////////////////////////////////////
/* MODULO / EXPORT de main.js /*/ /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// ARROW FUNCTION calcularPorHora para sacar el valor por hora con parámetros dinámicos //

export const calcularPorHora = (
  resultadoIngresos,
  resultadoDias,
  resultadoHoras,
  resultadoGastos,
  resultadoCostos
) => {
  let totalIngresos = resultadoIngresos;
  let totalDias = resultadoDias;
  let totalHoras = resultadoHoras;
  let totalGastos = resultadoGastos;
  let totalCostos = resultadoCostos;
  function porHora(total, dias, horas) {
    return total / (dias * horas);
  }
  let precioPorHora = porHora(totalIngresos, totalDias, totalHoras);
  let gastosPorHora = porHora(totalGastos, totalDias, totalHoras);
  let costosPorHora = porHora(totalCostos, totalDias, totalHoras);
  let precioPorHoraLibreDeGastos =
    precioPorHora + gastosPorHora + costosPorHora;
  return precioPorHoraLibreDeGastos.toFixed(2);
};
