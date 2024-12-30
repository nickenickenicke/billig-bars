'use server'

import { Bar } from '@/models/Bar'
import { CurrentQuery } from '@/models/GlobalState'
import { CurrentLocation } from '@/models/Location'
import { SupabaseQuery } from '@/models/Queries'
import { createClient } from '@/utils/supabase/server'
import {
  addZero,
  adjustQueryTimestamp,
  getCurrentHour,
  getCurrentMinute,
  getTodaysWeekday
} from '@/utils/timeTools'

export const getBarsWithQueryObject = async (
  query: CurrentQuery,
  currentLocation: CurrentLocation
): Promise<Bar[]> => {
  const { sort } = query
  let ascending = false
  if (sort === 'asc') {
    ascending = true
  }

  const dbQuery = createSupabaseQuery(query, currentLocation)

  // const dbQuery: SupabaseQuery = {
  //   currentlat: 59.30780523805108,
  //   currentlong: 18.07725504267913,
  //   comparison_timestamp = '2027-02-01T13:30:00.000Z'
  // }

  const supabase = await createClient()

  const { data, error } = await supabase
    .rpc('barsnextopen', dbQuery)
    .order('is_open', { ascending: false })
    .order('dist_meters', { ascending: true })
    .order('beer_price', { ascending })

  if (error) {
    console.error(error)
    return []
  }

  return data
}

const createSupabaseQuery = (query: CurrentQuery, location: CurrentLocation): SupabaseQuery => {
  let comparison_timestamp = ''

  if (query.day === null && query.hour === null && query.min === null) {
    comparison_timestamp = new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' })
  } else {
    comparison_timestamp += '2027-02-0' + (query.day || getTodaysWeekday())
    query.hour === 0
      ? (comparison_timestamp += 'T00')
      : (comparison_timestamp += 'T' + addZero(query.hour || getCurrentHour()))
    ;(query.min === null && query.hour) || (query.min === 0 && query.hour)
      ? (comparison_timestamp += ':00')
      : (comparison_timestamp += ':' + addZero(query.min || getCurrentMinute()))
    comparison_timestamp += ':00.000Z'
  }

  comparison_timestamp = adjustQueryTimestamp(comparison_timestamp)

  if (location.currentlat === 0) {
    return {
      comparison_timestamp
    }
  }

  return {
    currentlat: location.currentlat,
    currentlong: location.currentlong,
    comparison_timestamp
  }
}
