
let p = true;
let q = true;

// Ejercicio 3.a 
// fila 1 Not P
let notP = !p;
console.log("El valor de Not p en la fila 1 es: " + notP);

//fila 1 not p And q

let notPandQ = notP && q;
console.log("El valor de Not p AND q es en la fila 1 es:  " + notPandQ);

//------------------------------------
//fila 2

let qfilaDos = false;
//not P fila dos
console.log("El valor de not P en la fila 2 es:    " + notP);

// not p AND q fila dos
let notPAndQFilaDos = notP && qfilaDos;
console.log("El valor de NOT p AND q para la fila 2 es: " + notPAndQFilaDos);


//------------------------------------------
//fila 3. 
let pfilaTres = false;

let notPfilaTres = !pfilaTres;
console.log("El valor de NOT p en la fila tres es:  " + notPfilaTres);

let notPandQFilaTres = notPfilaTres && q;
console.log("El valor de NOT p AND q en la fila tres es: " + notPandQFilaTres);


//-----------------------------
// fila 4. 
let qFilaCuatro = false;
//not q fila cuatro

console.log("El valor de NOT p en la fila 4 es: " + notPfilaTres);

// NOT p AND q 

NotPAndqFilaCuatro = notPfilaTres && qFilaCuatro;
console.log("El valor de NOT p AND q en la fila cuatro es: " +NotPAndqFilaCuatro);



