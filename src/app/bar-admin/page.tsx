import { BarAdminForm } from '@/components/BarAdminForm'
import { LoginWithGitHub } from '@/components/LoginWithGitHub'
import { LogOutButton } from '@/components/LogOutButton'
import { createClient } from '@/utils/supabase/server'

export default async function BarAdminPage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    return (
      <article className="">
        <LoginWithGitHub />
      </article>
    )
  }
  return (
    <article className="">
      <LogOutButton />
      <BarAdminForm />
    </article>
  )
}
