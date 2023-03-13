/////////////////////////////////////////////////////////////////////////////////////////
/* js de /views/users.html*/ ////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
/*  ASINCRONÍA con setTimeout para que las alertas tarden 2 segundos en aparecer */
setTimeout(() => {
  /////////////////////////////////////////////////////////////////////////////////////////
  /*  LIBRERÍA Sweat Alert */
  swal({
    title: "Importante!",
    text: "Freelo Hunters recomienda solicitar referencias del emprendedor antes de tomar un trabajo.",
    icon: "info",
    button: "Entiendo",
  });
}, 2000);

/////////////////////////////////////////////////////////////////////////////////////////
/* API / await y fecth / asincronía */ ////////////////////////////////////////////////////////////
/* consumo de la API https://randomuser.me/  */

const boton = document.querySelector("#boton");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const telefono = document.querySelector("#telefono");
const foto = document.querySelector("#foto");

const generarUsuario = async () => {
  //consultar a la API
  const url = "https://randomuser.me/api/";
  const respuesta = await fetch(url);
  const { results } = await respuesta.json();
  const datos = results[0];

  foto.src = datos.picture.medium;
  nombre.textContent = datos.name.first;
  correo.textContent = datos.email;
  telefono.textContent = datos.phone;
};

//crear un evento
document.addEventListener("DOMContentLoaded", generarUsuario);
boton.addEventListener("click", generarUsuario);

/////////////////////////////////////////////////////////////////////////////////////////
/*  PROMISES / juego de acertar número del 1 al 10 con asincronía setTimeOut y Promises */
setTimeout(() => {
  let container = document.getElementById("sorteo");
  container.innerHTML = `
            <div>
              <h5 class="pt-2 border-top border-3 mt-3"><b>Prueba tu suerte</b> antes de continuar!</h5>
            </div>
            <p>Adivina un número del 1 al 10:</p>
            <div class="input-group mb-3">
              <input
              type="number"
              id="guessInput"
              class="form-control"
              placeholder="1 al 10"
              aria-label=""
              aria-describedby="basic-addon1"
              />
              <div class="input-group-prepend">
                <button class="btn btn-primary ms-2" type="submit" id="guessButton">Adivinar</button>
              </div>
            </div>
            <p id="message" class="fw-bold"></p>
`;
  const guessInput = document.getElementById("guessInput");
  const guessButton = document.getElementById("guessButton");
  const message = document.getElementById("message");

  function getRandomNumber() {
    return Math.ceil(Math.random() * 10);
  }

  function checkGuess(guess) {
    /* Promise */ ////////////////////////////////////////////////////////////
    return new Promise((resolve, reject) => {
      const randomNumber = getRandomNumber();

      if (guess === randomNumber) {
        resolve(
          `Es tu día de suerte. Quizás encuentres el trabajo de tus sueños. Sigue buscando`,
          setTimeout(() => {
            container.innerHTML = `
        `;
          }, 4000)
        );
      } else {
        reject(
          `Lo lamento, el número era ${randomNumber}. No sería hoy tu día de suerte. Quizás no es un buen día para buscar trabajo.`,
          setTimeout(() => {
            container.innerHTML = `
        `;
          }, 5000)
        );
      }
    });
  }

  guessButton.addEventListener("click", () => {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 10) {
      message.innerText = "Ingresa un número válido!";
    } else {
      checkGuess(guess)
        .then((result) => {
          message.innerText = result;
        })
        .catch((error) => {
          message.innerText = error;
        });
    }
  });
}, 8000);
