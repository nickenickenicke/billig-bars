import { BarHappyHours } from '@/components/BarHappyHours'
import { BarOpeningHours } from '@/components/BarOpeningHours'
import { Bar } from '@/models/Bar'
import { normalizeMeters, normalizePostalCode } from '@/utils/locationTools'
import { createClient } from '@/utils/supabase/server'
import { checkIsHappyHour } from '@/utils/timeTools'
import { redirect } from 'next/navigation'

interface BarPageProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

type SupabaseQuery = {
  p_uuid: string
  currentlat?: number
  currentlong?: number
}

export default async function BarPage({ params, searchParams }: BarPageProps) {
  const supabaseQuery: SupabaseQuery = {
    p_uuid: params.id
  }

  if (
    parseFloat(searchParams.currentlat as string) > 0 &&
    parseFloat(searchParams.currentlong as string) > 0
  ) {
    supabaseQuery.currentlat = parseFloat(searchParams.currentlat as string)
    supabaseQuery.currentlong = parseFloat(searchParams.currentlong as string)
  }

  const supabase = await createClient()

  let { data, error } = await supabase.rpc('get_bar_by_id', supabaseQuery)

  if (error) {
    console.error(error)
    redirect('/')
  }

  if (data) {
    const bar: Bar = { ...data }

    let isHappyHour = false
    if (bar.happy_hours) isHappyHour = checkIsHappyHour(bar.happy_hours)

    return (
      <>
        <h1>{bar.name}</h1>
        {bar.dist_meters && bar.dist_meters > 0 ? <p>{normalizeMeters(bar.dist_meters)}</p> : null}
        {isHappyHour && <span>HAPPY HOUR</span>}
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
