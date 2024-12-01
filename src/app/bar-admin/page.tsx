import { insertBar } from '@/actions/formActions'
import { FormInput } from '@/components/form/FormInput'
import { FormLatLong } from '@/components/form/FormLatLong'
import { FormOpeningHours } from '@/components/form/FormOpeningHours'

export default async function Bars() {
  return (
    <form action={insertBar}>
      <FormInput label={'Venue Name'} name={'name'} text placeholder="Barnamn" required />

      <FormInput label={'Address'} name={'address'} text defaultValue="Hornsgatan " required />

      <FormInput
        label={'Postal Code'}
        name={'postal_code'}
        text
        numericInput
        defaultValue="118"
        required
      />

      <FormInput label={'City'} name={'city'} text defaultValue="Stockholm" required />

      <FormInput
        label={'Beer Volume (cl)'}
        name={'beer_volume'}
        text
        numericInput
        defaultValue="40"
        required
      />

      <FormInput
        label={'Beer Price (SEK)'}
        name={'beer_price'}
        text
        numericInput
        defaultValue="39"
        required
      />

      <FormLatLong />

      <FormOpeningHours />

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
              Volume (cl): <input type="number" name="happy_volume_1" defaultValue="40" />
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
              Volume (cl): <input type="number" name="happy_volume_2" defaultValue="40" />
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
              Volume (cl): <input type="number" name="happy_volume_3" defaultValue="40" />
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
              Volume (cl): <input type="number" name="happy_volume_4" defaultValue="40" />
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
              Volume (cl): <input type="number" name="happy_volume_5" defaultValue="40" />
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
              Volume (cl): <input type="number" name="happy_volume_6" defaultValue="40" />
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
              Volume (cl): <input type="number" name="happy_volume_7" defaultValue="40" />
              Price (SEK): <input type="number" name="happy_price_7" defaultValue="30" />
            </div>
          </div>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}
