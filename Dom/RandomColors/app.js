//Seleccionar elementos
const btnColor = document.getElementById('btnColor');
const color = document.getElementById('color')


function generarColorHexAleatorio(){
    let digitos = '0123456789ABCDEF';
    let colorHexAleatorio = '#';

    for(let i=0 ; i<6; i++ ){
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHexAleatorio += digitos[indiceAleatorio];
    }
    return colorHexAleatorio
}

btnColor.addEventListener('click', function() {
    let colorAleatorio = generarColorHexAleatorio();
    //Se actualiza el texto y el fondo
    color.textContent = colorAleatorio;
    document.body.style.background = colorAleatorio;
    btnColor.style.background = colorAleatorio;
})
