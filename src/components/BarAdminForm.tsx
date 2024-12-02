import { insertBar } from '@/actions/formActions'
import { FormHappyHours } from '@/components/form/FormHappyHours'
import { FormInput } from '@/components/form/FormInput'
import { FormLatLong } from '@/components/form/FormLatLong'
import { FormOpeningHours } from '@/components/form/FormOpeningHours'

export const BarAdminForm = () => {
  return (
    <form action={insertBar}>
      <FormInput label={'Venue Name'} name={'name'} text placeholder="Barnamn" required />

      <FormInput label={'Address'} name={'address'} text defaultValue="Hornsgatan " required />

      <FormInput
        label={'Postal Code'}
        name={'postal_code'}
        text
        numericInput
        defaultValue="118"
        required
      />

      <FormInput label={'City'} name={'city'} text defaultValue="Stockholm" required />

      <FormInput
        label={'Beer Volume (cl)'}
        name={'beer_volume'}
        text
        numericInput
        defaultValue="40"
        required
      />

      <FormInput
        label={'Beer Price (SEK)'}
        name={'beer_price'}
        text
        numericInput
        defaultValue="39"
        required
      />

      <FormLatLong />

      <FormOpeningHours />

      <FormHappyHours />

      <button type="submit">Submit</button>
    </form>
  )
}
