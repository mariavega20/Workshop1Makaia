// Crear una fórmula para saber si un número es o no es un múltiplo de 2

const numero = prompt("Ingrese un numero entero");

//Devolvera true si el numero es multiplo de dos
const multiploDos =  Number(numero) / 2 === 0;

//devolvera false si el numero no es multiplo de 2
let notMultiplo = !multiploDos;
console.log(multiploDos);

