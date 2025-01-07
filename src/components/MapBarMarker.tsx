import { ppvUpperThresholds } from '@/lib/priceThresholds'
import { Bar } from '@/models/Bar'
import { Marker } from '@vis.gl/react-maplibre'

interface MapBarMarkerProps {
  bar: Bar
  handleBarMarkerClick: (long: number, lat: number) => void
  singleBar?: Bar
  hideClosed?: boolean
}

export const MapBarMarker = ({ bar, handleBarMarkerClick, hideClosed }: MapBarMarkerProps) => {
  const calculateZIndex = () => {
    let zIndex = ''
    if (bar.is_open) {
      zIndex += '2'
    } else {
      zIndex += '1'
    }

    if (bar.current_ppv < ppvUpperThresholds.cheap) {
      zIndex += '3'
    } else if (bar.current_ppv < ppvUpperThresholds.average) {
      zIndex += '2'
    } else {
      zIndex += '1'
    }

    return zIndex
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
        } ${hideClosed && !bar.is_open ? 'hidden' : ''}`}
      >
        {bar.current_price} kr
      </span>
    </Marker>
  )
}
