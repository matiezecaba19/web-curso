

console.log('Hola mundo');

// Better Comments   Autor: Aeron Bond
// plugin/extension para colorear los comentarios
//* FUNCION TRADICIONAL
// ! error
// ? info


// 📌 Definimos la funcion

function miFuncion(){
  console.log('Hola desde la funcion mi funcion');
  
  return 3; // retorna un valor
}

//Llamar a la funcion 
const valorObtenido = miFuncion();
console.log(valorObtenido);

// mandar por parametros
function otraFuncion(num1, num2){

  return num1 + num2;
}


const resultado = otraFuncion(5, 10);

console.log(`El valor obtenido es: ${resultado}`); //alt + 96


// funcion sin return por defecto retorna undefined a menos que
//explicitamente retornemos algo
function simpleFuncion(){
  console.log('un simple mensaje');
  
}

simpleFuncion();

const valor2 = simpleFuncion();

console.log(valor2);// undefined




//* Funciones de flecha - arrow functions

const miFuncionFlecha = () =>{
  // el cuerpo de la funcion
  console.log('Hola desde mi Funcion de Flecha');
  
}

miFuncionFlecha();
 

 // funcion de flecha con return

 const otraFuncionFlecha = (texto) =>{

    return texto;
 }

const resltado2 = otraFuncionFlecha("Hola mundo");

console.log(`El retorno de la funcion flecha es ${resltado2}`);

//reciba 2 numeros por parametro  y que retorne el mayor









// // Funciones Tradicionales

// // crear o definir la funcion
// function miFuncion(mensaje){
//   console.log(mensaje);
  
// }

// const mensaje = "Hola desde constante";

// //invocar o llamar a la funcion
// miFuncion(mensaje);


// function sumar(n1, n2){

//   const resultado = n1 + n2;

//   return resultado;
// }


// const resultado = sumar("Hola", " mundo");

// console.warn(resultado);


// // * Funcion de Flecha
// const miFuncionFlecha = () => {
//   console.log("Mi funcion de flecha");
  
// }

// miFuncionFlecha();


// const miFuncionFlechaResumida = () => console.log("Mi funcion de flecha Resumida");


// miFuncionFlechaResumida();




// //objetos  llave : valor
// const objeto = {
//   id: "ABC-123",
//   nombre: "Marcelo",
//   edad : 30,
//   alta: true
// }

// const objeto2 = {
//   id: "ABC-456",
//   nombre: "Daniel",
//   edad : 15,
//   alta: true
// }


// const arreglo = [objeto, objeto2];



// console.log("obJETOS");


// console.log(objeto.edad);

// if(objeto.edad < 18){
//     console.log("Es menor de edad");
// }else{
//     console.log("Es mayor");
// }


// console.log(arreglo);


// arreglo.forEach(element => {
//     console.log(element.id);
    
// // });