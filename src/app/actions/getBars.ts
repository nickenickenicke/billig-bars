'use server'

import { CurrentLocation } from '@/models/Location'
import { createClient } from '@/utils/supabase/server'

export const getBarsByLocation = async (location: CurrentLocation) => {
  const supabase = await createClient()

  const { data, error } = await supabase.rpc('get_nearby_bars_with_details', location)

  if (error) {
    console.error(error)
    return []
  }
  return data
}

export const getBars = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase.from('bars').select(`
    *,
    opening_hours (*),
    happy_hours (*)
  `)

  if (error) {
    console.error(error)
    return []
  }
  return data
}
