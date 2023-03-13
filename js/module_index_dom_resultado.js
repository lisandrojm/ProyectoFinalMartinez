/////////////////////////////////////////////////////////////////////////////////////////
/* MODULO / EXPORT de main.js /*/ /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
/* funcion que modifica el DOM */

export const domResultado = (
  moneda,
  ingresos,
  dias,
  horas,
  gastosOficina,
  gastosSoftware,
  costosImpuestos,
  otrosCostos,
  porHoraTotal,
  ingresosPretendidosPorHora,
  costosPorHora,
  gastosPorHora
) => {
  /*   objeto Date instanciado para mostrar la fecha del cálculo*/
  const fecha = new Date();

  let container = document.getElementById("dom");
  container.innerHTML = `
  <!-- START domResultado -->
  <div>
    <div
      class="row justify-content-evenly rounded-3 resultado"
    >
      <div>
        <h5 class="text-black"><b>Resultado</b></h5>
      </div>
      <div class="border-top">
        <p class="pt-2">
          Para ganar <b>${moneda} ${ingresos}</b> mensuales, trabajando <b>${horas}</b> horas por
          día durante <b>${dias}</b> días por mes debes cobrar:<br>
          <b><span class="moneda">${moneda}</span><span class="porHora"> ${porHoraTotal}</span>  x Hora.</b>
        </p>
      </div>

      <!-- start accordion -->
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Detalle
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div>
                <div class="row justify-content-evenly pt-0">
                <div class="d-flex justify-content-end">
                  <div class="fecha">${fecha.toDateString()}</div>
                </div>
                  <div>
                    <h5>Datos Ingresados</h5>
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Detalle</th>
                        <th scope="col">Ingreso</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Moneda</td>
                        <td class="table_align">${moneda}</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Ingreso pretendido</td>
                        <td class="table_align">${ingresos}</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Días pretendidos por Mes</td>
                        <td class="table_align">${dias}</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Horas por día</td>
                        <td class="table_align">${horas}</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Gastos de Oficina mensuales</td>
                        <td class="table_align">${gastosOficina}</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>Gastos de Software mensuales</td>
                        <td class="table_align">${gastosSoftware}</td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>Costo mensual de impuestos</td>
                        <td class="table_align">${costosImpuestos}</td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td>Otros costos mensuales</td>
                        <td class="table_align">${otrosCostos}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <h5>Reporte x Hora</h5>
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Detalle</th>
                        <td class="table_align"><b>${moneda}</b></td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Ingresos pretendidos por hora</td>
                        <td class="table_align">${ingresosPretendidosPorHora}</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Gastos por hora</td>
                        <td class="table_align">${gastosPorHora}</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Costos por hora</td>
                        <td class="table_align">${costosPorHora}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      <!-- end accordion -->
      <div>
        <div class="text-center p-3 mt-3 rounded-3 talentos">
          <h6 class="text-black">
            <b>Contacta buscadores de freelancers</b>
          </h6>
          <div class="d-grid gap-2 pt-1">
            <a href="views/users.html" class="btn btn-primary mt-0" target="_blank"
            >Freelo Hunters</a>
          </div>
        </div>
        <div class="d-grid gap-2 pt-3">
          <a href="index.html" class="btn btn-secondary"
          >Volver a Calcular</a
          >
        </div>
        <div id="alertasGastos"></div>
        <div id="alertasCostos"></div>
        <div id="alertasDiasYHoras"></div>
      </div>
    </div>
    <div class="text-light row justify-content-evenly pt-4"></div>
  </div>
  <!-- END domResultado -->
  `;
};
