import { CurrentQuery } from '@/models/GlobalState'

export const checkParams = (params: URLSearchParams): CurrentQuery => {
  let asc = false
  if (params.get('sort') === 'asc') {
    asc = true
  }
  let hour = null
  if (params.get('hour')) {
    hour = parseInt(params.get('hour') as string) || null
  }

  return {
    hour,
    sort: asc ? 'asc' : 'desc'
  }
}
