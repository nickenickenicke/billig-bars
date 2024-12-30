'use client'

import { FilterByHour } from '@/components/FilterByHour'
import { FilterButton } from './FilterButton'
import { useState } from 'react'
import { FilterStatus } from './FilterStatus'
import { useSearchParams, useRouter } from 'next/navigation'
import { checkFilterSearchParams, createParamString } from '@/utils/filterTools'
import { FilterByWeekday } from './FilterByWeekday'

export interface FilterSearchParams {
  day: string
  hour: string
  min: string
  sortOrder: string
}

export const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  const filterSearchParams = checkFilterSearchParams(searchParams)

  const handleFilterChange = (param: string, e: React.ChangeEvent<HTMLSelectElement>) => {
    if (param === 'hour' || param === 'day') {
      console.log(param, e.target.value)

      switch (e.target.value) {
        case '-1': {
          break
        }
        default:
          if (filterSearchParams[param] === e.target.value) break
          const newParamString = createParamString(filterSearchParams, param, e.target.value)
          router.push('/bars' + newParamString, { scroll: false })
          break
      }
    }
  }

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
          <FilterByWeekday weekday={filterSearchParams.day} handleChange={handleFilterChange} />
          <FilterByHour hour={filterSearchParams.hour} handleChange={handleFilterChange} />
          <span className="block">Visa bara barer som är öppna först</span>
          <span className="block">Sortera efter närmast, billigast</span>
          <FilterStatus />
        </div>
      </nav>
    </>
  )
}
