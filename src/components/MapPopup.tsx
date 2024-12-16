import { Bar } from '@/models/Bar'
import { CurrentLocation } from '@/models/Location'
import { getClosingHour } from '@/utils/timeTools'
import { Popup } from '@vis.gl/react-maplibre'
import Link from 'next/link'

interface MapPopupProps {
  bar: Bar
  currentLocation: CurrentLocation
  handleClosePopup: () => void
}

export const MapPopup = ({ bar, currentLocation, handleClosePopup }: MapPopupProps) => {
  return (
    <Popup
      longitude={bar.long}
      latitude={bar.lat}
      closeOnClick={false}
      anchor="bottom"
      onClose={handleClosePopup}
      offset={30}
      className="overflow-x-hidden font-sans"
    >
      <Link
        className="col-[1/2] row-[1/2] pt-1 text-lg"
        href={`/bars/${bar.id}${currentLocation.currentlat !== 0 ? `?currentlat=${currentLocation.currentlat}&currentlong=${currentLocation.currentlong}` : ''}`}
      >
        {bar.name}
      </Link>
      <div className="col-[1/3] row-[2/3] pr-4">
        <span className="block">
          {bar.beer_price}kr, {bar.beer_volume}cl
        </span>
        <span className="block">
          {bar.is_open ? 'Öppet till ' + getClosingHour(bar.opening_hours) : 'Stängt'}
        </span>
        <Link
          className="block"
          href={`/bars/${bar.id}${currentLocation.currentlat !== 0 ? `?currentlat=${currentLocation.currentlat}&currentlong=${currentLocation.currentlong}` : ''}`}
        >
          Mer information *pil*
        </Link>
      </div>
    </Popup>
  )
}
