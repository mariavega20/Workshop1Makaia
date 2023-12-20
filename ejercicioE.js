// Hacer un algoritmo con JavaScript que reciba cualquier letra del 
// abecedario y muestre en consola el valor booleano que indique si es o no 
// una vocal.

const letra = prompt("Ingrese una letra");

// verifica si es una vocal 
let siEsVocal = /[aeiouAEIOU]/.test(letra)


// devuelve false si no es una vocal
let noVocal = !siEsVocal;
console.log(siEsVocal);
