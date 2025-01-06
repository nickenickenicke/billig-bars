import { ppvUpperThresholds } from '@/lib/priceThresholds'
import { Bar } from '@/models/Bar'
import { Marker } from '@vis.gl/react-maplibre'

interface MapBarMarkerProps {
  bar: Bar
  handleBarMarkerClick: (long: number, lat: number) => void
  singleBar?: Bar
}

export const MapBarMarker = ({ bar, handleBarMarkerClick }: MapBarMarkerProps) => {
  const calculateZIndex = () => {
    if (bar.current_ppv < ppvUpperThresholds.cheap) {
      return '22'
    } else if (bar.current_ppv < ppvUpperThresholds.average) {
      return '21'
    } else {
      return '20'
    }
  }
  return (
    <Marker
      longitude={bar.long}
      latitude={bar.lat}
      anchor="bottom"
      onClick={() => {
        handleBarMarkerClick(bar.long, bar.lat)
      }}
      style={{ 'z-index': calculateZIndex() }}
    >
      <span
        className={`aspect-square rounded-full bg-green-price p-2 font-sans md:text-base ${
          bar.current_ppv < ppvUpperThresholds.cheap
            ? 'bg-green-price'
            : bar.current_ppv < ppvUpperThresholds.average
              ? 'bg-yellow-price'
              : 'bg-red-price'
        }`}
      >
        {bar.current_price} kr
      </span>
    </Marker>
  )
}
