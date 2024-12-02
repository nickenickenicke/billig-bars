import { weekdayNames } from '@/lib/weekdays'

interface FormOpeningHoursItemProps {
  day: number
  opens_at: string
  closes_at: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleClosed: () => void
}

export const FormOpeningHoursItem = ({
  day,
  opens_at,
  closes_at,
  handleChange,
  handleClosed
}: FormOpeningHoursItemProps) => {
  return (
    <div className="form-group">
      <h3>{`${weekdayNames[day - 1]} (Day ${day}):`}</h3>
      <div>
        <label htmlFor={`opens_at_${day}`}>Opens at</label>
        <input
          type="number"
          name={`opens_at_${day}`}
          id={`opens_at_${day}`}
          min="0"
          max="23"
          value={opens_at}
          onChange={handleChange}
        />
        <label htmlFor={`closes_at_${day}`}>Closes at</label>
        <input
          type="number"
          name={`closes_at_${day}`}
          id={`closes_at_${day}`}
          min="0"
          max="23"
          value={closes_at}
          onChange={handleChange}
        />
        <button type="button" onClick={handleClosed}>
          Closed
        </button>
      </div>
    </div>
  )
}
