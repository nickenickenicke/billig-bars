'use client'

import { useState } from 'react'
import { FormHappyHourItem } from './FormHappyHourItem'

export const FormHappyHours = () => {
  const [happyHours, setHappyHours] = useState<{ [key: string]: any }>({
    happy_starts_at_1: '',
    happy_starts_at_min_1: '',
    happy_ends_at_1: '',
    happy_ends_at_min_1: '',
    happy_volume_1: '',
    happy_price_1: '',
    happy_starts_at_2: '',
    happy_starts_at_min_2: '',
    happy_ends_at_2: '',
    happy_ends_at_min_2: '',
    happy_volume_2: '',
    happy_price_2: '',
    happy_starts_at_3: '',
    happy_starts_at_min_3: '',
    happy_ends_at_3: '',
    happy_ends_at_min_3: '',
    happy_volume_3: '',
    happy_price_3: '',
    happy_starts_at_4: '',
    happy_starts_at_min_4: '',
    happy_ends_at_4: '',
    happy_ends_at_min_4: '',
    happy_volume_4: '',
    happy_price_4: '',
    happy_starts_at_5: '',
    happy_starts_at_min_5: '',
    happy_ends_at_5: '',
    happy_ends_at_min_5: '',
    happy_volume_5: '',
    happy_price_5: '',
    happy_starts_at_6: '',
    happy_starts_at_min_6: '',
    happy_ends_at_6: '',
    happy_ends_at_min_6: '',
    happy_volume_6: '',
    happy_price_6: '',
    happy_starts_at_7: '',
    happy_starts_at_min_7: '',
    happy_ends_at_7: '',
    happy_ends_at_min_7: '',
    happy_volume_7: '',
    happy_price_7: ''
  })
  const [hasHappyHours, setHasHappyHours] = useState(false)

  const toggleHappyHours = () => {
    setHasHappyHours(!hasHappyHours)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setHappyHours({ ...happyHours, [name]: value })
  }

  const handleClearDay = (day: number) => {
    setHappyHours({
      ...happyHours,
      [`happy_starts_at_${day}`]: '',
      [`happy_starts_at_min_${day}`]: '',
      [`happy_ends_at_${day}`]: '',
      [`happy_ends_at_min_${day}`]: '',
      [`happy_volume_${day}`]: '',
      [`happy_price_${day}`]: ''
    })
  }

  const handleHourFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const selectedHour = e.target.name
    const selectedMinute: string = `${selectedHour.slice(0, -1)}min_${selectedHour.slice(-1)}`
    if (happyHours[selectedMinute] === '') {
      setHappyHours({ ...happyHours, [selectedMinute]: '00' })
    }
  }

  const useMondayValuesForAllDays = () => {
    setHappyHours({
      ...happyHours,
      happy_starts_at_2: happyHours.happy_starts_at_1,
      happy_starts_at_min_2: happyHours.happy_starts_at_min_1,
      happy_ends_at_2: happyHours.happy_ends_at_1,
      happy_ends_at_min_2: happyHours.happy_ends_at_min_1,
      happy_volume_2: happyHours.happy_volume_1,
      happy_price_2: happyHours.happy_price_1,
      happy_starts_at_3: happyHours.happy_starts_at_1,
      happy_starts_at_min_3: happyHours.happy_starts_at_min_1,
      happy_ends_at_3: happyHours.happy_ends_at_1,
      happy_ends_at_min_3: happyHours.happy_ends_at_min_1,
      happy_volume_3: happyHours.happy_volume_1,
      happy_price_3: happyHours.happy_price_1,
      happy_starts_at_4: happyHours.happy_starts_at_1,
      happy_starts_at_min_4: happyHours.happy_starts_at_min_1,
      happy_ends_at_4: happyHours.happy_ends_at_1,
      happy_ends_at_min_4: happyHours.happy_ends_at_min_1,
      happy_volume_4: happyHours.happy_volume_1,
      happy_price_4: happyHours.happy_price_1,
      happy_starts_at_5: happyHours.happy_starts_at_1,
      happy_starts_at_min_5: happyHours.happy_starts_at_min_1,
      happy_ends_at_5: happyHours.happy_ends_at_1,
      happy_ends_at_min_5: happyHours.happy_ends_at_min_1,
      happy_volume_5: happyHours.happy_volume_1,
      happy_price_5: happyHours.happy_price_1,
      happy_starts_at_6: happyHours.happy_starts_at_1,
      happy_starts_at_min_6: happyHours.happy_starts_at_min_1,
      happy_ends_at_6: happyHours.happy_ends_at_1,
      happy_ends_at_min_6: happyHours.happy_ends_at_min_1,
      happy_volume_6: happyHours.happy_volume_1,
      happy_price_6: happyHours.happy_price_1,
      happy_starts_at_7: happyHours.happy_starts_at_1,
      happy_starts_at_min_7: happyHours.happy_starts_at_min_1,
      happy_ends_at_7: happyHours.happy_ends_at_1,
      happy_ends_at_min_7: happyHours.happy_ends_at_min_1,
      happy_volume_7: happyHours.happy_volume_1,
      happy_price_7: happyHours.happy_price_1
    })
  }

  return (
    <div className="happy-hours bg-bg-mustard px-2 py-4">
      <button
        type="button"
        onClick={toggleHappyHours}
        className={`w-full ${hasHappyHours ? 'mb-4' : ''}`}
      >
        {hasHappyHours ? 'Göm' : 'Visa'} happy hours
      </button>
      {hasHappyHours && (
        <>
          <FormHappyHourItem
            day={1}
            happy_starts_at={happyHours.happy_starts_at_1}
            happy_starts_at_min={happyHours.happy_starts_at_min_1}
            happy_ends_at={happyHours.happy_ends_at_1}
            happy_ends_at_min={happyHours.happy_ends_at_min_1}
            happy_volume={happyHours.happy_volume_1}
            happy_price={happyHours.happy_price_1}
            handleChange={handleChange}
            handleHourFocus={handleHourFocus}
            handleClearDay={() => {
              handleClearDay(1)
            }}
          />
          <button type="button" onClick={useMondayValuesForAllDays} className="mb-8 w-full">
            Använd samma värden för alla dagar
          </button>
          <FormHappyHourItem
            day={2}
            happy_starts_at={happyHours.happy_starts_at_2}
            happy_starts_at_min={happyHours.happy_starts_at_min_2}
            happy_ends_at={happyHours.happy_ends_at_2}
            happy_ends_at_min={happyHours.happy_ends_at_min_2}
            happy_volume={happyHours.happy_volume_2}
            happy_price={happyHours.happy_price_2}
            handleChange={handleChange}
            handleHourFocus={handleHourFocus}
            handleClearDay={() => {
              handleClearDay(2)
            }}
          />
          <FormHappyHourItem
            day={3}
            happy_starts_at={happyHours.happy_starts_at_3}
            happy_starts_at_min={happyHours.happy_starts_at_min_3}
            happy_ends_at={happyHours.happy_ends_at_3}
            happy_ends_at_min={happyHours.happy_ends_at_min_3}
            happy_volume={happyHours.happy_volume_3}
            happy_price={happyHours.happy_price_3}
            handleChange={handleChange}
            handleHourFocus={handleHourFocus}
            handleClearDay={() => {
              handleClearDay(3)
            }}
          />
          <FormHappyHourItem
            day={4}
            happy_starts_at={happyHours.happy_starts_at_4}
            happy_starts_at_min={happyHours.happy_starts_at_min_4}
            happy_ends_at={happyHours.happy_ends_at_4}
            happy_ends_at_min={happyHours.happy_ends_at_min_4}
            happy_volume={happyHours.happy_volume_4}
            happy_price={happyHours.happy_price_4}
            handleChange={handleChange}
            handleHourFocus={handleHourFocus}
            handleClearDay={() => {
              handleClearDay(4)
            }}
          />
          <FormHappyHourItem
            day={5}
            happy_starts_at={happyHours.happy_starts_at_5}
            happy_starts_at_min={happyHours.happy_starts_at_min_5}
            happy_ends_at={happyHours.happy_ends_at_5}
            happy_ends_at_min={happyHours.happy_ends_at_min_5}
            happy_volume={happyHours.happy_volume_5}
            happy_price={happyHours.happy_price_5}
            handleChange={handleChange}
            handleHourFocus={handleHourFocus}
            handleClearDay={() => {
              handleClearDay(5)
            }}
          />
          <FormHappyHourItem
            day={6}
            happy_starts_at={happyHours.happy_starts_at_6}
            happy_starts_at_min={happyHours.happy_starts_at_min_6}
            happy_ends_at={happyHours.happy_ends_at_6}
            happy_ends_at_min={happyHours.happy_ends_at_min_6}
            happy_volume={happyHours.happy_volume_6}
            happy_price={happyHours.happy_price_6}
            handleChange={handleChange}
            handleHourFocus={handleHourFocus}
            handleClearDay={() => {
              handleClearDay(6)
            }}
          />
          <FormHappyHourItem
            day={7}
            happy_starts_at={happyHours.happy_starts_at_7}
            happy_starts_at_min={happyHours.happy_starts_at_min_7}
            happy_ends_at={happyHours.happy_ends_at_7}
            happy_ends_at_min={happyHours.happy_ends_at_min_7}
            happy_volume={happyHours.happy_volume_7}
            happy_price={happyHours.happy_price_7}
            handleChange={handleChange}
            handleHourFocus={handleHourFocus}
            handleClearDay={() => {
              handleClearDay(7)
            }}
          />
        </>
      )}
    </div>
  )
}
