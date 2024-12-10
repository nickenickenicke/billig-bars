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

export const getClosingHour = (openingHours: OpeningHours[], dayToCheck?: number): number => {
  const dayToCompare = dayToCheck || getTodaysWeekday()

  const index = openingHours.findIndex(day => {
    return day.day_of_week === dayToCompare
  })

  if (index === -1) {
    return -1
  }

  return openingHours[index].closes_at
}

export const getWeekdayName = (day: number) => {
  return day === 0 ? weekdayNames[6] : weekdayNames[day - 1]
}

export const normalizeTimeFromDB = (time: number): string => {
  if (time > 999) {
    return time.toString().slice(0, 2) + ':' + time.toString().slice(2)
  }

  if (time < 10) {
    return '0' + time.toString()
  }

  return time.toString()
}
