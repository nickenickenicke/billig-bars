'use client'

import { useState } from 'react'

interface FilterShowClosedBarsProps {
  mixOpenAndClosed: string
  handleChange: (param: string, e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const FilterShowClosedBars = ({
  mixOpenAndClosed,
  handleChange
}: FilterShowClosedBarsProps) => {
  const [currentlySelectedHour, setCurrentlySelectedHour] = useState<string>(
    mixOpenAndClosed || 'false'
  )

  return (
    <>
      <label htmlFor="show-closed-bars-select" className="font-medium">
        Visa / dölj stängda barer
      </label>
      <select
        id="show-closed-bars-select"
        name="show-closed-bars"
        onChange={e => {
          handleChange('mixOpenAndClosed', e)
          setCurrentlySelectedHour(e.target.value)
        }}
        value={currentlySelectedHour}
        className="mb-2"
      >
        <option value={'-1'}>Välj</option>
        <option value={'false'}>Visa endast öppna barer</option>
        <option value={'true'}>Visa även stängda barer</option>
      </select>
    </>
  )
}
