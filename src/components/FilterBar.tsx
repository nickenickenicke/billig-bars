'use client'

import { FilterByHour } from '@/components/FilterByHour'
import { FilterButton } from './FilterButton'
import { useState } from 'react'
import { FilterStatus } from './FilterStatus'
import { useSearchParams } from 'next/navigation'
import { checkFilterSearchParams } from '@/utils/filterTools'

export interface FilterSearchParams {
  day: string
  hour: string
  min: string
  sort: string
}

export const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const searchParams = useSearchParams()

  const filterSearchParams = checkFilterSearchParams(searchParams)

  const toggleFilterBar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav
        className="group grid w-full grid-cols-1 grid-rows-[3rem_0fr] transition-all data-[filter-open=true]:grid-rows-[3rem_1fr] md:grid-rows-[3.5rem_0fr] md:data-[filter-open=true]:grid-rows-[3.5rem_1fr]"
        data-filter-open={isOpen}
      >
        <div className="flex justify-end pb-2">
          <FilterButton onClick={toggleFilterBar} />
        </div>
        <div className="group-data-[filter-open=false]:border- overflow-hidden border-b border-black">
          <span className="block">Veckodag</span>
          <FilterByHour />
          <span className="block">Visa bara barer som är öppna först</span>
          <span className="block">Sortera efter närmast, billigast</span>
          <FilterStatus />
        </div>
      </nav>
    </>
  )
}
