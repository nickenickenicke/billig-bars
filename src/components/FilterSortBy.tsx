'use client'

interface FilterSortByProps {
  sortBy: string
  handleChange: (param: string, e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const FilterSortBy = ({ sortBy, handleChange }: FilterSortByProps) => {
  return (
    <>
      <label htmlFor="sort-by-select" className="font-medium">
        Sortera efter
      </label>
      <select
        id="sort-by-select"
        name="sort-by"
        onChange={e => {
          handleChange('sortBy', e)
        }}
        value={sortBy}
        className="mb-2"
      >
        <option value={'-1'}>Välj</option>
        <option value={'price'}>Pris</option>
        <option value={'distance'}>Avstånd</option>
      </select>
    </>
  )
}
