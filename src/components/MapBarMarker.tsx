import { Bar } from '@/models/Bar'
import { Marker } from '@vis.gl/react-maplibre'

interface MapBarMarkerProps {
  bar: Bar
  handleBarMarkerClick: (long: number, lat: number) => void
}

export const MapBarMarker = ({ bar, handleBarMarkerClick }: MapBarMarkerProps) => {
  console.log(bar.name)

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
        className={`aspect-square rounded-full bg-green-price p-2 ${
          bar.beer_ppv < 1.125
            ? 'bg-green-price'
            : bar.beer_ppv < 1.5
              ? 'bg-yellow-price'
              : 'bg-red-price'
        }`}
      >
        {bar.beer_price}
      </span>
    </Marker>
  )
}
