import { FilterIcon } from './FilterIcon'

interface FilterButtonProps {
  onClick: () => void
}

export const FilterButton = ({ onClick }: FilterButtonProps) => {
  return (
    <button
      className="flex items-center gap-2 border-none py-2 pl-7 pr-2 uppercase underline underline-offset-2 md:text-lg"
      onClick={onClick}
    >
      <span>Filtrering</span>
      <FilterIcon />
    </button>
  )
}
