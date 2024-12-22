import { ppvUpperThresholds } from '@/lib/priceThresholds'
import { Bar } from '@/models/Bar'
import { CurrentLocation } from '@/models/Location'
import { normalizeMeters } from '@/utils/locationTools'
import { getClosingHour, getOpeningHour } from '@/utils/timeTools'
import { Popup } from '@vis.gl/react-maplibre'
import Link from 'next/link'
import { BeerPriceCircle } from './BeerPriceCircle'

interface MapPopupProps {
  bar: Bar
  currentLocation: CurrentLocation
  handleClosePopup: () => void
  singleBar?: boolean
}

export const MapPopup = ({ bar, currentLocation, handleClosePopup, singleBar }: MapPopupProps) => {
  return (
    <Popup
      longitude={bar.long}
      latitude={bar.lat}
      closeOnClick={false}
      anchor="bottom"
      onClose={handleClosePopup}
      offset={30}
      className="overflow-x-hidden font-sans"
      closeButton={singleBar ? false : true}
    >
      <Link
        className="col-[1/3] row-[1/2] pt-1 text-lg font-medium focus-within:outline-none"
        href={`/bars/${bar.id}${currentLocation.currentlat !== 0 ? `?currentlat=${currentLocation.currentlat}&currentlong=${currentLocation.currentlong}` : ''}`}
      >
        {bar.name}
      </Link>
      <div className="col-[1/2] row-[2/3] pr-4 text-sm font-normal leading-5">
        <span className="block">{bar.address}</span>
        {bar.dist_meters && bar.dist_meters != -1 ? (
          <span className="block">{normalizeMeters(bar.dist_meters)}</span>
        ) : null}
        <span className="block">
          {bar.is_open
            ? 'Öppet till ' + getClosingHour(bar.opening_hours)
            : getOpeningHour(bar.opens_at)}
        </span>

        {!singleBar && (
          <Link
            className="mt-1 block underline"
            href={`/bars/${bar.id}${currentLocation.currentlat !== 0 ? `?currentlat=${currentLocation.currentlat}&currentlong=${currentLocation.currentlong}` : ''}`}
          >
            Mer information
          </Link>
        )}
      </div>
      <div className="col-[2/4] row-[2/3] place-self-end pr-1">
        <BeerPriceCircle beer_ppv={bar.current_ppv} beer_price={bar.current_price} small />
        <span className="block text-center">{bar.beer_volume} cl</span>
      </div>
    </Popup>
  )
}
