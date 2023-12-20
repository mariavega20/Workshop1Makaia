// Considerando que 𝑎 = 4, 𝑏 = 7, 𝑐 = 2𝑏, 𝑥 = 𝑎 , 𝑦 = 3𝑥, 𝑢 = 6, 𝑤 = 10; crear 
// un algoritmo con JavaScript que realice y muestre el resultado en consola de las 
// siguientes operaciones algebraica:
//a. a/(b*c)
// b. (a^2) + b^92
// c. (x+y) / u+(w/a)
//d. x/y * (z+w)

let a = 4;
let b = 7;
let c = 2*b;
let x = a;
let y = 3*x;
let u = 6;
let w = 10; 
let z = 8;

//a. a/(b*c)
const operacionA = a / (b*c);
console.log("El resultado de la operación a es:  " + operacionA);

// b. (a^2) + b^92

const operacionB = (a ** 2) + b**92;
console.log("El resultado de la operación B es: " + operacionB);

// c. (x+y) / u+(w/a)
const operacionC = x + y  % u + (w / a);
console.log("El resultado de la operación C es: " + operacionC);

//d. x/y * (z+w)
const operacionD = x / y * (z + w);
console.log("El resultado de la operación D es:  " + operacionD); 






