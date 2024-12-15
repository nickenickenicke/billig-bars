import { Bar } from '@/models/Bar'
import { normalizeMeters } from '@/utils/locationTools'
import { BarCardPill } from './BarCardPill'
import Link from 'next/link'
import { CurrentLocation } from '@/models/Location'
import { getClosingHour, normalizeTimeFromDB } from '@/utils/timeTools'
import { ppvUpperThresholds } from '@/lib/priceThresholds'

interface BarCardProps {
  bar: Bar
  currentLocation?: CurrentLocation
}

export const BarCard = ({ bar, currentLocation }: BarCardProps) => {
  return (
    <>
      <section className="">
        <Link
          href={`/bars/${bar.id}${currentLocation ? `?currentlat=${currentLocation.currentlat}&currentlong=${currentLocation.currentlong}` : ''}`}
          className="grid grid-cols-[1fr_1fr_auto_100px] grid-rows-[1fr_auto_50px] justify-between rounded-none border-b border-b-gray-900 bg-white px-2 py-5"
        >
          {/* old left div */}
          <div className="col-[1/3] row-[1/3]">
            <h3 className="text-2xl font-medium">{bar.name}</h3>
            {bar.dist_meters && bar.dist_meters != -1 ? (
              <span className="block">{normalizeMeters(bar.dist_meters)}</span>
            ) : null}
            <address className="block not-italic">{bar.address}</address>
            <span className="block">
              {bar.is_open ? 'Öppet till ' + getClosingHour(bar.opening_hours) : 'Stängt'}
            </span>
          </div>

          <div className="col-[1/4] row-[3/4] flex flex-row-reverse gap-2 pr-2">
            <div
              className={`flex aspect-square w-[50px] items-center justify-center rounded-full border ${
                bar.beer_ppv < ppvUpperThresholds.cheap
                  ? 'border-green-price'
                  : bar.beer_ppv < ppvUpperThresholds.average
                    ? 'border-yellow-price'
                    : 'border-red-price'
              }`}
            >
              <div className="flex flex-col items-center justify-center text-xs text-black">
                <span className="">{bar.beer_volume} cl</span>
              </div>
            </div>
            <div
              className={`flex aspect-square w-[50px] items-center justify-center rounded-full border ${
                bar.beer_ppv < ppvUpperThresholds.cheap
                  ? 'border-green-price'
                  : bar.beer_ppv < ppvUpperThresholds.average
                    ? 'border-yellow-price'
                    : 'border-red-price'
              }`}
            >
              <div className="flex flex-col items-center justify-center text-xs text-black">
                <span className="">{bar.beer_ppv.toFixed(2)}</span>
                <span className="">kr/cl</span>
              </div>
            </div>
          </div>

          <div className="col-[3/5] row-[1/2] flex flex-col flex-wrap items-end justify-start gap-2">
            {bar.beer_price === 39 && (
              <>
                <BarCardPill>Billigast</BarCardPill> <BarCardPill>Happy hour</BarCardPill>
              </>
            )}{' '}
            {bar.is_happy_hour && <BarCardPill>HAPPY HOUR</BarCardPill>}
          </div>
          <div className={`col-[4/5] row-[2/4] mt-4 flex flex-col items-end justify-end`}>
            <div
              className={`flex h-[100px] w-[100px] -rotate-[10deg] flex-col items-center justify-center place-self-end self-end rounded-full text-black ${
                bar.beer_ppv < ppvUpperThresholds.cheap
                  ? 'bg-green-price'
                  : bar.beer_ppv < ppvUpperThresholds.average
                    ? 'bg-yellow-price'
                    : 'bg-red-price'
              }`}
            >
              <span className="font-price text-5xl tracking-tighter">
                {bar.beer_price}
                <span className="inline-block -translate-y-[0.33rem]">:</span>-
              </span>
            </div>
          </div>
        </Link>
      </section>
    </>
  )
}
