'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

//TODO: Remove localhost from redirectTo

export const logInWithGitHub = async () => {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback'
    }
  })
  if (data.url) {
    redirect(data.url)
  }
}
