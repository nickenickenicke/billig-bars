import { BarHappyHours } from '@/components/BarHappyHours'
import { BarPrice } from '@/components/BarPrice'
import { BarOpeningHours } from '@/components/BarOpeningHours'
import { Bar } from '@/models/Bar'
import { normalizeMeters, normalizePostalCode } from '@/utils/locationTools'
import { createClient } from '@/utils/supabase/server'
import { getCurrentHour, getCurrentMinute, getTodaysWeekday } from '@/utils/timeTools'
import { redirect } from 'next/navigation'
import { singleBarMockData } from '@/lib/mockdata'

interface BarPageProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

type SupabaseQuery = {
  p_uuid: string
  currentlat?: number
  currentlong?: number
  day_to_compare?: number
  hour_to_compare?: number
  min_to_compare?: number
}

export default async function BarPage({ params, searchParams }: BarPageProps) {
  const supabaseQuery: SupabaseQuery = {
    p_uuid: params.id,
    day_to_compare: parseInt(searchParams.day as string) || getTodaysWeekday(),
    hour_to_compare: parseInt(searchParams.hour as string) || getCurrentHour(),
    min_to_compare: parseInt(searchParams.min as string) || getCurrentMinute()
  }

  if (
    parseFloat(searchParams.currentlat as string) > 0 &&
    parseFloat(searchParams.currentlong as string) > 0
  ) {
    supabaseQuery.currentlat = parseFloat(searchParams.currentlat as string) || 0
    supabaseQuery.currentlong = parseFloat(searchParams.currentlong as string) || 0
  }

  const supabase = await createClient()

  let { data, error } = await supabase.rpc('singledayminutes', supabaseQuery)

  if (error) {
    console.error(error)
    redirect('/')
  }

  // const data: Bar[] = [singleBarMockData]

  if (data) {
    const bar: Bar = data[0]

    return (
      <article className="px-2">
        <h1>{bar.name}</h1>
        {bar.dist_meters && bar.dist_meters > 0 ? <p>{normalizeMeters(bar.dist_meters)}</p> : null}
        {bar.is_happy_hour && <span>HAPPY HOUR</span>}
        <BarPrice
          isHappyHour={bar.is_happy_hour || false}
          beer_price={bar.beer_price}
          beer_volume={bar.beer_volume}
          beer_ppv={bar.beer_ppv}
          happyHours={bar.happy_hours || []}
        />
        <address>
          {bar.address}
          <br />
          {normalizePostalCode(bar.postal_code)} {bar.city}
        </address>
        <BarOpeningHours openingHours={bar.opening_hours} />
        {bar.happy_hours && <BarHappyHours happyHours={bar.happy_hours} />}
        <pre className="text-xs">{JSON.stringify(bar, null, 2)}</pre>
      </article>
    )
  }

  return redirect('/')
}
