const boton = document.querySelector(".btn");

boton.addEventListener("click", () => {
  alert("Click en el boton");
});

$(".btn").click(function () {
  console.log("Hola, estoy usando Jquery");
});
