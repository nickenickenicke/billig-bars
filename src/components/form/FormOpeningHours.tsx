'use client'

import { useState } from 'react'

export const FormOpeningHours = () => {
  const [openingHours, setOpeningHours] = useState({
    opens_at_1: '14',
    closes_at_1: '1',
    opens_at_2: '14',
    closes_at_2: '1',
    opens_at_3: '14',
    closes_at_3: '1',
    opens_at_4: '14',
    closes_at_4: '1',
    opens_at_5: '14',
    closes_at_5: '1',
    opens_at_6: '14',
    closes_at_6: '1',
    opens_at_7: '14',
    closes_at_7: '1'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setOpeningHours({ ...openingHours, [name]: value })
  }

  const handleClosed = (day: string) => {
    setOpeningHours({ ...openingHours, [`opens_at_${day}`]: '', [`closes_at_${day}`]: '' })
  }

  const useMondayValuesForAllDays = () => {
    setOpeningHours({
      opens_at_1: openingHours.opens_at_1,
      closes_at_1: openingHours.closes_at_1,
      opens_at_2: openingHours.opens_at_1,
      closes_at_2: openingHours.closes_at_1,
      opens_at_3: openingHours.opens_at_1,
      closes_at_3: openingHours.closes_at_1,
      opens_at_4: openingHours.opens_at_1,
      closes_at_4: openingHours.closes_at_1,
      opens_at_5: openingHours.opens_at_1,
      closes_at_5: openingHours.closes_at_1,
      opens_at_6: openingHours.opens_at_1,
      closes_at_6: openingHours.closes_at_1,
      opens_at_7: openingHours.opens_at_1,
      closes_at_7: openingHours.closes_at_1
    })
  }

  return (
    <div className="opening-hours bg-slate-300 py-4">
      <h3>Opening Hours</h3>
      <div id="opening-hours-container">
        <div className="form-group">
          <label>Monday (Day 1):</label>
          <div>
            Opens at:{' '}
            <input
              type="number"
              name="opens_at_1"
              min="0"
              max="23"
              value={openingHours.opens_at_1}
              onChange={handleChange}
            />
            Closes at:{' '}
            <input
              type="number"
              name="closes_at_1"
              min="0"
              max="23"
              value={openingHours.closes_at_1}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleClosed('1')}>
              Closed
            </button>
            <button type="button" onClick={useMondayValuesForAllDays}>
              Use these values for all days
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>Tuesday (Day 2):</label>
          <div>
            Opens at:{' '}
            <input
              type="number"
              name="opens_at_2"
              min="0"
              max="23"
              value={openingHours.opens_at_2}
              onChange={handleChange}
            />
            Closes at:{' '}
            <input
              type="number"
              name="closes_at_2"
              min="0"
              max="23"
              value={openingHours.closes_at_2}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleClosed('2')}>
              Closed
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>Wednesday (Day 3):</label>
          <div>
            Opens at:{' '}
            <input
              type="number"
              name="opens_at_3"
              min="0"
              max="23"
              value={openingHours.opens_at_3}
              onChange={handleChange}
            />
            Closes at:{' '}
            <input
              type="number"
              name="closes_at_3"
              min="0"
              max="23"
              value={openingHours.closes_at_3}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleClosed('3')}>
              Closed
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>Thursday (Day 4):</label>
          <div>
            Opens at:{' '}
            <input
              type="number"
              name="opens_at_4"
              min="0"
              max="23"
              value={openingHours.opens_at_4}
              onChange={handleChange}
            />
            Closes at:{' '}
            <input
              type="number"
              name="closes_at_4"
              min="0"
              max="23"
              value={openingHours.closes_at_4}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleClosed('4')}>
              Closed
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>Friday (Day 5):</label>
          <div>
            Opens at:{' '}
            <input
              type="number"
              name="opens_at_5"
              min="0"
              max="23"
              value={openingHours.opens_at_5}
              onChange={handleChange}
            />
            Closes at:{' '}
            <input
              type="number"
              name="closes_at_5"
              min="0"
              max="23"
              value={openingHours.closes_at_5}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleClosed('5')}>
              Closed
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>Saturday (Day 6):</label>
          <div>
            Opens at:{' '}
            <input
              type="number"
              name="opens_at_6"
              min="0"
              max="23"
              value={openingHours.opens_at_6}
              onChange={handleChange}
            />
            Closes at:{' '}
            <input
              type="number"
              name="closes_at_6"
              min="0"
              max="23"
              value={openingHours.closes_at_6}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleClosed('6')}>
              Closed
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>Sunday (Day 7):</label>
          <div>
            Opens at:{' '}
            <input
              type="number"
              name="opens_at_7"
              min="0"
              max="23"
              value={openingHours.opens_at_7}
              onChange={handleChange}
            />
            Closes at:{' '}
            <input
              type="number"
              name="closes_at_7"
              min="0"
              max="23"
              value={openingHours.closes_at_7}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleClosed('7')}>
              Closed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
