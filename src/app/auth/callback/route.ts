import { NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions
import { createClient } from '@/utils/supabase/server'
import { DB_AUTH_CHECK_ROLE_FUNCTION } from '@/lib/dbFunctionNames'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/bar-admin'

  if (code) {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      //Check role and force sign out if not allowed
      const { data: isAllowed, error: isAllowedError } = await supabase.rpc(
        DB_AUTH_CHECK_ROLE_FUNCTION
      )
      if (!isAllowed || isAllowedError) {
        supabase.auth.signOut()
        return NextResponse.redirect(`${origin}${next}`)
      }
      const forwardedHost = request.headers.get('x-forwarded-host') // original origin before load balancer
      const isLocalEnv = process.env.NODE_ENV === 'development'
      if (isLocalEnv) {
        // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
        return NextResponse.redirect(`${origin}${next}`)
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`)
      } else {
        return NextResponse.redirect(`${origin}${next}`)
      }
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
