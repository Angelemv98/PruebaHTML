//ejercicio 1

// function esMayor (a,b){
//     return a>b ? 'El numero '+a+', es mayor que '+b : 'El numero '+b+', es mayor que '+a;
// }

// console.log(esMayor(1231,30));

//ejercicio 2
// function resolucion(ancho, alto){
//     if(ancho>=7680 && alto>= 4320){
//         return "8k";
//     }
//     else if(ancho>=3840 && alto>= 2160){
//         return "4k";
//     }
//     else if(ancho>=2560 && alto>= 1440){
//         return "2k";
//     }
//     else if(ancho>=1920 && alto>= 1080){
//         return "FHD";
//     }
//     else if(ancho<=1280 && alto<= 720){
//         return "HD";
//     }
//     else{
//         return "SD";
//     }

// }

// console.log(resolucion(200,300))

//Ejercicio 3
// function getIndx(arr, idx){
//     if(idx<0 || arr.lenght <= idx || idx>arr.length){
//         return 'No existe'
//     }
//     return arr[idx]
// }
// console.log(getIndx(['No se que pedo', 123412, 1234 ,1234],6))

//Ejercicio 4
// function impar(){
//     for(let num =0; num<=10; num++){
//         if(num%2!=0)
//             console.log('Impar '+num)
//     }
// }
// impar()

// //Ejercicio 5 
// const array = [123,423,43123,-23,-432,-123];

// function minMaxArr(cadena){
//     let menor = cadena[0];
//     let max = cadena[0];
//     for(num of cadena){
//         menor = menor < num ? menor : num;
//         max = max > num ? max : num;
//     }
//     return [menor, max];
// }
// console.log(minMaxArr(array));

//Ejercico 6 
//  const array = [-123123,-23,32123421,-123,-4342123,423,43123,-23,-432,-123];
//  function countPositive(nums) {
//     let count = 0;
//     for (num of nums){
//         count = num>0 ? count+1 : count;
//     }
//     return count
//  }
//  console.log(countPositive(array));

 //Ejercicio 7
// function tax(prize, tax) {
//     return (prize * tax) + prize;
// }
// console.log(tax(100.99, 0.10));

