import { HappyHourPriceDetails, HappyHours } from '@/models/Bar'
import { getTodaysWeekday } from './timeTools'

export const getPricePerCl = (price: number, volume: number) => {
  return Math.round((price / volume) * 1000) / 1000
}

export const getHappyHourPrice = (happyHours: HappyHours[]): HappyHourPriceDetails => {
  const currentDay = getTodaysWeekday()

  const happyHour = happyHours.find(happyHour => happyHour.day_of_week === currentDay)
  //TODO: handle this potential error better
  if (!happyHour) return { price: 999, volume: 999 }

  return { price: happyHour.price, volume: happyHour.volume || 40 }
}

export const calculatePPV = (price: string, volume: string): number => {
  const priceInt = parseInt(price)
  const volumeInt = parseInt(volume)
  const parsedPrice = parseFloat((priceInt / volumeInt).toFixed(3))

  return +parsedPrice
}
