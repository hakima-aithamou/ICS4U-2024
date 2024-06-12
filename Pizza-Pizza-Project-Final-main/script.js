// Debut du code JV pour le slideShow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// Fin du code JV pour le slideShow




// Debut du code JV pour le menu
let listPanier = document.getElementById('listPanier');
let total = document.querySelector('.total');
let totals = document.querySelector('#totals')
let tax = document.querySelector('.tax');
let soustotal = document.querySelector('.soustotal');
let panierContainer = document.getElementById("container-panier");
let montrer = document.getElementById('montrer');
let red = document.getElementById('red');
let prixTotal = 0;
let listStorage = [];
let btns = document.querySelectorAll("AjouterAuPanier")
document.addEventListener('DOMContentLoaded', function() {
    // Call the initItem function here

});



// Les liens entre les items de HTML et JavaScript

const itemList = document.querySelector('.items');
const panierCoursesKey = 'panierCourses';




let items = [
    {
        index: 1,
        quan: 0,
        nom: "Create Your Own",
        image: "ImagesMenu/Image1.PNG",
       
    },
    {
        index: 2,
        quan: 0,
        nom: 'Meat Lover',
        image: "ImagesMenu/Image2.PNG",
     
    },
    {
        index: 3,
        quan: 0,
        nom: 'Veggie Favourites',
        image: "ImagesMenu/Image3.PNG",
    
    },
    {
        index: 4,
        quan: 0,
        nom: 'Alternative Crust',
        image: "ImagesMenu/Image4.PNG",
       
    },
    {
        index: 5,
        quan: 0,
        nom: "Create Your Own",
        image: "ImagesMenu/Image5.PNG",
     
    },
    {
        index: 6,
        quan: 0,
        nom: 'Meat Lover',
        image: "ImagesMenu/Image6.PNG",
     
    },
    {
        index: 7,
        quan: 0,
        nom: 'Veggie Favourites',
        image: "ImagesMenu/Image7.PNG",
      
    },
    {
        index: 8,
        quan: 0,
        nom: 'Alternative Crust',
        image: "ImagesMenu/Image8.PNG",
       
    },
    {
        index: 9,
        quan: 0,
        nom: "Create Your Own",
        image: "ImagesMenu/Image9.PNG",
      
    },
    {
        index: 10,
        quan: 0,
        nom: 'Meat Lover',
        image: "ImagesMenu/Image10.PNG",
      
    },
    {
        index: 11,
        quan: 0,
        nom: 'Veggie Favourites',
        image: "ImagesMenu/Image11.PNG",
       
    },
    {
        index: 12,
        quan: 0,
        nom: 'Alternative Crust',
        image: "ImagesMenu/Image12.PNG",
      
    },
];
let panierCourses = JSON.parse(localStorage.getItem(panierCoursesKey)) || [];

function AjouterAuPanier(index) {
    const selectedItem = items[index];
    panierCourses.push(selectedItem);
    localStorage.setItem(panierCoursesKey, JSON.stringify(panierCourses));
    // 
}
let itemsContainer = document.querySelector('.items'); // 
function initItem() {
    // Clear toutes les autres avant de initializer
    itemList.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        const value = items[i];
        const card = document.createElement('div');
        card.setAttribute('class', 'item-Afficher');
        card.innerHTML = `
            <img src="${value.image}" class="card-img-top" alt="...">
            <div class="nom-prix-bouton"> 
          
            </div>
            <img src="" class="BtnAjouter" onclick="(${i})" alt="">`;
        itemList.appendChild(card);
    }
}
// Fin du code JV pour le menu