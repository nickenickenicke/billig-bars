import { weekdayNames } from '@/lib/weekdays'
import { OpeningHours } from '@/models/Bar'

export const getTodaysWeekday = (): number => {
  return new Date().getDay()
}

export const getCurrentHour = (): number => {
  return new Date().getHours()
}

export const getCurrentMinute = (): number => {
  return new Date().getMinutes()
}

export const getWeekdayName = (day: number) => {
  return day === 0 ? weekdayNames[6] : weekdayNames[day - 1]
}

export const getClosingHour = (openingHours: OpeningHours[], dayToCheck?: number): string => {
  const dayToCompare = dayToCheck || getTodaysWeekday()

  const index = openingHours.findIndex(day => {
    return day.day_of_week === dayToCompare
  })

  if (index === -1) {
    return ''
  }

  return normalizeTimeFromDB(openingHours[index].closes_at, openingHours[index].closes_at_min)
}

export const normalizeTimeFromDB = (hour: number, min: number): string => {
  let normalized: string = hour < 10 ? '0' + hour : hour + ''

  if (min) {
    normalized += ':' + (min < 10 ? '0' + min : min)
  }

  return normalized
}
