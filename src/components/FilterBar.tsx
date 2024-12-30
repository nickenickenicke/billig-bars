import { FilterByHour } from '@/components/FilterByHour'
import { FilterIcon } from './FilterIcon'

export const FilterBar = () => {
  return (
    <>
      <h3>FILTERING</h3>
      <FilterIcon />
      <FilterByHour />
    </>
  )
}
