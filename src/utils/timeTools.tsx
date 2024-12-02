import { weekdayNames } from '@/lib/weekdays'

export const getWeekdayName = (day: number) => {
  return day === 0 ? weekdayNames[6] : weekdayNames[day - 1]
}
