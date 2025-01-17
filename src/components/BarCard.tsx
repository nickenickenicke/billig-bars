import { Bar } from '@/models/Bar'
import Link from 'next/link'
import { CurrentLocation } from '@/models/Location'
import { BeerPriceCircle } from './BeerPriceCircle'
import { BeerStats } from './BeerStats'
import { BarCardInformation } from './BarCardInformation'
import { BarPills } from './BarPills'

interface BarCardProps {
  bar: Bar
  currentLocation?: CurrentLocation
  className?: string
}

export const BarCard = ({ bar, currentLocation, className }: BarCardProps) => {
  return (
    <>
      <Link
        href={`/bars/${bar.id}${currentLocation ? `?currentlat=${currentLocation.currentlat}&currentlong=${currentLocation.currentlong}` : ''}`}
        className={`grid grid-cols-[1fr_1fr_auto_100px] grid-rows-[1fr_auto_50px] justify-between rounded-none border-b border-b-gray-900 bg-white px-2 py-5 ${className ? className : ''} md:hover:bg-bg-blue`}
      >
        <div className="col-[1/3] row-[1/3] md:text-lg">
          <BarCardInformation bar={bar} />
        </div>

        <div className="col-[1/4] row-[3/4] flex flex-row-reverse gap-2 pr-2">
          <BeerStats beer_ppv={bar.current_ppv} beer_volume={bar.current_volume} />
        </div>

        <div className="col-[3/5] row-[1/2] flex flex-col flex-wrap items-end justify-start gap-2">
          <BarPills is_open={bar.is_open} is_happy_hour={bar.is_happy_hour} />
        </div>

        <div className={`col-[4/5] row-[2/4] mt-4 flex flex-col items-end justify-end`}>
          <BeerPriceCircle beer_ppv={bar.current_ppv} beer_price={bar.current_price} />
        </div>
      </Link>
    </>
  )
}
