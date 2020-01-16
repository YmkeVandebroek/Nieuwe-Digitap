//Koppelen van beide pagina's... vreemdgenoeg niet mogelijk op normale manier
let logo = document.getElementsByClassName("logo")[0];
logo.addEventListener("click", switchPagina);
function switchPagina(){
  console.log("switchPagina werkt!");
  window.location.href = "index.html";
}
