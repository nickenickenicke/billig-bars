import { FilterSearchParams } from '@/components/FilterBar'

export const checkFilterSearchParams = (searchParams: URLSearchParams): FilterSearchParams => {
  const day = searchParams.get('day') || ''
  const hour = searchParams.get('hour') || ''
  const min = searchParams.get('min') || ''
  const sort = searchParams.get('sort') || ''
  return { day, hour, min, sort }
}

export const createParamString = (
  params: FilterSearchParams,
  updatedParamKey: string,
  updatedParamValue: string
): string => {
  const newParams = { ...params, [updatedParamKey]: updatedParamValue }
  return `?day=${newParams.day}&hour=${newParams.hour}&min=${newParams.min}&sort=${newParams.sort}`
}
