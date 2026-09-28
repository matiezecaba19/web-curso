

alert("Bienvenido a la página");

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let oficio = prompt("Ingrese su oficio");

// prompt o imputs bloqueantes
console.log("Los valores ingresados son: ");
console.log(`nombre: ${nombre}`);
console.log(`apellido ${apellido}`);
console.log(`oficio ${oficio}`);


// para trabajar con numeros en el prompt usar +prompt
// const numero = prompt("Ingrese un numero: ");

// console.log(typeof numero);
// console.log(`El numero es ${ 3 + numero}`);

// const numero = +prompt("Ingrese un numero");

// if (isNaN(numero)) { // is not a number, si es true no es numerico
//   console.log("NO  es numerico");
// }else{
//   console.log("Si es un valor numerico");
// }

// el + lo intentara pasar de string a valor numerico 
const valor = +prompt("Ingrese un numero para sumarlo");

if(isNaN(valor)){ //  is not a number, si es true no es numerico
  console.warn("Solo se permiten valores numericos");
}else{
  console.log(`El valor sumado con 10 es ${valor + 10}`);
  
}

