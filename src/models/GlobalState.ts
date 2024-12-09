import { Bar } from './Bar'
import { CurrentLocation } from './Location'

export type GlobalState = {
  bars: Bar[]
  barsFromApi: Bar[]
  currentLocation: CurrentLocation
  currentQuery: CurrentQuery
}

export type CurrentQuery = {
  hour: number | null
  day: number | null
  sort: string
}

export const defaultCurrentQuery: CurrentQuery = {
  hour: null,
  day: null,
  sort: 'asc'
}
