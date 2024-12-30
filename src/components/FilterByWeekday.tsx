'use client'

import { weekdayNames } from '@/lib/weekdays'
import { useState } from 'react'

interface FilterByWeekdayProps {
  weekday: string
  handleChange: (param: string, e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const FilterByWeekday = ({ weekday, handleChange }: FilterByWeekdayProps) => {
  const [currentlySelectedWeekday, setCurrentlySelectedWeekday] = useState<string>(weekday)

  return (
    <>
      <label htmlFor="weekday-select">Veckodag</label>
      <select
        id="weekday-select"
        name="weekday"
        onChange={e => {
          handleChange('day', e)
          setCurrentlySelectedWeekday(e.target.value)
        }}
        value={currentlySelectedWeekday}
      >
        <option value={'-1'}>Välj</option>
        <option value={''}>Idag</option>
        {weekdayNames.map((weekdayName, index) => {
          return (
            <option key={weekdayName} value={index + 1}>
              {weekdayName}
            </option>
          )
        })}
      </select>
    </>
  )
}
