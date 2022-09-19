/*Crea un archivo llamado fechas.js que contenga las
siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>)
que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento 
(recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento
(con 4 dígitos)  */

const hoy = new Date();
console.log(hoy);

const nacimiento = new Date(2000, 11, 17);
console.log(nacimiento);

const tarde = hoy.getTime() > nacimiento.getDate();
console.log(tarde);

const diaNac = nacimiento.getDate();
console.log(diaNac);

const mesNac = nacimiento.getMonth() + 1;
console.log(mesNac);

const añoNac = nacimiento.getFullYear();
console.log(añoNac);
