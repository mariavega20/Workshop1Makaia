//ejercicio 3 tabla b. 
let p = true;
let q = true;

// fila 1
//Not p, not q

let notP = !p;
console.log("El valor de NOT p para la fila 1 es:  " +notP);

let notQ = !q;
console.log("El valor de NOT q para la fila 1 es:  " +notQ);

// NOt p AND nor Q

let notPandNotQ = notP && notQ;
console.log("El valor de NOT p AND Not q para la fila 1 es: " + notPandNotQ);


//------------------------------
//fila 2

let qFilaDos = false;

let notQfilaDos = !qFilaDos;

console.log("El valor de NOT p para la fila 2 es: "  + notP);

console.log("El valor de NOT q para la fila 2 es: " + notQfilaDos);

let notPandNotQFilaDos =  notP && notQfilaDos;
console.log("El valor de NOT p AND Not q para la fila 2 es: " + notPandNotQFilaDos);

//--------------------------
// fila 3

let pFilaTres = false;

let notPfilaTres = !pFilaTres;

console.log("El valor de NOT p para la fila 3 es:"  + notPfilaTres);

console.log("El valor de NOT q para la fila 3 es:"  + notQ);

let notPandNotQFilaTres  = notPfilaTres && notQ;
console.log("El valor de NOT p AND NOT q para la fila 3 es:"  + notPandNotQFilaTres);


//---------------------------
//fila 4
pFilaCuatro = false;

qFilaCuatro = false;

let notpFilaCuatro = !pFilaCuatro;
console.log("El valor de NOT p para la fila 4 es:"  + notpFilaCuatro);

let notqFilaCuatro = !qFilaCuatro;

console.log("El valor de NOT q para la fila 4 es:"  + notqFilaCuatro);


let notPandNotqFilaCuatro = notpFilaCuatro && notqFilaCuatro;
console.log("El valor de NOT p AND NOT q para la fila 4 es:"  + notPandNotqFilaCuatro);
