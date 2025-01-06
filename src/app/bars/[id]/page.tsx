import { BarOpeningHours } from '@/components/BarOpeningHours'
import { Bar } from '@/models/Bar'
import { normalizeMeters, normalizePostalCode } from '@/utils/locationTools'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { BeerPriceCircle } from '@/components/BeerPriceCircle'
import { BeerStats } from '@/components/BeerStats'
import { MapCanvas } from '@/components/MapCanvas'
import Link from 'next/link'
import { BarPriceInformation } from '@/components/BarPriceInformation'
import { BarPills } from '@/components/BarPills'
import { BarOpenOrClosedText } from '@/components/BarOpenOrClosedText'
import { BarLastControl } from '@/components/BarLastControl'
import { DB_SINGLE_BAR_FUNCTION } from '@/lib/dbFunctionNames'

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

  let { data, error } = await supabase.rpc(DB_SINGLE_BAR_FUNCTION, supabaseQuery)

  if (error) {
    console.error(error)
    redirect('/')
  }

  if (data) {
    const bar: Bar = data[0]

    return (
      <>
        <section className="grid grid-cols-1 grid-rows-[auto_auto] md:grid-cols-[minmax(40vw,_400px)_1fr] md:grid-rows-[auto] md:items-start">
          <div className="aspect-[18/15] md:sticky md:left-0 md:top-navbar md:col-[2/3] md:row-[1/2] md:aspect-[unset] md:h-[calc(100vh-var(--navbar-height))] md:w-full">
            <MapCanvas singleBar={bar} />
          </div>
          <article className="mt-4 px-2 md:col-[1/2] md:row-[1/2] md:mt-0 md:px-4 lg:px-8">
            <span className="mb-4 block text-right text-sm md:text-base">
              <Link href={'/bars'} className="underline underline-offset-2">
                {'< '}Tillbaka till alla barer
              </Link>
            </span>

            <div className="grid grid-cols-[1fr_1fr_auto_100px] grid-rows-[1fr_auto_50px] justify-between rounded-none bg-white">
              <div className="col-[1/3] row-[1/3] text-lg">
                <h1 className="text-4xl font-medium">{bar.name}</h1>
                {bar.dist_meters && bar.dist_meters > 0 ? (
                  <span>{normalizeMeters(bar.dist_meters)}</span>
                ) : null}
                <address>
                  {bar.address}
                  <br />
                  {normalizePostalCode(bar.postal_code)} {bar.city}
                </address>
                <span className="block">
                  <BarOpenOrClosedText
                    is_open={bar.is_open}
                    opening_hours={bar.opening_hours}
                    opens_at={bar.opens_at}
                    now
                  />
                </span>
              </div>

              <div className="col-[1/4] row-[3/4] flex flex-row-reverse gap-2 pr-2">
                <BeerStats beer_ppv={bar.current_ppv} beer_volume={bar.current_volume} />
              </div>

              <div className="col-[3/5] row-[1/2] flex flex-col flex-wrap items-end justify-start gap-2 pt-1.5">
                <BarPills is_open={bar.is_open} is_happy_hour={bar.is_happy_hour} />
              </div>

              <div className={`col-[4/5] row-[2/4] mt-4 flex flex-col items-end justify-end gap-2`}>
                <BeerPriceCircle beer_ppv={bar.current_ppv} beer_price={bar.current_price} />
              </div>
            </div>
            {bar.happy_hours && bar.happy_hours.length > 0 && <BarPriceInformation bar={bar} />}
            <BarOpeningHours openingHours={bar.opening_hours} />
            <BarLastControl barName={bar.name} controlled_at={bar.controlled_at} />
          </article>
        </section>
      </>
    )
  }

  return redirect('/')
}
