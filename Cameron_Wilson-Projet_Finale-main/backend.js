// import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
// import{signin} from "./backend3.js";
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const supabaseUrl = "https://djrghaxishryyvqiuklc.supabase.co";
const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqcmdoYXhpc2hyeXl2cWl1a2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2OTQ2ODgsImV4cCI6MjAzMzI3MDY4OH0.ovTA3QfPX7zAbkkY1vv2_zmjdl_0DHo2e_WmqRLb6ms";
const supabase = createClient(supabaseUrl, supabaseKey);

let logemail = document.querySelector("#logInputEmail");
let logpassword = document.querySelector("#logInputPassword");
let email = document.querySelector("#InputEmail");
let password = document.querySelector("#InputPassword");
let close = document.querySelector(".close-button");
let crée2 = document.querySelector("#crée2");
let createpage = document.querySelector(".CreateAccount");
let loginpage = document.querySelector(".Login");
let connect1 = document.querySelector("#connect1");
let btncreate = document.querySelector("#createbutton");
let btnlogin = document.querySelector("#loginbtn");
let signout=document.querySelector("#signout");
signout.addEventListener("click", out)

// logbtn color red

// for ie8 support
// // logemail.addEventListener("propertychange", logdonnecouleur);
// // logpassword.addEventListener("propertychange", logdonnecouleur);
logemail.addEventListener("input", logdonnecouleur);
logpassword.addEventListener("input", logdonnecouleur);
function logdonnecouleur() {
  if (logemail.value.length > 0 && logpassword.value.length > 0) {
    btnlogin.style.background = "red";
    btnlogin.style.color = "white";
  }
}
// btn color red
// email.addEventListener("propertychange", donnecouleur);
// password.addEventListener("propertychange", donnecouleur);
email.addEventListener("input", donnecouleur);
password.addEventListener("input", donnecouleur);
function donnecouleur() {
  if (email.value.length > 0 && password.value.length > 0) {
    btncreate.style.background = "red";
    btncreate.style.color = "white";
  }
}

// sign in
btnlogin.addEventListener("click", async function signInWithPassword() {
  if (logemail.value.length > 0 && logpassword.value.length > 0) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: logemail.value,
      password: logpassword.value,
    });
    if (error===null) {
      const { data:data2, error:error2 } = await supabase
      .from("cart")
      .select('cartlist_json_array')
      .eq('email', logemail.value)
      .single();

      localStorage.setItem('email', logemail.value)
      // signin.innerHTML=logemail.value;
      localStorage.setItem("cartLists", JSON.stringify(data2.cartlist_json_array));
      window.location.href = "index3.html";
    }
  }
});

// cree un compte
btncreate.addEventListener("click", async function enregistrer() {
  if (email.value.length > 0 && password.value.length > 0) {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    const { data:data2, error:error2 } = await supabase
      .from("cart")
      .insert([{ email: email.value, cartlist_json_array: [] }])
      .select();
    if (error2===null){
      connectionpage();
    }
  }
});

// changer de page

connect1.addEventListener("click", connectionpage);

function connectionpage() {
  createpage.style.visibility = "hidden";
  loginpage.style.visibility = "visible";
}

crée2.addEventListener("click", créepage);
function créepage() {
  createpage.style.visibility = "visible";
  loginpage.style.visibility = "hidden";
}

close.addEventListener("click", closeit);
function closeit() {
  alert("close");
  // retourne a la page de commande (indewx3.html)
  window.location.href = "index3.html";
}
async function out(){
  const{error}= await supabase.auth.signOut();
   localStorage.setItem("cartLists", []);  
   localStorage.setItem('email', "Sign in");
   window.location.href = "index3.html";
 }