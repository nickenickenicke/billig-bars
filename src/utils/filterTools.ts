import { FilterSearchParams } from '@/components/FilterBar'

export const checkFilterSearchParams = (searchParams: URLSearchParams): FilterSearchParams => {
  const day = searchParams.get('day') || ''
  const hour = searchParams.get('hour') || ''
  const min = searchParams.get('min') || ''
  const sortOrder = searchParams.get('sortOrder') || ''
  return { day, hour, min, sortOrder }
}

export const createParamString = (
  params: FilterSearchParams,
  updatedParamKey: string,
  updatedParamValue: string
): string => {
  const newParams = { ...params, [updatedParamKey]: updatedParamValue }
  return `?day=${newParams.day}&hour=${newParams.hour}&min=${newParams.min}&sortOrder=${newParams.sortOrder}`
}
