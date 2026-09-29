// Ejercicio 3: Variables (repaso)

// 1. Declará 3 constantes: "precioProducto", "cantidad" y "descuentoPorcentaje"
// (por ejemplo: precio 1000, cantidad 3, descuento 10)
const precioProducto = 100;
const cantidad = 10;
const descuentoPorcentaje = 10;
// 2. Calculá el "subtotal" (precioProducto * cantidad) y guardalo en una variable
let subtotal = precioProducto * cantidad;
// 3. Calculá el "totalConDescuento" restando el descuento al subtotal
// pista: descuento en $ = subtotal * (descuentoPorcentaje / 100)
let descuento =  subtotal * (descuentoPorcentaje / 100);
let totalConDescuento = subtotal - descuento;
// 4. Imprimí un resumen usando template literals, por ejemplo:
// "Subtotal: $3000, Descuento: 10%, Total a pagar: $2700"
console.log(`subtotal: $${subtotal}, descuento: ${descuento}, total a pagar: ${totalConDescuento}`);


// 5. Usá typeof para verificar el tipo de dato de "totalConDescuento"
// y de una constante nueva "nombreCliente" (string)
const nombre = " matias";
console.log(typeof totalConDescuento);
console.log(typeof nombre);

