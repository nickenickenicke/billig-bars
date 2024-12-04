import { BarHappyHours } from '@/components/BarHappyHours'
import { BarOpeningHours } from '@/components/BarOpeningHours'
import { Bar } from '@/models/Bar'
import { normalizeMeters, normalizePostalCode } from '@/utils/locationTools'
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
        {bar.dist_meters && bar.dist_meters > 0 ? <p>{normalizeMeters(bar.dist_meters)}</p> : null}
        <address>
          {bar.address}
          <br />
          {normalizePostalCode(bar.postal_code)} {bar.city}
        </address>
        <BarOpeningHours openingHours={bar.opening_hours} />
        {bar.happy_hours && <BarHappyHours happyHours={bar.happy_hours} />}
        <pre className="text-xs">{JSON.stringify(bar, null, 2)}</pre>
      </>
    )
  }
  return redirect('/')
}
