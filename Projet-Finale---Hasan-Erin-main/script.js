let itemList = document.querySelector('.Produits')
const btnCommande = document.getElementById("btnCommande")
const btnConnecte = document.getElementById("btnConnecte")
const btnPanier = document.getElementById("PC")
const btnCompte = document.getElementById("btnCompte")
let ident = document.getElementById("identité")
let g1 = document.getElementById("header-gauche")
let g2 = document.getElementById("header-gaucheC")
let items = [
  {
      index: 0,
      image: src = "Resources/IMG/Pic1.PNG",
      title: "Les pizzas sur pain plat sont arrivées!",
      paragraphe: "Laissez vos papilles choisir votre prochain coup de cœur. Choisissez parmi nos quatre délicieuses variétés, soit poulet parmesan, bacon plein-goût, pepperoni, et simplement fromage – elles sont servies chaudes, fraîchement sorties du four!",
      lien: "*Des modalités s’appliquent.",
      Bouton: "Essayer maintenant",
      choix:"fig1"
  },
    {
        index: 1,
        image: src = "Resources/IMG/Pic2.PNG",
        title: "C’est l’heure du Défi séries éliminatoires de la Coupe StanleyMC du Défi de hockey de la LNHMD de Tim Hortons!",
        paragraphe: "Participez au Défi séries éliminatoires de la Coupe StanleyMC du Défi de hockey de la LNHMD de Tim Hortons pour courir la chance de gagner* des prix quotidiens, du café GRATUIT pendant une semaine† et un voyage à la finale de la Coupe StanleyMC 2025.",
        lien: "*Des modalités s’appliquent.",
        Bouton: "En savoir plus",
        choix:"fig2"
      },
    {
          index: 2,
          image: src = "Resources/IMG/Pic3.PNG",
        title: "Essayez le cappuccino glacé OREO DOUBLE CRÈME® et le cappuccino glacé CARAMILK®!",
              paragraphe: "En l’honneur du 25ᵉ anniversaire de notre emblématique cappuccino glacé, nous ajoutons le tout nouveau cappuccino glacé CARAMILK® au menu et ramenons le cappuccino glacé OREO DOUBLE CRÈME®! Ne manquez pas votre chance; il s’agit d’une offre de durée limitée.",
              lien: "*Des conditions s’appliquent.",
              Bouton: "Commander",
              choix:"fig1"
      },
    {
          index: 3,
          image: src = "Resources/IMG/Pic4.PNG",
        title: "Les pizzas sur pain plat sont arrivées!",
              paragraphe: "Laissez vos papilles choisir votre prochain coup de cœur. Choisissez parmi nos quatre délicieuses variétés, soit poulet parmesan, bacon plein-goût, pepperoni, et simplement fromage – elles sont servies chaudes, fraîchement sorties du four!",
              lien: "*Des modalités s’appliquent.",
              Bouton: "Participez dès maintenant",
              choix:"fig1"
      },
    {
          index: 4,
          image: src = "Resources/IMG/Pic5.PNG",
        title: "60 ans de Tim, ça se fête!",
              paragraphe: "Achetez un produit de café Tim à la maison et courez la chance de GAGNER du café gratuit* pendant un an dans les restaurants Tim Hortons!",
              lien: "*Des conditions s’appliquent.",
              Bouton: "En savoir plus",
              choix:"fig1"
      },
    {
          index: 5,
          image: src = "Resources/IMG/Pic6.PNG",
        title: "Démarrez bien avec 5 000 points en plus!",
              paragraphe: "a Carte de crédit Tim, c’est 2 000 pts sur votre 1er achat au mois 1, et 1 000 pts de plus chaque mois où vous dépensez 200 $+ dans les 3 mois suivants¹!",
              lien: "Des conditions s’appliquent.",
              Bouton: "Postuler",
              choix:"fig1"
      },
    {
          index: 6,
          image: src = "Resources/IMG/Pic7.PNG",
        title: "Fais partie d’une équipe",
              paragraphe: "Joins-toi à ton Tim local et fais partie d’une équipe extraordinaire au service des gens d’ici depuis 60 ans!",
              lien: "*Des modalités s’appliquent.",
              Bouton: "Historique",
              choix:"fig1"
      },
]
function initItem() {
    for(let i =0; i<items.length; i++)  {
        let value = items[i];
        let card = document.createElement('div');
        card.setAttribute('class', 'item-Afficher');
        card.innerHTML = `
        <div id ="${value.choix}"
            <figure classe ="Affiches">
                    <img class = "ImgAffiche" src = "${value.image}">
                    <figcaption class="figcap">
                        <div class = "textAffiche">
                        <h1>${value.title}</h1>
                        <p>${value.paragraphe}</p>
                        <a href = "">${value.lien}</a>
                    </div>
                    <button class = "btnAfficher">${value.Bouton}</button>
                    </figcaption>
            </figure>
        </div>`;
        itemList.appendChild(card);
    }
}
initItem();
btnCommande.addEventListener("click", function change(){
    window.location.href = "menu.html";
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