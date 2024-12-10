import { CurrentQuery } from '@/models/GlobalState'

export const checkParams = (params: URLSearchParams): CurrentQuery => {
  let desc = false
  if (params.get('sort') === 'desc') {
    desc = true
  }
  let hour: number | null = null
  if (params.get('hour')) {
    hour = parseInt(params.get('hour') as string) || null
    if (hour !== null && (hour < 0 || hour > 23)) {
      hour = null
    }
  }
  let day: number | null = null
  if (params.get('day')) {
    day = parseInt(params.get('day') as string) || null
    if (day !== null && (day < 0 || day > 7)) {
      day = null
    }
  }

  return {
    hour,
    day,
    sort: desc ? 'desc' : 'asc'
  }
}
