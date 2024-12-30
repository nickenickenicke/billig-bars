import { FilterIcon } from './FilterIcon'

interface FilterButtonProps {
  onClick: () => void
}

export const FilterButton = ({ onClick }: FilterButtonProps) => {
  return (
    <button className="flex items-center gap-2 px-7 py-2">
      <span>Filtrering</span>
      <FilterIcon />
    </button>
  )
}
