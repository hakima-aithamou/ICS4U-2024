let itemList = document.querySelector(".items");
let listPanier = document.getElementById("list-panier");
let total = document.querySelector(".total-panier");
let tax = document.querySelector(".tax");
let soustotal = document.querySelector(".soustotal");
let panierContainer = document.getElementById("container-panier");
let btnmontrer = document.querySelector('#montrer');
let prixTotal = 0;
let listStorage = [];
let panierCourses = [];
// Authentification
const btnPanier = document.getElementById("PC")
let ident = document.getElementById("identité")
let g1 = document.getElementById("header-gauche")
let g2 = document.getElementById("header-gaucheC")

let items = [
  {
    index: 1,
    quantité: 0,
    nom: "Lemonade",
    image: src = "Resources/IMG/PEV1.png",
    prix: 3.89,
  },
];

// Éléments initials du magasin
function initItem() {
  listStorage = JSON.parse(localStorage.getItem("panierCourses"));
  // total.innerHTML = listStorage.length;
  for (let i = 0; i < items.length; i++) {
    let value = items[i];
    let card = document.createElement("div");
    card.setAttribute("class", "item-Afficher");
    card.innerHTML = `
          <img src="${value.image}" class="card-img-top" alt="...">
          <div class="nom-prix-bouton"> 
              <h4 class="cart-h4">${value.nom} ${value.prix}$</h4>
              <button class="AjouterAuPanier" onclick="AjouterAuPanier(${i}, ${value.index})">Ajouter</button>
          </div>`;
    itemList.appendChild(card);
  }
}
initItem();
// Montrer panier
btnmontrer.addEventListener('click', () =>{
    // Ouvre seulement panier si il y a au moin 1 item
    if (listStorage.length > 0) {
        listStorage = JSON.parse(localStorage.getItem('panierCourses'));
            panierContainer.style.display = "block";
            listPanier.innerHTML = '';
        panierContainer.style.height = (14 +(7.1*listStorage.length))+"em";
        AfficherPanier();
    }

    // Lorsqu'iul y a 2 éléments ou plus, et on enlève un élément du liste, puis on click sur btnmontrer, l'élément réaparaît dans la liste

});
// Fonction pour mettre des divs dans panier selon quantité
function AfficherPanier(){
    prixTotal = 0;
    listStorage.forEach((value) => {
            if (value != null) {
                // Calcule prix
                prixTotal+= value.quantité*value.prix;
             
                total.innerHTML = "Total : " + (prixTotal + (prixTotal*0.13));
                // Création div si le quantité n'est pas 0
                let listItem = document.createElement('div');
                listItem.setAttribute('class', 'list-group-item');
                listItem.innerHTML = `
                <div class = "quant">
                    <div>
                        <img class = cart-image src="${value.image}" ></div>
                        <div><h5">${value.nom}</h5></div>
                        <div><h6">${value.prix.toString()}$</h6></div>
                    <div class = "quant">
                        <button class = "quantité" onclick="moinsQuantité(${listStorage.indexOf(value)}, ${value.quantité})">-</button>
                        <div class="count">${value.quantité}</div>
                        <button class = "quantité" onclick="plusQuantité(${listStorage.indexOf(value)}, ${value.quantité})">+</button>
                    </div>
                </div>`;
                listPanier.appendChild(listItem);
                // Si il n'y a plus cette élément dans le panier (quantité = 0), enlevé div
                // if(value.quantité == 0){            
                //     listPanier.removeChild(listItem);
                //     listStorage.splice(listStorage.indexOf(value));
                // }
                }
                else{
                    panierContainer.style.display = 'none';
                }  

        })
}
// Ajouter au panier recherche d'index
function Rechercherindex(indexcherché) {
    let indice = -1;
    if (listStorage.length > 0) {
        for (let i = 0; i < listStorage.length; i++) {
            if (listStorage[i].index == indexcherché)
                indice = i;
        }
    }
    return indice;
}

// Fonction que lorsqu'on clique sur une bouton du magasin, on ajoute l'item spécifié
function AjouterAuPanier(indice,index){
        listStorage = (listStorage == null) ? listStorage = [] : listStorage;
        if(Rechercherindex(index)==-1){
            let item = items[indice];
            item.quantité = 1;
            listStorage.push(item);
        }
        else{
            listStorage[Rechercherindex(index)].quantité+=1;
        }
        document.getElementById('total').innerHTML = listStorage.length;
        localStorage.setItem('panierCourses', JSON.stringify(listStorage));
        listPanier.innerHTML = '';
        panierContainer.style.height = (14 +(7.1*listStorage.length))+"em";
        AfficherPanier();
}
// Calcules
function moinsQuantité(ind,quant){
    if (quant == 1){
        listStorage.splice(ind,1);
    }
    else{
        quant = listStorage[ind].quantité - 1;
        listStorage[ind].quantité=quant;
        prixTotal-=quant*listStorage[ind].prix;
        localStorage.setItem('panierCourses',JSON.stringify(listStorage));
    }
    document.getElementById('total').innerHTML = (listStorage == null) ? 0 : listStorage.length;
    listPanier.innerHTML = '';
    panierContainer.style.height = (14 +(7.1*listStorage.length))+"em";
    AfficherPanier();
}
function plusQuantité(ind,quant){
    quant = listStorage[ind].quantité + 1;
    listStorage[ind].quantité=quant;
    prixTotal+=quant*listStorage[ind].prix;
    localStorage.setItem('panierCourses',JSON.stringify(listStorage));
    listPanier.innerHTML = '';
    AfficherPanier();
}

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
// Ajouter au panier
Auth.panier = listPanier;
Auth.setItem('Auth', JSON.stringify(Auth));
let ListeLogin = JSON.parse(localStorage.getItem('listLogin'));
listLogin.panier = listPanier;
ListeLogin.setItem('listLogin', JSON.stringify(listLogin));