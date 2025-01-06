'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export const logInWithGitHub = async (hostname: string) => {
  const supabase = await createClient()
  let BASE_URL: string = ''
  if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://localhost:3000'
  } else if (process.env.VERCEL_ENV === 'preview') {
    BASE_URL = 'https://' + process.env.VERCEL_BRANCH_URL
  } else {
    BASE_URL = 'https://' + hostname
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: BASE_URL + '/auth/callback'
    }
  })
  if (data.url) {
    redirect(data.url)
  }
}
