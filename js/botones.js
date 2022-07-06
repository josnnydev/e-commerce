const trash1 = document.querySelectorAll("#btn-trash");
const tshirt1 = document.querySelectorAll(".tshirt");
console.log(trash1);

trash1.forEach((add) => {
  add.addEventListener("click", ver);
});

function ver(event) {
  const btn = event.target;
  const item = btn.closest(".tshirt");
  console.log(item);
  const { value: yes } = swal
    .fire({
      title: "Seguro que quieres borrar el producto?",
      confirmButtonText: "yes",
      denyButtonText: "No",
      showDenyButton: true,
      showCancelButton: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Borrado!", "", "success");
        item.remove();
      } else if (result.isDenied) {
        Swal.fire("Cambios no guardados", "", "info");
      }
    });
}
