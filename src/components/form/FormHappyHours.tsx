'use client'

import { useState } from 'react'

export const FormHappyHours = () => {
  const [happyHours, setHappyHours] = useState({
    happy_starts_at_1: '',
    happy_ends_at_1: '',
    happy_volume_1: '',
    happy_price_1: '',
    happy_starts_at_2: '',
    happy_ends_at_2: '',
    happy_volume_2: '',
    happy_price_2: '',
    happy_starts_at_3: '',
    happy_ends_at_3: '',
    happy_volume_3: '',
    happy_price_3: '',
    happy_starts_at_4: '',
    happy_ends_at_4: '',
    happy_volume_4: '',
    happy_price_4: '',
    happy_starts_at_5: '',
    happy_ends_at_5: '',
    happy_volume_5: '',
    happy_price_5: '',
    happy_starts_at_6: '',
    happy_ends_at_6: '',
    happy_volume_6: '',
    happy_price_6: '',
    happy_starts_at_7: '',
    happy_ends_at_7: '',
    happy_volume_7: '',
    happy_price_7: ''
  })
  const [hasHappyHours, setHasHappyHours] = useState(false)

  const toggleHappyHours = () => {
    setHasHappyHours(!hasHappyHours)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setHappyHours({ ...happyHours, [name]: value })
  }

  const handleClearDay = (day: string) => {
    setHappyHours({
      ...happyHours,
      [`happy_starts_at_${day}`]: '',
      [`happy_ends_at_${day}`]: '',
      [`happy_volume_${day}`]: '',
      [`happy_price_${day}`]: ''
    })
  }

  const useMondayValuesForAllDays = () => {
    setHappyHours({
      ...happyHours,
      happy_starts_at_2: happyHours.happy_starts_at_1,
      happy_ends_at_2: happyHours.happy_ends_at_1,
      happy_volume_2: happyHours.happy_volume_1,
      happy_price_2: happyHours.happy_price_1,
      happy_starts_at_3: happyHours.happy_starts_at_1,
      happy_ends_at_3: happyHours.happy_ends_at_1,
      happy_volume_3: happyHours.happy_volume_1,
      happy_price_3: happyHours.happy_price_1,
      happy_starts_at_4: happyHours.happy_starts_at_1,
      happy_ends_at_4: happyHours.happy_ends_at_1,
      happy_volume_4: happyHours.happy_volume_1,
      happy_price_4: happyHours.happy_price_1,
      happy_starts_at_5: happyHours.happy_starts_at_1,
      happy_ends_at_5: happyHours.happy_ends_at_1,
      happy_volume_5: happyHours.happy_volume_1,
      happy_price_5: happyHours.happy_price_1,
      happy_starts_at_6: happyHours.happy_starts_at_1,
      happy_ends_at_6: happyHours.happy_ends_at_1,
      happy_volume_6: happyHours.happy_volume_1,
      happy_price_6: happyHours.happy_price_1,
      happy_starts_at_7: happyHours.happy_starts_at_1,
      happy_ends_at_7: happyHours.happy_ends_at_1,
      happy_volume_7: happyHours.happy_volume_1,
      happy_price_7: happyHours.happy_price_1
    })
  }

  return (
    <div className="happy-hours bg-yellow-100 py-4">
      <h3>Happy Hours</h3>
      <button type="button" onClick={toggleHappyHours}>
        Show happy hours
      </button>
      {hasHappyHours && (
        <>
          <div className="form-group">
            <label>Monday (Day 1) Happy Hour:</label>
            <div>
              Starts at:{' '}
              <input
                type="number"
                name="happy_starts_at_1"
                min="0"
                max="23"
                value={happyHours.happy_starts_at_1}
                onChange={handleChange}
              />
              Ends at:{' '}
              <input
                type="number"
                name="happy_ends_at_1"
                min="0"
                max="23"
                value={happyHours.happy_ends_at_1}
                onChange={handleChange}
              />
              Volume (cl):{' '}
              <input
                type="number"
                name="happy_volume_1"
                value={happyHours.happy_volume_1}
                onChange={handleChange}
              />
              Price (SEK):{' '}
              <input
                type="number"
                name="happy_price_1"
                value={happyHours.happy_price_1}
                onChange={handleChange}
              />
              <button type="button" onClick={() => handleClearDay('1')}>
                Clear
              </button>
              <button type="button" onClick={useMondayValuesForAllDays}>
                Use these values for all days
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Tuesday (Day 2) Happy Hour:</label>
            <div>
              Starts at:{' '}
              <input
                type="number"
                name="happy_starts_at_2"
                min="0"
                max="23"
                value={happyHours.happy_starts_at_2}
                onChange={handleChange}
              />
              Ends at:{' '}
              <input
                type="number"
                name="happy_ends_at_2"
                min="0"
                max="23"
                value={happyHours.happy_ends_at_2}
                onChange={handleChange}
              />
              Volume (cl):{' '}
              <input
                type="number"
                name="happy_volume_2"
                value={happyHours.happy_volume_2}
                onChange={handleChange}
              />
              Price (SEK):{' '}
              <input
                type="number"
                name="happy_price_2"
                value={happyHours.happy_price_2}
                onChange={handleChange}
              />
              <button type="button" onClick={() => handleClearDay('2')}>
                Clear
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Wednesday (Day 3) Happy Hour:</label>
            <div>
              Starts at:{' '}
              <input
                type="number"
                name="happy_starts_at_3"
                min="0"
                max="23"
                value={happyHours.happy_starts_at_3}
                onChange={handleChange}
              />
              Ends at:{' '}
              <input
                type="number"
                name="happy_ends_at_3"
                min="0"
                max="23"
                value={happyHours.happy_ends_at_3}
                onChange={handleChange}
              />
              Volume (cl):{' '}
              <input
                type="number"
                name="happy_volume_3"
                value={happyHours.happy_volume_3}
                onChange={handleChange}
              />
              Price (SEK):{' '}
              <input
                type="number"
                name="happy_price_3"
                value={happyHours.happy_price_3}
                onChange={handleChange}
              />
              <button type="button" onClick={() => handleClearDay('3')}>
                Clear
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Thursday (Day 4) Happy Hour:</label>
            <div>
              Starts at:{' '}
              <input
                type="number"
                name="happy_starts_at_4"
                min="0"
                max="23"
                value={happyHours.happy_starts_at_4}
                onChange={handleChange}
              />
              Ends at:{' '}
              <input
                type="number"
                name="happy_ends_at_4"
                min="0"
                max="23"
                value={happyHours.happy_ends_at_4}
                onChange={handleChange}
              />
              Volume (cl):{' '}
              <input
                type="number"
                name="happy_volume_4"
                value={happyHours.happy_volume_4}
                onChange={handleChange}
              />
              Price (SEK):{' '}
              <input
                type="number"
                name="happy_price_4"
                value={happyHours.happy_price_4}
                onChange={handleChange}
              />
              <button type="button" onClick={() => handleClearDay('4')}>
                Clear
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Friday (Day 5) Happy Hour:</label>
            <div>
              Starts at:{' '}
              <input
                type="number"
                name="happy_starts_at_5"
                min="0"
                max="23"
                value={happyHours.happy_starts_at_5}
                onChange={handleChange}
              />
              Ends at:{' '}
              <input
                type="number"
                name="happy_ends_at_5"
                min="0"
                max="23"
                value={happyHours.happy_ends_at_5}
                onChange={handleChange}
              />
              Volume (cl):{' '}
              <input
                type="number"
                name="happy_volume_5"
                value={happyHours.happy_volume_5}
                onChange={handleChange}
              />
              Price (SEK):{' '}
              <input
                type="number"
                name="happy_price_5"
                value={happyHours.happy_price_5}
                onChange={handleChange}
              />
              <button type="button" onClick={() => handleClearDay('5')}>
                Clear
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Saturday (Day 6) Happy Hour:</label>
            <div>
              Starts at:{' '}
              <input
                type="number"
                name="happy_starts_at_6"
                min="0"
                max="23"
                value={happyHours.happy_starts_at_6}
                onChange={handleChange}
              />
              Ends at:{' '}
              <input
                type="number"
                name="happy_ends_at_6"
                min="0"
                max="23"
                value={happyHours.happy_ends_at_6}
                onChange={handleChange}
              />
              Volume (cl):{' '}
              <input
                type="number"
                name="happy_volume_6"
                value={happyHours.happy_volume_6}
                onChange={handleChange}
              />
              Price (SEK):{' '}
              <input
                type="number"
                name="happy_price_6"
                value={happyHours.happy_price_6}
                onChange={handleChange}
              />
              <button type="button" onClick={() => handleClearDay('6')}>
                Clear
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Sunday (Day 7) Happy Hour:</label>
            <div>
              Starts at:{' '}
              <input
                type="number"
                name="happy_starts_at_7"
                min="0"
                max="23"
                value={happyHours.happy_starts_at_7}
                onChange={handleChange}
              />
              Ends at:{' '}
              <input
                type="number"
                name="happy_ends_at_7"
                min="0"
                max="23"
                value={happyHours.happy_ends_at_7}
                onChange={handleChange}
              />
              Volume (cl):{' '}
              <input
                type="number"
                name="happy_volume_7"
                value={happyHours.happy_volume_7}
                onChange={handleChange}
              />
              Price (SEK):{' '}
              <input
                type="number"
                name="happy_price_7"
                value={happyHours.happy_price_7}
                onChange={handleChange}
              />
              <button type="button" onClick={() => handleClearDay('7')}>
                Clear
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
