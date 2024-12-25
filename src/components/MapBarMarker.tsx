import { ppvUpperThresholds } from '@/lib/priceThresholds'
import { Bar } from '@/models/Bar'
import { Marker } from '@vis.gl/react-maplibre'

interface MapBarMarkerProps {
  bar: Bar
  handleBarMarkerClick: (long: number, lat: number) => void
  singleBar?: Bar
}

export const MapBarMarker = ({ bar, handleBarMarkerClick }: MapBarMarkerProps) => {
  return (
    <Marker
      longitude={bar.long}
      latitude={bar.lat}
      anchor="bottom"
      onClick={() => {
        handleBarMarkerClick(bar.long, bar.lat)
      }}
    >
      <span
        className={`aspect-square rounded-full bg-green-price p-2 font-sans ${
          bar.current_ppv < ppvUpperThresholds.cheap
            ? 'bg-green-price'
            : bar.current_ppv < ppvUpperThresholds.average
              ? 'bg-yellow-price'
              : 'bg-red-price'
        }`}
      >
        {bar.beer_price} kr
      </span>
    </Marker>
  )
}
