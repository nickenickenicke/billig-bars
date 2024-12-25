import { BarOpeningHours } from '@/components/BarOpeningHours'
import { Bar } from '@/models/Bar'
import { normalizeMeters, normalizePostalCode } from '@/utils/locationTools'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { singleBarMockData } from '@/lib/mockdata'
import { BeerPriceCircle } from '@/components/BeerPriceCircle'
import { BeerStats } from '@/components/BeerStats'
import { MapCanvas } from '@/components/MapCanvas'
import Link from 'next/link'
import { BarCardPill } from '@/components/BarCardPill'
import { BarPriceInformation } from '@/components/BarPriceInformation'
import { getClosingHour, getOpeningHour } from '@/utils/timeTools'

interface BarPageProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

type SupabaseQuerySingleBar = {
  p_uuid: string
  currentlat?: number
  currentlong?: number
  comparison_timestamp: string
}

export default async function BarPage({ params, searchParams }: BarPageProps) {
  const supabaseQuery: SupabaseQuerySingleBar = {
    p_uuid: params.id,
    comparison_timestamp: new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' })
  }

  if (
    parseFloat(searchParams.currentlat as string) > 0 &&
    parseFloat(searchParams.currentlong as string) > 0
  ) {
    supabaseQuery.currentlat = parseFloat(searchParams.currentlat as string) || 0
    supabaseQuery.currentlong = parseFloat(searchParams.currentlong as string) || 0
  }

  const supabase = await createClient()

  let { data, error } = await supabase.rpc('barnextopen', supabaseQuery)

  if (error) {
    console.error(error)
    redirect('/')
  }

  // const data: Bar[] = [singleBarMockData]

  if (data) {
    const bar: Bar = data[0]

    return (
      <>
        <MapCanvas singleBar={bar} />
        <article className="mt-4 px-2">
          <span className="mb-4 block text-right text-sm">
            <Link href={'/bars'} className="underline underline-offset-2">
              {'< '}Tillbaka till alla barer
            </Link>
          </span>

          <div className="grid grid-cols-[1fr_1fr_auto_100px] grid-rows-[1fr_auto_50px] justify-between rounded-none bg-white">
            <div className="col-[1/3] row-[1/3]">
              <h1 className="text-4xl font-medium">{bar.name}</h1>
              {bar.dist_meters && bar.dist_meters > 0 ? (
                <p>{normalizeMeters(bar.dist_meters)}</p>
              ) : null}
              <address>
                {bar.address}
                <br />
                {normalizePostalCode(bar.postal_code)} {bar.city}
              </address>
              <span className="block">
                {bar.is_open
                  ? 'Öppet till ' + getClosingHour(bar.opening_hours)
                  : getOpeningHour(bar.opens_at)}
              </span>
            </div>

            <div className="col-[1/4] row-[3/4] flex flex-row-reverse gap-2 pr-2">
              <BeerStats beer_ppv={bar.current_ppv} beer_volume={bar.current_ppv} />
            </div>

            <div className="col-[3/5] row-[1/2] flex flex-col flex-wrap items-end justify-start gap-2">
              {bar.is_happy_hour && <BarCardPill>Happy hour</BarCardPill>}
            </div>

            <div className={`col-[4/5] row-[2/4] mt-4 flex flex-col items-end justify-end gap-2`}>
              <BeerPriceCircle beer_ppv={bar.current_ppv} beer_price={bar.current_price} />
            </div>
          </div>
          {bar.happy_hours && bar.happy_hours.length > 0 && <BarPriceInformation bar={bar} />}
          <BarOpeningHours openingHours={bar.opening_hours} />
        </article>
      </>
    )
  }

  return redirect('/')
}
