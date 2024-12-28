import { CurrentQuery } from '@/models/GlobalState'
import {
  adjustMinutesToHalfHour,
  getCurrentHour,
  getCurrentMinute,
  getTodaysWeekday
} from './timeTools'

export const checkParams = (params: URLSearchParams): CurrentQuery => {
  let desc = false
  if (params.get('sort') === 'desc') {
    desc = true
  }

  let min: number | null = null
  if (params.get('min')) {
    min = parseInt(params.get('min') as string) || min
  }
  if (min === null || min < 0 || min > 59) {
    min = getCurrentMinute()
  }
  min = adjustMinutesToHalfHour(min || 0)

  let hour: number | null = null
  if (params.get('hour')) {
    hour = parseInt(params.get('hour') as string) || hour
  }
  if (hour === null || hour < 0 || hour > 23) {
    hour = getCurrentHour()
  }

  let day: number | null = null
  if (params.get('day')) {
    day = parseInt(params.get('day') as string) || day
  }
  if (day === null || day < 0 || day > 7) {
    day = getTodaysWeekday()
  }

  return {
    min,
    hour,
    day,
    sort: desc ? 'desc' : 'asc'
  }
}
