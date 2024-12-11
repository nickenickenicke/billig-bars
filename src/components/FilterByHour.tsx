'use client'

import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { useContext, useState } from 'react'

export const FilterByHour = () => {
  const {
    globalState: { currentQuery },
    dispatch
  } = useContext(GlobalStateContext)
  const [currentlySelectedHour, setCurrentlySelectedHour] = useState<string>(
    currentQuery.hour === null ? 'now' : currentQuery.hour.toString()
  )

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case 'now': {
        if (currentQuery.hour === null) break

        break
      }
      case '-1': {
        console.log('byter ingenting')
        break
      }
      default:
        console.log('byter till', e.target.value)
        break
    }
    setCurrentlySelectedHour(e.target.value)
  }

  return (
    <>
      <label htmlFor="time-select">Klockan</label>
      <select id="time-select" name="time" onChange={handleChange} value={currentlySelectedHour}>
        <option value={'-1'}>Välj</option>
        <option value={'now'}>Nu</option>
        <option value={'11'}>11</option>
        <option value={'12'}>12</option>
        <option value={'13'}>13</option>
        <option value={'14'}>14</option>
        <option value={'15'}>15</option>
        <option value={'16'}>16</option>
        <option value={'17'}>17</option>
        <option value={'18'}>18</option>
        <option value={'19'}>19</option>
        <option value={'20'}>20</option>
        <option value={'21'}>21</option>
        <option value={'22'}>22</option>
        <option value={'23'}>23</option>
        <option value={'0'}>00</option>
        <option value={'1'}>01</option>
        <option value={'2'}>02</option>
        <option value={'3'}>03</option>
        <option value={'4'}>04</option>
      </select>
    </>
  )
}
