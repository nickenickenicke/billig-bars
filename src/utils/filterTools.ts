import { FilterSearchParams } from '@/components/FilterSection'

export const checkFilterSearchParams = (searchParams: URLSearchParams): FilterSearchParams => {
  const day = searchParams.get('day') || ''
  const hour = searchParams.get('hour') || ''
  const min = searchParams.get('min') || ''
  const sortOrder = searchParams.get('sortOrder') || ''
  const sortBy = searchParams.get('sortBy') || ''
  const mixOpenAndClosed = searchParams.get('mixOpenAndClosed') || ''
  return { day, hour, min, sortOrder, sortBy, mixOpenAndClosed }
}

export const createParamString = (
  params: FilterSearchParams,
  updatedParamKey: string,
  updatedParamValue: string
): string => {
  const newParams = { ...params, [updatedParamKey]: updatedParamValue }
  return `?day=${newParams.day}&hour=${newParams.hour}&min=${newParams.min}&sortOrder=${newParams.sortOrder}&sortBy=${newParams.sortBy}&mixOpenAndClosed=${newParams.mixOpenAndClosed}`
}
