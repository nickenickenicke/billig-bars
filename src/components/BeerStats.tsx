import { BeerStatsCircle } from './BeerStatsCircle'

interface BeerStatsProps {
  beer_volume: number
  beer_ppv: number
}

export const BeerStats = ({ beer_ppv, beer_volume }: BeerStatsProps) => {
  return (
    <>
      <BeerStatsCircle beer_ppv={beer_ppv} beer_volume={beer_volume} displayVolume />
      <BeerStatsCircle beer_ppv={beer_ppv} beer_volume={beer_volume} displayPpv />
    </>
  )
}
