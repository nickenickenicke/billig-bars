'use client'

import { addZero, getCurrentHour, getTodaysWeekday, getWeekdayName } from '@/utils/timeTools'
import { FilterSearchParams } from './FilterSection'

interface FilterStatusProps {
  fitlerSearchParams: FilterSearchParams
}
export const FilterStatus = ({ fitlerSearchParams }: FilterStatusProps) => {
  let message = 'Visar barer som är öppna '
  fitlerSearchParams.day === ''
    ? (message += 'idag ')
    : (message +=
        getWeekdayName(+fitlerSearchParams.day || getTodaysWeekday()).toLowerCase() + 'ar ')
  fitlerSearchParams.hour === ''
    ? (message += getCurrentHour())
    : (message += 'klockan ' + addZero(+fitlerSearchParams.hour || getCurrentHour()) + '')
  message += '.'

  if (
    fitlerSearchParams.day !== '' ||
    fitlerSearchParams.hour !== '' ||
    fitlerSearchParams.min !== '' ||
    fitlerSearchParams.sortBy !== '' ||
    fitlerSearchParams.sortOrder !== '' ||
    fitlerSearchParams.mixOpenAndClosed !== ''
  ) {
    return <span className="-mt-2 block pb-1 text-center font-medium md:text-xl">{message}</span>
  }

  return null
}
