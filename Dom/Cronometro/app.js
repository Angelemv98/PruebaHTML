const btnInicioPausa = document.getElementById('boton-inicio-pausa');
const btnReiniciar = document.getElementById('boton-reinicio');

let [horas, minutos, segundos] = [0, 0, 0];

let intervalo;
let estadoTiempo = 'pausado';

function actCrono() {
  segundos++;
  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;
    if (minutos / 60 === 1) {
      minutos = 0;
      horas++
    }
  }
  const cronometro = document.getElementById('cronometro')

  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(horas);

  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;

}

function asignarFormato(unidad) {
  return unidad < 10 ? '0' + unidad : unidad
}

function modifBtnPlay(formatoHTMl, listaQuitar, ListaAgregar, estadodelTiempo) {
  btnInicioPausa.innerHTML = formatoHTMl;
  btnInicioPausa.classList.remove(listaQuitar);
  btnInicioPausa.classList.add(ListaAgregar);
  estadoTiempo = estadodelTiempo
}

btnInicioPausa.addEventListener('click', function () {
  if (estadoTiempo === 'pausado') {
    intervalo = window.setInterval(actCrono, 1000);
    modifBtnPlay('<i class="bi bi-pause-fill"></i>', 'iniciar', 'pausar', 'corriendo')
  } else {
    window.clearInterval(intervalo);
    modifBtnPlay('<i class="bi bi-play"></i>', 'pausar', 'iniciar','pausado' );
  }
})

btnReiniciar.addEventListener('click', function () {
  window.clearInterval(intervalo)
  segundos = 0;
  minutos = 0;
  horas = 0;
  cronometro.innerText = '00:00:00';
  if (estadoTiempo === 'corriendo') {
    modifBtnPlay('<i class="bi bi-play"></i>', 'pausar', 'iniciar','pausado' );
  }

})
