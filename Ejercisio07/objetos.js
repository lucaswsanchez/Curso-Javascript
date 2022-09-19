/*Crea un archivo llamado objetos.js que contenga
las siguientes líneas

- Un objeto con tus datos personales
(nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir 
del objeto anterior

- Una lista que contenga el objeto con tus 
datos personales y un nuevo objeto con los datos personales
de tus dos mejores amig@s

- Una nueva lista con los objetos de la 
lista anterior ordenados por edad, de mayor a menor */

const me = {
  nombre: "Lucas",
  apellido: "Sanchez",
  edad: 21,
  altura: 1.83,
  eresDesarrollador: true,
};
edad = me.edad;

const amigos = [
  me,
  {
    nombre: "Juan",
    apellido: "Flores",
    edad: 22,
    altura: 1.7,
    eresDesarrollador: false,
  },
  {
    nombre: "Kevin",
    apellido: "Quevedo",
    edad: 23,
    altura: 1.75,
    eresDesarrollador: false,
  },
];

const order = amigos.sort((a, b) => a.edad - b.edad);
