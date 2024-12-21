import { Bar } from '@/models/Bar'
import { BarHappyHours } from './BarHappyHours'
import { BarSubheading } from './BarSubheading'
import { BeerPriceCircle } from './BeerPriceCircle'
import { BeerStatsCircle } from './BeerStatsCircle'

interface BarPriceInformationProps {
  bar: Bar
}

export const BarPriceInformation = ({ bar }: BarPriceInformationProps) => {
  return (
    <>
      <BarSubheading className="mb-4">Prisinformation</BarSubheading>
      <h3 className="font-medium uppercase">Normalpris</h3>
      <ul className="flex basis-0 items-end justify-start gap-2">
        <li>
          <BeerPriceCircle beer_ppv={bar.beer_ppv} beer_price={bar.beer_price} small />
        </li>
        <li>
          <BeerStatsCircle beer_ppv={bar.beer_ppv} beer_volume={bar.beer_volume} displayVolume />
        </li>
        <li>
          <BeerStatsCircle beer_ppv={bar.beer_ppv} beer_volume={bar.beer_volume} displayPpv />
        </li>
      </ul>
      <BarHappyHours happyHours={bar.happy_hours ? bar.happy_hours : []} />
    </>
  )
}
