import { Bar } from '@/models/Bar'
import { createClient } from '../utils/supabase/server'
import { DB_ALL_BARS_FUNCTION } from '@/lib/dbFunctionNames'

export const getCurrentlyCheapestBars = async (): Promise<Bar[]> => {
  const supabase = await createClient()
  const { data, error } = await supabase
    .rpc(DB_ALL_BARS_FUNCTION, {
      comparison_timestamp: new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' })
    })
    .order('is_open', { ascending: false })
    .order('current_price', { ascending: true })
  if (error) {
    return []
  }

  return data
}
