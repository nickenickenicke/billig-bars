import { weekdayNames } from '@/lib/weekdays'
import { HappyHours } from '@/models/Bar'

export const getTodaysWeekday = (): number => {
  return new Date().getDay()
}

export const getCurrentHour = (): number => {
  return new Date().getHours()
}

export const isHappyHour = (happyHours: HappyHours[]): boolean => {
  const currentHour = getCurrentHour()
  const currentDay = getTodaysWeekday()

  return happyHours.some(happyHour => {
    return (
      happyHour.day_of_week === currentDay &&
      currentHour >= happyHour.starts_at &&
      currentHour < happyHour.ends_at
    )
  })
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
