'use client'

interface FilterShowClosedBarsProps {
  mixOpenAndClosed: string
  handleChange: (param: string, e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const FilterShowClosedBars = ({
  mixOpenAndClosed,
  handleChange
}: FilterShowClosedBarsProps) => {
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
        }}
        value={mixOpenAndClosed}
        className="mb-2"
      >
        <option value={'-1'}>Välj</option>
        <option value={'false'}>Visa endast öppna barer</option>
        <option value={'true'}>Visa även stängda barer</option>
      </select>
    </>
  )
}
