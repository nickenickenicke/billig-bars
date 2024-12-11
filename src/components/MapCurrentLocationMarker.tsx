import { CurrentLocation } from '@/models/Location'
import { Marker } from '@vis.gl/react-maplibre'

interface MapCurrentLocationMarkerProps {
  currentLocation: CurrentLocation
}

export const MapCurrentLocationMarker = ({ currentLocation }: MapCurrentLocationMarkerProps) => {
  return (
    <Marker
      key={'currentlocation'}
      longitude={currentLocation.currentlong}
      latitude={currentLocation.currentlat}
      anchor="bottom"
    >
      <span className="block aspect-square w-5 rounded-full bg-blue-500"></span>
    </Marker>
  )
}
