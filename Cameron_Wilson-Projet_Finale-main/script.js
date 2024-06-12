let imgMain = document.querySelector(".main-img");
let btnRight = document.querySelector("#right");
let btnLeft = document.querySelector("#left");
// let lstImg = [
//   ressources / HomePage / Osgoode124.jpeg,
//   ressources / HomePage / Bank931.jpeg,
//   ressources / HomePage / Innovation5055.jpeg
// ];
let i = 0;

btnRight.addEventListener("click", right())
function right() {
  i++;
  if (i = 3)
    i = 0;
  imgMain.style.backgroundImage = lstImg[i];
}
btnLeft.addEventListener("click", left())
function right() {
  i--;
  if (i = -1)
    i = 2;
  imgMain.style.backgroundImage = lstImg[i];
}

imgMain.style.backgroundImage = lstImg[i];



let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");
let img5 = document.querySelector("#img5");
let img6 = document.querySelector("#img6");
let img7 = document.querySelector("#img7");
let img8 = document.querySelector("#img8");
let lstpic = [img1, img2, img3, img4, img5, img6, img7, img8]