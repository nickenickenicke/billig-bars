import { weekdayNames } from '@/lib/weekdays'

interface FormHappyHourItemProps {
  day: number
  happy_starts_at: string
  happy_starts_at_min: string
  happy_ends_at: string
  happy_ends_at_min: string
  happy_volume: string
  happy_price: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleClearDay: () => void
}

export const FormHappyHourItem = ({
  day,
  happy_starts_at,
  happy_starts_at_min,
  happy_ends_at,
  happy_ends_at_min,
  happy_price,
  happy_volume,
  handleChange,
  handleClearDay
}: FormHappyHourItemProps) => {
  return (
    <div className="form-group">
      <h3>{`${weekdayNames[day - 1]} (Day ${day}) Happy Hour:`}</h3>
      <div className="grid grid-cols-6 grid-rows-3">
        <label htmlFor={`happy_starts_at_${day}`}>Starts at</label>
        <input
          type="number"
          name={`happy_starts_at_${day}`}
          id={`happy_starts_at_${day}`}
          min="0"
          max="23"
          className=""
          value={happy_starts_at}
          onChange={handleChange}
        />
        <label htmlFor={`happy_starts_at_min_${day}`}>min</label>
        <input
          type="number"
          name={`happy_starts_at_min_${day}`}
          id={`happy_starts_at_min_${day}`}
          min="0"
          max="59"
          className=""
          value={happy_starts_at_min}
          onChange={handleChange}
        />
        <label htmlFor={`happy_ends_at_${day}`}>Ends at</label>
        <input
          type="number"
          name={`happy_ends_at_${day}`}
          id={`happy_ends_at_${day}`}
          min="0"
          max="23"
          value={happy_ends_at}
          onChange={handleChange}
        />
        <label htmlFor={`happy_ends_at_min_${day}`}>min</label>
        <input
          type="number"
          name={`happy_ends_at_min_${day}`}
          id={`happy_ends_at_min_${day}`}
          min="0"
          max="59"
          className=""
          value={happy_ends_at_min}
          onChange={handleChange}
        />
        <label className="col-start-5 row-start-1" htmlFor={`happy_volume_${day}`}>
          Volume (cl)
        </label>
        <input
          className="col-start-6 row-start-1"
          type="number"
          name={`happy_volume_${day}`}
          id={`happy_volume_${day}`}
          value={happy_volume}
          onChange={handleChange}
        />
        <label htmlFor={`happy_price_${day}`}>Price (SEK)</label>
        <input
          type="number"
          name={`happy_price_${day}`}
          id={`happy_price_${day}`}
          value={happy_price}
          onChange={handleChange}
        />
        <button className="col-span-6" type="button" onClick={handleClearDay}>
          Clear
        </button>
      </div>
    </div>
  )
}
