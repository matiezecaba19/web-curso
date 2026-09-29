// Ejercicio 2: Estructuras condicionales

// 1. Declará una variable "edad" con un número
// Usando if/else, imprimí "Sos mayor de edad" si edad >= 18,
// o "Sos menor de edad" si no.
let edad = 25;
if (edad >= 18){
    console.log(`teniendo ${edad} sos mayor de edad`);
}else{
    console.log(`teniendo ${edad} sos menor de edad`);
}

// 2. Declará dos variables booleanas: "tieneEntrada" y "tieneDNI"
// Si tiene ambas cosas (&&), imprimí "Podés entrar al evento"
// Si no tiene alguna, imprimí "No podés entrar"
let tieneEntrada = true;
let tieneDNI = false;

if (tieneDNI && tieneEntrada){
    console.log('podes entrar');
}else{
    console.log('no puede pasar');
    
    
}

// 3. Declará una variable "nivel" con un número del 1 al 3
// Usando switch, imprimí:
//   1 -> "Nivel principiante"
//   2 -> "Nivel intermedio"
//   3 -> "Nivel avanzado"
//   cualquier otro valor -> "Nivel desconocido"
let nivel = 1;
 
switch (nivel) {
    case 1:
        console.log('nivel principiante');
        break;
    case 2:
        console.log('nivel intermedio');
        break;
    case 3:
        console.log('nivel avanzado');
        break;
    default:
        console.log('nivel desconocido');
        
        break;
}
