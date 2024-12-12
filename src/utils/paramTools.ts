import { CurrentQuery } from '@/models/GlobalState'
import { getCurrentHour, getCurrentMinute, getTodaysWeekday } from './timeTools'

export const checkParams = (params: URLSearchParams): CurrentQuery => {
  let desc = false
  if (params.get('sort') === 'desc') {
    desc = true
  }
  let min: number | null = getCurrentMinute()
  if (params.get('min')) {
    min = parseInt(params.get('min') as string) || min
    if (min !== null && (min < 0 || min > 59)) {
      min = getCurrentMinute()
    }
  }
  let hour: number | null = getCurrentHour()
  if (params.get('hour')) {
    hour = parseInt(params.get('hour') as string) || hour
    if (hour !== null && (hour < 0 || hour > 23)) {
      hour = getCurrentHour()
    }
  }
  let day: number | null = getTodaysWeekday()
  if (params.get('day')) {
    day = parseInt(params.get('day') as string) || day
    if (day !== null && (day < 0 || day > 7)) {
      day = getTodaysWeekday()
    }
  }

  return {
    min,
    hour,
    day,
    sort: desc ? 'desc' : 'asc'
  }
}
