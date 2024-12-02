import { weekdayNames } from '@/lib/weekdays'

interface FormHappyHourItemProps {
  day: number
  happy_starts_at: string
  happy_ends_at: string
  happy_volume: string
  happy_price: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleClearDay: () => void
}

export const FormHappyHourItem = ({
  day,
  happy_starts_at,
  happy_ends_at,
  happy_price,
  happy_volume,
  handleChange,
  handleClearDay
}: FormHappyHourItemProps) => {
  return (
    <div className="form-group">
      <h3>{`${weekdayNames[day - 1]} (Day ${day}) Happy Hour:`}</h3>
      <div className="grid grid-cols-5 grid-rows-2">
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
        <button className="row-span-2" type="button" onClick={handleClearDay}>
          Clear
        </button>
        <label htmlFor={`happy_volume_${day}`}>Volume (cl)</label>
        <input
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
      </div>
    </div>
  )
}
