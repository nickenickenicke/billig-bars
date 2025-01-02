import { Bar } from '@/models/Bar'
import { createClient } from '../utils/supabase/server'

export const getCurrentlyCheapestBars = async (): Promise<Bar[]> => {
  const supabase = await createClient()
  const { data, error } = await supabase
    .rpc('barsnextopen', {
      comparison_timestamp: new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' })
    })
    .order('is_open', { ascending: false })
    .order('current_price', { ascending: true })
  if (error) {
    return []
  }

  return data
}
