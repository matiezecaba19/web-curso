
console.log('Sou un log simple');
console.info('Soy un msj de informacion destacada');

// console.info('Soy un msj de informacion destacada ');

console.warn("Esto es un mensaje de advertencia");
// console.warn('Soy un msj de advertencia');

console.error("Error agresivo");

// console.error(' soy un mensaje de error');

console.clear(); // limpia

const objeto = {
    nombre: "Daniel",
    apellido: "Silva",
    nivel: 3
}

console.log(objeto);

console.table(objeto);

const palabra = "Hola";
const palabra2 = "Mundo";

console.log(palabra+" "+palabra2);


//Concatenar de manera tradicional
const numerico = 10;
const numerico2 = 15;
const numerico3 = 30;
console.log("El valor de numerico es: "+numerico);

//Concatenar con BACKTIKS alt + 96
console.log(`El valor numerico2 en backtiks son:${numerico2} y numerico3 vale ${numerico3}`); //BACKTIKS alt + 96 template

