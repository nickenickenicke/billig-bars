import { insertBar } from '@/actions/formActions'

export default async function Bars() {
  return (
    <form action={insertBar}>
      <div className="form-group">
        <label htmlFor="name">Venue Name:</label>
        <input type="text" id="name" name="name" defaultValue="Amici Nostri" required />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" defaultValue="Ringvägen 104" required />
      </div>

      <div className="form-group">
        <label htmlFor="postal_code">Postal Code:</label>
        <input type="number" id="postal_code" name="postal_code" defaultValue="11661" required />
      </div>

      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" defaultValue="Stockholm" required />
      </div>

      <div className="form-group">
        <label htmlFor="beer_volume">Beer Volume (ml):</label>
        <input type="number" id="beer_volume" name="beer_volume" defaultValue="40" required />
      </div>

      <div className="form-group">
        <label htmlFor="beer_price">Beer Price (SEK):</label>
        <input type="number" id="beer_price" name="beer_price" defaultValue="45" required />
      </div>

      <div className="form-group">
        <label htmlFor="longitude">Longitude:</label>
        <input
          type="number"
          id="longitude"
          name="longitude"
          step="0.0000001"
          defaultValue="18.0771446228027"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="latitude">Latitude:</label>
        <input
          type="number"
          id="latitude"
          name="latitude"
          step="0.0000001"
          defaultValue="59.3076553344727"
          required
        />
      </div>

      <div className="opening-hours">
        <h3>Opening Hours</h3>
        <div id="opening-hours-container">
          <div className="form-group">
            <label>Monday (Day 1):</label>
            <div>
              Opens at: <input type="number" name="opens_at_1" min="0" max="23" defaultValue="14" />
              Closes at:{' '}
              <input type="number" name="closes_at_1" min="0" max="23" defaultValue="1" />
            </div>
          </div>
          <div className="form-group">
            <label>Tuesday (Day 2):</label>
            <div>
              Opens at: <input type="number" name="opens_at_2" min="0" max="23" defaultValue="14" />
              Closes at:{' '}
              <input type="number" name="closes_at_2" min="0" max="23" defaultValue="1" />
            </div>
          </div>
          <div className="form-group">
            <label>Wednesday (Day 3):</label>
            <div>
              Opens at: <input type="number" name="opens_at_3" min="0" max="23" defaultValue="14" />
              Closes at:{' '}
              <input type="number" name="closes_at_3" min="0" max="23" defaultValue="3" />
            </div>
          </div>
          <div className="form-group">
            <label>Thursday (Day 4):</label>
            <div>
              Opens at: <input type="number" name="opens_at_4" min="0" max="23" defaultValue="14" />
              Closes at:{' '}
              <input type="number" name="closes_at_4" min="0" max="23" defaultValue="1" />
            </div>
          </div>
          <div className="form-group">
            <label>Friday (Day 5):</label>
            <div>
              Opens at: <input type="number" name="opens_at_5" min="0" max="23" defaultValue="14" />
              Closes at:{' '}
              <input type="number" name="closes_at_5" min="0" max="23" defaultValue="3" />
            </div>
          </div>
          <div className="form-group">
            <label>Saturday (Day 6):</label>
            <div>
              Opens at: <input type="number" name="opens_at_6" min="0" max="23" defaultValue="14" />
              Closes at:{' '}
              <input type="number" name="closes_at_6" min="0" max="23" defaultValue="3" />
            </div>
          </div>
          <div className="form-group">
            <label>Sunday (Day 7):</label>
            <div>
              Opens at: <input type="number" name="opens_at_7" min="0" max="23" defaultValue="14" />
              Closes at:{' '}
              <input type="number" name="closes_at_7" min="0" max="23" defaultValue="1" />
            </div>
          </div>
        </div>
      </div>

      <div className="happy-hours">
        <h3>Happy Hours</h3>
        <div id="happy-hours-container">
          <div className="form-group">
            <label>Monday (Day 1) Happy Hour:</label>
            <div>
              Starts at:{' '}
              <input type="number" name="happy_starts_at_1" min="0" max="23" defaultValue="14" />
              Ends at:{' '}
              <input type="number" name="happy_ends_at_1" min="0" max="23" defaultValue="1" />
              Volume (ml): <input type="number" name="happy_volume_1" defaultValue="40" />
              Price (SEK): <input type="number" name="happy_price_1" defaultValue="30" />
            </div>
          </div>
          <div className="form-group">
            <label>Tuesday (Day 2) Happy Hour:</label>
            <div>
              Starts at:{' '}
              <input type="number" name="happy_starts_at_2" min="0" max="23" defaultValue="14" />
              Ends at:{' '}
              <input type="number" name="happy_ends_at_2" min="0" max="23" defaultValue="1" />
              Volume (ml): <input type="number" name="happy_volume_2" defaultValue="40" />
              Price (SEK): <input type="number" name="happy_price_2" defaultValue="30" />
            </div>
          </div>
          <div className="form-group">
            <label>Wednesday (Day 3) Happy Hour:</label>
            <div>
              Starts at:{' '}
              <input type="number" name="happy_starts_at_3" min="0" max="23" defaultValue="14" />
              Ends at:{' '}
              <input type="number" name="happy_ends_at_3" min="0" max="23" defaultValue="3" />
              Volume (ml): <input type="number" name="happy_volume_3" defaultValue="40" />
              Price (SEK): <input type="number" name="happy_price_3" defaultValue="30" />
            </div>
          </div>
          <div className="form-group">
            <label>Thursday (Day 4) Happy Hour:</label>
            <div>
              Starts at:{' '}
              <input type="number" name="happy_starts_at_4" min="0" max="23" defaultValue="14" />
              Ends at:{' '}
              <input type="number" name="happy_ends_at_4" min="0" max="23" defaultValue="1" />
              Volume (ml): <input type="number" name="happy_volume_4" defaultValue="40" />
              Price (SEK): <input type="number" name="happy_price_4" defaultValue="30" />
            </div>
          </div>
          <div className="form-group">
            <label>Friday (Day 5) Happy Hour:</label>
            <div>
              Starts at:{' '}
              <input type="number" name="happy_starts_at_5" min="0" max="23" defaultValue="14" />
              Ends at:{' '}
              <input type="number" name="happy_ends_at_5" min="0" max="23" defaultValue="3" />
              Volume (ml): <input type="number" name="happy_volume_5" defaultValue="40" />
              Price (SEK): <input type="number" name="happy_price_5" defaultValue="30" />
            </div>
          </div>
          <div className="form-group">
            <label>Saturday (Day 6) Happy Hour:</label>
            <div>
              Starts at:{' '}
              <input type="number" name="happy_starts_at_6" min="0" max="23" defaultValue="14" />
              Ends at:{' '}
              <input type="number" name="happy_ends_at_6" min="0" max="23" defaultValue="3" />
              Volume (ml): <input type="number" name="happy_volume_6" defaultValue="40" />
              Price (SEK): <input type="number" name="happy_price_6" defaultValue="30" />
            </div>
          </div>
          <div className="form-group">
            <label>Sunday (Day 7) Happy Hour:</label>
            <div>
              Starts at:{' '}
              <input type="number" name="happy_starts_at_7" min="0" max="23" defaultValue="14" />
              Ends at:{' '}
              <input type="number" name="happy_ends_at_7" min="0" max="23" defaultValue="1" />
              Volume (ml): <input type="number" name="happy_volume_7" defaultValue="40" />
              Price (SEK): <input type="number" name="happy_price_7" defaultValue="30" />
            </div>
          </div>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}
