// La tienda “Mis Zapatos” está de aniversario, por esta razón está realizando 
// un descuento del 50% para compras mayores o iguales a los $100.000 
// COP. Se le pide realizar un algoritmo que reciba el valor de una compra y 
// muestre en consola el valor booleano que indique si la compra recibe o no 
// el descuento.

const valorCompra = prompt("Por favor digite el valor de su compra:");


//Si el valor de la compra es mayor a cien mil devuelve como respuesta true

const operacion = Number(valorCompra) >= 100000;

//si el valor es menor a cien mil devuelve false 
let notOperacion = !operacion;

console.log(operacion);







