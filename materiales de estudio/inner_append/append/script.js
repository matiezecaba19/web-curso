

const obj1 = {
    id: 1,
    nombre: "Daniel",
    apellido: "Mendez",
    nivel: 1,
    isAdmin: true
}
const obj2 = {
    id: 2,
    nombre: "Orlando",
    apellido: "Gimenez",
    nivel: 2,
    isAdmin: true
}
const obj3 = {
    id: 3,
    nombre: "Rojelio",
    apellido: "Peralta",
    nivel: 2,
    isAdmin: false
}
const obj4 = {
    id: 5,
    nombre: "Patricia",
    apellido: "Sosa",
    nivel: 3,
    isAdmin: true
}

const listaUsuarios = [obj1,obj2,obj3,obj4];

// console.log(listaUsuarios);

const contenedorUsuarios = document.getElementById('section_tarjetas');


const cargarUsuarios = () =>{
  
  

  listaUsuarios.forEach(element => {
    const tarjeta = document.createElement('div'); // elemnto creado
    tarjeta.classList.add('tarjeta_usuario'); // agrega la clase
    const h3Apellido = document.createElement('h3'); // crea un h3
    h3Apellido.textContent = element.apellido; // setea el valor al h3
    const h3Nombre = document.createElement('h3');
    h3Nombre.textContent = element.nombre;
    const parrafoNivel = document.createElement('p'); // crea un parrafo
    const parrafoAdmin = document.createElement('p'); // crea un parrafo
    parrafoNivel.textContent = element.nivel; // setea el valor
    parrafoAdmin.textContent = element.isAdmin;
    tarjeta.append(h3Apellido, h3Nombre, parrafoNivel, parrafoAdmin);
    contenedorUsuarios.append(tarjeta);
  });

}

cargarUsuarios();