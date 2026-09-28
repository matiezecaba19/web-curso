const obj1 = {
  nombre :"Daniel",
  apellido: "Silva",
  nivel : 1,
  admin: true
}

const obj2 = {
  nombre :"Orlando",
  apellido: "Perez",
  nivel : 2,
  admin: false
}

//simulamos data en una lista
const listaUsuarios = [obj1, obj2];


const contenedorUsuarios = document.getElementById('section_tarjetas');

listaUsuarios.forEach(element => {
  contenedorUsuarios.innerHTML += `<div class="tarjeta_usuario">
          <h3>${element.apellido}</h3>
          <h3>${element.nombre}</h3>
          <p>${element.nivel === 1 ? 'Acceso completo' : 'Acceso Restringido'}</p>
          <p>${element.admin ? 'Administrador' : 'Usairo'}</p>
        </div>`;
        //ternario  (condicion) ? secumple  : es falso
        
        //ejemplo
        // const bandera = true; 
        // (bandera) ? 'Es verdadero' : 'Es falso'
});