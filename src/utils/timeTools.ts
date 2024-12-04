import { weekdayNames } from '@/lib/weekdays'
import { HappyHours, OpeningHours } from '@/models/Bar'

export const getTodaysWeekday = (): number => {
  return new Date().getDay()
}

export const getCurrentHour = (): number => {
  return new Date().getHours()
}

export const checkIsHappyHour = (happyHours: HappyHours[]): boolean => {
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

export const checkIsOpen = (openingHours: OpeningHours[]): boolean => {
  const currentHour = getCurrentHour()
  const currentDay = getTodaysWeekday()
  const adjustedForMonday = currentDay === 1 ? 8 : currentDay

  const checkIfOpenPastMidnightYesterday = () => {
    return openingHours.some(day => {
      return day.day_of_week === adjustedForMonday - 1 && day.closes_at <= 5
    })
  }

  const checkIfOpenPastMidnightToday = (index: number) => {
    if (openingHours[index].closes_at > 0 && openingHours[index].closes_at <= 5) {
      return true
    }
    return false
  }

  if (currentHour < 5 && checkIfOpenPastMidnightYesterday()) {
    return openingHours.some(day => {
      return day.day_of_week === adjustedForMonday - 1 && currentHour <= day.closes_at
    })
  }

  const index = openingHours.findIndex(day => {
    return day.day_of_week === currentDay
  })

  //No index found => bar is closed today
  if (index === -1) {
    return false
  }

  if (
    checkIfOpenPastMidnightToday(index) &&
    currentHour >= openingHours[index].opens_at &&
    currentHour < 24
  ) {
    return true
  }

  return currentHour >= openingHours[index].opens_at && currentHour < openingHours[index].closes_at
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
