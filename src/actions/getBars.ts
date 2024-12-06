'use server'

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
