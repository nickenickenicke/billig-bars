import { Bar } from '@/models/Bar'
import DisplayBars from '@/components/DisplayBars'
import { getBars } from '@/actions/getBars'

export default async function Bars() {
  let bars: Bar[] = []
  bars = await getBars()

  return <>{<DisplayBars bars={bars} />}</>
}
