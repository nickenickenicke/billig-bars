'use client'

import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { StateActionType } from '@/reducers/GlobalStateReducer'
import { useContext } from 'react'

export const FilterByHour = () => {
  const {
    globalState: { currentQuery },
    dispatch
  } = useContext(GlobalStateContext)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === '') {
      return dispatch({
        type: StateActionType.FILTERED_BY_HOUR,
        payload: e.target.value
      })
    }
    dispatch({
      type: StateActionType.FILTERED_BY_HOUR,
      payload: e.target.value
    })
  }

  const currentlySelectedHour = currentQuery.hour || 999

  return (
    <>
      <label htmlFor="time-select">Klockan</label>
      <select id="time-select" name="time" onChange={handleChange} value={currentlySelectedHour}>
        <option value={999}>Välj</option>
        <option value={11}>11</option>
        <option value={12}>12</option>
        <option value={13}>13</option>
        <option value={14}>14</option>
        <option value={15}>15</option>
        <option value={16}>16</option>
        <option value={17}>17</option>
        <option value={18}>18</option>
        <option value={19}>19</option>
        <option value={20}>20</option>
        <option value={21}>21</option>
        <option value={22}>22</option>
        <option value={23}>23</option>
        <option value={0}>00</option>
        <option value={1}>01</option>
        <option value={2}>02</option>
        <option value={3}>03</option>
        <option value={4}>04</option>
      </select>
    </>
  )
}
