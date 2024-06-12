'use server'
/*
  pour authentifiquer l'utilisateur du cote server 
*/
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/supabase/server'

export async function login(formdata) {
    const supabase = createClient();
    
    const data = {
        email: formdata.get('email'),
        password: formdata.get('password'),
      }
    
      const { error } = await supabase.auth.signInWithPassword(data)

      if (error) {
        redirect("/error");
      }

      redirect("/");
}

/*
export async function signup(formdata) {
    const supabase = createClient();
    
      const { data, error } = await supabase.auth.signUp({
        email: formdata.get('email'),
        password: formdata.get('password'),
      })

      if (error) {
        redirect("/error")
      }
}*/