'use server'

import { BarFormData, HappyHours, OpeningHours } from '@/models/Bar'
import { FormState } from '@/models/Forms'
import { formErrorToState } from '@/utils/errorTools'
import { calculatePPV } from '@/utils/priceTools'
import { createClient } from '@/utils/supabase/server'

export const insertBar = async (formState: FormState, formData: FormData): Promise<FormState> => {
  const openingHours: OpeningHours[] = []
  for (let index = 0; index < 7; index++) {
    let opens_at = formData.get(`opens_at_${index + 1}`)
    let closes_at = formData.get(`closes_at_${index + 1}`)
    if (opens_at && closes_at) {
      openingHours.push({
        day_of_week: index + 1,
        opens_at: parseInt(opens_at as string),
        closes_at: parseInt(closes_at as string)
      })
    }
  }
  const happyHours: HappyHours[] = []
  for (let index = 0; index < 7; index++) {
    let starts_at = formData.get(`happy_starts_at_${index + 1}`)
    let ends_at = formData.get(`happy_ends_at_${index + 1}`)
    let volume = formData.get(`happy_volume_${index + 1}`)
    let price = formData.get(`happy_price_${index + 1}`)
    if (starts_at && ends_at && price && volume) {
      const ppv = calculatePPV(price as string, volume as string)
      happyHours.push({
        day_of_week: index + 1,
        starts_at: parseInt(starts_at as string),
        ends_at: parseInt(ends_at as string),
        price: parseInt(price as string),
        volume: parseInt(volume as string),
        ppv: ppv
      })
    }
  }

  const beer_ppv = calculatePPV(
    formData.get('beer_price') as string,
    formData.get('beer_volume') as string
  )

  const barData: BarFormData = {
    name: (formData.get('name') as string).trim(),
    address: (formData.get('address') as string).trim(),
    postal_code: parseInt(formData.get('postal_code') as string),
    city: (formData.get('city') as string).trim(),
    beer_volume: parseInt(formData.get('beer_volume') as string),
    beer_price: parseInt(formData.get('beer_price') as string),
    beer_ppv,
    long: parseFloat(formData.get('longitude') as string),
    lat: parseFloat(formData.get('latitude') as string),
    location: `POINT(${formData.get('longitude')} ${formData.get('latitude')})`,
    opening_hours: openingHours,
    happy_hours: happyHours
  }

  const supabase = await createClient()

  let { data, error } = await supabase.rpc('upsert_bar_details', { p_bar_data: barData })

  if (error) {
    return formErrorToState(error)
  }

  return {
    message: 'Bar inserted successfully'
  }
}
