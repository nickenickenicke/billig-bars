export type Bar = {
  id: string
  name: string
  address: string
  city: string
  postal_code: number
  beer_volume: number
  beer_price: number
  beer_ppv: number
  current_price: number
  current_volume: number
  current_ppv: number
  long: number
  lat: number
  opening_hours: OpeningHours[]
  happy_hours?: HappyHours[]
  dist_meters?: number
  is_open: boolean
  opens_at: string
  is_happy_hour: boolean
}

export type OpeningHours = {
  opens_at: string
  closes_at: string
  day_of_week: number
  id?: string
}

export type HappyHours = {
  starts_at: string
  ends_at: string
  day_of_week: number
  volume: number
  price: number
  ppv: number
  id?: string
}

export type HappyHourPriceDetails = {
  price: number
  volume: number
  ppv: number
}

export type BarFormData = {
  name: string
  address: string
  city: string
  postal_code: number
  beer_volume: number
  beer_price: number
  beer_ppv: number
  long: number
  lat: number
  location: string
  opening_hours: OpeningHours[]
  happy_hours?: HappyHours[]
}

export const defaultBar: Bar = {
  name: '',
  address: '',
  postal_code: 0,
  city: '',
  beer_volume: 0,
  beer_price: 0,
  beer_ppv: 0,
  current_price: 0,
  current_volume: 0,
  current_ppv: 0,
  id: 'default',
  long: 0,
  lat: 0,
  is_open: false,
  is_happy_hour: false,
  opens_at: 'Closed',
  opening_hours: []
}
