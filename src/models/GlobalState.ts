import { Bar } from './Bar'
import { CurrentLocation } from './Location'

export type GlobalState = {
  bars: Bar[]
  currentLocation: CurrentLocation
  currentQuery: CurrentQuery
}

export type CurrentQuery = {
  min: number | null
  hour: number | null
  day: number | null
  sortOrder: string
}

export const defaultCurrentQuery: CurrentQuery = {
  min: null,
  hour: null,
  day: null,
  sortOrder: 'asc'
}
