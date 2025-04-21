let botonElem = document.getElementById('btn-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generarIntAleatorio(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita(){
  let indiceAleatorio = generarIntAleatorio(0, citas.length);
  citaElem.innerText = `"${citas[indiceAleatorio].texto}"`
  autorElem.innerText = `- ${citas[indiceAleatorio].autor}`
}

cambiarCita();

botonElem.addEventListener('click', cambiarCita)
