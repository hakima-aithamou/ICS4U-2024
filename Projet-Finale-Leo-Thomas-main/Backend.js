const { createClient } = supabase;
const supabaseUrl = "https://rydwpjxlzndwuizciztd.supabase.co";
const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5ZHdwanhsem5kd3VpemNpenRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MTc2MzAsImV4cCI6MjAzMjQ5MzYzMH0.4Dwu98uqKQwdw_TIYtPbYvT3i1P0jEcpy6wIocnKZfA";
const client = createClient(supabaseUrl, supabaseKey);
let CurrentUser = localStorage.getItem("User");
alert.title = "New Alert Title";
let BreadItems = [
  {
    index: "00",
    quantity: 0,
    nom: "Sourdough",
    image: "Resrouces/IMG/Sourdough.gif",
    prix: 25,
  },
  {
    index: "01",
    quantity: 0,
    nom: "Bagels",
    image: "Resrouces/IMG/Bagels.jpg",
    prix: 15.99,
  },
  {
    index: "02",
    quantity: 0,
    nom: "Baguette",
    image: "Resrouces/IMG/Bagueetes.jpeg",
    prix: 13.99,
  },
  {
    index: "03",
    quantity: 0,
    nom: "Challah",
    image: "Resrouces/IMG/Challah.jpg",
    prix: 32.99,
  },
];
let CakeItems = [
  {
    index: "10",
    quantity: 0,
    nom: "Smith Island Cake",
    image: "Resrouces/IMG/smith.jpg",
    prix: 75,
  },
  {
    index: "11",
    quantity: 0,
    nom: "Funfetti Cake",
    image: "Resrouces/IMG/funfetti_cake_49993_16x9.jpg",
    prix: 125,
  },
  {
    index: "12",
    quantity: 0,
    nom: "Red Velvet Cake",
    image: "Resrouces/IMG/Red Velvet.jpeg",
    prix: 200,
  },
  {
    index: "13",
    quantity: 0,
    nom: "Flan",
    image: "Resrouces/IMG/Flan.jpg",
    prix: 45,
  },
];
let PastItems = [
  {
    index: "20",
    quantity: 0,
    nom: "Croissant",
    image: "Resrouces/IMG/Cross.jpg",
    prix: 4,
  },
  {
    index: "21",
    quantity: 0,
    nom: "New York Roll",
    image: "Resrouces/IMG/NYC.jpg",
    prix: 14,
  },
  {
    index: "22",
    quantity: 0,
    nom: "Sugar Cookie",
    image: "Resrouces/IMG/SC.jpg",
    prix: 1.99,
  },
  {
    index: "23",
    quantity: 0,
    nom: "Lemon Bars",
    image: "Resrouces/IMG/LB.jpg",
    prix: 2.99,
  },
];
let SandItems = [
  {
    index: "30",
    quantity: 0,
    nom: "Ham And Cheese Sandwhich",
    image: "Resrouces/IMG/HC.jpg",
    prix: 12,
  },
  {
    index: "31",
    quantity: 0,
    nom: "Steak Panini",
    image: "Resrouces/IMG/SS.jpg",
    prix: 15,
  },
  {
    index: "32",
    quantity: 0,
    nom: "Caprese Panino",
    image: "Resrouces/IMG/CS.jpg",
    prix: 10,
  },
  {
    index: "33",
    quantity: 0,
    nom: "Croque Monsieur",
    image: "Resrouces/IMG/CM.jpg",
    prix: 9,
  },
  {
    index: "34",
    quantity: 0,
    nom: "Chicken Club",
    image: "Resrouces/IMG/ClubS.jpg",
    prix: 20,
  },
];

let items = [BreadItems, CakeItems, PastItems, SandItems];
let Cart = [];
const buttons = document.querySelectorAll(".ButtonAddCart")
buttons.forEach((button) =>{
  button.Group = button.id.charAt(0)
  button.Ind = button.id.charAt(1)
  button.addEventListener("click", () => {AddCart(button.Group, button.Ind)})
})
async function AddCart(group, ind) {
  
  if (CurrentUser == null) {
    alert("Sign in to Add items")
    window.location.href = "signin.html";
  } else {
    let { data, error } = await client.from("Signin").select("*");
    data.forEach((user) => {
      if (user.Username == CurrentUser && user.Items != null) {
        Cart = JSON.parse(user.Items);
        console.log(Cart);
      }
    });
  }
  items[group][ind].quantity = 1;
  Cart.push(items[group][ind]);
  console.log(Cart)
  const { data, error } = await client
    .from('Signin')
    .update({ Items: JSON.stringify(Cart)})
    .eq('Username', CurrentUser)
    .select()
  items[group][ind].quantity = 0;

}
if(window.location.href.endsWith("Cart.html")){
  LoadCart();
}
async function LoadCart() {
  receipt.innerHTML = ""
  if (CurrentUser == null) {
    alert("Go Login")
    window.location.href = "signin.html";
  } else {
    let { data, error } = await client.from("Signin").select("*");
    data.forEach((user) => {
      if (user.Username == CurrentUser && user.Items != null) {
        Cart = JSON.parse(user.Items);
      }
    });
}
  let prixTotal = 0;
  Cart.forEach(e => {
      if (e.quantity !=0)
          {
            document.querySelectorAll(".CartPlus").forEach((button) => {
              button.addEventListener("click", () => {});
            })
            document.querySelectorAll(".CartMinus").forEach((button) => {
              button.addEventListener("click", () => {});
            })
              const CarDiv = document.createElement("div");
                      CarDiv.setAttribute("class", "Cardiv")
                      CarDiv.innerHTML = `
                      <img src="${e.image}" class="CartImg" alt="...">
                      <h4 class="cart-h3">${e.nom} ${e.prix}$</h4>
                      <button class="CartPlus" id="${e.index}">+</button>
                      <h4 class="cart-h3" id>${e.quantity}</h4>
                      <button class="CartMinus" id="${e.index}">-</button>
                      `
                      receipt.appendChild(CarDiv)
                      prixTotal += e.quantity * e.prix
          }
    
  })
document.getElementById("Soustotal").innerHTML = "Sous-Totale: " + prixTotal.toFixed(2).toString() + "$"
  document.getElementById("Tax").innerHTML = "Taxe: " + (prixTotal * 0.13).toFixed(2).toString() + "$"
  document.getElementById("Total").innerHTML = "Total: " + (prixTotal * 1.13).toFixed(2).toString() + "$"
  document.querySelectorAll(".CartPlus").forEach((button) => {
    button.addEventListener("click", () => {PlusQuantity(button.id)});
  })
  document.querySelectorAll(".CartMinus").forEach((button) => {
    button.addEventListener("click", () => {moinsQuantity(button.id)});
  })
}
let userinput = document.getElementById("email").value;
let passinput = document.getElementById("password").value;
let Signin = document.getElementById("in");
Signin.addEventListener("click", CheckSignIn);
let SignUp = document.getElementById("up");
SignUp.addEventListener("click", CheckSignUp);
async function CheckSignIn() {
  let works = false;
  userinput = document.getElementById("email").value;
  passinput = document.getElementById("password").value;
  
  let { data, error } = await client.from("Signin").select("*");
  data.forEach((element) => {
    console.log(element);
    if (element.Username == userinput && element.Password == passinput) {
      CurrentUser = element.Username;
      localStorage.setItem("User", CurrentUser)
      alert("Welcome Back!");
      window.location.href = "index.html";
      works = true;
    }
  });
  if (!works) alert("Incorrect Username or Password");
}
async function CheckSignUp() {
  let works = false;
  userinput = document.getElementById("email").value;
  passinput = document.getElementById("password").value;
  let { data, error } = await client.from("Signin").select("*");
  data.forEach((element) => {
    console.log(element);

    if (element.Username == userinput && element.Password == passinput) {
      works = true;
      alert("Account With That User and Passwork Already Exists");
      return;
    }
  });
  if (!works && userinput != "" && passinput != "") {
    alert("Thanks For Signing in");
    CurrentUser = userinput;
    localStorage.setItem("User", CurrentUser)
    const { signup, error } = await client
      .from("Signin")
      .insert([{ Username: userinput, Password: passinput}])
      .select();
    works = true;
    window.location.href = "index.html";
  }
}

async function PlusQuantity(index){
  Cart.forEach((item) => {
    if (item.index == index)
    {
      item.quantity++
    }
      
  })
  const { data, error } = await client
  .from('Signin')
  .update({ Items: JSON.stringify(Cart)})
  .eq('Username', CurrentUser)
  .select()
  LoadCart()
}

async function moinsQuantity(index){
  Cart.forEach((item) => {
    if (item.index == index)
    {
      item.quantity--
    }

  })
  const { data, error } = await client
  .from('Signin')
  .update({ Items: JSON.stringify(Cart)})
  .eq('Username', CurrentUser)
  .select()
  LoadCart()
}


let Uinput = document.getElementById("email")
let pinput = document.getElementById("password")
if(window.location.href.endsWith("signin.html") && CurrentUser!= null && userinput != null && passinput != null){
  alert(CurrentUser)
  Uinput.textContent = CurrentUser;
  // Uinput.readOnly = true;
  
}




const logout = document.getElementById("out");
logout.addEventListener("click", function signout(){
  localStorage.removeItem("User");
  alert("You have been signed out")
  window.location.href = "index.html";
})