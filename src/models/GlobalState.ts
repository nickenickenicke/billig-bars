import { Bar } from './Bar'
import { CurrentLocation } from './Location'

export type GlobalState = {
  bars: Bar[]
  currentLocation: CurrentLocation
}
