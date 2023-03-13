/////////////////////////////////////////////////////////////////////////////////////////
/* MODULO / EXPORT de main.js /*/ /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ALERTA con operador lógico y condicionales anidados */
/* funcion para enviarle una alerta al usuario por DOM se */

export function alertaDiasYHoras(dias, horas) {
  /* OPERADOR LÖGICO && */
  /* CONDICIONALES ANIDADAS */
  if (dias > 15 && dias < 23) {
    let container = document.getElementById("alertasDiasYHoras");

    container.innerHTML = `
  `;
  } else if (dias > 23 && horas > 8) {
    let container = document.getElementById("alertasDiasYHoras");

    /*  ASINCRONÍA con setTimeout para que las alertas tarden 2 segundos en aparecer */
    setTimeout(() => {
      container.innerHTML = `
    <div class="border border-success p-2 rounded-3 mt-4">
      <h6 class="alertaDias"><b>Alerta Días/Horas</b></h6>
      <p class="alertaDias">Pretendes trabajar muchos días y muchas horas en relación a la media. Cuida tu salud.</p>
    </div>
  `;
    }, 2000);
    setTimeout(() => {
      container.innerHTML = `
  `;
    }, 20000);
  } else if (dias > 27) {
    let container = document.getElementById("alertasDiasYHoras");

    setTimeout(() => {
      container.innerHTML = `
    <div class="border border-success p-2 rounded-3 mt-4">
      <h6 class="alertaDias"><b>Alerta Días</b></h6>
      <p class="alertaDias">Pretendes trabajar muchos días en relación al promedio de lo que trabaja un programador. Puede no ser sostenible a largo plazo.</p>
    </div>
  `;
    }, 2000);
    setTimeout(() => {
      container.innerHTML = `
  `;
    }, 20000);
  } else if (dias < 10) {
    let container = document.getElementById("alertasDiasYHoras");

    setTimeout(() => {
      container.innerHTML = `
    <div class="border border-success p-2 rounded-3 mt-4">
      <h6 class="alertaDias"><b>Alerta Días</b></h6>
      <p class="alertaDias">Pretendes trabajar pocos días en relación al promedio de lo que trabaja un programador. Debes ser muy bueno.</p>
    </div>
  `;
    }, 2000);
    setTimeout(() => {
      container.innerHTML = `
  `;
    }, 20000);
  } else if (horas < 4) {
    let container = document.getElementById("alertasDiasYHoras");

    setTimeout(() => {
      container.innerHTML = `
    <div class="border border-succes p-2 rounded-3 mt-4">
      <h6 class="alertaDias"><b>Alerta Horas</b></h6>
      <p class="alertaDias">Pretendes trabajar pocas horas en relación a la media.</p>
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
