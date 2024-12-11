import { Bar } from '@/models/Bar'
import { Marker } from '@vis.gl/react-maplibre'

interface MapBarMarkerProps {
  bar: Bar
  handleBarMarkerClick: (long: number, lat: number) => void
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
      <span className="aspect-square rounded-full bg-green-price p-2">{bar.beer_price}</span>
    </Marker>
  )
}
