const boton = document.querySelector(".btn-entrar");
const usuario = document.getElementById("user");
const pass = document.getElementById("password");
const span = document.querySelector("span");
const form = document.querySelector(".form");
const seccion = document.querySelector(".seccion-grid");
const menu = document.querySelector(".menu");
const title = document.querySelector(".title");
const marca = document.querySelector(".img-marca");
const productos = document.querySelector(".productos");


const ofertas = document.querySelector(".ofertas");

ofertas.style.display = "none";

boton.addEventListener("click", (event) => {
  event.preventDefault();

  let nombre = "josnny";

  if (usuario.value == nombre && pass.value == 1234) {
    seccion.style.display = "none";
    menu.style.display = "flex";
    title.style.display = "block";
    marca.style.display = "block";
    productos.style.display = "grid";
    ofertas.style.display = "grid"
  } else {
    span.style.display = "block";
  }

  form.reset();
});


 
   
