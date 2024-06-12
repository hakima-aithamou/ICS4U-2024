import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const supabaseUrl = 'https://iqddmuocknpdmworajjt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxZGRtdW9ja25wZG13b3Jhamp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1MTgxOTAsImV4cCI6MjAzMzA5NDE5MH0.KBeocny6HP2g2MkdVE1yK05Tr7dClMP85aUTeAq8s-g"
const supabase = createClient(supabaseUrl, supabaseKey)
let Auth = JSON.parse(localStorage.getItem('Auth'));
const btnE = document.getElementById("btnCompte") 
btnE.addEventListener("click", async function Enregistrer() {
  const { data, error } = await supabase
  .from('Sign-In')
  .insert([
    { username: Auth.nom, Email: Auth.mail},
  ])
  .select()
})