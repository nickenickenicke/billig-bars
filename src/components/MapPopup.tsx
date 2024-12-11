import { MapLocation } from '@/models/Location'
import { Popup } from '@vis.gl/react-maplibre'

interface MapPopupProps {
  popupLocation: MapLocation
  handleClosePopup: () => void
}

export const MapPopup = ({ popupLocation, handleClosePopup }: MapPopupProps) => {
  return (
    <Popup
      longitude={popupLocation.long}
      latitude={popupLocation.lat}
      closeOnClick={false}
      anchor="bottom"
      onClose={handleClosePopup}
    >
      Pop me bro
    </Popup>
  )
}
