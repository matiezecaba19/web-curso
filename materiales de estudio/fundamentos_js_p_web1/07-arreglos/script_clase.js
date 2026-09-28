
//Arreglos

const miConstante = 3;

const arreglo = ["Primer_elemento", "Segundo",44, true,55];


console.log(arreglo);


// 📌 Agregar elementos
// arreglo.push(miConstante);
// arreglo.push("Para eliminar")
// console.log(arreglo);

//📌 elimina el ultimo elemento
// arreglo.pop();
// console.log(arreglo);

//📌  muestra el primer elemento
// console.log(`El elemento es ${arreglo[0]}`);
// console.log(arreglo[2]);




//📌  muestra el tamaño de la lista o el total de elementos
// arreglo.length
console.log(`La cantidad de elemtos en la lista es : ${arreglo.length}`);


//Recorrer el arreglo

console.log("Los elementos del arreglo son: ");

for (let index = 0; index < arreglo.length; index++) {
  // const element = array[index];
  console.log(arreglo[index]);
  
}



//filtrar arreglo 
const numeros = [50, 20, 10, 200, 345, 60];

// const menores = numeros.filter( (parametro) => parametro >= 50);

// console.log("Los elementos filtrados menores a 50 son :");
// console.log(menores);


const nombres = ["Daniel", "Orlando", "Ana", "Gabriel"];

//📌 Ordena la lista alfabeticamente
// const ordenada = nombres.sort();

// numeros.sort();

// console.log(nombres);
// console.log("La lista ordenada es");

// console.log(ordenada);
//⚠️ los numeros los ordena solo respetando el primer numero
// console.log(numeros);

// 📌 Existe el elemento en la lista
if (numeros.includes(404)) { // en este caso si existe el 404
  console.log("Si existe el elemento");
  
}else{
  console.log("No existe");
}

// pasar a todo mayuscula
const palabra2 = "palabra"; 
console.log(palabra2.toUpperCase()); // tranforma a mayuscula

const palabra3 = "MAYUSCULAS";

console.log(palabra3.toLocaleLowerCase()); // tranforma a miniscula


// 📌 Filtra mayores a 50
// const mayores = numeros.filter( (elemento) =>  elemento > 50 );
// console.log(`mayores: ${mayores}`);

//📌 Agrega a la ultima posicion
// mayores.push(200);

// console.log(mayores);

//📌 Quita el ultimo elemento
// mayores.pop();
// console.log(mayores);


//* consultar documentacion oficial MDN Javascript para mas infromacion de arreglos
//* hay muchos metodos para los arreglos
//* filtrar, buscar, ordenar, quitar primero, quitar ultimo, agregar primero
//* agregar ultimo, cortar etc...
















// 📌 arreglo.push() agrega un elemento a la lista, y nos retorna la cantidad o el .length
// 📌 arreglo.pop() elimina el ultimo elemento del array y te devuelve ese ultimo elemento
// 📌 arreglo.shift() elimina el primer elemento del array y te devuelve ese primer elemento
// 📌 arreglo.unshift("Daniel") agrega un elemento al inicio del array y retorna la longitud del
//    array o el .length