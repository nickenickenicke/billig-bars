import { Bar } from '@/models/Bar'
import { getPricePerCl } from '@/utils/priceTools'
import { BarListItemOpeningHours } from './BarListItemOpeningHours'
import { BarListItemHappyHours } from './BarListItemHappyHours'
import { normalizePostalCode } from '@/utils/locationTools'
import { getCurrentHour, isHappyHour } from '@/utils/timeTools'

interface BarsListItemProps {
  bar: Bar
}

export const BarsListItem = ({ bar }: BarsListItemProps) => {
  return (
    <li className="border">
      <h2>{bar.name}</h2>
      {bar.happy_hours?.length && isHappyHour(bar.happy_hours) ? <span>HAPPY HOUR</span> : null}
      <address>
        {bar.address}
        <br />
        {normalizePostalCode(bar.postal_code)} {bar.city}
      </address>
      <p>{bar.beer_price} kr</p>
      <p>{bar.beer_volume} cl</p>
      <p>kr/cl: {getPricePerCl(bar.beer_price, bar.beer_volume)}kr</p>
      <BarListItemOpeningHours openingHours={bar.opening_hours} />
      {bar.happy_hours && <BarListItemHappyHours happyHours={bar.happy_hours} />}
    </li>
  )
}
