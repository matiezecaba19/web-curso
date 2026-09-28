
//* Cargar elementos con innerHtml
const caja = document.getElementById('box');
caja.innerHTML += '<p>Un parrafo desde js</p>';
//agrega cadena html


//* Cargar elementos con append
const caja2 = document.getElementById('box_2');
const parrafo = document.createElement('p'); // crea un elemento parrafo
 

parrafo.textContent = 'hola mundo js'; // setea el texto
caja2.append(parrafo); // agrega el elelemnto hijo
  





















// const caja = document.getElementById('box');

// //se crea un elemento html
// const parrafo = document.createElement('p');
// parrafo.textContent = 'Parrafo agregado con append';

// caja.append(parrafo); // agregamos un hijo o un nodo a la caja



// // caja.innerHTML += '<p>Texto dentro de parrafo</p>';

