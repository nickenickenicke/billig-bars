import { Bar } from '@/models/Bar'
import { getPricePerCl } from '@/utils/priceTools'

interface BarsListItemProps {
  bar: Bar
}

export const BarsListItem = ({ bar }: BarsListItemProps) => {
  return (
    <li>
      <h2>{bar.name}</h2>
      <p>{bar.address}</p>
      <p>{bar.postal_code.toString().replace(/(.{3})/, '$1 ') + ' ' + bar.city}</p>
      <p>{bar.beer_price} kr</p>
      <p>{bar.beer_volume} cl</p>
      <p>Pris per cl: {getPricePerCl(bar.beer_price, bar.beer_volume)}kr</p>
    </li>
  )
}
