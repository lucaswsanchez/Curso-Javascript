//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia breaklet factorial = 1
var factorial = 1;
var num = 10;
while (true) {
  factorial *= num;
  num--;
  if (num === 1) break;
}
console.log(factorial);
