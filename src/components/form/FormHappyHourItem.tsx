interface HappyHourItemProps {
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
}: HappyHourItemProps) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  return (
    <div className="form-group">
      <label>{`${days[day - 1]} (Day ${day}) Happy Hour:`}</label>
      <div>
        Starts at:{' '}
        <input
          type="number"
          name={`happy_starts_at_${day}`}
          min="0"
          max="23"
          value={happy_starts_at}
          onChange={handleChange}
        />
        Ends at:{' '}
        <input
          type="number"
          name={`happy_ends_at_${day}`}
          min="0"
          max="23"
          value={happy_ends_at}
          onChange={handleChange}
        />
        Volume (cl):{' '}
        <input
          type="number"
          name={`happy_volume_${day}`}
          value={happy_volume}
          onChange={handleChange}
        />
        Price (SEK):{' '}
        <input
          type="number"
          name={`happy_price_${day}`}
          value={happy_price}
          onChange={handleChange}
        />
        <button type="button" onClick={handleClearDay}>
          Clear
        </button>
      </div>
    </div>
  )
}
