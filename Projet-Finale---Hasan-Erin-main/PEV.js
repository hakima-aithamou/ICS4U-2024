const Menu = document.getElementById("BtnMenu");
const lemonade = document.getElementById("Lim");
const btnPanier = document.getElementById("PC")
let ident = document.getElementById("identité")
let g1 = document.getElementById("header-gauche")
let g2 = document.getElementById("header-gaucheC")

    Menu.addEventListener("click", function change(){
    window.location.href = "menu.html";
})
 lemonade.addEventListener("click", function change(){
    window.location.href = "lim.html";
})
// Authentification
let Auth = JSON.parse(localStorage.getItem('Auth'));
ident.innerHTML = Auth.nom;
if (Auth.bool = true){
  g1.style.display = "none";
  g2.style.display = "block";
}
else{
  g2.style.display = "none";
  g1.style.display = "block";
}
btnPanier.addEventListener("click", function change(){
    window.location.href = "panier.html";
})