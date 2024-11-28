'use server'

import { CurrentLocation } from '@/models/Location'
import { createClient } from '@/utils/supabase/server'

export const getBarsByLocation = async (location: CurrentLocation) => {
  const supabase = await createClient()

  const { data, error } = await supabase.rpc('nearby_bars', location)

  if (error) {
    console.error(error)
    return []
  }
  return data
}
