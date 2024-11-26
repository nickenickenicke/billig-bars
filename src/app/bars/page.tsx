import { Bars } from '@/models/Bars'
import { createClient } from '@/utils/supabase/server'

export default async function Countries() {
  const supabase = await createClient()
  // const response = await supabase.from('bars').select()

  const { data, error } = await supabase.rpc('nearby_bars', {
    lat: 59.31803212061374,
    long: 18.054961588411196
  })
  console.log(data)
  console.log(error)

  const bars: Bars[] = data || []

  return (
    <pre>
      HEJ!
      {JSON.stringify(bars, null, 2)}
    </pre>
  )
}
