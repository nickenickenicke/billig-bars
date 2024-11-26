import { createClient } from '@/utils/supabase/server'

export default async function Countries() {
  const supabase = await createClient()
  const { data: bars } = await supabase.from('bars').select()

  return <pre>{JSON.stringify(bars, null, 2)}</pre>
}
