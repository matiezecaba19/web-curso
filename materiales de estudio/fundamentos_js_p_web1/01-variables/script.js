

// console.log('Hola mundo');

// 🏳️  Const usamos para declar una constante, este no podra cambiar de valor en la ejecucion del programa

//🏳️ Tipos de Datos
const miConstante = 10; // constante
let miVariable = 'Palabras_de';
let bandera = true;  // boolean
const arreglo = ['Daniel',7,'Silva', true]; // arreglo
let nulo = null ;
let indefinido;

// miConstante = 20;
miVariable = 211;

// console.log(miConstante);
// console.log(miVariable);
// console.log(bandera);
// console.log(arreglo);
// console.log(nulo);
// console.log(indefinido);

console.log("Tipos de Datos************************")

console.log(typeof miConstante + " miConstante");
console.log(typeof miVariable  + " miVariable ");
console.log(typeof bandera + " bandera");
console.log(typeof arreglo + " arreglo");
console.log(typeof nulo + " nulo");
console.log(typeof indefinido + " indefinido");


// Estructura condicional

console.log("Estructura condicional ***************************");

if("10" == 10){ // Comparacion de valor, no de tipo
  console.log("son iguales, SOLO en valor, y no en tipo de dato");
}else{
  console.log("Son distintos, SOLO en valor, y no en tipo de dato");

}

if("10" === 10){ // Comparacion ESTRICTA valor y tipo
  console.log("son iguales, en valor y tipo");
}else{
  console.log("Son distintos, en valor y tipo");

}

// ************* Scope
if(miConstante === 10){
  let variableLocal = 1111;
  console.log(variableLocal);
  
}

console.log(variableLocal); // Tira un error de que no reconoce la variable

// 📌 mostrar variables
// console.log(miConstante);
// console.log(miVariable);
// console.log(bandera);
// console.log(miVariable);
// console.log(indefinido);
// console.log(arreglo);





