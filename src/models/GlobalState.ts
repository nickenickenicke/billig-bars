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
  sortBy: 'distance' | 'price' | 'ppv' | null
  mixOpenAndClosed: boolean
}

export const defaultCurrentQuery: CurrentQuery = {
  min: null,
  hour: null,
  day: null,
  sortOrder: 'asc',
  sortBy: null,
  mixOpenAndClosed: false
}
