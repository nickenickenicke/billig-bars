export type Bar = {
  id: string
  name: string
  address: string
  city: string
  postal_code: number
  beer_volume: number
  beer_price: number
  beer_ppv: number
  long: number
  lat: number
  opening_hours: OpeningHours[]
  happy_hours?: HappyHours[]
  dist_meters?: number
  is_open?: boolean
  is_happy_hour?: boolean
}

export type OpeningHours = {
  opens_at: number
  closes_at: number
  day_of_week: number
  id?: string
}

export type HappyHours = {
  starts_at: number
  ends_at: number
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
