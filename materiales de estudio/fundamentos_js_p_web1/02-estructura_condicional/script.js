


// const letras = '20';
// const numero = 20;

// 📌 Operador de igualdad debe  ser igualdad estricta
// if ( numero === letras) {
//   console.log('Son iguales');
  
// }else{
//   console.log(' Y.. son distintos');
// }

// let valorNoDefinido;
// const valorNulo = null;

// 📌  de comparacion  similar al de igualdad
// if (valorNoDefinido !== valorNulo) {
//     console.log('es, cierto, No son lo mismo');
    
// }else{
//   console.log('false, por q son iguales');
  
// }

// 📌 ||  or   %% and &&
const valor1 = true;
const valor2 = false;

if (valor1 || valor2) { // cualquiera de los 2 ya entra al if
  console.log("Es verdadero");
  
}

const banderra1 = true;
const banderra2 = false;

let error = false;

if (error) { // || or o   && AND
    console.warn('Hay un error, no se puede ingresar,');
    
}else{
  console.log('Se ingresa al sistema, exitosamente !');
  
}
// probar negacion
// let error = true;


if (error === true) { // es igual a if (error)
  console.warn('Hay un error');
  
} else {
   console.log('No hay error, puede seguir con lo demas');
    
}


console.log("Hola mundo desde switch");

const nivel = 0;
// // 📌 Estructura switch

switch (nivel) {
  case 0:
    console.log("es de nivel es 0 NO tiene acceso al sistema");
    break;
  case 1:
    console.log("El nivel es 1 tiene acceso total al sistema");
    
    break;
  case 2:
    console.log("El nivel es 2 tiene acceso parcial al sistema");
    break;
  
    
  default:
    console.log("No es nivel 1 ni 2");
    
    break;
}






