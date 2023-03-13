/////////////////////////////////////////////////////////////////////////////////////////
/* MODULOS / IMPORT / importación de funciones */ ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
import { alertaCostos } from "./module_index_alerta_costos.js";
import { monedaAbreviada } from "./module_index_moneda_abreviada.js";
import { gastosTotalesEnObjeto } from "./module_index_gastos_totales_en_objeto.js";
import { costosTotalesEnArray } from "./module_index_costos_totales_en_array.js";
import { alertaDiasYHoras } from "./module_index_alerta_dias_y_horas.js";
import { alertaGastos } from "./module_index_alerta_gastos.js";
import { calcularPorHora } from "./module_index_calcular_por_hora.js";
import { domResultado } from "./module_index_dom_resultado.js";
import { calcularTotalPorHora } from "./module_index_calclular_total_por_hora.js";

////////////////////////////////////////////////////////////////////////////////////////
/* FUNCIÓN MAIN / función contenedora que ejecuta todas las funciones */ ////////////////
/////////////////////////////////////////////////////////////////////////////////////////

const main = (e) => {
  e.preventDefault();

  ///////////////////////////////////////////////////////////////////////////////////////
  /* VARIABLES / inputs del formulario en variables para gestionarlas*/ /////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  /*  moneda */
  let monedaInput = document.getElementById("monedaInput").value;

  /*  declaración de la variable moneda igualándola a la función que convierte la moneda
  ingresada en la abreviatura dolar/USD euros/EUR */
  let moneda = monedaAbreviada(monedaInput);

  /* ingresos */
  let ingresos = parseInt(document.getElementById("ingresosInput").value);

  /* dias */
  let dias = parseInt(document.getElementById("diasInput").value);

  /* horas */
  let horas = parseInt(document.getElementById("horasInput").value);

  /* gastos */
  let gastosOficina = parseInt(document.getElementById("oficinaInput").value);

  let gastosSoftware = parseInt(document.getElementById("softwareInput").value);

  /* costos */
  let costosImpuestos = parseInt(
    document.getElementById("impuestosInput").value
  );

  let costosOtros = parseInt(document.getElementById("otrosCostosInput").value);

  ///////////////////////////////////////////////////////////////////////////////////////
  /* FUNCIONES / ejecución de funciones para sacar los cálculos */ //////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  /* ejecución de la función que calcula los gastos totales mensuales en un OBJETO */
  /* se le pasan como parametros los las variables que reciben los valores de los inputs */
  let totalGastos = gastosTotalesEnObjeto(gastosOficina, gastosSoftware);

  /* ejecución de la función que calcula los costos totales mensuales en un ARRAY */
  /* se le pasan como parametros los las variables que reciben los valores de los inputs */
  let totalCostos = costosTotalesEnArray(costosImpuestos, costosOtros);

  /* ejecución de la función que calcula costos por hora */
  calcularPorHora(ingresos, dias, horas, totalGastos, totalCostos, moneda);

  /* declaración de una variable para igualarla al resultado de calcularPorHora y que retorne el valor */
  let porHoraTotal = calcularPorHora(
    ingresos,
    dias,
    horas,
    totalGastos,
    totalCostos
  );

  /* ejecución de la ARROW FUNCTION calcularTotalPorHora/ ABSTRACCIÓN para calcular el
   total por hora con parámetros dinámicos y reutilizar en Ingresos pretendidos,
   Gastos fijos y Costos de vida mensuales. */
  /* total por hora ingresos */
  calcularTotalPorHora(ingresos, dias, horas);
  let ingresosPretendidosPorHora = calcularTotalPorHora(ingresos, dias, horas);

  /* total por hora gastos */
  calcularTotalPorHora(totalGastos, dias, horas);
  let gastosPorHora = calcularTotalPorHora(totalGastos, dias, horas);

  /* total por hora costos */
  calcularTotalPorHora(totalCostos, dias, horas);
  let costosPorHora = calcularTotalPorHora(totalCostos, dias, horas);

  ///////////////////////////////////////////////////////////////////////////////////////
  /* DOM / ejecución de la función que modiifica el dom*/ ///////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  /* recibe como parámetros las variables declaradas y muestra los datos ingresados,
  calculos y alertas*/
  domResultado(
    moneda,
    ingresos,
    dias,
    horas,
    gastosOficina,
    costosImpuestos,
    gastosSoftware,
    costosOtros,
    porHoraTotal,
    ingresosPretendidosPorHora,
    costosPorHora,
    gastosPorHora
  );
  ///////////////////////////////////////////////////////////////////////////////////////
  /* ALERTAS / ejecución de las alertas en el dom*/ /////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  /* ejecución de alertas dinámicas que se ejecutan de acuerdo a cálculos de los datos 
  ingresados */
  alertaDiasYHoras(dias, horas);
  alertaCostos(costosImpuestos, costosOtros, moneda);
  alertaGastos(gastosOficina, gastosSoftware, ingresos, moneda);
};

////////////////////////////////////////////////////////////////////////////////////////
//* EVENTOS *///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
let btnMoneda = document.getElementById("btn");
btnMoneda.addEventListener("click", main);
