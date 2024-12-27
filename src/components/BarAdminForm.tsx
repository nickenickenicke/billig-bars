'use client'

import { insertBar } from '@/actions/formActions'
import { FormHappyHours } from '@/components/form/FormHappyHours'
import { FormInput } from '@/components/form/FormInput'
import { FormLatLong } from '@/components/form/FormLatLong'
import { FormOpeningHours } from '@/components/form/FormOpeningHours'
import { FormSubmitButton } from './form/FormSubmitButton'
import { useFormState } from 'react-dom'
import { Subheading } from './Subheading'

export const BarAdminForm = () => {
  const [formState, action] = useFormState(insertBar, { message: '' })
  return (
    <form action={action} className="md:mx-auto md:w-1/2">
      <Subheading className="mb-4">Lägg till ny bar</Subheading>
      <div className="px-2">
        <FormInput label={'Barnamn'} name={'name'} text placeholder="Barnamn" required />

        <FormInput label={'Adress'} name={'address'} text defaultValue="Hornsgatan " required />

        <FormInput
          label={'Postnummer'}
          name={'postal_code'}
          text
          numericInput
          defaultValue="118"
          required
        />

        <FormInput label={'Stad'} name={'city'} text defaultValue="Stockholm" required />

        <FormInput
          label={'Ölvolym (cl)'}
          name={'beer_volume'}
          text
          numericInput
          defaultValue="40"
          required
        />

        <FormInput
          label={'Ölpris (SEK)'}
          name={'beer_price'}
          text
          numericInput
          defaultValue="39"
          required
        />

        <FormLatLong />
      </div>

      <Subheading className="mb-4">Öppettider</Subheading>
      <FormOpeningHours />

      <Subheading className="mb-4">Happy hours</Subheading>
      <FormHappyHours />
      <span className="block p-2">{formState.message && formState.message} </span>
      <FormSubmitButton label={'Spara'} loadingMessage={'Laddar...'} className="mt-6" />
    </form>
  )
}
