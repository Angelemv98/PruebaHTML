const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textRojo = document.getElementById('texto-rojo');
const textVerde = document.getElementById('texto-verde');
const textAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textRojo.innerText = rojo;
textVerde.innerText = verde;
textAzul.innerText = azul;

function actColor(r, g, b) {
  const colorRGB = `rgb(${r}, ${g}, ${b})`;
  //Actualiza el body
  document.body.style.backgroundColor = colorRGB
}

// PAra actualizar inputs
inputRojo.addEventListener('change', () => {
  rojo = inputRojo.value;
  textRojo.innerText = rojo;
  actColor(rojo, verde, azul)
})
inputVerde.addEventListener('change', () => {
  verde = inputVerde.value;
  textVerde.innerText = verde;
  actColor(rojo, verde, azul)
})
inputAzul.addEventListener('change', () => {
  azul = inputAzul.value;
  textAzul.innerText = azul;
  actColor(rojo, verde, azul)
})