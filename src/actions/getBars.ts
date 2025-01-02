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
  getCurrentWeekday
} from '@/utils/timeTools'
import { PostgrestError } from '@supabase/supabase-js'

export const getBarsWithQueryObject = async (
  query: CurrentQuery,
  currentLocation: CurrentLocation
): Promise<Bar[]> => {
  const dbQuery = createSupabaseQuery(query, currentLocation)

  const { data, error } = await retrieveBarsBasedOnQuery(query, dbQuery)

  if (error) {
    console.error(error)
    return []
  }

  return data
}

const retrieveBarsBasedOnQuery = async (
  currentQuery: CurrentQuery,
  dbQuery: SupabaseQuery
): Promise<{ data: any; error: PostgrestError | null }> => {
  let ascending = false
  if (currentQuery.sortOrder === 'asc') {
    ascending = true
  }

  const supabase = await createClient()

  if (currentQuery.sortBy === 'distance' && currentQuery.mixOpenAndClosed === true) {
    const { data, error } = await supabase
      .rpc('barsnextopen', dbQuery)
      .order('dist_meters', { ascending })
      .order('current_price', { ascending: true })
    return { data, error }
  } else if (currentQuery.sortBy === 'distance' && currentQuery.mixOpenAndClosed === false) {
    const { data, error } = await supabase
      .rpc('barsnextopen', dbQuery)
      .order('is_open', { ascending: false })
      .order('dist_meters', { ascending })
      .order('current_price', { ascending: true })
    return { data, error }
  } else if (currentQuery.sortBy === 'price' && currentQuery.mixOpenAndClosed === true) {
    const { data, error } = await supabase
      .rpc('barsnextopen', dbQuery)
      .order('current_price', { ascending })
      .order('dist_meters', { ascending: true })
    return { data, error }
  } else if (currentQuery.sortBy === 'price' && currentQuery.mixOpenAndClosed === false) {
    const { data, error } = await supabase
      .rpc('barsnextopen', dbQuery)
      .order('is_open', { ascending: false })
      .order('current_price', { ascending })
      .order('dist_meters', { ascending: true })
    return { data, error }
  } else if (currentQuery.mixOpenAndClosed === true) {
    const { data, error } = await supabase
      .rpc('barsnextopen', dbQuery)
      .order('dist_meters', { ascending: false })
      .order('current_price', { ascending })
    return { data, error }
  } else {
    const { data, error } = await supabase
      .rpc('barsnextopen', dbQuery)
      .order('is_open', { ascending: false })
      .order('dist_meters', { ascending: true })
      .order('current_price', { ascending })

    return { data, error }
  }
}

const createSupabaseQuery = (query: CurrentQuery, location: CurrentLocation): SupabaseQuery => {
  let comparison_timestamp = ''

  if (query.day === null && query.hour === null && query.min === null) {
    comparison_timestamp = new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' })
  } else {
    comparison_timestamp += '2027-02-0' + (query.day || getCurrentWeekday())
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
