import { Bar } from '@/models/Bar'
import { normalizeMeters } from '@/utils/locationTools'
import { getPricePerCl } from '@/utils/priceTools'
import { BarCardPill } from './BarCardPill'
import Link from 'next/link'
import { CurrentLocation } from '@/models/Location'
import { checkIsOpen, getClosingHour, normalizeTimeFromDB } from '@/utils/timeTools'

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
          className="flex justify-between rounded-sm bg-slate-300 p-2"
        >
          <div className="flex flex-1 flex-col">
            <div>
              <h3 className="text-xl">{bar.name}</h3>
              {bar.dist_meters && bar.dist_meters != -1 ? (
                <span className="block">{normalizeMeters(bar.dist_meters)}</span>
              ) : null}
              <address className="block">{bar.address}</address>
              <span>
                {bar.is_open
                  ? 'Öppet till ' + normalizeTimeFromDB(getClosingHour(bar.opening_hours))
                  : 'Stängt'}
              </span>
            </div>
            <div className="flex flex-row-reverse gap-2 pr-2">
              <div className="flex aspect-square w-[50px] items-center justify-center rounded-full bg-yellow-500">
                <div className="flex flex-col items-center justify-center text-white">
                  <span className="">{bar.beer_volume}</span>
                  <span className="text-sm">CL</span>
                </div>
              </div>
              <div className="flex aspect-square w-[50px] items-center justify-center rounded-full bg-yellow-500">
                <div className="flex flex-col items-center justify-center text-white">
                  <span className="">{getPricePerCl(bar.beer_price, bar.beer_volume)}</span>
                  <span className="text-sm">kr/cl</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <aside>{bar.beer_price === 39 && <BarCardPill>Billigast</BarCardPill>}</aside>
            <div className="flex aspect-square w-[100px] items-center justify-center rounded-full bg-green-price">
              <div className="flex flex-col items-center justify-center text-white">
                <span className="text-5xl">{bar.beer_price}</span>
                <span className="text-sm leading-3">KR</span>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </>
  )
}
