const editar = document.querySelectorAll("#btn-edit");


editar.forEach(x => {
    x.addEventListener("click", test);
});
 

function test(e){
    console.log("hola")
    const ver = e.target;
  const it = ver.closest(".tshirt");
  console.log(it);
}