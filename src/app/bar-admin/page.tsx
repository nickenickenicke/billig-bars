import { BarAdminForm } from '@/components/BarAdminForm'
import { LoginWithGitHub } from '@/components/LoginWithGitHub'
import { LogOutButton } from '@/components/LogOutButton'
import { createClient } from '@/utils/supabase/server'

export default async function BarAdminPage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    return (
      <article className="flex h-[50vh] w-full items-center justify-center">
        <LoginWithGitHub />
      </article>
    )
  }
  return (
    <article className="">
      <div className="mx-2 mb-10 md:mx-auto md:w-1/2">
        <LogOutButton />
      </div>
      <BarAdminForm />
    </article>
  )
}
