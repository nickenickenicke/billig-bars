'use server'

import { Bar } from '@/models/Bar'
import { CurrentQuery } from '@/models/GlobalState'
import { CurrentLocation } from '@/models/Location'
import { createClient } from '@/utils/supabase/server'

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

export const getBarsWithQueryObject = async (
  query: CurrentQuery,
  currentLocation?: CurrentLocation
): Promise<Bar[]> => {
  const { sort } = query
  const location = currentLocation?.currentlat !== 0 ? currentLocation : {}

  let ascending = false
  if (sort === 'asc') {
    ascending = true
  }

  const supabase = await createClient()

  const { data, error } = await supabase
    .rpc('get_bars', location)
    .order('beer_price', { ascending })

  if (error) {
    console.error(error)
    return []
  }

  return data
}
