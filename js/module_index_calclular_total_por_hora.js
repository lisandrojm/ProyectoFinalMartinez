/////////////////////////////////////////////////////////////////////////////////////////
/* MODULO / EXPORT de main.js /*/ /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

// ARROW FUNCTION / ABSTRACCIÓN para calcular el total por hora con parámetros dinámicos y reutilizar en Ingresos pretendidos, Gastos fijos y Costos de vida mensuales.
export const calcularTotalPorHora = (
  resultado,
  resultadoDias,
  resultadoHoras
) => {
  let total = resultado;
  let totalDias = resultadoDias;
  let totalHoras = resultadoHoras;
  function porHora(total, dias, horas) {
    return total / (dias * horas);
  }
  let precioPorHora = porHora(total, totalDias, totalHoras);
  return precioPorHora.toFixed(2);
};
