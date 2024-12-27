import { weekdayNames } from '@/lib/weekdays'

interface FormOpeningHoursItemProps {
  day: number
  opens_at: string
  opens_at_min: string
  closes_at: string
  closes_at_min: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleClosed: () => void
}

export const FormOpeningHoursItem = ({
  day,
  opens_at,
  opens_at_min,
  closes_at,
  closes_at_min,
  handleChange,
  handleClosed
}: FormOpeningHoursItemProps) => {
  return (
    <div className="form-group mb-4">
      <h3 className="mb-2 text-lg font-medium">{`${weekdayNames[day - 1]}`}</h3>
      <div className="grid grid-cols-5 grid-rows-2 gap-x-2 gap-y-1">
        <label htmlFor={`opens_at_${day}`}>Öppnar kl</label>
        <input
          type="number"
          name={`opens_at_${day}`}
          id={`opens_at_${day}`}
          min="0"
          max="23"
          value={opens_at}
          onChange={handleChange}
        />
        <label className="justify-self-end" htmlFor={`opens_at_min_${day}`}>
          min
        </label>
        <input
          type="number"
          name={`opens_at_min_${day}`}
          id={`opens_at_min_${day}`}
          min="0"
          max="59"
          value={opens_at_min}
          onChange={handleChange}
        />
        <label htmlFor={`closes_at_${day}`}>Stänger kl</label>
        <input
          type="number"
          name={`closes_at_${day}`}
          id={`closes_at_${day}`}
          min="0"
          max="23"
          value={closes_at}
          onChange={handleChange}
        />
        <label className="justify-self-end" htmlFor={`closes_at_min_${day}`}>
          min
        </label>
        <input
          type="number"
          name={`closes_at_min_${day}`}
          id={`closes_at_min_${day}`}
          min="0"
          max="59"
          value={closes_at_min}
          onChange={handleChange}
        />
        <button className="col-start-5 row-span-2 row-start-1" type="button" onClick={handleClosed}>
          Stängt
        </button>
      </div>
    </div>
  )
}
