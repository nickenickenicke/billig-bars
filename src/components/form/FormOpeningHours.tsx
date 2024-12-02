'use client'

import { useState } from 'react'
import { FormOpeningHoursItem } from './FormOpeningHoursItem'

export const FormOpeningHours = () => {
  const [openingHours, setOpeningHours] = useState({
    opens_at_1: '14',
    closes_at_1: '1',
    opens_at_2: '14',
    closes_at_2: '1',
    opens_at_3: '14',
    closes_at_3: '1',
    opens_at_4: '14',
    closes_at_4: '1',
    opens_at_5: '14',
    closes_at_5: '1',
    opens_at_6: '14',
    closes_at_6: '1',
    opens_at_7: '14',
    closes_at_7: '1'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setOpeningHours({ ...openingHours, [name]: value })
  }

  const handleClosed = (day: number) => {
    setOpeningHours({ ...openingHours, [`opens_at_${day}`]: '', [`closes_at_${day}`]: '' })
  }

  const useMondayValuesForAllDays = () => {
    setOpeningHours({
      opens_at_1: openingHours.opens_at_1,
      closes_at_1: openingHours.closes_at_1,
      opens_at_2: openingHours.opens_at_1,
      closes_at_2: openingHours.closes_at_1,
      opens_at_3: openingHours.opens_at_1,
      closes_at_3: openingHours.closes_at_1,
      opens_at_4: openingHours.opens_at_1,
      closes_at_4: openingHours.closes_at_1,
      opens_at_5: openingHours.opens_at_1,
      closes_at_5: openingHours.closes_at_1,
      opens_at_6: openingHours.opens_at_1,
      closes_at_6: openingHours.closes_at_1,
      opens_at_7: openingHours.opens_at_1,
      closes_at_7: openingHours.closes_at_1
    })
  }

  return (
    <div className="opening-hours bg-slate-300 py-4">
      <h3>Opening Hours</h3>
      <div id="opening-hours-container">
        <FormOpeningHoursItem
          day={1}
          opens_at={openingHours.opens_at_1}
          closes_at={openingHours.closes_at_1}
          handleChange={handleChange}
          handleClosed={() => {
            handleClosed(1)
          }}
        />
        <button type="button" onClick={useMondayValuesForAllDays}>
          Use these values for all days
        </button>

        <FormOpeningHoursItem
          day={2}
          opens_at={openingHours.opens_at_2}
          closes_at={openingHours.closes_at_2}
          handleChange={handleChange}
          handleClosed={() => {
            handleClosed(2)
          }}
        />

        <FormOpeningHoursItem
          day={3}
          opens_at={openingHours.opens_at_3}
          closes_at={openingHours.closes_at_3}
          handleChange={handleChange}
          handleClosed={() => {
            handleClosed(3)
          }}
        />

        <FormOpeningHoursItem
          day={4}
          opens_at={openingHours.opens_at_4}
          closes_at={openingHours.closes_at_4}
          handleChange={handleChange}
          handleClosed={() => {
            handleClosed(4)
          }}
        />

        <FormOpeningHoursItem
          day={5}
          opens_at={openingHours.opens_at_5}
          closes_at={openingHours.closes_at_5}
          handleChange={handleChange}
          handleClosed={() => {
            handleClosed(5)
          }}
        />

        <FormOpeningHoursItem
          day={6}
          opens_at={openingHours.opens_at_6}
          closes_at={openingHours.closes_at_6}
          handleChange={handleChange}
          handleClosed={() => {
            handleClosed(6)
          }}
        />

        <FormOpeningHoursItem
          day={7}
          opens_at={openingHours.opens_at_7}
          closes_at={openingHours.closes_at_7}
          handleChange={handleChange}
          handleClosed={() => {
            handleClosed(7)
          }}
        />
      </div>
    </div>
  )
}
