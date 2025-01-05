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
  handleHourFocus: (event: React.FocusEvent<HTMLInputElement>) => void
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
  handleHourFocus,
  handleClearDay
}: FormHappyHourItemProps) => {
  return (
    <div className="form-group mb-6">
      <div className="grid grid-cols-6 grid-rows-3 gap-x-2 gap-y-1">
        <h3 className="col-[1/3] row-[1/2] text-lg font-medium">{`${weekdayNames[day - 1]}`}</h3>
        <button className="col-[3/7] row-[1/2]" type="button" onClick={handleClearDay}>
          Rensa dagen
        </button>
        <label htmlFor={`happy_starts_at_${day}`}>Startar kl</label>
        <input
          type="number"
          name={`happy_starts_at_${day}`}
          id={`happy_starts_at_${day}`}
          min="0"
          max="23"
          className=""
          value={happy_starts_at}
          onChange={handleChange}
          onFocus={handleHourFocus}
        />
        <label htmlFor={`happy_starts_at_min_${day}`} className="justify-self-end pr-2">
          min
        </label>
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
        <label htmlFor={`happy_ends_at_${day}`}>Slutar kl</label>
        <input
          type="number"
          name={`happy_ends_at_${day}`}
          id={`happy_ends_at_${day}`}
          min="0"
          max="23"
          value={happy_ends_at}
          onChange={handleChange}
        />
        <label htmlFor={`happy_ends_at_min_${day}`} className="justify-self-end pr-2">
          min
        </label>
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
        <label className="col-start-5 row-start-2" htmlFor={`happy_volume_${day}`}>
          Volym (cl)
        </label>
        <input
          className="col-start-6 row-start-2"
          type="number"
          name={`happy_volume_${day}`}
          id={`happy_volume_${day}`}
          value={happy_volume}
          onChange={handleChange}
        />
        <label htmlFor={`happy_price_${day}`}>Pris (SEK)</label>
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
