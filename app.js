

const boton = document.querySelector(".boton a");
const boton2 = document.querySelector(".boton .a2")
const bombilla = document.querySelector(".fondo .bomb1");
const bombilla2 = document.querySelector(".fondo .bomb2");
const audio = document.querySelector("#audio")



let apretar = function(){

bombilla.classList.toggle("luz1");
bombilla.classList.toggle("bomb1");
bombilla2.classList.toggle("luz2");
bombilla2.classList.toggle("bomb2");
boton.classList.toggle("a2");
bombilla.classList;
audio.play();

}


boton.addEventListener("click", apretar);