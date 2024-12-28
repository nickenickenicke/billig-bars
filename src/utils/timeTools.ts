import { weekdayNames } from '@/lib/weekdays'
import { OpeningHours } from '@/models/Bar'

export const getTodaysWeekday = (): number => {
  let weekday = new Date().getDay()
  if (weekday === 0) weekday = 7
  return weekday
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

  return normalizeTimeFromDB(openingHours[index].closes_at)
}

export const getOpeningHour = (opens_at: string): string => {
  if (opens_at === 'open') {
    return 'Öppet'
  }

  const parsedString = normalizeTimeFromDB(opens_at)
  if (parsedString !== '') {
    return 'Öppnar kl ' + parsedString
  }

  return 'Stängt'
}

export const normalizeTimeFromDB = (time: string): string => {
  const [hour, min] = time.split(':').map(Number)

  if (isNaN(hour) || isNaN(min)) {
    return ''
  }

  if (hour < 0 || hour > 24) {
    return ''
  }

  let normalized: string = addZero(hour)

  if (min > 0 && min < 60) {
    normalized += ':' + addZero(min)
  }

  return normalized
}

export const addZero = (num: number): string => {
  if (num < 10) {
    return '0' + num
  }
  return num.toString()
}

export const adjustQueryTimestamp = (timestamp: string) => {
  // const mystring = '2027-02-01T13:30:00.000Z'
  const splitTimestamp = timestamp.split(':')
  let adjustedMinutes = ''

  let minutes = parseInt(splitTimestamp[1]) || 0

  if (minutes < 30) {
    adjustedMinutes = '00'
  } else {
    adjustedMinutes = '30'
  }

  const adjustedTimestamp = splitTimestamp[0] + ':' + adjustedMinutes + ':00.000Z'

  return adjustedTimestamp
}
