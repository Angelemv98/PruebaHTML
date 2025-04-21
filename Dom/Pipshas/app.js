// const elemnts = document.getElementsByTagName('li')
// console.log(elemnts);

// const marrones = document.getElementsByClassName('fondo-marron')
// console.log(marrones);

//Selecciona siempre el primer con queryselector
// const peppe = document.querySelector('ul li.fondo-naranja')
// const peppe = document.querySelector('ul li:not(.fondo-marron)');
// console.log(peppe);

//Seleccion por lista de nodos
// const toppingsNaranjas = document.querySelectorAll('.topping.fondo-naranja')
// console.log(toppingsNaranjas.length);

//Poner estilos con css mediante JS
//Para entrar basta con poner style y camelcase para el parametro de CSS
//Debemos adquirir primero el elemento por el DOM select
// const primerTopping = document.querySelector('.topping')
// primerTopping.style.backgroundColor = 'red';
// primerTopping.style.color = '#123b21';
// primerTopping.style.textTransform = 'uppercase';

// //Obtener texto por DOM
// const listaDeToppings = document.getElementById('listaToppings')
// //Obtiene los valores de texto
// console.log(listaDeToppings.innerText);
// //Devuelve con identacion
// console.log(listaDeToppings.textContent);
// //Devuelve estructura
// console.log(listaDeToppings.innerHTML);


//Modificacion de texto
// const titulo = document.getElementById('titulo');
// titulo.innerText = "Toppings disponibles 👾👾👾👾👾"

//Modificacion de atributos 
// const enlaces = document.getElementsByTagName('a')
// enlaces[0].getAttribute('href')
// console.log(enlaces[0].getAttribute('href'));
// enlaces[0].removeAttribute('href')
// enlaces[0].setAttribute('href', 'https://www.youtube.com/watch?v=koiPxFFiqJ4&t=3381s' )

//Agregar y modificar clases
// const primerTopping = document.querySelector('.topping')
// console.log(primerTopping.classList);
//Para agregar clase
// primerTopping.classList.add('texto-verde');
//Verificar si existe la clase o la contiene
// console.log(primerTopping.classList.contains('fondo-azul'));
//Eliminar una clase
// primerTopping.classList.remove('topping');
// console.log(primerTopping.classList);


//Creacion de un elemento
// Debe crearce la referencia primero de donde ira
// const litaToppings = document.getElementById('listaToppings');
// const toppingNuevo = document.createElement('li');
// toppingNuevo.innerText = "Morron";
// toppingNuevo.classList.add('topping', 'fondo-marron');
// toppingNuevo.setAttribute('id', 'morron');
// litaToppings.appendChild(toppingNuevo);
//Para eliminarlo debe tener la referencia del objeto del dom
// toppingNuevo.remove();

//Recorrer DOM
// const litaToppings = document.getElementById('listaToppings');
//Para padres
//console.log(litaToppings.parentElement);
//Para elementos hijos
// console.log(litaToppings.firstElementChild);
//console.log(litaToppings.lastElementChild);
//Para obtener elementos hermanos
// console.log(litaToppings.previousElementSibling);
//En caso que haya algo en la siguiente nivel pero que le siga al elemento seria
// console.log(litaToppings.nextElementSibling);

//Eventos del DOM
//Para obtener un listener individual
// const pepperonni = document.getElementById('champ');

// function mostrarClick(e) {
//     console.log(e.target.innerText);
// }

// pepperonni.addEventListener('click', mostrarClick)

//Para agregar listeners multiples con DOM
const toppings = document.getElementsByClassName('topping');

for (const topping of toppings) {
    topping.addEventListener('click',
        (e) => {
            console.log(e.target.innerText);
        }
    )
}
