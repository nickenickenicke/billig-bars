import { Bar } from '@/models/Bar'
import { BarListItemOpeningHours } from './BarListItemOpeningHours'
import { BarListItemHappyHours } from './BarListItemHappyHours'
import { normalizePostalCode } from '@/utils/locationTools'
import { checkIsHappyHour } from '@/utils/timeTools'
import { BarListItemPrice } from './BarListItemPrice'

interface BarsListItemProps {
  bar: Bar
}

export const BarsListItem = ({ bar }: BarsListItemProps) => {
  let isHappyHour = false
  if (bar.happy_hours) isHappyHour = checkIsHappyHour(bar.happy_hours)

  return (
    <li className="border">
      <h2>{bar.name}</h2>
      {isHappyHour && <span>HAPPY HOUR</span>}
      <address>
        {bar.address}
        <br />
        {normalizePostalCode(bar.postal_code)} {bar.city}
      </address>
      <BarListItemPrice
        isHappyHour={isHappyHour}
        beer_price={bar.beer_price}
        beer_volume={bar.beer_volume}
        happyHours={bar.happy_hours || []}
      />
      <BarListItemOpeningHours openingHours={bar.opening_hours} />
      {bar.happy_hours && <BarListItemHappyHours happyHours={bar.happy_hours} />}
    </li>
  )
}
