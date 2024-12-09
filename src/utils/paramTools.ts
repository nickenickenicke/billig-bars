import { CurrentQuery } from '@/models/GlobalState'

export const checkParams = (params: URLSearchParams): CurrentQuery => {
  let desc = false
  if (params.get('sort') === 'desc') {
    desc = true
  }
  let hour = null
  if (params.get('hour')) {
    hour = parseInt(params.get('hour') as string) || null
  }

  return {
    hour,
    sort: desc ? 'desc' : 'asc'
  }
}
