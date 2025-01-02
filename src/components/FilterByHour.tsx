'use client'

interface FilterByHourProps {
  hour: string
  handleChange: (param: string, e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const FilterByHour = ({ hour, handleChange }: FilterByHourProps) => {
  return (
    <>
      <label htmlFor="time-select" className="font-medium">
        Klockan
      </label>
      <select
        id="time-select"
        name="time"
        onChange={e => {
          handleChange('hour', e)
        }}
        value={hour}
        className="mb-2"
      >
        <option value={'-1'}>Välj</option>
        <option value={''}>Nu</option>
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
        <option value={'24'}>00</option>
        <option value={'1'}>01</option>
        <option value={'2'}>02</option>
        <option value={'3'}>03</option>
        <option value={'4'}>04</option>
      </select>
    </>
  )
}
