import { Bar } from '@/models/Bar'
import { createClient } from '../utils/supabase/server'

export const getCurrentlyCheapestBar = async (): Promise<Bar[]> => {
  const supabase = await createClient()
  const { data, error } = await supabase
    .rpc('barsnextopen', {
      comparison_timestamp: new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' })
    })
    .order('is_open', { ascending: false })
    .order('beer_ppv', { ascending: true })
    .limit(1)
  if (error) {
    return []
  }

  return data
}
