'use client'

import { FilterByHour } from '@/components/FilterByHour'
import { FilterButton } from './FilterButton'
import { useState } from 'react'
import { FilterStatus } from './FilterStatus'
import { useSearchParams, useRouter } from 'next/navigation'
import { checkFilterSearchParams, createParamString } from '@/utils/filterTools'
import { FilterByWeekday } from './FilterByWeekday'
import { FilterSortBy } from './FilterSortBy'
import { GeolocateButton } from './GeolocateButton'
import { FilterShowClosedBars } from './FilterShowClosedBars'

export interface FilterSearchParams {
  day: string
  hour: string
  min: string
  sortOrder: string
  sortBy: string
  mixOpenAndClosed: string
}

export const FilterSection = () => {
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(searchParams.size !== 0)
  const router = useRouter()

  const filterSearchParams = checkFilterSearchParams(searchParams)

  const handleFilterChange = (param: string, e: React.ChangeEvent<HTMLSelectElement>) => {
    if (param === 'hour' || param === 'day' || param === 'sortBy' || param === 'mixOpenAndClosed') {
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

  const clearFilters = () => {
    router.push('/bars', { scroll: false })
  }

  const handleGeolocated = () => {
    const newParamString = createParamString(filterSearchParams, 'sortBy', 'distance')
    router.push('/bars' + newParamString, { scroll: false })
  }

  const toggleFilterBar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GeolocateButton updateFilter={handleGeolocated} />
      <nav
        className="group grid w-full grid-cols-1 grid-rows-[3rem_0fr] transition-all data-[filter-open=true]:grid-rows-[3rem_1fr] md:grid-rows-[3.5rem_0fr] md:data-[filter-open=true]:grid-rows-[3.5rem_1fr]"
        data-filter-open={isOpen}
      >
        <div className="flex justify-end pb-2">
          <FilterButton onClick={toggleFilterBar} />
        </div>
        <div className="flex flex-col gap-1 overflow-hidden border-b border-black group-data-[filter-open=false]:border-none md:text-lg">
          <FilterByWeekday weekday={filterSearchParams.day} handleChange={handleFilterChange} />
          <FilterByHour hour={filterSearchParams.hour} handleChange={handleFilterChange} />
          <FilterShowClosedBars
            mixOpenAndClosed={filterSearchParams.mixOpenAndClosed}
            handleChange={handleFilterChange}
          />
          <FilterSortBy sortBy={filterSearchParams.sortBy} handleChange={handleFilterChange} />
          <button
            className="mb-2 flex items-center gap-2 self-end border-none py-2 pl-7 pr-2 uppercase underline underline-offset-2 md:text-lg"
            onClick={clearFilters}
          >
            <span>Rensa filter</span>
          </button>
          <FilterStatus fitlerSearchParams={filterSearchParams} />
        </div>
      </nav>
    </>
  )
}
