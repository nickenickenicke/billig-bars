import { useContext } from 'react'
import { BarsContext } from '../contexts/BarsContext'
import { getBarsByLocation } from '../actions/getBars'
import { CurrentLocation } from '@/models/Location'
import { BarActionType } from '../reducers/BarReducer'

export const GeolocateButton = () => {
  const { dispatch } = useContext(BarsContext)

  const getBarsAndDispatch = async (location: CurrentLocation) => {
    const newBars = await getBarsByLocation(location)
    dispatch({
      type: BarActionType.UPDATED,
      payload: JSON.stringify(newBars)
    })
  }

  const handleClick = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        const currentPosition: CurrentLocation = {
          currentlat: position.coords.latitude,
          currentlong: position.coords.longitude
        }
        getBarsAndDispatch(currentPosition)
      },
      error => {
        console.error(error)
      }
    )
  }

  return (
    <button type="button" onClick={handleClick}>
      Geolocate me!
    </button>
  )
}
