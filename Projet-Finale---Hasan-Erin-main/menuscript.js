const PEV = document.getElementById("PEV");
const btnPanier = document.getElementById("PC")
let ident = document.getElementById("identité")
let g1 = document.getElementById("header-gauche")
let g2 = document.getElementById("header-gaucheC")

  PEV.addEventListener("click", function change(){
    window.location.href = "PEV.html";
})
// Authentification
btnConnecte.addEventListener("click", function change(){
    window.location.href = "connexion.html";
})
btnCompte.addEventListener("click", function change(){
    window.location.href = "connexion.html";
})
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



 