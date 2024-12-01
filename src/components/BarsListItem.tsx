import { Bar } from '@/models/Bar'

interface BarsListItemProps {
  bar: Bar
}

export const BarsListItem = ({ bar }: BarsListItemProps) => {
  return (
    <li>
      <h2>{bar.name}</h2>
      <p>{bar.address}</p>
      <p>{bar.beer_price}</p>
    </li>
  )
}
