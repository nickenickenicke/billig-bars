import { Bar } from '@/models/Bar'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

interface BarPageProps {
  params: { id: string }
}

export default async function BarPage({ params }: BarPageProps) {
  const supabase = await createClient()

  let { data, error } = await supabase.rpc('get_bar_by_id', {
    p_uuid: params.id
  })

  if (error) {
    console.error(error)
    redirect('/')
  }

  if (data) {
    const bar: Bar = { ...data }

    return (
      <>
        <h1>{bar.name}</h1>
        <p>Hej!</p>

        <pre className="text-xs">{JSON.stringify(bar, null, 2)}</pre>
      </>
    )
  }
  return redirect('/')
}
