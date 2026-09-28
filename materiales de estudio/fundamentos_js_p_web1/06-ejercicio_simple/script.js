
//*Leer 3 numeros por teclado y mostrarsu promedio 
//*  (Solo si son numericos)

const nota1 = +prompt(`Ingrese la primer nota: `);  
const nota2 = +prompt(`Ingrese la segunda nota: `);  
const nota3 = +prompt(`Ingrese la tercer nota: `);  


if (isNaN(nota1) || isNaN(nota2)  || isNaN(nota3) ) {
  alert('⚠️ Solo adminitos valores numericos')
  
}else{
  const promedio =  (nota1 + nota2 + nota3 ) / 3;
  alert(`El promedio es : ${promedio.toFixed(2)}`); 
  //.toFixed(2) tranforma a 2 decimales y lo hace string
}




