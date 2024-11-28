import { Bar } from '@/models/Bar'
import { CurrentLocation } from '@/models/Location'
import DisplayBars from '../components/DisplayBars'
import { revalidatePath } from 'next/cache'
import { getBarsByLocation } from '../actions/getBars'
import { createClient } from '@/utils/supabase/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Countries() {
  const bysistorget: CurrentLocation = {
    currentlat: 59.31803212061374,
    currentlong: 18.054961588411196
  }
  const medborgarplatsen: CurrentLocation = {
    currentlat: 59.31493080050378,
    currentlong: 18.072152827709495
  }

  // const bars: Bar[] = await getBars(bysistorget)

  const supabase = await createClient()

  const { data, error } = await supabase.rpc('nearby_bars', {
    currentlat: 59.3148847079531,
    currentlong: 18.0741884734164
  })
  console.log('doindeag stuff')

  if (error) {
    console.error(error)
  }

  const bars: Bar[] = data
  console.log('data', data)

  revalidatePath('/bars')
  return <>{<DisplayBars bars={bars} />}</>
}
