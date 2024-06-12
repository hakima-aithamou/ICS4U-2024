const logo = document.querySelector("img");
logo.addEventListener("click", function () {
  window.location.href = "index.html";
});

// function CartLoad() {
//   alert(Cart.length);
//   let j = 0;
//   if (Cart.length == 0) {
//     Cart.push(items[(Group, ind)]);
//     items[(Group, ind)].quantity++;
//     const CarDiv = document.createElement("div");
//     CarDiv.setAttribute("class", "Cardiv");
//     CarDiv.innerHTML = `
//     <img src="${items[(Group, ind)].image}" class="CartImg" alt="...">
//     <h4 class="cart-h3">${items[(Group, ind)].nom} ${items[(Group, ind)].prix}$</h4>
//     <button class="CartButton" id="CartPlus" onclick="PlusQuantity(${items[(Group, ind)].index})">+</button>
//     <h4 class="cart-h3">${items[(Group, ind)].quantity}</h4>
//     <button class="CartButton" id="CartMinus" onclick="moinsQuantity(${items[(Group, ind)].index})">-</button>
//     `;
//     "Cart.html".getElementById("cart").appendChild(CarDiv);
//   }
//   Cart.forEach((item) => {
//     if (item.index == index) {
//       if (Cart.length > 0) {
//         PlusQuantity(item.index);
//         return;
//       } else {
//         j++;
//         if (j == Cart.length) {
//           Cart.push(items[(Group, ind)]);
//           items[(Group, ind)].quantity++;
//           const CarDiv = document.createElement("div");
//           CarDiv.setAttribute("class", "Cardiv");
//           CarDiv.innerHTML = `
//           <img src="${items[(Group, ind)].image}" class="CartImg" alt="...">
//           <h4 class="cart-h3">${items[(Group, ind)].nom} ${items[(Group, ind)].prix}$</h4>
//           <button class="CartButton" id="CartPlus" onclick="PlusQuantity(${items[(Group, ind)].index})">+</button>
//           <h4 class="cart-h3">${items[(Group, ind)].quantity}</h4>
//           <button class="CartButton" id="CartMinus" onclick="moinsQuantity(${items[(Group, ind)].index})">-</button>
//           `;
//           document.getElementById("cart").appendChild(CarDiv);
//         }
//       }
//     }
//   });
//   items[(Group, ind)].quantity = 0;
// }
// CartLoad();
