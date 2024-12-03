import { weekdayNames } from '@/lib/weekdays'

export const getWeekdayName = (day: number) => {
  return day === 0 ? weekdayNames[6] : weekdayNames[day - 1]
}

export const parseTimeFromDB = (time: number): string => {
  if (time > 999) {
    return time.toString().slice(0, 2) + ':' + time.toString().slice(2)
  }

  if (time < 10) {
    return '0' + time.toString()
  }

  return time.toString()
}
