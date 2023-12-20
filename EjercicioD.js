// Diseñe un algoritmo que lea o reciba el nombre de un empleado, su salario 
// básico por horas y el número de horas trabajadas en un mes y realice lo 
// siguiente:
// i. Calcular su salario básico mensual
// ii. Determinar si recibe o no subsidio de transportes. Un empleado 
// recibe este subsidio cuando el salario mensual básico es menor o 
// igual a $700.000 COP
// iii. Mostrar en consola el nombre del empleado, su salario básico 
// mensual y si recibe o no subsidio de transporte.

const nombreEmpleado = prompt("Digite el nombre del empleado");
const salarioBasicoXhoras = prompt("Digite su salario Basico por el número de horas trabajadas");
const horasTrabajadas = prompt("Digite el número de horas trabajadas");

//i. calculo salario basico mensual 
let calculoSalario = salarioBasicoXhoras * horasTrabajadas;



// ii. Determinar si recibe o no subsidio de transportes. Un empleado  recibe este subsidio cuando el salario 
//mensual básico es menor o  igual a $700.000 COP

let subsidioDetransporte = calculoSalario <= 700000;

let NosubsidioTransporte = !subsidioDetransporte;

//iii. Mostrar en consola el nombre del empleado, su salario básico 
// mensual y si recibe o no subsidio de transporte.

console.log("El nombre de empleado es:" + nombreEmpleado);

console.log("Su salario básico mensual es: $ "+ calculoSalario +  "COP");


console.log("¿El empleado recibe subsidio de tranporte:?  " + subsidioDetransporte);



