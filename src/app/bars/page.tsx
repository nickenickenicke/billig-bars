import { Bars } from '@/models/Bars'
import { createClient } from '@/utils/supabase/server'

export default async function Countries() {
  const supabase = await createClient()
  const response = await supabase.from('bars').select()
  const bars: Bars[] = response.data || []

  return <pre>{JSON.stringify(bars, null, 2)}</pre>
}
