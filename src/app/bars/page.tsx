import { Bar } from '@/models/Bar'
import { CurrentLocation } from '@/models/Location'
import DisplayBars from '../components/DisplayBars'
import { revalidatePath } from 'next/cache'
import { getBarsByLocation } from '../actions/getBars'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Countries() {
  let bars: Bar[] = []
  const medborgarplatsen: CurrentLocation = {
    currentlat: 59.31493080050378,
    currentlong: 18.072152827709495
  }
  bars = await getBarsByLocation(medborgarplatsen)

  revalidatePath('/bars')
  return <>{<DisplayBars bars={bars} />}</>
}
