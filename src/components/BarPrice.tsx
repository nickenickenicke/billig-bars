import { HappyHourPriceDetails, HappyHours } from '@/models/Bar'
import { getHappyHourPrice, getPricePerCl } from '@/utils/priceTools'

interface BarPriceProps {
  isHappyHour: boolean
  beer_price: number
  beer_volume: number
  beer_ppv: number
  happyHours: HappyHours[]
}

export const BarPrice = ({
  isHappyHour,
  happyHours,
  beer_price,
  beer_volume,
  beer_ppv
}: BarPriceProps) => {
  if (isHappyHour) {
    const happyHourPriceDetails: HappyHourPriceDetails = getHappyHourPrice(happyHours)
    return (
      <>
        <p>
          <span className="line-through">{beer_price}</span> {happyHourPriceDetails.price} kr
        </p>
        <p>{happyHourPriceDetails.volume} cl</p>
        <p>{happyHourPriceDetails.ppv} kr/cl</p>
      </>
    )
  }
  return (
    <>
      <p>{beer_price} kr</p>
      <p>{beer_volume} cl</p>
      <p>{beer_ppv} kr/cl</p>
    </>
  )
}
