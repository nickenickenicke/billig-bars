import { Bar } from '@/models/Bar'

export enum BarActionType {
  UPDATED
}

export type BarAction = {
  type: BarActionType
  payload: string
}

export const defaultBarState: Bar[] = [
  {
    name: 'Testbaren',
    address: 'Testgatan 104',
    postal_code: 12345,
    city: 'Teststaden',
    beer_volume: 40,
    beer_price: 45,
    id: 'test',
    long: 18.0771446228027,
    lat: 59.3076553344727,
    opening_hours: []
  }
]

export const BarReducer = (bars: Bar[], action: BarAction): Bar[] => {
  switch (action.type) {
    case BarActionType.UPDATED:
      const updatedBars: Bar[] = JSON.parse(action.payload) || []
      return updatedBars
    default:
      return bars
  }
}
