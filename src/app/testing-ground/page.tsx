import { Bar } from '@/models/Bar'
import DisplayBars from '@/components/DisplayBars'
import { getBars } from '@/actions/getBars'

export default async function TestingGround() {
  let bars: Bar[] = []
  bars = await getBars()

  return <>{<DisplayBars bars={bars} />}</>
}