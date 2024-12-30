'use client'

import { FilterByHour } from '@/components/FilterByHour'
import { FilterButton } from './FilterButton'
import { useState } from 'react'
import { FilterStatus } from './FilterStatus'

export const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav
        className="group grid w-full grid-cols-1 grid-rows-[3rem_0fr] transition-all data-[filter-open=true]:grid-rows-[3rem_1fr] md:grid-rows-[3.5rem_0fr] md:data-[filter-open=true]:grid-rows-[3.5rem_1fr]"
        data-filter-open={isOpen}
      >
        <div className="flex justify-end pb-2">
          <FilterButton onClick={handleClick} />
        </div>
        <div className="group-data-[filter-open=false]:border- overflow-hidden border-b border-black">
          <FilterByHour />
          <FilterStatus />
        </div>
      </nav>
    </>
  )
}
