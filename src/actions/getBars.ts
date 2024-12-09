'use server'

import { Bar } from '@/models/Bar'
import { CurrentQuery } from '@/models/GlobalState'
import { CurrentLocation } from '@/models/Location'
import { createClient } from '@/utils/supabase/server'
import { getCurrentHour, getTodaysWeekday } from '@/utils/timeTools'

type SupabaseQuery = {
  currentlat?: number
  currentlong?: number
  day_to_compare: number
  hour_to_compare: number
}

export const getBarsByLocation = async (location: CurrentLocation) => {
  const supabase = await createClient()

  const { data, error } = await supabase
    .rpc('get_bars', location)
    .order('dist_meters', { ascending: true })

  if (error) {
    console.error(error)
    return []
  }

  return data
}

export const getBars = async () => {
  const supabase = await createClient()

  const { data, error } = await supabase
    .rpc('get_bars', {})
    .order('beer_price', { ascending: true })

  if (error) {
    console.error(error)
    return []
  }

  return data
}

export const getBarsWithQueryObjectCheckOpen = async (
  query: CurrentQuery,
  currentLocation: CurrentLocation
) => {
  const { sort } = query
  let ascending = false
  if (sort === 'asc') {
    ascending = true
  }

  const dbQuery = createSupabaseQuery(query, currentLocation)

  const supabase = await createClient()

  //No location, no need to order by distance
  if (currentLocation.currentlat === 0 || currentLocation.currentlong === 0) {
    const { data, error } = await supabase
      .rpc('opennow', dbQuery)
      .order('beer_price', { ascending })

    if (error) {
      console.error(error)
      return []
    }

    return data
  }

  //With location, order by distance
  const { data, error } = await supabase
    .rpc('opennow', dbQuery)
    .order('dist_meters', { ascending: true })
    .order('beer_price', { ascending })

  if (error) {
    console.error(error)
    return []
  }

  return data
}

const createSupabaseQuery = (query: CurrentQuery, location: CurrentLocation): SupabaseQuery => {
  const hour = query.hour || getCurrentHour()
  const day = query.day || getTodaysWeekday()

  if (location.currentlat === 0) {
    return {
      day_to_compare: day,
      hour_to_compare: hour
    }
  }

  return {
    currentlat: location.currentlat,
    currentlong: location.currentlong,
    day_to_compare: day,
    hour_to_compare: hour
  }
}
