import { Bar } from '@/models/Bar'
import { BarHappyHours } from './BarHappyHours'
import { Subheading } from './Subheading'
import { BeerPriceCircle } from './BeerPriceCircle'
import { BeerStatsCircle } from './BeerStatsCircle'

interface BarPriceInformationProps {
  bar: Bar
}

export const BarPriceInformation = ({ bar }: BarPriceInformationProps) => {
  return (
    <>
      <Subheading className="mb-6">Prisinformation</Subheading>
      <h3 className="mb-4 font-medium uppercase">Normalpris</h3>
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
