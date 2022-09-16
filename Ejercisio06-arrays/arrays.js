/* Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) */
const compras = ["Banana", "Manzana", "Pera", "Kiwi", "Naranja"];
compras.push("Aceite de Girasol");
compras.pop();

const favMovies = [
  {
    titulo: "Tierra de Osos",
    director: "Aaron Blaise, Robert Walker",
    fecha: "2003",
  },
  {
    titulo: "Rapido y Furiosos: Reto Tokyo",
    director: "Justin Lin",
    fecha: "2006",
  },
  {
    titulo: "John Wick",
    director: "Chad Stahelski",
    fecha: "2015",
  },
];
const newMovies = favMovies.filter((favMovies) => favMovies.fecha > 2010);
const directores = favMovies.map((favMovies) => favMovies.director);
const titulos = favMovies.map((favMovies) => favMovies.titulo);
const directoresTitulos = directores.concat(titulos);
const directoresTitulos2 = [...directores, ...titulos];
