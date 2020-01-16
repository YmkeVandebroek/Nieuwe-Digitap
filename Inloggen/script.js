//Koppelen van beide pagina's... vreemdgenoeg niet mogelijk op normale manier
let logo = document.getElementsByClassName("logo")[0];
logo.addEventListener("click", switchPagina);
function switchPagina(){
  console.log("switchPagina werkt!");
  window.location.href = "home.html";
}

//en koppelen van nog meer buttons... misschien belachelijk... maar dit gaat ook gemakkelijk zo
let button1Footer = document.getElementsByClassName("footerlinks")[0];
let button2Footer = document.getElementsByClassName("footerlinks")[1];
button1Footer.addEventListener("click", appleStore);
button2Footer.addEventListener("click", googlePlay);
function googlePlay(){
  console.log("googlePlay werkt!");
  window.location.href = "https://play.google.com/store/apps/details?id=com.moodle.moodlemobile";
}
function appleStore(){
  console.log("appleStore werkt!");
  window.location.href= "https://apps.apple.com/be/app/moodle/id633359593?l=nl";
}
