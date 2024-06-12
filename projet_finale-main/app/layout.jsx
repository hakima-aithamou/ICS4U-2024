import { createClient } from '@/supabase/server'
import { redirect } from 'next/navigation'
 
/*
Condition qui verifit si l'utilisateur est authentifiquer pour savoir si on montre la page protecter ou la page login
*/
export default async function RootLayout({children, home, login }) {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
    return (
      <html>
      <body>
        {children}
        {(error || !data.user) ? login : home}
      </body>
      </html>
    )
}