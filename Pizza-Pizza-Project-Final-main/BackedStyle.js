// Importez la fonction `createClient` de Supabase
import { createClient } from '@supabase/supabase-js';

// Créez un client Supabase
const supabaseUrl = 'https://gmkggjjojqsjahnbvsql.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdta2dnampvanFzamFobmJ2c3FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2MDY5OTksImV4cCI6MjAzMzE4Mjk5OX0.8i8ZNnbRtIq7anRcJClzaYGTugszvanQuO5RYtgzNw0';
const supabase = createClient(supabaseUrl, supabaseKey);

// Écouteur d'événements pour le formulaire d'inscription
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  try {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      alert('Inscription réussie ! Veuillez vous connecter.');
    }
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error.message);
  }
});

// Écouteur d'événements pour le formulaire de connexion
document.getElementById('signin-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;
  try {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      alert('Connexion réussie !');
      // Rediriger vers une autre page ou faire autre chose après la connexion
    }
  } catch (error) {
    console.error('Erreur lors de la connexion :', error.message);
  }
});