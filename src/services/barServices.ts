import { Bar } from '@/models/Bar'
import { createClient } from '../utils/supabase/server'
import { getCurrentHour, getCurrentMinute, getTodaysWeekday } from '../utils/timeTools'

export const getCurrentlyCheapestBar = async (): Promise<Bar[]> => {
  const supabase = await createClient()
  const { data, error } = await supabase
    .rpc('barswithminutes', {
      day_to_compare: getTodaysWeekday(),
      hour_to_compare: getCurrentHour(),
      min_to_compare: getCurrentMinute()
    })
    .order('is_open', { ascending: false })
    .order('beer_ppv', { ascending: true })
    .limit(1)
  if (error) {
    return []
  }

  return data
}
